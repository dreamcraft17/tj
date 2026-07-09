"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Scale, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";
import { DURATION, EASE_PREMIUM } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const DEFAULT_PRINCIPLE = "Kepastian hukum mengikat setiap mandat";

type HeroProps = {
  headline: string;
  subheadline: string;
  legalPrinciple?: string;
  editorialNote?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  colophon?: string;
  compact?: boolean;
};

export function Hero({
  headline,
  subheadline,
  legalPrinciple = DEFAULT_PRINCIPLE,
  editorialNote,
  primaryCta,
  secondaryCta,
  colophon,
  compact = false,
}: HeroProps) {
  const year = new Date(SITE_CONFIG.launchedDate).getFullYear();
  const mastheadRight = colophon ?? `Jakarta · ${year}`;
  const showLinks = !compact && (primaryCta || secondaryCta);
  const trustItems = [
    { icon: CalendarDays, label: "Berdiri", value: "26 Juni 2025" },
    { icon: MapPin, label: "Kantor", value: "Sunter, Jakarta Timur" },
    { icon: Scale, label: "Praktik", value: "Litigasi & regulasi" },
    { icon: ShieldCheck, label: "Standar", value: "Kode etik advokat" },
  ];

  return (
    <section
      className="relative isolate min-h-[72vh] overflow-hidden bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(23,19,15,0.98)_0%,rgba(36,27,24,0.9)_48%,rgba(75,52,48,0.68)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 -z-20 hidden w-[54%] bg-[url('/file.svg')] bg-[length:34rem_auto] bg-center bg-no-repeat opacity-[0.08] lg:block"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(to_top,rgba(247,244,239,0.08),transparent)]"
        aria-hidden
      />
      <Container
        className={cn(
          "relative flex min-h-[72vh] flex-col justify-center",
          compact
            ? "py-28 md:py-36 lg:py-40"
            : "py-36 md:py-44 lg:py-48",
        )}
      >
        <motion.header
          className="flex flex-col gap-3 pb-2 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.slow, ease: EASE_PREMIUM }}
        >
          <p className={cn(t.colophon, "text-cream/40")}>
            {SITE_CONFIG.shortName} Law Firm
          </p>
          <p className={cn(t.colophon, "text-cream/35 sm:text-right")}>
            {mastheadRight}
          </p>
        </motion.header>

        <motion.div
          className={cn(
            "mx-auto mt-16 flex max-w-4xl flex-col items-center text-center md:mt-20",
            compact ? "max-w-3xl" : "max-w-4xl",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: DURATION.slow,
            delay: 0.08,
            ease: EASE_PREMIUM,
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
            {legalPrinciple}
          </p>

          <h1
            id="hero-heading"
            className={cn(
              t.display,
              "mt-6 text-balance text-cream md:mt-8",
              compact ? "max-w-[18ch]" : "max-w-[15ch]",
            )}
          >
            {headline}
          </h1>

          <p
            className={cn(
              t.deck,
              "mt-7 max-w-2xl text-cream/78 md:mt-8",
              compact && "mt-8",
            )}
          >
            {subheadline}
          </p>

          {editorialNote && !compact && (
            <p
              className={cn(
                t.longform,
                "mt-7 max-w-xl text-cream/58 md:mt-8",
              )}
            >
              {editorialNote}
            </p>
          )}
        </motion.div>

        {!compact && (
          <motion.footer
            className="mt-12 flex flex-col items-center gap-10 md:mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: DURATION.slow,
              delay: 0.2,
              ease: EASE_PREMIUM,
            }}
          >
            {showLinks ? (
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-sm bg-gold-500 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-300 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-navy"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-cream/35 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-cream hover:bg-cream/5"
                  >
                    {secondaryCta.label}
                    <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
                  </Link>
                )}
              </div>
            ) : null}

            <dl className="grid w-full max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-md border border-cream/12 bg-cream/[0.06] px-4 py-4 text-left backdrop-blur"
                  >
                    <Icon className="size-5 shrink-0 text-gold-300" strokeWidth={1.7} aria-hidden />
                    <div>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">
                        {item.label}
                      </dt>
                      <dd className="mt-1 text-sm text-cream/88">{item.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </motion.footer>
        )}
      </Container>
    </section>
  );
}
