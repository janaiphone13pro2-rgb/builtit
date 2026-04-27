"use client";

import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "@/lib/schemas/intake";

export function StepTwo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IntakeFormData>();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="font-bebas text-2xl tracking-wide">Step 2: Your Project</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Service Needed *</label>
        <select
          {...register("serviceNeeded")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select a service</option>
          <option value="B2B Portfolio">B2B Portfolio</option>
          <option value="E-commerce Store">E-commerce Store</option>
          <option value="Student CV">Student CV</option>
          <option value="Not sure">Not sure — help me decide</option>
        </select>
        {errors.serviceNeeded && (
          <p className="mt-1 text-sm text-red-400">{errors.serviceNeeded.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Description *</label>
        <textarea
          {...register("projectDescription")}
          rows={4}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
        {errors.projectDescription && (
          <p className="mt-1 text-sm text-red-400">{errors.projectDescription.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Do you have a domain/hosting? *</label>
        <select
          {...register("hasDomain")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes, already have one</option>
          <option value="No">No, need help with this</option>
          <option value="Need help">Not sure — need guidance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Design Reference (optional)</label>
        <input
          {...register("designReference")}
          type="url"
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
          placeholder="https://example.com/design-i-like"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Budget Range *</label>
        <select
          {...register("budgetRange")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select your budget</option>
          <option value="< 5,000 EGP">Less than 5,000 EGP</option>
          <option value="5–15k EGP">5,000 – 15,000 EGP</option>
          <option value="15–30k EGP">15,000 – 30,000 EGP</option>
          <option value="30k+ EGP">More than 30,000 EGP</option>
          <option value="Flexible">Flexible / Not sure</option>
        </select>
        {errors.budgetRange && (
          <p className="mt-1 text-sm text-red-400">{errors.budgetRange.message}</p>
        )}
      </div>
    </motion.div>
  );
}
