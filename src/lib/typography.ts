import { cn } from "@/lib/utils";

/**
 * Typography utility class names — pair with color utilities (text-navy, text-muted, etc.)
 */
export const type = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  lead: "type-lead",
  body: "type-body",
  bodySm: "type-body-sm",
  caption: "type-caption",
  eyebrow: "type-eyebrow",
  label: "type-label",
  measure: "type-measure",
  measureWide: "type-measure-wide",
} as const;

export function heading(
  level: "display" | "h1" | "h2" | "h3" | "h4",
  className?: string,
) {
  return cn(type[level], className);
}

export function prose(className?: string) {
  return cn(type.body, "text-muted", className);
}
