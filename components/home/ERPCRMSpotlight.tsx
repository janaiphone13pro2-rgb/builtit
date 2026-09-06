"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  Check,
  CircleCheck,
  Clock3,
  Download,
  FileText,
  Mail,
  MapPin,
  PackageCheck,
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserPlus,
  Warehouse,
  Workflow,
  Zap,
} from "lucide-react";
import {
  systemModules,
  type SystemModuleId,
} from "@/lib/system-showcase-data";

type MetricCardProps = {
  label: string;
  value: string;
  detail: string;
  trend?: "up" | "down" | "neutral";
};

function MetricCard({ label, value, detail, trend = "neutral" }: MetricCardProps) {
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : null;

  return (
    <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs font-medium text-white/60">{label}</p>
      <p className="mt-2 truncate text-xl font-black tracking-tight text-white sm:text-2xl">
        {value}
      </p>
      <p
        className={`mt-2 flex items-center gap-1.5 text-xs ${
          trend === "down"
            ? "text-amber-300"
            : trend === "up"
              ? "text-lime"
              : "text-white/50"
        }`}
      >
        {TrendIcon ? <TrendIcon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
        {detail}
      </p>
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  detail?: string;
  children: React.ReactNode;
  className?: string;
};

function DashboardCard({ title, detail, children, className = "" }: DashboardCardProps) {
  return (
    <div className={`rounded-lg border border-white/10 bg-white/[0.025] p-4 ${className}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-sm font-bold text-white">{title}</h4>
          {detail ? <p className="mt-1 text-xs text-white/50">{detail}</p> : null}
        </div>
      </div>
      {children}
    </div>
  );
}

function StatusPill({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "amber" | "red" | "blue" }) {
  const tones = {
    green: "border-lime/20 bg-lime/10 text-lime",
    amber: "border-amber-300/20 bg-amber-300/10 text-amber-200",
    red: "border-rose-300/20 bg-rose-300/10 text-rose-200",
    blue: "border-sky-300/20 bg-sky-300/10 text-sky-200",
  };

  return (
    <span className={`inline-flex whitespace-nowrap rounded-full border px-2 py-1 text-[11px] font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}

function DashboardShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-white/10 bg-[#080b11] shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
      aria-label={`${label} illustrative dashboard`}
    >
      <div className="flex min-h-14 items-center justify-between gap-4 border-b border-white/10 bg-white/[0.025] px-4 py-3 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-lime text-sm font-black text-[#07100c]">
            B
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs text-white/45">BuiltIt Workspace</p>
            <p className="truncate text-sm font-bold text-white">{label}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-xs text-white/55">
          <span className="h-2 w-2 rounded-full bg-lime" aria-hidden="true" />
          <span className="hidden sm:inline">Live workspace</span>
          <Bell className="ml-1 h-4 w-4 text-white/45" aria-hidden="true" />
        </div>
      </div>
      <div className="p-3 sm:p-5">{children}</div>
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 text-[11px] text-white/40 sm:px-5">
        <span>Illustrative capability interface</span>
        <span>Configured around your workflow</span>
      </div>
    </div>
  );
}

function InventoryDashboard() {
  const locations = [
    { name: "Cairo warehouse", units: "7,240 units", percent: 82 },
    { name: "Alexandria warehouse", units: "3,180 units", percent: 64 },
    { name: "Giza showroom", units: "2,060 units", percent: 49 },
  ];
  const products = [
    { sku: "APP-1042", name: "Linen shirt / Sand", available: 184, reorder: 60, status: "Healthy" },
    { sku: "HOM-2088", name: "Ceramic set / 4pc", available: 22, reorder: 30, status: "Reorder" },
    { sku: "ACC-3091", name: "Travel flask / Black", available: 0, reorder: 24, status: "Out of stock" },
    { sku: "APP-1067", name: "Cotton tote / Natural", available: 96, reorder: 40, status: "Healthy" },
  ];

  return (
    <DashboardShell label="Inventory control">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Stock on hand" value="12,480" detail="Across 3 locations" />
        <MetricCard label="Stock value" value="EGP 2.84M" detail="At current cost" trend="up" />
        <MetricCard label="Low-stock SKUs" value="18" detail="6 need action today" trend="down" />
        <MetricCard label="Incoming orders" value="6 POs" detail="1,340 units expected" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[0.72fr_1.28fr]">
        <DashboardCard title="Stock by location" detail="Capacity and available units">
          <div className="space-y-4">
            {locations.map((location) => (
              <div key={location.name}>
                <div className="mb-2 flex items-center justify-between gap-3 text-xs">
                  <span className="flex min-w-0 items-center gap-2 text-white/75">
                    <Warehouse className="h-3.5 w-3.5 shrink-0 text-lime" aria-hidden="true" />
                    <span className="truncate">{location.name}</span>
                  </span>
                  <span className="whitespace-nowrap text-white/50">{location.units}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-lime" style={{ width: `${location.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-md border border-lime/15 bg-lime/[0.06] p-3 text-xs text-white/65">
            <PackageCheck className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
            1,340 units are due across six approved purchase orders.
          </div>
        </DashboardCard>
        <DashboardCard title="Items requiring attention" detail="Reorder rules update with every movement">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-xs">
              <caption className="sr-only">Current inventory levels and reorder status</caption>
              <thead className="border-b border-white/10 text-white/40">
                <tr>
                  <th scope="col" className="pb-3 pr-4 font-medium">Product</th>
                  <th scope="col" className="pb-3 pr-4 font-medium">Available</th>
                  <th scope="col" className="pb-3 pr-4 font-medium">Reorder at</th>
                  <th scope="col" className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                {products.map((product) => (
                  <tr key={product.sku}>
                    <td className="py-3 pr-4">
                      <span className="block font-semibold text-white/85">{product.name}</span>
                      <span className="mt-1 block font-mono text-[10px] text-white/35">{product.sku}</span>
                    </td>
                    <td className="py-3 pr-4 font-semibold text-white/75">{product.available}</td>
                    <td className="py-3 pr-4 text-white/55">{product.reorder}</td>
                    <td className="py-3">
                      <StatusPill tone={product.status === "Healthy" ? "green" : product.status === "Reorder" ? "amber" : "red"}>
                        {product.status}
                      </StatusPill>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function CRMDashboard() {
  const stages = [
    { label: "New", count: 42, value: "EGP 380k", width: 68 },
    { label: "Qualified", count: 26, value: "EGP 610k", width: 82 },
    { label: "Proposal", count: 12, value: "EGP 455k", width: 58 },
    { label: "Won", count: 8, value: "EGP 320k", width: 44 },
  ];

  return (
    <DashboardShell label="CRM and sales pipeline">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Open pipeline" value="EGP 1.45M" detail="80 active opportunities" trend="up" />
        <MetricCard label="Win rate" value="31%" detail="Up 4.2% this quarter" trend="up" />
        <MetricCard label="Follow-ups today" value="9" detail="3 high priority" />
        <MetricCard label="Average cycle" value="18 days" detail="Lead to confirmed order" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1.3fr_0.7fr]">
        <DashboardCard title="Opportunity pipeline" detail="Value and volume by current stage">
          <div className="grid gap-2 sm:grid-cols-2">
            {stages.map((stage) => (
              <div key={stage.label} className="rounded-md border border-white/[0.08] bg-black/20 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/50">{stage.label}</p>
                    <p className="mt-1 text-base font-bold text-white">{stage.value}</p>
                  </div>
                  <span className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-white/60">{stage.count}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-lime" style={{ width: `${stage.width}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 overflow-x-auto rounded-md border border-white/[0.08]">
            <table className="w-full min-w-[520px] text-left text-xs">
              <caption className="sr-only">Active CRM opportunities</caption>
              <thead className="bg-white/[0.035] text-white/40">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-medium">Opportunity</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Value</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Next step</th>
                  <th scope="col" className="px-3 py-2.5 font-medium">Owner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07] text-white/70">
                <tr><td className="px-3 py-3 font-semibold text-white/85">Multi-branch inventory</td><td className="px-3 py-3">EGP 185k</td><td className="px-3 py-3">Demo · 10 Sep</td><td className="px-3 py-3">AM</td></tr>
                <tr><td className="px-3 py-3 font-semibold text-white/85">Wholesale portal</td><td className="px-3 py-3">EGP 142k</td><td className="px-3 py-3">Proposal review</td><td className="px-3 py-3">SK</td></tr>
                <tr><td className="px-3 py-3 font-semibold text-white/85">Customer app rollout</td><td className="px-3 py-3">EGP 96k</td><td className="px-3 py-3">Requirements call</td><td className="px-3 py-3">HN</td></tr>
              </tbody>
            </table>
          </div>
        </DashboardCard>
        <DashboardCard title="Today’s follow-ups" detail="Prioritized by due time">
          <div className="space-y-2">
            {[
              ["09:30", "Review warehouse requirements", "High"],
              ["11:00", "Send revised portal proposal", "Due"],
              ["14:30", "Confirm app discovery call", "Ready"],
              ["16:00", "Check quotation decision", "Due"],
            ].map(([time, task, status]) => (
              <div key={`${time}-${task}`} className="flex gap-3 rounded-md border border-white/[0.07] bg-black/20 p-3">
                <span className="font-mono text-[11px] text-lime">{time}</span>
                <div className="min-w-0">
                  <p className="text-xs font-medium leading-5 text-white/80">{task}</p>
                  <p className="mt-1 text-[11px] text-white/40">{status}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
            <UserPlus className="h-4 w-4 text-lime" aria-hidden="true" />
            7 new leads assigned this week
          </div>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function SalesFinanceDashboard() {
  const revenue = [
    { month: "Apr", value: "326k", height: 48 },
    { month: "May", value: "372k", height: 58 },
    { month: "Jun", value: "351k", height: 54 },
    { month: "Jul", value: "419k", height: 72 },
    { month: "Aug", value: "448k", height: 82 },
    { month: "Sep", value: "483k", height: 92 },
  ];
  const channels = [
    { name: "Online store", orders: 74, revenue: "EGP 246,800", change: "+14.2%", positive: true },
    { name: "Corporate sales", orders: 31, revenue: "EGP 171,500", change: "+8.1%", positive: true },
    { name: "Retail branches", orders: 21, revenue: "EGP 64,600", change: "−2.3%", positive: false },
  ];

  return (
    <DashboardShell label="Sales and finance overview">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Net sales" value="EGP 482,900" detail="12.6% vs last month" trend="up" />
        <MetricCard label="Gross margin" value="38.6%" detail="Target: 36%" trend="up" />
        <MetricCard label="Confirmed orders" value="126" detail="18 awaiting fulfilment" />
        <MetricCard label="Average order" value="EGP 3,833" detail="Up EGP 240" trend="up" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1fr_1fr]">
        <DashboardCard title="Net sales trend" detail="April–September · EGP">
          <div className="flex h-52 items-end gap-2 pt-5 sm:gap-3" role="img" aria-label="Net sales rose from EGP 326,000 in April to EGP 483,000 in September">
            {revenue.map((item) => (
              <div key={item.month} className="flex h-full flex-1 flex-col justify-end">
                <span className="mb-2 text-center text-[10px] font-semibold text-white/55">{item.value}</span>
                <div className="relative flex-1 overflow-hidden rounded-t bg-white/[0.04]">
                  <div className="absolute inset-x-0 bottom-0 rounded-t bg-gradient-to-t from-lime/45 to-lime" style={{ height: `${item.height}%` }} />
                </div>
                <span className="mt-2 text-center text-[11px] text-white/45">{item.month}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
        <DashboardCard title="Sales by channel" detail="Current month performance">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[430px] text-left text-xs">
              <caption className="sr-only">Sales performance by channel</caption>
              <thead className="border-b border-white/10 text-white/40">
                <tr><th scope="col" className="pb-3 font-medium">Channel</th><th scope="col" className="pb-3 font-medium">Orders</th><th scope="col" className="pb-3 font-medium">Revenue</th><th scope="col" className="pb-3 text-right font-medium">Change</th></tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                {channels.map((channel) => (
                  <tr key={channel.name}>
                    <td className="py-4 pr-3 font-semibold text-white/80">{channel.name}</td>
                    <td className="py-4 pr-3 text-white/55">{channel.orders}</td>
                    <td className="py-4 pr-3 text-white/70">{channel.revenue}</td>
                    <td className={`py-4 text-right font-semibold ${channel.positive ? "text-lime" : "text-amber-300"}`}>{channel.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md bg-white/[0.035] p-3"><p className="text-[11px] text-white/45">Payments received</p><p className="mt-1 text-sm font-bold text-white">EGP 401,240</p></div>
            <div className="rounded-md bg-white/[0.035] p-3"><p className="text-[11px] text-white/45">Operating expenses</p><p className="mt-1 text-sm font-bold text-white">EGP 118,300</p></div>
          </div>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function FinanceInvoicingDashboard() {
  const invoices = [
    { number: "INV-1048", client: "Wholesale account", due: "12 Sep", total: "EGP 48,500", status: "Pending" },
    { number: "INV-1047", client: "Retail branch group", due: "08 Sep", total: "EGP 36,200", status: "Due soon" },
    { number: "INV-1043", client: "Service contract", due: "29 Aug", total: "USD 1,850", status: "Overdue" },
    { number: "INV-1040", client: "Distribution partner", due: "04 Sep", total: "EGP 72,000", status: "Paid" },
  ];

  return (
    <DashboardShell label="Finance and invoicing">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Outstanding" value="EGP 146,200" detail="Across 11 invoices" />
        <MetricCard label="Collected this month" value="EGP 318,600" detail="84% of issued value" trend="up" />
        <MetricCard label="Overdue" value="3 invoices" detail="EGP 52,400 total" trend="down" />
        <MetricCard label="Due this week" value="7 invoices" detail="Reminders scheduled" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1.35fr_0.65fr]">
        <DashboardCard title="Recent invoices" detail="Payment status updates automatically">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[590px] text-left text-xs">
              <caption className="sr-only">Recent invoices and payment statuses</caption>
              <thead className="border-b border-white/10 text-white/40">
                <tr><th scope="col" className="pb-3 font-medium">Invoice</th><th scope="col" className="pb-3 font-medium">Account</th><th scope="col" className="pb-3 font-medium">Due</th><th scope="col" className="pb-3 font-medium">Total</th><th scope="col" className="pb-3 text-right font-medium">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07] text-white/65">
                {invoices.map((invoice) => (
                  <tr key={invoice.number}>
                    <td className="py-3.5 pr-3 font-mono text-lime">{invoice.number}</td>
                    <td className="py-3.5 pr-3 font-semibold text-white/80">{invoice.client}</td>
                    <td className="py-3.5 pr-3">{invoice.due}</td>
                    <td className="py-3.5 pr-3 text-white/80">{invoice.total}</td>
                    <td className="py-3.5 text-right"><StatusPill tone={invoice.status === "Paid" ? "green" : invoice.status === "Overdue" ? "red" : invoice.status === "Due soon" ? "amber" : "blue"}>{invoice.status}</StatusPill></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-md border border-white/[0.08] bg-black/20 p-3">
            <span className="flex items-center gap-2 text-xs text-white/65"><Mail className="h-4 w-4 text-lime" aria-hidden="true" />Next reminder batch: 09 Sep, 09:00</span>
            <span className="text-xs font-semibold text-lime">5 recipients</span>
          </div>
        </DashboardCard>
        <DashboardCard title="Invoice status" detail="Issued value this month">
          <div className="flex items-center justify-center py-2">
            <div className="relative grid h-36 w-36 place-items-center rounded-full" style={{ background: "conic-gradient(#4EF2AD 0 68%, #7dd3fc 68% 84%, #fcd34d 84% 94%, #fda4af 94% 100%)" }}>
              <div className="grid h-24 w-24 place-items-center rounded-full bg-[#0a0d13] text-center">
                <div><p className="text-2xl font-black text-white">84%</p><p className="text-[10px] text-white/45">collected</p></div>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            {[["Paid", "EGP 318.6k", "bg-lime"], ["Pending", "EGP 76.1k", "bg-sky-300"], ["Due soon", "EGP 28.5k", "bg-amber-300"], ["Overdue", "EGP 24.0k", "bg-rose-300"]].map(([label, value, color]) => (
              <div key={label} className="flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-white/55"><span className={`h-2 w-2 rounded-full ${color}`} />{label}</span><span className="font-semibold text-white/75">{value}</span></div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function HRTeamsDashboard() {
  const teams = [
    { team: "Operations", present: 14, total: 16, percent: 88 },
    { team: "Sales", present: 9, total: 11, percent: 82 },
    { team: "Customer care", present: 8, total: 9, percent: 89 },
    { team: "Finance and admin", present: 6, total: 7, percent: 86 },
  ];

  return (
    <DashboardShell label="HR and team operations">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Team members" value="48" detail="4 departments" />
        <MetricCard label="Present today" value="43" detail="89.6% attendance" trend="up" />
        <MetricCard label="On leave" value="3" detail="2 planned tomorrow" />
        <MetricCard label="Open requests" value="6" detail="2 awaiting approval" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1fr_1fr]">
        <DashboardCard title="Team availability" detail="Today · Cairo time">
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.team}>
                <div className="mb-2 flex items-center justify-between text-xs"><span className="font-medium text-white/75">{team.team}</span><span className="text-white/45">{team.present} of {team.total} present</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-lime" style={{ width: `${team.percent}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-md bg-white/[0.035] p-3"><UserCheck className="h-4 w-4 text-lime" aria-hidden="true" /><p className="mt-2 text-[11px] text-white/45">On time today</p><p className="mt-1 text-base font-bold text-white">40 people</p></div>
            <div className="rounded-md bg-white/[0.035] p-3"><Clock3 className="h-4 w-4 text-amber-300" aria-hidden="true" /><p className="mt-2 text-[11px] text-white/45">Late arrivals</p><p className="mt-1 text-base font-bold text-white">3 people</p></div>
          </div>
        </DashboardCard>
        <DashboardCard title="Requests and approvals" detail="Items requiring a manager decision">
          <div className="space-y-2">
            {[
              { name: "Nadia H.", request: "Annual leave · 15–17 Sep", state: "Review" },
              { name: "Omar K.", request: "Remote work · 11 Sep", state: "Review" },
              { name: "Mariam S.", request: "Expense claim · EGP 1,240", state: "Approved" },
              { name: "Ahmed R.", request: "Document renewal", state: "Due" },
            ].map((item) => (
              <div key={`${item.name}-${item.request}`} className="flex items-center gap-3 rounded-md border border-white/[0.07] bg-black/20 p-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/[0.07] text-[11px] font-bold text-white/70">{item.name.split(" ").map((part) => part[0]).join("")}</div>
                <div className="min-w-0 flex-1"><p className="text-xs font-semibold text-white/80">{item.name}</p><p className="mt-1 truncate text-[11px] text-white/45">{item.request}</p></div>
                <StatusPill tone={item.state === "Approved" ? "green" : item.state === "Due" ? "amber" : "blue"}>{item.state}</StatusPill>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function BookingsOperationsDashboard() {
  const schedule = [
    { time: "09:00", service: "Installation visit", resource: "Team 02", status: "In progress", tone: "green" as const },
    { time: "10:30", service: "Site assessment", resource: "Team 01", status: "Confirmed", tone: "blue" as const },
    { time: "12:00", service: "Maintenance booking", resource: "Team 03", status: "Confirmed", tone: "blue" as const },
    { time: "14:30", service: "Project handover", resource: "Room A", status: "Awaiting", tone: "amber" as const },
    { time: "16:00", service: "Follow-up consultation", resource: "Remote", status: "Confirmed", tone: "blue" as const },
  ];

  return (
    <DashboardShell label="Bookings and operations">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Bookings today" value="18" detail="15 confirmed" />
        <MetricCard label="Team utilization" value="76%" detail="Across 4 field teams" trend="up" />
        <MetricCard label="Open tasks" value="12" detail="4 due before 17:00" />
        <MetricCard label="On-time rate" value="94%" detail="Last 30 days" trend="up" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1.25fr_0.75fr]">
        <DashboardCard title="Today’s schedule" detail="Sunday, 7 September · Africa/Cairo">
          <div className="space-y-2">
            {schedule.map((booking) => (
              <div key={`${booking.time}-${booking.service}`} className="grid grid-cols-[48px_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-white/[0.07] bg-black/20 p-3">
                <span className="font-mono text-[11px] text-lime">{booking.time}</span>
                <div className="min-w-0"><p className="truncate text-xs font-semibold text-white/80">{booking.service}</p><p className="mt-1 flex items-center gap-1.5 text-[11px] text-white/45"><MapPin className="h-3 w-3" aria-hidden="true" />{booking.resource}</p></div>
                <StatusPill tone={booking.tone}>{booking.status}</StatusPill>
              </div>
            ))}
          </div>
        </DashboardCard>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <DashboardCard title="Resource capacity" detail="Next available windows">
            <div className="space-y-3">
              {[["Field team 01", "72%", 72], ["Field team 02", "88%", 88], ["Field team 03", "61%", 61], ["Consultation room", "54%", 54]].map(([name, value, percent]) => (
                <div key={String(name)}><div className="mb-1.5 flex justify-between text-[11px]"><span className="text-white/60">{name}</span><span className="font-semibold text-white/75">{value}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-lime" style={{ width: `${percent}%` }} /></div></div>
              ))}
            </div>
          </DashboardCard>
          <DashboardCard title="Operations queue">
            <div className="grid grid-cols-3 gap-2 text-center"><div className="rounded-md bg-white/[0.035] p-2"><p className="text-lg font-black text-white">7</p><p className="text-[10px] text-white/40">Ready</p></div><div className="rounded-md bg-lime/[0.07] p-2"><p className="text-lg font-black text-lime">4</p><p className="text-[10px] text-white/40">Active</p></div><div className="rounded-md bg-white/[0.035] p-2"><p className="text-lg font-black text-white">3</p><p className="text-[10px] text-white/40">Review</p></div></div>
          </DashboardCard>
        </div>
      </div>
    </DashboardShell>
  );
}

function IntegrationsDashboard() {
  const integrations = [
    { name: "WhatsApp Business", role: "Customer messages", status: "Connected", mark: "WA" },
    { name: "Paymob", role: "Payment events", status: "Connected", mark: "PY" },
    { name: "Shopify", role: "Orders and customers", status: "Connected", mark: "SH" },
    { name: "Aramex", role: "Shipment updates", status: "Connected", mark: "AR" },
    { name: "Google Workspace", role: "Email and calendar", status: "Connected", mark: "GW" },
    { name: "QuickBooks", role: "Accounting sync", status: "Review", mark: "QB" },
  ];

  return (
    <DashboardShell label="Integrations and workflow automation">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Connected services" value="6" detail="5 syncing normally" />
        <MetricCard label="Active workflows" value="14" detail="Across sales and operations" />
        <MetricCard label="Events processed" value="8,642" detail="This month" trend="up" />
        <MetricCard label="Successful runs" value="99.8%" detail="Last 30 days" trend="up" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1fr_1fr]">
        <DashboardCard title="Connected services" detail="Example integration workspace">
          <div className="grid gap-2 sm:grid-cols-2">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex items-center gap-3 rounded-md border border-white/[0.07] bg-black/20 p-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.05] text-[10px] font-black text-lime">{integration.mark}</div>
                <div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold text-white/80">{integration.name}</p><p className="mt-1 truncate text-[11px] text-white/40">{integration.role}</p></div>
                {integration.status === "Connected" ? <CircleCheck className="h-4 w-4 shrink-0 text-lime" aria-label="Connected" /> : <AlertTriangle className="h-4 w-4 shrink-0 text-amber-300" aria-label="Needs review" />}
              </div>
            ))}
          </div>
        </DashboardCard>
        <DashboardCard title="Order fulfilment workflow" detail="Automated handoff · last run 2 minutes ago">
          <ol className="space-y-0">
            {[
              { label: "New paid order received", source: "Shopify", icon: Zap },
              { label: "Customer record updated", source: "BuiltIt CRM", icon: UserCheck },
              { label: "Stock reserved", source: "Inventory", icon: PackageCheck },
              { label: "Shipment created", source: "Aramex", icon: Workflow },
              { label: "Confirmation sent", source: "WhatsApp", icon: Mail },
            ].map((step, index, items) => (
              <li key={step.label} className="relative flex gap-3 pb-3 last:pb-0">
                {index < items.length - 1 ? <span className="absolute bottom-0 left-[15px] top-8 w-px bg-lime/20" aria-hidden="true" /> : null}
                <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-lime/25 bg-lime/10"><step.icon className="h-3.5 w-3.5 text-lime" aria-hidden="true" /></span>
                <div className="min-w-0 flex-1 rounded-md border border-white/[0.07] bg-black/20 px-3 py-2"><div className="flex items-center justify-between gap-3"><p className="text-xs font-semibold text-white/75">{step.label}</p><Check className="h-3.5 w-3.5 shrink-0 text-lime" aria-hidden="true" /></div><p className="mt-1 text-[11px] text-white/40">{step.source}</p></div>
              </li>
            ))}
          </ol>
        </DashboardCard>
      </div>
    </DashboardShell>
  );
}

function AnalyticsReportingDashboard() {
  const weekly = [
    { day: "Mon", orders: 48, revenue: 64 },
    { day: "Tue", orders: 62, revenue: 72 },
    { day: "Wed", orders: 55, revenue: 68 },
    { day: "Thu", orders: 71, revenue: 84 },
    { day: "Fri", orders: 78, revenue: 92 },
    { day: "Sat", orders: 69, revenue: 78 },
    { day: "Sun", orders: 42, revenue: 55 },
  ];

  return (
    <DashboardShell label="Analytics and reporting">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <MetricCard label="Net revenue" value="EGP 482.9k" detail="12.6% vs prior period" trend="up" />
        <MetricCard label="Order conversion" value="3.8%" detail="0.4 points higher" trend="up" />
        <MetricCard label="Fulfilled orders" value="438" detail="94% on time" />
        <MetricCard label="Support resolution" value="3h 24m" detail="38 minutes faster" trend="up" />
      </div>
      <div className="mt-3 grid gap-3 xl:grid-cols-[1.25fr_0.75fr]">
        <DashboardCard title="Revenue and order volume" detail="Last 7 days · compared on a shared index">
          <div className="mb-4 flex items-center gap-4 text-[11px] text-white/50"><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-lime" />Revenue</span><span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-300" />Orders</span></div>
          <div className="flex h-52 items-end gap-2 sm:gap-4" role="img" aria-label="Revenue and orders peaked on Friday during the last seven days">
            {weekly.map((item) => (
              <div key={item.day} className="flex h-full flex-1 flex-col justify-end">
                <div className="flex flex-1 items-end justify-center gap-1">
                  <div className="w-2.5 rounded-t bg-lime sm:w-4" style={{ height: `${item.revenue}%` }} title={`${item.day} revenue index ${item.revenue}`} />
                  <div className="w-2.5 rounded-t bg-sky-300/70 sm:w-4" style={{ height: `${item.orders}%` }} title={`${item.day} order index ${item.orders}`} />
                </div>
                <span className="mt-2 text-center text-[11px] text-white/40">{item.day}</span>
              </div>
            ))}
          </div>
        </DashboardCard>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <DashboardCard title="Performance signals" detail="Rules configured by management">
            <div className="space-y-2">
              <div className="rounded-md border border-lime/15 bg-lime/[0.06] p-3"><div className="flex items-center gap-2 text-xs font-semibold text-lime"><TrendingUp className="h-4 w-4" aria-hidden="true" />Online sales ahead of target</div><p className="mt-1.5 text-[11px] leading-5 text-white/50">Current pace is 8.4% above the September plan.</p></div>
              <div className="rounded-md border border-amber-300/15 bg-amber-300/[0.05] p-3"><div className="flex items-center gap-2 text-xs font-semibold text-amber-200"><AlertTriangle className="h-4 w-4" aria-hidden="true" />Returns need attention</div><p className="mt-1.5 text-[11px] leading-5 text-white/50">Apparel returns reached 6.1% this week.</p></div>
            </div>
          </DashboardCard>
          <DashboardCard title="Scheduled reports">
            <div className="space-y-2">
              {[["Executive weekly summary", "Monday · 08:00"], ["Sales and margin report", "Monthly · Day 1"], ["Stock exception report", "Daily · 17:30"]].map(([name, time]) => (
                <div key={name} className="flex items-center gap-3 rounded-md bg-white/[0.035] p-3"><FileText className="h-4 w-4 shrink-0 text-lime" aria-hidden="true" /><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium text-white/70">{name}</p><p className="mt-1 text-[10px] text-white/40">{time}</p></div><Download className="h-3.5 w-3.5 text-white/35" aria-hidden="true" /></div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardShell>
  );
}

function ModuleDashboard({ moduleId }: { moduleId: SystemModuleId }) {
  switch (moduleId) {
    case "inventory":
      return <InventoryDashboard />;
    case "crm":
      return <CRMDashboard />;
    case "sales-finance":
      return <SalesFinanceDashboard />;
    case "finance-invoicing":
      return <FinanceInvoicingDashboard />;
    case "hr-teams":
      return <HRTeamsDashboard />;
    case "bookings-operations":
      return <BookingsOperationsDashboard />;
    case "integrations":
      return <IntegrationsDashboard />;
    case "analytics-reporting":
      return <AnalyticsReportingDashboard />;
  }
}

export function ERPCRMSpotlight() {
  const [activeId, setActiveId] = useState<SystemModuleId>(systemModules[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeModule = systemModules.find((module) => module.id === activeId) ?? systemModules[0];

  function selectTab(index: number) {
    const nextIndex = (index + systemModules.length) % systemModules.length;
    const nextModule = systemModules[nextIndex];
    setActiveId(nextModule.id);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        selectTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        selectTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        selectTab(0);
        break;
      case "End":
        event.preventDefault();
        selectTab(systemModules.length - 1);
        break;
    }
  }

  return (
    <section id="erp" aria-labelledby="systems-showcase-title" className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(78,242,173,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(78,242,173,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-lime/[0.06] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-lime">
            Connected Business Software
          </p>
          <h2 id="systems-showcase-title" className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Every Business Module. Connected in One System.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Instead of switching between scattered applications, bring the information that matters into one tailored platform. Select a module to explore what BuiltIt can create around your workflow.
          </p>
          <p className="mt-4 flex max-w-2xl items-start gap-2 text-sm leading-6 text-white/50">
            <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-lime" aria-hidden="true" />
            These interfaces illustrate system capabilities and workflows; they are not presented as client results or a ready-made product.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#070a10]/95 shadow-[0_32px_100px_rgba(0,0,0,0.42)] lg:mt-14 lg:grid lg:grid-cols-[270px_minmax(0,1fr)]">
          <div className="border-b border-white/10 bg-white/[0.018] p-3 lg:border-b-0 lg:border-r lg:p-4">
            <div className="mb-3 hidden items-center justify-between px-3 lg:flex">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">System modules</span>
              <span className="text-[11px] text-white/30">08</span>
            </div>
            <div
              role="tablist"
              aria-label="Business system modules"
              className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:overflow-visible lg:pb-0"
            >
              {systemModules.map((module, index) => {
                const isActive = module.id === activeModule.id;
                return (
                  <button
                    key={module.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    id={`system-tab-${module.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`system-panel-${module.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(module.id)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={`group flex min-h-14 min-w-[190px] items-center gap-3 rounded-lg border px-3 py-3 text-left transition-colors focus-visible:z-10 lg:min-w-0 ${
                      isActive
                        ? "border-lime/35 bg-lime/[0.11] text-white"
                        : "border-transparent text-white/55 hover:border-white/10 hover:bg-white/[0.035] hover:text-white"
                    }`}
                  >
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-md border ${isActive ? "border-lime/25 bg-lime/10 text-lime" : "border-white/10 bg-white/[0.025] text-white/45 group-hover:text-white/70"}`}>
                      <module.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-semibold leading-5">{module.label}</span>
                    <ArrowRight className={`h-3.5 w-3.5 shrink-0 ${isActive ? "text-lime" : "text-white/20"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            key={activeModule.id}
            id={`system-panel-${activeModule.id}`}
            role="tabpanel"
            aria-labelledby={`system-tab-${activeModule.id}`}
            tabIndex={0}
            className="min-w-0 p-4 focus-visible:outline-offset-[-3px] sm:p-6 lg:p-8"
          >
            <div className="grid items-start gap-7 xl:grid-cols-[minmax(230px,0.58fr)_minmax(0,1.42fr)] xl:gap-8">
              <div className="xl:sticky xl:top-28">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.17em] text-lime">{activeModule.eyebrow}</p>
                <h3 className="mt-3 text-balance text-2xl font-black tracking-tight text-white sm:text-3xl">{activeModule.headline}</h3>
                <p className="mt-4 text-base leading-7 text-white/65">{activeModule.description}</p>
                <ul className="mt-6 space-y-3" aria-label={`${activeModule.label} capabilities`}>
                  {activeModule.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5 text-sm leading-6 text-white/70">
                      <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime/10 text-lime"><Check className="h-2.5 w-2.5" aria-hidden="true" /></span>
                      {capability}
                    </li>
                  ))}
                </ul>
                <Link href="#booking" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-black text-[#06100b] transition-colors hover:bg-white">
                  Discuss This System
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="min-w-0">
                <ModuleDashboard moduleId={activeModule.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
