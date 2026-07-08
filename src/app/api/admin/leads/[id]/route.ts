import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { patchLead } from "@/lib/careers/store";
import { leadStatuses } from "@/lib/careers/validate";

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const { id } = await ctx.params;
  const body = (await req.json()) as { status?: string; notes?: string };
  if (body.status && !leadStatuses.includes(body.status as never)) {
    return NextResponse.json({ success: false, error: "Invalid status" }, { status: 400 });
  }
  const lead = patchLead(id, { status: body.status as never, notes: body.notes });
  if (!lead) return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, data: lead });
}
