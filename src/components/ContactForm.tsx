"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { formSubjects } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setState("success");
  }

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center rounded-sm border border-gold/30 bg-gold/5 px-6 py-12 text-center"
        role="status"
      >
        <CheckCircle2 className="size-12 text-gold" aria-hidden />
        <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
          Pesan Berhasil Dikirim
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Terima kasih telah menghubungi Trusted Jurist Law Firm. Tim kami akan
          meninjau pesan Anda dan menghubungi kembali melalui kontak yang
          dicantumkan.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setState("idle")}
        >
          Kirim Pesan Lain
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-label="Formulir kontak"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Nama Lengkap" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={state === "submitting"}
            className={inputClass}
            placeholder="Nama Anda"
          />
        </FormField>
        <FormField label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={state === "submitting"}
            className={inputClass}
            placeholder="email@perusahaan.com"
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Telepon" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={state === "submitting"}
            className={inputClass}
            placeholder="+62 ..."
          />
        </FormField>
        <FormField label="Subjek" htmlFor="subject" required>
          <select
            id="subject"
            name="subject"
            required
            disabled={state === "submitting"}
            className={cn(inputClass, "cursor-pointer")}
            defaultValue=""
          >
            <option value="" disabled>
              Pilih subjek
            </option>
            {formSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Pesan" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={state === "submitting"}
          className={cn(inputClass, "resize-y min-h-[120px]")}
          placeholder="Jelaskan kebutuhan hukum Anda secara ringkas..."
        />
      </FormField>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
        isLoading={state === "submitting"}
      >
        Kirim Pesan
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-sm border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-60";

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required && (
          <span className="text-gold" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
