import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "primary" | "reversed" | "mono-white" | "mono-black";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string | null;
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
      Built<span className={accentColor}>It<span className="inline-block transition-transform duration-300 group-hover:scale-125">.</span></span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-block" aria-label="BuiltIt home">
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
      <text x="6" y="45" fontFamily="DM Sans, Arial, sans-serif" fontSize="42" fontWeight="900" fill="currentColor">
        Built<tspan fill="#4EF2AD">It.</tspan>
      </text>
    </svg>
  );
}
