import { AdminStatusForm } from "@/components/admin/AdminStatusForm";
import { requireAdminSession } from "@/lib/admin/auth";
import { getStore } from "@/lib/careers/store";
import { applicantStatuses, csvEscape } from "@/lib/careers/validate";

export default async function AdminApplicantsPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string; jobPostingId?: string }>;
}) {
  await requireAdminSession();
  const params = (await searchParams) ?? {};
  const store = getStore();
  const applicants = store.applicants.filter((applicant) => {
    if (params.status && applicant.status !== params.status) return false;
    if (params.jobPostingId && applicant.jobPostingId !== params.jobPostingId) return false;
    return true;
  });
  const csv = [
    ["date", "name", "email", "phone", "position", "status", "availability", "cv"].map(csvEscape).join(","),
    ...applicants.map((a) =>
      [a.createdAt, a.name, a.email, a.phone, a.positionTitle, a.status, a.availability, a.cv.url].map(csvEscape).join(","),
    ),
  ].join("\n");

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Applicants</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">Job applications</h1>
      <form className="mt-8 flex flex-wrap gap-3">
        <select name="jobPostingId" className={selectClass} defaultValue="">
          <option value="">All jobs</option>
          {store.jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
        <select name="status" className={selectClass} defaultValue="">
          <option value="">All status</option>
          {applicantStatuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button className="rounded-sm bg-navy px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream">
          Filter
        </button>
      </form>
      <a
        href={`data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`}
        download="trusted-jurist-applicants.csv"
        className="mt-4 inline-flex rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-navy"
      >
        Export CSV
      </a>
      <div className="mt-6 overflow-x-auto rounded-sm border border-border bg-cream">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Candidate</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Cover letter</th>
              <th className="px-4 py-3">CV</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="border-b border-border/70 align-top last:border-0">
                <td className="px-4 py-3 text-muted">{new Date(applicant.createdAt).toLocaleDateString("id-ID")}</td>
                <td className="px-4 py-3">
                  <p className="font-semibold text-navy">{applicant.name}</p>
                  <p className="text-xs text-muted">{applicant.email}</p>
                  <p className="text-xs text-muted">{applicant.phone}</p>
                  {applicant.linkedin ? (
                    <a className="text-xs text-navy underline" href={applicant.linkedin}>
                      LinkedIn
                    </a>
                  ) : null}
                </td>
                <td className="px-4 py-3 text-muted">
                  {applicant.positionTitle}
                  <br />
                  {applicant.availability}
                </td>
                <td className="px-4 py-3 text-muted">{applicant.coverLetter || "-"}</td>
                <td className="px-4 py-3">
                  <a href={applicant.cv.url} className="text-xs font-semibold text-navy underline">
                    Download CV
                  </a>
                </td>
                <td className="px-4 py-3">
                  <AdminStatusForm endpoint={`/api/admin/applicants/${applicant.id}`} currentStatus={applicant.status} options={[...applicantStatuses]} />
                </td>
              </tr>
            ))}
            {!applicants.length ? (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  Belum ada applicant.
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
