"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/landing-data";

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-violet-300">
            Testimonials
          </p>
          <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            Clients who wanted ownership, not another platform bill.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Quote className="mb-6 h-8 w-8 text-violet-200" />
              <p className="min-h-32 leading-7 text-white/75">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 font-mono text-sm font-bold text-violet-100">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/45">{testimonial.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
