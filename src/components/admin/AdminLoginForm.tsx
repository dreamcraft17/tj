"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(event.currentTarget);
    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: fd.get("email"), password: fd.get("password") }),
    });
    const json = (await res.json()) as { success?: boolean; error?: string };
    setLoading(false);
    if (!res.ok || !json.success) {
      setError(json.error ?? "Email atau password salah.");
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted" htmlFor="password">
          Password
        </label>
        <input id="password" name="password" type="password" required className={inputClass} />
      </div>
      <button disabled={loading} className="w-full rounded-sm bg-navy px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cream disabled:opacity-70">
        {loading ? "Memeriksa..." : "Masuk"}
      </button>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </form>
  );
}

const inputClass = "mt-2 w-full rounded-sm border border-border bg-cream px-3 py-3 text-sm text-navy outline-none focus:border-gold";

