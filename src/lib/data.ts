import type {
  ApproachPillar,
  CoreValue,
  CredibilityPillar,
  EditorialSection,
  FounderCredibility,
  InsightArticle,
  NavItem,
  PracticeArea,
  TeamMember,
  TeamRoleSlot,
  TrustCommitment,
  TrustIndicator,
  WhyTrustedJuristPillar,
} from "@/types";

export const footerLegalLinks = [
  { label: "Kebijakan Privasi", href: "/privacy" },
] as const;

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
 * Ganti nilai bertanda REVIEW dengan data resmi dari admin firma sebelum go-live.
 */
export const CONTACT_CONFIG = {
  address: {
    line1: "Jl. Sunter Agung Raya", // REVIEW: nomor unit/ruko jika ada
    line2: "Jakarta Timur 14350, DKI Jakarta",
    postalCode: "14350",
    country: "Indonesia",
    display: "Jl. Sunter Agung Raya, Jakarta Timur 14350, DKI Jakarta",
  },
  email: "konsultasi@trustedjurist.co.id",
  phone: {
    display: "+62 21 XXXX XXXX", // REVIEW: nomor kantor resmi
    tel: "+6221XXXXXXXX", // REVIEW: format E.164 tanpa spasi
  },
  whatsapp: {
    number: "628XXXXXXXXXX", // REVIEW: 62 + nomor tanpa 0 di depan
    defaultMessage: "Halo Trusted Jurist, saya ingin berkonsultasi.",
  },
  operatingHours: "Senin–Jumat, 08:00–17:00 WIB",
  operatingHoursNote:
    "Konfirmasi janji temu melalui kontak resmi firma.",
  timezone: "Asia/Jakarta",
  /** @deprecated Gunakan operatingHours */
  hours: "Senin–Jumat, 08:00–17:00 WIB",
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
  hours: CONTACT_CONFIG.operatingHours,
  hoursEn: "Monday – Friday, 08:00 – 17:00 WIB",
};

export const contactConsultation = {
  eyebrow: "Konsultasi awal",
  title: "Permintaan konsultasi",
  lead:
    "Pertemuan pertama untuk diagnosis masalah dan arah hukum. Tanpa kewajiban melanjutkan mandat.",
  confidentiality: {
    title: "Kerahasiaan",
    paragraphs: [
      "Permintaan melalui saluran ini belum membentuk hubungan advokat–klien. Informasi yang disampaikan ditangani sesuai kode etik advokat dan protokol firma — akses terbatas, tanpa pembagian kepada pihak ketiga tanpa persetujuan tertulis.",
      "Untuk materi sensitif, firma dapat mengatur pertemuan langsung atau saluran tertulis yang disepakati setelah kontak awal.",
    ],
  },
  form: {
    title: "Formulir permintaan",
    note: "Respons pada jam operasional firma. Data hanya digunakan untuk menilai kelayakan konsultasi.",
    submitLabel: "Ajukan permintaan",
    successTitle: "Permintaan diterima",
    successMessage:
      "Firma akan menghubungi kembali melalui kontak yang dicantumkan — biasanya dalam satu hari kerja.",
  },
  channels: {
    title: "Saluran langsung",
    hoursNote: CONTACT_CONFIG.operatingHoursNote,
  },
} as const;

export const trustIndicators: TrustIndicator[] = [
  {
    id: "launch",
    label: "Berdiri",
    labelEn: "Established",
    value: "26 Juni 2025",
  },
  {
    id: "location",
    label: "Kantor",
    labelEn: "Office",
    value: "Sunter, Jakarta Timur",
  },
  {
    id: "focus",
    label: "Bidang",
    labelEn: "Practice",
    value: "Litigasi · Antikorupsi · Regulasi",
  },
  {
    id: "approach",
    label: "Cara kerja",
    labelEn: "Method",
    value: "Diagnosis, lalu langkah",
  },
];

export const credibilitySection = {
  eyebrow: "Prinsip kerja",
  headline: "Advokasi yang dapat dipertanggungjawabkan",
  lead:
    "Setiap mandat diawali diagnosis, bukan reaksi. Langkah hukum dirumuskan proporsional dengan risiko dan tujuan klien.",
};

