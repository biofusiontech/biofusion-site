"use client";

import ProductSection from "./ProductSection";

export default function HairSection() {
  return (
    <ProductSection
      id="hair"
      badge="Targeted hair restoration"
      heading=""
      headingAccent="Proven care"
      headingRest="for thinning hair and regrowth"
      subheading="Advanced hair regrowth care to help you look and feel your best"
      description="Revitalize your roots and restore fuller-looking hair with our powerful hair regrowth serum, formulated with clinically backed ingredients for real results."
      ctaText="Coming Soon"
      features={[
        { text: "Clinically backed regrowth ingredients" },
        { text: "Targeted scalp and follicle support" },
        { text: "Long-term hair density approach" },
        { text: "Fast shipping" },
      ]}
      featureTitle="Personalized Support for Lasting Hair Results"
      productImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=500&fit=crop"
      bgColor="bg-accent-warm/20"
      accentColor="#8B7355"
    />
  );
}
