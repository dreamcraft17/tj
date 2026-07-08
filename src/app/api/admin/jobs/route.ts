import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { listJobs, upsertJob } from "@/lib/careers/store";

function lines(value: FormDataEntryValue | null): string[] {
  return String(value ?? "").split("\n").map((item) => item.trim()).filter(Boolean);
}

export async function GET(req: Request) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ success: true, data: listJobs() });
}

export async function POST(req: Request) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
    const form = await req.formData();
    upsertJob({
      title: String(form.get("title") ?? "").trim(),
      level: String(form.get("level") ?? "Mid") as never,
      department: String(form.get("department") ?? "").trim() || undefined,
      location: String(form.get("location") ?? "Jakarta Timur").trim(),
      summary: String(form.get("summary") ?? "").trim(),
      description: String(form.get("description") ?? "").trim(),
      requiredSkills: lines(form.get("requiredSkills")),
      responsibilities: lines(form.get("responsibilities")),
      benefits: lines(form.get("benefits")),
      status: String(form.get("status") ?? "draft") as never,
    });
    return NextResponse.redirect(new URL("/admin/jobs", req.url));
  }
  const body = (await req.json()) as { title?: string };
  if (!body.title) return NextResponse.json({ success: false, error: "Title required" }, { status: 400 });
  return NextResponse.json({ success: true, data: upsertJob(body as never) }, { status: 201 });
}
