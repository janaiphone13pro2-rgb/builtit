import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | BuiltIt",
  description: "Selected projects we've built for businesses and students across Egypt.",
};

const projects = [
  {
    title: "NileTech Solutions",
    category: "B2B Portfolio",
    description: "Corporate website for a Cairo-based tech consultancy. Features bilingual support, case studies, and lead generation forms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Corporate", "Bilingual", "CMS"],
  },
  {
    title: "Khan El Khalili Crafts",
    category: "E-commerce",
    description: "Online storefront for traditional Egyptian handicrafts. Integrated with Instapay and local couriers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["E-commerce", "Instapay", "COD"],
  },
  {
    title: "Ahmed Hassan",
    category: "Student CV",
    description: "Digital portfolio for an architecture graduate from AUC. Project gallery with before/after sliders.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    tags: ["Portfolio", "Architecture", "Gallery"],
  },
  {
    title: "Cairo Fashion House",
    category: "E-commerce",
    description: "Modern boutique e-commerce with AR try-on feature and seasonal lookbooks.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tags: ["Fashion", "Mobile-first", "Instagram Shop"],
  },
  {
    title: "Delta Logistics",
    category: "B2B Portfolio",
    description: "Industrial logistics company website with fleet tracking integration and quote request system.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tags: ["Industrial", "Logistics", "Forms"],
  },
  {
    title: "Mariam El-Desouky",
    category: "Student CV",
    description: "Digital CV for a computer science student. Includes GitHub integration and interactive project demos.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    tags: ["Tech", "Developer", "GitHub"],
  },
];

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
                A selection of portfolios, stores, and digital CVs we&apos;ve built for clients across Egypt.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <div className="group">
                    <div className="relative aspect-[4/3] overflow-hidden rounded bg-card border border-[#ffffff15] mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
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
                        <h3 className="font-bebas text-2xl tracking-wide">{project.title}</h3>
                        <p className="text-sm text-white/50">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-white/60 px-2 py-1 bg-white/5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wide rounded hover:bg-orange/90 transition-colors">
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
