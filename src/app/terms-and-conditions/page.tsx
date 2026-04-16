import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions - BioFusion" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="January 1, 2026">
      <h2 className="text-xl font-bold mt-8">1. Acceptance of Terms</h2>
      <p>
        By accessing and using the BioFusion website and services, you accept
        and agree to be bound by these Terms and Conditions. If you do not agree
        to these terms, please do not use our services.
      </p>

      <h2 className="text-xl font-bold mt-8">2. Services Description</h2>
      <p>
        BioFusion provides an online telehealth platform connecting patients
        with licensed healthcare providers. Our services include online medical
        consultations, prescription management, and delivery of prescribed
        medications and wellness products.
      </p>

      <h2 className="text-xl font-bold mt-8">3. Eligibility</h2>
      <p>
        You must be at least 18 years of age and a resident of the United States
        to use our services. By using our services, you represent and warrant
        that you meet these eligibility requirements.
      </p>

      <h2 className="text-xl font-bold mt-8">4. Medical Disclaimers</h2>
      <p>
        BioFusion does not provide emergency medical services. If you are
        experiencing a medical emergency, please call 911 or go to your nearest
        emergency room. The information provided through our platform is not
        intended to replace the advice of your personal physician or other
        qualified healthcare provider.
      </p>

      <h2 className="text-xl font-bold mt-8">5. Prescriptions</h2>
      <p>
        All prescriptions are issued at the sole discretion of the treating
        licensed healthcare provider after an appropriate medical consultation.
        BioFusion does not guarantee that a prescription will be issued.
        Compound medications are dispensed by state-licensed pharmacies.
      </p>

      <h2 className="text-xl font-bold mt-8">6. Payment Terms</h2>
      <p>
        Payment is required at the time of service. All fees are clearly
        disclosed before purchase. Subscription services will automatically
        renew unless cancelled before the renewal date.
      </p>

      <h2 className="text-xl font-bold mt-8">7. Privacy</h2>
      <p>
        Your use of our services is also governed by our Privacy Policy. Please
        review our Privacy Policy to understand our practices regarding your
        personal and health information.
      </p>

      <h2 className="text-xl font-bold mt-8">8. Intellectual Property</h2>
      <p>
        All content on the BioFusion website, including text, graphics, logos,
        and software, is the property of BioFusion and is protected by
        applicable intellectual property laws.
      </p>

      <h2 className="text-xl font-bold mt-8">9. Limitation of Liability</h2>
      <p>
        BioFusion shall not be liable for any indirect, incidental, special, or
        consequential damages arising from the use of our services. Our total
        liability shall not exceed the amount paid by you for the specific
        service giving rise to the claim.
      </p>

      <h2 className="text-xl font-bold mt-8">10. Changes to Terms</h2>
      <p>
        BioFusion reserves the right to modify these Terms at any time. Changes
        will be effective immediately upon posting. Your continued use of our
        services after any changes constitutes acceptance of the modified terms.
      </p>

      <h2 className="text-xl font-bold mt-8">11. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at
        support@biofusion.co or call (833) 246-3874.
      </p>
    </LegalPage>
  );
}
