"use client";

import { FileText, Phone, Code, Rocket } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Fill the Intake Form",
    description: "Tell us about your project, timeline, and budget in 3 minutes.",
  },
  {
    number: "02",
    icon: Phone,
    title: "Discovery Call",
    description: "We'll reach out within 48 hours to discuss details and confirm scope.",
  },
  {
    number: "03",
    icon: Code,
    title: "Design & Build",
    description: "Our team crafts your digital presence in 7–14 days with regular updates.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Handoff",
    description: "We deploy, train you on the CMS, and hand over full ownership.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeUp>
            <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
              The Process
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide">
              Simple. Fast.
              <br />
              <span className="text-white/50">Done right.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Steps */}
        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-lime/0 via-lime/30 to-lime/0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center lg:text-left">
                  {/* Number */}
                  <div className="font-bebas text-8xl text-white/[0.03] absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 select-none">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative pt-8">
                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto lg:mx-0 flex items-center justify-center rounded bg-lime/10 text-lime mb-6">
                      <step.icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bebas text-2xl tracking-wide mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
