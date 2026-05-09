"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";

const works = [
  {
    title: "NileTech Solutions",
    category: "B2B Portfolio",
    description: "Corporate website for a Cairo-based tech consultancy.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Khan El Khalili Crafts",
    category: "E-commerce",
    description: "Online storefront for traditional Egyptian handicrafts.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Ahmed Hassan",
    category: "Student CV",
    description: "Digital portfolio for an architecture graduate.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    title: "Cairo Fashion House",
    category: "E-commerce",
    description: "Modern boutique e-commerce with local payment integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <FadeUp>
              <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
                Selected Work
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide">
                Built to impress.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-lime hover:gap-4 transition-all"
            >
              See All Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>

        {/* Work Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {works.map((work) => (
            <StaggerItem key={work.title}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-card border border-[#ffffff15]">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm text-white/80 mb-2">{work.description}</p>
                      <div className="flex items-center gap-2 text-lime">
                        <span className="text-sm font-bold uppercase tracking-wide">View</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-bebas text-2xl tracking-wide">{work.title}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-white/50 px-3 py-1 rounded bg-white/5">
                    {work.category}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
