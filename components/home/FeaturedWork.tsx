import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/work/ProjectCard";
import { portfolioProjects } from "@/lib/landing-data";

const featuredProjects = portfolioProjects
  .filter((project) => project.featured)
  .slice(0, 6);

export function FeaturedWork() {
  return (
    <section id="work" className="border-y border-white/10 bg-[#080a12] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-lime">
              Selected work
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-black tracking-tight text-white md:text-5xl">
              Selected websites and online stores
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/70 lg:justify-self-end">
            Browse a selection of Shopify stores, WordPress websites, and custom-built brand sites.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              priority={index < 2}
              imageSizes="(max-width: 767px) 100vw, 50vw"
            />
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
