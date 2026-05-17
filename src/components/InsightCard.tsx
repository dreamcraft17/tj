import type { InsightArticle, InsightStatus } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const statusLabel: Record<InsightStatus, string> = {
  "editorial-draft": "Draf editorial",
  "coming-soon": "Segera hadir",
};

type InsightCardProps = {
  article: InsightArticle;
  index?: number;
};

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  return (
    <AnimatedReveal delay={index * 0.06}>
      <article
        className="py-16 md:py-20"
        aria-label={`${article.title} — ${statusLabel[article.status]}`}
      >
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className={cn(t.caption, "text-muted")}>{article.category}</span>
          <span className={cn(t.caption, "text-gold")}>
            {statusLabel[article.status]}
          </span>
        </div>
        <h3 className={cn(t.h3, "mt-4 text-navy")}>{article.title}</h3>
        <p className={cn(t.body, "mt-4 max-w-lg text-muted")}>
          {article.excerpt}
        </p>
        <p className={cn(t.caption, "mt-5 text-muted/70")}>
          Estimasi bacaan {article.readTime} · Belum dipublikasikan
        </p>
      </article>
    </AnimatedReveal>
  );
}
