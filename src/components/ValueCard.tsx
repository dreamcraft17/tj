import type { CoreValue } from "@/types";
import { DynamicIcon } from "@/components/ui/IconMap";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type ValueCardProps = {
  value: CoreValue | { id: string; title: string; description: string; icon: string };
  index?: number;
};

export function ValueCard({ value, index = 0 }: ValueCardProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article className="rounded-sm border border-border bg-cream p-6 transition-shadow duration-300 hover:shadow-md">
        <div className="mb-4 inline-flex size-10 items-center justify-center rounded-sm bg-gold/10 text-gold">
          <DynamicIcon name={value.icon} className="size-5" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-navy">
          {value.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {value.description}
        </p>
      </article>
    </AnimatedReveal>
  );
}
