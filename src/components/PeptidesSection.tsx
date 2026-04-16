"use client";

import ProductSection from "./ProductSection";

export default function PeptidesSection() {
  return (
    <ProductSection
      id="peptides"
      badge="Advanced peptide support"
      headingMain=""
      headingAccent="Targeted support"
      headingTail="for recovery, performance, and longevity"
      subheading="Support that works below the surface"
      description="Peptide therapy is designed to support how your body recovers, performs, and repairs over time—with doctor-guided protocols built for real results."
      ctaText="Coming Soon"
      comingSoon
      features={[
        "Recovery & repair support",
        "Performance optimization",
        "Longevity protocols",
        "Doctor-supervised care",
        "Fast & discreet shipping",
      ]}
      featureTitle="Unlock what your body can do"
      productImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=560&fit=crop"
      productBg="#F1F8FD"
      lifestyleImage1="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=440&h=580&fit=crop"
      lifestyleImage2="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=440&h=580&fit=crop"
      tintClass="bg-radial-tint-blue"
      accentColor="#4FB2E4"
      accentCheckBg="#4FB2E4"
      reversed
    />
  );
}
