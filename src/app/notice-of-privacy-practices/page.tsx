import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Notice of Privacy Practices - BioFusion" };

export default function PrivacyPracticesPage() {
  return (
    <LegalPage title="Notice of Privacy Practices" lastUpdated="January 1, 2026">
      <p>
        This notice describes how medical information about you may be used and
        disclosed and how you can get access to this information. Please review
        it carefully.
      </p>

      <h2 className="text-xl font-bold mt-8">Our Obligations</h2>
      <p>
        We are required by law to maintain the privacy of your protected health
        information (PHI), provide you with this notice of our legal duties and
        privacy practices, and follow the terms of the notice currently in
        effect.
      </p>

      <h2 className="text-xl font-bold mt-8">
        How We May Use and Disclose Your PHI
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Treatment:</strong> We may use or disclose your PHI to
          provide, coordinate, or manage your healthcare and related services.
        </li>
        <li>
          <strong>Payment:</strong> We may use or disclose your PHI to bill and
          collect payment for your treatment and services.
        </li>
        <li>
          <strong>Healthcare Operations:</strong> We may use or disclose your
          PHI for our healthcare operations, including quality improvement and
          training.
        </li>
        <li>
          <strong>As Required by Law:</strong> We may disclose your PHI when
          required by federal, state, or local law.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Your Rights</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Right to inspect and copy your PHI</li>
        <li>Right to request amendments to your PHI</li>
        <li>Right to an accounting of disclosures</li>
        <li>Right to request restrictions on certain uses</li>
        <li>Right to request confidential communications</li>
        <li>Right to receive a paper copy of this notice</li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Contact Us</h2>
      <p>
        For questions or to exercise your rights, contact our Privacy Officer at
        support@biofusion.co or call (833) 246-3874.
      </p>
    </LegalPage>
  );
}
