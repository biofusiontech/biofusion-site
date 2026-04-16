import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import WeightLossSection from "@/components/WeightLossSection";
import WomensHealthSection from "@/components/WomensHealthSection";
import MealsSection from "@/components/MealsSection";
import SupplementsSection from "@/components/SupplementsSection";
import MensHealthSection from "@/components/MensHealthSection";
import PeptidesSection from "@/components/PeptidesSection";
import HairSection from "@/components/HairSection";
import SkincareSection from "@/components/SkincareSection";
import ValueProps from "@/components/ValueProps";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CategoryCards />
      <WeightLossSection />
      <WomensHealthSection />
      <MealsSection />
      <SupplementsSection />
      <MensHealthSection />
      <PeptidesSection />
      <HairSection />
      <SkincareSection />
      <ValueProps />
      <TestimonialCarousel />
      <TrustBadges />
      <Footer />
    </main>
  );
}
