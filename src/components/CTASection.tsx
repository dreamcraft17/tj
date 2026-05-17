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
  title = "Butuh pendampingan hukum profesional?",
  description = "Jadwalkan konsultasi awal untuk membahas kebutuhan hukum Anda dan langkah strategis berikutnya.",
  primaryLabel = CTA_LABELS.primary,
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="border-t border-border bg-cream" aria-labelledby="cta-heading">
      <Container className="section-pad">
        <AnimatedReveal>
          <div className="max-w-2xl">
            <h2 id="cta-heading" className={cn(t.h1, "text-navy")}>
              {title}
            </h2>
            <p className={cn(t.lead, "mt-7 text-muted")}>{description}</p>
            <Link
              href={primaryHref}
              className={cn(
                "mt-10 inline-flex items-center gap-2 border-b border-navy pb-0.5 text-navy",
                t.label,
                "transition-colors hover:border-gold hover:text-gold",
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
