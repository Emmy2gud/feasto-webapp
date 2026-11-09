import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedVendorsSection } from "@/components/home/FeaturedVendorsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <CategoriesSection />
      <FeaturedVendorsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PartnerSection />
      <FAQSection />
    </main>
  );
}
