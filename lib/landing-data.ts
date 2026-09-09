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
  "Nelec",
  "Babo Community",
  "Amir Blinds",
  "Beta Misr",
  "Luce Makeup",
  "Hekaya Egypt",
];

export const services = [
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    tag: "Shopify + Custom",
    description: "Product-led stores with clear browsing, checkout, and practical order workflows.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    tag: "React / Next.js",
    description: "Portals, dashboards, and business tools designed around clear user flows.",
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
    description: "Custom business systems shaped around the workflows and handover you agree.",
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
  "Shopify",
  "WordPress",
  "Custom Coded",
] as const;

type PortfolioCategory = Exclude<(typeof portfolioCategories)[number], "All">;

export type PortfolioProject = {
  name: string;
  category: PortfolioCategory;
  tech: string;
  image: string;
  href: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

const websiteScreenshot = (url: string) =>
  `/images/work/${url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.webp`;

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "Nelec",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://testnelec.co.uk"),
    href: "https://testnelec.co.uk",
    description: "Corporate web presence for a UK electrical services brand.",
    tags: ["Corporate", "Services", "UK"],
  },
  {
    name: "Babo Community",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://babocommunity.com"),
    href: "https://babocommunity.com",
    description: "Community-focused website with brand and content sections.",
    tags: ["Community", "Brand", "Content"],
  },
  {
    name: "Amir Blinds",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://amirblinds.co.uk/"),
    href: "https://amirblinds.co.uk/",
    description: "Service website for a blinds and interiors business.",
    tags: ["Home Services", "UK", "Lead Gen"],
    featured: true,
  },
  {
    name: "MCS Car Hire",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://www.mcscarhire.co.uk/"),
    href: "https://www.mcscarhire.co.uk/",
    description: "Car hire website designed around quick service discovery.",
    tags: ["Car Hire", "Booking", "UK"],
  },
  {
    name: "Beta Misr",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://betamisr.com/"),
    href: "https://betamisr.com/",
    description: "Corporate website for an Egyptian business brand.",
    tags: ["Corporate", "Egypt", "Brand"],
  },
  {
    name: "Abo Zahra",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://abozahra.co/"),
    href: "https://abozahra.co/",
    description: "Business site with a clean service-led structure.",
    tags: ["Business", "Services", "Brand"],
  },
  {
    name: "Specialized Expertise",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("http://specialized-expertise.com"),
    href: "http://specialized-expertise.com",
    description: "Professional corporate website for a specialist services company.",
    tags: ["Corporate", "Services", "Professional"],
  },
  {
    name: "Tangeric",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("http://tangeric.com/"),
    href: "http://tangeric.com/",
    description: "Brand website built around clear product and company presentation.",
    tags: ["Brand", "Corporate", "Responsive"],
  },
  {
    name: "Seductive Pharaohs",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://seductivepharaohs.com/"),
    href: "https://seductivepharaohs.com/",
    description: "Creative brand site with a distinctive visual direction.",
    tags: ["Creative", "Brand", "Visual"],
  },
  {
    name: "Amandoor",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://amandoor.com/"),
    href: "https://amandoor.com/",
    description: "Business website with a product-led presentation.",
    tags: ["Business", "Products", "Brand"],
  },
  {
    name: "QSO Troja",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://qsotroja.com/"),
    href: "https://qsotroja.com/",
    description: "Portfolio website with a direct presentation of work and services.",
    tags: ["Portfolio", "Services", "Responsive"],
  },
  {
    name: "Winners Developer",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://winnersdeveloper.com"),
    href: "https://winnersdeveloper.com",
    description: "Developer website for real estate projects and lead generation.",
    tags: ["Real Estate", "Lead Gen", "Business"],
  },
  {
    name: "Lichi Egypt",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://lichieg.com/"),
    href: "https://lichieg.com/",
    description: "Shopify fashion store tailored for the Egyptian market.",
    tags: ["Fashion", "Shopify", "Egypt"],
    featured: true,
  },
  {
    name: "Sistah Modest",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://sistah-modest.myshopify.com/"),
    href: "https://sistah-modest.myshopify.com/",
    description: "Modestwear storefront built on Shopify.",
    tags: ["Modestwear", "Shopify", "Store"],
  },
  {
    name: "S Pets House",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://s-petshouse.com/"),
    href: "https://s-petshouse.com/",
    description: "Pet products Shopify store with a catalog-first shopping flow.",
    tags: ["Pets", "Shopify", "E-Commerce"],
    featured: true,
  },
  {
    name: "Farah Designs",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://farah-designs-3.myshopify.com/"),
    href: "https://farah-designs-3.myshopify.com/",
    description: "Fashion Shopify store with a curated product catalog.",
    tags: ["Fashion", "Shopify", "E-Commerce"],
  },
  {
    name: "Ayou Official",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://ayouofficial.com/"),
    href: "https://ayouofficial.com/",
    description: "Shopify fashion storefront with collections, product browsing, and checkout.",
    tags: ["Fashion", "Shopify", "Collections"],
  },
  {
    name: "Laila Egypt",
    category: "Shopify",
    tech: "Shopify Store",
    image: websiteScreenshot("https://laila-eg.myshopify.com/"),
    href: "https://laila-eg.myshopify.com/",
    description: "Shopify storefront with product discovery and checkout for the Egyptian market.",
    tags: ["Shopify", "E-Commerce", "Egypt"],
  },
  {
    name: "Luce Makeup",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://lucemakeup.com/"),
    href: "https://lucemakeup.com/",
    description: "Beauty brand website managed through WordPress.",
    tags: ["Beauty", "WordPress", "CMS"],
    featured: true,
  },
  {
    name: "See You Beauty",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://seeyoubeauty.com/"),
    href: "https://seeyoubeauty.com/",
    description: "Beauty website with an editorial and product-focused structure.",
    tags: ["Beauty", "WordPress", "Brand"],
  },
  {
    name: "Dr Baby Kids",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://drbabykids.com/"),
    href: "https://drbabykids.com/",
    description: "Kids and baby care website with WordPress-powered content.",
    tags: ["Kids", "WordPress", "Content"],
  },
  {
    name: "Safety House Egypt",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://safetyhouse-eg.com/"),
    href: "https://safetyhouse-eg.com/",
    description: "Safety and equipment website with service and product information.",
    tags: ["Safety", "WordPress", "Business"],
  },
  {
    name: "Honeydew Tiger",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://honeydew-tiger-608299.hostingersite.com"),
    href: "https://honeydew-tiger-608299.hostingersite.com",
    description: "WordPress site hosted on Hostinger for a compact brand presence.",
    tags: ["WordPress", "Hostinger", "CMS"],
  },
  {
    name: "Derby Airport Travel",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://derby-airport-travel.co.uk/"),
    href: "https://derby-airport-travel.co.uk/",
    description: "Travel service website for airport transfers, business travel, and UK day trips.",
    tags: ["Airport Transfers", "WordPress", "UK"],
  },
  {
    name: "Buzz Blinds",
    category: "WordPress",
    tech: "WordPress CMS",
    image: websiteScreenshot("https://buzzblinds.co.uk/"),
    href: "https://buzzblinds.co.uk/",
    description: "Lead-generation website for made-to-measure blinds, measuring, and fitting services.",
    tags: ["Home Services", "WordPress", "UK"],
  },
  {
    name: "Hekaya Egypt",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://hekaya-eg.vercel.app/"),
    href: "https://hekaya-eg.vercel.app/",
    description: "Custom-coded brand website deployed on Vercel.",
    tags: ["Custom Code", "Vercel", "Brand"],
  },
  {
    name: "Purevive Egypt",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://purevive-eg.vercel.app/"),
    href: "https://purevive-eg.vercel.app/",
    description: "Custom-coded product website with a focused launch experience.",
    tags: ["Custom Code", "Product", "Vercel"],
  },
  {
    name: "Loose Brand",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://loosebrand.vercel.app/"),
    href: "https://loosebrand.vercel.app/",
    description: "Custom fashion brand website deployed on Vercel.",
    tags: ["Fashion", "Custom Code", "Vercel"],
  },
  {
    name: "MK Designs",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://mk-designs.vercel.app/"),
    href: "https://mk-designs.vercel.app/",
    description: "Custom portfolio website for a design-focused brand.",
    tags: ["Design", "Portfolio", "Vercel"],
  },
  {
    name: "Lila Hijabs",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://lilahijabs.com/"),
    href: "https://lilahijabs.com/",
    description: "Custom-coded hijab brand website with a clean shopping feel.",
    tags: ["Fashion", "Custom Code", "Vercel"],
    featured: true,
  },
  {
    name: "Yoola Egypt",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://yoola-eg.vercel.app/"),
    href: "https://yoola-eg.vercel.app/",
    description: "Custom-coded brand website built for a fast launch.",
    tags: ["Brand", "Custom Code", "Vercel"],
  },
  {
    name: "Ahadele",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://www.ahadele.com/"),
    href: "https://www.ahadele.com/",
    description: "Custom-coded live website for a distinctive brand experience.",
    tags: ["Custom Code", "Brand", "Responsive"],
    featured: true,
  },
  {
    name: "Carmel Scarf",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://carmel-scarf.vercel.app/"),
    href: "https://carmel-scarf.vercel.app/",
    description: "Custom scarf brand website deployed on Vercel.",
    tags: ["Fashion", "Custom Code", "Vercel"],
  },
  {
    name: "Sola",
    category: "Custom Coded",
    tech: "Custom Code",
    image: websiteScreenshot("https://sola-eg.vercel.app/"),
    href: "https://sola-eg.vercel.app/",
    description: "Custom-coded brand website deployed on Vercel.",
    tags: ["Custom Code", "Brand", "Vercel"],
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
