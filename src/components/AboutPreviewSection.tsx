import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPreview, firmProfile } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function AboutPreviewSection() {
  return (
    <section className="tone-cream section-pad" aria-labelledby="about-preview-heading">
      <Container>
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-20">
          <AnimatedReveal className="lg:col-span-5 lg:pt-4">
            <p className={cn(t.eyebrow, "text-gold")}>Tentang kami</p>
            <h2
              id="about-preview-heading"
              className={cn(t.h1, "mt-6 text-navy")}
            >
              {aboutPreview.title}
            </h2>
            <p className={cn(t.lead, "mt-8 text-navy/80")}>
              {aboutPreview.lead}
            </p>
            <p className={cn(t.body, "mt-6 max-w-md text-muted")}>
              {aboutPreview.description}
            </p>
            <Link
              href="/about"
              className={cn(
                "mt-12 inline-flex items-center gap-2 text-navy underline decoration-navy/25 underline-offset-4",
                t.label,
                "transition-colors hover:text-gold hover:decoration-gold/50",
              )}
            >
              Profil lengkap firma
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <blockquote>
              <p className={cn("type-statement text-navy")}>
                {firmProfile.lead}
              </p>
            </blockquote>
            <p className={cn(t.body, "mt-10 max-w-lg text-muted")}>
              {firmProfile.paragraphs[0]}
            </p>
            <dl className="mt-16 flex flex-wrap gap-x-14 gap-y-8 md:mt-20">
              <div>
                <dt className={cn(t.eyebrow, "text-muted")}>Diluncurkan</dt>
                <dd className={cn(t.body, "mt-2 text-navy")}>26 Juni 2025</dd>
              </div>
              <div>
                <dt className={cn(t.eyebrow, "text-muted")}>Kantor</dt>
                <dd className={cn(t.body, "mt-2 text-navy")}>
                  {SITE_CONFIG.location}
                </dd>
              </div>
            </dl>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  );
}
