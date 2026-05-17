import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { practiceAreas } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Bidang Praktik",
  description:
    "Layanan hukum Trusted Jurist: litigasi, antikorupsi, hukum korporasi, pertambangan, pidana, kebijakan publik, kepabeanan, dan legal advisory.",
  path: "/practice-areas",
});

export default function PracticeAreasPage() {
  return (
    <>
      <Hero
        headline="Bidang Praktik"
        subheadline="Delapan bidang praktik — dari litigasi hingga opini tingkat direksi."
        compact
      />

      <section className="section-pad-lg">
        <Container>
          <SectionHeader
            eyebrow="Praktik"
            title="Ruang lingkup & output"
            titleId="practice-portfolio-heading"
            description="Setiap bidang mencakup cakupan kerja, profil mandat, dan output hukum yang terdefinisi."
            align="center"
            className="mx-auto max-w-3xl"
          />

          <div className="flow-editorial-lg mt-20 md:mt-28">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.id}
                area={area}
                index={i}
                variant="editorial"
                showConsultLink
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Perlu pendampingan?"
        description="Konsultasi awal untuk diagnosis masalah dan arah langkah."
      />
    </>
  );
}
