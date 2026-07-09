import { Hero } from "@/components/Hero";
import { ArrowRight, Award, BriefcaseBusiness, Building2, CheckCircle2, FileSearch, Gavel, ShieldCheck, UsersRound } from "lucide-react";
import { ContentSection, GridSection, TwoColumnSection } from "@/components/layout";
import { ButtonLink } from "@/components/ui/Button";
import { DesignPracticeAreaCard, JobPostingCard } from "@/components/ui/DesignCards";
import { Card } from "@/components/ui/Card";
import { listJobs } from "@/lib/careers/store";
import { insights, practiceAreas } from "@/lib/data";
import { CONTACT_CONFIG } from "@/lib/data";

export default function HomePage() {
  const featuredAreas = practiceAreas.slice(0, 4);
  const featuredInsights = insights.slice(0, 3);
  const featuredJobs = listJobs("published").slice(0, 3);
  const practiceIcons = [BriefcaseBusiness, FileSearch, ShieldCheck, Gavel];

  return (
    <>
      <Hero
        legalPrinciple="Diagnosis sebelum eksekusi"
        headline="Firma Hukum Terpercaya di Jakarta"
        subheadline="Solusi hukum strategis untuk bisnis dan individu, dengan integritas profesi, diagnosis risiko, dan advokasi terukur."
        editorialNote="Beroperasi sejak 26 Juni 2025. Kantor di Sunter. Mandat pada isu yang membutuhkan analisis mendalam dan posisi tegas."
        primaryCta={{ label: "Konsultasi Sekarang", href: "/contact" }}
        secondaryCta={{ label: "Pelajari Bidang Praktik", href: "/practice-areas" }}
      />

      <GridSection
        title="Mengapa Memilih Trusted Jurist"
        subtitle="Komitmen kami terhadap standar kerja hukum yang rapi, terukur, dan dapat dipertanggungjawabkan."
        columns={3}
        backgroundColor="cream"
      >
        {[
          {
            icon: CheckCircle2,
            title: "Profesional",
            body: "Setiap mandat diawali pemetaan fakta, regulasi, risiko, dan tujuan klien.",
          },
          {
            icon: UsersRound,
            title: "Terpercaya",
            body: "Komunikasi jelas, dokumentasi perkara tertib, dan kerahasiaan informasi terkelola.",
          },
          {
            icon: Award,
            title: "Berintegritas",
            body: "Rekomendasi hukum disusun dari analisis objektif, bukan tekanan non-hukum.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="h-full text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-sm bg-gold-500/10 text-gold-500">
                <Icon className="size-7" strokeWidth={1.6} aria-hidden />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-700">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-text">{item.body}</p>
            </Card>
          );
        })}
      </GridSection>

      <TwoColumnSection
        title="Tentang Trusted Jurist"
        subtitle="Perjalanan menuju keunggulan hukum"
        imagePosition="left"
        content="Trusted Jurist adalah firma hukum Indonesia yang beroperasi pada persimpangan hukum publik, korporasi, dan regulasi sektor. Kami menangani persoalan yang membutuhkan analisis mendalam, posisi tegas, dan dokumentasi proses yang jelas."
        cta={{ text: "Baca Selengkapnya", href: "/about" }}
        backgroundColor="white"
      >
        <div className="grid min-h-80 place-items-center rounded-md border border-gray-border bg-navy-700 p-8 text-white shadow-large">
          <div className="text-center">
            <Building2 className="mx-auto size-16 text-gold-300" strokeWidth={1.4} aria-hidden />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              {CONTACT_CONFIG.address.line1}
            </p>
            <p className="mt-3 font-serif text-4xl font-semibold">Sunter, Jakarta Timur</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-cream/70">
              Kantor untuk konsultasi, strategi perkara, dan koordinasi mandat hukum.
            </p>
          </div>
        </div>
      </TwoColumnSection>

      <GridSection
        title="Area Praktik Kami"
        subtitle="Layanan hukum komprehensif untuk kebutuhan litigasi, regulasi, korporasi, dan kepentingan publik."
        columns={4}
        backgroundColor="white"
      >
        {featuredAreas.map((area, index) => {
          const Icon = practiceIcons[index] ?? Gavel;

          return (
            <DesignPracticeAreaCard
              key={area.id}
              icon={<Icon className="size-12" strokeWidth={1.4} aria-hidden />}
              title={area.title}
              description={area.description}
              href={`/practice-areas#${area.id}`}
            />
          );
        })}
      </GridSection>

      <ContentSection
        title="Bergabung Dengan Kami"
        subtitle="Kami mencari talenta yang teliti, dokumentatif, dan siap membangun operasi hukum modern."
        backgroundColor="cream"
      >
        {featuredJobs.length ? (
          <div className="grid gap-6 md:grid-cols-3">
            {featuredJobs.map((job) => (
              <JobPostingCard
                key={job.id}
                title={job.title}
                level={job.level}
                description={job.summary}
              />
            ))}
          </div>
        ) : (
          <Card className="text-center">
            <h3 className="font-serif text-2xl font-semibold text-navy-700">
              Belum ada lowongan aktif
            </h3>
            <p className="mt-3 text-sm text-gray-text">
              Profil singkat tetap dapat dikirim untuk peluang berikutnya.
            </p>
          </Card>
        )}
        <div className="mt-10 text-center">
          <ButtonLink href="/careers" variant="secondary">
            Lihat Semua Posisi
          </ButtonLink>
        </div>
      </ContentSection>

      <ContentSection
        title="Wawasan Terbaru"
        subtitle="Catatan hukum singkat untuk membaca risiko, regulasi, dan arah strategi."
        backgroundColor="white"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featuredInsights.map((article) => (
            <Card key={article.id} hoverable className="flex h-full flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500">
                {article.category}
              </p>
              <h3 className="mt-4 font-serif text-2xl font-semibold text-navy-700">
                {article.title}
              </h3>
              <p className="mt-3 line-clamp-3 flex-grow text-sm leading-7 text-gray-text">
                {article.excerpt}
              </p>
              <ButtonLink href="/insights" variant="ghost" size="sm" className="mt-6 w-fit px-0">
                Baca Wawasan
                <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
              </ButtonLink>
            </Card>
          ))}
        </div>
      </ContentSection>

      <section className="bg-navy-700 py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center sm:px-10 lg:px-14 xl:px-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            Konsultasi awal
          </p>
          <h2 className="max-w-2xl font-serif text-4xl font-semibold md:text-5xl">
            Perlu pendampingan hukum yang terukur?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-cream/70">
            Ceritakan konteks awal. Tim kami akan membantu memetakan isu,
            risiko, dan opsi langkah berikutnya.
          </p>
          <ButtonLink href="/contact" variant="gold">
            Konsultasi Sekarang
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
