import type { ApplicantStatus, JobLevel, JobStatus, LeadStatus } from "@/types";

export const jobLevels: JobLevel[] = ["Junior", "Mid", "Senior", "Lead"];
export const jobStatuses: JobStatus[] = ["draft", "published", "closed"];
export const applicantStatuses: ApplicantStatus[] = ["new", "review", "interview", "offer", "reject"];
export const leadStatuses: LeadStatus[] = ["new", "viewed", "contacted", "archived"];

export const MAX_CV_BYTES = 5 * 1024 * 1024;
export const CV_TYPES = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isIndonesiaPhone(value: string): boolean {
  return /^(\+?62|0)[0-9]{8,15}$/.test(value.replace(/[\s-]/g, ""));
}

export function csvEscape(value: unknown): string {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}
