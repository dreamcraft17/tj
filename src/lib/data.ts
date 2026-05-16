import type {
  CoreValue,
  InsightArticle,
  NavItem,
  PracticeArea,
  TeamMember,
  TrustIndicator,
} from "@/types";

export const navigation: NavItem[] = [
  { label: "Beranda", href: "/", labelEn: "Home" },
  { label: "Tentang Kami", href: "/about", labelEn: "About" },
  { label: "Bidang Praktik", href: "/practice-areas", labelEn: "Practice Areas" },
  { label: "Tim", href: "/team", labelEn: "Team" },
  { label: "Wawasan", href: "/insights", labelEn: "Insights" },
  { label: "Kontak", href: "/contact", labelEn: "Contact" },
];

export const trustIndicators: TrustIndicator[] = [
  {
    id: "launch",
    label: "Diluncurkan Resmi",
    labelEn: "Official Launch",
    value: "26 Juni 2025",
  },
  {
    id: "location",
    label: "Kantor Pusat",
    labelEn: "Head Office",
    value: "Sunter, Jakarta Timur",
  },
  {
    id: "focus",
    label: "Fokus Utama",
    labelEn: "Core Focus",
    value: "Reformasi Hukum & Antikorupsi",
  },
  {
    id: "approach",
    label: "Pendekatan",
    labelEn: "Approach",
    value: "Integritas Tanpa Pandang Bulu",
  },
];

export const aboutPreview = {
  title: "Mitra Hukum yang Berpihak pada Keadilan",
  titleEn: "A Legal Partner Committed to Justice",
  description:
    "Trusted Jurist Law Firm resmi beroperasi sejak 26 Juni 2025 di Jakarta, dipimpin oleh Dr. Andin Sofyanoor, SH., MH. Kami hadir untuk mendampingi klien dalam persoalan hukum publik, korporasi, dan penegakan hukum dengan standar profesionalisme tertinggi.",
  descriptionEn:
    "Trusted Jurist Law Firm has operated from Jakarta since 26 June 2025, led by Dr. Andin Sofyanoor, SH., MH. We support clients in public law, corporate matters, and law enforcement with the highest professional standards.",
};

export const firmProfile = {
  title: "Profil Firma",
  paragraphs: [
    "Trusted Jurist Law Firm adalah firma hukum Indonesia yang didirikan dengan komitmen kuat terhadap integritas, keadilan, dan reformasi sistem hukum nasional. Berbasis di kawasan Sunter, Jakarta Timur, firma ini melayani kebutuhan hukum strategis bagi individu, korporasi, dan institusi yang memerlukan advokasi tegas dan berlandaskan hukum.",
    "Sejak peluncuran resmi pada 26 Juni 2025, Trusted Jurist membangun reputasi melalui pendekatan analitis, transparansi proses, dan dedikasi pada penegakan hukum tanpa pandang bulu — termasuk dalam isu antikorupsi, sektor pertambangan, perkebunan, penyelundupan, serta regulasi publik dan korporasi.",
  ],
};

export const vision = {
  title: "Visi",
  content:
    "Menjadi firma hukum terpercaya yang mendorong terciptanya ekosistem hukum Indonesia yang adil, akuntabel, dan berpihak pada kepentingan publik serta kepatuhan hukum yang berkelanjutan.",
  contentEn:
    "To be a trusted law firm that advances a fair, accountable Indonesian legal ecosystem aligned with public interest and sustainable compliance.",
};

export const mission = {
  title: "Misi",
  items: [
    "Memberikan layanan hukum berkualitas tinggi dengan integritas dan profesionalisme.",
    "Mendukung agenda reformasi hukum, antikorupsi, dan penegakan hukum yang konsisten.",
    "Menjadi mitra strategis klien dalam litigasi, regulasi, dan advisory korporasi.",
    "Mengedepankan transparansi, etika profesi, dan tanggung jawab kepada masyarakat.",
  ],
  itemsEn: [
    "Deliver high-quality legal services with integrity and professionalism.",
    "Support law reform, anti-corruption, and consistent law enforcement agendas.",
    "Serve as a strategic partner in litigation, regulation, and corporate advisory.",
    "Uphold transparency, professional ethics, and accountability to society.",
  ],
};

