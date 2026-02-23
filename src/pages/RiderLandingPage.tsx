import { FAQSection } from "@/components/riderspage/FAQSection";
import { HeroSection } from "@/components/riderspage/HeroSection";
import { Perks } from "@/components/riderspage/Perks";
import { Requirements } from "@/components/riderspage/Requirements";
import { SuccessStory } from "@/components/riderspage/SuccessStory";


export function RiderLandingPage() {
    return (
        <div>
            <HeroSection />
            <Perks />
            <Requirements />
            <SuccessStory />
            <FAQSection />
        
        </div>
    );
}