import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { TrustCommitments } from "@/components/TrustCommitments";
import { SectionHeader } from "@/components/SectionHeader";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { ValueCard } from "@/components/ValueCard";
import { InsightCard } from "@/components/InsightCard";
import { FounderCredibility } from "@/components/FounderCredibility";
import { CTASection } from "@/components/CTASection";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import {
  aboutPreview,
  founder,
  founderCredibility,
  insights,
  practiceAreas,
  whyChooseUs,
} from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";

export default function HomePage() {
  const featuredAreas = practiceAreas.slice(0, 4);
  const featuredInsights = insights.slice(0, 3);

  return (
    <>
      <Hero
        headline="Hukum yang Berintegritas. Advokasi yang Dapat Dipercaya."
        subheadline="Trusted Jurist Law Firm hadir sebagai mitra hukum profesional untuk mengawal keadilan, reformasi hukum, dan kepentingan klien dengan integritas tinggi."
      />
      <TrustIndicators />
      <TrustCommitments />

      <section className="py-20 md:py-28" aria-labelledby="about-preview-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="Tentang Kami"
              title={aboutPreview.title}
              description={aboutPreview.description}
              className="mb-0"
            />
            <AnimatedReveal delay={0.15}>
              <div className="rounded-sm border border-border bg-cream-dark/40 p-8 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  Diluncurkan Resmi
                </p>
                <p className="mt-2 font-serif text-2xl text-navy">26 Juni 2025</p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  Beroperasi dari {SITE_CONFIG.location}, Trusted Jurist
                  memfokuskan layanan pada reformasi hukum, antikorupsi,
                  pertambangan, perkebunan, penyelundupan, serta hukum publik dan
                  korporasi — dengan pendekatan tegas dan berpihak pada keadilan.
                </p>
                <ButtonLink
                  href="/about"
                  variant="secondary"
                  className="mt-8"
                >
                  Pelajari Profil Firma
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-cream-dark/30 py-20 md:py-28"
        aria-labelledby="practice-preview-heading"
      >
        <Container>
          <SectionHeader
            eyebrow="Bidang Praktik"
            title="Keahlian Hukum yang Strategis"
            description="Kami mendampingi klien dalam berbagai persoalan hukum kompleks — dari litigasi hingga advisory regulasi sektor."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAreas.map((area, i) => (
              <PracticeAreaCard key={area.id} area={area} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/practice-areas" variant="secondary">
              Lihat Semua Bidang Praktik
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="founder-heading">
        <Container>
          <SectionHeader
            eyebrow="Kepemimpinan"
            title={founder.name}
            description={founder.bio}
          />
          <FounderCredibility data={founderCredibility} />
          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold hover:text-gold-light"
            >
              Lihat Profil Tim
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <section
        className="border-t border-border bg-cream py-20 md:py-28"
        aria-labelledby="why-heading"
      >
        <Container>
          <SectionHeader
            eyebrow="Mengapa Kami"
            title="Pendekatan Hukum Strategis dan Terukur"
            description="Komitmen kami pada integritas dan keadilan tercermin dalam setiap analisis, rekomendasi, dan langkah advokasi yang kami ambil."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <ValueCard key={item.id} value={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="insights-preview-heading">
        <Container>
          <SectionHeader
            eyebrow="Wawasan"
            title="Materi Editorial dalam Penyusunan"
            description="Artikel berikut masih dalam tahap draf editorial atau akan segera hadir — bukan publikasi final."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredInsights.map((article, i) => (
              <InsightCard key={article.id} article={article} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/insights" variant="secondary">
              Lihat Daftar Wawasan
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
