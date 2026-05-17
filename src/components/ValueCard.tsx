import type { CoreValue } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ValueCardProps = {
  value: CoreValue | { id: string; title: string; description: string; icon: string };
};

export function ValueCard({ value }: ValueCardProps) {
  return (
    <AnimatedReveal>
      <article className="border-t border-border py-8">
        <h3 className={cn(t.h4, "text-navy")}>{value.title}</h3>
        <p className={cn(t.bodySm, "mt-3 text-muted")}>{value.description}</p>
      </article>
    </AnimatedReveal>
  );
}
