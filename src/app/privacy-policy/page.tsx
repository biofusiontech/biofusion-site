import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Policy - BioFusion" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="January 1, 2026">
      <h2 className="text-xl font-bold mt-8">Introduction</h2>
      <p>
        BioFusion (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
        committed to protecting your privacy. This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you visit
        our website and use our services.
      </p>

      <h2 className="text-xl font-bold mt-8">Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Personal identification information (name, email address, phone
          number, date of birth, address)
        </li>
        <li>Health and medical information provided during consultations</li>
        <li>Payment and billing information</li>
        <li>
          Device and usage information (IP address, browser type, pages visited)
        </li>
        <li>
          Communication records between you and our healthcare providers or
          support team
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To provide and manage healthcare services</li>
        <li>To process prescriptions and deliver medications</li>
        <li>To communicate with you about your care</li>
        <li>To process payments</li>
        <li>To improve our services</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>

      <h2 className="text-xl font-bold mt-8">
        How We Protect Your Information
      </h2>
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal and health information. All health data is
        handled in compliance with applicable healthcare privacy regulations.
      </p>

      <h2 className="text-xl font-bold mt-8">Third-Party Sharing</h2>
      <p>
        We may share your information with licensed healthcare providers,
        pharmacy partners, payment processors, and as required by law. We do not
        sell your personal information to third parties for marketing purposes.
      </p>

      <h2 className="text-xl font-bold mt-8">Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal
        information. You may also opt out of marketing communications at any
        time by contacting us.
      </p>

      <h2 className="text-xl font-bold mt-8">Contact Us</h2>
      <p>
        For questions about this Privacy Policy, please contact us at
        support@biofusion.co or call (833) 246-3874.
      </p>
    </LegalPage>
  );
}
