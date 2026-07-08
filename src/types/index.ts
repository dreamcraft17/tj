export type Locale = "id" | "en";

export type InsightStatus = "editorial-draft" | "coming-soon";

export interface NavItem {
  label: string;
  href: string;
  labelEn?: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
  scope: string;
  clientNeeds: string;
  legalOutput: string;
}

export interface CoreValue {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  titleEn?: string;
  credentials?: string;
  bio: string;
  bioEn?: string;
}

export interface TeamRoleSlot {
  id: string;
  role: string;
  roleEn?: string;
  description: string;
  descriptionEn?: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  category: string;
  status: InsightStatus;
  readTime: string;
}

export interface TrustIndicator {
  id: string;
  label: string;
  labelEn?: string;
  value: string;
}

export interface TrustCommitment {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}

export interface CredibilityPillar {
  id: string;
  title: string;
  description: string;
}

export interface FounderCredibility {
  education: string[];
  experience: string[];
  practiceFocus: string[];
  professionalActivities: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EditorialSection {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
}

export interface ApproachPillar {
  id: string;
  title: string;
  description: string;
}

export interface WhyTrustedJuristPillar {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
}

export type JobLevel = "Junior" | "Mid" | "Senior" | "Lead";
export type JobStatus = "draft" | "published" | "closed";
export type ApplicantStatus = "new" | "review" | "interview" | "offer" | "reject";
export type LeadStatus = "new" | "viewed" | "contacted" | "archived";

export interface CareerJob {
  id: string;
  title: string;
  level: JobLevel;
  department?: string;
  location: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  niceToHave?: string[];
  compensation?: string;
  benefits: string[];
  deadline?: string;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
}

export interface ContactLeadRecord extends ContactFormData {
  id: string;
  status: LeadStatus;
  formVariant: string;
  ipAddress: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  auditTrail: Array<{ action: string; at: string; by: string }>;
}

export interface JobApplicantRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  linkedin?: string;
  jobPostingId: string;
  positionTitle: string;
  availability: "ASAP" | "2 weeks" | "1 month";
  coverLetter?: string;
  status: ApplicantStatus;
  notes?: string;
  cv: {
    filename: string;
    contentType: string;
    size: number;
    url: string;
  };
  createdAt: string;
  updatedAt: string;
  statusHistory: Array<{ status: ApplicantStatus; at: string; by: string; notes?: string }>;
}
