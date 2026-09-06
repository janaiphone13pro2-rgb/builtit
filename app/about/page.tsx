import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { ArrowRight, MapPin, Zap, Target, Heart } from "lucide-react";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About BuiltIt | Software Development Partner",
  description:
    "Learn about BuiltIt and its approach to designing and developing websites, applications, and custom business systems.",
  path: "/about",
});

const values = [
  { icon: Zap, title: "Speed", description: "We deliver in days, not months. No unnecessary delays." },
  { icon: Target, title: "Focus", description: "We specialize in three products and do them exceptionally well." },
  { icon: Heart, title: "Care", description: "Every project gets our full attention from start to handoff." },
];

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">
                About BuiltIt
              </p>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6">
                Built in Cairo.<br />
                <span className="text-white/50">For Egypt.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                We are a small but focused team of designers and developers helping businesses and students establish their digital presence. No outsourcing. No templates. Just craft.
              </p>
              <div className="flex items-center gap-2 text-lime">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeUp>
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wide mb-6">
                  Why We Exist
                </h2>
                <div className="space-y-4 text-white/70">
                  <p>
                    We noticed a gap. Egyptian businesses needed professional web presence, but were stuck between overpriced agencies and DIY builders that looked amateur.
                  </p>
                  <p>
                    Students graduating from top universities had impressive portfolios — buried in PDFs that hiring managers never opened.
                  </p>
                  <p>
                    Local brands wanted to sell online, but international platforms didn&apos;t understand the Egyptian market — Instapay, COD, local couriers.
                  </p>
                  <p className="text-lime">
                    So we built BuiltIt: focused, fast, and local.
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="p-8 bg-card border border-[#ffffff15] rounded">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="font-bebas text-4xl text-lime mb-1">40+</div>
                      <p className="text-sm text-white/60">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                      <div className="font-bebas text-4xl text-lime mb-1">3</div>
                      <p className="text-sm text-white/60">Core Services</p>
                    </div>
                    <div className="text-center">
                      <div className="font-bebas text-4xl text-lime mb-1">14</div>
                      <p className="text-sm text-white/60">Days Average</p>
                    </div>
                    <div className="text-center">
                      <div className="font-bebas text-4xl text-lime mb-1">100%</div>
                      <p className="text-sm text-white/60">In-House Team</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">Our Values</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">How We Work</h2>
              </FadeUp>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="p-6 bg-card border border-[#ffffff15] rounded text-center">
                    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded bg-lime/10 text-lime mb-4">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bebas text-2xl tracking-wide mb-2">{value.title}</h3>
                    <p className="text-sm text-white/60">{value.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-lime">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide text-black mb-6">
                Let&apos;s Work Together
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-black/70 mb-8 max-w-xl mx-auto">
                Have a project in mind? We&apos;d love to hear about it.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton magneticStrength={0.15}>
                <Link href="/intake" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-lime font-bold uppercase tracking-wide rounded hover:bg-black/80 transition-colors text-lg">
                  Start a Project
                  <span>→</span>
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
