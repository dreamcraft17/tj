import {
  whyTrustedJuristPillars,
  whyTrustedJuristSection,
} from "@/lib/data";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function WhyTrustedJuristSection() {
  return (
    <section
      className="tone-paper section-pad"
      aria-labelledby="why-trusted-jurist-heading"
    >
      <Container>
        <div className="grid gap-24 lg:grid-cols-12 lg:gap-x-24">
          <AnimatedReveal className="lg:col-span-4 lg:pt-2">
            <p className={cn(t.eyebrow, "text-gold")}>
              {whyTrustedJuristSection.eyebrow}
            </p>
            <h2
              id="why-trusted-jurist-heading"
              className={cn(t.h1, "mt-6 text-navy")}
            >
              {whyTrustedJuristSection.title}
            </h2>
            <p className={cn(t.lead, "mt-8 text-muted")}>
              {whyTrustedJuristSection.lead}
            </p>
          </AnimatedReveal>

          <ul className="flow-editorial lg:col-span-7 lg:col-start-6" role="list">
            {whyTrustedJuristPillars.map((pillar, index) => (
              <AnimatedReveal key={pillar.id} delay={index * 0.05}>
                <li>
                  <h3 className={cn(t.h3, "text-navy")}>{pillar.title}</h3>
                  <p className={cn(t.body, "mt-5 max-w-lg text-muted")}>
                    {pillar.description}
                  </p>
                </li>
              </AnimatedReveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
