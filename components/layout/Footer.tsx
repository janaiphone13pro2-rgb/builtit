import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Ownership", href: "/#ownership" },
  { label: "Systems", href: "/#erp" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/builtit", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/builtit", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/builtitEG", icon: Github },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070a]">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="site-shell relative py-12 lg:py-16">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="section-kicker">Ready when you are</p>
            <p className="display-heading mt-5 max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
              Built around how you work<span className="text-lime">.</span><br />Yours when it ships.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="group mt-8 inline-flex items-center gap-2 border-b border-lime/35 pb-1 text-base font-bold text-white transition-colors hover:text-lime sm:text-lg">
              {siteConfig.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[1fr_auto]">
            <nav aria-label="Footer navigation" className="grid content-start gap-1">
              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/35">Index</p>
              {footerLinks.map((link, index) => (
                <Link key={link.label} href={link.href} className="group flex items-center gap-3 py-1.5 text-sm font-semibold text-white/60 transition-colors hover:text-white">
                  <span className="font-mono text-[0.58rem] text-white/20 group-hover:text-lime">{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/35">Find us</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center border border-white/10 text-white/50 transition-colors hover:border-lime/35 hover:text-lime"
                    aria-label={`${social.label} (opens in a new tab)`}
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4 text-lime" aria-hidden="true" />
                Cairo, Egypt
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <span className="hidden h-5 w-px bg-white/10 sm:block" aria-hidden="true" />
            <p className="text-xs text-white/[0.38]">© 2026 BuiltIt. All rights reserved.</p>
          </div>
          <nav aria-label="Legal" className="flex items-center gap-5 text-xs font-medium text-white/45">
            <Link className="transition-colors hover:text-white" href="/privacy">Privacy</Link>
            <Link className="transition-colors hover:text-white" href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