export const coreValues: CoreValue[] = [
  {
    id: "integrity",
    title: "Integritas",
    titleEn: "Integrity",
    description:
      "Setiap langkah advokasi kami berlandaskan etika profesi dan kejujuran tanpa kompromi.",
    descriptionEn:
      "Every step of our advocacy is grounded in professional ethics and uncompromising honesty.",
    icon: "Shield",
  },
  {
    id: "justice",
    title: "Keadilan",
    titleEn: "Justice",
    description:
      "Kami berpihak pada prinsip keadilan dan kepentingan hukum yang substantif, bukan sekadar formalitas.",
    descriptionEn:
      "We stand for substantive justice and the rule of law, not mere formalities.",
    icon: "Scale",
  },
  {
    id: "courage",
    title: "Keberanian",
    titleEn: "Courage",
    description:
      "Bersedia mengambil posisi tegas dalam isu sensitif demi penegakan hukum yang benar.",
    descriptionEn:
      "We take firm positions on sensitive matters in pursuit of proper law enforcement.",
    icon: "Gavel",
  },
  {
    id: "excellence",
    title: "Keunggulan",
    titleEn: "Excellence",
    description:
      "Standar kerja analitis, teliti, dan responsif yang setara firma hukum kelas enterprise.",
    descriptionEn:
      "Analytical, meticulous, and responsive standards on par with enterprise-level firms.",
    icon: "Award",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    description:
      "Penanganan sengketa perdata, pidana, dan administrasi dengan strategi litigasi yang terukur dan berbasis bukti.",
    icon: "Landmark",
  },
  {
    id: "anticorruption",
    title: "Anti-Corruption & Governance",
    description:
      "Pendampingan dalam pemberantasan korupsi, tata kelola, compliance, dan penguatan sistem pengendalian internal.",
    icon: "ShieldCheck",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description:
      "Strukturisasi transaksi, kontrak komersial, M&A, dan advisory korporasi untuk entitas domestik maupun multinasional.",
    icon: "Building2",
  },
  {
    id: "mining",
    title: "Mining, Plantation & Natural Resources",
    description:
      "Hukum pertambangan, perkebunan, perizinan, lingkungan, dan kepatuhan di sektor sumber daya alam.",
    icon: "Mountain",
  },
  {
    id: "criminal",
    title: "Criminal Law & Investigation Support",
    description:
      "Pendampingan hukum pidana dan dukungan strategis dalam proses penyelidikan serta pembelaan yang proporsional.",
    icon: "FileSearch",
  },
  {
    id: "public-policy",
    title: "Public Policy & Regulatory Advisory",
    description:
      "Analisis kebijakan publik, regulasi sektor, dan engagement strategis dengan pemangku kepentingan terkait.",
    icon: "ScrollText",
  },
  {
    id: "customs",
    title: "Customs, Smuggling & Compliance",
    description:
      "Isu kepabeanan, penyelundupan, dan kepatuhan lintas batas dengan pendekatan preventif maupun reaktif.",
    icon: "Package",
  },
  {
    id: "advisory",
    title: "Legal Opinion & Strategic Advisory",
    description:
      "Opini hukum, due diligence, dan rekomendasi strategis untuk pengambilan keputusan tingkat direksi.",
    icon: "BookOpen",
  },
];

export const whyChooseUs = [
  {
    id: "expertise",
    title: "Keahlian Multisektor",
    description:
      "Pengalaman mendalam pada isu antikorupsi, pertambangan, perkebunan, dan hukum publik-korporasi.",
    icon: "Briefcase",
  },
  {
    id: "integrity",
    title: "Integritas Tanpa Kompromi",
    description:
      "Pendekatan advokasi yang tegas, independen, dan berpihak pada penegakan hukum yang benar.",
    icon: "Shield",
  },
  {
    id: "strategy",
    title: "Strategi Berbasis Analisis",
    description:
      "Setiap rekomendasi didukung riset hukum, pemetaan risiko, dan perencanaan langkah yang terukur.",
    icon: "Target",
  },
  {
    id: "partnership",
    title: "Kemitraan Jangka Panjang",
    description:
      "Kami membangun hubungan profesional berkelanjutan, bukan solusi sekali pakai.",
    icon: "Handshake",
  },
];

export const founder = {
  name: "Dr. Andin Sofyanoor, SH., MH.",
  title: "Managing Partner & Founder",
  titleEn: "Managing Partner & Founder",
  bio: "Dr. Andin Sofyanoor, SH., MH. memimpin Trusted Jurist Law Firm dengan visi memperkuat reformasi hukum dan penegakan hukum yang berintegritas di Indonesia. Beliau menggabungkan kedalaman akademik dengan pendekatan advokasi yang strategis, tegas, dan berpihak pada keadilan dalam isu publik, korporasi, dan antikorupsi.",
  bioEn:
    "Dr. Andin Sofyanoor, SH., MH. leads Trusted Jurist Law Firm with a vision to strengthen legal reform and integrity-driven law enforcement in Indonesia.",
  credentials: ["SH.", "MH.", "Managing Partner"],
};

