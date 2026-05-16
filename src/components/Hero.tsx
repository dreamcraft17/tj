"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

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
  primaryCta = { label: "Konsultasi Sekarang", href: "/contact" },
  secondaryCta = { label: "Pelajari Layanan", href: "/practice-areas" },
  compact = false,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(184,134,11,0.12)_0%,_transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full border border-gold/10"
        aria-hidden
      />

      <Container
        className={compact ? "py-24 md:py-28" : "py-28 md:py-36 lg:py-44"}
      >
        <div className="relative max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
          >
            Trusted Jurist Law Firm · Jakarta
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl font-semibold leading-[1.15] md:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg"
          >
            {subheadline}
          </motion.p>

          {!compact && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <ButtonLink href={primaryCta.href} variant="gold" size="lg">
                {primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink
                href={secondaryCta.href}
                variant="outlineLight"
                size="lg"
              >
                {secondaryCta.label}
              </ButtonLink>
            </motion.div>
          )}
        </div>
      </Container>

      <div
        className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden
      />
    </section>
  );
}
