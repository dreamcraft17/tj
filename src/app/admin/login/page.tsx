import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Admin Login",
  description: "Login admin Trusted Jurist.",
  path: "/admin/login",
});

export default function AdminLoginPage() {
  return (
    <div className="tone-cream min-h-[70vh] pt-32 pb-20">
      <Container size="narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Admin</p>
        <h1 className="mt-4 font-serif text-5xl text-navy">Masuk dashboard</h1>
        <div className="mt-10 max-w-md rounded-sm border border-border bg-cream p-6">
          <AdminLoginForm />
        </div>
      </Container>
    </div>
  );
}
