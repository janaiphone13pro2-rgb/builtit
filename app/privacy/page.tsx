import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import {
  createBreadcrumbSchema,
  createPageMetadata,
  siteConfig,
} from "@/lib/site";

const title = "Privacy Policy | BuiltIt";
const description =
  "Learn what information BuiltIt collects through its website and project enquiries, why it is used, and the choices available to you.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/privacy",
});

const sections = [
  { id: "who-we-are", label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use-information", label: "How we use information" },
  { id: "legal-bases", label: "Legal bases" },
  { id: "sharing", label: "How information is shared" },
  { id: "retention", label: "How long we keep information" },
  { id: "international", label: "International processing" },
  { id: "security", label: "Security" },
  { id: "your-rights", label: "Your choices and rights" },
  { id: "third-party-links", label: "Third-party links" },
  { id: "children", label: "Children’s privacy" },
  { id: "changes", label: "Changes to this policy" },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
]);

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <LegalPage
        eyebrow="Privacy"
        title="Privacy Policy"
        summary="This policy explains how BuiltIt handles information submitted through this website, including project enquiries and related communications."
        sections={sections}
      >
        <LegalSection id="who-we-are" title="Who we are">
          <p>
            BuiltIt provides software design and development services through{" "}
            <a
              href={`${siteConfig.url}/`}
              className="text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
            >
              builtit.net
            </a>
            . BuiltIt is responsible for the personal information it receives through this
            website and through direct project communications.
          </p>
        </LegalSection>

        <LegalSection id="information-we-collect" title="Information we collect">
          <p>We may collect information you choose to provide, including:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-lime">
            <li>Your name, work email, phone or WhatsApp number, and company name.</li>
            <li>
              Project details such as the type of work, estimated budget, preferred launch
              date, requirements, and meeting preferences.
            </li>
            <li>Messages, files, and other information you send during an enquiry.</li>
          </ul>
          <p>
            Our hosting and security providers may also process routine technical records,
            such as IP address, browser and device information, requested pages, and request
            times. These records help deliver, secure, and troubleshoot the website.
          </p>
          <p>
            The website may use storage or cookies that are necessary for security or a
            feature you request. BuiltIt does not sell personal information or use it for
            third-party targeted advertising.
          </p>
        </LegalSection>

        <LegalSection id="how-we-use-information" title="How we use information">
          <p>We use information when reasonably necessary to:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-lime">
            <li>Review and respond to project enquiries.</li>
            <li>Arrange meetings and prepare an appropriate scope or proposal.</li>
            <li>Deliver agreed services and communicate about active work.</li>
            <li>Operate, protect, maintain, and improve the website.</li>
            <li>Keep business records and meet legal or regulatory obligations.</li>
            <li>Prevent fraud, spam, abuse, and security incidents.</li>
          </ul>
        </LegalSection>

        <LegalSection id="legal-bases" title="Legal bases">
          <p>
            Where data-protection law requires a legal basis, the basis depends on the
            context. It may be your request for steps before entering a contract, performance
            of a contract, BuiltIt&apos;s legitimate interest in operating and securing its
            services, compliance with a legal obligation, or consent where consent is
            specifically requested. You may withdraw consent at any time, without affecting
            earlier lawful processing.
          </p>
        </LegalSection>

        <LegalSection id="sharing" title="How information is shared">
          <p>
            We may share only the information needed with providers that support website
            hosting, security, email delivery, scheduling, project delivery, or other
            requested functionality. These providers process information for the relevant
            service and under their applicable terms.
          </p>
          <p>
            We may also disclose information when required by law, to protect legal rights or
            safety, or in connection with a business reorganisation. We do not publish project
            details, testimonials, or client materials without appropriate permission.
          </p>
        </LegalSection>

        <LegalSection id="retention" title="How long we keep information">
          <p>
            We keep information only for as long as reasonably needed for the purpose for
            which it was collected, including responding to an enquiry, performing an
            agreement, maintaining necessary business records, resolving disputes, and
            meeting legal obligations. Retention periods vary with the information and the
            relationship. Information is deleted or anonymised when it is no longer needed,
            where reasonably possible.
          </p>
        </LegalSection>

        <LegalSection id="international" title="International processing">
          <p>
            Some technology providers may store or process information in a country other
            than your own. Where applicable law requires it, BuiltIt uses appropriate
            safeguards for those transfers or relies on another recognised transfer basis.
          </p>
        </LegalSection>

        <LegalSection id="security" title="Security">
          <p>
            We use reasonable technical and organisational measures intended to protect
            information from unauthorised access, alteration, loss, or misuse. No website,
            network, or storage method can be guaranteed completely secure, so please avoid
            sending secrets, passwords, payment-card details, or unnecessary sensitive
            information through a general project-enquiry form.
          </p>
        </LegalSection>

        <LegalSection id="your-rights" title="Your choices and rights">
          <p>
            Depending on where you live, you may have rights to request access, correction,
            deletion, restriction, objection, or portability of personal information. You may
            also have the right to complain to your local data-protection authority.
          </p>
          <p>
            To make a request, email{" "}
            <a
              href={`mailto:${siteConfig.email}?subject=Privacy%20request`}
              className="text-lime underline decoration-lime/40 underline-offset-4 hover:decoration-lime"
            >
              {siteConfig.email}
            </a>
            . We may need to verify your identity before acting on a request. Some information
            may need to be retained when the law permits or requires it.
          </p>
        </LegalSection>

        <LegalSection id="third-party-links" title="Third-party links">
          <p>
            This website links to client websites and other third-party services. Their
            privacy practices are controlled by them, not by BuiltIt. Review their policies
            before providing personal information.
          </p>
        </LegalSection>

        <LegalSection id="children" title="Children’s privacy">
          <p>
            BuiltIt&apos;s business services and project-enquiry forms are not directed to
            children. If you believe a child has provided personal information without
            appropriate permission, contact us so we can review and address it.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="Changes to this policy">
          <p>
            We may update this policy when the website, our practices, or legal requirements
            change. The effective date at the top of this page shows when this version took
            effect. Material changes will be presented on this page or through another
            appropriate notice.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  );
}
