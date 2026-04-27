"use client";

import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import type { IntakeFormData } from "@/lib/schemas/intake";

export function StepOne() {
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
      <h2 className="font-bebas text-2xl tracking-wide">Step 1: About You</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          {...register("fullName")}
          type="text"
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
          placeholder="Your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-400">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone / WhatsApp *</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white placeholder-white/30 focus:border-lime focus:outline-none transition-colors"
          placeholder="+20 1XX XXX XXXX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Your Role *</label>
        <select
          {...register("role")}
          className="w-full px-4 py-3 bg-background border border-[#ffffff15] rounded text-white focus:border-lime focus:outline-none transition-colors"
        >
          <option value="">Select your role</option>
          <option value="Business Owner">Business Owner</option>
          <option value="Student">Student</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Other">Other</option>
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-red-400">{errors.role.message}</p>
        )}
      </div>
    </motion.div>
  );
}
