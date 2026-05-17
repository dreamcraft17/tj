"use client";

import { motion, useReducedMotion } from "framer-motion";
import { credibilityPillars, credibilitySection } from "@/lib/data";
import { DURATION, EASE_PREMIUM, STAGGER } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function CredibilitySection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="bg-navy text-cream section-pad-lg"
      aria-labelledby="credibility-heading"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: DURATION.slow, ease: EASE_PREMIUM }}
          >
            <p className={cn(t.eyebrow, "text-cream/45")}>
              {credibilitySection.eyebrow}
            </p>
            <h2
              id="credibility-heading"
              className={cn(t.h1, "mt-6 text-cream")}
            >
              {credibilitySection.headline}
            </h2>
            <p className={cn(t.lead, "mt-8 text-cream/55")}>
              {credibilitySection.lead}
            </p>
          </motion.div>

          <ul className="lg:col-span-7" role="list">
            {credibilityPillars.map((pillar, index) => (
              <motion.li
                key={pillar.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: DURATION.slow,
                  delay: prefersReducedMotion ? 0 : index * STAGGER.relaxed,
                  ease: EASE_PREMIUM,
                }}
                className="border-t border-cream/10 py-10 first:border-t-0 first:pt-0 last:pb-0 md:py-12"
              >
                <h3 className={cn(t.h3, "text-cream")}>{pillar.title}</h3>
                <p className={cn(t.body, "mt-4 max-w-lg text-cream/50")}>
                  {pillar.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className={cn(t.caption, "mt-20 max-w-xl text-cream/35 lg:mt-28")}>
          Standar ini mengikat setiap keterlibatan profesional — tanpa klaim
          yang tidak dapat dipertanggungjawabkan secara etika advokat.
        </p>
      </Container>
    </section>
  );
}
