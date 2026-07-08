import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createAdminSession, validateAdminCredentials } from "@/lib/admin/auth";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email?: string; password?: string };
    const email = String(body.email ?? "");
    const password = String(body.password ?? "");
    if (!validateAdminCredentials(email, password)) {
      return NextResponse.json({ success: false, error: "Email atau password salah." }, { status: 401 });
    }
    const res = NextResponse.json({ success: true });
    res.cookies.set(ADMIN_SESSION_COOKIE, createAdminSession(email), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 24 * 60 * 60,
    });
    return res;
  } catch {
    return NextResponse.json({ success: false, error: "Request tidak valid." }, { status: 400 });
  }
}
