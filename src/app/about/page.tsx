import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ValueCard } from "@/components/ValueCard";
import { CTASection } from "@/components/CTASection";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { coreValues, firmProfile, mission, vision } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tentang Kami",
  description:
    "Profil Trusted Jurist Law Firm — visi, misi, dan nilai inti firma hukum yang berkomitmen pada reformasi hukum dan integritas di Jakarta.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        headline="Tentang Trusted Jurist"
        subheadline="Firma hukum yang lahir dari komitmen pada keadilan, reformasi hukum, dan penegakan hukum berintegritas di Indonesia."
        compact
      />

      <section className="py-20 md:py-28">
        <Container size="narrow">
          <SectionHeader eyebrow="Profil" title={firmProfile.title} />
          <div className="space-y-6">
            {firmProfile.paragraphs.map((paragraph, i) => (
              <AnimatedReveal key={i} delay={i * 0.1}>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream-dark/30 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <AnimatedReveal>
              <h2 className="font-serif text-3xl font-semibold text-navy">
                {vision.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {vision.content}
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <h2 className="font-serif text-3xl font-semibold text-navy">
                {mission.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {mission.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Nilai Inti"
            title="Prinsip yang Menjadi Landasan Kami"
            description="Setiap layanan hukum dibangun di atas nilai-nilai yang tidak dapat ditawar."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <ValueCard key={value.id} value={value} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
