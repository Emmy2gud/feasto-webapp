import studentChef from "@/assets/vendors/Student Chef.png";
import localRestaurant from "@/assets/vendors/Cafeterias.png";
import campusPharmacy from "@/assets/vendors/Campus Shops.png";
import { ArrowRight, UtensilsCrossed, Store, BriefcaseMedical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const vendorTypes = [
    {
        number: "01",
        title: "Student Chefs",
        description:
            "Monetize your culinary passion right from your student kitchen. We help you scale from roommates to the whole campus.",
        image: studentChef,
        icon: <UtensilsCrossed className="h-6 w-6" />,
        accentColor: "#EE8C2B",
        tag: "Emerging talent"
    },
    {
        number: "02",
        title: "Local Eateries",
        description:
            "Expand your reach to thousands of students nearby. Professional logistics for your neighborhood favorites.",
        image: localRestaurant,
        icon: <Store className="h-6 w-6" />,
        accentColor: "#3B82F6",
        tag: "Established partners"
    },
    {
        number: "03",
        title: "Campus Shops",
        description:
            "Deliver essentials and medications directly to dorms. The digital storefront for your physical retail space.",
        image: campusPharmacy,
        icon: <BriefcaseMedical className="h-6 w-6" />,
        accentColor: "#10B981",
        tag: "Essentials & Retail"
    },
];

export function VendorTypes() {
    return (
        <section className="px-4 py-20 md:px-8 lg:px-20 bg-neutral-50/50">
            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-neutral-500 font-black uppercase tracking-widest text-[9px] md:text-[10px] shadow-sm">
                        Partnership Tiers
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-neutral-900 leading-tight">
                        Tailored for Every <span className="text-[#EE8C2B]">Entrepreneur</span>
                    </h2>
                    <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-neutral-500 font-medium italic">
                        Whether you're a home cook, a retail owner, or a restaurant manager,
                        Feasto provides the tools to succeed in the student economy.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-6 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {vendorTypes.map((vendor, idx) => (
                        <div
                            key={vendor.number}
                            className="group relative flex flex-col bg-white rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-xl shadow-black/[0.03] border border-neutral-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/[0.1] animate-in fade-in duration-700"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Image Container */}
                            <div className="relative h-[240px] md:h-[280px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem]">
                                <img
                                    src={vendor.image}
                                    alt={vendor.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl font-black text-white backdrop-blur-xl border border-white/20 shadow-lg"
                                    style={{ background: `${vendor.accentColor}cc` }}>
                                    {vendor.number}
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-end justify-between">
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                                        {vendor.title}
                                    </h3>
                                    <div className="h-10 w-10 md:h-12 md:w-12 bg-white/20 backdrop-blur-xl rounded-[14px] md:rounded-2xl flex items-center justify-center text-white border border-white/20">
                                        {vendor.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col justify-between p-4 md:p-6">
                                <div className="space-y-2 md:space-y-3">
                                    <Badge variant="ghost" className="bg-neutral-50 text-neutral-400 font-bold text-[9px] md:text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-lg cursor-default border border-neutral-100">
                                        {vendor.tag}
                                    </Badge>
                                    <p className="text-sm md:text-base leading-relaxed text-neutral-500 font-medium italic">
                                        {vendor.description}
                                    </p>
                                </div>

                                <Link
                                    to="/vendor-form"
                                    className="mt-6 md:mt-8 group/btn flex items-center justify-center gap-2 w-full py-3.5 md:py-4 rounded-2xl bg-neutral-50 text-neutral-900 font-black text-xs md:text-sm uppercase tracking-widest transition-all hover:bg-neutral-900 hover:text-white group-hover:shadow-lg active:scale-95 shadow-sm"
                                >
                                    <span>Learn more</span>
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
