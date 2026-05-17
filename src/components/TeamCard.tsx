import type { TeamMember } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type TeamCardProps = {
  member: TeamMember;
  index?: number;
};

export function TeamCard({ member, index = 0 }: TeamCardProps) {
  return (
    <AnimatedReveal delay={index * 0.08}>
      <article className="max-w-xl py-6">
        <p className={cn(t.caption, "text-muted")}>{member.title}</p>
        <h3 className={cn(t.h2, "mt-4 text-navy")}>{member.name}</h3>
        {member.credentials && (
          <p className={cn(t.caption, "mt-3 text-muted")}>
            {member.credentials}
          </p>
        )}
        <p className={cn(t.longform, "mt-8 text-muted")}>{member.bio}</p>
      </article>
    </AnimatedReveal>
  );
}
