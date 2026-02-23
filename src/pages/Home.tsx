
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { MobileAppSection } from "@/components/home/MobileAppSection";
import { SellerCTASection } from "@/components/home/SellerCTASection";
import { TopVendorsSection } from "@/components/home/TopVendorsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FutureLogisticsSection } from "@/components/home/FutureLogisticsSection";
import { FeaturesGridSection } from "@/components/home/FeaturesGridSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    
      <main>
        {/* Hero Section with Image Composition */}
        <HeroSection />

        {/* How Feasto Works - Process Cards */}
        <HowItWorksSection />

        {/* Category Cards - Vertical Colored Cards */}
        <CategoriesSection />

        {/* Mobile App Section - Dark Background */}
        <MobileAppSection />

        {/* Seller CTA */}
        <SellerCTASection />

        {/* Top Student Vendors */}
        <TopVendorsSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Future of Campus Logistics - Dark Section */}
        <div className="bg-[#0a0f1d]">
          <FutureLogisticsSection />
        </div>

        {/* Features Grid */}
        <div className="bg-background">
          <FeaturesGridSection />
        </div>

    
      </main>

   
 
    </div>
  );
}
