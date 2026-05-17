import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_CONFIG,
  contactConsultation,
  contactInfo,
} from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Konsultasi",
  description:
    "Permintaan konsultasi awal dengan Trusted Jurist — Sunter, Jakarta Timur. Formulir rahasia, email, atau WhatsApp.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${encodeURIComponent(
    CONTACT_CONFIG.whatsapp.defaultMessage,
  )}`;
  const copy = contactConsultation;

  return (
    <div className="tone-cream">
      <header className="pt-32 pb-20 md:pt-40 md:pb-28">
        <Container size="narrow">
          <p className={cn(t.colophon, "text-muted")}>{copy.eyebrow}</p>
          <h1 className={cn(t.h1, "mt-6 max-w-[16ch] text-navy")}>
            {copy.title}
          </h1>
          <p className={cn(t.lead, "mt-8 max-w-xl text-muted")}>{copy.lead}</p>
        </Container>
      </header>

      <section
        className="section-pad-lg pb-0"
        aria-labelledby="consultation-form-heading"
      >
        <Container size="narrow">
          <div className="grid gap-20 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
            <aside className="lg:col-span-5 lg:pt-2">
              <ConfidentialityBlock />

              <div className="mt-20 lg:mt-24">
                <p className={cn(t.caption, "text-muted")}>
                  {copy.channels.title}
                </p>
                <dl className="mt-8 space-y-8">
                  <ChannelRow label="Email">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className={channelLinkClass}
                    >
                      {contactInfo.email}
                    </a>
                  </ChannelRow>
                  <ChannelRow label="Telepon">
                    <a
                      href={`tel:${contactInfo.phoneTel}`}
                      className={channelLinkClass}
                    >
                      {contactInfo.phone}
                    </a>
                  </ChannelRow>
                  <ChannelRow label="WhatsApp">
                    <a
                      href={whatsappUrl}
                      className={channelLinkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pesan singkat
                    </a>
                  </ChannelRow>
                  <ChannelRow label="Kantor">
                    <span className={cn(t.body, "text-navy")}>
                      {contactInfo.address}
                    </span>
                  </ChannelRow>
                  <ChannelRow label="Jam">
                    <span className={cn(t.bodySm, "text-muted")}>
                      {copy.channels.hoursNote}
                    </span>
                  </ChannelRow>
                </dl>
              </div>
            </aside>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="hairline mb-12 lg:mb-16" aria-hidden />

              <h2
                id="consultation-form-heading"
                className={cn(t.h3, "text-navy")}
              >
                {copy.form.title}
              </h2>

              <div className="mt-10 max-w-md">
                <ContactForm variant="consultation" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ConfidentialityBlock() {
  const { confidentiality } = contactConsultation;

  return (
    <div>
      <p className={cn(t.eyebrow, "text-gold")}>{confidentiality.title}</p>
      <div className="mt-6 space-y-5">
        {confidentiality.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className={cn(t.longform, "text-muted")}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function ChannelRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className={cn(t.caption, "text-muted")}>{label}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  );
}

const channelLinkClass = cn(
  t.body,
  "text-navy underline decoration-navy/15 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/40",
);
