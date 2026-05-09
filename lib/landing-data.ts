import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  Brush,
  CalendarCheck,
  Code2,
  CreditCard,
  FileCode2,
  Handshake,
  HeartHandshake,
  Layers3,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  PackageCheck,
  PanelsTopLeft,
  PenTool,
  Rocket,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";

export const clientLogos = [
  "NileTech",
  "CairoMart",
  "Forma Studio",
  "Delta ERP",
  "Atlas Clinics",
  "MenaPay",
  "UrbanCart",
  "Summit HR",
];

export const services = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    tag: "Shopify + Custom",
    description: "High-converting stores with checkout, products, analytics, and ownership.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    tag: "React / Next.js",
    description: "Secure portals, SaaS dashboards, and business tools built for scale.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    tag: "iOS + Android",
    description: "Cross-platform apps with polished UX and practical launch support.",
  },
  {
    icon: BriefcaseBusiness,
    title: "ERP & CRM Systems",
    tag: "Enterprise",
    description: "Custom business systems without the endless monthly license fees.",
  },
  {
    icon: PanelsTopLeft,
    title: "Landing Pages",
    tag: "Conversion",
    description: "Fast campaign pages with strong copy, clean design, and clear CTAs.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    tag: "Figma",
    description: "Premium product interfaces designed for trust, clarity, and action.",
  },
];

export const comparison = {
  others: ["Monthly subscriptions", "Recurring maintenance costs", "Renting your own website"],
  us: ["One-time payment", "Full source ownership", "Lifetime yours"],
};

export const portfolioCategories = [
  "All",
  "E-Commerce",
  "Portfolios",
  "Shopify",
  "WordPress",
  "ERP",
] as const;

export const portfolioProjects = [
  {
    name: "Cairo Market OS",
    category: "E-Commerce",
    tech: "Next.js / Stripe",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    href: "https://example.com/cairo-market-os",
    size: "lg",
  },
  {
    name: "Atlas Founder Portfolio",
    category: "Portfolios",
    tech: "Next.js / MDX",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
    href: "https://example.com/atlas-founder",
    size: "sm",
  },
  {
    name: "UrbanCart Shopify",
    category: "Shopify",
    tech: "Shopify / Liquid",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    href: "https://example.com/urbancart",
    size: "md",
  },
  {
    name: "Delta Operations ERP",
    category: "ERP",
    tech: "Postgres / Next.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    href: "https://example.com/delta-erp",
    size: "xl",
  },
  {
    name: "Forma Studio",
    category: "WordPress",
    tech: "WordPress / ACF",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    href: "https://example.com/forma-studio",
    size: "sm",
  },
  {
    name: "MenaPay Dashboard",
    category: "ERP",
    tech: "React / Charts",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    href: "https://example.com/menapay",
    size: "md",
  },
  {
    name: "Nour Beauty Store",
    category: "Shopify",
    tech: "Shopify Plus",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    href: "https://example.com/nour-beauty",
    size: "md",
  },
  {
    name: "Summit HR Portal",
    category: "ERP",
    tech: "Next.js / Prisma",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    href: "https://example.com/summit-hr",
    size: "sm",
  },
  {
    name: "Mosaic Architect",
    category: "Portfolios",
    tech: "Framer / CMS",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    href: "https://example.com/mosaic",
    size: "lg",
  },
  {
    name: "Khan Crafts",
    category: "E-Commerce",
    tech: "Woo / Next.js",
    image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=1200&q=80",
    href: "https://example.com/khan-crafts",
    size: "sm",
  },
  {
    name: "Pulse Clinic Site",
    category: "WordPress",
    tech: "WordPress / SEO",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    href: "https://example.com/pulse-clinic",
    size: "md",
  },
  {
    name: "Saffron Restaurant",
    category: "E-Commerce",
    tech: "Next.js / CMS",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    href: "https://example.com/saffron",
    size: "sm",
  },
];

export const processSteps = [
  {
    icon: CalendarCheck,
    title: "Discovery & Strategy",
    description: "We map the business goal, must-have flows, timeline, and launch scope.",
  },
  {
    icon: Brush,
    title: "Design & Prototype",
    description: "You review a polished visual direction before engineering starts.",
  },
  {
    icon: FileCode2,
    title: "Development & Testing",
    description: "We build, test, optimize, and keep you updated with working previews.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy, hand over ownership, and support the first launch window.",
  },
];

export const erpModules = [
  { icon: Boxes, label: "Inventory" },
  { icon: CreditCard, label: "Sales" },
  { icon: Users, label: "HR" },
  { icon: HeartHandshake, label: "CRM" },
  { icon: WalletCards, label: "Accounting" },
  { icon: BarChart3, label: "Reporting" },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects" },
  { value: 100, suffix: "+", label: "Clients" },
  { value: 95, suffix: "%", label: "Retention" },
  { value: 4, suffix: "+", label: "Years" },
];

export const testimonials = [
  {
    quote:
      "BuiltIt gave us the kind of custom platform we thought only subscription software could offer. We paid once and own it.",
    name: "Mariam Saleh",
    company: "CairoMart",
    initials: "MS",
  },
  {
    quote:
      "The ERP dashboard replaced three tools in our company. The handoff was clear, and our team actually uses it every day.",
    name: "Omar Nabil",
    company: "Delta Supply",
    initials: "ON",
  },
  {
    quote:
      "They understood our market fast. The site feels premium, loads quickly, and customers trust us before the first call.",
    name: "Laila Hassan",
    company: "Forma Studio",
    initials: "LH",
  },
];

export const trustSignals = [
  { icon: ShieldCheck, label: "Full source handoff" },
  { icon: BadgeCheck, label: "No lock-in" },
  { icon: Settings2, label: "Custom systems" },
  { icon: Handshake, label: "Launch support" },
  { icon: LineChart, label: "Growth-ready" },
  { icon: Layers3, label: "Scalable stack" },
  { icon: MonitorSmartphone, label: "Responsive builds" },
  { icon: Sparkles, label: "Premium UI" },
  { icon: Megaphone, label: "Conversion copy" },
  { icon: PackageCheck, label: "Ownership package" },
];
