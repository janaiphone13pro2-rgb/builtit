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
  "Custom-built for your workflow",
  "Web, mobile, and business systems",
  "Full source-code handover",
  "Launch and post-launch support",
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
        className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-lime">
            Custom software <span className="text-white/35">•</span> Business systems{" "}
            <span className="text-white/35">•</span> Full ownership
          </p>

          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            We Build the Systems That Run Your Business.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
            From high-performance websites and e-commerce platforms to ERP, CRM,
            inventory, invoicing, booking, dashboards, and mobile apps—BuiltIt designs
            connected software around the way your business works.
          </p>

          <p className="mt-5 max-w-2xl border-l-2 border-lime pl-4 text-base font-semibold leading-7 text-white">
            One clear project scope. Full source-code ownership. No compulsory BuiltIt
            licence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#booking"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md bg-lime px-7 py-3.5 text-base font-black text-slate-950 transition-colors hover:bg-white"
            >
              Build your system
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="#work"
              className="inline-flex min-h-13 items-center justify-center rounded-md border border-white/25 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Explore our work
            </Link>
          </div>
        </div>

        <div
          className="relative rounded-md border border-white/15 bg-[#0b0e13] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-6"
          aria-label="Illustrative connected business system"
        >
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-bold text-white">Connected workspace</p>
              <p className="mt-1 text-sm text-white/55">Illustrative system architecture</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded border border-lime/25 bg-lime/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-lime">
              <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
              Connected
            </span>
          </div>

          <div className="grid gap-3 py-5 sm:grid-cols-2">
            {connectedModules.map((module) => (
              <div
                key={module.label}
                className="rounded-md border border-white/10 bg-white/[0.025] p-4"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded bg-lime/10 text-lime">
                    <module.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-lime" aria-hidden="true" />
                </div>
                <p className="font-bold text-white">{module.label}</p>
                <p className="mt-1 text-sm text-white/55">{module.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-md border border-white/10 bg-[#07090d] p-4">
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-white">Reporting layer</span>
              <BarChart3 className="h-5 w-5 text-lime" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-4 items-end gap-2" aria-hidden="true">
              {[38, 62, 48, 82].map((height, index) => (
                <span
                  key={height}
                  className="rounded-sm bg-lime/80"
                  style={{ height: `${height}px`, opacity: 0.52 + index * 0.12 }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Shared data can move from day-to-day work into clear management reporting.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex min-h-16 items-center gap-3 bg-[#07090d] px-6 py-4 text-sm font-semibold text-white/72 lg:px-8"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
