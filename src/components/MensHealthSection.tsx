"use client";

import ProductSection from "./ProductSection";

export default function MensHealthSection() {
  return (
    <ProductSection
      id="mens-health"
      badge="Care for energy, hormones, and performance"
      heading="Men's healthcare, built for men who"
      headingAccent="expect more"
      subheading="Care designed to help you feel stronger, sharper, and more in control"
      description="Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and lifestyle."
      ctaText="Get Started"
      ctaHref="#"
      features={[
        { text: "Physical performance" },
        { text: "Hormone balance" },
        { text: "Energy levels" },
        { text: "Mental focus" },
        { text: "Fast & discreet shipping" },
      ]}
      featureTitle="Benefits that make a difference"
      productImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop"
      accentColor="#4FB2E4"
    />
  );
}
