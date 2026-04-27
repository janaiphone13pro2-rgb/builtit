"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";

const testimonials = [
  {
    quote:
      "BuiltIt transformed how we present our business. The portfolio they built gets compliments from every client we pitch.",
    name: "Omar El-Sayed",
    role: "CEO, NileTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    quote:
      "As a student, I needed something professional but affordable. My digital CV helped me land interviews at top firms.",
    name: "Maya Ahmed",
    role: "Architecture Graduate, AUC",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    quote:
      "The e-commerce store they built handles everything — from Instapay to inventory. Sales doubled in the first month.",
    name: "Karim Fathi",
    role: "Founder, Khan El Khalili Crafts",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
              Clients
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide">
              They trusted us first.
            </h2>
          </FadeUp>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory"
          staggerDelay={0.15}
        >
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="h-full p-6 bg-card border border-[#ffffff15] rounded backdrop-blur-sm snap-start min-w-[300px] md:min-w-0">
                {/* Quote */}
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
