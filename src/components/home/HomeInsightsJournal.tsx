import Link from "next/link";
import type { InsightArticle, InsightStatus } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const statusLabel: Record<InsightStatus, string> = {
  "editorial-draft": "Draf editorial",
  "coming-soon": "Segera hadir",
};

type HomeInsightsJournalProps = {
  articles: InsightArticle[];
};

/** Homepage — feature article + briefs, not three identical cards */
export function HomeInsightsJournal({ articles }: HomeInsightsJournalProps) {
  const [feature, ...briefs] = articles;

  return (
    <section
      className="tone-cream section-pad"
      aria-labelledby="home-insights-heading"
    >
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <div>
            <p className={cn(t.colophon, "text-muted")}>Wawasan</p>
            <h2
              id="home-insights-heading"
              className={cn(t.h2, "mt-4 text-navy")}
            >
              Materi editorial
            </h2>
          </div>
          <p className={cn(t.bodySm, "max-w-xs text-muted md:text-right")}>
            Draf internal — bukan publikasi final.
          </p>
        </div>

        <AnimatedReveal className="mt-20 md:mt-28">
          <article aria-label={`${feature.title} — ${statusLabel[feature.status]}`}>
            <div className="flex flex-wrap items-baseline gap-3">
              <span className={cn(t.caption, "text-gold")}>
                {feature.category}
              </span>
              <span className={cn(t.caption, "text-muted")}>
                {statusLabel[feature.status]} · {feature.readTime}
              </span>
            </div>
            <h3 className={cn(t.h1, "mt-6 max-w-3xl text-navy")}>
              {feature.title}
            </h3>
            <p className={cn(t.lead, "mt-6 max-w-2xl text-muted")}>
              {feature.excerpt}
            </p>
          </article>
        </AnimatedReveal>

        {briefs.length > 0 && (
          <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-2 md:gap-x-20">
            {briefs.map((article, i) => (
              <AnimatedReveal key={article.id} delay={0.08 + i * 0.05}>
                <article>
                  <p className={cn(t.caption, "text-muted")}>
                    {article.category} · {statusLabel[article.status]}
                  </p>
                  <h3 className={cn(t.h3, "mt-3 text-navy")}>
                    {article.title}
                  </h3>
                  <p className={cn(t.body, "mt-3 text-muted")}>
                    {article.excerpt}
                  </p>
                </article>
              </AnimatedReveal>
            ))}
          </div>
        )}

        <Link
          href="/insights"
          className={cn(
            "mt-14 inline-block text-navy md:mt-20",
            t.label,
            "transition-colors hover:text-gold",
          )}
        >
          Arsip wawasan →
        </Link>
      </Container>
    </section>
  );
}
