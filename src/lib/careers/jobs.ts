import type { CareerJob } from "@/types";

const now = "2026-07-08T00:00:00.000Z";

export const initialJobs: CareerJob[] = [
  {
    id: "fullstack-engineer",
    title: "Fullstack Engineer",
    level: "Mid",
    department: "Technology",
    location: "Jakarta Timur",
    summary: "Membangun sistem digital firma, workflow internal, dan kanal publik berbasis Next.js.",
    description:
      "Trusted Jurist mencari engineer yang nyaman bekerja pada produk digital kecil dengan standar tinggi: arsitektur bersih, keamanan data, dan pengalaman pengguna yang tenang. Peran ini menangani frontend, route handler, integrasi email, dan fondasi data untuk operasi firma.",
    responsibilities: [
      "Mengembangkan fitur web berbasis Next.js, React, dan TypeScript.",
      "Merancang API route untuk formulir, dashboard admin, dan otomasi internal.",
      "Menjaga kualitas aksesibilitas, performa, dan keamanan input.",
      "Bekerja langsung dengan stakeholder firma untuk menerjemahkan proses hukum menjadi workflow digital.",
    ],
    requiredSkills: [
      "TypeScript, React, Next.js App Router.",
      "Pemahaman REST API, validasi input, dan secure coding dasar.",
      "Pengalaman dengan email provider, storage, atau database relasional.",
      "Kebiasaan dokumentasi teknis yang rapi.",
    ],
    niceToHave: ["Pengalaman legal tech atau workflow dokumen.", "Familiar dengan S3-compatible storage."],
    compensation: "Kompetitif",
    benefits: [
      "Lingkungan kerja kecil dengan akses langsung ke pengambil keputusan.",
      "Ruang belajar domain hukum, compliance, dan legal operations.",
      "Hybrid/on-site terjadwal di Jakarta Timur.",
    ],
    status: "published",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "software-engineer",
    title: "Software Engineer",
    level: "Junior",
    department: "Technology",
    location: "Jakarta Timur",
    summary: "Mendukung pengembangan fitur, otomasi, dan fondasi data operasional Trusted Jurist.",
    description:
      "Peran ini cocok untuk engineer yang teliti, ingin tumbuh di persimpangan software dan layanan hukum, serta mampu membangun fitur sederhana dengan kualitas produksi.",
    responsibilities: [
      "Membangun komponen UI, API kecil, dan utilitas internal.",
      "Menulis dokumentasi implementasi dan catatan QA.",
      "Membantu integrasi formulir, notifikasi email, dan dashboard admin.",
      "Mengikuti praktik review, lint, dan testing dasar.",
    ],
    requiredSkills: [
      "Dasar TypeScript, React, dan Git.",
      "Mampu membaca requirement dan mengubahnya menjadi fitur teruji.",
      "Memahami HTML semantik, CSS responsive, dan aksesibilitas dasar.",
    ],
    niceToHave: ["Pengalaman Next.js.", "Pernah membangun dashboard internal."],
    compensation: "Kompetitif",
    benefits: [
      "Mentoring teknis dan domain.",
      "Portofolio kerja nyata pada sistem publik dan internal.",
      "Kultur kerja dokumentatif dan tenang.",
    ],
    status: "published",
    createdAt: now,
    updatedAt: now,
  },
];

