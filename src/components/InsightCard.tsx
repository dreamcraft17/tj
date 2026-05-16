import type { InsightArticle, InsightStatus } from "@/types";
import { Clock, FilePen } from "lucide-react";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { cn } from "@/lib/utils";

const statusConfig: Record<
  InsightStatus,
  { label: string; className: string }
> = {
  "editorial-draft": {
    label: "Draf Editorial",
    className: "bg-gold/15 text-navy border border-gold/30",
  },
  "coming-soon": {
    label: "Segera Hadir",
    className: "bg-navy/5 text-navy-muted border border-border",
  },
};

type InsightCardProps = {
  article: InsightArticle;
  index?: number;
};

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  const status = statusConfig[article.status];

  return (
    <AnimatedReveal delay={index * 0.08}>
      <article
        className={cn(
          "flex h-full flex-col rounded-sm border border-dashed border-border bg-cream p-6",
          "opacity-95",
        )}
        aria-label={`${article.title} — ${status.label}`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-sm bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy">
            {article.category}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wide",
              status.className,
            )}
          >
            <FilePen className="size-3" aria-hidden />
            {status.label}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-navy">
          {article.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>

        <p className="mt-4 text-xs leading-relaxed text-muted/80">
          Artikel ini belum dipublikasikan. Konten final akan tersedia setelah
          proses editorial internal selesai.
        </p>

        <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted">
          <Clock className="size-3.5" aria-hidden />
          <span>Estimasi bacaan {article.readTime}</span>
        </div>
      </article>
    </AnimatedReveal>
  );
}