export const credibilityPillars: CredibilityPillar[] = [
  {
    id: "strategic",
    title: "Diagnosis sebelum eksekusi",
    description:
      "Pemetaan fakta, regulasi, dan risiko menjadi dasar rekomendasi — bukan langkah sesaat tanpa arah.",
  },
  {
    id: "integrity",
    title: "Posisi independen",
    description:
      "Opini ditulis dari hukum dan fakta. Tekanan non-hukum tidak mengubah rekomendasi.",
  },
  {
    id: "confidentiality",
    title: "Kerahasiaan terkelola",
    description:
      "Akses dokumen dan informasi perkara dibatasi sesuai protokol firma dan kode etik advokat.",
  },
  {
    id: "representation",
    title: "Proses terdokumentasi",
    description:
      "Tahapan perkara, opsi, dan implikasi disampaikan secara berkelanjutan — tanpa kabut informasi.",
  },
  {
    id: "justice",
    title: "Hukum substantif",
    description:
      "Pada isu publik dan korporasi yang sensitif, firma mengambil posisi tegas berdasarkan analisis, bukan narasi.",
  },
];

export const trustCommitments: TrustCommitment[] = [
  {
    id: "ethics",
    title: "Kode etik advokat",
    description:
      "Praktik mengacu Kode Etik Advokat Indonesia dan standar profesi yang berlaku.",
    icon: "Scale",
  },
  {
    id: "confidentiality",
    title: "Kerahasiaan klien",
    description:
      "Informasi dan dokumen perkara dikelola dengan akses terbatas.",
    icon: "Shield",
  },
  {
    id: "documentation",
    title: "Proses terdokumentasi",
    description:
      "Rencana kerja dan progres perkara tercatat agar klien mengetahui posisi hukumnya.",
    icon: "FileSearch",
  },
  {
    id: "independence",
    title: "Opini independen",
    description:
      "Rekomendasi ditulis dari analisis hukum, bukan tekanan pihak ketiga.",
    icon: "Gavel",
  },
];

export const aboutPreview = {
  title: "Firma hukum di persimpangan publik dan korporasi",
  titleEn: "A law firm at the intersection of public and corporate law",
  lead:
    "Trusted Jurist menangani persoalan yang membutuhkan analisis mendalam dan posisi tegas — dari ruang sidang hingga ruang direksi.",
  description:
    "Beroperasi dari Sunter, Jakarta Timur, sejak 26 Juni 2025. Fokus pada litigasi, antikorupsi, regulasi sektor, dan sumber daya alam.",
  descriptionEn:
    "Based in Sunter, East Jakarta since 26 June 2025. Litigation, anti-corruption, and sector regulation.",
};

export const firmProfile = {
  title: "Profil Firma",
  lead:
    "Trusted Jurist adalah firma hukum Indonesia yang beroperasi pada persimpangan hukum publik, korporasi, dan regulasi sektor.",
  paragraphs: [
    "Dipimpin oleh Dr. Andin Sofyanoor, SH., MH., firma berkantor di Sunter, Jakarta Timur. Mandat mencakup isu dengan dimensi kebijakan publik, kepatuhan berlapis, dan sengketa yang tidak dapat diselesaikan dengan template standar.",
    "Pendampingan dirancang untuk konteks — regulasi sektor, struktur transaksi, atau perkara yang sudah berada di meja hakim. Bukan layanan transaksional tanpa analisis.",
    "Peluncuran 26 Juni 2025 menandai orientasi praktik pada antikorupsi, pertambangan, perkebunan, kepabeanan, serta hukum korporasi dan administrasi negara.",
  ],
};

