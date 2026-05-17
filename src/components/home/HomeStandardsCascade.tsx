import { whyTrustedJuristPillars, whyTrustedJuristSection } from "@/lib/data";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Homepage — zigzag standards, not sidebar + list duplicate of credibility */
export function HomeStandardsCascade() {
  return (
    <section
      className="tone-paper section-pad-lg"
      aria-labelledby="home-standards-heading"
    >
      <Container>
        <p className={cn(t.colophon, "text-muted")}>
          {whyTrustedJuristSection.eyebrow}
        </p>
        <h2
          id="home-standards-heading"
          className={cn(t.h1, "mt-6 max-w-[18ch] text-navy")}
        >
          {whyTrustedJuristSection.title}
        </h2>
        <p className={cn(t.lead, "mt-8 max-w-xl text-muted")}>
          {whyTrustedJuristSection.lead}
        </p>

        <ol className="flow-editorial-lg mt-24 md:mt-32" role="list">
          {whyTrustedJuristPillars.map((pillar, index) => {
            const alignRight = index % 2 === 1;
            return (
              <AnimatedReveal key={pillar.id} delay={index * 0.04}>
                <li className={alignRight ? "md:flex md:justify-end" : undefined}>
                  <article
                    className={cn(
                      "max-w-md",
                      alignRight && "md:text-right",
                      index === 0 && "md:max-w-lg",
                    )}
                  >
                    <h3
                      className={cn(
                        index === 0 ? t.h2 : t.h3,
                        "text-navy",
                      )}
                    >
                      {pillar.title}
                    </h3>
                    <p className={cn(t.longform, "mt-6 text-muted")}>
                      {pillar.description}
                    </p>
                  </article>
                </li>
              </AnimatedReveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
