"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, contactInfo } from "@/lib/data";
import { CTA_LABELS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-cream/85 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container>
        <nav
          className="flex h-[4.5rem] items-center justify-between"
          aria-label="Navigasi utama"
        >
          <Link
            href="/"
            className="group flex flex-col transition-opacity hover:opacity-90"
          >
            <span className="font-serif text-xl font-semibold tracking-tight text-navy md:text-2xl">
              Trusted Jurist
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Law Firm
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors duration-200",
                      active
                        ? "text-gold"
                        : "text-navy/80 hover:text-gold",
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full bg-gold"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" variant="primary" size="sm">
              {CTA_LABELS.nav}
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-navy lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border/60 bg-cream/95 backdrop-blur-lg lg:hidden",
          open ? "block" : "hidden",
        )}
        role="dialog"
        aria-modal={open}
        aria-label="Menu navigasi"
      >
        <Container className="py-6">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-sm px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-navy/5 text-gold"
                        : "text-navy hover:bg-navy/5",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 border-t border-border pt-6">
            <ButtonLink href="/contact" variant="primary" className="w-full">
              {CTA_LABELS.primary}
            </ButtonLink>
            <p className="mt-4 text-center text-xs text-muted">
              {contactInfo.address}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}
