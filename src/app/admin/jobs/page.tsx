import { requireAdminSession } from "@/lib/admin/auth";
import { getStore } from "@/lib/careers/store";

export default async function AdminJobsPage() {
  await requireAdminSession();
  const store = getStore();
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Jobs</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">Job postings</h1>

      <section className="mt-8 rounded-sm border border-border bg-cream p-5">
        <h2 className="font-serif text-3xl text-navy">Create job</h2>
        <form action="/api/admin/jobs" method="post" className="mt-5 grid gap-4 md:grid-cols-2">
          <input className={inputClass} name="title" placeholder="Title" required />
          <select className={inputClass} name="level" defaultValue="Mid">
            <option>Junior</option>
            <option>Mid</option>
            <option>Senior</option>
            <option>Lead</option>
          </select>
          <input className={inputClass} name="department" placeholder="Department" />
          <input className={inputClass} name="location" placeholder="Location" defaultValue="Jakarta Timur" />
          <textarea className={`${inputClass} md:col-span-2`} name="summary" placeholder="Brief summary" rows={2} />
          <textarea className={`${inputClass} md:col-span-2`} name="description" placeholder="Description" rows={5} required />
          <textarea className={inputClass} name="requiredSkills" placeholder="Required skills, one per line" rows={4} />
          <textarea className={inputClass} name="responsibilities" placeholder="Responsibilities, one per line" rows={4} />
          <textarea className={inputClass} name="benefits" placeholder="Benefits, one per line" rows={4} />
          <select className={inputClass} name="status" defaultValue="draft">
            <option value="draft">draft</option>
            <option value="published">published</option>
            <option value="closed">closed</option>
          </select>
          <button className="rounded-sm bg-navy px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cream md:col-span-2">
            Save job
          </button>
        </form>
      </section>

      <div className="mt-8 overflow-x-auto rounded-sm border border-border bg-cream">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-[0.14em] text-muted">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Level</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Applicants</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {store.jobs.map((job) => (
              <tr key={job.id} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3">
                  <p className="font-semibold text-navy">{job.title}</p>
                  <p className="text-xs text-muted">{job.summary}</p>
                </td>
                <td className="px-4 py-3 text-muted">{job.level}</td>
                <td className="px-4 py-3 text-muted">{job.status}</td>
                <td className="px-4 py-3 text-muted">{store.applicants.filter((applicant) => applicant.jobPostingId === job.id).length}</td>
                <td className="px-4 py-3">
                  <form action={`/api/admin/jobs/${job.id}`} method="post" className="flex flex-wrap gap-2">
                    <button name="status" value={job.status === "published" ? "closed" : "published"} className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold text-navy">
                      {job.status === "published" ? "Close" : "Publish"}
                    </button>
                    <button name="status" value="draft" className="rounded-sm border border-border px-3 py-1.5 text-xs font-semibold text-navy">
                      Draft
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputClass = "rounded-sm border border-border bg-cream px-3 py-3 text-sm text-navy outline-none focus:border-gold";

