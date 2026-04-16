"use client";

import ProductSection from "./ProductSection";

export default function SupplementsSection() {
  return (
    <>
      <ProductSection
        id="supplements"
        badge="Purpose-driven supplementation"
        heading="Supplements with the"
        headingAccent="power to boost"
        headingRest="real results"
        subheading="Support that helps you feel better over time"
        description="Doctor-designed formulas made with quality ingredients and evidence-based dosing to support your body day after day."
        ctaText="Coming Soon"
        features={[
          { text: "Clean, transparent ingredients" },
          { text: "Built to support daily health" },
          { text: "Evidence-based dosing" },
          { text: "Doctor-formulated blends" },
          { text: "High-quality sourcing" },
        ]}
        featureTitle="What better support looks like"
        productImage="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=450&fit=crop"
        lifestyleImage1="https://images.unsplash.com/photo-1505576399279-0d06b2407cb5?w=400&h=500&fit=crop"
        lifestyleImage2="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop"
        bgColor="bg-gradient-to-b from-brand-bg/30 to-white"
        accentColor="#6B9EC4"
        reversed
      />
      {/* Supplement callout card */}
      <div className="bg-white py-8 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=350&fit=crop"
                alt="Supplements"
                className="rounded-2xl w-full max-w-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold leading-snug">
                Doctor-formulated blends designed to support how your body works
                best.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
