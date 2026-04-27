"use client";

import Link from "next/link";
import { Briefcase, ShoppingBag, GraduationCap, ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { TiltCard } from "@/components/ui/TiltCard";

const services = [
  {
    icon: Briefcase,
    title: "Company Portfolios",
    subtitle: "For businesses that need to impress clients before the first meeting.",
    features: ["Custom design", "CMS-ready", "SEO-optimized", "Arabic + English"],
    href: "/services/b2b",
    cta: "Learn More",
  },
  {
    icon: ShoppingBag,
    title: "Local Brand Stores",
    subtitle: "Full storefronts for Egyptian brands ready to sell online.",
    features: ["Product catalog", "Cart & checkout", "Instapay/COD ready", "Mobile-first"],
    href: "/services/ecommerce",
    cta: "Learn More",
  },
  {
    icon: GraduationCap,
    title: "Student Digital CV",
    subtitle: "A link you're proud to share. Your work, your story, online.",
    features: ["Personal domain", "Project showcase", "Download PDF CV", "LinkedIn-ready"],
    href: "/services/students",
    cta: "Learn More",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <FadeUp>
            <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
              What We Build
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide">
              Three products.
              <br />
              <span className="text-white/50">One obsession.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Service Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard tiltAmount={8}>
                <Link href={service.href} className="block group">
                  <div className="h-full p-8 bg-card border border-[#ffffff15] rounded backdrop-blur-sm transition-all duration-300 group-hover:border-lime/30">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded bg-lime/10 text-lime mb-6">
                      <service.icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="font-bebas text-3xl tracking-wide mb-2">{service.title}</h3>

                    {/* Subtitle */}
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{service.subtitle}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                          <span className="w-1 h-1 rounded-full bg-lime" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime group-hover:gap-4 transition-all">
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
