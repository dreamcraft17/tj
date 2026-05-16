export type Locale = "id" | "en";

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
  isPlaceholder?: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  category: string;
  publishedAt: string;
  readTime: string;
}

export interface TrustIndicator {
  id: string;
  label: string;
  labelEn?: string;
  value: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
