import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    EyeOff,
    GraduationCap,
    Handshake,
    ArrowRight,
    CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        agreeToTerms: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Signup data:", formData);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-white">
            {/* Left Side: Branding and Visuals */}
            <div className="hidden lg:flex flex-col justify-between p-16 bg-[#0a0f1d] text-white relative overflow-hidden">
                {/* Abstract background particles/blobs */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#EE8C2B]/20 to-transparent"></div>
                <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-[#EE8C2B]/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">
                    <Link to="/" className="flex items-center gap-3 mb-24 group">
                    <img src={logo} alt="" className="w-8 h-8"/>
                        <span className="text-4xl font-[1000] text-[#EE8C2B] tracking-tighter group-hover:scale-105 transition-transform">FEASTO</span>
                    </Link>


                    <div className="space-y-8 max-w-lg">
                        <h1 className="text-7xl font-black tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-left-8 duration-700">
                            Empower Your <br />
                            <span className="text-[#EE8C2B]">Journey</span> <br />
                             Today.
                        </h1>
                        <p className="text-slate-400 text-xl font-medium leading-relaxed italic animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
                        Join over 50,000+ students and 2,000+ industry
partners connecting every day to build the future of
professional networking.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <div className="grid gap-6">
                        {[
                            { text: "Exclusive student vendor access", icon: <GraduationCap className="h-5 w-5" /> },
                            { text: "Real-time campus order tracking", icon: <CheckCircle2 className="h-5 w-5" /> },
                            { text: "Student-to-student delivery", icon: <Handshake className="h-5 w-5" /> }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4 group">
                                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#EE8C2B] group-hover:bg-[#EE8C2B] group-hover:text-white transition-all">
                                    {feature.icon}
                                </div>
                                <span className="text-sm font-black text-slate-300 uppercase tracking-widest">{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-10 border-t border-white/10 flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-12 w-12 rounded-full border-4 border-[#0a0f1d] bg-slate-800 flex items-center justify-center overflow-hidden">
                                    <div className="h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center text-[10px] font-black">U{i}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-400 font-medium">
                            Joined by <span className="text-white font-black">50,000+</span> students across 200 campuses.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side: Signup Form */}
            <div className="flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white overflow-y-auto">
                <div className="w-full max-w-[440px] space-y-12 animate-in fade-in slide-in-from-right-8 duration-700">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-black text-neutral-900 tracking-tighter">Create Account</h2>
                        <p className="text-neutral-500 font-medium text-lg italic">
                            Already part of the tribe?{" "}
                            <Link to="/login" className="text-[#EE8C2B] font-black hover:underline underline-offset-8 decoration-2">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid gap-6">
                            {/* Full Name */}
                            <div className="space-y-3">
                                <Label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                    <Input
                                        id="fullName"
                                        placeholder="Alex Johnson"
                                        className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold placeholder:text-neutral-300"
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="alex@university.edu"
                                        className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold placeholder:text-neutral-300"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-3">
                                <Label htmlFor="phoneNumber" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Phone Number</Label>
                                <div className="relative">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                    <Input
                                        id="phoneNumber"
                                        type="tel"
                                        placeholder="+1 (555) 012-3456"
                                        className="h-16 pl-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold placeholder:text-neutral-300"
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-3">
                                <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 ml-4">Secret Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="h-16 pl-16 pr-16 rounded-3xl border-neutral-100 bg-neutral-50/50 focus:bg-white focus:ring-2 focus:ring-[#EE8C2B]/10 transition-all font-bold"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 px-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-6 w-6 rounded-lg border-neutral-200 text-[#EE8C2B] focus:ring-[#EE8C2B] accent-[#EE8C2B] cursor-pointer"
                                checked={formData.agreeToTerms}
                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                required
                            />
                            <Label htmlFor="terms" className="text-sm font-medium text-neutral-500 italic">
                                I verify that I am a verified student and agree to the{" "}
                                <button type="button" className="text-neutral-900 font-black hover:underline">Terms</button>
                            </Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-20 rounded-[2rem] bg-[#EE8C2B] text-white font-black text-xl shadow-2xl shadow-black/20 hover:bg-black hover:-translate-y-2 transition-all active:translate-y-0 relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                Sign up today
                                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#EE8C2B] to-[#D67B22] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Button>
                    </form>

                    <div className="text-center pt-4">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-neutral-300">
                            The FEASTO Campus Network
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
