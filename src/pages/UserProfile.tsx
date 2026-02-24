import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Edit3,
    LogOut,
    Plus,
    Calendar,
    Mail,
    Phone,
    User,

    Building2,
    BookOpen,
    CheckCircle2,
    Camera,
    MapPin,
    ArrowRight
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
    const [profileData, setProfileData] = useState({
        fullName: "Alex Johnson",
        email: "alex.johnson@email.com",
        phone: "+1 (555) 012-3456",
        birthday: "January 15, 1995"
    });

    const [newAddress, setNewAddress] = useState({
        label: "",
        details: ""
    });

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-neutral-50/50 py-10">
            <div className="container mx-auto px-4 max-w-6xl space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Your Profile</h1>
                        <p className="text-neutral-500 text-sm sm:text-base mt-2">Manage your personal information and addresses</p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Button
                            variant="outline"
                            className="rounded-2xl border-neutral-200 text-neutral-600 hover:text-neutral-900 px-6"
                            onClick={() => navigate("/settings")}
                        >
                            Settings
                        </Button>
                    </div>
                </div>

                {/* Profile Header Card */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
                    <Badge className="absolute top-8 right-8 bg-[#EE8C2B]/10 text-[#EE8C2B] border-none font-black text-[10px] tracking-widest uppercase px-4 py-2 rounded-full">
                        Premium Member
                    </Badge>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Avatar Section */}
                        <div className="relative">
                            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-neutral-100 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                                <div className="text-4xl font-black text-neutral-300">
                                    <User className="h-20 w-20" />
                                </div>
                            </div>
                            <button className="absolute bottom-2 right-2 h-10 w-10 bg-[#EE8C2B] text-white rounded-full border-4 border-white shadow-lg flex items-center justify-center hover:bg-[#D67B22] transition-colors">
                                <Camera className="h-4 w-4" />
                            </button>
                        </div>

                        {/* User Info & Actions */}
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <div className="space-y-1">
                                <h1 className="text-4xl font-black text-neutral-900 tracking-tight">{profileData.fullName}</h1>
                                <p className="text-lg text-neutral-400 font-medium italic">{profileData.email}</p>
                                <div className="flex items-center justify-center md:justify-start gap-2 text-neutral-400 text-sm font-bold mt-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>Joined March 2023</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="h-12 px-8 rounded-2xl border-orange-100 bg-orange-50/30 text-[#EE8C2B] font-bold gap-2 hover:bg-orange-50 hover:border-orange-200 transition-all">
                                            <Edit3 className="h-4 w-4" />
                                            Edit Profile
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none rounded-[3rem] shadow-2xl h-[600px]">
                                        <div className="p-8 md:p-12 space-y-8">
                                            <DialogHeader>
                                                <DialogTitle className="text-4xl font-black text-neutral-900 tracking-tighter">Edit Profile</DialogTitle>
                                                <DialogDescription className="text-neutral-500 font-medium italic">Update your information to keep your profile fresh.</DialogDescription>
                                            </DialogHeader>

                                            <div className="space-y-6 ">
                                                {/* Full Name */}
                                                <div className="space-y-3">
                                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Full Name</Label>
                                                    <div className="relative">
                                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <Input
                                                            className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                            value={profileData.fullName}
                                                            onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Email */}
                                                <div className="space-y-3">
                                                    <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Email Address</Label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                        <Input
                                                            className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                            value={profileData.email}
                                                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Phone */}
                                                    <div className="space-y-3">
                                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Phone</Label>
                                                        <div className="relative">
                                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                            <Input
                                                                className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                                value={profileData.phone}
                                                                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Birthday */}
                                                    <div className="space-y-3">
                                                        <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Birthday</Label>
                                                        <div className="relative">
                                                            <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                            <Input
                                                                className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                                value={profileData.birthday}
                                                                onChange={(e) => setProfileData({ ...profileData, birthday: e.target.value })}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button className="w-full h-20 rounded-[2rem] bg-[#EE8C2B] text-white font-black text-xl shadow-2xl shadow-black/20 hover:bg-black hover:-translate-y-2 transition-all active:translate-y-0 relative overflow-hidden group">
                                                <span className="relative z-10 flex items-center justify-center gap-3">
                                                    Save Changes
                                                    <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#EE8C2B] to-[#D67B22] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <Button variant="outline" className="h-12 px-8 rounded-2xl border-red-50 bg-red-50/30 text-red-500 font-bold gap-2 hover:bg-red-50 hover:border-red-100 transition-all">
                                    <LogOut className="h-4 w-4" />
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Details Section */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                    <div className="flex items-center justify-between pb-2">
                        <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Personal Details</h2>
                        <button className="text-sm font-black text-[#EE8C2B] hover:underline uppercase tracking-widest">Manage Privacy</button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        {/* Full Name */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Full Name</label>
                            <div className="h-16 px-6 rounded-3xl bg-neutral-50/80 border border-neutral-100 flex items-center">
                                <p className="font-bold text-neutral-900">{profileData.fullName}</p>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Email Address</label>
                            <div className="h-16 px-6 rounded-3xl bg-neutral-50/80 border border-neutral-100 flex items-center justify-between">
                                <p className="font-bold text-neutral-900">{profileData.email}</p>
                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Phone Number</label>
                            <div className="h-16 px-6 rounded-3xl bg-neutral-50/80 border border-neutral-100 flex items-center">
                                <p className="font-bold text-neutral-900">{profileData.phone}</p>
                            </div>
                        </div>

                        {/* Birthday */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Birthday</label>
                            <div className="h-16 px-6 rounded-3xl bg-neutral-50/80 border border-neutral-100 flex items-center">
                                <p className="font-bold text-neutral-900">{profileData.birthday}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Saved Addresses Section */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-neutral-100 shadow-sm space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                    <div className="flex items-center justify-between pb-2">
                        <h2 className="text-2xl font-black text-neutral-900 tracking-tight">Saved Addresses</h2>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="flex items-center gap-2 text-sm font-black text-[#EE8C2B] hover:underline uppercase tracking-widest">
                                    <Plus className="h-4 w-4" />
                                    Add New
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none rounded-[3rem] shadow-2xl">
                                <div className="p-8 md:p-12 space-y-8">
                                    <DialogHeader>
                                        <DialogTitle className="text-4xl font-black text-neutral-900 tracking-tighter">Add Address</DialogTitle>
                                        <DialogDescription className="text-neutral-500 font-medium italic">Tell us where you want your feast delivered.</DialogDescription>
                                    </DialogHeader>

                                    <div className="space-y-6 pt-4">
                                        {/* Address Label */}
                                        <div className="space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Address Label</Label>
                                            <div className="relative">
                                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                <Input
                                                    placeholder="e.g. Grandma's House"
                                                    className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                    value={newAddress.label}
                                                    onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        {/* Full Address */}
                                        <div className="space-y-3">
                                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Full Address</Label>
                                            <div className="relative">
                                                <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                                <Input
                                                    placeholder="Type full delivery details..."
                                                    className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                                    value={newAddress.details}
                                                    onChange={(e) => setNewAddress({ ...newAddress, details: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full h-20 rounded-[2rem] bg-[#EE8C2B] text-white font-black text-xl shadow-2xl shadow-black/20 hover:bg-black hover:-translate-y-2 transition-all active:translate-y-0 relative overflow-hidden group">
                                        <span className="relative z-10 flex items-center justify-center gap-3">
                                            Add Address
                                            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#EE8C2B] to-[#D67B22] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Hostel Address */}
                        <div className="group p-8 rounded-[2rem] bg-orange-50/30 border border-orange-100 hover:border-[#EE8C2B]/30 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-[#EE8C2B] text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-500/20">
                                    <Building2 className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <h3 className="text-lg font-black text-neutral-900 leading-none">Hostel</h3>
                                        <p className="text-[10px] font-black text-[#EE8C2B] uppercase tracking-widest mt-1">Primary Delivery Point</p>
                                    </div>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">
                                        Newton Hostel, Room 302, West Campus Area, University Town, 50001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Library Address */}
                        <div className="group p-8 rounded-[2rem] bg-white border border-neutral-100 hover:border-[#EE8C2B]/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                            <div className="flex items-start gap-5">
                                <div className="h-14 w-14 rounded-2xl bg-orange-100 text-[#EE8C2B] flex items-center justify-center shrink-0">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <h3 className="text-lg font-black text-neutral-900 leading-none">Main Library</h3>
                                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1">Study Spot</p>
                                    </div>
                                    <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">
                                        Central Library, Desk 42, Level 2, University Boulevard, 50001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
