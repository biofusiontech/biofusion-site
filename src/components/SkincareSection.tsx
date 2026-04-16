"use client";

import ProductSection from "./ProductSection";

export default function SkincareSection() {
  return (
    <ProductSection
      id="skincare"
      badge="Personalized care for healthier, clearer skin."
      heading=""
      headingAccent="Skincare"
      headingRest="that goes deeper than the surface"
      subheading="Skincare designed to treat the root cause—not just cover it up."
      description="From acne and aging to sensitivity and texture, every plan is built for real, visible improvement. Prescription-strength when needed, always personalized."
      ctaText="Coming Soon"
      features={[
        { text: "Clinician-guided tailored care" },
        { text: "Prescription-strength options" },
        { text: "Simple daily routines" },
        { text: "Visible skin results" },
        { text: "Personalized treatment plans" },
      ]}
      featureTitle="Why our skincare works"
      productImage="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=500&fit=crop"
      bgColor="bg-accent-pink/20"
      accentColor="#B8849A"
      reversed
    />
  );
}
