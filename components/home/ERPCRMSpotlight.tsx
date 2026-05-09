"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { erpModules } from "@/lib/landing-data";

export function ERPCRMSpotlight() {
  return (
    <section id="erp" className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-violet-300">
            ERP / CRM systems
          </p>
          <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            All Your Business Modules. One Dashboard. One Payment.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Replace scattered SaaS tools with a tailored dashboard your team owns.
            Inventory, sales, HR, CRM, accounting, and reporting in one place.
          </p>
          <div className="mt-8 space-y-3 text-white/70">
            {["One-time payment, no subscriptions", "Role-based dashboards", "Clean handoff and launch support"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="#booking"
            className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-violet-300 px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-violet-200"
          >
            Build My System
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950 shadow-2xl shadow-violet-950/30">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                  BuiltIt OS
                </p>
                <h3 className="mt-1 text-xl font-black text-white">Operations Dashboard</h3>
              </div>
              <span className="rounded bg-emerald-400/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-emerald-200">
                owned
              </span>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-3">
                {erpModules.slice(0, 4).map((module) => (
                  <div
                    key={module.label}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-3"
                  >
                    <module.icon className="h-4 w-4 text-violet-200" />
                    <span className="text-sm text-white/70">{module.label}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-md border border-white/10 bg-[#090d19] p-4">
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {["Revenue", "Orders", "Tasks"].map((label, index) => (
                    <div key={label} className="rounded border border-white/10 bg-white/[0.03] p-3">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                        {label}
                      </p>
                      <p className="mt-2 text-xl font-black text-white">
                        {index === 0 ? "$82k" : index === 1 ? "1.2k" : "48"}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex h-44 items-end gap-2 rounded border border-white/10 bg-slate-950/70 p-4">
                  {[34, 58, 44, 72, 64, 92, 78, 96].map((height, index) => (
                    <motion.span
                      key={index}
                      className="flex-1 rounded-t bg-violet-300/80"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.07 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
            {erpModules.map((module, index) => (
              <motion.div
                key={module.label}
                className="flex items-center gap-2 rounded-md border border-violet-300/20 bg-violet-300/10 px-3 py-3 text-sm text-violet-100 backdrop-blur"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <module.icon className="h-4 w-4" />
                {module.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
