"use client";

import ProductSection from "./ProductSection";

export default function MensHealthSection() {
  return (
    <ProductSection
      id="mens-health"
      badge="Care for energy, hormones, and performance"
      headingMain="Men's healthcare, built for men who"
      headingAccent="expect more"
      headingTail=""
      subheading="Care designed to help you feel stronger, sharper, and more in control"
      description="Doctor-guided care for hormones, energy, and performance, with treatment plans tailored to your goals and lifestyle."
      ctaText="Get Started"
      ctaHref="#"
      features={[
        "Physical performance",
        "Hormone balance",
        "Energy levels",
        "Mental focus",
        "Fast & discreet shipping",
      ]}
      featureTitle="Benefits that make a difference"
      productImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&h=560&fit=crop"
      productBg="#F1F8FD"
      lifestyleImage1="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-blue"
      accentColor="#0F3A5F"
      accentCheckBg="#4FB2E4"
    />
  );
}
