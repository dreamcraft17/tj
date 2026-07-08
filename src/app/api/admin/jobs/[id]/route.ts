import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { patchJob } from "@/lib/careers/store";

export async function POST(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const form = await req.formData();
  patchJob(id, { status: String(form.get("status") ?? "draft") as never });
  return NextResponse.redirect(new URL("/admin/jobs", req.url));
}

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const body = await req.json();
  const job = patchJob(id, body);
  if (!job) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, data: job });
}
