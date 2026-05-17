import { trustIndicators } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function TrustIndicators() {
  return (
    <section className="tone-paper py-12 md:py-14" aria-label="Profil firma">
      <Container>
        <ul
          className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-16 md:gap-y-8"
          role="list"
        >
          {trustIndicators.map((item) => (
            <li key={item.id} className="min-w-[9rem]">
              <p className={cn(t.eyebrow, "text-muted")}>{item.label}</p>
              <p className={cn(t.h4, "mt-2 text-navy")}>{item.value}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
