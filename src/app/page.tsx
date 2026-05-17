import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustIndicators } from "@/components/TrustIndicators";
import { CredibilitySection } from "@/components/CredibilitySection";
import { AboutPreviewSection } from "@/components/AboutPreviewSection";
import { SectionHeader } from "@/components/SectionHeader";
import { PracticeAreasSection } from "@/components/PracticeAreasSection";
import { WhyTrustedJuristSection } from "@/components/WhyTrustedJuristSection";
import { InsightCard } from "@/components/InsightCard";
import { FounderCredibility } from "@/components/FounderCredibility";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import {
  founder,
  founderCredibility,
  insights,
  practiceAreas,
} from "@/lib/data";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

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
      <CredibilitySection />
      <AboutPreviewSection />

      <PracticeAreasSection areas={featuredAreas} />

      <section className="section-pad" aria-labelledby="founder-heading">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Kepemimpinan"
                title={founder.name}
                className="mb-0"
              />
            </div>
            <div className="lg:col-span-7">
              <p
                id="founder-heading"
                className={cn(t.body, "text-muted lg:pt-14")}
              >
                {founder.bio}
              </p>
              <FounderCredibility data={founderCredibility} className="mt-0" />
              <Link
                href="/team"
                className={cn(
                  "mt-12 inline-flex items-center gap-2 border-b border-navy/30 pb-0.5 text-navy",
                  t.label,
                  "transition-colors hover:border-gold hover:text-gold",
                )}
              >
                Profil tim
                <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <WhyTrustedJuristSection />

      <section className="section-pad border-t border-border" aria-labelledby="insights-preview-heading">
        <Container>
          <SectionHeader
            eyebrow="Wawasan"
            title="Materi editorial dalam penyusunan"
            titleId="insights-preview-heading"
            description="Artikel berikut masih dalam tahap draf editorial atau akan segera hadir — bukan publikasi final."
            className="mb-0"
          />
          <div className="mt-16 md:mt-20">
            {featuredInsights.map((article, i) => (
              <InsightCard key={article.id} article={article} index={i} />
            ))}
          </div>
          <Link
            href="/insights"
            className={cn(
              "mt-12 inline-flex items-center gap-2 text-navy",
              t.label,
              "transition-colors hover:text-gold",
            )}
          >
            Daftar wawasan
            <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
          </Link>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
