import { trustIndicators } from "@/lib/data";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";

export function TrustIndicators() {
  return (
    <section className="border-b border-border bg-cream-dark/50 py-12" aria-label="Indikator kepercayaan">
      <Container>
        <ul className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <AnimatedReveal key={item.id} delay={index * 0.08}>
              <li className="text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-lg font-medium text-navy md:text-xl">
                  {item.value}
                </p>
              </li>
            </AnimatedReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
