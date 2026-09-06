import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = [
  { label: "Services", href: "/#services" },
  { label: "Ownership", href: "/#ownership" },
  { label: "Work", href: "/work" },
  { label: "ERP", href: "/#erp" },
  { label: "Contact", href: "/#booking" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/builtit", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/builtit", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/builtitEG", icon: Github },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05060d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          <div>
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">
              Websites, applications, and business systems built around the way your
              organisation works.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 lg:justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 lg:justify-end">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-white/55 hover:text-lime transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            © 2026 BuiltIt. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-5 text-sm font-medium text-white/65">
            <Link className="transition-colors hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="transition-colors hover:text-white" href="/terms">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
