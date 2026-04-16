"use client";

import ProductSection from "./ProductSection";

export default function WomensHealthSection() {
  return (
    <ProductSection
      id="womens-health"
      badge="Care Designed for Women's Health"
      heading="Whole-body"
      headingAccent="care for her"
      headingRest="balance, vitality, and confidence"
      subheading="Support that evolves with your body"
      description="Doctor-guided care for weight, hormones, hair, and skin, with personalized treatment plans designed to support how your body changes over time."
      ctaText="Coming Soon"
      features={[
        { text: "Hormone balance" },
        { text: "Healthy weight management" },
        { text: "Hair strength & growth support" },
        { text: "Skin health & radiance" },
        { text: "Fast & discreet shipping" },
      ]}
      featureTitle="Benefits that support every stage"
      productImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop"
      bgColor="bg-accent-pink/30"
      accentColor="#C97B8B"
      reversed
    />
  );
}
