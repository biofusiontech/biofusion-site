import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Privacy Statement for California Residents - BioFusion" };

export default function CaliforniaPrivacyPage() {
  return (
    <LegalPage title="Privacy Statement for California Residents" lastUpdated="January 1, 2026">
      <p>
        This supplemental privacy statement is provided pursuant to the
        California Consumer Privacy Act (CCPA) and the California Privacy Rights
        Act (CPRA), and applies solely to residents of the State of California.
      </p>

      <h2 className="text-xl font-bold mt-8">Categories of Personal Information Collected</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Identifiers (name, email, phone number, address)</li>
        <li>Commercial information (purchase history, account details)</li>
        <li>Internet or network activity (browsing history, device information)</li>
        <li>Professional or employment-related information</li>
        <li>Health and medical information</li>
        <li>Inferences drawn from collected information</li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Your California Rights</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Right to Know:</strong> You can request what personal
          information we have collected about you.
        </li>
        <li>
          <strong>Right to Delete:</strong> You can request deletion of your
          personal information, subject to certain exceptions.
        </li>
        <li>
          <strong>Right to Opt-Out:</strong> You can opt out of the sale or
          sharing of your personal information.
        </li>
        <li>
          <strong>Right to Non-Discrimination:</strong> We will not discriminate
          against you for exercising your privacy rights.
        </li>
        <li>
          <strong>Right to Correct:</strong> You can request correction of
          inaccurate personal information.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">Do Not Sell My Personal Information</h2>
      <p>
        BioFusion does not sell your personal information as defined by the CCPA/CPRA.
      </p>

      <h2 className="text-xl font-bold mt-8">How to Exercise Your Rights</h2>
      <p>
        To submit a request, contact us at support@biofusion.co or call
        (833) 246-3874. We will verify your identity before processing your
        request.
      </p>
    </LegalPage>
  );
}
