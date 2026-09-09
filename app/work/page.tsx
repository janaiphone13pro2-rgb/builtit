import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/work/ProjectCard";
import { portfolioProjects, type PortfolioProject } from "@/lib/landing-data";

export const metadata: Metadata = {
  title: "Work | BuiltIt",
  description:
    "Explore Shopify stores, WordPress websites, and custom-built websites by BuiltIt.",
};

type ProjectGroup = {
  id: string;
  category: PortfolioProject["category"];
  eyebrow: string;
  title: string;
  description: string;
};

const projectGroups: ProjectGroup[] = [
  {
    id: "shopify",
    category: "Shopify",
    eyebrow: "E-commerce",
    title: "Shopify stores",
    description:
      "Online stores built around clear product discovery and a straightforward path to checkout.",
  },
  {
    id: "wordpress",
    category: "WordPress",
    eyebrow: "Business websites",
    title: "WordPress websites",
    description:
      "Flexible marketing and service websites that teams can update through a familiar CMS.",
  },
  {
    id: "custom-coded",
    category: "Custom Coded",
    eyebrow: "Custom development",
    title: "Custom-built websites",
    description:
      "Tailored brand and portfolio websites built for projects that need a more specific approach.",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="blueprint-grid relative overflow-hidden border-b border-white/10 bg-[#05070a] pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-lime/[0.08] blur-[110px]" aria-hidden="true" />
          <div className="site-shell relative">
            <div className="max-w-4xl">
              <p className="section-kicker">Project archive / {portfolioProjects.length}</p>
              <h1 className="display-heading mt-5 text-6xl text-white sm:text-7xl lg:text-8xl">
                Websites built for real businesses<span className="text-lime">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Explore {portfolioProjects.length} Shopify stores, WordPress websites, and
                custom-built sites across retail, services, beauty, property, and more.
              </p>
            </div>

            <nav aria-label="Project categories" className="mt-10 flex flex-wrap gap-2">
              {projectGroups.map((group) => {
                const count = portfolioProjects.filter(
                  (project) => project.category === group.category,
                ).length;

                return (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-flex min-h-11 items-center rounded-sm border border-white/15 bg-[#070b0e]/80 px-4 py-2 font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-white/65 transition-colors hover:border-lime/50 hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    {group.title} ({count})
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

        {projectGroups.map((group) => {
          const projects = portfolioProjects.filter(
            (project) => project.category === group.category,
          );

          return (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-heading`}
              className="scroll-mt-24 border-b border-white/10 py-16 odd:bg-[#070a0d] lg:py-24"
            >
              <div className="site-shell">
                <div className="mb-10 grid gap-4 border-b border-white/10 pb-7 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                  <div>
                    <p className="section-kicker">{group.eyebrow}</p>
                    <h2
                      id={`${group.id}-heading`}
                      className="display-heading mt-3 text-4xl text-white md:text-5xl"
                    >
                      {group.title}
                      <span className="ml-3 font-mono text-base font-semibold text-lime/70">
                        {projects.length}
                      </span>
                    </h2>
                  </div>
                  <p className="max-w-xl text-base leading-7 text-white/65 lg:justify-self-end">
                    {group.description}
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="blueprint-grid relative overflow-hidden bg-[#08100c] py-20 lg:py-28">
          <div className="site-shell relative max-w-4xl text-center">
            <p className="section-kicker">Next build</p>
            <h2 className="display-heading mt-4 text-5xl text-white md:text-6xl">
              Have a project in mind<span className="text-lime">?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/70">
              Tell us what you need and we&apos;ll help you choose a practical way to build it.
            </p>
            <Link
              href="/intake"
              className="primary-cta group mt-8"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
