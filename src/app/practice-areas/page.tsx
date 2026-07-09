import type { Metadata } from "next";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { CTASection } from "@/components/CTASection";
import { PageIntro } from "@/components/layout";
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
      <PageIntro
        eyebrow="Praktik"
        title="Bidang Praktik"
        description="Delapan bidang praktik — dari litigasi hingga opini tingkat direksi. Setiap bidang mencakup cakupan kerja, profil mandat, dan output hukum yang terdefinisi."
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Bidang Praktik" },
        ]}
      />

      <section
        className="section-pad-lg"
        aria-labelledby="practice-portfolio-heading"
      >
        <Container>
          <h2 id="practice-portfolio-heading" className="sr-only">
            Ruang lingkup & output
          </h2>
          <div className="flow-editorial-lg">
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
