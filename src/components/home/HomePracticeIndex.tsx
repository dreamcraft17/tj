import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PracticeArea } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type HomePracticeIndexProps = {
  areas: PracticeArea[];
};

/** Homepage — one featured discipline + compact index, not repeated cards */
export function HomePracticeIndex({ areas }: HomePracticeIndexProps) {
  const [featured, ...index] = areas;

  return (
    <section
      className="tone-warm section-pad"
      aria-labelledby="home-practice-heading"
    >
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className={cn(t.colophon, "text-muted")}>Bidang praktik</p>
            <h2
              id="home-practice-heading"
              className={cn(t.h2, "mt-4 max-w-md text-navy")}
            >
              Delapan bidang praktik
            </h2>
          </div>
          <p className={cn(t.bodySm, "max-w-xs text-muted md:text-right")}>
            Litigasi, regulasi, dan advisory — korporasi dan kepentingan publik.
          </p>
        </div>

        <AnimatedReveal className="mt-20 md:mt-28">
          <article className="grid gap-12 lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-7">
              <h3 className={cn(t.h2, "text-navy")}>{featured.title}</h3>
              <p className={cn(t.lead, "mt-6 text-navy/80")}>
                {featured.description}
              </p>
              <p className={cn(t.longform, "mt-8 max-w-lg text-muted")}>
                {featured.scope}
              </p>
              <Link
                href={`/practice-areas#${featured.id}`}
                className={cn(
                  "mt-10 inline-flex items-center gap-2 text-navy",
                  t.label,
                  "transition-colors hover:text-gold",
                )}
              >
                {featured.title}
                <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
              </Link>
            </div>
            <div className="lg:col-span-5 lg:pl-8 xl:pl-14">
              <p className={cn(t.caption, "mb-8 text-muted")}>
                Bidang lainnya
              </p>
              <ul className="space-y-12" role="list">
                {index.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={`/practice-areas#${area.id}`}
                      className="group block"
                    >
                      <span
                        className={cn(
                          t.h4,
                          "block text-navy transition-colors group-hover:text-gold",
                        )}
                      >
                        {area.title}
                      </span>
                      <span
                        className={cn(
                          t.bodySm,
                          "mt-2 line-clamp-2 text-muted",
                        )}
                      >
                        {area.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </AnimatedReveal>

        <Link
          href="/practice-areas"
          className={cn(
            "mt-16 inline-block text-navy md:mt-20",
            t.label,
            "underline decoration-navy/20 underline-offset-4 transition-colors hover:text-gold",
          )}
        >
          Indeks lengkap delapan bidang praktik
        </Link>
      </Container>
    </section>
  );
}
