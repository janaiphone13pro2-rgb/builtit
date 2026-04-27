import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimatedText, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CountUp } from "@/components/ui/CountUp";
import Link from "next/link";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  Tag,
  BarChart3,
  Store,
  Rocket,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-commerce for Local Brands | BuiltIt",
  description: "Full storefronts for Egyptian brands ready to sell online. Mobile-first with local payment integration.",
};

const features = [
  { icon: ShoppingCart, title: "Product Catalog", description: "Organized categories, filters, and search for easy browsing." },
  { icon: CreditCard, title: "Local Payments", description: "Instapay, Vodafone Cash, and COD ready out of the box." },
  { icon: Package, title: "Order Management", description: "Track orders, inventory, and customer data in one dashboard." },
  { icon: Smartphone, title: "Mobile-First", description: "Designed for Egyptian mobile shoppers with fast loading." },
  { icon: Tag, title: "Discount Engine", description: "Create promo codes, flash sales, and bundle deals." },
  { icon: BarChart3, title: "Sales Analytics", description: "Understand what sells with built-in reporting." },
];

const personas = [
  { title: "Fashion Brands", description: "Local designers ready to reach customers beyond their physical location." },
  { title: "Artisan Makers", description: "Handcraft sellers who need a professional online presence." },
  { title: "Local Retailers", description: "Shops expanding from brick-and-mortar to online sales." },
];

const steps = [
  { number: "01", title: "Fill Intake", description: "Share your product range and business goals." },
  { number: "02", title: "Discovery", description: "We plan your store structure and payment setup." },
  { number: "03", title: "Build Store", description: "Custom storefront with your products loaded." },
  { number: "04", title: "Go Live", description: "Launch with training on managing orders." },
];

const faqs = [
  { q: "How long to launch an e-commerce store?", a: "10–18 days depending on product count and payment integration complexity." },
  { q: "Which payment methods are supported?", a: "Instapay, Vodafone Cash, Etisalat Cash, COD, and credit cards through Paymob or similar." },
  { q: "Can I manage inventory myself?", a: "Yes. You get a dashboard to add, edit, and track products and orders." },
  { q: "Do you handle shipping integration?", a: "We integrate with local couriers (Bosta, Aramex Egypt) for automated shipping labels." },
  { q: "Is there a monthly fee?", a: "No monthly fees from us. You only pay for hosting ( ~$10/month) and payment gateway fees." },
];

const stats = [
  { value: 15, suffix: "+", label: "Stores Launched" },
  { value: 2.5, suffix: "x", label: "Avg. Sales Increase" },
];

export default function EcommerceServicePage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimatedText text="LOCAL BRAND STORES" className="text-sm font-medium tracking-[0.2em] text-lime block mb-4" />
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6">
                Sell Online.<br />
                <span className="text-white/50">Anywhere in Egypt.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Full e-commerce storefronts built for Egyptian brands. Mobile-first design with local payment methods your customers already use.
              </p>
              <MagneticButton>
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wide rounded hover:bg-orange/90 transition-colors">
                  Start This Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 border-y border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-bebas text-5xl md:text-6xl text-lime mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                  </div>
                  <p className="text-sm text-white/60 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Your Store, Ready to Sell</h2>
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Built For These Brands</h2>
              </FadeUp>
            </div>
            <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
              {personas.map((persona) => (
                <StaggerItem key={persona.title}>
                  <div className="p-6 bg-card border border-[#ffffff15] rounded">
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">From Zero to Sales</h2>
              </FadeUp>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <FadeUp key={step.number} delay={index * 0.1}>
                  <div className="relative">
                    <div className="font-bebas text-6xl text-white/[0.03] mb-2">{step.number}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded bg-lime/10 text-lime">
                        {index === 0 && <Store className="w-5 h-5" />}
                        {index === 1 && <ShoppingCart className="w-5 h-5" />}
                        {index === 2 && <Package className="w-5 h-5" />}
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
                Ready to Sell Online?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Let&apos;s build a store that turns browsers into buyers.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton>
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white font-bold uppercase tracking-wide rounded hover:bg-orange/90 transition-colors">
                  Start Your Store
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
