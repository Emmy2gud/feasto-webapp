import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Settings,
    Bell,
    Lock,
    TriangleAlert,

    ShieldCheck,

    Smartphone,


    Mail
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function AccountSettings() {
    const [activeSection, setActiveSection] = useState("security");

    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 max-w-6xl space-y-8">

                {/* Header Section */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-1 text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">Account Settings</h1>
                            <p className="text-neutral-500 text-sm sm:text-base font-medium italic">Manage your profile, security, and preferences.</p>
                        </div>
                        <div className="flex bg-neutral-50 p-1.5 rounded-2xl border border-neutral-100 overflow-x-auto no-scrollbar max-w-full">
                            {["security", "notifications"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveSection(tab)}
                                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-[12px] sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeSection === tab ? "bg-white text-[#EE8C2B] shadow-sm" : "text-neutral-400 hover:text-neutral-900"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Content */}
                <div className="grid gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">


                    {activeSection === "security" && (
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm space-y-10">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
                                    <Lock className="h-5 w-5 text-white" />
                                </div>
                                <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Security & Password</h2>
                            </div>

                            <div className="max-w-6xl space-y-8">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Current Password</label>
                                        <Input type="password" placeholder="••••••••" className="h-16 px-6 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">New Password</label>
                                            <Input type="password" placeholder="••••••••" className="h-16 px-6 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Confirm New Password</label>
                                            <Input type="password" placeholder="••••••••" className="h-16 px-6 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100/50">
                                    <div className="flex items-center gap-4">
                                        <ShieldCheck className="h-6 w-6 text-emerald-500" />
                                        <div>
                                            <p className="font-bold text-emerald-900 leading-none">Two-Factor Authentication</p>
                                            <p className="text-xs text-emerald-600 font-medium mt-1">Add an extra layer of security to your account.</p>
                                        </div>
                                    </div>
                                    <Switch defaultChecked={true} />
                                </div>

                                <Button className="h-14 px-10 rounded-2xl bg-neutral-900 text-white font-bold hover:bg-black transition-all">
                                    Update Security Settings
                                </Button>
                            </div>
                        </div>
                    )}

                    {activeSection === "notifications" && (
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm space-y-10">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <Bell className="h-5 w-5 text-[#EE8C2B]" />
                                </div>
                                <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Notification Preferences</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Push Notifications", desc: "Receive alerts on your mobile device for order updates.", default: true, icon: <Smartphone className="h-5 w-5" /> },
                                    { title: "Email Alerts", desc: "Get notifications about billing and account activity.", default: true, icon: <Mail className="h-5 w-5" /> },
                                    { title: "Marketing Updates", desc: "Be the first to know about campus deals and events.", default: false, icon: <Settings className="h-5 w-5" /> },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-6 sm:p-8 bg-neutral-50/80 rounded-[2rem] border border-neutral-100 group hover:border-[#EE8C2B]/20 transition-all">
                                        <div className="flex items-center gap-4 sm:gap-6">
                                            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                                                <div className="text-[#EE8C2B]">{item.icon}</div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-base sm:text-lg font-black text-neutral-900 leading-none">{item.title}</p>
                                                <p className="text-xs sm:text-sm text-neutral-400 font-medium italic">{item.desc}</p>
                                            </div>
                                        </div>
                                        <Switch defaultChecked={item.default} className="flex-shrink-0 ml-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Danger Zone */}
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border-2 border-red-50 shadow-sm space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-2xl bg-red-100 flex items-center justify-center">
                                <TriangleAlert className="h-5 w-5 text-red-500" />
                            </div>
                            <h2 className="text-2xl font-black text-red-600 tracking-tight">Danger Zone</h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-red-50/30 rounded-[2.5rem] border border-red-50">
                            <div className="space-y-1 text-center md:text-left">
                                <p className="text-lg font-black text-red-900 leading-none tracking-tight">Delete Account</p>
                                <p className="text-sm text-red-500/70 font-medium italic">Once deleted, your account cannot be recovered.</p>
                            </div>
                            <Button variant="outline" className="h-14 px-10 rounded-2xl border-red-100 bg-white text-red-500 font-bold hover:bg-red-50 transition-all">
                                Request Deletion
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
