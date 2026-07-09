"use client";

import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cnInteractive } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-navy-700 text-white border border-navy-700 hover:bg-navy-500 active:bg-navy-700",
  secondary:
    "bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-white",
  gold: "bg-gold-500 text-white border border-gold-500 hover:bg-gold-300",
  ghost: "bg-transparent text-navy-700 border border-transparent hover:bg-gray-light",
  outlineLight:
    "bg-transparent text-cream border border-cream/35 hover:border-cream",
} as const;

const sizes = {
  sm: "min-h-10 px-4 py-2",
  md: "min-h-11 px-6 py-3",
  lg: "min-h-12 px-7 py-3.5 text-sm",
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
    "rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
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
