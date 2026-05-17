"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation, contactInfo } from "@/lib/data";
import { CTA_LABELS } from "@/lib/constants";
import { cnInteractive } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

const SCROLL_THRESHOLD = 16;
const easePremium = [0.22, 1, 0.36, 1] as const;

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
  light: boolean;
  onClick?: () => void;
  className?: string;
};

function DesktopNavLink({ href, label, active, light, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative px-1 py-2 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
        active
          ? "text-gold"
          : light
            ? "text-cream/75 hover:text-cream"
            : "text-navy/70 hover:text-navy",
      )}
    >
      {label}
      {active ? (
        <motion.span
          layoutId="nav-active-indicator"
          className="absolute -bottom-0.5 left-0 h-px w-full bg-gold"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          aria-hidden
        />
      ) : (
        <span
          className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold/70 transition-all duration-300 ease-out group-hover:w-full"
          aria-hidden
        />
      )}
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const lightOnHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
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
    <div className="relative">
      <motion.div
        className={cn(
          "transition-[background-color,box-shadow,border-color] duration-500 ease-out",
          scrolled
            ? "border-b border-border bg-cream/95"
            : lightOnHero
              ? "border-b border-cream/10 bg-navy/0"
              : "border-b border-transparent bg-cream/80",
        )}
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(250, 248, 245, 0.92)"
            : lightOnHero
              ? "rgba(10, 18, 32, 0.28)"
              : "rgba(250, 248, 245, 0.72)",
        }}
        transition={{ duration: 0.45, ease: easePremium }}
      >
        <Container>
          <nav
            className="flex h-20 items-center justify-between gap-8"
            aria-label="Navigasi utama"
          >
            <Link
              href="/"
              className="group shrink-0 transition-opacity duration-300 hover:opacity-90"
            >
              <span
                className={cn(
                  "block font-serif text-[1.35rem] font-semibold leading-none tracking-tight transition-colors duration-400 md:text-2xl",
                  lightOnHero ? "text-cream" : "text-navy",
                )}
              >
                Trusted Jurist
              </span>
              <span
                className={cn(
                  "mt-1.5 block text-[9px] uppercase tracking-[0.28em] transition-colors duration-400",
                  lightOnHero ? "text-gold/90" : "text-gold",
                )}
              >
                Law Firm
              </span>
            </Link>

            <ul className="hidden items-center gap-10 lg:flex">
              {navigation.map((item) => (
                <li key={item.href}>
                  <DesktopNavLink
                    href={item.href}
                    label={item.label}
                    active={isActivePath(pathname, item.href)}
                    light={lightOnHero}
                  />
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-6 lg:flex">
              <Link
                href="/contact"
                className={cn(
                  "border-b pb-0.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors",
                  lightOnHero
                    ? "border-cream/40 text-cream hover:border-cream"
                    : "border-navy/30 text-navy hover:border-gold hover:text-gold",
                )}
              >
                {CTA_LABELS.nav}
              </Link>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-sm border transition-all duration-300 lg:hidden",
                lightOnHero
                  ? "border-cream/15 text-cream hover:border-gold/40 hover:bg-cream/5"
                  : "border-border text-navy hover:border-gold/40 hover:bg-navy/5",
                open && "border-gold/40 bg-navy/5",
              )}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Tutup menu" : "Buka menu"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {open ? (
                  <X className="size-5" strokeWidth={1.5} />
                ) : (
                  <Menu className="size-5" strokeWidth={1.5} />
                )}
              </motion.div>
            </button>
          </nav>
        </Container>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 top-20 z-40 bg-navy/40 backdrop-blur-[2px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal
              aria-label="Menu navigasi"
              className="absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-border/60 bg-cream/98 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: easePremium }}
            >
              <Container className="py-8">
                <motion.ul
                  className="flex flex-col"
                  role="list"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.06 } },
                  }}
                >
                  {navigation.map((item) => {
                    const active = isActivePath(pathname, item.href);
                    return (
                      <motion.li
                        key={item.href}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.35, ease: easePremium },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-4 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300",
                            active
                              ? "text-gold"
                              : "text-navy/80 hover:text-navy",
                          )}
                        >
                          {item.label}
                          {active && (
                            <span
                              className="size-1.5 rounded-full bg-gold"
                              aria-hidden
                            />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.35, ease: easePremium }}
                  className="mt-10 pt-6"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center justify-center border border-navy/20 bg-navy px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.16em] text-cream transition-colors duration-300 hover:bg-navy-light"
                  >
                    {CTA_LABELS.primary}
                  </Link>
                  <p className="mt-5 text-center text-[11px] tracking-wide text-muted">
                    {contactInfo.address}
                  </p>
                </motion.div>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
