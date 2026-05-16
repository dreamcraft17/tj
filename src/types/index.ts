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
