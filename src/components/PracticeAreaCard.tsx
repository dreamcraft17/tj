import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { DynamicIcon } from "@/components/ui/IconMap";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { cn } from "@/lib/utils";

type PracticeAreaCardProps = {
  area: PracticeArea;
  index?: number;
  showLink?: boolean;
};

export function PracticeAreaCard({
  area,
  index = 0,
  showLink = true,
}: PracticeAreaCardProps) {
  return (
    <AnimatedReveal delay={index * 0.06}>
      <article
        className={cn(
          "group relative flex h-full flex-col rounded-sm border border-border bg-cream p-6 transition-all duration-300",
          "hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5",
        )}
      >
        <div className="mb-4 inline-flex size-11 items-center justify-center rounded-sm bg-navy/5 text-gold transition-colors group-hover:bg-gold/10">
          <DynamicIcon name={area.icon} className="size-5" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-navy">
          {area.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {area.description}
        </p>
        {showLink && (
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            Konsultasi bidang ini
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </article>
    </AnimatedReveal>
  );
}
