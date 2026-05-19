export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  token?: string;
};

const LIMITS = {
  name: 200,
  email: 254,
  phone: 40,
  subject: 120,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactBody(
  body: unknown,
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Data tidak valid." };
  }

  const raw = body as Record<string, unknown>;
  const name = String(raw.name ?? "").trim();
  const email = String(raw.email ?? "").trim();
  const phone = String(raw.phone ?? "").trim();
  const subject = String(raw.subject ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const token =
    typeof raw.token === "string" && raw.token.length > 0
      ? raw.token
      : undefined;

  if (!name) return { ok: false, error: "Nama wajib diisi." };
  if (name.length > LIMITS.name) {
    return { ok: false, error: "Nama terlalu panjang." };
  }
  if (!email) return { ok: false, error: "Email wajib diisi." };
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    return { ok: false, error: "Format email tidak valid." };
  }
  if (!subject) return { ok: false, error: "Subjek wajib dipilih." };
  if (subject.length > LIMITS.subject) {
    return { ok: false, error: "Subjek terlalu panjang." };
  }
  if (!message) return { ok: false, error: "Pesan wajib diisi." };
  if (message.length > LIMITS.message) {
    return { ok: false, error: "Pesan melebihi batas 5000 karakter." };
  }
  if (phone.length > LIMITS.phone) {
    return { ok: false, error: "Nomor telepon terlalu panjang." };
  }

  return {
    ok: true,
    data: { name, email, phone, subject, message, token },
  };
}
