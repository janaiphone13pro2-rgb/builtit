import { MessageCircle } from "lucide-react";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function IntakePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-[#080a12] pb-24 pt-32 lg:pb-32 lg:pt-40">
        <section aria-labelledby="intake-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-lime">
                Start a project
              </p>
              <h1
                id="intake-heading"
                className="text-balance text-4xl font-black tracking-tight text-white md:text-6xl"
              >
                Tell Us What Your Business Needs.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Share your idea, current challenge or required system. We’ll review your request
                and recommend the most suitable scope, timeline and next step.
              </p>

              <div className="mt-8 rounded-lg border border-white/15 bg-white/[0.035] p-5">
                <h2 className="text-lg font-bold text-white">What happens after you submit</h2>
                <ol className="mt-4 space-y-3 text-base leading-7 text-white/70">
                  <li className="flex gap-3">
                    <span className="font-mono text-lime" aria-hidden="true">01</span>
                    <span>We review the requirements and identify any open questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-lime" aria-hidden="true">02</span>
                    <span>We arrange a discovery call when a conversation will help.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-lime" aria-hidden="true">03</span>
                    <span>You receive a clear recommendation for scope and next steps.</span>
                  </li>
                </ol>
              </div>

              <a
                href="https://wa.me/201284744633"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-lime/40 bg-lime/10 px-5 py-3 text-sm font-black uppercase tracking-wide text-lime transition hover:bg-lime/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#080a12]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Contact us on WhatsApp
              </a>
            </div>

            <ProjectEnquiryForm endpoint="/api/intake" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
