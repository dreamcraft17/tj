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
        subheadline="Keahlian multidisiplin untuk menangani persoalan hukum kompleks — dari ruang sidang hingga ruang rapat direksi."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Layanan"
            title="Portofolio Keahlian Hukum"
            description="Setiap bidang praktik didukung analisis mendalam, strategi terukur, dan komitmen pada integritas profesional."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {practiceAreas.map((area, i) => (
              <PracticeAreaCard
                key={area.id}
                area={area}
                index={i}
                showLink
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Diskusikan Kebutuhan Hukum Anda"
        description="Setiap persoalan hukum memiliki konteks unik. Konsultasikan dengan tim Trusted Jurist untuk pemetaan awal risiko dan langkah strategis."
      />
    </>
  );
}
