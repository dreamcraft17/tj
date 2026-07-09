import type { Metadata } from "next";
import { AboutProfileEditorial } from "@/components/AboutProfileEditorial";
import { ValueCard } from "@/components/ValueCard";
import { TrustCommitments } from "@/components/TrustCommitments";
import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { PageIntro } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { coreValues } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tentang Kami",
  description:
    "Profil Trusted Jurist — filosofi firma, metodologi kerja, etika advokat, dan nilai inti.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Profil firma"
        title="Tentang Trusted Jurist"
        description="Firma hukum di persimpangan hukum publik, korporasi, dan regulasi sektor — berkantor di Jakarta Timur."
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Tentang Kami" },
        ]}
      />

      <AboutProfileEditorial />

      <TrustCommitments />

      <section className="tone-paper section-pad">
        <Container>
          <div className="max-w-2xl">
            <SectionHeader
              eyebrow="Nilai inti"
              title="Nilai inti"
              description="Rujukan operasional dalam setiap mandat."
              className="mb-0"
            />
          </div>
          <div className="flow-editorial mt-20 md:mt-28">
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
