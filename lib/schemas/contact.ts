import { z } from "zod";

export const projectTypeOptions = [
  "Custom Business System",
  "ERP System",
  "CRM Platform",
  "Web Application or Portal",
  "Mobile Application",
  "E-Commerce",
  "Corporate Website",
  "UI/UX Design",
  "Not Sure Yet",
] as const;

export const currencyOptions = ["USD", "EGP", "GBP", "EUR", "AED", "SAR"] as const;

const emptyValueToNull = (value: unknown) =>
  value === "" || value === null || typeof value === "undefined" ? null : value;

const budgetSchema = z.preprocess(
  (value) => {
    const normalized = emptyValueToNull(value);

    if (typeof normalized === "string") {
      const parsed = Number(normalized.replace(/,/g, ""));
      return Number.isNaN(parsed) ? normalized : parsed;
    }

    if (typeof normalized === "number" && Number.isNaN(normalized)) {
      return null;
    }

    return normalized;
  },
  z
    .number({ invalid_type_error: "Enter an estimated budget or choose ‘I’m not sure yet’" })
    .finite("Enter a valid estimated budget")
    .min(0, "Estimated budget cannot be negative")
    .max(1_000_000_000, "Estimated budget is too large")
    .nullable()
);

const booleanSchema = z.preprocess(
  (value) => value === true || value === "true" || value === "on",
  z.boolean()
);

const optionalTimestampSchema = z.preprocess(
  (value) => {
    if (value === "" || value === null || typeof value === "undefined") {
      return undefined;
    }

    return typeof value === "string" ? Number(value) : value;
  },
  z.number().int().nonnegative().optional()
);

export const contactSchema = z
  .object({
    fullName: z
      .string({ required_error: "Full name is required" })
      .trim()
      .min(2, "Enter your full name")
      .max(100, "Full name is too long"),
    workEmail: z
      .string({ required_error: "Work email is required" })
      .trim()
      .email("Enter a valid work email")
      .max(254, "Email address is too long"),
    phone: z
      .string({ required_error: "Phone or WhatsApp number is required" })
      .trim()
      .min(7, "Enter a valid phone or WhatsApp number")
      .max(30, "Phone number is too long")
      .refine(
        (value) => /^[+\d][\d\s().-]+$/.test(value) && value.replace(/\D/g, "").length >= 7,
        "Enter a valid phone or WhatsApp number"
      ),
    company: z
      .string({ required_error: "Company name is required" })
      .trim()
      .min(2, "Enter your company name")
      .max(120, "Company name is too long"),
    projectType: z.enum(projectTypeOptions, {
      errorMap: () => ({ message: "Select a project type" }),
    }),
    currency: z.preprocess(
      emptyValueToNull,
      z
        .enum(currencyOptions, {
          errorMap: () => ({ message: "Select a currency" }),
        })
        .nullable()
    ),
    estimatedBudget: budgetSchema,
    budgetNotSure: booleanSchema,
    preferredLaunchDate: z
      .string({ required_error: "Preferred launch date is required" })
      .trim()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Select a preferred launch date")
      .refine((value) => {
        const parsed = new Date(`${value}T00:00:00Z`);
        return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(value);
      }, "Select a valid preferred launch date"),
    projectDetails: z
      .string({ required_error: "Project details are required" })
      .trim()
      .min(30, "Please share at least 30 characters about your project")
      .max(5_000, "Project details must be 5,000 characters or fewer"),
    website: z.string().max(200).optional().default(""),
    formStartedAt: optionalTimestampSchema,
  })
  .superRefine((data, context) => {
    if (data.budgetNotSure) {
      return;
    }

    if (!data.currency) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["currency"],
        message: "Select a currency or choose ‘I’m not sure yet’",
      });
    }

    if (data.estimatedBudget === null) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["estimatedBudget"],
        message: "Enter an estimated budget or choose ‘I’m not sure yet’",
      });
    }
  });

export type ContactFormData = z.infer<typeof contactSchema>;
export type ProjectType = (typeof projectTypeOptions)[number];
export type Currency = (typeof currencyOptions)[number];
