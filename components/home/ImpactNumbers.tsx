"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "@/lib/landing-data";

function countProjects(category: PortfolioProject["category"]) {
  return portfolioProjects.filter((project) => project.category === category).length;
}

const archiveBreakdown = [
  { value: countProjects("WordPress"), label: "WordPress", detail: "Service and brand websites" },
  { value: countProjects("Shopify"), label: "Shopify", detail: "Commerce experiences" },
  { value: countProjects("Custom Coded"), label: "Custom code", detail: "Tailored digital builds" },
];

export function ImpactNumbers() {
  return (
    <section className="relative overflow-hidden bg-[#05070a] section-space">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="site-shell relative">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker">07 / Project archive</p>
          <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            A record you can inspect<span className="text-lime">.</span>
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.6 }}
            className="build-frame micro-grid flex min-h-[22rem] flex-col justify-between overflow-hidden bg-[#07100c] p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-white/40">
              <span>Portfolio index</span>
              <span className="flex items-center gap-2 text-lime"><span className="status-pulse h-2 w-2 rounded-full bg-lime" />Project archive</span>
            </div>
            <div>
              <p className="display-heading text-[clamp(7rem,22vw,12rem)] leading-[0.72] text-lime">{portfolioProjects.length}</p>
              <p className="display-heading mt-6 text-3xl text-white sm:text-4xl">Projects catalogued with screenshots and links</p>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/55">Screenshots, categories, and direct links—so the portfolio can speak for itself.</p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {archiveBreakdown.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border border-white/10 bg-[#090d11] p-5 transition-colors hover:border-lime/30 sm:p-6"
              >
                <span className="display-heading min-w-16 text-5xl text-white transition-colors group-hover:text-lime sm:text-6xl">{item.value}</span>
                <span>
                  <span className="block text-base font-bold text-white">{item.label}</span>
                  <span className="mt-1 block text-sm text-white/[0.48]">{item.detail}</span>
                </span>
                <span className="font-mono text-[0.62rem] text-white/25">/{String(index + 1).padStart(2, "0")}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/work" className="secondary-cta group">
            Open the full archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
