import type { Metadata } from "next";

export const siteConfig = {
  name: "BuiltIt",
  url: "https://www.builtit.net",
  email: "hello@builtit.net",
  title: "BuiltIt | Digital Systems You Own",
  description:
    "BuiltIt is a Cairo software studio building websites, commerce experiences, applications, and operational systems with a clear scope and handover.",
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  index?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  index = true,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: index
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: true,
        },
  };
}

export const organizationAndWebsiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: `${siteConfig.url}/`,
      email: siteConfig.email,
      description:
        "A software-development company creating websites, e-commerce platforms, web and mobile applications, and custom business systems.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

type BreadcrumbItem = {
  name: string;
  path: `/${string}` | "/";
};

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

type ServiceSchemaOptions = {
  name: string;
  description: string;
  path: `/${string}`;
  serviceType: string;
};

export function createServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${new URL(path, siteConfig.url).toString()}#service`,
    name,
    description,
    serviceType,
    url: new URL(path, siteConfig.url).toString(),
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
