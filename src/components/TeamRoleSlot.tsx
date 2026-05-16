import { Users } from "lucide-react";
import type { TeamRoleSlot as TeamRoleSlotType } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type TeamRoleSlotProps = {
  slot: TeamRoleSlotType;
  index?: number;
};

export function TeamRoleSlot({ slot, index = 0 }: TeamRoleSlotProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article className="flex h-full flex-col rounded-sm border border-dashed border-border bg-cream/50 p-8 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-sm bg-navy/5 text-gold/80">
          <Users className="size-7" strokeWidth={1.25} aria-hidden />
        </div>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
          Posisi Sedang Disusun
        </p>
        <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
          {slot.role}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {slot.description}
        </p>
        <p className="mt-6 text-xs text-muted/70">
          Pengumuman resmi akan dipublikasikan melalui halaman ini.
        </p>
      </article>
    </AnimatedReveal>
  );
}
