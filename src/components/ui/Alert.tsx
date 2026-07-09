"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "success" | "error" | "warning" | "info";

const styles: Record<AlertType, string> = {
  success: "border-success/30 bg-success/10 text-success",
  error: "border-error/30 bg-error/10 text-error",
  warning: "border-warning/30 bg-warning/10 text-warning",
  info: "border-info/30 bg-info/10 text-info",
};

export function Alert({
  type,
  message,
  onClose,
  className,
}: {
  type: AlertType;
  message: string;
  onClose?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3 rounded-md border p-4 text-sm", styles[type], className)} role="status">
      <p className="m-0 text-current">{message}</p>
      {onClose ? (
        <button type="button" onClick={onClose} className="text-current opacity-70 transition-opacity hover:opacity-100" aria-label="Tutup notifikasi">
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  );
}

