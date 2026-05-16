import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { InsightCard } from "@/components/InsightCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { insights } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Wawasan",
  description:
    "Artikel dan perspektif hukum Trusted Jurist mengenai penegakan hukum, antikorupsi, dan kepatuhan sektor strategis.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Hero
        headline="Wawasan Hukum"
        subheadline="Perspektif editorial mengenai isu penegakan hukum, governance, dan regulasi sektor yang menjadi fokus advokasi kami."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Editorial"
            title="Artikel Terbaru"
            description="Konten ini bersifat informatif dan tidak merupakan nasihat hukum spesifik. Untuk pendampingan resmi, silakan hubungi firma."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
