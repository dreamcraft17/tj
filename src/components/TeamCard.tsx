import { User } from "lucide-react";
import type { TeamMember } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { cnInteractive } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  member: TeamMember;
  index?: number;
};

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article
        className={cn(
          "flex h-full flex-col rounded-sm border border-border bg-cream p-8",
          cnInteractive.card,
          "hover:border-gold/30",
        )}
      >
        <div className="mb-5 flex size-16 items-center justify-center rounded-sm bg-navy text-cream">
          <User className="size-8" strokeWidth={1.25} aria-hidden />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
          {member.title}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-navy">
          {member.name}
        </h3>
        {member.credentials && (
          <p className="mt-1 text-sm text-muted">{member.credentials}</p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {member.bio}
        </p>
      </article>
    </AnimatedReveal>
  );
}
