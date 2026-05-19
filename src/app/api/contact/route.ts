import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/contact/rate-limit";
import { verifyRecaptchaToken } from "@/lib/contact/recaptcha";
import { sendContactEmails } from "@/lib/contact/send-contact-email";
import { validateContactBody } from "@/lib/contact/validate";

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req.headers.get("x-forwarded-for"));

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Coba lagi dalam satu menit." },
        { status: 429 },
      );
    }

    const body: unknown = await req.json();
    const validated = validateContactBody(body);

    if (!validated.ok) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const recaptcha = await verifyRecaptchaToken(validated.data.token);
    if (!recaptcha.ok) {
      return NextResponse.json({ error: recaptcha.error }, { status: 400 });
    }

    const sent = await sendContactEmails(validated.data);
    if (!sent.ok) {
      return NextResponse.json({ error: sent.error }, { status: 503 });
    }

    return NextResponse.json({
      success: true,
      message: "Permintaan berhasil dikirim.",
      ...(sent.dev ? { dev: true } : {}),
    });
  } catch (error) {
    console.error("[contact] POST error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Coba lagi." },
      { status: 500 },
    );
  }
}
