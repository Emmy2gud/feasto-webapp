import VendorCart from "@/components/vendors/VendorCart";
import VendorMenu from "@/components/vendors/VendorMenu";
import VendorHeader from "@/components/vendors/VendorHeader";

export default function VendorPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <VendorHeader />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 -mt-6 relative z-10 pb-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

                    {/* Menu Section - Dominant space */}
                    <div className="flex-grow lg:w-2/3 space-y-8">
                        {/* You can add more sub-navigation here if needed */}
                        <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 overflow-hidden">
                            <VendorMenu />
                        </div>
                    </div>

                    {/* Cart Section - Sticky side widget */}
                    <aside className="lg:w-1/3 lg:sticky lg:top-8 order-first lg:order-last">
                        <div className="bg-white rounded-[2rem] shadow-xl border border-neutral-100 overflow-hidden">
                            <VendorCart />
                        </div>


                    </aside>
                </div>
            </main>
        </div>
    );
}