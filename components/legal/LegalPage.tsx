import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/site";

type SectionLink = {
  id: string;
  label: string;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: SectionLink[];
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  summary,
  sections,
  children,
}: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <article className="pb-20 pt-28 lg:pb-28 lg:pt-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/65">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link className="transition-colors hover:text-lime" href="/">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-white/35">
                  /
                </li>
                <li aria-current="page" className="text-white">
                  {title}
                </li>
              </ol>
            </nav>

            <header className="max-w-4xl border-b border-white/10 pb-12 lg:pb-16">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-lime">
                {eyebrow}
              </p>
              <h1 className="text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
                {summary}
              </p>
              <p className="mt-5 text-sm text-white/60">
                Effective date: <time dateTime="2026-09-07">7 September 2026</time>
              </p>
            </header>

            <div className="mt-12 grid gap-12 lg:grid-cols-[15rem_minmax(0,48rem)] lg:gap-20">
              <aside aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                  On this page
                </h2>
                <ol className="mt-4 space-y-2 border-l border-white/15 pl-4">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block py-1 text-sm leading-6 text-white/65 transition-colors hover:text-lime"
                      >
                        {index + 1}. {section.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>

              <div className="space-y-12 text-base leading-8 text-white/75">
                {children}

                <section className="rounded-md border border-lime/25 bg-lime/[0.06] p-6 sm:p-8">
                  <h2 className="text-2xl font-black tracking-tight text-white">
                    Questions about this page?
                  </h2>
                  <p className="mt-3">
                    Email us at{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-bold text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
                    >
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28">
      <h2 id={`${id}-heading`} className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
