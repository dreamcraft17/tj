import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { teamMembers } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tim",
  description:
    "Tim Trusted Jurist Law Firm dipimpin oleh Dr. Andin Sofyanoor, SH., MH. — struktur profesional untuk partner dan associate.",
  path: "/team",
});

export default function TeamPage() {
  const managingPartner = teamMembers.filter((m) => !m.isPlaceholder);
  const placeholders = teamMembers.filter((m) => m.isPlaceholder);

  return (
    <>
      <Hero
        headline="Tim Profesional"
        subheadline="Advokat dan profesional hukum yang berdedikasi pada keunggulan, integritas, dan pendampingan klien yang strategis."
        compact
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Kepemimpinan"
            title="Managing Partner"
            description="Pemimpin firma yang mengarahkan visi reformasi hukum dan standar advokasi berintegritas."
          />
          <div className="mx-auto grid max-w-2xl gap-6">
            {managingPartner.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-cream-dark/30 py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Pengembangan Tim"
            title="Partner & Associate"
            description="Struktur tim sedang diperluas. Posisi partner dan associate akan diumumkan secara resmi."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {placeholders.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Berminat Bergabung?"
        description="Trusted Jurist membuka kesempatan bagi profesional hukum yang berkomitmen pada integritas dan keunggulan kerja. Hubungi kami untuk informasi lebih lanjut."
        primaryLabel="Hubungi Kami"
      />
    </>
  );
}