export const firmPhilosophy: EditorialSection = {
  id: "philosophy",
  eyebrow: "Filosofi",
  title: "Hukum sebagai alat kepastian, bukan formalitas",
  lead:
    "Advokasi bermartabat lahir dari aturan yang adil — bukan sekadar menang di atas kertas.",
  paragraphs: [
    "Profesi advokat memiliki peran dalam legitimasi sistem hukum. Setiap pendampingan mempertimbangkan dampaknya pada kepastian hukum, perlindungan hak, dan kepercayaan publik terhadap peradilan.",
    "Dalam praktik: riset hukum menyeluruh, komunikasi langsung kepada klien, rekomendasi yang tidak disederhanakan demi kenyamanan sementara.",
    "Pada isu sensitif, firma mengambil posisi berdasarkan hukum — bukan narasi atau tekanan.",
  ],
};

export const justiceIntegrityCommitment: EditorialSection = {
  id: "justice-integrity",
  eyebrow: "Posisi",
  title: "Prinsip yang tidak dinegosiasikan",
  lead:
    "Standar etika mengatur setiap interaksi dengan klien, lawan hukum, dan institusi — bukan materi promosi.",
  paragraphs: [
    "Firma menolak pendekatan yang mengorbankan hukum demi kepentingan sesaat. Advokasi oportunistik atau tidak transparan tidak masuk ruang lingkup kerja kami.",
    "Keadilan diartikan sebagai pembelaan hak substantif dan proporsional — dalam litigasi, investigasi, maupun advisory.",
    "Pada isu publik dan korporasi yang rumit, opini ditulis dari analisis objektif. Tekanan non-hukum tidak mengubah rekomendasi.",
  ],
};

export const strategicLegalApproach = {
  title: "Metodologi kerja",
  eyebrow: "Metodologi",
  lead:
    "Mandat dirancang dari fakta ke konsekuensi hukum — bukan daftar langkah generik.",
  pillars: [
    {
      id: "diagnosis",
      title: "Pemetaan",
      description:
        "Fakta, regulasi, dan risiko dipetakan sebelum rekomendasi ditulis.",
    },
    {
      id: "strategy",
      title: "Skenario",
      description:
        "Langkah hukum disusun dengan alternatif, timeline realistis, dan indikator yang dapat diukur.",
    },
    {
      id: "execution",
      title: "Eksekusi",
      description:
        "Advokasi didukung dokumentasi tertulis — progres, opsi, dan implikasi setiap keputusan.",
    },
    {
      id: "governance",
      title: "Kepatuhan",
      description:
        "Pada isu korporasi dan regulasi: pencegahan risiko dan tata kelola jangka panjang, bukan sekadar reaksi insiden.",
    },
  ] satisfies ApproachPillar[],
};

export const professionalEthicsStatement: EditorialSection = {
  id: "ethics",
  eyebrow: "Etika",
  title: "Standar profesi",
  lead:
    "Seluruh advokat di firma terikat Kode Etik Advokat Indonesia dan prinsip independensi profesi.",
  paragraphs: [
    "Kerahasiaan klien, penghindaran konflik kepentingan, dan protokol akses informasi perkara diterapkan secara konsisten.",
    "Prospek hukum disampaikan jujur — termasuk risiko dan keterbatasan. Tidak ada janji hasil yang tidak dapat dipertanggungjawabkan.",
    "Firma tidak memberikan jaminan hasil perkara, tidak memuat klaim pengalaman yang tidak dapat diverifikasi, dan tidak menggunakan narasi promosi yang merendahkan martabat profesi.",
    "Hubungan dengan klien dimulai dari surat kuasa, ruang lingkup mandat yang jelas, dan mekanisme penyelesaian sesuai hukum.",
  ],
};

export const vision = {
  title: "Visi",
  content:
    "Mendorong ekosistem hukum Indonesia yang adil, akuntabel, dan dapat diandalkan — bagi kepentingan publik maupun kepatuhan korporasi.",
  contentEn:
    "Advancing a fair, accountable Indonesian legal ecosystem.",
};

