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
      <main id="main-content">
        <section className="border-b border-white/10 pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-lime">
                Our work
              </p>
              <h1 className="text-balance text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
                Websites built for real businesses
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Explore {portfolioProjects.length} Shopify stores, WordPress websites, and
                custom-built sites across retail, services, beauty, property, and more.
              </p>
            </div>

            <nav aria-label="Project categories" className="mt-10 flex flex-wrap gap-3">
              {projectGroups.map((group) => {
                const count = portfolioProjects.filter(
                  (project) => project.category === group.category,
                ).length;

                return (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-flex min-h-11 items-center rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white transition-colors hover:border-lime hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
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
              className="scroll-mt-24 border-b border-white/10 py-16 lg:py-24"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-10 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                  <div>
                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-lime">
                      {group.eyebrow}
                    </p>
                    <h2
                      id={`${group.id}-heading`}
                      className="text-3xl font-black tracking-tight text-white md:text-4xl"
                    >
                      {group.title}
                      <span className="ml-3 text-lg font-semibold text-white/45">
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

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="text-balance text-4xl font-black tracking-tight text-white md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/70">
              Tell us what you need and we&apos;ll help you choose a practical way to build it.
            </p>
            <Link
              href="/intake"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-lime px-7 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
            >
              Start a project
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
