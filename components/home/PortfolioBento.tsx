"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { portfolioCategories, portfolioProjects } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

const sizeClasses: Record<string, string> = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-1 md:row-span-2",
  lg: "md:col-span-2 md:row-span-2",
  xl: "md:col-span-2 md:row-span-3",
};

export function PortfolioBento() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof portfolioCategories)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-lime">
              Portfolio
            </p>
            <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
              Real launches across portfolios, Shopify, WordPress, and custom-coded sites.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "rounded-md border px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition",
                  activeCategory === category
                    ? "border-lime bg-lime text-slate-950"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:border-lime/50 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.name}
                layout
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]",
                  sizeClasses[project.size]
                )}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                whileHover={{ scale: 1.015 }}
              >
                <Image
                  src={project.image}
                  alt={`${project.name} website screenshot`}
                  fill
                  unoptimized
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-white/75 backdrop-blur">
                      {project.category}
                    </span>
                    <span className="rounded border border-lime/25 bg-lime/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-lime backdrop-blur">
                      {project.tech}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{project.name}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                    {project.description}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/70 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-md bg-lime px-4 py-3 text-sm font-black uppercase tracking-wide text-slate-950">
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
