import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Medical Consent - BioFusion" };

export default function MedicalConsentPage() {
  return (
    <LegalPage title="Medical Consent" lastUpdated="January 1, 2026">
      <h2 className="text-xl font-bold mt-8">Informed Consent for Telehealth Services</h2>
      <p>
        By using BioFusion&apos;s telehealth services, you acknowledge and
        consent to the following:
      </p>

      <h2 className="text-xl font-bold mt-8">Nature of Telehealth</h2>
      <p>
        Telehealth involves the delivery of healthcare services using
        electronic communications, information technology, or other means
        between a healthcare provider and a patient who are not in the same
        physical location. This may include assessment, diagnosis, consultation,
        treatment, education, care management, and self-management of a
        patient.
      </p>

      <h2 className="text-xl font-bold mt-8">Benefits and Risks</h2>
      <p>
        Benefits may include improved access to medical care, convenience, and
        efficient medical evaluation. Risks may include delays in evaluation and
        treatment, the possibility of misdiagnosis due to inability to perform
        a physical examination, and technical failures.
      </p>

      <h2 className="text-xl font-bold mt-8">Your Responsibilities</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Provide accurate and complete health information</li>
        <li>Follow the prescribed treatment plan</li>
        <li>Report any adverse reactions to medications promptly</li>
        <li>Attend follow-up consultations as recommended</li>
        <li>
          Seek emergency medical care when necessary — call 911 for emergencies
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Prescriptions</h2>
      <p>
        Prescriptions are issued at the sole discretion of the treating
        healthcare provider. Not all patients will qualify for all treatments.
        Compound medications are dispensed by state-licensed pharmacies and are
        not FDA approved.
      </p>

      <h2 className="text-xl font-bold mt-8">Withdrawal of Consent</h2>
      <p>
        You may withdraw your consent to telehealth services at any time by
        contacting us at support@biofusion.co.
      </p>
    </LegalPage>
  );
}
