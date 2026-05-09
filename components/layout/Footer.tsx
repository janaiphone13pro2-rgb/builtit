"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Ownership", href: "#ownership" },
  { label: "Work", href: "#work" },
  { label: "ERP", href: "#erp" },
  { label: "Contact", href: "#booking" },
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
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-xs">
              Custom-built. Fully owned. No subscriptions.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 lg:justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-white/60 hover:text-white transition-colors uppercase tracking-wide"
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
                className="p-2 text-white/55 hover:text-violet-200 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2026 BuiltIt. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            One-time payment, no subscriptions, full ownership.
          </p>
        </div>
      </div>
    </footer>
  );
}
