import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="tone-cream flex min-h-[60vh] items-center section-pad">
      <Container size="narrow" className="text-center">
        <p className={cn(t.colophon, "text-gold")}>404</p>
        <h1 className={cn(t.h1, "mt-6 text-navy")}>Halaman tidak ditemukan</h1>
        <p className={cn(t.body, "mx-auto mt-6 max-w-md text-muted")}>
          URL yang Anda minta tidak ada atau telah dipindahkan.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="primary">
            Beranda
          </ButtonLink>
          <Link
            href="/contact"
            className={cn(
              t.label,
              "inline-flex items-center border border-navy/20 px-6 py-3 text-navy transition-colors hover:border-gold hover:text-gold",
            )}
          >
            Konsultasi
          </Link>
        </div>
      </Container>
    </div>
  );
}
