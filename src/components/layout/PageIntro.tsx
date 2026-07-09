import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/layout/Sections";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs: Array<{ label: string; href?: string }>;
  className?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  crumbs,
  className,
}: PageIntroProps) {
  return (
    <div className={cn("border-b border-gray-border/70 bg-cream-500", className)}>
      <Container className="py-10 md:py-14">
        <Breadcrumb items={crumbs} />
        {eyebrow ? (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold text-navy-700 md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-8 text-gray-text md:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
