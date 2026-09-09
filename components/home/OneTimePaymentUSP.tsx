"use client";

import { motion } from "framer-motion";
import { Check, KeyRound, ReceiptText, ShieldCheck } from "lucide-react";

const handoverItems = [
  "Project source for custom-built work",
  "Access and deployment notes",
  "Admin credentials and content handover",
  "Launch walkthrough and agreed support",
];

const externalItems = [
  "Domain and hosting renewals",
  "Shopify, payment gateway, or app fees",
  "Third-party licences selected for the project",
];

export function OneTimePaymentUSP() {
  return (
    <section id="ownership" className="scroll-mt-20 relative overflow-hidden border-y border-white/10 bg-[#09100d] section-space">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(78,242,173,0.12),transparent_24rem)]" aria-hidden="true" />
      <div className="site-shell relative grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">04 / Ownership by design</p>
          <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            Pay for the build. Keep what is yours<span className="text-lime">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            We define the deliverables before work starts, then hand over the agreed project
            clearly. No compulsory BuiltIt licence is added to keep your own custom system running.
          </p>

          <div className="build-frame micro-grid mt-9 overflow-hidden bg-[#06100c] p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/40">Build certificate / 01</span>
              <span className="status-pulse h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
            </div>
            <div className="py-9 text-center">
              <ShieldCheck className="mx-auto h-10 w-10 text-lime" aria-hidden="true" />
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/40">Built around</p>
              <p className="display-heading mt-2 text-4xl text-white sm:text-5xl">Your business</p>
              <div className="mx-auto mt-5 inline-flex rotate-[-2deg] items-center gap-2 border border-lime/45 bg-lime/[0.08] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-lime">
                <KeyRound className="h-4 w-4" aria-hidden="true" />
                Handover ready
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-white/35">
              <span>Scope agreed</span>
              <span>Access documented</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:pt-12">
          <motion.article
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="build-frame bg-[#0b1310] p-5 sm:p-7"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <span className="grid h-10 w-10 place-items-center border border-lime/25 bg-lime/10 text-lime">
                <Check className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-lime">Included</p>
                <h3 className="mt-1 text-lg font-bold text-white">A clear handover</h3>
              </div>
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {handoverItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/[0.68]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="border border-white/10 bg-[#080c0e] p-5 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <ReceiptText className="h-5 w-5 text-[#d8d2c4]" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">Third-party costs stay visible</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Some services bill separately under their own terms. We identify them before the
              scope is agreed, so ownership never means a surprise invoice.
            </p>
            <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
              {externalItems.map((item) => (
                <li key={item} className="flex items-start justify-between gap-4 text-sm text-white/[0.62]">
                  <span>{item}</span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-wider text-white/30">External</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
