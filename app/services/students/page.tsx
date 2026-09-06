import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AnimatedText, FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedText";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CountUp } from "@/components/ui/CountUp";
import Link from "next/link";
import {
  Globe,
  FolderOpen,
  FileDown,
  Linkedin,
  GraduationCap,
  BookOpen,
  Palette,
  Rocket,
  ArrowRight,
} from "lucide-react";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  createServiceSchema,
} from "@/lib/site";

const pageTitle = "Digital Portfolio Websites | BuiltIt";
const pageDescription =
  "Personal portfolio websites for students and early-career professionals who need a clear, shareable home for their work and experience.";

export const metadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: "/services/students",
});

const serviceSchema = createServiceSchema({
  name: "Digital Portfolio Website Development",
  description: pageDescription,
  path: "/services/students",
  serviceType: "Personal portfolio website development",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Digital portfolio websites", path: "/services/students" },
]);

const features = [
  { icon: Globe, title: "Personal Domain", description: "YourName.com — a professional address for your personal brand." },
  { icon: FolderOpen, title: "Project Showcase", description: "Display your best work with images, descriptions, and links." },
  { icon: FileDown, title: "Download PDF CV", description: "Visitors can download a formatted PDF version of your CV." },
  { icon: Linkedin, title: "LinkedIn-Ready", description: "Optimized for sharing on LinkedIn and job applications." },
  { icon: Palette, title: "Clean Design", description: "Modern layouts that put your work first, not flashy distractions." },
  { icon: BookOpen, title: "Skills & Education", description: "Clear sections for courses, skills, and achievements." },
];

const personas = [
  { title: "Fresh Graduates", description: "Need to stand out when applying for their first professional roles." },
  { title: "Students", description: "Want to showcase projects and internships before graduation." },
  { title: "Freelancers", description: "Need a simple portfolio to attract clients while studying." },
];

const steps = [
  { number: "01", title: "Fill Intake", description: "Share your background, projects, and career goals." },
  { number: "02", title: "Review", description: "We review your materials and suggest the best layout." },
  { number: "03", title: "Build", description: "Your custom digital CV takes shape in 5–10 days." },
  { number: "04", title: "Launch", description: "Go live and share your new link with the world." },
];

const faqs = [
  { q: "How much does a student CV cost?", a: "Our student packages start at 3,500 EGP including domain for the first year. Payment plans available." },
  { q: "Can I update it myself later?", a: "Yes. We use a simple CMS so you can add new projects or update your info anytime." },
  { q: "Will it help me get hired?", a: "A professional digital CV makes you memorable. Many of our students report more interview callbacks." },
  { q: "Can I use it for grad school applications?", a: "Absolutely. It works great for academic and professional applications alike." },
  { q: "What if I don't have many projects yet?", a: "We help you present coursework, internships, and skills effectively even with limited experience." },
];

const stats = [
  { value: 10, suffix: "+", label: "Student CVs Built" },
  { value: 80, suffix: "%", label: "Got Interviews" },
];

export default function StudentsServicePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimatedText text="STUDENT DIGITAL CV" className="text-sm font-medium tracking-[0.2em] text-lime block mb-4" />
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6">
                A Link You&apos;re<br />
                <span className="text-white/50">Proud to Share.</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-xl">
                Your work, your story, online. A professional digital CV that helps you stand out when applying for jobs or internships.
              </p>
              <MagneticButton>
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors">
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Your Professional Presence</h2>
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Built For Students</h2>
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
                <h2 className="font-bebas text-5xl md:text-6xl tracking-wide">Simple & Fast</h2>
              </FadeUp>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <FadeUp key={step.number} delay={index * 0.1}>
                  <div className="relative">
                    <div className="font-bebas text-6xl text-white/[0.03] mb-2">{step.number}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded bg-lime/10 text-lime">
                        {index === 0 && <GraduationCap className="w-5 h-5" />}
                        {index === 1 && <BookOpen className="w-5 h-5" />}
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
                Ready to Stand Out?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                Let&apos;s build a digital CV that gets you noticed.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <MagneticButton>
                <Link href="/intake" className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors">
                  Build Your CV
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
