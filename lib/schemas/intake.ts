import { z } from "zod";

export const intakeSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  role: z.enum(["Business Owner", "Student", "Freelancer", "Other"]),
  serviceNeeded: z.enum([
    "B2B Portfolio",
    "E-commerce Store",
    "Student CV",
    "Not sure",
  ]),
  projectDescription: z.string().min(50, "Please provide at least 50 characters"),
  hasDomain: z.enum(["Yes", "No", "Need help"]),
  designReference: z.string().optional(),
  budgetRange: z.enum([
    "< 5,000 EGP",
    "5–15k EGP",
    "15–30k EGP",
    "30k+ EGP",
    "Flexible",
  ]),
  contactMethod: z.enum(["WhatsApp", "Email", "Call"]),
  bestTime: z.enum(["Morning", "Afternoon", "Evening"]),
  timeline: z.enum(["ASAP", "Within 1 month", "Just exploring"]),
  hearAbout: z.string(),
  additionalInfo: z.string().optional(),
});

export type IntakeFormData = z.infer<typeof intakeSchema>;
