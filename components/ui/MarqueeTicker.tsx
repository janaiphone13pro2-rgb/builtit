"use client";

import { cn } from "@/lib/utils";

interface MarqueeTickerProps {
  items: string[];
  className?: string;
}

export function MarqueeTicker({ items, className }: MarqueeTickerProps) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="animate-ticker flex whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 px-8">
            <span className="text-sm font-medium tracking-wide text-white/60 uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-lime/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
