import { Resend } from "resend";
import { CONTACT_CONFIG } from "@/lib/data";
import { escapeHtml } from "@/lib/contact/sanitize";
import type { JobApplicantRecord } from "@/types";

function resend() {
  return process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
}

function fromAddress() {
  return process.env.RESEND_FROM_EMAIL ?? "Trusted Jurist <onboarding@resend.dev>";
}

export async function sendApplicantEmails(applicant: JobApplicantRecord): Promise<{ ok: true; dev?: boolean } | { ok: false; error: string }> {
  const client = resend();
  if (!client) {
    if (process.env.NODE_ENV === "development") {
      console.info("[careers] Dev mode - application email skipped:", applicant.email);
      return { ok: true, dev: true };
    }
    return { ok: false, error: "Layanan email belum dikonfigurasi." };
  }

  const privacyUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://trustedjurist.co.id"}/privacy`;
  const userHtml = `
    <h2>Lamaran diterima</h2>
    <p>Terima kasih, ${escapeHtml(applicant.name)}. Kami telah menerima lamaran Anda untuk posisi <strong>${escapeHtml(applicant.positionTitle)}</strong>.</p>
    <p>Tim Trusted Jurist akan meninjau berkas dan menghubungi kandidat yang sesuai dalam 7 hari kerja.</p>
    <p><a href="${privacyUrl}">Kebijakan privasi</a></p>
  `;
  const adminHtml = `
    <h2>Lamaran baru</h2>
    <ul>
      <li><strong>Nama:</strong> ${escapeHtml(applicant.name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(applicant.email)}</li>
      <li><strong>Telepon:</strong> ${escapeHtml(applicant.phone)}</li>
      <li><strong>Posisi:</strong> ${escapeHtml(applicant.positionTitle)}</li>
      <li><strong>Ketersediaan:</strong> ${escapeHtml(applicant.availability)}</li>
      <li><strong>CV:</strong> ${escapeHtml(applicant.cv.filename)}</li>
    </ul>
  `;

  const user = await client.emails.send({
    from: fromAddress(),
    to: applicant.email,
    subject: `Lamaran diterima - ${applicant.positionTitle}`,
    html: userHtml,
    text: `Lamaran Anda untuk ${applicant.positionTitle} telah diterima. Kami akan menghubungi kandidat yang sesuai dalam 7 hari kerja.`,
  });
  if (user.error) return { ok: false, error: "Gagal mengirim konfirmasi lamaran." };

  await client.emails.send({
    from: fromAddress(),
    to: process.env.ADMIN_EMAIL ?? CONTACT_CONFIG.email,
    replyTo: applicant.email,
    subject: `[Applicant] ${applicant.positionTitle} - ${applicant.name}`,
    html: adminHtml,
  });

  return { ok: true };
}
