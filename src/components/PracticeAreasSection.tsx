import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { PracticeAreaCard } from "@/components/PracticeAreaCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type PracticeAreasSectionProps = {
  areas: PracticeArea[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showViewAll?: boolean;
  className?: string;
};

export function PracticeAreasSection({
  areas,
  eyebrow = "Bidang praktik",
  title = "Keahlian hukum yang mendalam",
  description = "Pendampingan litigasi, regulasi, dan advisory strategis — dengan ruang lingkup yang jelas dan output yang terukur.",
  showViewAll = true,
  className,
}: PracticeAreasSectionProps) {
  return (
    <section
      className={cn("section-pad", className)}
      aria-labelledby="practice-areas-section-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            titleId="practice-areas-section-heading"
            description={description}
            className="mb-0"
          />
        </div>

        <div className="mt-20 md:mt-24">
          {areas.map((area, i) => (
            <PracticeAreaCard
              key={area.id}
              area={area}
              index={i}
              variant="preview"
            />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-16 border-t border-border pt-12 md:mt-20">
            <Link
              href="/practice-areas"
              className={cn(
                "inline-flex items-center gap-2 text-navy",
                t.label,
                "transition-colors hover:text-gold",
              )}
            >
              Semua bidang praktik
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
