import Link from "next/link";
import { CONTACT_CONFIG } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Homepage — quiet envoi, not a marketing CTA band */
export function HomeClosingComposition() {
  return (
    <section
      className="tone-navy section-pad-lg text-cream"
      aria-label="Penutup"
    >
      <Container size="narrow">
        <p className={cn(t.principle, "text-cream/50")}>
          Langkah pertama
        </p>
        <p className={cn(t.h2, "mt-8 max-w-xl text-cream")}>
          Pertemuan awal untuk diagnosis masalah dan arah hukum.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-10">
          <Link
            href="/contact"
            className={cn(t.label, "text-cream transition-colors hover:text-gold")}
          >
            Jadwalkan konsultasi
          </Link>
          <a
            href={`mailto:${CONTACT_CONFIG.email}`}
            className={cn(t.label, "text-cream/50 transition-colors hover:text-cream")}
          >
            {CONTACT_CONFIG.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
