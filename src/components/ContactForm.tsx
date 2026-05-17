"use client";

import { useState, type FormEvent } from "react";
import { formSubjects, contactConsultation } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { type as t } from "@/lib/typography";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success";

type ContactFormProps = {
  variant?: "default" | "consultation";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const isConsultation = variant === "consultation";
  const copy = contactConsultation.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setState("success");
  }

  if (state === "success") {
    if (isConsultation) {
      return (
        <div className="max-w-md" role="status">
          <p className={cn(t.eyebrow, "text-gold")}>{copy.successTitle}</p>
          <p className={cn(t.body, "mt-4 text-muted")}>{copy.successMessage}</p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className={cn(
              t.label,
              "mt-8 text-navy underline decoration-navy/20 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold/50",
            )}
          >
            Kirim permintaan lain
          </button>
        </div>
      );
    }

    return (
      <div
        className="flex flex-col items-center rounded-sm border border-gold/30 bg-gold/5 px-6 py-12 text-center"
        role="status"
      >
        <h3 className="font-serif text-xl font-semibold text-navy">
          {copy.successTitle}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted">{copy.successMessage}</p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setState("idle")}
        >
          Kirim permintaan lain
        </Button>
      </div>
    );
  }

  const inputStyles = isConsultation ? inputConsultation : inputDefault;
  const labelClass = isConsultation
    ? cn(t.caption, "text-muted")
    : "mb-1.5 block text-sm font-medium text-navy";

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
        <FormField
          label="Nama lengkap"
          htmlFor="name"
          required
          labelClass={labelClass}
          compact={isConsultation}
        >
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            disabled={state === "submitting"}
            className={inputStyles}
            placeholder="Nama lengkap"
          />
        </FormField>
        <FormField
          label="Email"
          htmlFor="email"
          required
          labelClass={labelClass}
          compact={isConsultation}
        >
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={state === "submitting"}
            className={inputStyles}
            placeholder="email@perusahaan.com"
          />
        </FormField>
      </div>

      {!isConsultation ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField label="Telepon" htmlFor="phone" labelClass={labelClass}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              disabled={state === "submitting"}
              className={inputStyles}
              placeholder="+62 ..."
            />
          </FormField>
          <FormField
            label="Subjek"
            htmlFor="subject"
            required
            labelClass={labelClass}
          >
            <select
              id="subject"
              name="subject"
              required
              disabled={state === "submitting"}
              className={cn(inputStyles, "cursor-pointer")}
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
      ) : (
        <>
          <FormField
            label="Telepon"
            htmlFor="phone"
            labelClass={labelClass}
            compact
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              disabled={state === "submitting"}
              className={inputStyles}
              placeholder="+62 … (opsional)"
            />
          </FormField>
          <FormField
            label="Bidang perkara"
            htmlFor="subject"
            required
            labelClass={labelClass}
            compact
          >
            <select
              id="subject"
              name="subject"
              required
              disabled={state === "submitting"}
              className={cn(inputStyles, "cursor-pointer")}
              defaultValue=""
            >
              <option value="" disabled>
                Pilih bidang
              </option>
              {formSubjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </FormField>
        </>
      )}

      <FormField
        label={isConsultation ? "Ringkasan" : "Pesan"}
        htmlFor="message"
        required
        labelClass={labelClass}
        compact={isConsultation}
      >
        <textarea
          id="message"
          name="message"
          required
          rows={isConsultation ? 4 : 5}
          disabled={state === "submitting"}
          className={cn(
            inputStyles,
            isConsultation
              ? "min-h-[88px] resize-none"
              : "min-h-[120px] resize-y",
          )}
          placeholder={
            isConsultation
              ? "Konteks singkat — tanpa detail yang tidak perlu"
              : "Ringkasan mandat atau pertanyaan..."
          }
        />
      </FormField>

      {isConsultation && (
        <p className={cn(t.caption, "text-muted/80")}>{copy.note}</p>
      )}

      <div className={isConsultation ? "pt-2" : undefined}>
        <Button
          type="submit"
          variant={isConsultation ? "secondary" : "primary"}
          size={isConsultation ? "sm" : "lg"}
          className={isConsultation ? "" : "w-full sm:w-auto"}
          isLoading={state === "submitting"}
        >
          {isConsultation ? copy.submitLabel : "Kirim pesan"}
        </Button>
      </div>
    </form>
  );
}

const inputDefault =
  "w-full rounded-sm border border-border bg-cream px-4 py-2.5 text-sm text-navy placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold disabled:opacity-60";

const inputConsultation =
  "w-full border-0 border-b border-navy/15 bg-transparent px-0 py-2 text-sm text-navy placeholder:text-muted/50 transition-colors focus:border-gold focus:outline-none disabled:opacity-50";

function FormField({
  label,
  htmlFor,
  required,
  labelClass,
  compact,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  labelClass: string;
  compact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required && (
          <span className="text-gold/80" aria-hidden>
            {" "}
            *
          </span>
        )}
      </label>
      <div className={compact ? "mt-2" : undefined}>{children}</div>
    </div>
  );
}
