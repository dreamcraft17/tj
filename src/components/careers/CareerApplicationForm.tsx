"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { CareerJob } from "@/types";
import { Alert, Button, Checkbox, Input, Select, Textarea } from "@/components/ui";

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
        <Select
          id="job-select"
          label="Posisi"
          value={selectedJobId}
          onChange={(event) => setSelectedJobId(event.target.value)}
          options={jobs.map((job) => ({ value: job.id, label: job.title }))}
        />
        {selectedJob ? <p className="mt-2 text-sm text-muted">{selectedJob.summary}</p> : null}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input id="name" label="Nama lengkap" name="name" required />
        <Input id="email" label="Email" name="email" type="email" required />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input id="phone" label="Telepon" name="phone" placeholder="+628..." required />
        <Input id="linkedin" label="LinkedIn" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Select
          id="availability"
          name="availability"
          label="Ketersediaan"
          defaultValue="ASAP"
          options={[
            { value: "ASAP", label: "ASAP" },
            { value: "2 weeks", label: "2 weeks" },
            { value: "1 month", label: "1 month" },
          ]}
        />
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="cv">
            CV / Resume
          </label>
          <input id="cv" name="cv" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="mt-2 w-full rounded-sm border border-gray-border bg-white px-4 py-3 text-base text-navy-700 file:mr-4 file:rounded-sm file:border-0 file:bg-navy-700 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10" required />
          <p className="mt-2 text-xs text-muted">PDF/DOCX, maksimum 5MB.</p>
        </div>
      </div>

      <Textarea id="coverLetter" name="coverLetter" rows={5} label="Cover letter" placeholder="Opsional: konteks singkat tentang pengalaman dan motivasi Anda." />

      <Checkbox
        id="consent"
        name="consent"
        value="yes"
        required
        label={
        <span>
          Saya menyetujui pemrosesan data rekrutmen sesuai{" "}
          <Link className="text-navy underline decoration-navy/20 underline-offset-4" href="/privacy">
            kebijakan privasi
          </Link>
          .
        </span>
        }
      />

      <Button
        type="submit"
        isLoading={state === "submitting"}
        className="w-full"
      >
        Kirim lamaran
      </Button>

      {message ? (
        <Alert type={state === "success" ? "success" : "error"} message={message} />
      ) : null}
    </form>
  );
}
