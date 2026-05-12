"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { portfolioProjects } from "@/lib/landing-data";

const works = portfolioProjects.filter((project) => project.featured).slice(0, 4);

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
            <StaggerItem key={work.name}>
              <a href={work.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded bg-card border border-[#ffffff15]">
                  <Image
                    src={work.image}
                    alt={`${work.name} website screenshot`}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-sm text-white/80 mb-2">{work.description}</p>
                      <div className="flex items-center gap-2 text-lime">
                        <span className="text-sm font-bold uppercase tracking-wide">Visit Site</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-bebas text-2xl tracking-wide">{work.name}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-white/50 px-3 py-1 rounded bg-white/5">
                    {work.category}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