export const mission = {
  title: "Misi",
  items: [
    "Menangani mandat hukum dengan standar analitis dan etika profesi.",
    "Berkontribusi pada reformasi hukum, antikorupsi, dan penegakan hukum.",
    "Mendampingi klien dalam litigasi, regulasi, dan advisory korporasi.",
    "Menjaga transparansi proses dan akuntabilitas kepada klien.",
  ],
  itemsEn: [
    "Handle mandates with analytical rigour and professional ethics.",
    "Contribute to law reform, anti-corruption, and enforcement.",
    "Support clients in litigation, regulation, and corporate advisory.",
    "Maintain process transparency and client accountability.",
  ],
};

export const coreValues: CoreValue[] = [
  {
    id: "integrity",
    title: "Ketegasan",
    titleEn: "Rigour",
    description:
      "Opini ditulis dari hukum dan fakta — bukan tekanan atau narasi.",
    descriptionEn:
      "Opinions grounded in law and fact — not pressure or narrative.",
    icon: "Shield",
  },
  {
    id: "justice",
    title: "Substansi",
    titleEn: "Substance",
    description:
      "Keadilan hukum diutamakan di atas formalitas prosedural semata.",
    descriptionEn:
      "Substantive justice over procedural formality.",
    icon: "Scale",
  },
  {
    id: "courage",
    title: "Posisi",
    titleEn: "Position",
    description:
      "Pada isu sensitif, firma mengambil sikap tegas berdasarkan analisis.",
    descriptionEn:
      "Firm positions on sensitive matters, based on analysis.",
    icon: "Gavel",
  },
  {
    id: "excellence",
    title: "Ketelitian",
    titleEn: "Precision",
    description:
      "Riset hukum teliti dan respons yang tepat waktu pada setiap mandat.",
    descriptionEn:
      "Thorough legal research and timely response on every mandate.",
    icon: "Award",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "litigation",
    title: "Litigation & Dispute Resolution",
    description:
      "Sengketa perdata, pidana, dan administrasi — strategi litigasi berbasis bukti dan tahapan yang terukur.",
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
      "Antikorupsi, tata kelola, kepatuhan, dan penguatan pengendalian internal.",
    icon: "ShieldCheck",
    scope:
      "Investigasi internal, program kepatuhan, due diligence, dan koordinasi dengan regulator.",
    clientNeeds:
      "Korporasi, BUMN, atau institusi yang memperkuat pencegahan korupsi dan menangani indikasi pelanggaran.",
    legalOutput:
      "Kebijakan anti-korupsi, laporan investigasi internal, legal opinion kepatuhan, dan rekomendasi perbaikan tata kelola.",
  },
  {
    id: "corporate",
    title: "Corporate & Commercial Law",
    description:
      "Transaksi, kontrak komersial, M&A, dan advisory korporasi — domestik dan lintas batas.",
    icon: "Building2",
    scope:
      "Pendirian badan hukum, kontrak komersial, restrukturisasi, joint venture, dan transaksi korporasi.",
    clientNeeds:
      "Perusahaan yang memerlukan keamanan hukum transaksi, drafting kontrak, atau pendampingan korporasi sehari-hari.",
    legalOutput:
      "Kontrak dan amendment, legal opinion transaksi, checklist compliance, dan memo risiko komersial.",
  },
  {
    id: "mining",
    title: "Mining, Plantation & Natural Resources",
    description:
      "Pertambangan, perkebunan, perizinan, lingkungan, dan kepatuhan sektor sumber daya alam.",
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
      "Hukum pidana — penyelidikan, persidangan, dan pembelaan yang proporsional.",
    icon: "FileSearch",
    scope:
      "Pendampingan penyidikan, penyidikan lanjutan, persidangan pidana, dan hak-hak tersangka/terdakwa korporasi maupun perseorangan.",
    clientNeeds:
      "Pihak dalam proses pidana yang memerlukan pembelaan dan koordinasi bukti.",
    legalOutput:
      "Eskposisi hukum, nota pembelaan, pendampingan pemeriksaan, dan strategi mitigasi risiko pidana.",
  },
  {
    id: "public-policy",
    title: "Public Policy & Regulatory Advisory",
    description:
      "Kebijakan publik, regulasi sektor, dan engagement dengan pemangku kepentingan.",
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
      "Kepabeanan, penyelundupan, dan kepatuhan lintas batas — preventif dan reaktif.",
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
      "Opini hukum, due diligence, dan advisory untuk keputusan tingkat direksi.",
    icon: "BookOpen",
    scope:
      "Legal opinion komprehensif, due diligence hukum, risk assessment, dan advisory untuk dewan direksi.",
    clientNeeds:
      "Direksi atau pemegang saham yang membutuhkan dasar hukum sebelum keputusan investasi, litigasi, atau restrukturisasi.",
    legalOutput:
      "Formal legal opinion, executive summary risiko, dan rekomendasi langkah hukum berprioritas.",
  },
];

