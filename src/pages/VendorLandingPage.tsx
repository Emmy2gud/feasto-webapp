import { FAQSection } from "@/components/vendorpage/FAQSection";
import { HeroSection } from "@/components/vendorpage/HeroSection";
import { KitchenBand } from "@/components/vendorpage/KitchenBand";
import { OrderFlowSection } from "@/components/vendorpage/OrderFlowSection";
import { VendorQuote } from "@/components/vendorpage/VendorQuote";
import { VendorTypes } from "@/components/vendorpage/VendorTypes";

export default function VendorLandingPage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <VendorTypes />
      <OrderFlowSection />
      <KitchenBand />
      <VendorQuote />
      <FAQSection />
    </main>
  );
}
