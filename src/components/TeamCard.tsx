import { User } from "lucide-react";
import type { TeamMember } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
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
          "flex h-full flex-col rounded-sm border border-border bg-cream p-6 transition-all duration-300",
          member.isPlaceholder
            ? "border-dashed opacity-80"
            : "hover:-translate-y-1 hover:border-gold/30 hover:shadow-md",
        )}
      >
        <div
          className={cn(
            "mb-5 flex size-16 items-center justify-center rounded-sm",
            member.isPlaceholder ? "bg-navy/5" : "bg-navy text-cream",
          )}
        >
          <User className="size-8" strokeWidth={1.25} aria-hidden />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
          {member.title}
        </p>
        <h3 className="mt-2 font-serif text-xl font-semibold text-navy">
          {member.name}
        </h3>
        {member.credentials && !member.isPlaceholder && (
          <p className="mt-1 text-sm text-muted">{member.credentials}</p>
        )}
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
          {member.bio}
        </p>
        {member.isPlaceholder && (
          <p className="mt-4 text-xs text-muted/80">
            Posisi akan diumumkan resmi.
          </p>
        )}
      </article>
    </AnimatedReveal>
  );
}
