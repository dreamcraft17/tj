"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CareerJob } from "@/types";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function CareerApplicationForm({ jobs }: { jobs: CareerJob[] }) {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.id ?? "");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const selectedJob = useMemo(
    () => jobs.find((job) => job.id === selectedJobId) ?? jobs[0],
    [jobs, selectedJobId],
  );

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const fd = new FormData(form);
    const cv = fd.get("cv");
    if (!(cv instanceof File) || cv.size === 0) {
      setState("error");
      setMessage("CV wajib diunggah.");
      return;
    }
    if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(cv.type)) {
      setState("error");
      setMessage("Hanya file PDF dan DOCX yang diterima.");
      return;
    }
    if (cv.size > 5 * 1024 * 1024) {
      setState("error");
      setMessage("File melebihi 5MB. Silakan kompres atau unggah file lain.");
      return;
    }

    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const json = (await res.json()) as { success?: boolean; message?: string; error?: string };
      if (!res.ok || !json.success) {
        setState("error");
        setMessage(json.error ?? "Lamaran gagal dikirim.");
        return;
      }
      form.reset();
      setSelectedJobId(jobs[0]?.id ?? "");
      setState("success");
      setMessage(json.message ?? "Terima kasih! Kami akan menghubungi Anda dalam 7 hari.");
    } catch {
      setState("error");
      setMessage("Koneksi bermasalah. Coba lagi.");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-5" id="apply">
      <input type="hidden" name="jobPostingId" value={selectedJobId} />

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="job-select">
          Posisi
        </label>
        <select
          id="job-select"
          className={inputClass}
          value={selectedJobId}
          onChange={(event) => setSelectedJobId(event.target.value)}
        >
          {jobs.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
        {selectedJob ? <p className="mt-2 text-sm text-muted">{selectedJob.summary}</p> : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nama lengkap" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Telepon" name="phone" placeholder="+628..." required />
        <Field label="LinkedIn" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="availability">
            Ketersediaan
          </label>
          <select id="availability" name="availability" className={inputClass} defaultValue="ASAP">
            <option value="ASAP">ASAP</option>
            <option value="2 weeks">2 weeks</option>
            <option value="1 month">1 month</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="cv">
            CV / Resume
          </label>
          <input id="cv" name="cv" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className={inputClass} required />
          <p className="mt-2 text-xs text-muted">PDF/DOCX, maksimum 5MB.</p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="coverLetter">
          Cover letter
        </label>
        <textarea id="coverLetter" name="coverLetter" rows={5} className={inputClass} placeholder="Opsional: konteks singkat tentang pengalaman dan motivasi Anda." />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4 accent-gold" />
        <span>
          Saya menyetujui pemrosesan data rekrutmen sesuai{" "}
          <Link className="text-navy underline decoration-navy/20 underline-offset-4" href="/privacy">
            kebijakan privasi
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-sm bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-navy-light disabled:cursor-wait disabled:opacity-70"
      >
        {state === "submitting" ? "Mengunggah..." : "Kirim lamaran"}
      </button>

      {message ? (
        <p
          className={cn(
            "rounded-sm border px-4 py-3 text-sm",
            state === "success" ? "border-gold/30 bg-gold/10 text-navy" : "border-red-200 bg-red-50 text-red-700",
          )}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} required={required} className={inputClass} />
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-sm border border-border bg-cream px-3 py-3 text-sm text-navy outline-none transition-colors focus:border-gold";

