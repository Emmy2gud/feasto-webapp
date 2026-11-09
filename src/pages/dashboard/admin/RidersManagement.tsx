import { useState } from "react";
import {
  Bike,
  Search,
  Star,
  CheckCircle2,
  Clock,
  TrendingUp,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Rider {
  id: string;
  name: string;
  vehicle: "Electric Bike" | "Motorbike" | "Bicycle" | "Cargo Van";
  verification: "VERIFIED" | "PENDING" | "REJECTED";
  rating: number;
  trips: number;
  status: "Online" | "Offline" | "Busy";
  avatar: string;
}

const initialRiders: Rider[] = [
  {
    id: "SF-7729",
    name: "Amara Okafor",
    vehicle: "Electric Bike",
    verification: "VERIFIED",
    rating: 4.92,
    trips: 124,
    status: "Online",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
  },
  {
    id: "SF-1204",
    name: "Marcus Chen",
    vehicle: "Motorbike",
    verification: "PENDING",
    rating: 4.65,
    trips: 42,
    status: "Offline",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    id: "SF-3381",
    name: "Sofia Rodriguez",
    vehicle: "Bicycle",
    verification: "VERIFIED",
    rating: 5.0,
    trips: 211,
    status: "Online",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
  {
    id: "SF-9921",
    name: "James Wilson",
    vehicle: "Cargo Van",
    verification: "VERIFIED",
    rating: 4.78,
    trips: 563,
    status: "Offline",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

export default function RidersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("All");
  const [riders, setRiders] = useState<Rider[]>(initialRiders);

  const toggleVerification = (id: string) => {
    setRiders((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          const nextVer = r.verification === "VERIFIED" ? "PENDING" : "VERIFIED";
          return { ...r, verification: nextVer };
        }
        return r;
      })
    );
  };

  const filteredRiders = riders.filter((rider) => {
    const matchesSearch =
      rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rider.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVehicle = vehicleFilter === "All" || rider.vehicle === vehicleFilter;
    return matchesSearch && matchesVehicle;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Fleet & Courier Management</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Oversee campus delivery couriers, verify background documents, and monitor trip activity.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            {riders.filter((r) => r.status === "Online").length} Active on Shift
          </span>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Fleet</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{riders.length} Registered</h3>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center">
            <Bike className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Verified Couriers</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">
              {riders.filter((r) => r.verification === "VERIFIED").length} Active
            </h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Review</p>
            <h3 className="text-2xl font-bold text-amber-600 mt-1">
              {riders.filter((r) => r.verification === "PENDING").length} Riders
            </h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg Courier Rating</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">4.84 ★</h3>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Directory Table Container */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Filter controls */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search rider name or badge ID..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 self-start sm:self-center">
            {(["All", "Electric Bike", "Motorbike", "Bicycle"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setVehicleFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  vehicleFilter === tab
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Riders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Courier</th>
                <th className="py-3 px-4">Vehicle Mode</th>
                <th className="py-3 px-4">Verification</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Total Trips</th>
                <th className="py-3 px-4">Live Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredRiders.map((rider) => (
                <tr key={rider.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
                        src={rider.avatar}
                        alt={rider.name}
                      />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm text-slate-900">{rider.name}</p>
                        <p className="text-xs font-mono text-slate-400">#{rider.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-700">{rider.vehicle}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        rider.verification === "VERIFIED"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : rider.verification === "PENDING"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      {rider.verification}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{rider.rating}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-800 font-medium">{rider.trips}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={rider.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => toggleVerification(rider.id)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer border ${
                        rider.verification === "VERIFIED"
                          ? "border-slate-200 text-slate-600 hover:bg-slate-100"
                          : "bg-emerald-600 text-white border-transparent hover:bg-emerald-700"
                      }`}
                    >
                      {rider.verification === "VERIFIED" ? "Re-verify" : "Approve Rider"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
