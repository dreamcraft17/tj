import { Resend } from "resend";
import { CONTACT_CONFIG } from "@/lib/data";
import { escapeHtml } from "@/lib/contact/sanitize";
import type { ContactPayload } from "@/lib/contact/validate";

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

function getFromAddress(): string {
  return (
    process.env.RESEND_FROM_EMAIL ??
    `Trusted Jurist <onboarding@resend.dev>`
  );
}

function getAdminEmail(): string {
  return process.env.ADMIN_EMAIL ?? CONTACT_CONFIG.email;
}

function buildAdminHtml(data: ContactPayload): string {
  const phone = data.phone || "Tidak diberikan";
  return `
    <h2>Lead baru dari website</h2>
    <ul>
      <li><strong>Nama:</strong> ${escapeHtml(data.name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>Telepon:</strong> ${escapeHtml(phone)}</li>
      <li><strong>Subjek:</strong> ${escapeHtml(data.subject)}</li>
    </ul>
    <p><strong>Pesan:</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;
}

function buildUserHtml(data: ContactPayload): string {
  return `
    <h2>Terima kasih, ${escapeHtml(data.name)}</h2>
    <p>Kami telah menerima permintaan Anda tentang <strong>${escapeHtml(data.subject)}</strong>.</p>
    <p>Tim Trusted Jurist akan menghubungi Anda melalui kontak yang dicantumkan — biasanya dalam satu hari kerja pada jam operasional firma.</p>
    <p>Salam,<br /><strong>Trusted Jurist Law Firm</strong></p>
  `;
}

export async function sendContactEmails(
  data: ContactPayload,
): Promise<{ ok: true; dev?: boolean } | { ok: false; error: string }> {
  const resend = getResend();

  if (!resend) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Dev mode — email tidak dikirim:", data);
      return { ok: true, dev: true };
    }
    return { ok: false, error: "Layanan email belum dikonfigurasi." };
  }

  const from = getFromAddress();
  const adminEmail = getAdminEmail();

  const userResult = await resend.emails.send({
    from,
    to: data.email,
    subject: "Terima kasih atas pertanyaan Anda — Trusted Jurist",
    html: buildUserHtml(data),
  });

  if (userResult.error) {
    console.error("[contact] User email failed:", userResult.error);
    return { ok: false, error: "Gagal mengirim konfirmasi email." };
  }

  const adminResult = await resend.emails.send({
    from,
    to: adminEmail,
    replyTo: data.email,
    subject: `[Lead] ${data.name} — ${data.subject}`,
    html: buildAdminHtml(data),
  });

  if (adminResult.error) {
    console.error("[contact] Admin email failed:", adminResult.error);
  }

  return { ok: true };
}
