import VendorCart from "@/components/vendors/VendorCart";
import VendorMenu from "@/components/vendors/VendorMenu";
import VendorHeader from "@/components/vendors/VendorHeader";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function VendorPage() {
    return (
        <div className="min-h-screen bg-[#F8F9FA]">
            <VendorHeader />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

                    {/* Menu Section - Dominant space */}
                    <div className="flex-grow lg:w-2/3 space-y-8">
                        {/* You can add more sub-navigation here if needed */}
                        <div className="bg-white rounded-[2rem] shadow-sm border border-neutral-100 overflow-hidden">
                            <VendorMenu />
                        </div>
                    </div>

                    {/* Cart Section - Sticky side widget (Hidden on Mobile) */}
                    <aside className="hidden lg:block lg:w-1/3 lg:sticky lg:top-8">
                        <div className="bg-white rounded-[2rem] shadow-xl border border-neutral-100 overflow-hidden">
                            <VendorCart />
                        </div>
                    </aside>
                </div>
            </main>

            {/* Mobile Cart Button - Only visible on mobile */}
            <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="w-full h-16 rounded-full bg-neutral-900 text-white shadow-2xl shadow-black/30 flex items-center justify-between px-8 hover:bg-black transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                                    <ShoppingBag className="h-5 w-5" />
                                </div>
                                <span className="font-bold text-lg">View Your Order</span>
                            </div>
                            <div className="flex items-center gap-2 font-black text-xl">
                                $18.00
                            </div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] h-[80vh] flex flex-col p-0 overflow-hidden rounded-[2rem]">
                        <DialogHeader className="p-6 pb-0">
                            <DialogTitle className="text-2xl font-black">Your Order</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 overflow-y-auto">
                            <VendorCart />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}