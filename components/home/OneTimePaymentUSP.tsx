"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, XCircle } from "lucide-react";
import { comparison } from "@/lib/landing-data";

export function OneTimePaymentUSP() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const othersRef = useRef<HTMLDivElement | null>(null);
  const usRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".strike-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
          },
        }
      );

      gsap.fromTo(
        usRef.current,
        { boxShadow: "0 0 0 rgba(78,242,173,0)" },
        {
          boxShadow: "0 0 55px rgba(78,242,173,0.18)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 62%",
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ownership"
      className="relative overflow-hidden bg-[#070912] py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_72px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-lime">
            One-time payment
          </p>
          <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            Pay Once. Own It Forever.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div
            ref={othersRef}
            className="rounded-lg border border-red-400/20 bg-red-950/10 p-6 lg:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <XCircle className="h-6 w-6 text-red-300" />
              <h3 className="text-2xl font-black text-white">Others</h3>
            </div>
            <div className="space-y-5">
              {comparison.others.map((item) => (
                <div key={item} className="relative flex items-center justify-between gap-4">
                  <span className="text-lg text-white/75">{item}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-200">
                    recurring
                  </span>
                  <span className="strike-line absolute left-0 top-1/2 h-0.5 w-full origin-left bg-red-400 shadow-[0_0_18px_rgba(248,113,113,0.6)]" />
                </div>
              ))}
            </div>
          </div>

          <div
            ref={usRef}
            className="rounded-lg border border-lime/30 bg-lime/10 p-6 lg:p-8"
          >
            <div className="mb-8 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-lime" />
              <h3 className="text-2xl font-black text-white">Us</h3>
            </div>
            <div className="space-y-5">
              {comparison.us.map((item) => (
                <div key={item} className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold text-white">{item}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-lime">
                    yours
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
