import { trustCommitments } from "@/lib/data";
import { ValueCard } from "@/components/ValueCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Container } from "@/components/ui/Container";

export function TrustCommitments() {
  return (
    <section
      className="tone-warm section-pad"
      aria-labelledby="trust-commitments-heading"
    >
      <Container>
        <div className="max-w-2xl">
          <SectionHeader
            eyebrow="Standar kerja"
            title="Prinsip operasional"
            titleId="trust-commitments-heading"
            description="Etika advokat, kerahasiaan, dan proses yang terdokumentasi — tanpa klaim yang tidak dapat diverifikasi."
            className="mb-0"
          />
        </div>
        <div className="flow-editorial mt-20 md:mt-28">
          {trustCommitments.map((item) => (
            <ValueCard key={item.id} value={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
