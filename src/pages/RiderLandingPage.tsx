import { FAQSection } from "@/components/riderspage/FAQSection";
import { HeroSection } from "@/components/riderspage/HeroSection";
import { Perks } from "@/components/riderspage/Perks";
import { ProcessSection } from "@/components/riderspage/ProcessSection";
import { Requirements } from "@/components/riderspage/Requirements";

export function RiderLandingPage() {
  return (
    <main className="bg-background">
      <HeroSection />
      <Requirements />
      <ProcessSection />
      <Perks />
      <FAQSection />
    </main>
  );
}
