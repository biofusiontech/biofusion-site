"use client";

import ProductSection from "./ProductSection";

export default function WomensHealthSection() {
  return (
    <ProductSection
      id="womens-health"
      badge="Care designed for women's health"
      headingMain="Whole-body"
      headingAccent="care for her"
      headingTail="balance, vitality, and confidence"
      subheading="Support that evolves with your body"
      description="Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support how your body changes over time."
      ctaText="Coming Soon"
      comingSoon
      features={[
        "Hormone balance",
        "Healthy weight management",
        "Hair strength & growth support",
        "Skin health & radiance",
        "Fast & discreet shipping",
      ]}
      featureTitle="Benefits that support every stage"
      productImage="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=700&h=560&fit=crop"
      productBg="#FBF0F2"
      lifestyleImage1="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-rose"
      accentColor="#C97B8B"
      accentCheckBg="#C97B8B"
      reversed
    />
  );
}
