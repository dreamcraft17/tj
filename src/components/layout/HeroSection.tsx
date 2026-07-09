"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type TrustIndicator = {
  icon?: React.ReactNode;
  text: string;
};

type HeroSectionProps = {
  headline: string;
  subheadline?: string;
  backgroundImage?: string;
  cta1Text?: string;
  cta2Text?: string;
  cta1Href?: string;
  cta2Href?: string;
  trustIndicators?: TrustIndicator[];
  className?: string;
};

/**
 * Full-bleed marketing hero from the Trusted Jurist design system.
 * Prefer this for landing-style banners; use `Hero` for editorial page headers.
 */
export function HeroSection({
  headline,
  subheadline,
  backgroundImage,
  cta1Text = "Konsultasi Sekarang",
  cta2Text = "Pelajari Lebih Lanjut",
  cta1Href = "/contact",
  cta2Href = "/practice-areas",
  trustIndicators = [],
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[70vh] items-center justify-center bg-navy-700 bg-cover bg-center",
        className,
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-navy-900/55" aria-hidden />

      <Container className="relative z-10 flex flex-col items-center py-24 text-center md:py-32">
        <h1 className="max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
          {headline}
        </h1>

        {subheadline ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            {subheadline}
          </p>
        ) : null}

        {trustIndicators.length > 0 ? (
          <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
            {trustIndicators.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-2 text-sm text-white md:text-base"
              >
                {item.icon ? <span aria-hidden>{item.icon}</span> : null}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex w-full max-w-md flex-col justify-center gap-4 sm:max-w-none sm:flex-row">
          <Link
            href={cta1Href}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-gold-500 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-300"
          >
            {cta1Text}
          </Link>
          <Link
            href={cta2Href}
            className="inline-flex min-h-11 items-center justify-center rounded-sm border border-gold-500 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-gold-300 transition-colors hover:bg-gold-500 hover:text-white"
          >
            {cta2Text}
          </Link>
        </div>
      </Container>
    </section>
  );
}
