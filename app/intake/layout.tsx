import type { ReactNode } from "react";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Discuss Your Software Project | BuiltIt",
  description:
    "Tell BuiltIt about the website, application, e-commerce platform, or business system you need and receive a recommended next step.",
  path: "/intake",
  index: false,
});

export default function IntakeLayout({ children }: { children: ReactNode }) {
  return children;
}
