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

      <section className="py-24 md:py-32 lg:py-36">
        <Container>
          <SectionHeader
            eyebrow="Layanan Hukum"
            title="Portofolio Keahlian & Ruang Lingkup"
            titleId="practice-portfolio-heading"
            description="Setiap bidang praktik disusun dengan deskripsi layanan, cakupan kerja, profil kebutuhan klien, dan output hukum yang dapat diharapkan — demi transparansi dan kepastian sejak awal keterlibatan."
            align="center"
            className="mx-auto max-w-3xl"
          />

          <div className="mt-16 space-y-12 md:mt-20 md:space-y-14 lg:space-y-16">
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
        title="Diskusikan Kebutuhan Hukum Anda"
        description="Setiap persoalan hukum memiliki konteks unik. Jadwalkan konsultasi awal dengan tim Trusted Jurist untuk pemetaan risiko dan langkah strategis."
      />
    </>
  );
}
