"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
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
};

export function ProjectCard({
  project,
  priority = false,
  imageSizes = "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const platformLabel = platformLabels[project.category];
  const tags = supportingTags(project);
  const hostname = hostnameFrom(project.href);

  return (
    <article className="h-full overflow-hidden rounded-md border border-white/10 bg-[#0b0d14] transition-colors hover:border-white/25 focus-within:border-lime">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#10131b]">
          {imageFailed ? (
            <div
              role="img"
              aria-label={`${project.name} website preview unavailable`}
              className="flex h-full flex-col justify-end border-l-4 border-lime bg-[#10131b] p-6"
            >
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-lime">
                Website project
              </span>
              <span className="mt-3 text-2xl font-bold leading-tight text-white">
                {project.name}
              </span>
              <span className="mt-2 truncate text-sm text-white/55">{hostname}</span>
            </div>
          ) : (
            <Image
              src={project.image}
              alt={`${project.name} website screenshot`}
              width={1200}
              height={750}
              priority={priority}
              sizes={imageSizes}
              className="h-full w-full object-cover object-top"
              onError={() => setImageFailed(true)}
            />
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span className="text-sm font-bold uppercase tracking-[0.12em] text-lime">
            {platformLabel}
          </span>

          <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-7 text-white/70">{project.description}</p>

          {tags.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project details">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-white/10 px-2.5 py-1 text-sm font-medium text-white/60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <span className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-4 text-sm font-bold text-white group-hover:text-lime">
            Visit website
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </a>
    </article>
  );
}
