import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPreview, firmProfile } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Homepage — interrupted grid: full-bleed quote between asymmetric columns */
export function HomeAboutSpread() {
  return (
    <section
      className="tone-cream section-pad-lg"
      aria-labelledby="about-preview-heading"
    >
      <Container>
        <AnimatedReveal className="max-w-2xl">
          <p className={cn(t.eyebrow, "text-gold")}>Tentang kami</p>
          <h2 id="about-preview-heading" className={cn(t.h1, "mt-6 text-navy")}>
            {aboutPreview.title}
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.06} className="mt-14 max-w-lg md:mt-20">
          <p className={cn(t.lead, "text-navy/85")}>{aboutPreview.lead}</p>
          <p className={cn(t.longform, "mt-6 text-muted")}>
            {aboutPreview.description}
          </p>
        </AnimatedReveal>
      </Container>

      <div className="relative my-28 md:my-36 lg:my-44">
        <Container>
          <blockquote className="lg:ml-[8%] lg:max-w-3xl">
            <p className={cn("type-statement text-navy")}>{firmProfile.lead}</p>
          </blockquote>
        </Container>
      </div>

      <Container>
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-20">
          <AnimatedReveal
            delay={0.1}
            className="lg:col-span-5 lg:col-start-8 lg:pt-6"
          >
            <p className={cn(t.longform, "text-muted")}>
              {firmProfile.paragraphs[0]}
            </p>
          </AnimatedReveal>

          <AnimatedReveal
            delay={0.14}
            className="flex flex-col justify-end lg:col-span-4 lg:row-start-1 lg:pt-2"
          >
            <dl className="space-y-8">
              <div>
                <dt className={cn(t.caption, "text-muted")}>Diluncurkan</dt>
                <dd className={cn(t.h4, "mt-2 text-navy")}>26 Juni 2025</dd>
              </div>
              <div>
                <dt className={cn(t.caption, "text-muted")}>Kantor</dt>
                <dd className={cn(t.h4, "mt-2 text-navy")}>
                  {SITE_CONFIG.location}
                </dd>
              </div>
            </dl>
            <Link
              href="/about"
              className={cn(
                "mt-16 inline-flex items-center gap-2 text-navy",
                t.label,
                "underline decoration-navy/20 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/50",
              )}
            >
              Profil lengkap
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
