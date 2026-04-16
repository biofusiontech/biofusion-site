"use client";

import ProductSection from "./ProductSection";

export default function MealsSection() {
  return (
    <ProductSection
      id="meals"
      badge="Metabolic nutrition"
      headingMain=""
      headingAccent="Fuel"
      headingTail="your transformation, protect your progress"
      subheading="Skip the hassle of meal planning and prepping"
      description="BioFusion Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle."
      ctaText="Get Started"
      ctaHref="#"
      features={[
        "Chef-made, portion-controlled",
        "Weekly rotating meals",
        "Nutritionally balanced",
        "Macro-friendly options",
        "Completely hassle-free",
      ]}
      featureTitle="Meal prep made simple"
      productImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&h=560&fit=crop"
      productBg="#FBF6EE"
      lifestyleImage1="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-sand"
      accentColor="#C49560"
      accentCheckBg="#C49560"
    />
  );
}
