const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5;

export async function verifyRecaptchaToken(
  token: string | undefined,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "development") {
      return { ok: true };
    }
    return { ok: false, error: "Verifikasi keamanan tidak dikonfigurasi." };
  }

  if (!token) {
    return { ok: false, error: "Verifikasi keamanan diperlukan." };
  }

  const response = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });

  const data = (await response.json()) as {
    success?: boolean;
    score?: number;
    "error-codes"?: string[];
  };

  if (!data.success) {
    return { ok: false, error: "Verifikasi reCAPTCHA gagal." };
  }

  if (typeof data.score === "number" && data.score < MIN_SCORE) {
    return { ok: false, error: "Permintaan ditolak oleh sistem keamanan." };
  }

  return { ok: true };
}
