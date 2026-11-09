import { useState } from "react";
import {
  Search,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

const allDeliveries = [
  { id: "SH-8291", date: "Today", time: "12:42 PM", from: "Saffron Bistro", destination: "Library Commons, 3rd Floor", distance: "0.8 mi", earnings: "$10.50", status: "Delivered", rating: 5 },
  { id: "SH-8289", date: "Today", time: "11:15 AM", from: "Greenhouse Cafe", destination: "North Dorms, Hall A", distance: "1.1 mi", earnings: "$13.20", status: "Delivered", rating: 4 },
  { id: "SH-8285", date: "Today", time: "10:40 AM", from: "Pasta Central", destination: "Student Union, Rm 204", distance: "0.5 mi", earnings: "$6.75", status: "Cancelled", rating: 0 },
  { id: "SH-8271", date: "Yesterday", time: "4:10 PM", from: "Spice Tavern", destination: "Engineering Block C", distance: "1.4 mi", earnings: "$14.80", status: "Delivered", rating: 5 },
  { id: "SH-8260", date: "Yesterday", time: "2:25 PM", from: "Campus Brews", destination: "Science Park, Annex 2", distance: "0.9 mi", earnings: "$9.25", status: "Delivered", rating: 5 },
  { id: "SH-8240", date: "Jun 25", time: "1:00 PM", from: "Urban Snacks", destination: "Business School, Wing C", distance: "1.8 mi", earnings: "$12.00", status: "Delivered", rating: 4 },
  { id: "SH-8198", date: "Jun 24", time: "11:45 AM", from: "Saffron Grill", destination: "Sports Complex, Lobby", distance: "2.2 mi", earnings: "$16.40", status: "Delivered", rating: 5 },
  { id: "SH-8155", date: "Jun 23", time: "3:30 PM", from: "The Daily Grind", destination: "Faculty Lounge, Floor 4", distance: "0.6 mi", earnings: "$7.90", status: "Cancelled", rating: 0 },
];

export default function DeliveryHistory() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Delivered" | "Cancelled">("All");

  const filtered = allDeliveries.filter((d) => {
    const matchSearch =
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.destination.toLowerCase().includes(search.toLowerCase()) ||
      d.from.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || d.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalEarnings = filtered
    .filter((d) => d.status === "Delivered")
    .reduce((sum, d) => sum + parseFloat(d.earnings.replace("$", "")), 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Delivery History</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Complete audit trail of fulfilled deliveries, student tips, and ratings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs">
            {filtered.length} Records
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            ${totalEarnings.toFixed(2)} Total Earned
          </span>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search trip ID, merchant, destination..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/20 focus:border-[#ee8c2b] placeholder:text-slate-400 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 self-end sm:self-center">
          <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200/60">
            {(["All", "Delivered", "Cancelled"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  statusFilter === tab
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Deliveries Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Trip Ref</th>
                <th className="py-3 px-4">Date / Time</th>
                <th className="py-3 px-4">Merchant</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Distance</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-5 text-right">Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filtered.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{d.id}</td>
                  <td className="py-3.5 px-4 text-xs">
                    <p className="font-semibold text-slate-800">{d.date}</p>
                    <p className="text-slate-400">{d.time}</p>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-700 font-medium">{d.from}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-700 font-medium">{d.destination}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{d.distance}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={d.status} />
                  </td>
                  <td className="py-3.5 px-4">
                    {d.rating > 0 ? (
                      <div className="flex items-center text-amber-500 gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${
                              s <= d.rating ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs italic text-slate-400">No rating</span>
                    )}
                  </td>
                  <td className="py-3.5 px-5 text-right font-bold text-xs sm:text-sm text-slate-900">
                    {d.earnings}
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400 font-medium text-xs">
                    No delivery records match your current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="px-5 py-3.5 bg-slate-50/50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>Showing {filtered.length} of {allDeliveries.length} trips</span>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 py-1 rounded-md bg-[#ee8c2b] text-white font-bold text-xs">1</span>
            <button className="p-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 cursor-pointer">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
