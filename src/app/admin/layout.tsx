import Link from "next/link";

const nav = [
  ["/admin", "Overview"],
  ["/admin/leads", "Leads"],
  ["/admin/applicants", "Applicants"],
  ["/admin/jobs", "Jobs"],
  ["/admin/analytics", "Analytics"],
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="tone-paper min-h-screen">
      <div className="border-b border-border bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
          <Link href="/admin" className="font-serif text-2xl text-navy">
            Trusted Jurist Admin
          </Link>
          <nav className="flex flex-wrap gap-2">
            {nav.map(([href, label]) => (
              <Link key={href} href={href} className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy hover:border-gold">
                {label}
              </Link>
            ))}
            <form action="/api/admin/auth/logout" method="post">
              <button className="rounded-sm bg-navy px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
                Logout
              </button>
            </form>
          </nav>
        </div>
      </div>
      <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
    </div>
  );
}
