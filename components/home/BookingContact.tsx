import { MessageCircle } from "lucide-react";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";

export function BookingContact() {
  return (
    <section id="booking" className="bg-[#080a12] py-24 lg:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-lime">
            Start a project
          </p>
          <h2
            id="contact-heading"
            className="text-balance text-4xl font-black tracking-tight text-white md:text-6xl"
          >
            Tell Us What Your Business Needs.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Share your idea, current challenge or required system. We’ll review the details and
            recommend the most suitable scope and next step.
          </p>

          <div className="mt-8 rounded-lg border border-white/15 bg-white/[0.035] p-5">
            <h3 className="text-lg font-bold text-white">What happens next</h3>
            <ol className="mt-4 space-y-3 text-base leading-7 text-white/70">
              <li className="flex gap-3">
                <span className="font-mono text-lime" aria-hidden="true">01</span>
                <span>We review your requirements and business priorities.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-lime" aria-hidden="true">02</span>
                <span>We clarify the scope and arrange a discovery call if it’s useful.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-lime" aria-hidden="true">03</span>
                <span>You receive a clear recommendation for timeline and next steps.</span>
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

        <ProjectEnquiryForm endpoint="/api/contact" />
      </div>
    </section>
  );
}
