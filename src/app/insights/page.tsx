import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { InsightCard } from "@/components/InsightCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { insights } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Wawasan",
  description:
    "Materi wawasan hukum Trusted Jurist — draf editorial dan konten yang akan segera hadir. Bukan publikasi final.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Hero
        headline="Wawasan Hukum"
        subheadline="Perspektif editorial tentang penegakan hukum, tata kelola, dan regulasi sektor — dalam penyusunan."
        compact
      />

      <section className="section-pad-lg">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Editorial"
            title="Daftar Materi dalam Penyusunan"
            description="Draf editorial atau segera hadir. Publikasi setelah review internal."
          />
          <p className={cn(t.caption, "mt-12 max-w-xl text-muted")}>
            Tidak ada artikel yang dipublikasikan pada tahap ini. Topik di bawah
            bersifat indikatif, bukan publikasi resmi.
          </p>
          <div className="flow-editorial-lg mt-16 md:mt-24">
            {insights.map((article, i) => (
              <InsightCard key={article.id} article={article} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
