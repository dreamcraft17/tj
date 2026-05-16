import { trustCommitments } from "@/lib/data";
import { ValueCard } from "@/components/ValueCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";

export function TrustCommitments() {
  return (
    <section
      className="border-y border-border bg-cream-dark/40 py-20 md:py-28"
      aria-labelledby="trust-commitments-heading"
    >
      <Container>
        <SectionHeader
          eyebrow="Komitmen Profesional"
          title="Prinsip yang Menjaga Kepercayaan Klien"
          description="Tanpa klaim yang tidak dapat diverifikasi — kami mengikat diri pada standar etika, kerahasiaan, dan transparansi proses kerja."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustCommitments.map((item, i) => (
            <ValueCard key={item.id} value={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
