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
        </header>
      </AnimatedReveal>

      <div className="flow-editorial mt-20 md:mt-28 md:grid md:grid-cols-2 md:gap-x-20">
        {pillars.map((pillar, i) => (
          <AnimatedReveal key={pillar.id} delay={0.08 + i * 0.06}>
            <article>
              <h3 className={cn(t.h3, "text-navy")}>{pillar.title}</h3>
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
