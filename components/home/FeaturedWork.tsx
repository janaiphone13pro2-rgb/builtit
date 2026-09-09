import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/work/ProjectCard";
import { portfolioProjects } from "@/lib/landing-data";

const featuredProjects = portfolioProjects.filter((project) => project.featured).slice(0, 5);

export function FeaturedWork() {
  const [leadProject, ...supportingProjects] = featuredProjects;

  return (
    <section id="work" className="scroll-mt-20 border-b border-white/10 bg-[#070a0d] section-space">
      <div className="site-shell">
        <div className="mb-10 grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:pb-10">
          <div>
            <p className="section-kicker">02 / Selected work</p>
            <h2 className="display-heading mt-4 max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl">
              Work you can inspect<span className="text-lime">.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/[0.62] lg:justify-self-end">
            A selection of live stores, service websites, and custom brand experiences already
            working in the real world.
          </p>
        </div>

        {leadProject ? (
          <ProjectCard
            project={leadProject}
            priority
            featured
            index={0}
            imageSizes="(max-width: 1023px) 100vw, 70vw"
          />
        ) : null}

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {supportingProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              priority={index === 0}
              index={index + 1}
              imageSizes="(max-width: 767px) 100vw, 50vw"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.13em] text-white/40">
            Shopify · WordPress · Custom code
          </p>
          <Link href="/work" className="primary-cta group">
            Explore all {portfolioProjects.length} projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
