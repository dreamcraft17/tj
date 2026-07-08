import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { getStore } from "@/lib/careers/store";

export async function GET(req: Request) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ success: true, data: getStore().leads, total: getStore().leads.length });
}
