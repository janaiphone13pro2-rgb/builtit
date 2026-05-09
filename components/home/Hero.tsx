"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedText, FadeUp } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import { Logo } from "@/components/ui/Logo";

const tickerItems = [
  "40+ Projects Delivered",
  "100% Client Satisfaction",
  "14 Days Average Delivery",
  "3 Service Types",
  "Egyptian Market Focus",
  "No Subscriptions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Bold Brand Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stronger lime grid - more visible */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,0,0.08)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        
        {/* Brand color orbs - stronger */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-lime/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange/10 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }} />
        
        {/* Brand accent lines */}
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-lime/30 to-transparent" />
        <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-orange/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Logo Mark */}
          <FadeUp delay={0.1}>
            <div className="mb-8">
              <Logo size="xl" />
            </div>
          </FadeUp>

          {/* Animated Headline */}
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-wide mb-8">
            <AnimatedText text="WE BUILD DIGITAL" delay={0.3} />
            <br />
            <AnimatedText text="PRESENCE THAT" delay={0.5} />
            <br />
            <span className="text-lime drop-shadow-[0_0_30px_rgba(200,255,0,0.3)]">
              <AnimatedText text="CONVERTS." delay={0.7} />
            </span>
          </h1>

          {/* Subheadline with brand accent */}
          <FadeUp delay={0.9}>
            <div className="flex items-start gap-4 mb-12">
              <div className="w-1 h-12 bg-lime rounded-full mt-1" />
              <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
                Portfolios. Storefronts. Digital CVs. Built for the Egyptian market.
              </p>
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={1.1}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton magneticStrength={0.2}>
                <Link
                  href="/intake"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wide rounded hover:bg-orange/90 transition-colors shadow-lg shadow-orange/20"
                >
                  Start Your Project
                  <span>→</span>
                </Link>
              </MagneticButton>

              <MagneticButton magneticStrength={0.2}>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-lime/30 text-white font-bold uppercase tracking-wide rounded hover:bg-lime/10 hover:border-lime/50 transition-colors"
                >
                  See Our Work
                </Link>
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Bottom Ticker with brand styling */}
      <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-lime/10 bg-background/80 backdrop-blur-sm">
        <MarqueeTicker items={tickerItems} />
      </div>
    </section>
  );
}
