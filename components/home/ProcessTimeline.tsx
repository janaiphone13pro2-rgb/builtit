"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/landing-data";

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;

    if (
      !section ||
      !line ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-[#080a12] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-lime">
            Process
          </p>
          <h2 className="mb-8 text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            Strategy, design, build, launch.
          </h2>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80">
            <div className="border-b border-white/10 px-4 py-3 font-mono text-xs text-white/45">
              project.config.ts
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-white/70">
{`export const project = {
  payment: "one-time",
  ownership: "full-source",
  stack: ["Next.js", "Tailwind", "Vercel"],
  subscriptionFees: false,
  handoff: "forever"
};`}
            </pre>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-3 top-0 h-full w-px bg-white/10" />
          <div
            ref={lineRef}
            className="absolute left-3 top-0 h-full w-px origin-top bg-lime shadow-[0_0_22px_rgba(78,242,173,0.7)]"
          />

          <div className="space-y-10">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="relative rounded-lg border border-white/10 bg-white/[0.03] p-6"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="absolute -left-[2.08rem] top-7 flex h-7 w-7 items-center justify-center rounded-full border border-lime/50 bg-[#080a12] text-lime">
                  <step.icon className="h-4 w-4" />
                </span>
                <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-lime">
                  0{index + 1}
                </span>
                <h3 className="mb-3 text-2xl font-black text-white">{step.title}</h3>
                <p className="max-w-2xl leading-7 text-white/60">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