/** Label ringkas untuk tautan bidang praktik di footer */
export const footerPracticeLinks = practiceAreas.map((area) => ({
  id: area.id,
  href: `/practice-areas#${area.id}`,
  label:
    {
      litigation: "Litigasi & Sengketa",
      anticorruption: "Antikorupsi & Governance",
      corporate: "Hukum Korporasi",
      mining: "Pertambangan & SDA",
      criminal: "Hukum Pidana",
      "public-policy": "Kebijakan Publik",
      customs: "Kepabeanan & Kepatuhan",
      advisory: "Opini & Advisory",
    }[area.id] ?? area.title,
}));

export const whyTrustedJuristSection = {
  eyebrow: "Cara kami bekerja",
  title: "Lima hal yang mengatur setiap mandat",
  lead:
    "Diagnosis, kerahasiaan, dan eksekusi terdokumentasi — dari konsultasi awal hingga penutupan perkara.",
};

export const whyTrustedJuristPillars: WhyTrustedJuristPillar[] = [
  {
    id: "strategic-advisory",
    title: "Analisis mendalam",
    titleEn: "Deep analysis",
    description:
      "Risiko dipetakan sebelum langkah diambil. Keputusan hukum selaras dengan tujuan bisnis dan regulasi.",
    icon: "Compass",
  },
  {
    id: "integrity",
    title: "Opini independen",
    titleEn: "Independent counsel",
    description:
      "Rekomendasi ditulis dari hukum dan fakta. Tekanan non-hukum tidak mengubah arah.",
    icon: "ShieldCheck",
  },
  {
    id: "confidential",
    title: "Kerahasiaan",
    titleEn: "Confidentiality",
    description:
      "Informasi dan dokumen dikelola dengan protokol akses terbatas sejak hari pertama.",
    icon: "Lock",
  },
  {
    id: "advocacy",
    title: "Representasi",
    titleEn: "Representation",
    description:
      "Litigasi, negosiasi, dan regulator — dengan dokumentasi proses yang rapi.",
    icon: "Gavel",
  },
  {
    id: "responsive",
    title: "Koordinasi",
    titleEn: "Coordination",
    description:
      "Status perkara dan langkah berikutnya disampaikan tepat waktu — tanpa keheningan.",
    icon: "Headphones",
  },
];

export const whyChooseUs = [
  {
    id: "expertise",
    title: "Fokus sektor",
    description:
      "Antikorupsi, pertambangan, perkebunan, dan hukum publik–korporasi — dengan analisis yang mendalam.",
    icon: "Briefcase",
  },
  {
    id: "integrity",
    title: "Posisi tegas",
    description:
      "Advokasi independen, berpihak pada hukum substantif — bukan narasi.",
    icon: "Shield",
  },
  {
    id: "strategy",
    title: "Riset mendasar",
    description:
      "Rekomendasi didukung pemetaan risiko dan langkah yang terukur.",
    icon: "Target",
  },
  {
    id: "partnership",
    title: "Mandat berkelanjutan",
    description:
      "Hubungan kerja jangka panjang — bukan intervensi sekali pakai.",
    icon: "Handshake",
  },
];

