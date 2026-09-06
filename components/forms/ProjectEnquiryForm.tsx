"use client";

import Link from "next/link";
import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  currencyOptions,
  projectTypeOptions,
  type Currency,
  type ProjectType,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

type FormValues = {
  fullName: string;
  workEmail: string;
  phone: string;
  company: string;
  projectType: "" | ProjectType;
  currency: "" | Currency;
  estimatedBudget: string;
  budgetNotSure: boolean;
  preferredLaunchDate: string;
  projectDetails: string;
  website: string;
};

type FormField = keyof FormValues;
type FormErrors = Partial<Record<FormField | "form", string>>;

const initialValues: FormValues = {
  fullName: "",
  workEmail: "",
  phone: "",
  company: "",
  projectType: "",
  currency: "",
  estimatedBudget: "",
  budgetNotSure: false,
  preferredLaunchDate: "",
  projectDetails: "",
  website: "",
};

const inputClassName =
  "min-h-12 w-full rounded-md border border-white/20 bg-[#090c12] px-4 text-base text-white outline-none transition placeholder:text-white/45 hover:border-white/35 focus-visible:border-lime focus-visible:ring-2 focus-visible:ring-lime/25 disabled:cursor-not-allowed disabled:opacity-50";

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function buildFieldErrors(issues: { path: (string | number)[]; message: string }[]) {
  return issues.reduce<FormErrors>((errors, issue) => {
    const field = issue.path[0];

    if (typeof field === "string" && !errors[field as FormField]) {
      errors[field as FormField] = issue.message;
    }

    return errors;
  }, {});
}

type ProjectEnquiryFormProps = {
  endpoint?: "/api/contact" | "/api/intake";
};

