import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { InsightArticle } from "@/types";
import { formatDate } from "@/lib/utils";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type InsightCardProps = {
  article: InsightArticle;
  index?: number;
};

export function InsightCard({ article, index = 0 }: InsightCardProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article className="group flex h-full flex-col rounded-sm border border-border bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-md">
        <span className="inline-block w-fit rounded-sm bg-navy/5 px-2.5 py-1 text-xs font-medium text-navy">
          {article.category}
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
          <Link href="/insights">{article.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" aria-hidden />
            {formatDate(article.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" aria-hidden />
            {article.readTime}
          </span>
        </div>
      </article>
    </AnimatedReveal>
  );
}
