import { cn } from "@/lib/utils";
import { type as t } from "@/lib/typography";

type EditorialProseProps = {
  lead?: string;
  paragraphs: string[];
  className?: string;
};

export function EditorialProse({
  lead,
  paragraphs,
  className,
}: EditorialProseProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {lead && (
        <p className={cn(t.lead, "text-navy/90 type-measure-wide")}>{lead}</p>
      )}
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 48)}
          className={cn(t.body, "text-muted type-measure-wide max-w-none")}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
