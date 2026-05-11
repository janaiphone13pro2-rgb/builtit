"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "primary" | "reversed" | "mono-white" | "mono-black";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

const sizes = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
  xl: "text-5xl md:text-6xl",
};

export function Logo({ 
  className, 
  variant = "primary", 
  size = "md",
  href = "/"
}: LogoProps) {
  const textColor = {
    primary: "text-white",
    reversed: "text-black",
    "mono-white": "text-white",
    "mono-black": "text-black",
  }[variant];

  const accentColor = {
    primary: "text-lime",
    reversed: "text-lime",
    "mono-white": "text-white",
    "mono-black": "text-black",
  }[variant];

  const LogoContent = () => (
    <span className={cn("font-dm font-black tracking-normal", sizes[size], textColor, className)}>
      Built<span className={accentColor}>It.</span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

// SVG Logo for export/brand use
export function LogoSVG({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 60" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* B */}
      <path d="M10 50V10H25C30 10 34 14 34 19C34 23 31 26 28 27C32 28 35 32 35 37C35 44 30 50 23 50H10Z" fill="currentColor"/>
      {/* u */}
      <path d="M40 50V25H47V28C49 26 52 24 56 24C62 24 66 28 66 35V50H59V36C59 32 57 30 53 30C49 30 47 33 47 37V50H40Z" fill="currentColor"/>
      {/* i */}
      <path d="M72 50V25H79V50H72ZM72 20V13H79V20H72Z" fill="currentColor"/>
      {/* l */}
      <path d="M85 50V13H92V50H85Z" fill="currentColor"/>
      {/* l */}
      <path d="M98 50V13H105V50H98Z" fill="currentColor"/>
      {/* t (mint) */}
      <path d="M118 50V27H112V21H118V13H125V21H133V27H125V50H118Z" fill="#4EF2AD"/>
      {/* . (mint) */}
      <circle cx="145" cy="45" r="5" fill="#4EF2AD"/>
    </svg>
  );
}
