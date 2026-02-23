import { Card, CardContent } from "@/components/ui/card";
import {
    Bike,
    User,
    Mail,
    Phone,
    MapPin,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
 
    Calendar,
    Briefcase
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RiderFormPage() {
    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF3EA] text-[#EE8C2B] font-black text-xs uppercase tracking-widest shadow-sm">
                        <Bike className="h-4 w-4" />
                        Join the Fleet
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Become a Feasto <span className="text-[#EE8C2B]">Rider</span></h1>
                    <p className="text-lg text-neutral-500 font-medium max-w-2xl mx-auto ">
                        Earn on your own terms, deliver smiles across campus, and be part of the fastest growing student community.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Form Content */}
                    <div className="flex-1 space-y-10 animate-in fade-in slide-in-from-left-6 duration-700">
                        <Card className="rounded-[2.5rem] border-neutral-100 shadow-sm overflow-hidden">
                            <CardContent className="p-0">
                                <Tabs defaultValue="personal" className="w-full">
                                    <div className="bg-white p-6 border-b border-neutral-100 ">
                                        <TabsList className="grid w-full grid-cols-3 h-auto bg-neutral-50/50 p-2 rounded-3xl gap-2 !h-20">
                                            <TabsTrigger
                                                value="personal"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                1. Personal
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="vehicle"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                2. Vehicle
                                            </TabsTrigger>
                                            <TabsTrigger
                                                value="documents"
                                                className="data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#EE8C2B] rounded-2xl py-4 font-black text-xs uppercase tracking-widest transition-all"
                                            >
                                                3. Verification
                                            </TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <div className="p-10 space-y-8">
                                        <TabsContent value="personal" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <User className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Personal Information</h2>
                                                    <p className="text-neutral-400 font-medium ">Let's get to know you better</p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="John Doe"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="email"
                                                            placeholder="john@example.com"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Phone Number</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="tel"
                                                            placeholder="+234 000 000 0000"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Campus Location</label>
                                                    <div className="relative">
                                                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <input
                                                            type="text"
                                                            placeholder="e.g. Covenant University"
                                                            className="w-full h-16 pl-16 pr-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="vehicle" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <Bike className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Vehicle Details</h2>
                                                    <p className="text-neutral-400 font-medium ">Tell us what you'll be riding</p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Vehicle Type</label>
                                                    <select className="w-full h-16 px-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold appearance-none cursor-pointer ">
                                                        <option value="bicycle">Bicycle</option>
                                                        <option value="scooter">Electric Scooter</option>
                                                        <option value="motorcycle">Motorcycle</option>
                                                        <option value="car">Car (Limited Campus Access)</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] ml-4 text-neutral-500 font-black">Vehicle Model / Color</label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g. Red Honda 125"
                                                        className="w-full h-16 px-8 rounded-3xl border-1 border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-[#EE8C2B]/30 outline-none transition-all font-bold placeholder:text-neutral-300 "
                                                    />
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="documents" className="mt-0 space-y-8 animate-in fade-in duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-[#FDF3EA] text-[#EE8C2B] flex items-center justify-center shadow-inner">
                                                    <ShieldCheck className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Verification</h2>
                                                    <p className="text-neutral-400 font-medium italic">Securely upload your ID documents</p>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="group relative border-2 border-dashed border-neutral-200 rounded-[2rem] p-8 text-center hover:border-[#EE8C2B]/50 hover:bg-[#FDF3EA]/20 transition-all cursor-pointer">
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500 group-hover:bg-[#EE8C2B] group-hover:text-white transition-all shadow-sm">
                                                        <Briefcase className="h-6 w-6" />
                                                    </div>
                                                    <p className="font-black text-neutral-900 group-hover:text-[#EE8C2B] transition-colors">School ID Card</p>
                                                    <p className="text-xs text-neutral-400 mt-2 italic font-medium">Front & Back (JPG, PNG)</p>
                                                </div>
                                                <div className="group relative border-2 border-dashed border-neutral-200 rounded-[2rem] p-8 text-center hover:border-[#EE8C2B]/50 hover:bg-[#FDF3EA]/20 transition-all cursor-pointer">
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                                                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500 group-hover:bg-[#EE8C2B] group-hover:text-white transition-all shadow-sm">
                                                        <ShieldCheck className="h-6 w-6" />
                                                    </div>
                                                    <p className="font-black text-neutral-900 group-hover:text-[#EE8C2B] transition-colors">National ID / Passport</p>
                                                    <p className="text-xs text-neutral-400 mt-2 italic font-medium">Valid ID Proof</p>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </div>

                                    <div className="p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        
                                        <button className="w-full md:w-auto h-16 px-12 rounded-3xl bg-neutral-900 text-white font-black text-lg hover:bg-[#EE8C2B] hover:-translate-y-2 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-black/10 group overflow-hidden relative">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Submit Application
                                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </button>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar: Why join? */}
                    <aside className="md:block hidden lg:w-[400px] shrink-0 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="p-10 bg-[#0a0f1d] rounded-[3rem] text-white space-y-10 relative overflow-hidden shadow-2xl shadow-black/20 transform hover:-translate-y-2 transition-all duration-500">
                            <div className="absolute top-0 right-0 h-64 w-64 bg-[#EE8C2B]/10 rounded-full blur-[100px]"></div>

                            <div className="space-y-2">
                                <h3 className="text-3xl font-black tracking-tight">Why be a <span className="text-[#EE8C2B]">Rider?</span></h3>
                                <p className="text-neutral-400 font-medium italic">Join 500+ student riders in your campus</p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: <Calendar className="h-6 w-6" />,
                                        title: "Flexible Hours",
                                        desc: "Ride whenever you want. Between classes or on weekends."
                                    },
                                    {
                                        icon: <ArrowRight className="h-6 w-6" />,
                                        title: "Instant Pay",
                                        desc: "Earnings are credited instantly to your campus wallet."
                                    },
                                    {
                                        icon: <ShieldCheck className="h-6 w-6" />,
                                        title: "Safety First",
                                        desc: "Fully insured deliveries and 24/7 campus support."
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
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#EE8C2B]/10 border border-[#EE8C2B]/20">
                                    <div className="h-10 w-10 rounded-full bg-[#EE8C2B] flex items-center justify-center text-white">
                                        <CheckCircle2 className="h-6 w-6" />
                                    </div>
                                    <p className="text-xs font-bold italic leading-tight">Average rider makes $450/week on Covenant Campus</p>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </div>
    );
}
