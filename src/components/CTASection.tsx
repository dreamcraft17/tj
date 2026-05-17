import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { CTA_LABELS } from "@/lib/constants";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  title = "Perlu pendampingan hukum?",
  description = "Konsultasi awal untuk diagnosis masalah dan arah langkah.",
  primaryLabel = CTA_LABELS.primary,
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="tone-warm section-pad-lg" aria-labelledby="cta-heading">
      <Container>
        <AnimatedReveal>
          <div className="max-w-2xl">
            <h2 id="cta-heading" className={cn(t.h1, "text-navy")}>
              {title}
            </h2>
            <p className={cn(t.lead, "mt-9 text-muted")}>{description}</p>
            <Link
              href={primaryHref}
              className={cn(
                "mt-12 inline-flex items-center gap-2 text-navy underline decoration-navy/25 underline-offset-4",
                t.label,
                "transition-colors hover:text-gold hover:decoration-gold/50",
              )}
            >
              {primaryLabel}
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
