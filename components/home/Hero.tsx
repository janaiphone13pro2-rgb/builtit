"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Check,
  Globe2,
  ShoppingBag,
  Users,
} from "lucide-react";

const systemNodes = [
  { icon: Globe2, label: "Website", detail: "Your front door", position: "left-[5%] top-[10%]" },
  { icon: ShoppingBag, label: "Commerce", detail: "Orders & payments", position: "right-[5%] top-[10%]" },
  { icon: Users, label: "CRM", detail: "Customers & pipeline", position: "bottom-[10%] left-[5%]" },
  { icon: Boxes, label: "Operations", detail: "Stock & workflows", position: "bottom-[10%] right-[5%]" },
];

const promises = ["Clear scope", "Agreed source & access handover", "No forced BuiltIt licence"];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-svh overflow-hidden border-b border-white/10 bg-[#05070a] pt-24"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-65 [mask-image:linear-gradient(to_bottom,black_10%,transparent_92%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-12 h-[34rem] w-[34rem] rounded-full bg-lime/[0.09] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-18rem] top-32 h-[38rem] w-[38rem] rounded-full bg-[#d8d2c4]/[0.035] blur-[120px]" aria-hidden="true" />

      <div className="site-shell relative grid min-h-[calc(100svh-6rem)] items-center gap-12 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div variants={reveal} transition={{ duration: 0.55 }}>
            <span className="section-kicker">Independent software studio · Cairo</span>
          </motion.div>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.65 }}
            className="display-heading mt-6 text-[clamp(4rem,14vw,6rem)] text-white lg:text-[clamp(5.25rem,7.5vw,7.5rem)]"
          >
            We build digital
            <span className="block text-lime">
              systems you own<span className="text-white">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8"
          >
            Websites, commerce, and operational software shaped around your business—with a
            clear scope, direct collaboration, and an agreed handover.
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="#booking" className="primary-cta group">
              Build with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="#work" className="secondary-cta">
              See what we have built
            </Link>
          </motion.div>

          <motion.ul
            variants={reveal}
            transition={{ duration: 0.6 }}
            className="mt-8 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3"
            aria-label="How BuiltIt works"
          >
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2 text-sm font-medium text-white/60">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-lime/25 bg-lime/10 text-lime">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {promise}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="build-frame relative mx-auto w-full max-w-[42rem] overflow-hidden bg-[#080c10]/95 shadow-[0_32px_100px_rgba(0,0,0,0.5)]"
          aria-labelledby="build-map-caption"
        >
          <figcaption
            id="build-map-caption"
            className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5"
          >
            <div className="flex items-center gap-3">
              <span className="status-pulse h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
              <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70 sm:text-xs">
                BuiltIt assembly map
              </span>
            </div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/35 sm:text-[0.7rem]">
              System / 01
            </span>
          </figcaption>

          <div className="micro-grid relative aspect-[1/1.05] overflow-hidden sm:aspect-[5/4]">
            <div className="blueprint-scan pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-lime/80 to-transparent shadow-[0_0_18px_rgba(78,242,173,0.45)]" aria-hidden="true" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 400"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <motion.path d="M125 85 L250 200" stroke="rgba(78,242,173,0.48)" strokeWidth="1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.85, delay: 0.55 }} />
              <motion.path d="M375 85 L250 200" stroke="rgba(78,242,173,0.48)" strokeWidth="1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.85, delay: 0.68 }} />
              <motion.path d="M125 315 L250 200" stroke="rgba(78,242,173,0.48)" strokeWidth="1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.85, delay: 0.81 }} />
              <motion.path d="M375 315 L250 200" stroke="rgba(78,242,173,0.48)" strokeWidth="1.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.85, delay: 0.94 }} />
              <circle cx="250" cy="200" r="72" stroke="rgba(255,255,255,0.08)" strokeDasharray="5 7" />
              <circle cx="250" cy="200" r="96" stroke="rgba(255,255,255,0.035)" />
            </svg>

            {systemNodes.map((node, index) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.48 + index * 0.1 }}
                className={`absolute z-10 w-[39%] border border-white/10 bg-[#0c1116]/95 p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.34)] sm:w-[31%] sm:p-4 ${node.position}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="hidden h-8 w-8 shrink-0 place-items-center rounded-sm border border-lime/20 bg-lime/[0.08] text-lime sm:grid sm:h-9 sm:w-9">
                    <node.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.68rem] font-bold leading-tight text-white sm:truncate sm:text-sm">{node.label}</p>
                    <p className="mt-0.5 hidden truncate text-[0.68rem] text-white/45 sm:block">{node.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="absolute left-1/2 top-1/2 z-10 aspect-square w-[32%] -translate-x-1/2 -translate-y-1/2 sm:w-[28%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.72 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.9 }}
                className="grid h-full w-full place-items-center rounded-full border border-lime/35 bg-[#07110d] text-center shadow-[0_0_55px_rgba(78,242,173,0.15)]"
              >
                <div>
                  <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-lime shadow-[0_0_16px_rgba(78,242,173,0.9)]" aria-hidden="true" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.13em] text-white/45 sm:text-[0.65rem]">Core</p>
                  <p className="mt-1 text-xs font-black uppercase text-white sm:text-sm">Your business</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/10 text-[0.68rem] sm:text-xs">
            <div className="border-r border-white/10 px-4 py-3">
              <span className="font-mono uppercase tracking-[0.12em] text-white/35">Build state</span>
              <span className="mt-1 block font-semibold text-white/75">Connected around you</span>
            </div>
            <div className="px-4 py-3">
              <span className="font-mono uppercase tracking-[0.12em] text-white/35">Handover</span>
              <span className="mt-1 block font-semibold text-lime">Ready to own</span>
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
