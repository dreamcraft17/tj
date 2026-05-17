"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { cnInteractive } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type PracticeAreaCardProps = {
  area: PracticeArea;
  index?: number;
  variant?: "preview" | "editorial";
  showConsultLink?: boolean;
};

function ScopeBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="max-w-md">
      <p className={cn(t.eyebrow, "text-gold")}>{label}</p>
      <p className={cn(t.bodySm, "mt-3 text-muted")}>{text}</p>
    </div>
  );
}

export function PracticeAreaCard({
  area,
  index = 0,
  variant = "preview",
  showConsultLink = true,
}: PracticeAreaCardProps) {
  const isEditorial = variant === "editorial";
  const displayIndex = String(index + 1).padStart(2, "0");
  const offset = index % 2 === 1;

  if (!isEditorial) {
    return (
      <AnimatedReveal delay={index * 0.06}>
        <article
          className={cn(
            "group border-t border-border py-12 md:py-14",
            offset && "md:pl-12 lg:pl-20",
          )}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-12">
            <div className="md:max-w-xl">
              <p className={cn(t.caption, "tabular-nums text-muted")}>
                {displayIndex}
              </p>
              <h3 className={cn(t.h3, "mt-4 text-navy")}>{area.title}</h3>
              <p className={cn(t.body, "mt-5 text-muted")}>{area.description}</p>
            </div>
            <div className="md:w-72 md:shrink-0 md:pt-8">
              <p className={cn(t.eyebrow, "text-muted")}>Ruang lingkup</p>
              <p className={cn(t.bodySm, "mt-3 text-muted/90")}>{area.scope}</p>
            </div>
          </div>
          <Link
            href={`/practice-areas#${area.id}`}
            className={cn(
              "mt-8 inline-flex items-center gap-2 text-navy",
              t.label,
              cnInteractive.link,
            )}
          >
            Selengkapnya
            <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
          </Link>
        </article>
      </AnimatedReveal>
    );
  }

  return (
    <AnimatedReveal delay={index * 0.07}>
      <article
        id={area.id}
        className="scroll-mt-32 border-t border-border py-16 md:py-20"
      >
        <p className={cn(t.caption, "tabular-nums text-muted")}>
          {displayIndex}
        </p>
        <h3 className={cn(t.h2, "mt-5 max-w-2xl text-navy")}>{area.title}</h3>
        <p className={cn(t.lead, "mt-6 max-w-2xl text-muted")}>
          {area.description}
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          <ScopeBlock label="Ruang lingkup" text={area.scope} />
          <ScopeBlock label="Kebutuhan klien" text={area.clientNeeds} />
          <ScopeBlock label="Output hukum" text={area.legalOutput} />
        </div>

        {showConsultLink && (
          <Link
            href="/contact"
            className={cn(
              "mt-12 inline-flex items-center gap-2 border-b border-gold pb-0.5 text-gold",
              t.label,
              cnInteractive.link,
            )}
          >
            Jadwalkan konsultasi
            <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
          </Link>
        )}
      </article>
    </AnimatedReveal>
  );
}
