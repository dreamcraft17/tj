"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminStatusForm({
  endpoint,
  currentStatus,
  options,
}: {
  endpoint: string;
  currentStatus: string;
  options: string[];
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    await fetch(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-sm border border-border bg-cream px-2 py-1.5 text-xs text-navy">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button className="rounded-sm bg-navy px-3 py-1.5 text-xs font-semibold text-cream disabled:opacity-60" disabled={loading}>
        Simpan
      </button>
    </form>
  );
}
