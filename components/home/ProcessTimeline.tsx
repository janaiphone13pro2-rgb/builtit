"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { processSteps } from "@/lib/landing-data";

const buildSpec = [
  ["Scope", "Agreed before build"],
  ["Visibility", "Working previews"],
  ["Handover", "Access documented"],
  ["Launch", "Support included"],
];

export function ProcessTimeline() {
  return (
    <section id="process" className="scroll-mt-20 border-y border-white/10 bg-[#070a0d] section-space">
      <div className="site-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">06 / The build path</p>
          <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            Clear from first call to handover<span className="text-lime">.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/[0.62]">
            Every stage has a decision, a visible output, and a clear next step. You always know
            what is being built and why.
          </p>

          <div className="build-frame mt-8 overflow-hidden bg-[#080c10]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/40">Build specification</span>
              <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
            </div>
            <dl className="divide-y divide-white/10">
              {buildSpec.map(([term, description]) => (
                <div key={term} className="grid grid-cols-[0.72fr_1.28fr] gap-4 px-4 py-3 text-sm">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-white/35">{term}</dt>
                  <dd className="flex items-center gap-2 font-medium text-white/[0.72]">
                    <Check className="h-3.5 w-3.5 shrink-0 text-lime" aria-hidden="true" />
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="relative pl-9 sm:pl-12">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-white/10 sm:left-4" aria-hidden="true" />
          <motion.div
            className="absolute bottom-0 left-3 top-0 w-px origin-top bg-lime shadow-[0_0_20px_rgba(78,242,173,0.5)] sm:left-4"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            aria-hidden="true"
          />

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group relative border border-white/10 bg-[#0a0e12] p-5 transition-colors hover:border-white/20 sm:p-7"
              >
                <span className="absolute -left-[2.18rem] top-6 grid h-7 w-7 place-items-center rounded-full border border-lime/40 bg-[#07100c] text-lime sm:-left-[3.28rem] sm:h-8 sm:w-8">
                  <step.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                </span>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-lime">Stage {String(index + 1).padStart(2, "0")}</span>
                    <h3 className="display-heading mt-3 text-3xl text-white sm:text-4xl">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/[0.58] sm:text-base sm:leading-7">{step.description}</p>
                  </div>
                  <span className="font-bebas text-5xl leading-none text-white/[0.035] transition-colors group-hover:text-lime/[0.08] sm:text-6xl" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
