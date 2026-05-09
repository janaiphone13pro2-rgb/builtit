import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";

export const metadata: Metadata = {
  title: "Brand Guidelines | BuiltIt",
  description: "BuiltIt brand identity guidelines, colors, typography, and logo usage.",
};

const colors = [
  { name: "Background", hex: "#0A0A0A", usage: "Page backgrounds, dark UI" },
  { name: "Foreground", hex: "#FFFFFF", usage: "Text, icons" },
  { name: "Lime", hex: "#C8FF00", usage: "Primary accent, CTAs, highlights" },
  { name: "Orange", hex: "#FF4D00", usage: "Secondary CTA, urgency" },
  { name: "Card", hex: "rgba(255,255,255,0.03)", usage: "Card backgrounds" },
  { name: "Border", hex: "rgba(255,255,255,0.08)", usage: "Subtle borders" },
];

const typography = [
  { name: "Bebas Neue", role: "Headlines", style: "Uppercase, wide tracking" },
  { name: "DM Sans", role: "Body Text", style: "Regular, 400/500/700 weights" },
];

const donts = [
  "Don't stretch or distort the logo",
  "Don't change the logo colors",
  "Don't rotate the logo",
  "Don't add effects (shadows, glows)",
  "Don't place on busy backgrounds",
  "Don't use lime for large text areas",
];

export default function BrandPage() {
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
                Brand Identity
              </p>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6">
                BuiltIt.<br />
                <span className="text-white/50">Brand Guidelines.</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl">
                Our visual identity is bold, focused, and proudly Egyptian. Use these guidelines to maintain consistency across all touchpoints.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-24 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">The Logo</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide mb-4">Buill<span className="text-lime">t.</span></h2>
                <p className="text-white/60 max-w-lg mx-auto">
                  The double L represents building blocks — layers of work stacking together. 
                  The lime "It" emphasizes that we build <em>it</em> — whatever you need.
                </p>
              </FadeUp>
            </div>

            {/* Logo Variants */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              <StaggerItem>
                <div className="aspect-square bg-[#0A0A0A] border border-[#ffffff15] rounded flex items-center justify-center">
                  <span className="font-bebas text-6xl tracking-wide">
                    Buill<span className="text-lime">t.</span>
                  </span>
                </div>
                <p className="text-center text-sm text-white/60 mt-3">Primary (Dark BG)</p>
              </StaggerItem>
              <StaggerItem>
                <div className="aspect-square bg-white border border-[#ffffff15] rounded flex items-center justify-center">
                  <span className="font-bebas text-6xl tracking-wide text-black">
                    Buill<span className="text-[#C8FF00]">t.</span>
                  </span>
                </div>
                <p className="text-center text-sm text-white/60 mt-3">Reversed (Light BG)</p>
              </StaggerItem>
              <StaggerItem>
                <div className="aspect-square bg-[#0A0A0A] border border-[#ffffff15] rounded flex items-center justify-center">
                  <span className="font-bebas text-6xl tracking-wide text-white">
                    Buillt<span className="text-white">.</span>
                  </span>
                </div>
                <p className="text-center text-sm text-white/60 mt-3">Monochrome</p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Colors */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">Color Palette</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Dark. Bold. Lime.</h2>
              </FadeUp>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" staggerDelay={0.1}>
              {colors.map((color) => (
                <StaggerItem key={color.name}>
                  <div className="group">
                    <div 
                      className="aspect-[4/3] rounded border border-[#ffffff15] mb-3 relative overflow-hidden"
                      style={{ background: color.hex }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                        <span className="text-xs font-mono">{color.hex}</span>
                      </div>
                    </div>
                    <h3 className="font-bebas text-xl tracking-wide">{color.name}</h3>
                    <p className="text-sm text-white/50">{color.usage}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Typography */}
        <section className="py-24 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">Typography</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Bebas Neue + DM Sans</h2>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <FadeUp>
                <div className="p-8 bg-card border border-[#ffffff15] rounded">
                  <p className="text-sm text-lime uppercase tracking-wide mb-4">Headlines</p>
                  <p className="font-bebas text-6xl tracking-wide mb-2">BEBAS NEUE</p>
                  <p className="text-sm text-white/60">Uppercase, wide tracking (0.05em), regular weight</p>
                  <div className="mt-6 space-y-2">
                    <p className="font-bebas text-4xl">Hero 96px</p>
                    <p className="font-bebas text-3xl">H1 72px</p>
                    <p className="font-bebas text-2xl">H2 60px</p>
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="p-8 bg-card border border-[#ffffff15] rounded">
                  <p className="text-sm text-lime uppercase tracking-wide mb-4">Body Text</p>
                  <p className="font-dm text-3xl mb-2">DM Sans</p>
                  <p className="text-sm text-white/60 mb-6">Weights: 400, 500, 700. Line height 1.6</p>
                  <div className="space-y-3">
                    <p className="text-lg">Large text (18px) for introductions</p>
                    <p className="text-base">Base text (16px) for body content and paragraphs.</p>
                    <p className="text-sm">Small text (14px) for labels and secondary info.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Usage Rules */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <FadeUp>
                  <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">Do's</p>
                  <h2 className="font-bebas text-5xl md:text-6xl tracking-wide mb-8">Use It Right</h2>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <ul className="space-y-4">
                    {[
                      "Maintain clear space around the logo",
                      "Use lime sparingly for maximum impact",
                      "Keep text uppercase in headlines",
                      "Use 4px border radius consistently",
                      "Support prefers-reduced-motion",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded bg-lime/20 text-lime flex items-center justify-center text-xs">✓</span>
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
              <div>
                <FadeUp delay={0.2}>
                  <p className="text-sm font-medium tracking-[0.2em] text-orange uppercase mb-4">Don'ts</p>
                  <h2 className="font-bebas text-5xl md:text-6xl tracking-wide mb-8 text-white/50">Avoid This</h2>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <ul className="space-y-4">
                    {donts.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded bg-orange/20 text-orange flex items-center justify-center text-xs">×</span>
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Voice & Tone */}
        <section className="py-24 lg:py-32 bg-lime">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-black/60 uppercase mb-4">Voice & Tone</p>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide text-black">We Are BuiltIt</h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.1}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-black/10 rounded">
                  <h3 className="font-bebas text-2xl tracking-wide text-black mb-2">Direct</h3>
                  <p className="text-sm text-black/70">Short sentences. Active voice. No buzzwords.</p>
                </div>
                <div className="p-6 bg-black/10 rounded">
                  <h3 className="font-bebas text-2xl tracking-wide text-black mb-2">Confident</h3>
                  <p className="text-sm text-black/70">We know what we do. We don't oversell.</p>
                </div>
                <div className="p-6 bg-black/10 rounded">
                  <h3 className="font-bebas text-2xl tracking-wide text-black mb-2">Local</h3>
                  <p className="text-sm text-black/70">Proudly Egyptian. Built for our market.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Download */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
                Need Logo Files?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Contact us for logo assets, brand templates, or partnership inquiries.
              </p>
              <a 
                href="mailto:hello@builtit.net"
                className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors"
              >
                Get In Touch
              </a>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
