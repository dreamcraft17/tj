import { requireAdminSession } from "@/lib/admin/auth";
import { getAnalytics } from "@/lib/careers/store";

export default async function AdminAnalyticsPage() {
  await requireAdminSession();
  const analytics = getAnalytics();
  const rows = Object.entries(analytics.jobBreakdown);
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Analytics</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">Basic analytics</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <Stat label="Leads minggu ini" value={analytics.thisWeek.formSubmissions} />
        <Stat label="Applicants minggu ini" value={analytics.thisWeek.jobApplications} />
        <Stat label="Total leads" value={analytics.totals.leads} />
        <Stat label="Total applicants" value={analytics.totals.applicants} />
      </div>
      <section className="mt-8 rounded-sm border border-border bg-cream p-5">
        <h2 className="font-serif text-3xl text-navy">Applicants per position</h2>
        <div className="mt-5 space-y-4">
          {rows.map(([id, row]) => (
            <div key={id}>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-navy">{row.title}</span>
                <span className="text-muted">{row.total} total</span>
              </div>
              <div className="mt-2 h-2 rounded-sm bg-cream-dark">
                <div className="h-2 rounded-sm bg-gold" style={{ width: `${Math.min(100, row.total * 12)}%` }} />
              </div>
              <p className="mt-2 text-xs text-muted">
                new {row.new} - review {row.review} - interview {row.interview} - offer {row.offer} - reject {row.reject}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-sm border border-border bg-cream p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-3 font-serif text-4xl text-navy">{value}</p>
    </div>
  );
}
