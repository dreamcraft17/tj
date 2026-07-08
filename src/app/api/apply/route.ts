import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/contact/rate-limit";
import { addApplicant, getJob, putFile } from "@/lib/careers/store";
import { sendApplicantEmails } from "@/lib/careers/email";
import { CV_TYPES, MAX_CV_BYTES, isEmail, isIndonesiaPhone } from "@/lib/careers/validate";

const applyHits = new Map<string, number>();
const DAY_MS = 24 * 60 * 60 * 1000;

function tooSoon(key: string): boolean {
  const now = Date.now();
  const last = applyHits.get(key);
  if (last && now - last < DAY_MS) return true;
  applyHits.set(key, now);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const jobPostingId = String(form.get("jobPostingId") ?? "").trim();
    const job = getJob(jobPostingId);
    if (!job || job.status !== "published") {
      return NextResponse.json({ success: false, error: "Lowongan tidak tersedia." }, { status: 400 });
    }
    const ip = getClientIp(req.headers.get("x-forwarded-for"));
    if (tooSoon(`${ip}:${jobPostingId}`)) {
      return NextResponse.json({ success: false, error: "Anda sudah apply untuk posisi ini. Coba lagi besok." }, { status: 429 });
    }

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const linkedin = String(form.get("linkedin") ?? "").trim();
    const availability = String(form.get("availability") ?? "ASAP") as "ASAP" | "2 weeks" | "1 month";
    const coverLetter = String(form.get("coverLetter") ?? "").trim();
    const consent = String(form.get("consent") ?? "");
    const cv = form.get("cv");

    if (name.length < 2) return NextResponse.json({ success: false, error: "Nama wajib diisi." }, { status: 400 });
    if (!isEmail(email)) return NextResponse.json({ success: false, error: "Email tidak valid." }, { status: 400 });
    if (!isIndonesiaPhone(phone)) return NextResponse.json({ success: false, error: "Nomor telepon tidak valid." }, { status: 400 });
    if (consent !== "yes") return NextResponse.json({ success: false, error: "Persetujuan privasi wajib dicentang." }, { status: 400 });
    if (!(cv instanceof File) || cv.size === 0) return NextResponse.json({ success: false, error: "CV wajib diunggah." }, { status: 400 });
    if (!CV_TYPES.has(cv.type)) return NextResponse.json({ success: false, error: "Only PDF and DOCX accepted" }, { status: 400 });
    if (cv.size > MAX_CV_BYTES) return NextResponse.json({ success: false, error: "File exceeds 5MB" }, { status: 413 });

    const bytes = Buffer.from(await cv.arrayBuffer());
    const fileId = crypto.randomUUID();
    const safeName = cv.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
    const storedName = `${fileId}_${Date.now()}_${safeName}`;
    putFile(fileId, { filename: storedName, contentType: cv.type, bytes });

    const applicant = addApplicant({
      name,
      email,
      phone,
      linkedin: linkedin || undefined,
      jobPostingId,
      positionTitle: job.title,
      availability: ["ASAP", "2 weeks", "1 month"].includes(availability) ? availability : "ASAP",
      coverLetter: coverLetter || undefined,
      cv: {
        filename: storedName,
        contentType: cv.type,
        size: cv.size,
        url: `/api/applicants/${fileId}/cv`,
      },
    });

    const sent = await sendApplicantEmails(applicant);
    if (!sent.ok) {
      return NextResponse.json({ success: false, error: sent.error }, { status: 503 });
    }
    return NextResponse.json({
      success: true,
      applicantId: applicant.id,
      message: "Terima kasih! Kami akan menghubungi Anda dalam 7 hari.",
      ...(sent.dev ? { dev: true } : {}),
    });
  } catch (error) {
    console.error("[apply] POST error:", error);
    return NextResponse.json({ success: false, error: "Terjadi kesalahan server." }, { status: 500 });
  }
}
