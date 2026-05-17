"use client";

import { motion, useReducedMotion } from "framer-motion";
import { credibilityPillars, credibilitySection } from "@/lib/data";
import { DURATION, EASE_PREMIUM } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Homepage — manifesto chapter: pull quote + two-column body, not sticky sidebar list */
export function HomeCredibilityChapter() {
  const prefersReducedMotion = useReducedMotion();
  const [leadPillar, ...supporting] = credibilityPillars;

  return (
    <section
      className="tone-navy section-pad-lg text-cream"
      aria-labelledby="credibility-heading"
    >
      <Container size="narrow">
        <motion.p
          className={cn(t.colophon, "text-cream/40")}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_PREMIUM }}
        >
          {credibilitySection.eyebrow}
        </motion.p>

        <h2
          id="credibility-heading"
          className={cn(t.h1, "mt-8 max-w-[20ch] text-cream")}
        >
          {credibilitySection.headline}
        </h2>

        <p className={cn(t.lead, "mt-10 max-w-xl text-cream/55")}>
          {credibilitySection.lead}
        </p>
      </Container>

      <Container className="mt-24 md:mt-32 lg:mt-40">
        <blockquote className="max-w-4xl">
          <p className={cn("type-statement text-cream/90")}>
            {leadPillar.title}
          </p>
          <p className={cn(t.longform, "mt-8 max-w-2xl text-cream/50")}>
            {leadPillar.description}
          </p>
        </blockquote>

        <div className="mt-24 grid gap-20 md:mt-36 md:grid-cols-2 md:gap-x-24 md:gap-y-24">
          {supporting.map((pillar, index) => (
            <motion.article
              key={pillar.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: DURATION.slow,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: EASE_PREMIUM,
              }}
            >
              <h3 className={cn(t.h3, "text-cream")}>{pillar.title}</h3>
              <p className={cn(t.body, "mt-5 text-cream/50")}>
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>

        <p className={cn(t.caption, "mt-28 max-w-md text-cream/35 md:mt-40")}>
          Berlaku pada setiap mandat — sesuai kode etik advokat.
        </p>
      </Container>
    </section>
  );
}
