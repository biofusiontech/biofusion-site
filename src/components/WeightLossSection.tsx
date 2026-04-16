"use client";

import ProductSection from "./ProductSection";

export default function WeightLossSection() {
  return (
    <>
      <ProductSection
        id="weight-loss"
        badge="Doctor-guided GLP-1 care"
        headingMain="Weight loss"
        headingAccent="made easy"
        headingTail="with personalized care"
        subheading="A smarter approach to weight loss, built around you"
        description="Find the right GLP-1 medication with the confidence that comes from knowing it is doctor-approved and right for your body. Personalized care plans, ongoing check-ins, and dedicated support—all in one place."
        ctaText="Get Started"
        ctaHref="#"
        features={[
          "Prescription to fast, effective GLP-1",
          "1:1 physician guidance",
          "24/7 support",
          "Weight loss guarantee",
          "Fast & discreet shipping",
        ]}
        featureTitle="Everything you need—included:"
        productImage="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&h=560&fit=crop"
        productBg="#F2F8F4"
        lifestyleImage1="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=440&h=580&fit=crop"
        lifestyleImage2="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=440&h=580&fit=crop"
        tintClass="bg-radial-tint-sage"
        accentColor="#3FA572"
        accentCheckBg="#3FA572"
      />

      {/* Sub-callout: Everything in one place + Unlimited support */}
      <section className="py-20 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[28px] font-semibold leading-tight mb-4">
              <span className="font-italic-accent text-brand">Everything</span>,
              all in one place
            </h3>
            <p className="text-ink-muted text-[15px] leading-relaxed">
              Track your progress, check in with your provider, and manage your
              care in your all-in-one patient portal.
            </p>
          </div>
          <div>
            <h3 className="text-[28px] font-semibold leading-tight mb-4">
              <span className="font-italic-accent text-brand">Unlimited</span>{" "}
              24/7 support
            </h3>
            <p className="text-ink-muted text-[15px] leading-relaxed">
              Medical support continues throughout your care, whenever you need
              it.
            </p>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto mt-16">
          <p className="text-[11px] text-ink-mute2 leading-relaxed">
            Prescriptions are issued only after an online consultation with an
            independent licensed provider. Compound medications are dispensed by
            state-licensed pharmacies but are not FDA approved.
          </p>
        </div>
      </section>
    </>
  );
}
