import { trustIndicators } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

/** Homepage-only — asymmetric fact strip, not a four-column grid */
export function HomeTrustColophon() {
  const [primary, ...rest] = trustIndicators;

  return (
    <section className="tone-paper section-pad-sm" aria-label="Profil firma">
      <Container>
        <div className="grid gap-14 md:grid-cols-12 md:items-end md:gap-x-12">
          <div className="md:col-span-5 lg:col-span-4">
            <p className={cn(t.colophon, "text-muted")}>Profil operasional</p>
            <p className={cn(t.h3, "mt-4 text-navy")}>{primary.value}</p>
            <p className={cn(t.caption, "mt-2 text-muted")}>{primary.label}</p>
          </div>
          <ul
            className="flex flex-col gap-10 sm:flex-row sm:flex-wrap md:col-span-7 md:justify-end lg:col-span-8 lg:gap-x-16"
            role="list"
          >
            {rest.map((item) => (
              <li key={item.id} className="sm:max-w-[11rem]">
                <p className={cn(t.caption, "text-muted")}>{item.label}</p>
                <p className={cn(t.body, "mt-1.5 text-navy")}>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