export const teamMembers: TeamMember[] = [
  {
    id: "managing-partner",
    name: "Dr. Andin Sofyanoor, SH., MH.",
    title: "Managing Partner",
    titleEn: "Managing Partner",
    credentials: "SH., MH.",
    bio: "Pendiri dan pemimpin firma. Fokus pada reformasi hukum, antikorupsi, litigasi strategis, dan advisory korporasi-publik.",
    bioEn:
      "Founder and firm leader focused on legal reform, anti-corruption, strategic litigation, and public-corporate advisory.",
  },
  {
    id: "partner-placeholder-1",
    name: "Partner (Coming Soon)",
    title: "Partner",
    titleEn: "Partner",
    bio: "Struktur tim sedang diperluas untuk partner senior dengan keahlian litigasi dan regulasi sektor strategis.",
    bioEn:
      "Team structure expanding for senior partners in litigation and sector regulation.",
    isPlaceholder: true,
  },
  {
    id: "associate-placeholder-1",
    name: "Associate (Coming Soon)",
    title: "Associate",
    titleEn: "Associate",
    bio: "Associate akan bergabung untuk mendukung riset hukum, drafting, dan koordinasi perkara.",
    bioEn:
      "Associates joining to support legal research, drafting, and case coordination.",
    isPlaceholder: true,
  },
  {
    id: "associate-placeholder-2",
    name: "Associate (Coming Soon)",
    title: "Associate",
    titleEn: "Associate",
    bio: "Posisi associate terbuka bagi profesional hukum yang berkomitmen pada integritas dan keunggulan kerja.",
    bioEn:
      "Associate positions open for legal professionals committed to integrity and excellence.",
    isPlaceholder: true,
  },
];

export const insights: InsightArticle[] = [
  {
    id: "1",
    slug: "membangun-kepercayaan-publik-penegakan-hukum",
    title: "Membangun Kepercayaan Publik terhadap Penegakan Hukum",
    titleEn: "Building Public Trust in Law Enforcement",
    excerpt:
      "Kepercayaan publik terhadap penegakan hukum tidak terbentuk dari retorika, melainkan dari konsistensi, transparansi, dan akuntabilitas institusi. Firma hukum memiliki peran penting sebagai penjaga standar profesional dalam ekosistem tersebut.",
    excerptEn:
      "Public trust in law enforcement is built through consistency, transparency, and institutional accountability.",
    category: "Hukum Publik",
    publishedAt: "2025-08-15",
    readTime: "6 menit",
  },
  {
    id: "2",
    slug: "peran-advokat-agenda-antikorupsi",
    title: "Peran Advokat dalam Agenda Antikorupsi",
    titleEn: "The Role of Advocates in Anti-Corruption Agendas",
    excerpt:
      "Advokat tidak hanya hadir di ruang sidang, tetapi juga dalam desain kepatuhan, pencegahan, dan penguatan tata kelola yang mencegah korupsi sejak awal — sebelum kerugian negara terjadi.",
    excerptEn:
      "Advocates shape compliance, prevention, and governance that stops corruption before state losses occur.",
    category: "Antikorupsi",
    publishedAt: "2025-09-02",
    readTime: "5 menit",
  },
  {
    id: "3",
    slug: "kepatuhan-hukum-pertambangan-perkebunan",
    title: "Kepatuhan Hukum di Sektor Pertambangan dan Perkebunan",
    titleEn: "Legal Compliance in Mining and Plantation Sectors",
    excerpt:
      "Sektor sumber daya alam menghadapi regulasi berlapis. Kepatuhan yang proaktif — bukan reaktif — menjadi pembeda antara operasi berkelanjutan dan risiko hukum yang merugikan.",
    excerptEn:
      "Layered regulation in natural resources makes proactive compliance the differentiator for sustainable operations.",
    category: "Sektor Regulasi",
    publishedAt: "2025-10-20",
    readTime: "7 menit",
  },
];

export const contactInfo = {
  address: "Kawasan Sunter, Jakarta Timur, DKI Jakarta",
  addressEn: "Sunter Area, East Jakarta, DKI Jakarta",
  email: "kontak@trustedjurist.co.id",
  phone: "+62 21 0000 0000",
  whatsapp: "6281200000000",
  hours: "Senin – Jumat, 09.00 – 18.00 WIB",
  hoursEn: "Monday – Friday, 09:00 – 18:00 WIB",
};

export const formSubjects = [
  "Konsultasi Umum",
  "Litigasi & Sengketa",
  "Antikorupsi & Governance",
  "Hukum Korporasi",
  "Sektor Pertambangan / Perkebunan",
  "Lainnya",
];
