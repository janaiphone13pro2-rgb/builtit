"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/landing-data";

export function Services() {
  return (
    <section id="services" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-violet-300">
            What we build
          </p>
          <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            Software that becomes an asset, not another monthly bill.
          </h2>
        </div>

        <motion.div
          className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="group relative min-h-[260px] border-b border-white/10 p-6 transition hover:bg-white/[0.03] md:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <span className="absolute right-6 top-6 rounded border border-violet-300/20 bg-violet-300/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-violet-200">
                {service.tag}
              </span>
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-violet-200 transition group-hover:border-violet-300/50 group-hover:bg-violet-300/10">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 pr-20 text-2xl font-black text-white">{service.title}</h3>
              <p className="max-w-sm text-sm leading-6 text-white/60">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
