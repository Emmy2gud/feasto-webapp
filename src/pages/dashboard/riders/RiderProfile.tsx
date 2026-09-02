import { useState } from "react";
import {
  Star,
  Bike,
  Camera,
  ToggleLeft,
  ToggleRight,
  Eye,
  ShieldCheck,
  CreditCard,
  Zap,
  LogOut
} from "lucide-react";

export default function RiderProfile() {
  const [isOnline, setIsOnline] = useState(true);
  const [name, setName] = useState("Julian Thorne");
  const [vehicle, setVehicle] = useState("Electric Bicycle");
  const [plate, setPlate] = useState("SF-290-HARVEST");

  return (
    <div className="max-w-6xl mx-auto space-y-5 animate-fade-in pb-4">
      {/* Top Row: Profile + Earnings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Profile Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex items-start gap-5">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-orange-200 to-amber-400">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop"
                alt="Julian Thorne"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#ee8c2b] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#d6761f] cursor-pointer transition-colors">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">{name}</h2>
                <p className="text-slate-400 font-medium text-sm mt-0.5">Elite Campus Rider · Gold Tier</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700">Online</span>
                <button onClick={() => setIsOnline(!isOnline)} className="cursor-pointer">
                  {isOnline
                    ? <ToggleRight className="w-9 h-9 text-[#ee8c2b]" />
                    : <ToggleLeft className="w-9 h-9 text-slate-300" />
                  }
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-1.5 text-slate-500">
                <span className="w-4 h-4 inline-flex items-center justify-center text-slate-400">@</span>
                j.thorne@harvest.edu
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <span className="text-slate-400">☎</span>
                +1 (555) 012-3456
              </div>
            </div>
          </div>
        </div>

        {/* Earnings Card */}
        <div className="bg-gradient-to-br from-[#ee8c2b] to-amber-500 rounded-2xl shadow-sm p-6 text-white relative overflow-hidden">
          <p className="text-xs font-bold uppercase tracking-wider text-white/80">Total Earnings</p>
          <h3 className="text-3xl font-extrabold mt-1">$1,284</h3>
          <div className="flex items-center gap-1 mt-2 text-sm font-semibold">
            <Star className="w-4 h-4 fill-white text-white" />
            Rating 4.9
            <span className="text-white/70 font-medium ml-1">Sept 2023</span>
          </div>
          <svg className="absolute bottom-0 right-0 w-32 h-16 opacity-60" viewBox="0 0 120 60" fill="none">
            <path d="M0 50 L20 40 L40 45 L60 25 L80 30 L100 10 L120 15" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Middle Row: Vehicle + Service Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Vehicle Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Bike className="w-4 h-4 text-[#ee8c2b]" />
              <h4 className="font-extrabold text-slate-800">Vehicle Details</h4>
            </div>
            <button className="text-sm font-bold text-[#ee8c2b] hover:text-[#d6761f] cursor-pointer">Update</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 flex items-center gap-3">
              <Bike className="w-7 h-7 text-[#ee8c2b]" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Type</p>
                <p className="font-bold text-slate-700 text-sm">{vehicle}</p>
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-slate-200 flex items-center justify-center text-[10px] font-extrabold text-slate-500">SF</div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Registration</p>
                <p className="font-bold text-slate-700 text-sm">{plate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Health */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#ee8c2b]" />
            <h4 className="font-extrabold text-slate-800">Service Health</h4>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-500">On-Time Delivery</span>
                <span className="font-extrabold text-slate-800">96%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#ee8c2b] rounded-full" style={{ width: "96%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-bold text-slate-500">Acceptance Rate</span>
                <span className="font-extrabold text-slate-800">92%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#ee8c2b] rounded-full" style={{ width: "92%" }} />
              </div>
            </div>
            <button className="w-full mt-2 py-2.5 border border-orange-200 text-[#ee8c2b] rounded-xl text-sm font-bold hover:bg-orange-50 transition-colors cursor-pointer">
              View Detailed Report
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row: Credentials + Payout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Credentials & ID */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ee8c2b]" />
              <h4 className="font-extrabold text-slate-800">Credentials & ID</h4>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Fully Verified
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
              <div>
                <p className="font-bold text-slate-700 text-sm">Rider License ID</p>
                <p className="text-xs text-slate-400">Expires: Oct 2025</p>
              </div>
              <Eye className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
            <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
              <div>
                <p className="font-bold text-slate-700 text-sm">Insurance Policy #4492</p>
                <p className="text-xs text-slate-400">Comprehensive Coverage</p>
              </div>
              <Eye className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
          </div>
        </div>

        {/* Payout Method */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-4 h-4 text-[#ee8c2b]" />
            <h4 className="font-extrabold text-slate-800">Payout Method</h4>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-xs">
              B
            </div>
            <div>
              <p className="font-bold text-slate-700 text-sm">Chase •••• 8812</p>
              <p className="text-xs text-slate-400">Default Payment Method</p>
            </div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Available to Withdraw</p>
          <p className="text-2xl font-extrabold text-[#ee8c2b] mb-3">$412.50</p>
          <button className="w-full py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer">
            Withdraw Now
          </button>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setIsOnline(true)}
          className="flex items-center gap-2 px-5 py-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          Go Online
        </button>

        <div className="flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-sm font-bold text-rose-500 hover:text-rose-600 cursor-pointer">
            <LogOut className="w-4 h-4" />
            Sign Out Account
          </button>
          <button className="text-sm font-bold text-slate-500 hover:text-slate-700 cursor-pointer">
            Cancel
          </button>
          <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}