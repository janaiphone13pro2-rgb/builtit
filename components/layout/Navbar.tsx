"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Ownership", href: "/#ownership" },
  { label: "Systems", href: "/#erp" },
  { label: "Process", href: "/#process" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setIsScrolled(window.scrollY > 24);
        setScrollProgress(maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0);
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    previousFocusRef.current = menuButtonRef.current ?? (document.activeElement as HTMLElement | null);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const closeMenuAtDesktop = () => {
      if (desktopQuery.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeMenuAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuAtDesktop);
  }, []);

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-3 z-[80] -translate-y-24 rounded-sm bg-lime px-4 py-3 font-bold text-[#04100b] transition-transform focus:translate-y-0">
        Skip to content
      </a>

      <motion.header
        className="fixed inset-x-0 top-3 z-50"
        aria-hidden={isMobileMenuOpen}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <nav
          aria-label="Primary navigation"
          className={cn(
            "site-shell relative border border-white/10 bg-[#06090c]/70 shadow-[0_14px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-colors duration-300",
            isScrolled && "border-white/15 bg-[#06090c]/[0.92]"
          )}
        >
          <div className="flex h-[4.25rem] items-center justify-between px-4 sm:px-5">
            <div className="flex items-center gap-3">
              <Logo size="md" className="text-white" />
              <span className="hidden border-l border-white/10 pl-3 font-mono text-[0.62rem] uppercase leading-4 tracking-[0.12em] text-white/35 sm:block">
                Digital systems<br />Cairo, EG
              </span>
            </div>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link, index) => (
                <Link key={link.label} href={link.href} className="group relative px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-white/[0.58] transition-colors hover:text-white">
                  <span className="mr-1 font-mono text-[0.58rem] text-white/20 transition-colors group-hover:text-lime">{String(index + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/#booking" className="primary-cta hidden min-h-10 px-4 py-2 text-xs lg:inline-flex">
              Build with us
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center border border-white/10 text-white transition-colors hover:border-lime/35 hover:text-lime lg:hidden"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          <span className="absolute inset-x-0 bottom-0 h-px bg-white/5" aria-hidden="true">
            <span className="block h-full origin-left bg-lime" style={{ transform: `scaleX(${scrollProgress})` }} />
          </span>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            ref={menuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="blueprint-grid fixed inset-0 z-[60] overflow-y-auto bg-[#05070a] px-5 py-5 lg:hidden"
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed right-5 top-5 z-10 grid h-11 w-11 place-items-center border border-white/15 bg-[#05070a] text-white transition-colors hover:border-lime/40 hover:text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="mx-auto flex min-h-full max-w-lg flex-col justify-center py-20">
              <div className="border-t border-white/10">
                {navLinks.map((link, index) => (
                  <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ delay: index * 0.045 }}>
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between border-b border-white/10 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                    >
                      <span className="display-heading text-4xl text-white transition-colors group-hover:text-lime">{link.label}</span>
                      <span className="font-mono text-xs text-white/30">/{String(index + 1).padStart(2, "0")}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link href="/#booking" onClick={() => setIsMobileMenuOpen(false)} className="primary-cta mt-7">
                Start your build
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/30">Built in Cairo · Remote collaboration</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