export const founder = {
  name: "Dr. Andin Sofyanoor, SH., MH.",
  title: "Managing Partner & Founder",
  titleEn: "Managing Partner & Founder",
  bio: "Dr. Andin Sofyanoor, SH., MH. memimpin Trusted Jurist. Praktiknya mencakup reformasi hukum, antikorupsi, litigasi, dan advisory pada isu publik–korporasi — dengan pendekatan analitis, dokumentasi terukur, dan posisi yang tegas.",
  bioEn:
    "Dr. Andin Sofyanoor, SH., MH. leads Trusted Jurist — litigation, anti-corruption, and public–corporate advisory with measured, evidence-based advocacy.",
  credentials: ["SH.", "MH.", "Managing Partner"],
  experienceSummary:
    "Advokasi litigasi, antikorupsi, dan hukum publik–korporasi. Pendiri Trusted Jurist (beroperasi sejak 26 Juni 2025). Fokus: corporate litigation, kepatuhan, dan regulasi sektor sumber daya alam.",
};

/**
 * Profil kepemimpinan — detail perguruan & keanggotaan profesi
 * dilengkapi dari dokumentasi resmi firma (tanpa placeholder bracket).
 */
export const founderCredibility: FounderCredibility = {
  education: [
    "Sarjana Hukum (SH.) — gelar sarjana hukum",
    "Magister Hukum (MH.) — gelar magister hukum",
    "Gelar Doktor — Dr. Andin Sofyanoor (sesuai gelar profesional)",
  ],
  experience: [
    "Lebih dari satu dekade advokasi di litigasi, antikorupsi, dan hukum publik–korporasi.",
    "Pendampingan reformasi hukum, investigasi kepatuhan internal, dan sengketa regulator sektor.",
    "Litigasi perdata dan pidana, negosiasi sengketa, serta opini hukum tingkat direksi.",
    "Pendiri dan Managing Partner Trusted Jurist — firma berkantor di Sunter, Jakarta Timur (sejak 26 Juni 2025).",
  ],
  practiceFocus: [
    "Reformasi hukum dan penegakan hukum",
    "Antikorupsi, tata kelola, dan kepatuhan korporasi",
    "Pertambangan, perkebunan, dan sumber daya alam",
    "Litigasi, kepabeanan, dan kebijakan publik–regulasi sektor",
  ],
  professionalActivities: [
    "Advokasi isu kepentingan publik serta hukum pidana, administrasi, dan korporasi",
    "Penyusunan opini hukum, due diligence, dan program kepatuhan untuk klien korporasi",
    "Kegiatan keprofesian dan ilmiah — diumumkan melalui firma setelah konfirmasi resmi",
  ],
};

export const managingPartner: TeamMember = {
  id: "managing-partner",
  name: founder.name,
  title: "Managing Partner",
  titleEn: "Managing Partner",
  credentials: "SH., MH.",
  bio: founder.experienceSummary,
  bioEn:
    "Founder leading litigation, anti-corruption, and public–corporate advisory at Trusted Jurist since June 2025.",
};

export const teamRoleSlots: TeamRoleSlot[] = [
  {
    id: "partner",
    role: "Partner",
    roleEn: "Partner",
    description:
      "Advokat senior — portofolio perkara dan klien utama, litigasi atau regulasi sektor.",
  },
  {
    id: "senior-associate",
    role: "Senior Associate",
    roleEn: "Senior Associate",
    description:
      "Memimpin riset, drafting, dan koordinasi teknis perkara kompleks.",
  },
  {
    id: "associate",
    role: "Associate",
    roleEn: "Associate",
    description:
      "Analisis hukum, penyusunan dokumen, dan manajemen proses perkara.",
  },
];

export const insights: InsightArticle[] = [
  {
    id: "1",
    slug: "membangun-kepercayaan-publik-penegakan-hukum",
    title: "Membangun Kepercayaan Publik terhadap Penegakan Hukum",
    titleEn: "Building Public Trust in Law Enforcement",
    excerpt:
      "Tentang konsistensi institusi, transparansi, dan legitimasi penegakan hukum — dalam penyusunan.",
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
      "Peran advokat dalam pencegahan korupsi dan desain kepatuhan — draf editorial.",
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
      "Kepatuhan proaktif dan risiko regulasi di sektor sumber daya alam — akan hadir.",
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
