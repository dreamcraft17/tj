import type {
  CoreValue,
  FounderCredibility,
  InsightArticle,
  NavItem,
  PracticeArea,
  TeamMember,
  TeamRoleSlot,
  TrustCommitment,
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

/**
 * ─── KONFIGURASI KONTAK FIRMA ───
 * Edit nilai di bawah ini sebelum website go-live.
 */
export const CONTACT_CONFIG = {
  address: {
    line1: "Kawasan Sunter",
    line2: "Jakarta Timur, DKI Jakarta",
    country: "Indonesia",
    display: "Kawasan Sunter, Jakarta Timur, DKI Jakarta",
  },
  email: "kontak@trustedjurist.co.id",
  phone: {
    display: "+62 21 [nomor kantor]",
    tel: "+622100000000",
  },
  whatsapp: {
    number: "6281234567890",
    defaultMessage:
      "Halo Trusted Jurist Law Firm, saya ingin menjadwalkan konsultasi awal mengenai kebutuhan hukum.",
  },
  hours: "Senin – Jumat, 09.00 – 18.00 WIB",
  mapNote: "Peta interaktif dapat diintegrasikan pada fase deployment.",
} as const;

/** @deprecated Use CONTACT_CONFIG — kept for convenient imports */
export const contactInfo = {
  address: CONTACT_CONFIG.address.display,
  addressEn: `${CONTACT_CONFIG.address.line1}, East Jakarta, DKI Jakarta`,
  email: CONTACT_CONFIG.email,
  phone: CONTACT_CONFIG.phone.display,
  phoneTel: CONTACT_CONFIG.phone.tel,
  whatsapp: CONTACT_CONFIG.whatsapp.number,
  whatsappMessage: CONTACT_CONFIG.whatsapp.defaultMessage,
  hours: CONTACT_CONFIG.hours,
  hoursEn: "Monday – Friday, 09:00 – 18:00 WIB",
};

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

export const trustCommitments: TrustCommitment[] = [
  {
    id: "ethics",
    title: "Kepatuhan Kode Etik Advokat",
    description:
      "Seluruh layanan mengacu pada Kode Etik Advokat Indonesia dan standar profesi yang berlaku.",
    icon: "Scale",
  },
  {
    id: "confidentiality",
    title: "Kerahasiaan Klien",
    description:
      "Informasi perkara dan dokumen klien dikelola dengan prinsip kerahasiaan serta akses terbatas.",
    icon: "Shield",
  },
  {
    id: "documentation",
    title: "Dokumentasi & Transparansi Proses",
    description:
      "Setiap tahapan pendampingan didokumentasikan agar klien memahami rencana kerja dan progresnya.",
    icon: "FileSearch",
  },
  {
    id: "independence",
    title: "Independensi Profesional",
    description:
      "Rekomendasi hukum diberikan secara independen, berlandaskan fakta dan analisis hukum.",
    icon: "Gavel",
  },
];

export const aboutPreview = {
  title: "Mitra Hukum yang Berpihak pada Keadilan",
  titleEn: "A Legal Partner Committed to Justice",
  description:
    "Trusted Jurist Law Firm resmi beroperasi sejak 26 Juni 2025 di Jakarta, dipimpin oleh Dr. Andin Sofyanoor, SH., MH. Kami hadir untuk mendampingi klien dalam persoalan hukum publik, korporasi, dan penegakan hukum dengan standar profesionalisme tertinggi.",
  descriptionEn:
    "Trusted Jurist Law Firm has operated from Jakarta since 26 June 2025, led by Dr. Andin Sofyanoor, SH., MH.",
};

export const firmProfile = {
  title: "Profil Firma",
  paragraphs: [
    "Trusted Jurist Law Firm adalah firma hukum Indonesia yang didirikan dengan komitmen kuat terhadap integritas, keadilan, dan reformasi sistem hukum nasional. Berbasis di kawasan Sunter, Jakarta Timur, firma ini melayani kebutuhan hukum strategis bagi individu, korporasi, dan institusi yang memerlukan advokasi tegas dan berlandaskan hukum.",
    "Sejak peluncuran resmi pada 26 Juni 2025, Trusted Jurist membangun pendekatan kerja melalui analisis hukum yang mendalam, transparansi proses, dan dedikasi pada penegakan hukum tanpa pandang bulu — termasuk dalam isu antikorupsi, sektor pertambangan, perkebunan, penyelundupan, serta regulasi publik dan korporasi.",
  ],
};

export const vision = {
  title: "Visi",
  content:
    "Menjadi firma hukum terpercaya yang mendorong terciptanya ekosistem hukum Indonesia yang adil, akuntabel, dan berpihak pada kepentingan publik serta kepatuhan hukum yang berkelanjutan.",
  contentEn:
    "To be a trusted law firm that advances a fair, accountable Indonesian legal ecosystem.",
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
      "Standar kerja analitis, teliti, dan responsif dalam setiap pendampingan hukum.",
    descriptionEn:
      "Analytical, meticulous, and responsive standards in every legal engagement.",
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
    scope:
      "Pendampingan di tingkat pra-litigasi, pengadilan, hingga upaya hukum lanjutan; mediasi dan negosiasi sengketa.",
    clientNeeds:
      "Klien yang menghadapi gugatan, ingin menegakkan hak kontraktual, atau memerlukan strategi penyelesaian sengketa kompleks.",
    legalOutput:
      "Dokumentasi strategi litigasi, somasi, gugatan/banding, opini langkah hukum, dan laporan progres perkara.",
  },
  {
    id: "anticorruption",
    title: "Anti-Corruption & Governance",
    description:
      "Pendampingan dalam pemberantasan korupsi, tata kelola, compliance, dan penguatan sistem pengendalian internal.",
    icon: "ShieldCheck",
    scope:
      "Internal investigation support, compliance program, due diligence integritas, dan koordinasi dengan regulator terkait.",
    clientNeeds:
      "Korporasi, BUMN, atau institusi yang memperkuat pencegahan korupsi dan menangani indikasi pelanggaran.",
    legalOutput:
      "Kebijakan anti-korupsi, laporan investigasi internal, legal opinion kepatuhan, dan rekomendasi perbaikan tata kelola.",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description:
      "Strukturisasi transaksi, kontrak komersial, M&A, dan advisory korporasi untuk entitas domestik maupun multinasional.",
    icon: "Building2",
    scope:
      "Pendirian badan hukum, kontrak komersial, restrukturisasi, joint venture, dan transaksi korporasi strategis.",
    clientNeeds:
      "Perusahaan yang memerlukan keamanan hukum transaksi, drafting kontrak, atau pendampingan korporasi sehari-hari.",
    legalOutput:
      "Kontrak dan amendment, legal opinion transaksi, checklist compliance, dan memo risiko komersial.",
  },
  {
    id: "mining",
    title: "Mining, Plantation & Natural Resources",
    description:
      "Hukum pertambangan, perkebunan, perizinan, lingkungan, dan kepatuhan di sektor sumber daya alam.",
    icon: "Mountain",
    scope:
      "Perizinan operasional, PKP2B/kontrak karya, lingkungan hidup, sengketa lahan, dan regulasi sektor ESDM/kehutanan.",
    clientNeeds:
      "Pelaku usaha pertambangan, perkebunan, atau investasi sumber daya alam yang membutuhkan kepatuhan berlapis.",
    legalOutput:
      "Legal opinion perizinan, analisis regulasi sektor, pendampingan sengketa, dan roadmap kepatuhan operasional.",
  },
  {
    id: "criminal",
    title: "Criminal Law & Investigation Support",
    description:
      "Pendampingan hukum pidana dan dukungan strategis dalam proses penyelidikan serta pembelaan yang proporsional.",
    icon: "FileSearch",
    scope:
      "Pendampingan penyidikan, penyidikan lanjutan, persidangan pidana, dan hak-hak tersangka/terdakwa korporasi maupun perseorangan.",
    clientNeeds:
      "Pihak yang terlibat proses hukum pidana atau memerlukan pembelaan dan koordinasi bukti secara strategis.",
    legalOutput:
      "Eskposisi hukum, nota pembelaan, pendampingan pemeriksaan, dan strategi mitigasi risiko pidana.",
  },
  {
    id: "public-policy",
    title: "Public Policy & Regulatory Advisory",
    description:
      "Analisis kebijakan publik, regulasi sektor, dan engagement strategis dengan pemangku kepentingan terkait.",
    icon: "ScrollText",
    scope:
      "Review rancangan peraturan, analisis dampak regulasi, dan advisory kebijakan sektor publik-korporasi.",
    clientNeeds:
      "Korporasi atau asosiasi yang terdampak regulasi baru atau berencana berinteraksi dengan pembuat kebijakan.",
    legalOutput:
      "Policy brief, analisis regulasi, position paper, dan rekomendasi langkah kepatuhan kebijakan.",
  },
  {
    id: "customs",
    title: "Customs, Smuggling & Compliance",
    description:
      "Isu kepabeanan, penyelundupan, dan kepatuhan lintas batas dengan pendekatan preventif maupun reaktif.",
    icon: "Package",
    scope:
      "Sengketa kepabeanan, investigasi penyelundupan, kepatuhan impor-ekspor, dan koordinasi dengan otoritas terkait.",
    clientNeeds:
      "Importir, eksportir, atau pelaku usaha yang menghadapi pemeriksaan, sita, atau dugaan pelanggaran kepabeanan.",
    legalOutput:
      "Legal opinion kepabeanan, pendampingan pemeriksaan, strategi keberatan/sengketa, dan program kepatuhan lintas batas.",
  },
  {
    id: "advisory",
    title: "Legal Opinion & Strategic Advisory",
    description:
      "Opini hukum, due diligence, dan rekomendasi strategis untuk pengambilan keputusan tingkat direksi.",
    icon: "BookOpen",
    scope:
      "Legal opinion komprehensif, due diligence hukum, risk assessment, dan advisory untuk dewan direksi.",
    clientNeeds:
      "Direksi atau pemegang saham yang membutuhkan dasar hukum sebelum keputusan investasi, litigasi, atau restrukturisasi.",
    legalOutput:
      "Formal legal opinion, executive summary risiko, dan rekomendasi langkah hukum berprioritas.",
  },
];

