import type { EditorialSection } from "@/types";
import { AnimatedReveal } from "@/components/AnimatedReveal";
import { EditorialProse } from "@/components/editorial/EditorialProse";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type EditorialBlockProps = {
  section: EditorialSection;
  index?: number;
  variant?: "default" | "inset";
};

export function EditorialBlock({
  section,
  index = 0,
  variant = "default",
}: EditorialBlockProps) {
  const isInset = variant === "inset";

  return (
    <AnimatedReveal delay={index * 0.06}>
      <article
        id={section.id}
        className={cn(
          "scroll-mt-28",
          isInset && "tone-warm p-8 md:p-10 lg:p-12",
        )}
      >
        <header className={cn(isInset ? "" : "max-w-3xl")}>
          <p className={cn(t.eyebrow, "text-gold")}>{section.eyebrow}</p>
          <h2
            className={cn(
              "mt-4 text-navy",
              isInset ? t.h3 : t.h2,
            )}
          >
            {section.title}
          </h2>
        </header>

        <EditorialProse
          lead={section.lead}
          paragraphs={section.paragraphs}
          className={cn("mt-8", isInset ? "max-w-none" : "max-w-3xl")}
        />
      </article>
    </AnimatedReveal>
  );
}
