import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { TeamRoleSlot } from "@/components/TeamRoleSlot";
import { FounderCredibility } from "@/components/FounderCredibility";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui/Container";
import { managingPartner, teamRoleSlots, founderCredibility } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Tim",
  description:
    "Tim Trusted Jurist Law Firm dipimpin oleh Dr. Andin Sofyanoor, SH., MH. Struktur partner dan associate sedang disusun secara resmi.",
  path: "/team",
});

export default function TeamPage() {
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
          <div className="mx-auto max-w-2xl">
            <TeamCard member={managingPartner} index={0} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-cream-dark/30 py-20 md:py-28">
        <Container size="narrow">
          <SectionHeader
            eyebrow="Profil Kepemimpinan"
            title="Kredibilitas Profesional"
            description="Informasi berikut dapat disesuaikan dengan dokumentasi resmi firma sebelum publikasi website."
            align="center"
          />
          <FounderCredibility data={founderCredibility} />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Pengembangan Organisasi"
            title="Struktur Tim yang Sedang Disusun"
            description="Trusted Jurist memperluas tim advokat secara bertahap. Posisi di bawah ini belum diisi dan akan diumumkan resmi — tanpa nama sementara."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {teamRoleSlots.map((slot, i) => (
              <TeamRoleSlot key={slot.id} slot={slot} index={i} />
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