export const whyChooseUs = [
  {
    id: "expertise",
    title: "Keahlian Multisektor",
    description:
      "Fokus pada isu antikorupsi, pertambangan, perkebunan, dan hukum publik-korporasi dengan analisis mendalam.",
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

/**
 * ─── KREDIBILITAS FOUNDER — edit sesuai dokumentasi resmi firma ───
 */
export const founderCredibility: FounderCredibility = {
  education: [
    "Sarjana Hukum (SH.) — [Nama Perguruan Tinggi]",
    "Magister Hukum (MH.) — [Nama Perguruan Tinggi]",
    "Gelar Doktor — Dr. Andin Sofyanoor (sesuai gelar profesional)",
  ],
  experience: [
    "Pengalaman advokasi pada isu hukum publik, korporasi, dan penegakan hukum",
    "Pendampingan strategis dalam agenda reformasi hukum dan antikorupsi",
    "Keterlibatan profesional dalam litigasi dan advisory regulasi sektor strategis",
  ],
  practiceFocus: [
    "Reformasi hukum dan penegakan hukum berintegritas",
    "Antikorupsi, governance, dan kepatuhan korporasi",
    "Hukum pertambangan, perkebunan, dan sumber daya alam",
    "Litigasi strategis dan legal opinion tingkat direksi",
  ],
  professionalActivities: [
    "Advokasi dan edukasi hukum terkait isu kepentingan publik",
    "Kegiatan profesional di bidang hukum pidana, administrasi, dan korporasi",
    "[Tambahkan keanggotaan organisasi profesi / kegiatan ilmiah resmi]",
  ],
};

export const managingPartner: TeamMember = {
  id: "managing-partner",
  name: founder.name,
  title: "Managing Partner",
  titleEn: "Managing Partner",
  credentials: "SH., MH.",
  bio: "Pendiri dan pemimpin firma. Mengarahkan strategi advokasi pada reformasi hukum, antikorupsi, litigasi, dan advisory korporasi-publik.",
  bioEn:
    "Founder and firm leader directing advocacy in legal reform, anti-corruption, litigation, and public-corporate advisory.",
};

export const teamRoleSlots: TeamRoleSlot[] = [
  {
    id: "partner",
    role: "Partner",
    roleEn: "Partner",
    description:
      "Advokat senior yang memimpin portofolio perkara dan hubungan klien strategis, dengan keahlian litigasi atau regulasi sektor.",
  },
  {
    id: "senior-associate",
    role: "Senior Associate",
    roleEn: "Senior Associate",
    description:
      "Profesional hukum berpengalaman yang memimpin riset, drafting, dan koordinasi teknis perkara kompleks.",
  },
  {
    id: "associate",
    role: "Associate",
    roleEn: "Associate",
    description:
      "Advokat muda yang mendukung analisis hukum, penyusunan dokumen, dan manajemen proses perkara.",
  },
];

export const insights: InsightArticle[] = [
  {
    id: "1",
    slug: "membangun-kepercayaan-publik-penegakan-hukum",
    title: "Membangun Kepercayaan Publik terhadap Penegakan Hukum",
    titleEn: "Building Public Trust in Law Enforcement",
    excerpt:
      "Kerangka editorial mengenai peran konsistensi, transparansi, dan akuntabilitas institusi dalam memperkuat legitimasi penegakan hukum.",
    excerptEn:
      "Editorial framework on consistency, transparency, and institutional accountability in law enforcement.",
    category: "Hukum Publik",
    status: "editorial-draft",
    readTime: "±6 menit",
  },
  {
    id: "2",
    slug: "peran-advokat-agenda-antikorupsi",
    title: "Peran Advokat dalam Agenda Antikorupsi",
    titleEn: "The Role of Advocates in Anti-Corruption Agendas",
    excerpt:
      "Draf wawasan tentang fungsi advokat dalam pencegahan korupsi, desain kepatuhan, dan penguatan tata kelola organisasi.",
    excerptEn:
      "Draft insight on advocates in corruption prevention, compliance design, and governance.",
    category: "Antikorupsi",
    status: "editorial-draft",
    readTime: "±5 menit",
  },
  {
    id: "3",
    slug: "kepatuhan-hukum-pertambangan-perkebunan",
    title: "Kepatuhan Hukum di Sektor Pertambangan dan Perkebunan",
    titleEn: "Legal Compliance in Mining and Plantation Sectors",
    excerpt:
      "Topik yang sedang disusun mengenai kepatuhan proaktif dan manajemen risiko regulasi di sektor sumber daya alam.",
    excerptEn:
      "Topic in preparation on proactive compliance and regulatory risk in natural resources.",
    category: "Sektor Regulasi",
    status: "coming-soon",
    readTime: "±7 menit",
  },
];

export const formSubjects = [
  "Konsultasi Umum",
  "Litigasi & Sengketa",
  "Antikorupsi & Governance",
  "Hukum Korporasi",
  "Sektor Pertambangan / Perkebunan",
  "Lainnya",
];
