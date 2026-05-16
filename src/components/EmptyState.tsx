import { FileQuestion } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

type EmptyStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title = "Konten Segera Hadir",
  description = "Bagian ini sedang disiapkan. Silakan hubungi kami untuk informasi lebih lanjut.",
  actionLabel = "Hubungi Kami",
  actionHref = "/contact",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-sm border border-dashed border-border bg-cream-dark/30 px-6 py-16 text-center">
      <FileQuestion className="size-10 text-gold/80" strokeWidth={1.25} aria-hidden />
      <h3 className="mt-4 font-serif text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-muted">{description}</p>
      <ButtonLink href={actionHref} variant="secondary" className="mt-6">
        {actionLabel}
      </ButtonLink>
    </div>
  );
}
