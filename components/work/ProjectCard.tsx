"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import type { PortfolioProject } from "@/lib/landing-data";

const platformLabels: Record<PortfolioProject["category"], string> = {
  Shopify: "Shopify store",
  WordPress: "WordPress website",
  "Custom Coded": "Custom website",
};

const platformTagKeys = new Set([
  "shopify",
  "store",
  "wordpress",
  "wordpress cms",
  "cms",
  "custom code",
  "custom coded",
  "vercel",
]);

function normalized(value: string) {
  return value.trim().toLocaleLowerCase();
}

function supportingTags(project: PortfolioProject) {
  const seen = new Set<string>();

  return project.tags
    .filter((tag) => {
      const key = normalized(tag);

      if (!key || platformTagKeys.has(key) || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    })
    .slice(0, 2);
}

function hostnameFrom(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
  }
}

type ProjectCardProps = {
  project: PortfolioProject;
  priority?: boolean;
  imageSizes?: string;
  featured?: boolean;
  index?: number;
};

export function ProjectCard({
  project,
  priority = false,
  imageSizes = "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",
  featured = false,
  index,
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const platformLabel = platformLabels[project.category];
  const tags = supportingTags(project);
  const hostname = hostnameFrom(project.href);

  return (
    <article className="build-frame group h-full overflow-hidden bg-[#090d11] transition duration-300 hover:-translate-y-1 hover:border-lime/35 hover:shadow-[0_24px_70px_rgba(0,0,0,0.36)] focus-within:border-lime motion-reduce:hover:translate-y-0">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`h-full rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-lime ${
          featured ? "grid lg:grid-cols-[1.45fr_0.75fr]" : "flex flex-col"
        }`}
      >
        <div className={`relative overflow-hidden bg-[#0d1217] ${featured ? "aspect-[4/3] border-b border-white/10 lg:aspect-auto lg:h-[31rem] lg:border-b-0 lg:border-r" : "aspect-[16/10] border-b border-white/10"}`}>
          <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 border-b border-white/10 bg-[#06090c]/85 px-3 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
            <span className="min-w-0 truncate font-mono text-[0.64rem] tracking-wide text-white/55">{hostname}</span>
            {typeof index === "number" ? (
              <span className="ml-auto font-mono text-[0.62rem] text-white/30">/{String(index + 1).padStart(2, "0")}</span>
            ) : null}
          </div>

          {imageFailed ? (
            <div
              role="img"
              aria-label={`${project.name} website preview unavailable`}
              className="micro-grid flex h-full min-h-64 flex-col justify-end p-6 sm:p-8"
            >
              <span className="section-kicker">Website project</span>
              <span className="display-heading mt-3 text-4xl text-white">{project.name}</span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              width={1200}
              height={750}
              priority={priority}
              sizes={imageSizes}
              className="absolute inset-0 h-full w-full object-cover object-top pt-8 transition-transform duration-700 [transition-timing-function:var(--ease-out)] group-hover:scale-[1.035] motion-reduce:group-hover:scale-100"
              onError={() => setImageFailed(true)}
            />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#090d11]/70 to-transparent" aria-hidden="true" />
        </div>

        <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8 lg:justify-end" : "p-5 sm:p-6"}`}>
          <span className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.15em] text-lime">{platformLabel}</span>

          <h3 className={`display-heading mt-3 text-white ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
            {project.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/[0.62] sm:text-base sm:leading-7">{project.description}</p>

          {tags.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project details">
              {tags.map((tag) => (
                <li key={tag} className="border border-white/10 bg-white/[0.025] px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-white/[0.48]">
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="mt-6 inline-flex items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm font-bold text-white transition-colors group-hover:text-lime">
            Visit website
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </article>
  );
}
