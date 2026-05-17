import type { ApproachPillar } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ApproachPillarsProps = {
  eyebrow: string;
  title: string;
  lead: string;
  pillars: ApproachPillar[];
};

export function ApproachPillars({
  eyebrow,
  title,
  lead,
  pillars,
}: ApproachPillarsProps) {
  return (
    <section id="strategic-approach" className="scroll-mt-28">
      <AnimatedReveal>
        <header className="max-w-3xl">
          <p className={cn(t.eyebrow, "text-gold")}>{eyebrow}</p>
          <h2 className={cn(t.h2, "mt-4 text-navy")}>{title}</h2>
          <p className={cn(t.lead, "mt-6 text-navy/90")}>{lead}</p>
          <div
            className="mt-6 h-px w-12 bg-gradient-to-r from-gold/80 to-transparent"
            aria-hidden
          />
        </header>
      </AnimatedReveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
        {pillars.map((pillar, i) => (
          <AnimatedReveal key={pillar.id} delay={0.08 + i * 0.06}>
            <article className="h-full bg-cream p-8 md:p-9">
              <p className={cn(t.eyebrow, "tabular-nums text-muted/70")}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className={cn(t.h3, "mt-3 text-navy")}>
                {pillar.title}
              </h3>
              <p className={cn(t.bodySm, "mt-4 text-muted")}>
                {pillar.description}
              </p>
            </article>
          </AnimatedReveal>
        ))}
      </div>
    </section>
  );
}
