import type { Metadata } from "next";
import Link from "next/link";
import { CareerApplicationForm } from "@/components/careers/CareerApplicationForm";
import { Container } from "@/components/ui/Container";
import { listJobs } from "@/lib/careers/store";
import { createMetadata } from "@/lib/seo";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Karier",
  description:
    "Bergabung dengan Trusted Jurist. Lowongan teknologi, proses aplikasi, dan formulir lamaran resmi.",
  path: "/careers",
});

export default function CareersPage({
  searchParams,
}: {
  searchParams?: Promise<{ level?: string; sort?: string }>;
}) {
  void searchParams;
  const jobs = listJobs("published");
  const jobJsonLd = jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.createdAt,
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Trusted Jurist",
      sameAs: "https://trustedjurist.co.id",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta Timur",
        addressCountry: "ID",
      },
    },
  }));

  return (
    <div className="tone-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobJsonLd) }}
      />
      <header className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <p className={cn(t.colophon, "text-muted")}>Karier</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className={cn(t.h1, "max-w-[13ch] text-navy")}>
                Bergabung dengan Trusted Jurist
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className={cn(t.lead, "text-muted")}>
                Kami membangun praktik hukum yang teliti, terdokumentasi, dan modern. Tim teknologi membantu firma menjaga pengalaman klien, rekrutmen, dan operasi internal tetap rapi.
              </p>
              <Link
                href="#apply"
                className="mt-8 inline-flex rounded-sm bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-navy-light"
              >
                Ajukan lamaran
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <section className="section-pad-sm tone-paper" aria-labelledby="open-positions">
        <Container>
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className={cn(t.caption, "text-muted")}>Open positions</p>
              <h2 id="open-positions" className={cn(t.h2, "mt-3 text-navy")}>
                Lowongan tersedia
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Semua posisi v1 berbasis Jakarta Timur dengan pola kerja yang disepakati bersama tim.
            </p>
          </div>

          {jobs.length ? (
            <div className="grid gap-5 md:grid-cols-2">
              {jobs.map((job) => (
                <article key={job.id} id={job.id} className="rounded-sm border border-border bg-cream p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                    <span>{job.level}</span>
                    <span aria-hidden>·</span>
                    <span>{job.location}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-navy">{job.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{job.summary}</p>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <ListBlock title="Tanggung jawab" items={job.responsibilities.slice(0, 3)} />
                    <ListBlock title="Kualifikasi" items={job.requiredSkills.slice(0, 3)} />
                  </div>
                  <a
                    href="#apply"
                    className="mt-7 inline-flex rounded-sm border border-navy px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:bg-navy hover:text-cream"
                  >
                    Apply
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-sm border border-border bg-cream p-8">
              <h3 className="font-serif text-3xl text-navy">Tidak ada lowongan saat ini</h3>
              <p className="mt-3 text-muted">Kirim profil singkat ke konsultasi@trustedjurist.co.id untuk peluang berikutnya.</p>
            </div>
          )}
        </Container>
      </section>

      <section className="section-pad-sm" aria-labelledby="working-here">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className={cn(t.caption, "text-muted")}>Working here</p>
              <h2 id="working-here" className={cn(t.h2, "mt-3 text-navy")}>
                Budaya kerja yang presisi
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:col-span-8">
              {[
                ["Dokumentatif", "Keputusan teknis dan hukum dicatat agar dapat diaudit."],
                ["Kecil dan fokus", "Akses langsung ke stakeholder, tanpa lapisan komunikasi yang berlebihan."],
                ["Domain mendalam", "Belajar legal operations, compliance, dan layanan hukum profesional."],
                ["Standar produksi", "Aksesibilitas, keamanan, dan performa diperlakukan sebagai bagian produk."],
              ].map(([title, body]) => (
                <div key={title} className="border-t border-border pt-5">
                  <h3 className="font-serif text-2xl text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-pad-sm tone-navy" aria-labelledby="process">
        <Container>
          <p className={cn(t.caption, "text-cream/70")}>Proses</p>
          <h2 id="process" className="mt-3 font-serif text-4xl text-cream md:text-5xl">
            Apply, review, interview, offer
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {["Kirim lamaran", "Review berkas", "Wawancara", "Offer / keputusan"].map((step, index) => (
              <div key={step} className="border-t border-cream/25 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">0{index + 1}</p>
                <p className="mt-3 text-sm text-cream/85">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad-sm" aria-labelledby="apply-heading">
        <Container size="narrow">
          <p className={cn(t.caption, "text-muted")}>Application form</p>
          <h2 id="apply-heading" className={cn(t.h2, "mt-3 text-navy")}>
            Formulir lamaran
          </h2>
          <div className="mt-10">
            <CareerApplicationForm jobs={jobs} />
          </div>
        </Container>
      </section>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{title}</p>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
