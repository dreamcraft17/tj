import { trustIndicators } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function TrustIndicators() {
  return (
    <section className="border-b border-border/80 bg-cream" aria-label="Profil firma">
      <Container className="py-10 md:py-12">
        <ul
          className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-x-12 md:gap-y-6"
          role="list"
        >
          {trustIndicators.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                "min-w-[9rem]",
                i > 0 && "sm:border-l sm:border-border/80 sm:pl-12",
              )}
            >
              <p className={cn(t.eyebrow, "text-muted")}>{item.label}</p>
              <p className={cn(t.h4, "mt-2 text-navy")}>{item.value}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
