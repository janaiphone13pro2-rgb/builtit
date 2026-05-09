"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeDollarSign, CheckCircle2, Sparkles } from "lucide-react";

const headline = "Your Vision. Built Once. Yours Forever.";

const terminalLines = [
  "$ builtit init ownership",
  "framework: Next.js 14",
  "billing: one-time payment",
  "handoff: source + deploy",
  "subscriptions: none",
];

function SplitHeadline() {
  return (
    <span aria-label={headline} className="block">
      {headline.split("").map((character, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block"
          initial={{ opacity: 0, y: 28, rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.32 + index * 0.018,
            ease: [0.22, 1, 0.36, 1],
          }}
          key={`${character}-${index}`}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05060d] pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.12)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.85),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(168,85,247,0.2),transparent_36%),linear-gradient(300deg,rgba(34,197,94,0.12),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-100 shadow-[0_0_40px_rgba(139,92,246,0.18)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="h-4 w-4 text-violet-200" />
            No monthly fees. Ever.
          </motion.div>

          <h1 className="max-w-5xl text-balance font-dm text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <SplitHeadline />
          </h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.3 }}
          >
            Premium websites, apps, and business systems built for a single project fee.
            You own the code, the design, and the asset forever.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.45 }}
          >
            <Link
              href="#booking"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-violet-400 px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-violet-300"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-violet-300/60 hover:bg-violet-300/10"
            >
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-2xl gap-3 text-sm text-white/70 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.6 }}
          >
            {["One-time payment", "Full ownership", "No subscriptions"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-2xl shadow-violet-950/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="font-mono text-xs text-white/45">project.config.ts</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm text-white/75 md:p-7">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={line}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 1.1 + index * 0.24 }}
                >
                  <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(196,181,253,0.9)]" />
                  <span>{line}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -bottom-8 left-5 right-5 rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-5 py-4 text-sm text-emerald-100 backdrop-blur"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <BadgeDollarSign className="h-5 w-5 text-emerald-300" />
              <span className="font-semibold">Invoice closed once. Ownership stays open forever.</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
