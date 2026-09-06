import { handleProjectEnquiry } from "@/lib/server/project-enquiry";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleProjectEnquiry(request, "homepage");
}
