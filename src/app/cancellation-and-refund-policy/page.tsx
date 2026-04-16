import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cancellation & Refund Policy - BioFusion" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Cancellation & Refund Policy" lastUpdated="January 1, 2026">
      <h2 className="text-xl font-bold mt-8">Satisfaction Guarantee</h2>
      <p>
        At BioFusion, we stand behind the quality of our services. We want you
        to be completely satisfied with your experience.
      </p>

      <h2 className="text-xl font-bold mt-8">Cancellation Policy</h2>
      <p>
        You may cancel your subscription at any time by contacting our support
        team. Cancellations will take effect at the end of your current billing
        period. No refunds are provided for partial billing periods.
      </p>

      <h2 className="text-xl font-bold mt-8">Refund Policy</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Consultation Fees:</strong> Consultation fees are
          non-refundable once a medical consultation has been completed.
        </li>
        <li>
          <strong>Medication:</strong> Due to safety regulations, medications
          that have been dispensed and shipped cannot be returned or refunded.
        </li>
        <li>
          <strong>Unshipped Orders:</strong> Orders that have not yet been
          shipped may be eligible for a full refund.
        </li>
        <li>
          <strong>Damaged Products:</strong> If you receive a damaged product,
          please contact us within 48 hours for a replacement or refund.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">How to Request a Refund</h2>
      <p>
        To request a cancellation or refund, please contact our support team at
        support@biofusion.co or call (833) 246-3874. Please include your order
        number and reason for the request.
      </p>

      <h2 className="text-xl font-bold mt-8">Processing Time</h2>
      <p>
        Approved refunds will be processed within 5-10 business days and
        credited to the original payment method.
      </p>
    </LegalPage>
  );
}
