"use client";

import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-gray-dark";
const fieldClass =
  "w-full rounded-sm border border-gray-border bg-white px-4 py-3 text-base text-navy-700 placeholder:text-gray-text/60 transition-colors duration-150 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/10 disabled:bg-gray-light disabled:text-gray-text disabled:opacity-60";

type FieldChromeProps = {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  htmlFor?: string;
  children: React.ReactNode;
};

function FieldChrome({ label, error, helperText, required, htmlFor, children }: FieldChromeProps) {
  return (
    <div className="w-full">
      {label ? (
        <label htmlFor={htmlFor} className={labelClass}>
          {label}
          {required ? <span className="ml-1 text-error">*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? <p className="mt-1 text-xs text-error">{error}</p> : null}
      {helperText && !error ? <p className="mt-1 text-xs text-gray-text">{helperText}</p> : null}
    </div>
  );
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, required, ...props }, ref) => (
    <FieldChrome label={label} error={error} helperText={helperText} required={required} htmlFor={id}>
      <input
        ref={ref}
        id={id}
        required={required}
        className={cn(fieldClass, error && "border-error focus:border-error focus:ring-error/10", className)}
        {...props}
      />
    </FieldChrome>
  ),
);
Input.displayName = "Input";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  helperText?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, required, ...props }, ref) => (
    <FieldChrome label={label} error={error} helperText={helperText} required={required} htmlFor={id}>
      <textarea
        ref={ref}
        id={id}
        required={required}
        className={cn(
          fieldClass,
          "min-h-[7.5rem] resize-y",
          error && "border-error focus:border-error focus:ring-error/10",
          className,
        )}
        {...props}
      />
    </FieldChrome>
  ),
);
Textarea.displayName = "Textarea";

export type SelectOption = { value: string; label: string };

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, className, id, required, options, placeholder, ...props }, ref) => (
    <FieldChrome label={label} error={error} helperText={helperText} required={required} htmlFor={id}>
      <div className="relative">
        <select
          ref={ref}
          id={id}
          required={required}
          className={cn(
            fieldClass,
            "appearance-none pr-10",
            error && "border-error focus:border-error focus:ring-error/10",
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-navy-700" />
      </div>
    </FieldChrome>
  ),
);
Select.displayName = "Select";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => (
    <div className="flex items-start gap-3">
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={cn("mt-1 size-5 rounded-sm border border-gray-border bg-white accent-navy-700 focus:ring-2 focus:ring-gold-500/50", className)}
        {...props}
      />
      {label ? (
        <label htmlFor={id} className="text-sm leading-7 text-gray-dark">
          {label}
        </label>
      ) : null}
    </div>
  ),
);
Checkbox.displayName = "Checkbox";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: React.ReactNode;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => (
    <div className="flex items-center gap-3">
      <input
        ref={ref}
        id={id}
        type="radio"
        className={cn("size-5 border border-gray-border bg-white accent-navy-700 focus:ring-2 focus:ring-gold-500/50", className)}
        {...props}
      />
      {label ? (
        <label htmlFor={id} className="text-sm text-gray-dark">
          {label}
        </label>
      ) : null}
    </div>
  ),
);
Radio.displayName = "Radio";

export const designFieldClass = fieldClass;

