import React, { useState } from "react";
import {
  Bike,
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  Star,
  CheckCircle2,
  Hourglass,
  Clock,
  MapPin,
  TrendingUp,
  Download,
  AlertOctagon,
  Percent
} from "lucide-react";

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

export default function RidersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [vehicleFilter, setVehicleFilter] = useState("All");

  const [riders, setRiders] = useState<Rider[]>([
    {
      id: "SF-7729",
      name: "Amara Okafor",
      vehicle: "Electric Bike",
      verification: "VERIFIED",
      rating: 4.92,
      trips: 124,
      status: "Online",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop"
    },
    {
      id: "SF-1204",
      name: "Marcus Chen",
      vehicle: "Motorbike",
      verification: "PENDING",
      rating: 4.65,
      trips: 42,
      status: "Offline",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    },
    {
      id: "SF-3381",
      name: "Sofia Rodriguez",
      vehicle: "Bicycle",
      verification: "VERIFIED",
      rating: 5.0,
      trips: 211,
      status: "Online",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    },
    {
      id: "SF-9921",
      name: "James Wilson",
      vehicle: "Cargo Van",
      verification: "VERIFIED",
      rating: 4.78,
      trips: 563,
      status: "Offline",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ]);

  const filteredRiders = riders.filter(rider => {
    const matchesSearch =
      rider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rider.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVehicle = vehicleFilter === "All" || rider.vehicle === vehicleFilter;
    return matchesSearch && matchesVehicle;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Fleet Management</h2>
          <p className="text-slate-500 font-medium mt-1">Oversee logistics operations and rider performance.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b] w-full md:w-64 shadow-sm"
              placeholder="Search by name or ID..."
              type="text"
            />
          </div>
          <button className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-[#ee8c2b] transition-colors shadow-sm cursor-pointer">
            <Filter className="w-5 h-5" />
          </button>
          <button className="bg-[#ee8c2b] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer shrink-0">
            <UserPlus className="w-5 h-5" />
            <span>Add Rider</span>
          </button>
        </div>
      </div>

      {/* Fleet Summary Cards (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden group border border-slate-100">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Total Riders</p>
            <h3 className="text-4xl font-extrabold text-slate-900">1,284</h3>
            <div className="mt-2 flex items-center gap-1 text-green-600 text-xs font-bold">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12% vs last month</span>
            </div>
          </div>
          <div className="h-12 w-12 bg-[#ee8c2b]/10 rounded-xl flex items-center justify-center text-[#ee8c2b]">
            <Bike className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden group border border-slate-100">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Active Online</p>
            <h3 className="text-4xl font-extrabold text-slate-900">432</h3>
            <div className="mt-2 flex items-center gap-1 text-slate-500 text-xs font-bold">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-1"></span>
              <span>Current peak hours</span>
            </div>
          </div>
          <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl flex items-center justify-between shadow-sm relative overflow-hidden group border border-slate-100">
          <div>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Avg. Rating</p>
            <h3 className="text-4xl font-extrabold text-slate-900">4.85</h3>
            <div className="mt-2 flex items-center gap-1 text-[#ee8c2b] text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-[#ee8c2b]" />
              <span>Top 5% of all hubs</span>
            </div>
          </div>
          <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-700">
            <Star className="w-6 h-6 fill-orange-600" />
          </div>
        </div>
      </div>

      {/* Roster & Distribution Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 items-start">
        {/* Roster Table */}
        <div className="xl:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h4 className="font-bold text-lg text-slate-800">Fleet Roster</h4>
            <div className="flex gap-2">
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors shadow-sm cursor-pointer">
                Export CSV
              </button>
              <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">
                Bulk Action
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Rider Name</th>
                  <th className="px-6 py-4">Vehicle Type</th>
                  <th className="px-6 py-4">Verification</th>
                  <th className="px-6 py-4">Performance</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRiders.map(rider => (
                  <tr key={rider.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="h-10 w-10 rounded-full object-cover border border-slate-100"
                          src={rider.avatar}
                          alt={rider.name}
                        />
                        <div>
                          <div className="font-bold text-slate-800 text-sm">{rider.name}</div>
                          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">ID: {rider.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Bike className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-medium text-slate-600">{rider.vehicle}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          rider.verification === "VERIFIED"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {rider.verification === "VERIFIED" ? (
                          <CheckCircle2 className="w-3 h-3" />
                        ) : (
                          <Hourglass className="w-3 h-3" />
                        )}
                        {rider.verification}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-slate-800">{rider.rating}</span>
                        <Star className="w-3.5 h-3.5 fill-[#ee8c2b] text-[#ee8c2b]" />
                        <span className="text-[10px] text-slate-400 font-medium ml-1">({rider.trips} trips)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            rider.status === "Online"
                              ? "bg-green-500"
                              : rider.status === "Busy"
                              ? "bg-amber-500"
                              : "bg-slate-300"
                          }`}
                        ></span>
                        <span className="text-sm font-medium text-slate-700">{rider.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-6 mt-auto border-t border-slate-100 flex items-center justify-between bg-slate-50/20">
            <span className="text-xs font-semibold text-slate-400">
              Showing 1 to {filteredRiders.length} of {riders.length} entries
            </span>
            <div className="flex gap-1">
              <button className="h-8 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold disabled:opacity-50">
                Prev
              </button>
              <button className="h-8 w-8 rounded-lg bg-[#ee8c2b] text-white text-xs font-bold">1</button>
              <button className="h-8 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold">
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info Panels */}
        <div className="space-y-6">
          {/* Action Alert */}
          <div className="bg-orange-50/60 p-6 rounded-2xl border border-orange-100/60 flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-[#ee8c2b] shrink-0">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h5 className="font-extrabold text-orange-950 text-base">Pending Applications (12)</h5>
                <p className="text-orange-900/80 text-xs font-medium mt-1 leading-normal">
                  Rider applications are waiting for document check to get online verification.
                </p>
              </div>
            </div>
            <button className="w-full bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-2 rounded-xl font-bold text-xs transition-colors cursor-pointer">
              Review Now
            </button>
          </div>

          {/* Fleet Vehicle Distribution */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-4">Vehicle Distribution</p>
            <div className="space-y-4">
              {[
                { name: "Electric Bike", pct: 65, colorBg: "bg-[#ee8c2b]" },
                { name: "Motorbike", pct: 25, colorBg: "bg-sky-500" },
                { name: "Bicycle", pct: 10, colorBg: "bg-slate-400" }
              ].map((veh, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-bold mb-1 text-slate-700">
                    <span>{veh.name}</span>
                    <span>{veh.pct}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className={`${veh.colorBg} h-2 rounded-full`} style={{ width: `${veh.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
