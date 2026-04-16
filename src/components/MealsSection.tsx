"use client";

import ProductSection from "./ProductSection";

export default function MealsSection() {
  return (
    <ProductSection
      id="meals"
      badge="Metabolic Nutrition"
      heading=""
      headingAccent="Fuel"
      headingRest="your transformation, protect your progress"
      subheading="Skip the hassle of meal planning and prepping"
      description="BioFusion Meals is the perfect partner for your GLP-1 journey—delivering chef-prepared, medically aligned nutrition designed to help you lose fat while preserving muscle."
      ctaText="Get Started"
      ctaHref="#"
      features={[
        { text: "Chef-made, portion-controlled" },
        { text: "Weekly rotating meals" },
        { text: "Nutritionally balanced" },
        { text: "Macro-friendly options" },
        { text: "Completely hassle-free" },
      ]}
      featureTitle="Meal prep made simple"
      productImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop"
      bgColor="bg-accent-warm/30"
      accentColor="#C4956A"
    />
  );
}
