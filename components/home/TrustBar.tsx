"use client";

import Link from "next/link";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useState } from "react";
import { clientLogos, portfolioProjects } from "@/lib/landing-data";

function LogoSequence({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`shrink-0 gap-3 pr-3 ${duplicate ? "hidden md:flex motion-reduce:hidden" : "flex pl-4 md:pl-0"}`}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {clientLogos.map((logo, index) => (
        <li
          key={`${duplicate ? "duplicate-" : ""}${logo}`}
          className="group relative flex h-24 w-56 shrink-0 snap-start items-center border border-white/10 bg-[#090d11] px-5 transition-colors hover:border-lime/35 hover:bg-lime/[0.035] sm:w-64"
        >
          <span className="absolute left-4 top-3 font-mono text-[0.65rem] text-white/30">
            /{String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-3 text-base font-black uppercase tracking-[0.12em] text-white/[0.62] transition-colors group-hover:text-white">
            {logo}
          </span>
          <span
            className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-lime"
            aria-hidden="true"
          />
        </li>
      ))}
    </ul>
  );
}

export function TrustBar() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-[#080b0e] py-10"
      aria-labelledby="client-carousel-heading"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-15" aria-hidden="true" />
      <div className="site-shell relative">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">01 / Selected clients</p>
            <h2 id="client-carousel-heading" className="display-heading mt-3 text-3xl text-white sm:text-4xl">
              Brands in the BuiltIt archive<span className="text-lime">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="hidden min-h-11 items-center gap-2 border border-white/15 bg-white/[0.025] px-3 font-mono text-xs font-bold uppercase tracking-[0.1em] text-white/70 transition-colors hover:border-lime/40 hover:text-lime motion-reduce:hidden md:inline-flex"
              aria-controls="client-logo-track"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {isPaused ? "Resume" : "Pause"}
              <span className="sr-only"> client carousel</span>
            </button>
            <Link
              href="/work"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-lime"
            >
              {portfolioProjects.length} projects
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="logo-marquee relative snap-x snap-mandatory overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:snap-none md:overflow-hidden">
        <div
          id="client-logo-track"
          className={`logo-marquee-track flex w-max ${isPaused ? "[animation-play-state:paused]" : ""}`}
        >
          <LogoSequence />
          <LogoSequence duplicate />
        </div>
      </div>
    </section>
  );
}
