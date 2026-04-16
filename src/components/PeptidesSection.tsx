"use client";

import ProductSection from "./ProductSection";

export default function PeptidesSection() {
  return (
    <ProductSection
      id="peptides"
      badge="Advanced Peptide Support"
      heading=""
      headingAccent="Targeted support"
      headingRest="for recovery, performance, and longevity"
      subheading="Support that works below the surface"
      description="Peptide therapy is designed to support how your body recovers, performs, and repairs over time—with doctor-guided protocols built for real results."
      ctaText="Coming Soon"
      features={[
        { text: "Recovery & repair support" },
        { text: "Performance optimization" },
        { text: "Longevity protocols" },
        { text: "Doctor-supervised care" },
        { text: "Fast & discreet shipping" },
      ]}
      featureTitle="Unlock what your body can do"
      productImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=450&fit=crop"
      lifestyleImage1="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=500&fit=crop"
      bgColor="bg-gradient-to-b from-brand-bg/20 to-white"
      accentColor="#4FB2E4"
      reversed
    />
  );
}
