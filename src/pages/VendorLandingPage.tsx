import { DashboardPreview } from '@/components/vendorpage/DashboardPreview'
import { FAQSection } from '@/components/vendorpage/FAQSection'
import { HeroSection } from '@/components/vendorpage/HeroSection'
import { SuccessStory } from '@/components/vendorpage/SuccessStory'
import { VendorTypes } from '@/components/vendorpage/VendorTypes'
import { WhyPartner } from '@/components/vendorpage/WhyPartner'


export default function VendorLandingPage() {
    return (
        <div className="min-h-screen bg-background">

            <main>
                {/* Hero Section with Image Composition */}
                <HeroSection />
                <VendorTypes />
                <WhyPartner />
                <DashboardPreview/>
                <SuccessStory />
<FAQSection />
            </main>



        </div>
    )
}