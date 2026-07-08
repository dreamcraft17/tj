import { getAnalytics, getStore } from "@/lib/careers/store";
import { requireAdminSession } from "@/lib/admin/auth";

export default async function AdminPage() {
  await requireAdminSession();
  const analytics = getAnalytics();
  const store = getStore();
  const recentLeads = store.leads.slice(0, 5);
  const recentApplicants = store.applicants.slice(0, 5);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Dashboard</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">Overview</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Stat label="Leads bulan ini" value={analytics.thisMonth.formSubmissions} />
        <Stat label="Applicants bulan ini" value={analytics.thisMonth.jobApplications} />
        <Stat label="Published jobs" value={store.jobs.filter((job) => job.status === "published").length} />
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Panel title="Lead terbaru" rows={recentLeads.map((lead) => [lead.name, lead.subject, lead.status])} />
        <Panel title="Applicant terbaru" rows={recentApplicants.map((applicant) => [applicant.name, applicant.positionTitle, applicant.status])} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-sm border border-border bg-cream p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <p className="mt-3 font-serif text-5xl text-navy">{value}</p>
    </div>
  );
}

function Panel({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <section className="rounded-sm border border-border bg-cream p-5">
      <h2 className="font-serif text-3xl text-navy">{title}</h2>
      <div className="mt-5 space-y-3">
        {rows.length ? rows.map((row) => <p key={row.join("-")} className="text-sm text-muted">{row.join(" - ")}</p>) : <p className="text-sm text-muted">Belum ada data.</p>}
      </div>
    </section>
  );
}
