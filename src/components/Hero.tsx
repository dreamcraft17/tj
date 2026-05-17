"use client";

import Link from "next/link";
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

  return (
    <section
      className="relative bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <Container
        className={cn(
          "relative",
          compact
            ? "py-32 md:py-40 lg:py-44"
            : "py-44 md:py-52 lg:py-[min(32vh,16rem)]",
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
            "mt-24 md:mt-28 lg:mt-32",
            compact ? "max-w-3xl" : "max-w-[52rem]",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: DURATION.slow,
            delay: 0.08,
            ease: EASE_PREMIUM,
          }}
        >
          <p className={cn(t.principle, "text-cream/55")}>{legalPrinciple}</p>

          <h1
            id="hero-heading"
            className={cn(
              t.display,
              "mt-8 text-cream md:mt-10",
              compact ? "max-w-[18ch]" : "max-w-[16ch] md:max-w-[14ch]",
            )}
          >
            {headline}
          </h1>

          <p
            className={cn(
              t.deck,
              "mt-10 max-w-2xl text-cream/75 md:mt-12",
              compact && "mt-8",
            )}
          >
            {subheadline}
          </p>

          {editorialNote && !compact && (
            <p
              className={cn(
                t.longform,
                "mt-8 max-w-md text-cream/45 md:mt-10 lg:ml-[12%] lg:max-w-sm",
              )}
            >
              {editorialNote}
            </p>
          )}
        </motion.div>

        {showLinks && (
          <motion.footer
            className="mt-28 flex flex-wrap items-baseline gap-x-12 gap-y-2 md:mt-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: DURATION.slow,
              delay: 0.2,
              ease: EASE_PREMIUM,
            }}
          >
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={cn(
                  t.colophon,
                  "text-cream/40 transition-colors hover:text-cream/70",
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={cn(
                  t.colophon,
                  "text-cream/50 transition-colors hover:text-cream",
                )}
              >
                {primaryCta.label}
              </Link>
            )}
          </motion.footer>
        )}
      </Container>
    </section>
  );
}
