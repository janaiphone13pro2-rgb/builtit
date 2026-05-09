import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuiltIt | Custom Software, Fully Owned",
  description:
    "Custom websites, apps, ERP, and CRM systems built for one-time payment, full ownership, and no subscriptions.",
  keywords: [
    "web development",
    "ecommerce",
    "ERP",
    "CRM",
    "Next.js",
    "software agency",
    "Cairo",
    "Egypt",
    "web design",
  ],
  openGraph: {
    title: "BuiltIt | Custom Software, Fully Owned",
    description:
      "One-time payment websites, apps, ERP, and CRM systems with full ownership and no subscriptions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${dmSans.variable}`}>
      <body className="bg-background text-foreground font-dm antialiased">{children}</body>
    </html>
  );
}
