"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const proofPoints = [
  "One-time payment",
  "Full code ownership",
  "No subscriptions. Ever.",
];

export function Hero() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(540px circle at ${mouseX}px ${mouseY}px, rgba(78, 242, 173, 0.2), rgba(78, 242, 173, 0.08) 36%, transparent 68%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - bounds.left);
    mouseY.set(event.clientY - bounds.top);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92svh] overflow-hidden bg-[#05060d] pt-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,242,173,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(78,242,173,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,rgba(0,0,0,0.88),transparent)]" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_28%),linear-gradient(300deg,rgba(78,242,173,0.1),transparent_44%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(92svh-6rem)] max-w-7xl flex-col items-center justify-center px-6 pb-14 pt-10 text-center lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-5 py-2.5 text-sm font-bold text-lime shadow-[0_0_40px_rgba(78,242,173,0.18)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_18px_rgba(78,242,173,0.9)]" />
            Trusted by 100+ businesses worldwide
          </motion.div>

          <motion.h1
            className="text-balance font-dm text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-white/90">Your Vision.</span>
            <span className="block">
              Built Once. <span className="text-lime">Yours Forever.</span>
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/68 md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.48 }}
          >
            Premium websites, apps, and business systems built for a single project fee.
            You own the code, the design, and the asset forever.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.62 }}
          >
            <Link
              href="#booking"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-lime px-8 py-4 text-base font-black text-slate-950 shadow-[0_0_36px_rgba(78,242,173,0.22)] transition hover:bg-lime/90"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-8 py-4 text-base font-black text-white transition hover:border-lime/60 hover:bg-lime/10"
            >
              See Our Work
            </Link>
          </motion.div>

          <motion.div
            className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3 text-sm font-semibold text-white/70"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.76 }}
          >
            {proofPoints.map((item) => (
              <div
                key={item}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-lime" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
