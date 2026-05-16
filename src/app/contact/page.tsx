import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { contactInfo } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kontak",
  description:
    "Hubungi Trusted Jurist Law Firm di Sunter, Jakarta Timur. Konsultasi hukum, formulir kontak, dan WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    "Halo Trusted Jurist Law Firm, saya ingin berkonsultasi mengenai kebutuhan hukum.",
  )}`;

  return (
    <>
      <Hero
        headline="Hubungi Kami"
        subheadline="Tim Trusted Jurist siap mendengarkan kebutuhan hukum Anda dan merespons dengan profesional."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Informasi Kantor
              </h2>
              <ul className="mt-8 space-y-6">
                <ContactInfoItem
                  icon={MapPin}
                  label="Alamat"
                  value={contactInfo.address}
                />
                <ContactInfoItem
                  icon={Mail}
                  label="Email"
                  value={contactInfo.email}
                  href={`mailto:${contactInfo.email}`}
                />
                <ContactInfoItem
                  icon={Phone}
                  label="Telepon"
                  value={contactInfo.phone}
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                />
                <ContactInfoItem
                  icon={Clock}
                  label="Jam Operasional"
                  value={contactInfo.hours}
                />
              </ul>

              <div className="mt-10">
                <ButtonLink
                  href={whatsappUrl}
                  variant="gold"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Chat via WhatsApp
                </ButtonLink>
              </div>

              <div
                className="mt-10 flex aspect-[4/3] items-center justify-center rounded-sm border border-dashed border-border bg-cream-dark/50"
                role="img"
                aria-label="Placeholder peta lokasi kantor di Sunter, Jakarta Timur"
              >
                <div className="text-center px-4">
                  <MapPin className="mx-auto size-8 text-gold/70" aria-hidden />
                  <p className="mt-3 text-sm font-medium text-navy">
                    Peta Lokasi
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Sunter, Jakarta Timur — integrasi peta dapat ditambahkan
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-semibold text-navy">
                Kirim Pesan
              </h2>
              <p className="mt-2 text-sm text-muted">
                Isi formulir di bawah ini. Pengiriman bersifat simulasi untuk
                demonstrasi antarmuka — integrasi backend dapat ditambahkan
                sesuai kebutuhan produksi.
              </p>
              <div className="mt-8 rounded-sm border border-border bg-cream p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-gold">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm text-navy transition-colors hover:text-gold"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm text-navy">{value}</p>
        )}
      </div>
    </li>
  );
}
