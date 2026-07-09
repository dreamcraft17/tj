"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { formSubjects, contactConsultation } from "@/lib/data";
import { executeRecaptcha, isRecaptchaEnabled } from "@/lib/recaptcha-client";
import { Alert, Button, Input, Select, Textarea } from "@/components/ui";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

type ContactFormProps = {
  variant?: "default" | "consultation";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const isConsultation = variant === "consultation";
  const copy = contactConsultation.form;
  const subjectOptions = formSubjects.map((subject) => ({
    value: subject,
    label: subject,
  }));

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    let token: string | undefined;
    if (isRecaptchaEnabled()) {
      const recaptchaToken = await executeRecaptcha("contact_submit");
      if (!recaptchaToken) {
        setError("Verifikasi keamanan gagal. Muat ulang halaman dan coba lagi.");
        setState("idle");
        return;
      }
      token = recaptchaToken;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, token }),
      });

      const data = (await response.json()) as {
        error?: string;
        success?: boolean;
      };

      if (!response.ok) {
        setError(data.error ?? "Gagal mengirim form. Coba lagi.");
        setState("idle");
        return;
      }

      setState("success");
      form.reset();
    } catch (err) {
      console.error("Form error:", err);
      setError("Kesalahan jaringan. Periksa koneksi dan coba lagi.");
      setState("idle");
    }
  }

  if (state === "success") {
    return (
      <div className="space-y-6" role="status">
        <Alert
          type="success"
          message={`${copy.successTitle}. ${copy.successMessage}`}
        />
        <Button
          type="button"
          variant={isConsultation ? "ghost" : "secondary"}
          onClick={() => {
            setState("idle");
            setError(null);
          }}
        >
          Kirim permintaan lain
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
      aria-label={
        isConsultation ? "Formulir permintaan konsultasi" : "Formulir kontak"
      }
    >
      <div className={isConsultation ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <Input
          id="name"
          name="name"
          label="Nama lengkap"
          required
          autoComplete="name"
          disabled={state === "submitting"}
          placeholder="Nama lengkap"
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          required
          autoComplete="email"
          disabled={state === "submitting"}
          placeholder="email@perusahaan.com"
        />
      </div>

      <div className={isConsultation ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Telepon"
          autoComplete="tel"
          disabled={state === "submitting"}
          placeholder={isConsultation ? "+62 … (opsional)" : "+62 ..."}
        />
        <Select
          id="subject"
          name="subject"
          label={isConsultation ? "Bidang perkara" : "Subjek"}
          required
          disabled={state === "submitting"}
          defaultValue=""
          placeholder={isConsultation ? "Pilih bidang" : "Pilih subjek"}
          options={subjectOptions}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label={isConsultation ? "Ringkasan" : "Pesan"}
        required
        rows={isConsultation ? 4 : 5}
        disabled={state === "submitting"}
        placeholder={
          isConsultation
            ? "Konteks singkat — tanpa detail yang tidak perlu"
            : "Ringkasan mandat atau pertanyaan..."
        }
        className={isConsultation ? "min-h-[88px] resize-none" : undefined}
      />

      {isConsultation ? (
        <p className={cn(t.caption, "text-gray-text")}>{copy.note}</p>
      ) : null}

      {error ? (
        <Alert type="error" message={error} onClose={() => setError(null)} />
      ) : null}

      <p className={cn(t.caption, "text-gray-text")}>
        Dengan mengirim formulir ini, Anda menyetujui{" "}
        <Link
          href="/privacy"
          className="text-navy-700 underline decoration-navy-700/20 underline-offset-2 hover:text-gold-500"
        >
          Kebijakan Privasi
        </Link>
        .
      </p>

      <Button
        type="submit"
        variant={isConsultation ? "secondary" : "primary"}
        size={isConsultation ? "md" : "lg"}
        className={isConsultation ? undefined : "w-full sm:w-auto"}
        isLoading={state === "submitting"}
      >
        {isConsultation ? copy.submitLabel : "Kirim pesan"}
      </Button>
    </form>
  );
}
