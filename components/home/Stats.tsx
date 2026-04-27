"use client";

import { FadeUp } from "@/components/ui/AnimatedText";
import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "", label: "Service Types" },
  { value: 14, suffix: "", label: "Days Avg. Delivery" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(200,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(200,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1} className="text-center">
              <div className="font-bebas text-5xl md:text-6xl lg:text-7xl text-lime mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <p className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
