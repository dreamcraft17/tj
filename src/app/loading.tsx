import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Memuat halaman">
      <Container className="flex flex-col items-center gap-4 py-24">
        <span
          className="size-10 animate-spin rounded-full border-2 border-navy border-t-gold"
          aria-hidden
        />
        <p className="text-sm text-muted">Memuat halaman...</p>
      </Container>
    </div>
  );
}
