import { trustCommitments } from "@/lib/data";
import { ValueCard } from "@/components/ValueCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";

export function TrustCommitments() {
  return (
    <section
      className="section-pad border-t border-border"
      aria-labelledby="trust-commitments-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeader
            eyebrow="Komitmen profesional"
            title="Prinsip yang menjaga kepercayaan klien"
            titleId="trust-commitments-heading"
            description="Tanpa klaim yang tidak dapat diverifikasi — kami mengikat diri pada standar etika, kerahasiaan, dan transparansi proses kerja."
            className="mb-0"
          />
        </div>
        <div className="mt-16 md:mt-20">
          {trustCommitments.map((item) => (
            <ValueCard key={item.id} value={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
