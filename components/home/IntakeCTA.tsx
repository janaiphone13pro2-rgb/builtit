"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function IntakeCTA() {
  return (
    <section className="py-24 lg:py-32 bg-lime relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide text-black mb-6">
            Ready to build something real?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-lg text-black/70 mb-10 max-w-xl mx-auto">
            Fill the intake form — takes 3 minutes. We respond in 24 hours.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <MagneticButton magneticStrength={0.15}>
            <Link
              href="/intake"
              className="inline-flex items-center gap-3 px-10 py-5 bg-black text-lime font-bold uppercase tracking-wide rounded hover:bg-black/80 transition-colors text-lg"
            >
              Start Your Project
              <span>→</span>
            </Link>
          </MagneticButton>
        </FadeUp>
      </div>
    </section>
  );
}
