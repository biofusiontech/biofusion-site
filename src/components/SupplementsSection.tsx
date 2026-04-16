"use client";

import ProductSection from "./ProductSection";

export default function SupplementsSection() {
  return (
    <>
      <ProductSection
        id="supplements"
        badge="Purpose-driven supplementation"
        headingMain="Supplements with the"
        headingAccent="power to boost"
        headingTail="real results"
        subheading="Support that helps you feel better over time"
        description="Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day."
        ctaText="Coming Soon"
        comingSoon
        features={[
          "Clean, transparent ingredients",
          "Built to support daily health",
          "Evidence-based dosing",
          "Doctor-formulated blends",
          "High-quality sourcing",
        ]}
        featureTitle="What better support looks like"
        productImage="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&h=560&fit=crop"
        productBg="#F1F8FD"
        lifestyleImage1="https://images.unsplash.com/photo-1505576399279-0d06b2407cb5?w=440&h=580&fit=crop"
        lifestyleImage2="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=440&h=580&fit=crop"
        tintClass="bg-radial-tint-blue"
        accentColor="#5A8FB8"
        accentCheckBg="#5A8FB8"
        reversed
      />

      {/* Sub-callout card */}
      <section className="py-16 px-6">
        <div className="max-w-[1100px] mx-auto bg-[#F8FAFC] rounded-[32px] p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-[24px] overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=450&fit=crop"
              alt="Supplements"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-[24px] md:text-[28px] font-semibold leading-snug">
            Doctor-formulated blends designed to support how your body works
            best.
          </h3>
        </div>
      </section>
    </>
  );
}
