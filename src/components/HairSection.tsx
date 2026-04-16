"use client";

import ProductSection from "./ProductSection";

export default function HairSection() {
  return (
    <ProductSection
      id="hair"
      badge="Targeted hair restoration"
      headingMain=""
      headingAccent="Proven care"
      headingTail="for thinning hair and regrowth"
      subheading="Advanced hair regrowth care to help you look and feel your best"
      description="Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum, formulated with clinically backed ingredients for real results."
      ctaText="Coming Soon"
      comingSoon
      features={[
        "Clinically backed regrowth ingredients",
        "Targeted scalp and follicle support",
        "Long-term hair density approach",
        "Fast shipping",
      ]}
      featureTitle="Personalized support for lasting hair results"
      productImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=560&fit=crop"
      productBg="#FBF6EE"
      lifestyleImage1="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-sand"
      accentColor="#9C7A4F"
      accentCheckBg="#9C7A4F"
    />
  );
}
