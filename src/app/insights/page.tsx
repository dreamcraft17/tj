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
    "Materi wawasan hukum Trusted Jurist — draf editorial dan konten yang akan segera hadir. Bukan publikasi final.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Hero
        headline="Wawasan Hukum"
        subheadline="Ruang perspektif editorial mengenai penegakan hukum, governance, dan regulasi sektor — dalam tahap penyusunan."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Editorial"
            title="Daftar Materi dalam Penyusunan"
            description="Seluruh artikel di halaman ini ditandai sebagai draf editorial atau segera hadir. Konten final akan dipublikasikan setelah proses review internal."
            align="center"
          />
          <div className="mb-10 rounded-sm border border-gold/30 bg-gold/5 px-5 py-4 text-center text-sm text-muted">
            Tidak ada artikel yang dipublikasikan pada tahap ini. Informasi di
            bawah ini bersifat indikatif topik editorial, bukan publikasi resmi.
          </div>
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
