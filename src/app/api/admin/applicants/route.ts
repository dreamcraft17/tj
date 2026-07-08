import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin/auth";
import { getStore } from "@/lib/careers/store";

export async function GET(req: Request) {
  if (!getAdminSessionFromRequest(req)) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const jobPostingId = url.searchParams.get("jobPostingId");
  const applicants = getStore().applicants.filter((applicant) => {
    if (status && applicant.status !== status) return false;
    if (jobPostingId && applicant.jobPostingId !== jobPostingId) return false;
    return true;
  });
  return NextResponse.json({ success: true, data: applicants, total: applicants.length });
}
