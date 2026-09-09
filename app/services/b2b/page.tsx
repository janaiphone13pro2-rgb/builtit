import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedText, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import {
  Palette,
  Globe,
  Search,
  Languages,
  Building2,
  Briefcase,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createServiceSchema,
} from "@/lib/site";

const pageTitle = "Business Websites & Digital Platforms | BuiltIt";
const pageDescription =
  "Custom business websites and digital platforms designed to explain services clearly, support enquiries, and give internal teams control of content.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/b2b",
});

const serviceSchema = createServiceSchema({
  name: "Business Website and Digital Platform Development",
  description: pageDescription,
  path: "/services/b2b",
  serviceType: "Business website and digital platform development",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Business website services", path: "/services/b2b" },
]);

const features = [
  { icon: Palette, title: "Custom Design", description: "Unique design tailored to your brand identity and industry standards." },
  { icon: Globe, title: "CMS-Ready", description: "Easy-to-use content management system for updates without code." },
  { icon: Search, title: "SEO-Optimized", description: "Built with search engines in mind to help clients find you." },
  { icon: Languages, title: "Arabic + English", description: "Bilingual support for the Egyptian and international markets." },
  { icon: Briefcase, title: "Case Studies", description: "Showcase your best work with dedicated project pages." },
  { icon: Building2, title: "Team Profiles", description: "Highlight your team and expertise to build trust." },
];

const personas = [
  { title: "Tech Startups", description: "Need to impress investors and early clients with a professional digital presence." },
  { title: "Consultancies", description: "Require credibility to win enterprise contracts in competitive markets." },
  { title: "Service Agencies", description: "Want to showcase their portfolio and attract higher-value clients." },
];

const steps = [
  { number: "01", title: "Fill Intake", description: "Tell us about your business and goals." },
  { number: "02", title: "Discovery Call", description: "We discuss your brand and competitors." },
  { number: "03", title: "Design & Build", description: "Custom portfolio crafted for your market." },
  { number: "04", title: "Launch", description: "Go live with full ownership and training." },
];

const faqs = [
  { q: "How long does a portfolio take to build?", a: "Timing depends on the agreed scope, review rounds, and how ready the content is. We confirm a realistic launch plan before work starts." },
  { q: "Can I update the content myself?", a: "Yes, when content editing is part of the agreed scope. We can configure a suitable CMS and document the handover." },
  { q: "Do you provide the domain and hosting?", a: "We can guide you on purchasing, or handle it for you with transparent pricing." },
  { q: "Is the design custom?", a: "The visual direction is shaped around your brand, goals, content, and agreed scope. Any platform or licensed foundation used is identified clearly." },
  { q: "What if I need changes after launch?", a: "The proposal defines the launch-support window. We can scope later improvements separately when you need them." },
];

export default function B2BServicePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section className="blueprint-grid relative overflow-hidden border-b border-white/10 bg-[#05070a] pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="site-shell relative">
            <div className="max-w-3xl">
              <AnimatedText text="COMPANY PORTFOLIOS" className="text-sm font-medium tracking-[0.2em] text-lime block mb-4" />
              <h1 className="display-heading mb-6 text-6xl text-white md:text-7xl lg:text-8xl">
                Impress Before<br />
                <span className="text-white/50">The First Meeting.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Professional portfolios designed to explain your value clearly and support confident first conversations.
              </p>
              <MagneticButton>
                <Link href="/intake" className="primary-cta group">
                  Start This Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">What&apos;s Included</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Everything You Need</h2>
              </FadeUp>
            </div>
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <TiltCard tiltAmount={5}>
                    <div className="p-6 bg-card border border-[#ffffff15] rounded h-full">
                      <div className="w-12 h-12 flex items-center justify-center rounded bg-lime/10 text-lime mb-4">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-bebas text-2xl tracking-wide mb-2">{feature.title}</h3>
                      <p className="text-sm text-white/60">{feature.description}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-24 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">Who It&apos;s For</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Built For These Businesses</h2>
              </FadeUp>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {personas.map((persona) => (
                <StaggerItem key={persona.title}>
                  <div className="h-full p-6 bg-card border border-[#ffffff15] rounded">
                    <h3 className="font-bebas text-3xl tracking-wide mb-3">{persona.title}</h3>
                    <p className="text-sm text-white/60">{persona.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">The Process</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">How We Build It</h2>
              </FadeUp>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <FadeUp key={step.number} delay={index * 0.1}>
                  <div className="relative">
                    <div className="font-bebas text-6xl text-white/[0.03] mb-2">{step.number}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded bg-lime/10 text-lime">
                        {index === 0 && <CheckCircle className="w-5 h-5" />}
                        {index === 1 && <Briefcase className="w-5 h-5" />}
                        {index === 2 && <Palette className="w-5 h-5" />}
                        {index === 3 && <Rocket className="w-5 h-5" />}
                      </div>
                      <h3 className="font-bebas text-xl tracking-wide">{step.title}</h3>
                    </div>
                    <p className="text-sm text-white/60">{step.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-[#0d0d0d]">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <FadeUp>
                <p className="text-sm font-medium tracking-[0.2em] text-lime uppercase mb-4">FAQ</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Common Questions</h2>
              </FadeUp>
            </div>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {faqs.map((faq) => (
                <StaggerItem key={faq.q}>
                  <div className="p-6 bg-card border border-[#ffffff15] rounded">
                    <h3 className="font-bebas text-xl tracking-wide mb-2">{faq.q}</h3>
                    <p className="text-sm text-white/60">{faq.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
                Ready to Impress?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Let&apos;s build a portfolio that supports stronger client conversations.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton>
                <Link href="/intake" className="primary-cta group">
                  Start Your Portfolio
                  <ArrowRight className="w-5 h-5" />
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
