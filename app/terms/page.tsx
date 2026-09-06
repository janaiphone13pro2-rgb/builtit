import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  siteConfig,
} from "@/lib/site";

const title = "Website Terms | BuiltIt";
const description =
  "Read the terms that apply when you use the BuiltIt website or submit a project enquiry.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/terms",
});

const sections = [
  { id: "scope", label: "Scope of these terms" },
  { id: "website-use", label: "Using the website" },
  { id: "enquiries", label: "Enquiries and proposals" },
  { id: "project-terms", label: "Project agreements" },
  { id: "fees", label: "Fees and external costs" },
  { id: "ownership", label: "Ownership and licences" },
  { id: "client-materials", label: "Client materials" },
  { id: "third-party-services", label: "Third-party services" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "disclaimers", label: "Website disclaimers" },
  { id: "liability", label: "Responsibility and liability" },
  { id: "changes", label: "Changes and applicable terms" },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Website Terms", path: "/terms" },
]);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <LegalPage
        eyebrow="Legal"
        title="Website Terms"
        summary="These terms apply to your use of the BuiltIt website and its project-enquiry features. A separate written agreement governs any project we undertake."
        sections={sections}
      >
        <LegalSection id="scope" title="Scope of these terms">
          <p>
            These terms apply when you visit builtit.net, view its content, follow portfolio
            links, or submit an enquiry. By using the website, you agree to use it lawfully and
            in line with these terms. If you do not agree, please do not use the website.
          </p>
          <p>
            These website terms do not replace a proposal, statement of work, service
            agreement, or other contract signed for a BuiltIt project. If those documents
            conflict with these terms, the signed project documents control for that project.
          </p>
        </LegalSection>

        <LegalSection id="website-use" title="Using the website">
          <p>You may use the website to learn about BuiltIt and enquire about services. You must not:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-lime">
            <li>Attempt to gain unauthorised access to the website or connected systems.</li>
            <li>Interfere with operation, security, or availability.</li>
            <li>Submit malicious code, spam, unlawful material, or another person&apos;s data without authority.</li>
            <li>Copy, scrape, or reuse website content in a way that violates applicable rights or law.</li>
            <li>Misrepresent your identity or your authority to act for a business.</li>
          </ul>
        </LegalSection>

        <LegalSection id="enquiries" title="Enquiries and proposals">
          <p>
            Submitting an enquiry or selecting a preferred meeting time does not create a
            contract, reserve development capacity, guarantee availability, or oblige either
            party to proceed. BuiltIt may ask for more information before recommending a
            scope, timeline, or next step.
          </p>
          <p>
            Website descriptions are general information, not a fixed offer or guarantee.
            Project details become binding only when the relevant parties accept a written
            agreement that identifies the work and commercial terms.
          </p>
        </LegalSection>

        <LegalSection id="project-terms" title="Project agreements">
          <p>
            Each project should be governed by written terms covering the agreed scope,
            deliverables, responsibilities, approvals, timeline, fees, payment schedule,
            change requests, acceptance, handover, support, and any project-specific privacy
            or security requirements. Work outside the agreed scope may require a revised
            timeline and additional fees, confirmed before that work begins.
          </p>
        </LegalSection>

        <LegalSection id="fees" title="Fees and external costs">
          <p>
            BuiltIt&apos;s proposal will explain its project fees and payment schedule. Unless a
            written agreement says otherwise, estimates are not final prices and may change
            when requirements change or previously unknown work is identified.
          </p>
          <p>
            There is no compulsory recurring BuiltIt software licence for custom work handed
            over under an agreed project scope. Hosting, domains, maintenance, paid APIs,
            payment gateways, app stores, and other third-party platforms may have separate
            recurring or usage-based costs. The applicable proposal should identify expected
            external costs known at the time.
          </p>
        </LegalSection>

        <LegalSection id="ownership" title="Ownership and licences">
          <p>
            Ownership is determined by the signed project agreement. When the agreement
            provides for source-code and design-asset handover, the specified rights transfer
            after any stated conditions—such as full payment—have been met.
          </p>
          <p>
            Pre-existing tools, reusable know-how, open-source software, fonts, stock assets,
            platform components, and other third-party materials remain subject to their own
            ownership and licence terms. A project agreement may grant a licence to necessary
            BuiltIt materials that are not transferred outright.
          </p>
          <p>
            The BuiltIt name, logo, website design, and original website content remain
            protected by applicable intellectual-property laws. No rights are granted except
            those needed for ordinary use of this website.
          </p>
        </LegalSection>

        <LegalSection id="client-materials" title="Client materials">
          <p>
            If you provide copy, logos, images, data, code, credentials, or other materials,
            you confirm that you are authorised to provide and use them for the requested
            work. You remain responsible for their accuracy, legality, and required licences.
            Do not send production passwords, payment-card data, or unnecessary sensitive
            information through a general enquiry form.
          </p>
        </LegalSection>

        <LegalSection id="third-party-services" title="Third-party services and links">
          <p>
            Projects and this website may connect or link to third-party services. Those
            services are operated under their own terms, pricing, availability, security, and
            privacy practices. BuiltIt does not control and cannot guarantee a third party&apos;s
            continued operation or future changes. Integration responsibilities should be
            defined in the project agreement.
          </p>
        </LegalSection>

        <LegalSection id="confidentiality" title="Confidentiality">
          <p>
            Please mark confidential information clearly and share only what is necessary at
            the enquiry stage. Any formal confidentiality obligations, permitted disclosures,
            and security requirements for a project must be set out in a separate written
            agreement. Portfolio publication, testimonials, and disclosure of client work
            require appropriate permission.
          </p>
        </LegalSection>

        <LegalSection id="disclaimers" title="Website disclaimers">
          <p>
            BuiltIt aims to keep the website accurate and available, but content may become
            outdated and access may occasionally be interrupted. Portfolio links may change
            after a project is handed over because third parties or clients control those
            websites. Nothing on this site is legal, financial, tax, or security advice.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="Responsibility and liability">
          <p>
            To the extent permitted by applicable law, use of this website is at your own risk
            and BuiltIt is not responsible for loss caused solely by reliance on general
            website information or by third-party websites outside its control. Liability for
            project services is governed by the applicable signed agreement.
          </p>
          <p>
            Nothing in these terms excludes or limits a right, remedy, warranty, or liability
            that applicable law does not allow to be excluded or limited.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes and applicable terms">
          <p>
            BuiltIt may update these website terms when its services, website, or legal
            obligations change. The effective date shows when the current version took
            effect. Governing-law and dispute provisions for paid work will be stated in the
            applicable project agreement; otherwise, mandatory rules that apply to your use
            of the website remain in effect.
          </p>
          <p>
            Questions may be sent to{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=Website%20terms`}
              className="text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
