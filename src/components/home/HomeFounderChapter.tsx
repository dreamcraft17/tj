import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FounderCredibility } from "@/types";
import { founder, founderCredibility } from "@/lib/data";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const marginNotes: {
  key: keyof FounderCredibility;
  label: string;
}[] = [
  { key: "education", label: "Pendidikan" },
  { key: "experience", label: "Pengalaman" },
  { key: "practiceFocus", label: "Fokus" },
];

/** Homepage — portrait chapter with marginalia, not four identical blocks */
export function HomeFounderChapter() {
  return (
    <section
      className="tone-cream section-pad-lg"
      aria-labelledby="founder-heading"
    >
      <Container>
        <div className="grid lg:grid-cols-12 lg:gap-x-12">
          <AnimatedReveal className="lg:col-span-8">
            <p className={cn(t.colophon, "text-muted")}>Kepemimpinan</p>
            <h2
              id="founder-heading"
              className={cn(t.display, "mt-6 max-w-[14ch] text-navy")}
            >
              {founder.name}
            </h2>
            <p className={cn(t.caption, "mt-4 text-gold")}>{founder.title}</p>
            <p className={cn(t.longform, "mt-12 max-w-2xl text-muted")}>
              {founder.bio}
            </p>
            <Link
              href="/team"
              className={cn(
                "mt-12 inline-flex items-center gap-2 text-navy",
                t.label,
                "underline decoration-navy/20 underline-offset-4 transition-colors hover:text-gold",
              )}
            >
              Tim & kepemimpinan
              <ArrowRight className="size-3.5" strokeWidth={1.5} aria-hidden />
            </Link>
          </AnimatedReveal>

          <aside
            className="mt-16 lg:col-span-4 lg:mt-24 lg:pl-4"
            aria-label="Ringkasan kredibilitas"
          >
            <AnimatedReveal delay={0.1}>
              <p className={cn(t.caption, "text-muted")}>
                Catatan profesi
              </p>
              <div className="mt-8 space-y-10">
                {marginNotes.map(({ key, label }) => (
                  <div key={key}>
                    <p className={cn(t.eyebrow, "text-gold/80")}>{label}</p>
                    <ul className="mt-3 space-y-2">
                      {founderCredibility[key].slice(0, 2).map((item) => (
                        <li key={item} className={cn(t.bodySm, "text-muted")}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </aside>
        </div>
      </Container>
    </section>
  );
}
