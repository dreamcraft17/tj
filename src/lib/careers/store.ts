import type {
  ApplicantStatus,
  CareerJob,
  ContactLeadRecord,
  JobApplicantRecord,
  JobStatus,
  LeadStatus,
} from "@/types";
import { initialJobs } from "@/lib/careers/jobs";

type StoredFile = {
  filename: string;
  contentType: string;
  bytes: Buffer;
};

type Store = {
  jobs: CareerJob[];
  leads: ContactLeadRecord[];
  applicants: JobApplicantRecord[];
  files: Map<string, StoredFile>;
};

const globalStore = globalThis as typeof globalThis & { __tjCareersStore?: Store };

function cloneJobs(): CareerJob[] {
  return initialJobs.map((job) => ({ ...job, responsibilities: [...job.responsibilities], requiredSkills: [...job.requiredSkills], niceToHave: job.niceToHave ? [...job.niceToHave] : undefined, benefits: [...job.benefits] }));
}

export function getStore(): Store {
  if (!globalStore.__tjCareersStore) {
    globalStore.__tjCareersStore = {
      jobs: cloneJobs(),
      leads: [],
      applicants: [],
      files: new Map(),
    };
  }
  return globalStore.__tjCareersStore;
}

export function listJobs(status?: JobStatus): CareerJob[] {
  const jobs = getStore().jobs;
  return status ? jobs.filter((job) => job.status === status) : [...jobs];
}

export function getJob(jobId: string): CareerJob | null {
  return getStore().jobs.find((job) => job.id === jobId) ?? null;
}

export function upsertJob(input: Partial<CareerJob> & { title: string }): CareerJob {
  const store = getStore();
  const now = new Date().toISOString();
  const id =
    input.id ??
    input.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);
  const existing = store.jobs.find((job) => job.id === id);
  const next: CareerJob = {
    id,
    title: input.title,
    level: input.level ?? "Mid",
    department: input.department,
    location: input.location ?? "Jakarta Timur",
    summary: input.summary ?? input.description?.slice(0, 140) ?? "Lowongan Trusted Jurist.",
    description: input.description ?? "",
    responsibilities: input.responsibilities ?? [],
    requiredSkills: input.requiredSkills ?? [],
    niceToHave: input.niceToHave,
    compensation: input.compensation,
    benefits: input.benefits ?? [],
    deadline: input.deadline,
    status: input.status ?? "draft",
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  if (existing) {
    store.jobs = store.jobs.map((job) => (job.id === id ? next : job));
  } else {
    store.jobs.unshift(next);
  }
  return next;
}

export function patchJob(id: string, input: Partial<CareerJob>): CareerJob | null {
  const current = getJob(id);
  if (!current) return null;
  const next = { ...current, ...input, id, updatedAt: new Date().toISOString() };
  getStore().jobs = getStore().jobs.map((job) => (job.id === id ? next : job));
  return next;
}

export function addLead(input: Omit<ContactLeadRecord, "id" | "status" | "createdAt" | "updatedAt" | "auditTrail">): ContactLeadRecord {
  const now = new Date().toISOString();
  const lead: ContactLeadRecord = {
    ...input,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: now,
    updatedAt: now,
    auditTrail: [{ action: "created", at: now, by: "system" }],
  };
  getStore().leads.unshift(lead);
  return lead;
}

export function patchLead(id: string, input: { status?: LeadStatus; notes?: string }, by = "admin"): ContactLeadRecord | null {
  const store = getStore();
  const current = store.leads.find((lead) => lead.id === id);
  if (!current) return null;
  const now = new Date().toISOString();
  const next: ContactLeadRecord = {
    ...current,
    status: input.status ?? current.status,
    notes: input.notes ?? current.notes,
    updatedAt: now,
    auditTrail: [...current.auditTrail, { action: `status:${input.status ?? current.status}`, at: now, by }],
  };
  store.leads = store.leads.map((lead) => (lead.id === id ? next : lead));
  return next;
}

export function addApplicant(input: Omit<JobApplicantRecord, "id" | "status" | "createdAt" | "updatedAt" | "statusHistory">): JobApplicantRecord {
  const now = new Date().toISOString();
  const applicant: JobApplicantRecord = {
    ...input,
    id: crypto.randomUUID(),
    status: "new",
    createdAt: now,
    updatedAt: now,
    statusHistory: [{ status: "new", at: now, by: "system" }],
  };
  getStore().applicants.unshift(applicant);
  return applicant;
}

export function patchApplicant(id: string, input: { status?: ApplicantStatus; notes?: string }, by = "admin"): JobApplicantRecord | null {
  const store = getStore();
  const current = store.applicants.find((applicant) => applicant.id === id);
  if (!current) return null;
  const now = new Date().toISOString();
  const status = input.status ?? current.status;
  const next: JobApplicantRecord = {
    ...current,
    status,
    notes: input.notes ?? current.notes,
    updatedAt: now,
    statusHistory: [...current.statusHistory, { status, at: now, by, notes: input.notes }],
  };
  store.applicants = store.applicants.map((applicant) => (applicant.id === id ? next : applicant));
  return next;
}

export function putFile(id: string, file: StoredFile): void {
  getStore().files.set(id, file);
}

export function getFile(id: string): StoredFile | null {
  return getStore().files.get(id) ?? null;
}

export function getAnalytics() {
  const store = getStore();
  const now = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
  const createdAfter = (date: string, min: number) => new Date(date).getTime() >= min;
  const jobBreakdown = Object.fromEntries(
    store.jobs.map((job) => {
      const apps = store.applicants.filter((applicant) => applicant.jobPostingId === job.id);
      return [
        job.id,
        {
          title: job.title,
          total: apps.length,
          new: apps.filter((applicant) => applicant.status === "new").length,
          review: apps.filter((applicant) => applicant.status === "review").length,
          interview: apps.filter((applicant) => applicant.status === "interview").length,
          offer: apps.filter((applicant) => applicant.status === "offer").length,
          reject: apps.filter((applicant) => applicant.status === "reject").length,
        },
      ];
    }),
  );
  return {
    thisWeek: {
      formSubmissions: store.leads.filter((lead) => createdAfter(lead.createdAt, weekAgo)).length,
      jobApplications: store.applicants.filter((applicant) => createdAfter(applicant.createdAt, weekAgo)).length,
    },
    thisMonth: {
      formSubmissions: store.leads.filter((lead) => createdAfter(lead.createdAt, monthAgo)).length,
      jobApplications: store.applicants.filter((applicant) => createdAfter(applicant.createdAt, monthAgo)).length,
    },
    totals: {
      leads: store.leads.length,
      applicants: store.applicants.length,
      jobs: store.jobs.length,
    },
    jobBreakdown,
  };
}
