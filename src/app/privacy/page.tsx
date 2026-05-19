import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT_CONFIG } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Trusted Jurist Law Firm — pengumpulan, penggunaan, dan perlindungan data pribadi pengunjung website.",
  path: "/privacy",
});

const sections = [
  {
    title: "Informasi yang Kami Kumpulkan",
    paragraphs: [
      "Melalui formulir kontak dan konsultasi di website ini, kami dapat mengumpulkan nama, alamat email, nomor telepon (opsional), subjek permintaan, serta isi pesan yang Anda kirimkan.",
      "Saat Anda mengunjungi website, server kami dapat mencatat data teknis standar (alamat IP, jenis peramban, halaman yang diakses) untuk keamanan dan analitik operasional.",
    ],
  },
  {
    title: "Bagaimana Kami Menggunakan Data Anda",
    paragraphs: [
      "Data yang Anda kirim digunakan untuk menilai permintaan konsultasi, menghubungi Anda kembali, dan mengelola hubungan profesional dengan calon klien.",
      "Kami tidak menjual data pribadi Anda kepada pihak ketiga.",
    ],
  },
  {
    title: "Penyimpanan & Keamanan",
    paragraphs: [
      "Data disimpan dengan akses terbatas pada personel firma yang berwenang. Kami menerapkan langkah wajar untuk melindungi data dari akses tidak sah.",
      "Data dapat disimpan selama diperlukan untuk tujuan hukum, operasional, dan kepatuhan profesional advokat.",
    ],
  },
  {
    title: "Hak Anda",
    paragraphs: [
      "Anda dapat meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan, sesuai ketentuan hukum yang berlaku di Indonesia.",
      "Permintaan terkait data pribadi dapat disampaikan melalui email resmi firma di bawah.",
    ],
  },
  {
    title: "Cookie & Pihak Ketiga",
    paragraphs: [
      "Website dapat menggunakan layanan pihak ketiga (misalnya Google reCAPTCHA untuk keamanan formulir) yang memproses data sesuai kebijakan masing-masing penyedia.",
      "Tautan ke situs eksternal (misalnya WhatsApp) tunduk pada kebijakan privasi platform tersebut.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="tone-cream">
      <header className="section-pad border-b border-border/60">
        <Container size="narrow">
          <p className={cn(t.colophon, "text-muted")}>Legal</p>
          <h1 className={cn(t.h1, "mt-6 text-navy")}>Kebijakan Privasi</h1>
          <p className={cn(t.lead, "mt-6 max-w-xl text-muted")}>
            Terakhir diperbarui: Mei 2026. Dokumen ini menjelaskan bagaimana
            Trusted Jurist Law Firm menangani data pribadi pengunjung website.
          </p>
        </Container>
      </header>

      <article className="section-pad-lg">
        <Container size="narrow">
          <div className="flow-editorial space-y-16">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className={cn(t.h3, "text-navy")}>{section.title}</h2>
                <div className="mt-6 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className={cn(t.body, "text-muted")}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className={cn(t.h3, "text-navy")}>Hubungi Kami</h2>
              <p className={cn(t.body, "mt-6 text-muted")}>
                Pertanyaan tentang privasi atau data pribadi Anda? Email ke{" "}
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="text-navy underline decoration-navy/20 underline-offset-2 hover:text-gold"
                >
                  {CONTACT_CONFIG.email}
                </a>
                .
              </p>
              <p className={cn(t.body, "mt-4 text-muted")}>
                <Link
                  href="/contact"
                  className="text-navy underline decoration-navy/20 underline-offset-2 hover:text-gold"
                >
                  Formulir konsultasi
                </Link>
              </p>
            </section>
          </div>
        </Container>
      </article>
    </div>
  );
}
