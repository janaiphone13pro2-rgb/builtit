export type ServiceDefinition = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  metaDescription: string;
  problemHeading: string;
  problem: string[];
  idealFor: string[];
  deliverables: string[];
  planningPoints: string[];
};

export const services: ServiceDefinition[] = [
  {
    slug: "custom-business-systems",
    name: "Custom Business Systems",
    shortName: "Business Systems",
    eyebrow: "Software for your workflow",
    summary:
      "Tailored internal software that brings workflows, permissions, records, and reporting into one system designed around how your organisation operates.",
    metaDescription:
      "Custom business systems for teams that need connected workflows, role-based access, operational records, approvals, and reporting.",
    problemHeading: "Replace workarounds with one clear operating system",
    problem: [
      "Important work often becomes difficult to follow when it is spread across spreadsheets, inboxes, paper forms, and tools that do not share data.",
      "A custom business system can organise the agreed workflow in one place, give each role the right level of access, and make the current status of work easier to understand.",
    ],
    idealFor: [
      "Teams coordinating repeatable, multi-step operational work.",
      "Businesses that need approvals, permissions, and a reliable record of activity.",
      "Organisations whose current software creates manual duplication or unsuitable workarounds.",
    ],
    deliverables: [
      "Workflow and user-role mapping",
      "Secure access and role-based permissions",
      "Operational forms, records, and dashboards",
      "Statuses, approvals, and notifications",
      "Document or data-management tools",
      "Reporting and export functions",
    ],
    planningPoints: [
      "The existing workflow, exceptions, and approval rules.",
      "Which records are authoritative and which systems need to connect.",
      "The access, documentation, and handover included in the project.",
    ],
  },
  {
    slug: "erp-systems",
    name: "ERP Systems",
    shortName: "ERP Systems",
    eyebrow: "Connected operations",
    summary:
      "Modular business software that connects selected operational areas—such as inventory, purchasing, sales, invoicing, people, and branch activity—around shared data.",
    metaDescription:
      "Tailored ERP systems connecting selected inventory, purchasing, sales, invoicing, HR, branch, and reporting workflows.",
    problemHeading: "Give connected teams a shared view of operations",
    problem: [
      "When departments keep separate records, the same information can be entered repeatedly and operational questions become difficult to answer consistently.",
      "A tailored ERP can connect only the modules the business needs, with shared records and permissions defined around real responsibilities rather than a generic feature list.",
    ],
    idealFor: [
      "Businesses managing stock, purchasing, sales, or activity across multiple teams or locations.",
      "Operations that need shared master records and controlled access between departments.",
      "Organisations planning to replace disconnected operational tools in clear phases.",
    ],
    deliverables: [
      "ERP module and data-relationship planning",
      "Inventory, warehouse, or purchasing modules",
      "Sales, customer, and supplier records",
      "Invoicing or financial activity workflows",
      "Employee, branch, or operations modules",
      "Role-specific dashboards and reports",
    ],
    planningPoints: [
      "Which modules belong in the initial scope and which can follow later.",
      "Data migration, validation, and responsibility for existing records.",
      "Accounting, tax, or industry rules that require specialist confirmation.",
    ],
  },
  {
    slug: "crm-sales-platforms",
    name: "CRM and Sales Platforms",
    shortName: "CRM & Sales",
    eyebrow: "Customer relationships",
    summary:
      "Customer and sales tools that organise enquiries, profiles, conversations, follow-ups, opportunities, and quotations around an agreed sales process.",
    metaDescription:
      "Custom CRM and sales platforms for managing leads, customer records, pipelines, follow-ups, quotations, and sales reporting.",
    problemHeading: "Make the sales process visible and easier to manage",
    problem: [
      "Enquiries can be missed when customer details, conversations, and next actions live in individual inboxes or informal notes.",
      "A CRM can give the team one controlled record of each relationship and reflect the stages, responsibilities, and follow-up rules used by the business.",
    ],
    idealFor: [
      "Sales or account teams handling enquiries across more than one channel.",
      "Businesses with a defined pipeline, quotation process, or recurring follow-up work.",
      "Teams that need different views for salespeople, managers, and operations staff.",
    ],
    deliverables: [
      "Lead and customer profiles",
      "Configurable sales stages and opportunity records",
      "Tasks, reminders, notes, and activity history",
      "Quotation or proposal workflows",
      "Email, messaging, or form integrations where supported",
      "Sales activity dashboards and reports",
    ],
    planningPoints: [
      "How leads enter the business and who owns each next action.",
      "Consent, access, and retention requirements for customer information.",
      "The external communication tools and APIs available for integration.",
    ],
  },
  {
    slug: "web-applications-portals",
    name: "Web Applications and Customer Portals",
    shortName: "Web Apps & Portals",
    eyebrow: "Secure digital services",
    summary:
      "Browser-based applications for customers, employees, partners, or administrators, built around the actions and information each user needs.",
    metaDescription:
      "Custom web applications and secure portals for customers, employees, partners, administrators, bookings, and managed workflows.",
    problemHeading: "Turn a service or workflow into a focused online product",
    problem: [
      "Email-based requests and disconnected documents make it hard for users to know what to do next or see the current status of a service.",
      "A web application can provide a structured experience for submitting information, completing tasks, accessing records, and managing the process from an appropriate administrative view.",
    ],
    idealFor: [
      "Businesses offering a service that customers or partners need to access online.",
      "Teams that need secure employee, member, supplier, or client workspaces.",
      "Products that require user accounts, business rules, and an administration area.",
    ],
    deliverables: [
      "User journeys and application architecture",
      "Account access, profiles, and permissions",
      "User dashboards, forms, and status views",
      "Administrative tools and content controls",
      "Bookings, payments, documents, or messaging where scoped",
      "API connections and technical documentation",
    ],
    planningPoints: [
      "The jobs each user type needs to complete.",
      "Security, privacy, data, and permission requirements.",
      "The services, providers, and internal systems the application must connect to.",
    ],
  },
  {
    slug: "mobile-applications",
    name: "Mobile Applications",
    shortName: "Mobile Apps",
    eyebrow: "Products for iOS and Android",
    summary:
      "Mobile applications designed around useful on-device journeys and connected, where required, to the accounts, data, and workflows behind the business.",
    metaDescription:
      "Mobile application design and development for iOS and Android, including accounts, notifications, bookings, payments, and system connections.",
    problemHeading: "Put the right service in your users’ hands",
    problem: [
      "Some products need an experience designed specifically for mobile use, device capabilities, recurring access, or work that happens away from a desk.",
      "BuiltIt can define the mobile journeys and supporting system together, choosing an implementation approach after the required devices, features, integrations, and operating constraints are understood.",
    ],
    idealFor: [
      "Services with repeat mobile use by customers, employees, or field teams.",
      "Products that need notifications, device features, or selected offline behaviour.",
      "Businesses that need a mobile experience connected to an existing or new platform.",
    ],
    deliverables: [
      "Mobile user flows and interface design",
      "iOS and Android application development",
      "Account, profile, and permission experiences",
      "Notifications or offline behaviour where required",
      "Payments, bookings, location, or media features where scoped",
      "Backend integration and app-store submission support",
    ],
    planningPoints: [
      "Which mobile platforms, devices, and accessibility needs are in scope.",
      "How the application connects to backend data and existing accounts.",
      "App-store rules, third-party costs, and ongoing operating responsibilities.",
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    shortName: "E-Commerce",
    eyebrow: "Connected selling",
    summary:
      "Online stores and commerce experiences planned around product discovery, checkout, payments, order handling, inventory, shipping, and the team managing them.",
    metaDescription:
      "E-commerce development for storefronts, catalogues, checkout, payments, orders, inventory, shipping integrations, and store management.",
    problemHeading: "Connect the storefront to the work behind each order",
    problem: [
      "An online store has to support both the buying journey and the operational work that follows a purchase. A polished storefront alone does not resolve unclear product data, payment, fulfilment, or inventory processes.",
      "BuiltIt plans the customer experience together with the required platform, management tools, and integrations, using Shopify or a custom approach when it fits the agreed requirements.",
    ],
    idealFor: [
      "Brands launching or restructuring an online sales channel.",
      "Retailers that need product, order, inventory, payment, or shipping connections.",
      "Businesses whose catalogue or buying process needs more than a basic template setup.",
    ],
    deliverables: [
      "Store structure and product-discovery journeys",
      "Responsive storefront design and development",
      "Catalogue, collection, and product templates",
      "Checkout and payment-provider configuration",
      "Order, inventory, and shipping integrations where supported",
      "Store administration and analytics configuration",
    ],
    planningPoints: [
      "Product data, variants, pricing, markets, and fulfilment rules.",
      "Platform limits and fees for payments, applications, and third-party services.",
      "Which team manages content, orders, stock, and support after launch.",
    ],
  },
  {
    slug: "websites-landing-pages",
    name: "Websites and Landing Pages",
    shortName: "Websites",
    eyebrow: "Clear public-facing experiences",
    summary:
      "Fast, accessible websites that explain a business clearly, support the intended visitor journey, and give the team an appropriate way to manage content.",
    metaDescription:
      "Corporate websites and landing pages with clear information architecture, responsive design, content management, forms, and technical SEO foundations.",
    problemHeading: "Give customers a clear path from first visit to next step",
    problem: [
      "A website can create confusion when its structure reflects internal terminology instead of the questions visitors arrive with.",
      "BuiltIt combines content structure, interface design, and development around the site’s actual purpose—whether that is explaining services, presenting work, supporting a campaign, or collecting qualified enquiries.",
    ],
    idealFor: [
      "Companies that need a credible corporate or service website.",
      "Brands preparing a campaign, launch, or focused landing page.",
      "Teams that need a manageable multilingual or content-led website.",
    ],
    deliverables: [
      "Information architecture and page planning",
      "Responsive interface design and front-end development",
      "Content-management setup where required",
      "Accessible forms and enquiry journeys",
      "Technical SEO and social-sharing foundations",
      "Analytics or marketing integrations where scoped",
    ],
    planningPoints: [
      "The audiences, questions, and primary action for each page.",
      "Who supplies, approves, and maintains copy, images, and translations.",
      "Hosting, domain, analytics, consent, and integration requirements.",
    ],
  },
  {
    slug: "ui-ux-product-design",
    name: "UI/UX and Product Design",
    shortName: "UI/UX Design",
    eyebrow: "Product clarity before code",
    summary:
      "User journeys, wireframes, prototypes, interfaces, and design systems that make complex products easier to understand, validate, build, and maintain.",
    metaDescription:
      "UI/UX and product design for websites, applications, portals, dashboards, prototypes, and reusable interface systems.",
    problemHeading: "Resolve product decisions before they become expensive code",
    problem: [
      "Complex products become difficult to use when screens are designed one at a time without a shared understanding of users, tasks, information, and system states.",
      "A structured design phase can make the flow visible, test important decisions early, and create a consistent interface foundation for development.",
    ],
    idealFor: [
      "Teams shaping a new digital product before development.",
      "Existing products with confusing workflows or inconsistent interfaces.",
      "Development teams that need documented, reusable design guidance.",
    ],
    deliverables: [
      "Product discovery and user-flow mapping",
      "Information architecture and task journeys",
      "Low- or high-fidelity wireframes",
      "Interactive prototypes for agreed flows",
      "Responsive interface design",
      "Reusable components and design-system documentation",
    ],
    planningPoints: [
      "The users, tasks, constraints, and evidence available for decisions.",
      "Which flows need validation and what form that validation should take.",
      "The technical platform and handoff needs of the implementation team.",
    ],
  },
  {
    slug: "integrations-workflow-automation",
    name: "Integrations and Workflow Automation",
    shortName: "Integrations",
    eyebrow: "Connected tools and data",
    summary:
      "Purpose-built connections and automations that move agreed information between systems, trigger routine actions, and reduce avoidable manual handling.",
    metaDescription:
      "System integrations and workflow automation for APIs, data synchronisation, notifications, approvals, operational triggers, and monitoring.",
    problemHeading: "Reduce repetitive handoffs between disconnected tools",
    problem: [
      "Teams lose time and context when the same data is copied between systems or a routine next step depends on someone noticing and sending it manually.",
      "An integration or automation can connect defined events and actions while preserving appropriate validation, permissions, monitoring, and ways to resolve exceptions.",
    ],
    idealFor: [
      "Businesses re-entering the same information in several systems.",
      "Teams with repeatable notifications, approvals, or document workflows.",
      "Products that need to exchange data with supported payment, messaging, shipping, or business services.",
    ],
    deliverables: [
      "System and data-flow mapping",
      "API or webhook integrations",
      "Scheduled or event-driven automations",
      "Validation, permissions, and exception handling",
      "Operational logs or monitoring views",
      "Configuration and handover documentation",
    ],
    planningPoints: [
      "Whether each service offers a suitable, stable, and authorised interface.",
      "Which system owns each record and how conflicting data is handled.",
      "Usage limits, provider fees, failure states, and manual fallback processes.",
    ],
  },
  {
    slug: "analytics-reporting-dashboards",
    name: "Analytics and Reporting Dashboards",
    shortName: "Analytics",
    eyebrow: "Useful operational visibility",
    summary:
      "Role-appropriate dashboards and reporting tools that organise agreed data into understandable measures, filters, comparisons, and operational views.",
    metaDescription:
      "Analytics and reporting dashboards for agreed KPIs, operational data, role-based views, filters, exports, and management reporting.",
    problemHeading: "Turn available data into information people can act on",
    problem: [
      "More data does not automatically create better decisions. Reports become unreliable when measures are defined differently, source records are incomplete, or every audience receives the same view.",
      "BuiltIt works from agreed definitions and available data sources to design reporting around the questions each role needs to answer.",
    ],
    idealFor: [
      "Management teams consolidating operational information from defined sources.",
      "Departments that need repeatable reporting with consistent measures.",
      "Digital products that require customer, employee, or administrator dashboards.",
    ],
    deliverables: [
      "KPI and reporting-requirement definition",
      "Data-source and field mapping",
      "Dashboard information architecture and design",
      "Role-based views, filters, and comparisons",
      "Export or scheduled-report functions where scoped",
      "Data validation and reporting documentation",
    ],
    planningPoints: [
      "How each measure is defined and which source is authoritative.",
      "Data quality, update frequency, privacy, and access requirements.",
      "The decisions each dashboard should support—not only the charts it displays.",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
