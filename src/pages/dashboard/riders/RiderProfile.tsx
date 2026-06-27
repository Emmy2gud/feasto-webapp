import { useState } from "react";
import {
  Star,
  Package,
  Clock,
  Award,
  TrendingUp,
  Bike,
  Edit3,
  Camera,
  ToggleLeft,
  ToggleRight
} from "lucide-react";

export default function RiderProfile() {
  const [isOnline, setIsOnline] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("Alex Rivera");
  const [phone, setPhone] = useState("+1 (555) 012-3456");
  const [vehicle, setVehicle] = useState("Electric Scooter — Red");

  const stats = [
    { label: "Total Deliveries", value: "1,241", icon: Package, color: "bg-orange-50 text-[#ee8c2b]" },
    { label: "Avg. Delivery Time", value: "22m", icon: Clock, color: "bg-sky-50 text-sky-600" },
    { label: "Customer Rating", value: "4.95", icon: Star, color: "bg-yellow-50 text-yellow-500" },
    { label: "Completed Days", value: "184", icon: Award, color: "bg-green-50 text-green-600" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Profile Hero Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        {/* Cover Banner */}
        <div className="h-32 bg-gradient-to-br from-[#ee8c2b] to-amber-400 relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)" }}></div>
        </div>

        {/* Profile Info */}
        <div className="px-8 pb-8">
          {/* Avatar + Online Toggle Row */}
          <div className="flex items-end justify-between -mt-12 mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-orange-100 border-4 border-white shadow-lg flex items-center justify-center text-3xl font-black text-[#ee8c2b]">
                AR
              </div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#ee8c2b] text-white rounded-full flex items-center justify-center shadow-md hover:bg-[#d6761f] cursor-pointer transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center gap-3 pb-2">
              <span className="text-sm font-bold text-slate-700">{isOnline ? "Online" : "Offline"}</span>
              <button onClick={() => setIsOnline(!isOnline)} className="cursor-pointer">
                {isOnline
                  ? <ToggleRight className="w-10 h-10 text-[#ee8c2b]" />
                  : <ToggleLeft className="w-10 h-10 text-slate-300" />
                }
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">{name}</h2>
              <p className="text-slate-400 font-medium text-sm mt-0.5">Campus Rider · Gold Level</p>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className={`w-4 h-4 ${s <= 5 ? "fill-orange-400 text-orange-400" : "fill-slate-100 text-slate-100"}`} />
                ))}
                <span className="text-sm font-bold text-slate-700 ml-1">4.95</span>
                <span className="text-sm text-slate-400">(1,241 reviews)</span>
              </div>
            </div>
            <button
              onClick={() => setEditing(!editing)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-sm font-bold transition-colors cursor-pointer"
            >
              <Edit3 className="w-4 h-4" />
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
            <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900">{stat.value}</h4>
            <p className="text-xs text-slate-400 font-bold mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Profile Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
          <h4 className="font-extrabold text-slate-800 text-lg">Personal Details</h4>
          {[
            { label: "Full Name", value: name, setter: setName },
            { label: "Phone Number", value: phone, setter: setPhone },
          ].map(field => (
            <div key={field.label}>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{field.label}</label>
              <input
                value={field.value}
                onChange={e => field.setter(e.target.value)}
                disabled={!editing}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  editing
                    ? "border-[#ee8c2b]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30"
                    : "border-slate-100 bg-slate-50 text-slate-600 cursor-not-allowed"
                }`}
              />
            </div>
          ))}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
            <input
              value="alex.rivera@campus.edu"
              disabled
              className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 text-sm text-slate-400 cursor-not-allowed"
            />
          </div>
          {editing && (
            <button
              onClick={() => setEditing(false)}
              className="w-full py-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl font-bold transition-all active:scale-95 cursor-pointer"
            >
              Save Changes
            </button>
          )}
        </div>

        {/* Vehicle Info + Badges */}
        <div className="space-y-6">
          {/* Vehicle */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
            <h4 className="font-extrabold text-slate-800 text-lg">Vehicle Details</h4>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Vehicle Type</label>
              <input
                value={vehicle}
                onChange={e => setVehicle(e.target.value)}
                disabled={!editing}
                className={`w-full px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  editing
                    ? "border-[#ee8c2b]/30 bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30"
                    : "border-slate-100 bg-slate-50 text-slate-600 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <Bike className="w-8 h-8 text-[#ee8c2b]" />
              <div>
                <p className="font-bold text-slate-700 text-sm">Electric Scooter</p>
                <p className="text-xs text-slate-400">Plate: EV-4821 • Registered</p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h4 className="font-extrabold text-slate-800 text-lg mb-4">Achievements</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: "🥇", label: "Top Earner", earned: true },
                { emoji: "⚡", label: "Speed Star", earned: true },
                { emoji: "💎", label: "Gold Rider", earned: true },
                { emoji: "🌧️", label: "Rain Warrior", earned: true },
                { emoji: "🔥", label: "Hot Streak", earned: false },
                { emoji: "🎯", label: "Precision", earned: false }
              ].map(badge => (
                <div
                  key={badge.label}
                  className={`rounded-xl p-3 text-center border transition-all ${
                    badge.earned ? "border-orange-100 bg-orange-50" : "border-slate-100 bg-slate-50 opacity-40"
                  }`}
                >
                  <div className="text-2xl mb-1">{badge.emoji}</div>
                  <p className="text-[10px] font-bold text-slate-600">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
