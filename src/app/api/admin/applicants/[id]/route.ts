import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { patchApplicant } from "@/lib/careers/store";
import { applicantStatuses } from "@/lib/careers/validate";

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const body = (await req.json()) as { status?: string; notes?: string };
  if (body.status && !applicantStatuses.includes(body.status as never)) {
    return NextResponse.json({ success: false, error: "Invalid status" }, { status: 400 });
  }
  const applicant = patchApplicant(id, { status: body.status as never, notes: body.notes });
  if (!applicant) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, data: applicant });
}
