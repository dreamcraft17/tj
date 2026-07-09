import type { Metadata } from "next";
import { TeamRoleSlot } from "@/components/TeamRoleSlot";
import { FounderCredibility } from "@/components/FounderCredibility";
import { CTASection } from "@/components/CTASection";
import { PageIntro, GridSection } from "@/components/layout";
import { Container } from "@/components/ui/Container";
import { TeamMemberCard } from "@/components/ui/DesignCards";
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
      <PageIntro
        eyebrow="Kepemimpinan"
        title="Tim Trusted Jurist"
        description="Advokat dan profesional hukum — litigasi, antikorupsi, dan advisory publik–korporasi."
        crumbs={[
          { label: "Beranda", href: "/" },
          { label: "Tim" },
        ]}
      />

      <GridSection
        title="Managing Partner"
        subtitle="Pendiri firma. Mengarahkan praktik pada reformasi hukum, antikorupsi, dan litigasi."
        columns={1}
        backgroundColor="white"
      >
        <div className="mx-auto w-full max-w-md">
          <TeamMemberCard
            name={managingPartner.name}
            title={managingPartner.title}
            bio={managingPartner.bio}
          />
        </div>
      </GridSection>

      <section className="tone-paper section-pad">
        <Container size="narrow">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
            Profil kepemimpinan
          </p>
          <h2 className="mt-4 text-center font-serif text-4xl font-semibold text-navy-700 md:text-5xl">
            Kredibilitas founder
          </h2>
          <FounderCredibility data={founderCredibility} className="mt-12" />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
            Pengembangan organisasi
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center font-serif text-4xl font-semibold text-navy-700 md:text-5xl">
            Struktur tim yang sedang disusun
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-gray-text">
            Trusted Jurist memperluas tim secara bertahap. Posisi di bawah belum
            diisi dan akan diumumkan resmi — tanpa nama sementara.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {teamRoleSlots.map((slot, i) => (
              <TeamRoleSlot key={slot.id} slot={slot} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Berminat Bergabung?"
        description="Kesempatan bagi advokat yang memenuhi standar firma. Hubungi untuk informasi."
        primaryLabel="Kontak"
      />
    </>
  );
}
