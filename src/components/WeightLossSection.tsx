"use client";

import ProductSection from "./ProductSection";

export default function WeightLossSection() {
  return (
    <>
      <div className="py-8 bg-gradient-to-b from-white via-accent-green/30 to-white" />
      <ProductSection
        id="weight-loss"
        badge="Doctor-guided GLP-1 care"
        heading="Weight loss"
        headingAccent="made easy"
        headingRest="with personalized care"
        subheading="A smarter approach to weight loss, built around you"
        description="Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and right for your body. Personalized care plans, ongoing check-ins, and dedicated support—all in one place."
        ctaText="Get Started"
        ctaHref="#"
        features={[
          { text: "Prescription to fast, effective GLP-1" },
          { text: "1:1 physician guidance" },
          { text: "24/7 support" },
          { text: "Weight loss guarantee" },
          { text: "Fast & discreet shipping" },
        ]}
        featureTitle="Everything you need—included:"
        productImage="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=450&fit=crop"
        lifestyleImage1="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop"
        lifestyleImage2="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop"
        accentColor="#4FB2E4"
      />
      {/* Everything in one place + Unlimited support */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">
              <span className="text-brand">Everything,</span> all in one place
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Track your progress, check in with your provider, and manage your
              care in your all-in-one patient portal.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">
              <span className="text-brand">Unlimited</span> 24/7 support
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Medical support continues throughout your care, whenever you need
              it.
            </p>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto mt-8">
          <p className="text-xs text-muted/60 leading-relaxed">
            Prescriptions are issued only after an online consultation with an
            independent licensed provider. Compound medications are dispensed by
            state-licensed pharmacies but are not FDA approved.
          </p>
        </div>
      </div>
    </>
  );
}
