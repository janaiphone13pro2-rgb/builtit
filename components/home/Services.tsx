"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { services } from "@/lib/landing-data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 relative overflow-hidden bg-[#05070a] section-space">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" aria-hidden="true" />
      <div className="site-shell relative">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_0.7fr] lg:items-end">
          <div>
            <p className="section-kicker">03 / What we build</p>
            <h2 className="display-heading mt-4 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
              From first click to daily operations<span className="text-lime">.</span>
            </h2>
          </div>
          <div className="border-l border-lime/35 pl-5 lg:justify-self-end">
            <p className="max-w-lg text-base leading-7 text-white/[0.62]">
              Start with one focused build or connect several parts of the business. Every scope
              is shaped around how your team actually works.
            </p>
          </div>
        </div>

        <motion.div
          className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative flex min-h-[18rem] flex-col overflow-hidden border-b border-r border-white/10 bg-[#080b0e]/75 p-5 transition-colors duration-300 hover:bg-[#0d1416] sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-lime transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-white/30">/{String(index + 1).padStart(2, "0")}</span>
                <ArrowDownRight className="h-5 w-5 text-white/20 transition duration-300 group-hover:rotate-[-45deg] group-hover:text-lime" aria-hidden="true" />
              </div>

              <div className="mt-9 grid h-11 w-11 place-items-center border border-white/10 bg-white/[0.03] text-lime transition-colors group-hover:border-lime/35 group-hover:bg-lime/[0.08]">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <h3 className="display-heading mt-6 text-3xl text-white sm:text-4xl">{service.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/[0.58]">{service.description}</p>

              <span className="mt-auto pt-6 font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-lime/80">
                {service.tag}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
