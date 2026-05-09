import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.enum([
    "E-Commerce",
    "Web Application",
    "Mobile App",
    "ERP / CRM",
    "Landing Page",
    "UI/UX Design",
  ]),
  selectedDate: z.string().min(1, "Please select a date"),
  selectedTime: z.string().min(1, "Please select a time"),
  budget: z.enum([
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
    "Not sure yet",
  ]),
  message: z.string().min(20, "Please share at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
