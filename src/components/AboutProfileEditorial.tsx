import {
  firmPhilosophy,
  firmProfile,
  justiceIntegrityCommitment,
  professionalEthicsStatement,
  strategicLegalApproach,
  vision,
  mission,
} from "@/lib/data";
import { EditorialBlock } from "@/components/editorial/EditorialBlock";
import { EditorialProse } from "@/components/editorial/EditorialProse";
import { ApproachPillars } from "@/components/editorial/ApproachPillars";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function AboutProfileEditorial() {
  return (
    <>
      {/* Opening editorial */}
      <section className="tone-cream section-pad">
        <Container size="narrow">
          <AnimatedReveal>
            <p className={cn(t.eyebrow, "text-gold")}>Profil Firma</p>
            <h1 className={cn(t.h1, "mt-5 text-navy")}>
              {firmProfile.title}
            </h1>
          </AnimatedReveal>

          <EditorialProse
            lead={firmProfile.lead}
            paragraphs={firmProfile.paragraphs}
            className="mt-10 max-w-none"
          />
        </Container>
      </section>

      {/* Philosophy — full-bleed inset */}
      <section className="tone-warm section-pad">
        <Container size="narrow">
          <EditorialBlock section={firmPhilosophy} variant="inset" />
        </Container>
      </section>

      {/* Justice & integrity */}
      <section className="tone-cream section-pad">
        <Container size="narrow">
          <EditorialBlock section={justiceIntegrityCommitment} index={1} />
        </Container>
      </section>

      {/* Strategic approach */}
      <section className="tone-paper section-pad">
        <Container size="narrow">
          <ApproachPillars
            eyebrow={strategicLegalApproach.eyebrow}
            title={strategicLegalApproach.title}
            lead={strategicLegalApproach.lead}
            pillars={strategicLegalApproach.pillars}
          />
        </Container>
      </section>

      {/* Professional ethics */}
      <section className="tone-navy section-pad text-cream">
        <Container size="narrow">
          <AnimatedReveal>
            <article id={professionalEthicsStatement.id} className="scroll-mt-28">
              <p className={cn(t.eyebrow, "text-gold")}>
                {professionalEthicsStatement.eyebrow}
              </p>
              <h2 className={cn(t.h2, "mt-4 text-cream")}>
                {professionalEthicsStatement.title}
              </h2>
              <p className={cn(t.lead, "mt-6 text-cream/85")}>
                {professionalEthicsStatement.lead}
              </p>
              <div className="mt-10 space-y-6">
                {professionalEthicsStatement.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className={cn(t.body, "text-cream/70 max-w-none")}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </AnimatedReveal>
        </Container>
      </section>

      {/* Vision & mission — editorial two-column */}
      <section className="tone-cream section-pad">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <AnimatedReveal>
              <article>
                <p className={cn(t.eyebrow, "text-gold")}>Arah Jangka Panjang</p>
                <h2 className={cn(t.h3, "mt-4 text-navy")}>
                  {vision.title}
                </h2>
                <p className={cn(t.body, "mt-6 text-muted max-w-none")}>
                  {vision.content}
                </p>
              </article>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <article>
                <p className={cn(t.eyebrow, "text-gold")}>Mandat Operasional</p>
                <h2 className={cn(t.h3, "mt-4 text-navy")}>
                  {mission.title}
                </h2>
                <ul className="mt-8 space-y-5">
                  {mission.items.map((item) => (
                    <li key={item} className={cn(t.body, "text-muted max-w-none")}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimatedReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
