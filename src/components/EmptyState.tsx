import { ButtonLink } from "@/components/ui/Button";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title = "Konten segera hadir",
  description = "Sedang disiapkan. Hubungi firma untuk informasi.",
  actionLabel = "Kontak",
  actionHref = "/contact",
}: EmptyStateProps) {
  return (
    <div className="max-w-md py-16 text-left">
      <h3 className={cn(t.h3, "text-navy")}>{title}</h3>
      <p className={cn(t.body, "mt-4 text-muted")}>{description}</p>
      <ButtonLink href={actionHref} variant="secondary" className="mt-8">
        {actionLabel}
      </ButtonLink>
    </div>
  );
}
