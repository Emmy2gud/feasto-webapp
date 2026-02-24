import { Card, CardContent } from "@/components/ui/card";
import {
    Store,

    Mail,

    MapPin,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    UtensilsCrossed,
    Clock,
    DollarSign,
    FileText
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function VendorFormPage() {
    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF3EA] text-[#EE8C2B] font-black text-xs uppercase tracking-widest shadow-sm">
                        <Store className="h-4 w-4" />
                        Partner with us
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Expand Your <span className="text-[#EE8C2B]">Business</span></h1>
                    <p className="text-lg text-neutral-500 font-medium max-w-2xl mx-auto ">
                        Reach thousands of students instantly. Manage orders, track performance, and grow your brand with Feasto's merchant tools.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Form Content */}
                    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
                        <Card className="rounded-[2.5rem] border-neutral-100 shadow-sm overflow-hidden">
                            <CardContent className="p-0">
                                <Tabs defaultValue="store" className="w-full">
                                    <div className="bg-white p-6 border-b border-neutral-100">
                                        <TabsList className="grid w-full grid-cols-3 h-auto bg-neutral-50/50 p-2 rounded-3xl gap-2 !h-20">
                                            <TabsTrigger
                                                value="store"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg md:text-[10px] !text-[8px] data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                Restaurant
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="details"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg md:text-[10px] !text-[8px] data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                Business
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="menu"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg md:text-[10px] !text-[8px] data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                Menu Ready
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <div className="p-10 space-y-8">
                                        <TabsContent value="store" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <Store className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Restaurant Profile</h2>
                                                    <p className="text-neutral-400 font-medium ">Basic details about your kitchen</p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Restaurant Name</label>
                                                    <div className="relative">
                                                        <UtensilsCrossed className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. Spicy Cravings"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-2 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Cuisine Type</label>
                                                    <select className="w-full h-16 px-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none font-bold appearance-none cursor-pointer ">
                                                        <option value="african">African Kitchen</option>
                                                        <option value="continental">Continental</option>
                                                        <option value="fastfood">Fast Food & Snacks</option>
                                                        <option value="drinks">Drinks & Smoothies</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Business Email</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="email"
                                                            placeholder="kitchen@spicy.com"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Kitchen Address</label>
                                                    <div className="relative">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. Cafeteria 2, CU"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-2 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="details" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <CheckCircle2 className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Business Verification</h2>
                                                    <p className="text-neutral-400 font-medium ">Help us verify your authenticity</p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">CAC / Registration No.</label>
                                                    <input
                                                        type="text"
                                                        placeholder="BN 1234567"
                                                        className="w-full h-16 px-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                    />
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Operating Hours</label>
                                                    <div className="relative">
                                                        <Clock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. 8:00 AM - 10:00 PM"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="menu" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <UtensilsCrossed className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Menu Setup</h2>
                                                    <p className="text-neutral-400 font-medium ">Upload your menu or catalog</p>
                                                </div>
                                            </div>

                                            <div className="group relative border-2 border-dashed border-neutral-200 rounded-[2.5rem] p-12 text-center hover:border-[#EE8C2B]/50 hover:bg-[#FDF3EA]/20 transition-all cursor-pointer">
                                                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-neutral-100 text-neutral-500 group-hover:bg-[#EE8C2B] group-hover:text-white transition-all shadow-sm">
                                                    <FileText className="h-10 w-10" />
                                                </div>
                                                <h3 className="text-xl font-black text-neutral-900 mb-2">Upload Menu Document</h3>
                                                <p className="text-sm text-neutral-400 italic font-medium">PDF, Excel or Image (Max 10MB)</p>
                                                <div className="mt-8 inline-flex items-center gap-2 text-[#EE8C2B] font-black text-xs uppercase tracking-[0.2em]">
                                                    <ShieldCheck className="h-4 w-4" />
                                                    Verified Processing
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </div>

                                    <div className=" p-10 border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
                              
                                        <button className="w-full md:w-auto h-16 px-12 rounded-3xl bg-neutral-900 text-white font-black text-lg hover:bg-[#EE8C2B] hover:-translate-y-2 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/10 group overflow-hidden relative">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Start Selling
                                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar: Merchant Perks */}
                    <aside className="md:block hidden lg:w-[400px] shrink-0 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="p-10 bg-[#0a0f1d] rounded-[3rem] text-white space-y-10 relative overflow-hidden shadow-2xl shadow-black/20 transform hover:-translate-y-2 transition-all duration-500">
                            <div className="absolute top-0 right-0 h-64 w-64 bg-[#EE8C2B]/10 rounded-full blur-[100px]"></div>

                            <div className="space-y-2">
                                <h3 className="text-3xl font-black tracking-tight">Merchant <span className="text-[#EE8C2B]">Perks</span></h3>
                                <p className="text-neutral-400 font-medium italic">Why thousands of vendors choose Feasto</p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <UtensilsCrossed className="h-6 w-6" />,
                                        title: "Vast Reach",
                                        desc: "Access 20,000+ active students on Covenant Campus daily."
                                    },
                                    {
                                        icon: <Clock className="h-6 w-6" />,
                                        title: "Fast Logistics",
                                        desc: "Our rider fleet handles all delivery. You focus on cooking."
                                    },
                                    {
                                        icon: <DollarSign className="h-6 w-6" />,
                                        title: "Growth Tools",
                                        desc: "Advanced analytics and marketing tools to boost sales."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 group">
                                        <div className="h-12 w-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EE8C2B] group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-black text-white uppercase tracking-tight text-sm">{item.title}</p>
                                            <p className="text-xs text-neutral-400 mt-1 font-medium leading-relaxed italic">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <div className="p-4 rounded-2xl bg-[#EE8C2B]/10 border border-[#EE8C2B]/20">
                                    <p className="text-xs font-bold italic leading-tight text-center">Top vendors see <span className="text-[#EE8C2B] font-black">150% growth</span> in their first 3 months!</p>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
