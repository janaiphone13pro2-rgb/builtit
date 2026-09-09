import Link from "next/link";
import { ArrowRight, KeyRound, Layers3, MapPin, Target } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { portfolioProjects } from "@/lib/landing-data";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About BuiltIt | Cairo Software Studio",
  description:
    "Meet BuiltIt, a Cairo software studio building websites, commerce experiences, and operational systems with a clear handover.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Clarity",
    description: "The goal, scope, deliverables, and next decision stay visible throughout the build.",
  },
  {
    icon: Layers3,
    title: "Fit",
    description: "We shape the technology around the workflow instead of forcing the workflow into a template.",
  },
  {
    icon: KeyRound,
    title: "Ownership",
    description: "Access, custom source, and handover expectations are agreed before launch—not after it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <section className="blueprint-grid relative overflow-hidden border-b border-white/10 bg-[#05070a] pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute -left-32 top-8 h-[30rem] w-[30rem] rounded-full bg-lime/[0.08] blur-[110px]" aria-hidden="true" />
          <div className="site-shell relative grid items-end gap-10 lg:grid-cols-[1fr_0.52fr]">
            <FadeUp>
              <p className="section-kicker">BuiltIt / About</p>
              <h1 className="display-heading mt-5 max-w-5xl text-6xl text-white sm:text-7xl lg:text-8xl">
                Built in Cairo<span className="text-lime">.</span><br />Built to hand over.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                BuiltIt is a Cairo-based software studio for businesses that need more than a
                generic template—and want a clear relationship with the system they are paying for.
              </p>
            </FadeUp>

            <FadeUp delay={0.12} className="lg:justify-self-end">
              <div className="build-frame bg-[#08100c] p-5 sm:min-w-72">
                <p className="font-mono text-[0.67rem] uppercase tracking-[0.15em] text-white/35">Studio coordinates</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center border border-lime/25 bg-lime/10 text-lime">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-bold text-white">Cairo, Egypt</p>
                    <p className="mt-1 text-sm text-white/45">Remote collaboration</p>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-lime">
                  <span className="status-pulse h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
                  Studio active
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#070a0d] section-space">
          <div className="site-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <FadeUp>
              <p className="section-kicker">01 / Why we exist</p>
              <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl">Technology should fit the business<span className="text-lime">.</span></h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="space-y-5 text-base leading-8 text-white/[0.64]">
                <p>
                  Businesses often outgrow disconnected websites, spreadsheets, plugins, and
                  rented tools. The friction is rarely one missing feature—it is the gap between
                  how the team works and how the technology expects it to work.
                </p>
                <p>
                  BuiltIt closes that gap with focused websites, commerce builds, and operational
                  software. We begin with the real workflow, make the build visible, and define the
                  handover from the start.
                </p>
                <p className="border-l border-lime/40 pl-5 font-semibold text-white">
                  Built around how you work. Yours when it ships.
                </p>
              </div>

              <dl className="mt-9 grid border-l border-t border-white/10 sm:grid-cols-3">
                <div className="border-b border-r border-white/10 p-5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-white/35">Project archive</dt>
                  <dd className="display-heading mt-3 text-5xl text-lime">{portfolioProjects.length}</dd>
                </div>
                <div className="border-b border-r border-white/10 p-5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-white/35">Build tracks</dt>
                  <dd className="display-heading mt-3 text-5xl text-white">03</dd>
                </div>
                <div className="border-b border-r border-white/10 p-5">
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-white/35">Studio base</dt>
                  <dd className="display-heading mt-3 text-3xl text-white">Cairo</dd>
                </div>
              </dl>
            </FadeUp>
          </div>
        </section>

        <section className="bg-[#05070a] section-space">
          <div className="site-shell">
            <div className="mb-10 max-w-3xl">
              <p className="section-kicker">02 / How we work</p>
              <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl">Three principles. Every build<span className="text-lime">.</span></h2>
            </div>

            <StaggerContainer className="grid border-l border-t border-white/10 md:grid-cols-3" staggerDelay={0.08}>
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <article className="group min-h-72 border-b border-r border-white/10 bg-[#080b0e] p-6 transition-colors hover:bg-[#0c1214]">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center border border-lime/25 bg-lime/[0.08] text-lime">
                        <value.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[0.65rem] text-white/25">/0{index + 1}</span>
                    </div>
                    <h3 className="display-heading mt-9 text-4xl text-white">{value.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">{value.description}</p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="blueprint-grid border-t border-white/10 bg-[#08100c] py-20 lg:py-28">
          <div className="site-shell max-w-4xl text-center">
            <FadeUp>
              <p className="section-kicker">Your turn</p>
              <h2 className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">Tell us what needs building<span className="text-lime">.</span></h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60">Bring the business problem. We will help shape a practical first scope.</p>
              <Link href="/#booking" className="primary-cta group mt-8">
                Start your build
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
