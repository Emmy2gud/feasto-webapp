import { useState } from "react";
import {
  Star,
  Camera,
  ToggleLeft,
  ToggleRight,
  ShieldCheck,
  Mail,
  Phone,
  CheckCircle,
} from "lucide-react";

export default function RiderProfile() {
  const [isOnline, setIsOnline] = useState(true);
  const [name, setName] = useState("Alex Rivera");
  const [vehicle, setVehicle] = useState("Electric Bicycle");
  const [plate, setPlate] = useState("SF-290-HARVEST");
  const [phone, setPhone] = useState("+1 (555) 012-3456");
  const [email, setEmail] = useState("alex.rivera@feasto.app");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rider Profile & Fleet Settings</h1>
        <p className="text-sm text-slate-500 font-normal mt-0.5">
          Manage your personal verification, campus vehicle credentials, and contact info.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          Profile changes updated successfully!
        </div>
      )}

      {/* Top Profile Summary Card */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 flex flex-col sm:flex-row items-start gap-5">
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-200 bg-orange-100 flex items-center justify-center font-bold text-2xl text-[#ee8c2b]">
            AR
          </div>
          <button
            type="button"
            className="absolute -bottom-1 -right-1 w-7 h-7 bg-[#ee8c2b] text-white rounded-full flex items-center justify-center shadow-xs hover:bg-[#d6761f] cursor-pointer transition-colors"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-slate-900">{name}</h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Rider
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Gold Tier Campus Courier • Active since Oct 2025</p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs font-semibold text-slate-700">Online Queue:</span>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className="cursor-pointer text-[#ee8c2b]"
                aria-label="Toggle online"
              >
                {isOnline ? (
                  <ToggleRight className="w-8 h-8 text-[#ee8c2b]" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" /> {email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" /> {phone}
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> 4.95 Rating (240+ trips)
            </span>
          </div>
        </div>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSave} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 space-y-6">
        <div>
          <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
            Vehicle & Contact Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Vehicle Type</label>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Campus Permit / Plate #</label>
              <input
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            type="submit"
            className="px-5 py-2.5 bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
}
