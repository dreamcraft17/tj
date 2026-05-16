import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, contactInfo } from "@/lib/data";
import { FOOTER_DESCRIPTION, SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-light/30 bg-navy text-cream">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl font-semibold">Trusted Jurist</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
              Law Firm
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">
              {FOOTER_DESCRIPTION}
            </p>
            <p className="mt-5 text-xs tracking-wide text-cream/45">
              Jakarta · {SITE_CONFIG.location}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Bidang Fokus
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>Antikorupsi & Governance</li>
              <li>Litigasi & Sengketa</li>
              <li>Hukum Korporasi</li>
              <li>Pertambangan & Perkebunan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-gold"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="transition-colors hover:text-gold"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-8">
          <p className="text-center text-xs text-cream/50 md:text-left">
            © {currentYear} {SITE_CONFIG.name}. Hak cipta dilindungi.
          </p>
        </div>
      </Container>
    </footer>
  );
}
