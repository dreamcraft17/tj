"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { CTA_LABELS } from "@/lib/constants";
import { DURATION, EASE_PREMIUM } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const principles = [
  "Integritas",
  "Keadilan",
  "Profesionalisme",
  "Advokasi strategis",
] as const;

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
};

export function Hero({
  headline,
  subheadline,
  primaryCta = { label: CTA_LABELS.primary, href: "/contact" },
  secondaryCta = { label: "Bidang praktik", href: "/practice-areas" },
  compact = false,
}: HeroProps) {
  return (
    <section
      className="relative bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <Container
        className={cn(
          "relative",
          compact ? "py-32 md:py-36" : "py-36 md:py-44 lg:py-52",
        )}
      >
        <div className="grid lg:grid-cols-12 lg:gap-x-16">
          <motion.div
            className="lg:col-span-8 lg:col-start-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.slow, ease: EASE_PREMIUM }}
          >
            <p className={cn(t.eyebrow, "text-cream/50")}>
              Trusted Jurist · Jakarta
            </p>

            <h1
              id="hero-heading"
              className={cn(
                t.display,
                "mt-10 max-w-[14ch] text-cream lg:mt-12",
              )}
            >
              {headline}
            </h1>
          </motion.div>

          <motion.div
            className={cn(
              "mt-14 lg:col-span-4 lg:col-start-9 lg:mt-24",
              compact && "mt-10 lg:mt-16",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: DURATION.slow,
              delay: 0.15,
              ease: EASE_PREMIUM,
            }}
          >
            <div className="hairline-gold max-w-[3rem]" aria-hidden />

            <p
              className={cn(
                t.lead,
                "mt-8 max-w-md text-cream/65",
              )}
            >
              {subheadline}
            </p>

            {!compact && (
              <>
                <p className="mt-10 text-cream/40">
                  {principles.map((item, i) => (
                    <span key={item}>
                      {i > 0 && (
                        <span className="mx-2.5 text-cream/20" aria-hidden>
                          ·
                        </span>
                      )}
                      <span className={cn(t.caption)}>{item}</span>
                    </span>
                  ))}
                </p>

                <div className="mt-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">
                  <Link
                    href={primaryCta.href}
                    className={cn(
                      "inline-flex items-center gap-2 border-b border-gold pb-1 text-cream",
                      t.label,
                      "transition-colors hover:border-cream hover:text-cream",
                    )}
                  >
                    {primaryCta.label}
                    <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
                  </Link>
                  <Link
                    href={secondaryCta.href}
                    className={cn(
                      "inline-flex items-center gap-2 text-cream/55",
                      t.label,
                      "transition-colors hover:text-cream",
                    )}
                  >
                    {secondaryCta.label}
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </Container>

      <div className="hairline-gold opacity-30" aria-hidden />
    </section>
  );
}
