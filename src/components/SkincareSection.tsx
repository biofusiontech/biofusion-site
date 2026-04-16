"use client";

import ProductSection from "./ProductSection";

export default function SkincareSection() {
  return (
    <ProductSection
      id="skincare"
      badge="Personalized care for healthier, clearer skin"
      headingMain=""
      headingAccent="Skincare"
      headingTail="that goes deeper than the surface"
      subheading="Skincare designed to treat the root cause—not just cover it up."
      description="From acne and aging to sensitivity and texture, every plan is built for real, visible improvement. Prescription-strength when needed, always personalized."
      ctaText="Coming Soon"
      comingSoon
      features={[
        "Clinician-guided tailored care",
        "Prescription-strength options",
        "Simple daily routines",
        "Visible skin results",
        "Personalized treatment plans",
      ]}
      featureTitle="Why our skincare works"
      productImage="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&h=560&fit=crop"
      productBg="#F5F1FB"
      lifestyleImage1="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-lavender"
      accentColor="#9B7FB8"
      accentCheckBg="#9B7FB8"
      reversed
    />
  );
}
