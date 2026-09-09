"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/landing-data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/10 bg-[#070a0d] section-space"
      aria-labelledby="testimonials-heading"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-10rem] top-10 h-80 w-80 rounded-full bg-lime/[0.07] blur-[110px]" aria-hidden="true" />

      <div className="site-shell relative">
        <div className="mb-10 grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="section-kicker">08 / Testimonials</p>
            <h2 id="testimonials-heading" className="display-heading mt-4 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
              Clients who wanted ownership,
              <span className="block text-lime">not another platform bill.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/[0.62] lg:justify-self-end">
            Clear collaboration, useful systems, and a handover designed to leave the client in control.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="build-frame group flex min-h-[25rem] flex-col overflow-hidden bg-[#090d11] p-6 transition-colors hover:border-lime/30 sm:p-7"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center border border-lime/20 bg-lime/[0.07] text-lime">
                  <Quote className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-white/30">
                  /{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <blockquote className="mt-8 flex-1">
                <p className="text-lg leading-8 text-white/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              <footer className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-lime/30 bg-lime/10 font-mono text-sm font-bold text-lime">
                  {testimonial.initials}
                </span>
                <cite className="not-italic">
                  <span className="block font-bold text-white">{testimonial.name}</span>
                  <span className="mt-0.5 block text-sm text-white/45">{testimonial.company}</span>
                </cite>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
