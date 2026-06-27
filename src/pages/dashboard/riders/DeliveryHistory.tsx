import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar
} from "lucide-react";

const allDeliveries = [
  { id: "#SH-8291", date: "Today", time: "12:42 PM", from: "Saffron Bistro", destination: "Library Commons, 3rd Floor", distance: "0.8mi", earnings: "$10.50", status: "Delivered", rating: 5 },
  { id: "#SH-8289", date: "Today", time: "11:15 AM", from: "Greenhouse Cafe", destination: "North Dorms, Hall A", distance: "1.1mi", earnings: "$13.20", status: "Delivered", rating: 4 },
  { id: "#SH-8285", date: "Today", time: "10:40 AM", from: "Pasta Central", destination: "Student Union, Rm 204", distance: "0.5mi", earnings: "$6.75", status: "Cancelled", rating: 0 },
  { id: "#SH-8271", date: "Yesterday", time: "4:10 PM", from: "Spice Tavern", destination: "Engineering Block C", distance: "1.4mi", earnings: "$14.80", status: "Delivered", rating: 5 },
  { id: "#SH-8260", date: "Yesterday", time: "2:25 PM", from: "Campus Brews", destination: "Science Park, Annex 2", distance: "0.9mi", earnings: "$9.25", status: "Delivered", rating: 5 },
  { id: "#SH-8240", date: "Jun 25", time: "1:00 PM", from: "Urban Snacks", destination: "Business School, Wing C", distance: "1.8mi", earnings: "$12.00", status: "Delivered", rating: 4 },
  { id: "#SH-8198", date: "Jun 24", time: "11:45 AM", from: "Saffron Grill", destination: "Sports Complex, Lobby", distance: "2.2mi", earnings: "$16.40", status: "Delivered", rating: 5 },
  { id: "#SH-8155", date: "Jun 23", time: "3:30 PM", from: "The Daily Grind", destination: "Faculty Lounge, Floor 4", distance: "0.6mi", earnings: "$7.90", status: "Cancelled", rating: 0 }
];

export default function DeliveryHistory() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Delivered" | "Cancelled">("All");

  const filtered = allDeliveries.filter(d => {
    const matchSearch = d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.destination.toLowerCase().includes(search.toLowerCase()) ||
      d.from.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || d.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalEarnings = filtered
    .filter(d => d.status === "Delivered")
    .reduce((sum, d) => sum + parseFloat(d.earnings.replace("$", "")), 0);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Delivery History</h2>
          <p className="text-slate-400 font-medium mt-1">Complete archive of all your deliveries and earnings.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
            {filtered.length} records
          </span>
          <span className="text-sm font-extrabold text-[#ee8c2b] bg-orange-50 px-4 py-2 rounded-xl border border-orange-100">
            ${totalEarnings.toFixed(2)} earned
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            placeholder="Search order ID, restaurant, destination..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            {(["All", "Delivered", "Cancelled"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  statusFilter === tab ? "bg-white text-[#ee8c2b] shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer shadow-sm">
            <Calendar className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Deliveries Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Order ID</th>
                <th className="px-8 py-4">Date / Time</th>
                <th className="px-8 py-4">Restaurant</th>
                <th className="px-8 py-4">Destination</th>
                <th className="px-8 py-4">Distance</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Rating</th>
                <th className="px-8 py-4 text-right">Earnings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(d => (
                <tr key={d.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-bold text-sm text-slate-800">{d.id}</td>
                  <td className="px-8 py-4">
                    <p className="text-sm font-semibold text-slate-700">{d.date}</p>
                    <p className="text-[11px] text-slate-400">{d.time}</p>
                  </td>
                  <td className="px-8 py-4 text-sm font-medium text-slate-600">{d.from}</td>
                  <td className="px-8 py-4 text-sm font-medium text-slate-700">{d.destination}</td>
                  <td className="px-8 py-4 text-sm text-slate-500">{d.distance}</td>
                  <td className="px-8 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                      d.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                    }`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    {d.rating > 0 ? (
                      <div className="flex text-orange-400 gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} className={`w-3.5 h-3.5 ${s <= d.rating ? "fill-orange-400" : "fill-slate-100 text-slate-100"}`} />
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs italic text-slate-300">No rating</span>
                    )}
                  </td>
                  <td className="px-8 py-4 text-right">
                    <span className={`font-extrabold text-sm ${d.status === "Delivered" ? "text-[#ee8c2b]" : "text-slate-400 line-through"}`}>
                      {d.earnings}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-8 py-12 text-center text-slate-400 font-medium">
                    No deliveries found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-8 py-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-semibold">Showing {filtered.length} of {allDeliveries.length} deliveries</p>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 cursor-pointer">
              <ChevronLeft className="w-4 h-4 text-slate-500" />
            </button>
            <button className="px-3 py-2 bg-[#ee8c2b] text-white text-xs font-bold rounded-xl shadow-sm">1</button>
            <button className="px-3 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold rounded-xl cursor-pointer text-slate-600">2</button>
            <button className="p-2 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 cursor-pointer">
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
