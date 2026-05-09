"use client";

import { clientLogos } from "@/lib/landing-data";

export function TrustBar() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="border-y border-white/10 bg-[#080a12] py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
          Trusted by 100+ businesses worldwide
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-ticker items-center gap-5">
            {logos.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-14 min-w-44 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-6 font-mono text-sm font-semibold uppercase tracking-widest text-white/55"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
