import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function CTASection({
  title = "Butuh Pendampingan Hukum Profesional?",
  description = "Hubungi Trusted Jurist Law Firm untuk konsultasi awal mengenai kebutuhan hukum Anda. Tim kami siap mendengarkan dan merancang langkah strategis berikutnya.",
  primaryLabel = "Konsultasi Sekarang",
  primaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-navy py-20 md:py-24" aria-labelledby="cta-heading">
      <Container>
        <AnimatedReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="cta-heading"
              className="font-serif text-3xl font-semibold text-cream md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/75 md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href={primaryHref} variant="gold" size="lg">
                {primaryLabel}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
