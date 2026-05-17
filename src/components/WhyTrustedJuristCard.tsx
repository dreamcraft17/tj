import type { WhyTrustedJuristPillar } from "@/types";
import { DynamicIcon } from "@/components/ui/IconMap";
import { MotionStaggerItem } from "@/components/motion/MotionStagger";
import { cnInteractive } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type WhyTrustedJuristCardProps = {
  pillar: WhyTrustedJuristPillar;
  index: number;
  className?: string;
};

export function WhyTrustedJuristCard({
  pillar,
  index,
  className,
}: WhyTrustedJuristCardProps) {
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <MotionStaggerItem className={className}>
      <article
        className={cn(
          "group relative flex h-full flex-col",
          cnInteractive.card,
        )}
      >
        <div
          className="pointer-events-none absolute -inset-px rounded-sm bg-gradient-to-br from-gold/35 via-gold/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div
          className={cn(
            "relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-cream",
            "p-8 md:p-9 lg:p-10",
            "transition-all duration-500",
            "group-hover:border-gold/30",
            "group-hover:shadow-[0_24px_56px_-16px_rgba(15,26,46,0.14)]",
          )}
        >
          <div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/30 to-transparent opacity-80"
            aria-hidden
          />

          <div className="flex items-start justify-between gap-4">
            <div
              className={cn(
                "relative flex size-14 shrink-0 items-center justify-center rounded-sm",
                "border border-gold/20 bg-gradient-to-br from-gold/[0.12] to-gold/[0.04]",
                "text-gold transition-all duration-500",
                "group-hover:border-gold/35 group-hover:shadow-[0_8px_24px_-8px_rgba(184,134,11,0.25)]",
              )}
            >
              <div
                className="absolute inset-1 rounded-sm border border-gold/10"
                aria-hidden
              />
              <DynamicIcon
                name={pillar.icon}
                className="relative size-6"
                strokeWidth={1.35}
              />
            </div>
            <span
              className={cn(
                t.display,
                "select-none font-light tabular-nums text-navy/[0.07] transition-colors duration-500 group-hover:text-gold/20",
              )}
              aria-hidden
            >
              {displayIndex}
            </span>
          </div>

          <div className="mt-8 flex flex-1 flex-col">
            <p className={cn(t.eyebrow, "text-gold/90")}>{pillar.titleEn}</p>
            <h3 className={cn(t.h3, "mt-3 text-navy")}>{pillar.title}</h3>
            <p className={cn(t.body, "mt-5 flex-1 text-muted")}>
              {pillar.description}
            </p>
          </div>

          <div
            className="mt-8 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700 group-hover:w-full"
            aria-hidden
          />
        </div>
      </article>
    </MotionStaggerItem>
  );
}
