import type { TeamRoleSlot as TeamRoleSlotType } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type TeamRoleSlotProps = {
  slot: TeamRoleSlotType;
  index?: number;
};

export function TeamRoleSlot({ slot, index = 0 }: TeamRoleSlotProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article className="max-w-sm py-8">
        <p className={cn(t.caption, "text-muted")}>Posisi sedang disusun</p>
        <h3 className={cn(t.h3, "mt-4 text-navy")}>{slot.role}</h3>
        <p className={cn(t.body, "mt-5 text-muted")}>{slot.description}</p>
      </article>
    </AnimatedReveal>
  );
}
