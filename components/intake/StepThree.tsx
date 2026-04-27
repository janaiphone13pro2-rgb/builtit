"use client";

import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "@/lib/schemas/intake";

export function StepThree() {
  const { register } = useFormContext<IntakeFormData>();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="font-bebas text-2xl tracking-wide">Step 3: Availability</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Preferred Contact Method *</label>
        <select
          {...register("contactMethod")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select method</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Email">Email</option>
          <option value="Call">Phone Call</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Best Time to Reach You *</label>
        <select
          {...register("bestTime")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select time</option>
          <option value="Morning">Morning (9AM–12PM)</option>
          <option value="Afternoon">Afternoon (12PM–5PM)</option>
          <option value="Evening">Evening (5PM–9PM)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Timeline *</label>
        <select
          {...register("timeline")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select timeline</option>
          <option value="ASAP">ASAP — ready to start now</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="Just exploring">Just exploring options</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">How did you hear about us? *</label>
        <select
          {...register("hearAbout")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select an option</option>
          <option value="Instagram">Instagram</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Friend">Friend / Colleague</option>
          <option value="Google">Google Search</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Anything else? (optional)</label>
        <textarea
          {...register("additionalInfo")}
          rows={3}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors resize-none"
          placeholder="Any additional details, questions, or requirements..."
        />
      </div>
    </motion.div>
  );
}
