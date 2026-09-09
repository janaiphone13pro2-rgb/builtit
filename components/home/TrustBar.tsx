import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clientLogos, portfolioProjects } from "@/lib/landing-data";

export function TrustBar() {
  return (
    <section className="border-b border-white/10 bg-[#080b0e]" aria-label="Selected BuiltIt clients">
      <div className="site-shell py-8">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Selected client work</p>
            <p className="mt-2 text-sm text-white/50">Selected brands. Project archive.</p>
          </div>
          <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-lime">
            {portfolioProjects.length} projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, index) => (
            <li
              key={logo}
              className="group relative flex min-h-20 items-center border-b border-r border-white/10 px-4 py-4 transition-colors hover:bg-white/[0.035]"
            >
              <span className="absolute left-3 top-2 font-mono text-[0.62rem] text-white/25">0{index + 1}</span>
              <span className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-white/[0.58] transition-colors group-hover:text-white">
                {logo}
              </span>
              <span className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-white/15 transition-colors group-hover:bg-lime" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
