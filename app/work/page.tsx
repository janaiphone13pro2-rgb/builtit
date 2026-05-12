import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Work | BuiltIt",
  description: "Live portfolios, Shopify stores, WordPress sites, and custom-coded websites by BuiltIt.",
};

export default function WorkPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
                Our Work
              </p>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6">
                Selected<br />
                <span className="text-white/50">Projects.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl">
                A selection of live portfolios, stores, WordPress sites, and custom-coded websites we&apos;ve built.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {portfolioProjects.map((project) => (
                <StaggerItem key={project.name}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded bg-card border border-[#ffffff15] mb-4">
                      <Image
                        src={project.image}
                        alt={`${project.name} website screenshot`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-sm text-white/80 line-clamp-2">{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bebas text-2xl tracking-wide">{project.name}</h3>
                        <p className="text-sm text-white/50">{project.category}</p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-lime opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/60 px-2 py-1 bg-white/5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 border-t border-white/[0.08]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
                Want to See Your<br />Project Here?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Let&apos;s discuss how we can build something exceptional together.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton>
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors">
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