export function ProjectEnquiryForm({ endpoint = "/api/contact" }: ProjectEnquiryFormProps) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormValues>(initialValues);
  const [formStartedAt, setFormStartedAt] = useState(0);
  const [minimumDate, setMinimumDate] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  useEffect(() => {
    setFormStartedAt(Date.now());
    setMinimumDate(localDateKey(new Date()));
  }, []);

  const fieldId = (field: FormField) => `${id}-${field}`;
  const errorId = (field: FormField) => `${fieldId(field)}-error`;

  const updateField = <Field extends FormField>(field: Field, value: FormValues[Field]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field] && !current.form) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      delete next.form;
      return next;
    });

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const fieldProps = (field: FormField, helpTextId?: string) => {
    const descriptionIds = [helpTextId, errors[field] ? errorId(field) : undefined].filter(
      Boolean
    );

    return {
      id: fieldId(field),
      "aria-invalid": Boolean(errors[field]),
      "aria-describedby": descriptionIds.length > 0 ? descriptionIds.join(" ") : undefined,
    };
  };

  const focusFirstError = (nextErrors: FormErrors) => {
    const firstField = Object.keys(nextErrors).find((field) => field !== "form");

    if (!firstField) {
      return;
    }

    formRef.current
      ?.querySelector<HTMLElement>(`[name="${firstField}"]`)
      ?.focus({ preventScroll: false });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});
    setStatus("idle");

    const payload = {
      ...form,
      currency: form.budgetNotSure ? null : form.currency,
      estimatedBudget:
        form.budgetNotSure || form.estimatedBudget === ""
          ? null
          : Number(form.estimatedBudget),
      formStartedAt,
    };
    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      const nextErrors = buildFieldErrors(result.error.issues);
      setErrors(nextErrors);
      setStatus("error");
      window.requestAnimationFrame(() => focusFirstError(nextErrors));
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: string; details?: { fieldErrors?: Record<string, string[]> } }
          | null;
        const serverFieldErrors = Object.entries(body?.details?.fieldErrors || {}).reduce<FormErrors>(
          (allErrors, [field, messages]) => {
            if (messages[0]) {
              allErrors[field as FormField] = messages[0];
            }
            return allErrors;
          },
          {}
        );

        if (Object.keys(serverFieldErrors).length > 0) {
          setErrors(serverFieldErrors);
          window.requestAnimationFrame(() => focusFirstError(serverFieldErrors));
        } else {
          setErrors({
            form:
              response.status === 429
                ? "Too many requests were sent. Please wait a few minutes and try again."
                : "We couldn’t send your request. Please try again or contact us on WhatsApp.",
          });
        }

        setStatus("error");
        return;
      }

      setForm(initialValues);
      setFormStartedAt(Date.now());
      setErrors({});
      setStatus("success");
    } catch {
      setErrors({
        form: "We couldn’t send your request. Please try again or contact us on WhatsApp.",
      });
      setStatus("error");
    }
  };

  return (
    <form
      ref={formRef}
      method="post"
      action={endpoint}
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
      className="relative rounded-lg border border-white/15 bg-white/[0.035] p-5 sm:p-7 lg:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" field="fullName" error={errors.fullName} required id={id}>
          <input
            {...fieldProps("fullName")}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={inputClassName}
          />
        </Field>

        <Field label="Work email" field="workEmail" error={errors.workEmail} required id={id}>
          <input
            {...fieldProps("workEmail")}
            name="workEmail"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            value={form.workEmail}
            onChange={(event) => updateField("workEmail", event.target.value)}
            className={inputClassName}
          />
        </Field>

        <Field
          label="Phone / WhatsApp"
          field="phone"
          error={errors.phone}
          required
          id={id}
        >
          <input
            {...fieldProps("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            minLength={7}
            maxLength={30}
            placeholder="+20 100 000 0000"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClassName}
          />
        </Field>

        <Field label="Company name" field="company" error={errors.company} required id={id}>
          <input
            {...fieldProps("company")}
            name="company"
            type="text"
            autoComplete="organization"
            required
            minLength={2}
            maxLength={120}
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClassName}
          />
        </Field>

        <Field
          label="Project type"
          field="projectType"
          error={errors.projectType}
          required
          id={id}
          className="md:col-span-2"
        >
          <select
            {...fieldProps("projectType")}
            name="projectType"
            required
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value as FormValues["projectType"])}
            className={cn(inputClassName, !form.projectType && "text-white/55")}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypeOptions.map((projectType) => (
              <option key={projectType} value={projectType} className="text-white">
                {projectType}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <fieldset className="mt-5">
        <legend className="text-base font-semibold text-white">
          Estimated budget <span aria-hidden="true" className="text-lime">*</span>
          <span className="sr-only">(required unless you are not sure yet)</span>
        </legend>
        <p id={`${id}-budget-help`} className="mt-1 text-sm leading-6 text-white/60">
          A working estimate helps us recommend an appropriate scope. It is not a quotation.
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-[9rem_1fr]">
          <div>
            <label htmlFor={fieldId("currency")} className="sr-only">
              Budget currency
            </label>
            <select
              {...fieldProps("currency", `${id}-budget-help`)}
              name="currency"
              required={!form.budgetNotSure}
              disabled={form.budgetNotSure}
              value={form.currency}
              onChange={(event) => updateField("currency", event.target.value as FormValues["currency"])}
              className={cn(inputClassName, !form.currency && "text-white/55")}
            >
              <option value="" disabled>
                Currency
              </option>
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency} className="text-white">
                  {currency}
                </option>
              ))}
            </select>
            {errors.currency && <FieldError id={errorId("currency")}>{errors.currency}</FieldError>}
          </div>

          <div>
            <label htmlFor={fieldId("estimatedBudget")} className="sr-only">
              Estimated budget amount
            </label>
            <input
              {...fieldProps("estimatedBudget", `${id}-budget-help`)}
              name="estimatedBudget"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              required={!form.budgetNotSure}
              disabled={form.budgetNotSure}
              placeholder="Enter your estimated budget"
              value={form.estimatedBudget}
              onChange={(event) => updateField("estimatedBudget", event.target.value)}
              className={inputClassName}
            />
            {errors.estimatedBudget && (
              <FieldError id={errorId("estimatedBudget")}>{errors.estimatedBudget}</FieldError>
            )}
          </div>
        </div>

        <label className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-3 text-base text-white/80">
          <input
            name="budgetNotSure"
            type="checkbox"
            value="true"
            checked={form.budgetNotSure}
            onChange={(event) => {
              const checked = event.target.checked;
              setForm((current) => ({
                ...current,
                budgetNotSure: checked,
                ...(checked ? { currency: "", estimatedBudget: "" } : {}),
              }));
              setErrors((current) => {
                const next = { ...current };
                delete next.budgetNotSure;
                delete next.currency;
                delete next.estimatedBudget;
                delete next.form;
                return next;
              });
              setStatus("idle");
            }}
            className="h-5 w-5 rounded border-white/30 bg-[#090c12] text-lime accent-[#b7ff00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          />
          I&apos;m not sure yet
        </label>
      </fieldset>

      <div className="mt-5 grid gap-5">
        <Field
          label="Preferred launch date"
          field="preferredLaunchDate"
          error={errors.preferredLaunchDate}
          required
          id={id}
          help="Choose your preferred launch target. We’ll confirm a realistic timeline after reviewing the scope."
        >
          <input
            {...fieldProps("preferredLaunchDate", `${fieldId("preferredLaunchDate")}-help`)}
            name="preferredLaunchDate"
            type="date"
            min={minimumDate || undefined}
            required
            value={form.preferredLaunchDate}
            onChange={(event) => updateField("preferredLaunchDate", event.target.value)}
            className={cn(inputClassName, "[color-scheme:dark]")}
          />
        </Field>

        <Field
          label="Project details"
          field="projectDetails"
          error={errors.projectDetails}
          required
          id={id}
          help="Tell us about your business, the problem you want to solve and the main functionality you need."
        >
          <textarea
            {...fieldProps("projectDetails", `${fieldId("projectDetails")}-help`)}
            name="projectDetails"
            required
            minLength={30}
            maxLength={5_000}
            rows={6}
            value={form.projectDetails}
            onChange={(event) => updateField("projectDetails", event.target.value)}
            className={cn(inputClassName, "resize-y py-3 leading-7")}
          />
        </Field>
      </div>

      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={fieldId("website")}>Leave this field blank</label>
        <input
          id={fieldId("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>
      <input name="formStartedAt" type="hidden" value={formStartedAt || ""} />

      <p className="mt-5 text-sm leading-6 text-white/60">
        We use these details only to review and respond to your enquiry. By submitting, you agree
        to our{" "}
        <Link href="/privacy" className="text-white underline decoration-white/35 underline-offset-4 hover:text-lime">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-white underline decoration-white/35 underline-offset-4 hover:text-lime">
          Terms
        </Link>
        .
      </p>
      <p className="mt-2 text-sm leading-6 text-white/60">
        If a discovery call is useful, we’ll offer a real available time after reviewing your
        request. This form does not reserve a meeting.
      </p>

      {errors.form && (
        <p className="mt-5 rounded-md border border-red-300/30 bg-red-300/10 p-3 text-base text-red-100" role="alert">
          {errors.form}
        </p>
      )}

      {status === "success" && (
        <div
          className="mt-5 flex items-start gap-3 rounded-md border border-lime/35 bg-lime/10 p-4 text-white"
          role="status"
          aria-live="polite"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden="true" />
          <p className="text-base leading-6">
            Your project request was sent. We’ll review it and contact you with the next step.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-lime px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-lime/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#090c12] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
            Sending request
          </>
        ) : (
          <>
            Send Project Request
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  children: React.ReactNode;
  label: string;
  field: FormField;
  error?: string;
  help?: string;
  required?: boolean;
  id: string;
  className?: string;
};

function Field({ children, label, field, error, help, required, id, className }: FieldProps) {
  const inputId = `${id}-${field}`;
  const helpId = `${inputId}-help`;
  const fieldErrorId = `${inputId}-error`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="mb-2 block text-base font-semibold text-white">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="ml-1 text-lime">*</span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {help && (
        <p id={helpId} className="mb-2 text-sm leading-6 text-white/60">
          {help}
        </p>
      )}
      {children}
      {error && <FieldError id={fieldErrorId}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <p id={id} className="mt-2 text-sm text-red-200" role="alert">
      {children}
    </p>
  );
}
