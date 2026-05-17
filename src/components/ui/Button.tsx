"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cnInteractive } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy text-cream border border-navy hover:bg-navy-light",
  secondary:
    "bg-transparent text-navy border border-navy/25 hover:border-navy",
  gold: "bg-gold text-cream border border-gold hover:bg-gold-light",
  ghost: "bg-transparent text-cream border border-cream/30 hover:border-cream/60",
  outlineLight:
    "bg-transparent text-cream border border-cream/35 hover:border-cream",
} as const;

const sizes = {
  sm: "px-4 py-2",
  md: "px-6 py-2.5",
  lg: "px-7 py-3",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2",
    t.label,
    cnInteractive.button,
    variants[variant],
    sizes[size],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {isLoading ? (
        <>
          <span
            className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden
          />
          <span>Memproses...</span>
        </>
      ) : (
        children
      )}
    </button>
  ),
);

Button.displayName = "Button";

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonLinkProps) {
  const classes = buttonClasses(variant, size, className);
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
