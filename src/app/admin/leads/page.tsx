import { AdminStatusForm } from "@/components/admin/AdminStatusForm";
import { requireAdminSession } from "@/lib/admin/auth";
import { getStore } from "@/lib/careers/store";
import { csvEscape, leadStatuses } from "@/lib/careers/validate";

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string; subject?: string }>;
}) {
  await requireAdminSession();
  const params = (await searchParams) ?? {};
  const store = getStore();
  const leads = store.leads.filter((lead) => {
    if (params.status && lead.status !== params.status) return false;
    if (params.subject && lead.subject !== params.subject) return false;
    return true;
  });
  const subjects = [...new Set(store.leads.map((lead) => lead.subject))];
  const csv = [
    ["date", "name", "email", "phone", "subject", "message", "status"].map(csvEscape).join(","),
    ...leads.map((lead) =>
      [lead.createdAt, lead.name, lead.email, lead.phone, lead.subject, lead.message, lead.status].map(csvEscape).join(","),
    ),
  ].join("\n");

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Leads</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">Contact leads</h1>
      <form className="mt-8 flex flex-wrap gap-3">
        <select name="status" className={selectClass} defaultValue="">
          <option value="">All status</option>
          {leadStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <select name="subject" className={selectClass} defaultValue="">
          <option value="">All subject</option>
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        <button className="rounded-sm bg-navy px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
          Filter
        </button>
      </form>
      <a
        href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`}
        download="trusted-jurist-leads.csv"
        className="mt-4 inline-flex rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy"
      >
        Export CSV
      </a>
      <div className="mt-6 overflow-x-auto rounded-sm border border-border bg-cream">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Subject</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Reply</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b border-border/70 align-top last:border-0">
                <td className="px-4 py-3 text-muted">{new Date(lead.createdAt).toLocaleDateString("id-ID")}</td>
                <td className="px-4 py-3">
                  <p className="font-semibold text-navy">{lead.name}</p>
                  <p className="text-xs text-muted">{lead.email}</p>
                  <p className="text-xs text-muted">{lead.phone || "-"}</p>
                </td>
                <td className="px-4 py-3 text-muted">{lead.subject}</td>
                <td className="px-4 py-3 text-muted">{lead.message}</td>
                <td className="px-4 py-3">
                  <AdminStatusForm endpoint={`/api/admin/leads/${lead.id}`} currentStatus={lead.status} options={[...leadStatuses]} />
                </td>
                <td className="px-4 py-3">
                  <a className="text-xs font-semibold text-navy underline" href={`mailto:${lead.email}?subject=Re: ${encodeURIComponent(lead.subject)}`}>
                    Reply
                  </a>
                </td>
              </tr>
            ))}
            {!leads.length ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  Belum ada lead.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const selectClass = "rounded-sm border border-border bg-cream px-3 py-2 text-sm text-navy";

