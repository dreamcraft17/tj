import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";
import { AnimatedReveal } from "@/components/AnimatedReveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2";
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className,
  titleAs = "h2",
}: SectionHeaderProps) {
  const TitleTag = titleAs;

  return (
    <AnimatedReveal
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn(t.eyebrow, "text-gold")}>{eyebrow}</p>
      )}
      <TitleTag
        id={titleId}
        className={cn(
          titleAs === "h1" ? t.h1 : t.h2,
          "mt-6 text-navy",
          align === "center" && "mx-auto type-measure-wide",
        )}
      >
        {title}
      </TitleTag>
      {description && (
        <p
          className={cn(
            t.lead,
            "mt-9 text-muted",
            align === "center" ? "mx-auto type-measure" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </AnimatedReveal>
  );
}
