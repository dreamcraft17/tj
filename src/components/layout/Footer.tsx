import Link from "next/link";
import {
  CONTACT_CONFIG,
  contactInfo,
  footerPracticeLinks,
  navigation,
} from "@/lib/data";
import { FOOTER_DESCRIPTION, FOOTER_LEGAL, SITE_CONFIG } from "@/lib/constants";
import { cnInteractive } from "@/lib/motion";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <p className={cn(t.eyebrow, "text-cream/40")}>{children}</p>;
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(t.bodySm, "text-cream/60", cnInteractive.link)}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <Container className="section-pad">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <p className={cn(t.h3, "text-cream")}>Trusted Jurist</p>
              <p className={cn(t.eyebrow, "mt-2 text-cream/40")}>Law Firm</p>
            </Link>
            <p className={cn(t.body, "mt-8 max-w-sm text-cream/55")}>
              {FOOTER_DESCRIPTION}
            </p>
            <Link
              href="/contact"
              className={cn(
                "mt-10 inline-block text-cream underline decoration-cream/30 underline-offset-4",
                t.label,
                "transition-colors hover:decoration-gold hover:text-gold",
              )}
            >
              Jadwalkan konsultasi
            </Link>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <FooterHeading>Navigasi</FooterHeading>
              <ul className="mt-5 space-y-3" role="list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Bidang praktik</FooterHeading>
              <ul className="mt-5 space-y-2.5" role="list">
                {footerPracticeLinks.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
              <Link
                href="/practice-areas"
                className={cn(t.caption, "mt-4 inline-block text-gold/70 hover:text-gold")}
              >
                Lihat semua
              </Link>
            </div>

            <div>
              <FooterHeading>Kantor</FooterHeading>
              <ul className="mt-6 space-y-4" role="list">
                <li>
                  <span className={cn(t.bodySm, "text-cream/60")}>
                    {CONTACT_CONFIG.address.display}
                  </span>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className={cn(t.bodySm, "text-cream/60 hover:text-gold")}
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contactInfo.phoneTel}`}
                    className={cn(t.bodySm, "text-cream/60 hover:text-gold")}
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              </ul>
              <p className={cn(t.caption, "mt-6 text-cream/35")}>
                {contactInfo.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-28 md:mt-40">
          <p className={cn(t.caption, "max-w-3xl text-cream/40")}>
            {FOOTER_LEGAL.disclaimer}
          </p>
          <div className="mt-8 flex flex-col gap-2 md:flex-row md:justify-between">
            <p className={cn(t.caption, "text-cream/45")}>
              © {currentYear} {SITE_CONFIG.name}
            </p>
            <p className={cn(t.caption, "text-cream/35")}>{SITE_CONFIG.tagline}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
