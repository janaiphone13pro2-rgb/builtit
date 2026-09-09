import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { ProjectEnquiryForm } from "@/components/forms/ProjectEnquiryForm";

const nextSteps = [
  "We review the business goal and must-have requirements.",
  "We clarify the scope and arrange a discovery call when useful.",
  "You receive a practical recommendation for the next step.",
];

export function BookingContact() {
  return (
    <section id="booking" className="scroll-mt-20 relative overflow-hidden border-t border-white/10 bg-[#08100c] section-space" aria-labelledby="contact-heading">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-lime/[0.08] blur-[110px]" aria-hidden="true" />

      <div className="site-shell relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="section-kicker">09 / Start the build</p>
          <h2 id="contact-heading" className="display-heading mt-4 text-5xl text-white sm:text-6xl lg:text-7xl">
            Tell us what needs to work better<span className="text-lime">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Share the idea, bottleneck, or system you need. We will use the details to recommend
            a sensible scope—not push a pre-made package.
          </p>

          <div className="mt-8 border-y border-white/10">
            <p className="py-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/[0.38]">What happens next</p>
            <ol className="divide-y divide-white/10">
              {nextSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] gap-3 py-4 text-sm leading-6 text-white/65">
                  <span className="font-mono text-[0.68rem] text-lime">0{index + 1}</span>
                  <span className="flex items-start gap-2">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-lime" aria-hidden="true" />
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <a href="https://wa.me/201284744633" target="_blank" rel="noopener noreferrer" className="secondary-cta group mt-6">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp BuiltIt
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/30">
            Cairo, Egypt · Remote collaboration
          </p>
        </div>

        <ProjectEnquiryForm endpoint="/api/contact" />
      </div>
    </section>
  );
}
