import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Boxes,
  CalendarDays,
  HeartHandshake,
  Plug,
  ReceiptText,
  ShoppingCart,
  Users,
} from "lucide-react";

export type SystemModuleId =
  | "inventory"
  | "crm"
  | "sales-finance"
  | "finance-invoicing"
  | "hr-teams"
  | "bookings-operations"
  | "integrations"
  | "analytics-reporting";

export type SystemModule = {
  id: SystemModuleId;
  label: string;
  eyebrow: string;
  headline: string;
  description: string;
  capabilities: readonly string[];
  icon: LucideIcon;
};

export const systemModules: readonly SystemModule[] = [
  {
    id: "inventory",
    label: "Inventory",
    eyebrow: "Inventory and Warehouses",
    headline: "Know What Is in Stock—and Where.",
    description:
      "Track products, stock levels, suppliers, purchase orders, and movements across every location from one reliable view.",
    capabilities: [
      "Multi-location stock control",
      "Low-stock and reorder alerts",
      "Purchase orders and suppliers",
      "Complete stock-movement history",
    ],
    icon: Boxes,
  },
  {
    id: "crm",
    label: "CRM",
    eyebrow: "CRM and Customer Relationships",
    headline: "Turn Every Enquiry Into a Clear Next Step.",
    description:
      "Keep leads, customer details, conversations, opportunities, and follow-ups together so the whole team knows what happens next.",
    capabilities: [
      "Custom sales pipelines",
      "Unified customer profiles",
      "Follow-up tasks and reminders",
      "Quotation and activity history",
    ],
    icon: HeartHandshake,
  },
  {
    id: "sales-finance",
    label: "Sales and Finance",
    eyebrow: "Sales and Commercial Performance",
    headline: "Connect Orders With the Numbers Behind Them.",
    description:
      "Follow sales activity, revenue, margins, payments, and channel performance without reconciling disconnected reports.",
    capabilities: [
      "Orders and quotation tracking",
      "Revenue and margin summaries",
      "Payment and expense visibility",
      "Channel and branch comparisons",
    ],
    icon: ShoppingCart,
  },
  {
    id: "finance-invoicing",
    label: "Finance and Invoicing",
    eyebrow: "Finance and Invoicing",
    headline: "Professional Invoicing Made Simple.",
    description:
      "Create, send, and track invoices from one platform. Monitor paid, pending, and overdue payments with clear financial visibility.",
    capabilities: [
      "Custom invoices and quotations",
      "Payment-status tracking",
      "Automated payment reminders",
      "Multi-currency support",
      "Financial reports",
    ],
    icon: ReceiptText,
  },
  {
    id: "hr-teams",
    label: "HR and Teams",
    eyebrow: "People and Team Operations",
    headline: "Give Your Team One Organized Workspace.",
    description:
      "Manage employee records, attendance, leave, documents, roles, and internal requests through workflows your people can actually follow.",
    capabilities: [
      "Employee records and documents",
      "Attendance and leave management",
      "Roles and approval workflows",
      "Team capacity and task visibility",
    ],
    icon: Users,
  },
  {
    id: "bookings-operations",
    label: "Bookings and Operations",
    eyebrow: "Bookings and Daily Operations",
    headline: "Keep Schedules, Resources, and Work in Sync.",
    description:
      "Coordinate appointments, service capacity, projects, tasks, and daily handovers from one operational command centre.",
    capabilities: [
      "Live appointment scheduling",
      "Staff and resource allocation",
      "Task and service-status tracking",
      "Automated customer notifications",
    ],
    icon: CalendarDays,
  },
  {
    id: "integrations",
    label: "Integrations",
    eyebrow: "Integrations and Automation",
    headline: "Make Your Existing Tools Work Together.",
    description:
      "Connect the services your business already relies on, then automate handoffs so information moves without repetitive data entry.",
    capabilities: [
      "Payments and accounting connections",
      "WhatsApp and email workflows",
      "Shipping and fulfilment updates",
      "Secure API and webhook automation",
    ],
    icon: Plug,
  },
  {
    id: "analytics-reporting",
    label: "Analytics and Reporting",
    eyebrow: "Analytics and Management Reporting",
    headline: "Turn Live Data Into Decisions.",
    description:
      "Bring operational and commercial data into clear dashboards, scheduled reports, and KPIs shaped around how your team measures progress.",
    capabilities: [
      "Role-specific KPI dashboards",
      "Custom filters and drill-downs",
      "Scheduled management reports",
      "Export-ready operational data",
    ],
    icon: BarChart3,
  },
] as const;
