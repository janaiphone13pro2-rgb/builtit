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
  title: "BuiltIt | We Build Digital Presence That Converts",
  description:
    "Portfolios. Storefronts. Digital CVs. Built for the Egyptian market. No subscriptions. Just results.",
  keywords: [
    "web development",
    "ecommerce",
    "portfolio",
    "digital CV",
    "Cairo",
    "Egypt",
    "web design",
  ],
  openGraph: {
    title: "BuiltIt | We Build Digital Presence That Converts",
    description: "Portfolios. Storefronts. Digital CVs. Built for the Egyptian market.",
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
