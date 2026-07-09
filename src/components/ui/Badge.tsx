import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error";

const variants: Record<BadgeVariant, string> = {
  primary: "bg-navy-700/10 text-navy-700",
  secondary: "bg-gold-500/10 text-gold-500",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export function Badge({
  label,
  variant = "primary",
  className,
}: {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center rounded-sm px-2 py-1 text-xs font-semibold uppercase tracking-[0.1em]", variants[variant], className)}>
      {label}
    </span>
  );
}

