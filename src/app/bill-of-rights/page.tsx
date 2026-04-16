import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Patient Bill of Rights - BioFusion" };

export default function BillOfRightsPage() {
  return (
    <LegalPage title="Patient Bill of Rights" lastUpdated="January 1, 2026">
      <p>
        At BioFusion, we are committed to providing high-quality healthcare
        services while respecting your rights as a patient. As a BioFusion
        patient, you have the following rights:
      </p>

      <h2 className="text-xl font-bold mt-8">Your Rights</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>Right to Respectful Care:</strong> You have the right to
          considerate and respectful care regardless of age, race, ethnicity,
          religion, culture, language, physical or mental disability, sexual
          orientation, or gender identity.
        </li>
        <li>
          <strong>Right to Information:</strong> You have the right to receive
          complete and current information about your diagnosis, treatment, and
          prognosis in terms you can understand.
        </li>
        <li>
          <strong>Right to Informed Consent:</strong> You have the right to
          receive the information needed to give informed consent prior to the
          start of any procedure or treatment.
        </li>
        <li>
          <strong>Right to Refuse Treatment:</strong> You have the right to
          refuse treatment to the extent permitted by law and to be informed of
          the medical consequences of your decision.
        </li>
        <li>
          <strong>Right to Privacy:</strong> You have the right to every
          consideration of privacy concerning your medical care and personal
          health information.
        </li>
        <li>
          <strong>Right to Confidentiality:</strong> You have the right to
          expect that all communications and records pertaining to your care
          will be treated as confidential.
        </li>
        <li>
          <strong>Right to Continuity of Care:</strong> You have the right to
          expect reasonable continuity of care and to be informed of available
          and realistic care options.
        </li>
        <li>
          <strong>Right to Voice Grievances:</strong> You have the right to
          express complaints and have them reviewed and, when possible,
          resolved.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Your Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-3">
        <li>Provide accurate and complete health information</li>
        <li>Follow the treatment plan recommended by your provider</li>
        <li>Ask questions when you do not understand your care</li>
        <li>Treat healthcare personnel with respect and consideration</li>
        <li>Meet financial obligations associated with your care</li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Contact Us</h2>
      <p>
        If you have questions about your rights or wish to file a complaint,
        contact us at support@biofusion.co or call (833) 246-3874.
      </p>
    </LegalPage>
  );
}
