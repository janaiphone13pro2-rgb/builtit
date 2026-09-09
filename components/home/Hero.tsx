import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  ShoppingBag,
  Users,
} from "lucide-react";

const trustPoints = [
  { mobile: "Built for your workflow", desktop: "Custom-built for your workflow" },
  { mobile: "Web, mobile & systems", desktop: "Web, mobile, and business systems" },
  { mobile: "Source code included", desktop: "Full source-code handover" },
  { mobile: "Support after launch", desktop: "Launch and post-launch support" },
];

const connectedModules = [
  { icon: Users, label: "CRM", detail: "Customers & pipeline" },
  { icon: ShoppingBag, label: "Sales", detail: "Orders & payments" },
  { icon: Boxes, label: "Inventory", detail: "Stock & warehouses" },
  { icon: ClipboardCheck, label: "Operations", detail: "Tasks & approvals" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/10 bg-[#05060d]">
      <div
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] sm:[background-size:64px_64px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-lime/[0.08] blur-3xl lg:left-1/3 lg:top-1/4 lg:h-96 lg:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-28 sm:gap-10 sm:px-6 sm:pb-14 sm:pt-32 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-8 lg:py-24">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-lime sm:hidden">
            Custom software <span className="text-white/35">•</span> Full ownership
          </p>
          <p className="mb-5 hidden text-sm font-bold uppercase tracking-[0.14em] text-lime sm:block">
            Custom software <span className="text-white/35">•</span> Business systems{" "}
            <span className="text-white/35">•</span> Full ownership
          </p>

          <h1 className="max-w-4xl text-balance text-[clamp(2.75rem,12vw,3.75rem)] font-black leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl sm:leading-[0.98] lg:text-7xl">
            We Build the Systems That Run Your Business.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:hidden">
            Websites, e-commerce, ERP, CRM, dashboards, and apps—built around the way
            your business works.
          </p>
          <p className="mt-7 hidden max-w-2xl text-lg leading-8 text-white/[0.72] sm:block">
            From high-performance websites and e-commerce platforms to ERP, CRM,
            inventory, invoicing, booking, dashboards, and mobile apps—BuiltIt designs
            connected software around the way your business works.
          </p>

          <div className="mt-4 flex max-w-2xl items-start gap-3 rounded-md border border-lime/20 bg-lime/[0.06] px-4 py-3 text-sm font-semibold leading-6 text-white sm:mt-5 sm:border-y-0 sm:border-r-0 sm:border-l-2 sm:bg-transparent sm:py-0 sm:pl-4 sm:text-base sm:leading-7">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime sm:hidden" aria-hidden="true" />
            <p>
              <span className="sm:hidden">Clear scope. Full source code. No compulsory licence.</span>
              <span className="hidden sm:inline">
                One clear project scope. Full source-code ownership. No compulsory BuiltIt
                licence.
              </span>
            </p>
          </div>

          <div className="mt-6 flex items-stretch gap-2 sm:mt-9 sm:gap-3">
            <Link
              href="#booking"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-lime px-4 py-3 text-sm font-black text-slate-950 transition-colors hover:bg-white sm:min-h-[3.25rem] sm:flex-none sm:px-7 sm:py-3.5 sm:text-base"
            >
              Build your system
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-white/25 px-4 py-3 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/5 sm:min-h-[3.25rem] sm:px-7 sm:py-3.5 sm:text-base"
            >
              <span className="sm:hidden">Our work</span>
              <span className="hidden sm:inline">Explore our work</span>
            </Link>
          </div>
        </div>

        <div
          className="relative rounded-md border border-white/15 bg-[#0b0e13] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-6"
          aria-label="Illustrative connected business system"
        >
          <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 sm:gap-4 sm:pb-5">
            <div>
              <p className="text-sm font-bold text-white">Connected workspace</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm sm:text-white/55">
                One system, shared data
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded border border-lime/25 bg-lime/10 px-2 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-lime sm:gap-2 sm:px-2.5 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
              Connected
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 py-3 sm:gap-3 sm:py-5">
            {connectedModules.map((module) => (
              <div
                key={module.label}
                className="min-w-0 rounded-md border border-white/10 bg-white/[0.025] p-3 sm:p-4"
              >
                <div className="mb-3 flex items-center justify-between sm:mb-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded bg-lime/10 text-lime sm:h-9 sm:w-9">
                    <module.icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-lime" aria-hidden="true" />
                </div>
                <p className="truncate text-sm font-bold text-white sm:text-base">{module.label}</p>
                <p className="mt-1 hidden text-sm text-white/55 sm:block">{module.detail}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between gap-5 rounded-md border border-white/10 bg-[#07090d] p-3 sm:p-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 shrink-0 text-lime sm:h-5 sm:w-5" aria-hidden="true" />
                <span className="text-sm font-semibold text-white">Reporting layer</span>
              </div>
              <p className="mt-2 hidden max-w-xs text-sm leading-6 text-white/55 sm:block">
                Day-to-day work becomes clear management reporting.
              </p>
            </div>
            <div className="flex h-10 w-24 shrink-0 items-end gap-1.5 sm:h-14 sm:w-28 sm:gap-2" aria-hidden="true">
              {[38, 62, 48, 82].map((height, index) => (
                <span
                  key={height}
                  className="flex-1 rounded-sm bg-lime/80"
                  style={{ height: `${Math.round(height * 0.48)}px`, opacity: 0.52 + index * 0.12 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.desktop}
              className="flex min-h-[4.5rem] items-center gap-2.5 bg-[#07090d] px-4 py-3 text-[0.8rem] font-semibold leading-5 text-white/[0.72] sm:gap-3 sm:px-6 sm:text-sm lg:min-h-16 lg:px-8"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
              <span className="sm:hidden">{point.mobile}</span>
              <span className="hidden sm:inline">{point.desktop}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
