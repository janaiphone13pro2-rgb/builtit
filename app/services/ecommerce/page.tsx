import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimatedText, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createServiceSchema,
} from "@/lib/site";

const pageTitle = "E-commerce Development | BuiltIt";
const pageDescription =
  "E-commerce storefronts and connected order-management experiences designed around products, customers, payments, and day-to-day operations.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/ecommerce",
});

const serviceSchema = createServiceSchema({
  name: "E-commerce Development",
  description: pageDescription,
  path: "/services/ecommerce",
  serviceType: "E-commerce development",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "E-commerce development", path: "/services/ecommerce" },
]);

const features = [
  { icon: ShoppingCart, title: "Product Catalog", description: "Organized categories, filters, and search for easy browsing." },
  { icon: CreditCard, title: "Local Payments", description: "Suitable local and card-payment options scoped for the selected platform." },
  { icon: Package, title: "Order Management", description: "An agreed workflow for orders, inventory, and customer information." },
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
  { q: "How long does an e-commerce store take?", a: "Timing depends on the product catalogue, content readiness, platform, integrations, and review rounds. We confirm a launch plan with the scope." },
  { q: "Which payment methods are supported?", a: "We scope suitable local and card-payment options for the selected platform. Availability and approval remain subject to the chosen provider." },
  { q: "Can I manage inventory myself?", a: "Yes, when inventory management is included. We configure the agreed workflow and document how your team uses it." },
  { q: "Do you handle shipping integration?", a: "We can scope integrations with supported couriers or create a practical manual workflow when an API is unavailable." },
  { q: "Is there a monthly fee?", a: "BuiltIt does not add a compulsory licence to custom-built work. Hosting, domains, platforms, apps, gateways, and other third-party services may charge their own fees." },
];

export default function EcommerceServicePage() {
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
              <AnimatedText text="LOCAL BRAND STORES" className="text-sm font-medium tracking-[0.2em] text-lime block mb-4" />
              <h1 className="display-heading mb-6 text-6xl text-white md:text-7xl lg:text-8xl">
                Sell Online.<br />
                <span className="text-white/50">Anywhere in Egypt.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Full e-commerce storefronts built for Egyptian brands. Mobile-first design with local payment methods your customers already use.
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
                Let&apos;s build a store that makes discovery and checkout feel effortless.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton>
                <Link href="/intake" className="primary-cta group">
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
