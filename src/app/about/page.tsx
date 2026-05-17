import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AboutProfileEditorial } from "@/components/AboutProfileEditorial";
import { ValueCard } from "@/components/ValueCard";
import { TrustCommitments } from "@/components/TrustCommitments";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";
import { coreValues } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tentang Kami",
  description:
    "Profil Trusted Jurist Law Firm — filosofi firma, komitmen keadilan dan integritas, pendekatan hukum strategis, serta pernyataan etika profesi.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Tentang Trusted Jurist"
        subheadline="Profil firma hukum yang menempatkan keadilan, integritas, dan pendekatan advokasi strategis sebagai landasan setiap keterlibatan profesional."
        compact
      />

      <AboutProfileEditorial />

      <TrustCommitments />

      <section className="section-pad border-t border-border">
        <Container>
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Nilai inti"
              title="Prinsip yang mengatur praktik kami"
              description="Nilai-nilai berikut menjadi rujukan operasional dalam setiap mandat hukum yang kami tangani."
              className="mb-0"
            />
          </div>
          <div className="mt-16 md:mt-20">
            {coreValues.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
