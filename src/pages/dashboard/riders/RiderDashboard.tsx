import { useState } from "react";
import {
  DollarSign,
  Package,
  Star,
  Timer,
  TrendingUp,
  Map,
  HeadphonesIcon,
  PlusCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const recentDeliveries = [
  {
    id: "#SH-8291",
    destination: "Library Commons, 3rd Floor",
    from: "Saffron Bistro",
    time: "12:42 PM",
    earnings: "$8.50",
    status: "DELIVERED",
    rating: 5
  },
  {
    id: "#SH-8289",
    destination: "North Dorms, Hall A",
    from: "Greenhouse Cafe",
    time: "11:15 AM",
    earnings: "$12.20",
    status: "DELIVERED",
    rating: 4
  },
  {
    id: "#SH-8285",
    destination: "Student Union, Rm 204",
    from: "Pasta Central",
    time: "10:40 AM",
    earnings: "$6.75",
    status: "CANCELLED",
    rating: 0
  }
];

const weekData = [
  { label: "MON", height: "60%", active: false },
  { label: "TUE", height: "45%", active: false },
  { label: "WED", height: "85%", active: false },
  { label: "THU", height: "100%", active: true },
  { label: "FRI", height: "70%", active: false },
  { label: "SAT", height: "40%", active: false },
  { label: "SUN", height: "30%", active: false }
];

export default function RiderDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Summary Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Today's Earnings */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#ee8c2b]/20 transition-colors">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-orange-50 rounded-xl">
              <DollarSign className="w-5 h-5 text-[#ee8c2b]" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">+12.5%</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Today's Earnings</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">$142.50</h3>
          </div>
        </div>

        {/* Today's Deliveries */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#ee8c2b]/20 transition-colors">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-sky-50 rounded-xl">
              <Package className="w-5 h-5 text-sky-500" />
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Target: 20</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Today's Deliveries</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">14</h3>
          </div>
        </div>

        {/* Customer Rating */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-[#ee8c2b]/20 transition-colors">
          <div className="flex justify-between items-start">
            <div className="p-2.5 bg-orange-50 rounded-xl">
              <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            </div>
            <span className="text-xs font-bold text-orange-600">Top 5%</span>
          </div>
          <div className="mt-4">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Customer Rating</p>
            <div className="flex items-baseline gap-1 mt-1">
              <h3 className="text-3xl font-extrabold text-slate-900">4.95</h3>
              <span className="text-slate-400 text-sm">/5.0</span>
            </div>
          </div>
        </div>

        {/* Active Status */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-xs font-bold text-green-600">ONLINE</p>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Current Session</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">3h 42m</h3>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5">
            <Timer className="w-24 h-24 text-slate-800" />
          </div>
        </div>
      </section>

      {/* Chart + Sidebar Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Trends Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h4 className="text-xl font-extrabold text-slate-800">Weekly Trends</h4>
              <p className="text-sm text-slate-400 font-medium mt-0.5">Earnings performance over the last 7 days</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold rounded-lg bg-orange-50 text-[#ee8c2b]">Weekly</button>
              <button className="px-3 py-1 text-xs font-bold rounded-lg hover:bg-slate-50 text-slate-500 transition-colors">Monthly</button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-3 px-2">
            {weekData.map((bar) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className={`w-full rounded-t-lg transition-all group-hover:opacity-80 ${
                    bar.active
                      ? "bg-[#ee8c2b] shadow-lg shadow-orange-500/20"
                      : "bg-slate-100 hover:bg-orange-100"
                  }`}
                  style={{ height: bar.height }}
                ></div>
                <span className={`text-[10px] font-bold ${bar.active ? "text-[#ee8c2b]" : "text-slate-400"}`}>
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panels */}
        <div className="space-y-6">
          {/* Availability Panel */}
          <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
            <h4 className="text-lg font-extrabold mb-4">Availability</h4>
            <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/10">
              <div>
                <p className="text-sm font-bold">Online Status</p>
                <p className="text-xs text-white/60">Ready to accept orders</p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                  isOnline ? "bg-[#ee8c2b]" : "bg-white/20"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                    isOnline ? "translate-x-6" : "translate-x-1"
                  }`}
                ></span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="flex flex-col items-center justify-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                <Map className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Hotspots</span>
              </button>
              <button className="flex flex-col items-center justify-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer">
                <HeadphonesIcon className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Support</span>
              </button>
            </div>
          </div>

          {/* Next Reward */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-sm font-extrabold text-slate-800">Next Reward</h4>
              <span className="text-xs text-[#ee8c2b] font-bold">85%</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full mb-3">
              <div className="bg-[#ee8c2b] h-full rounded-full" style={{ width: "85%" }}></div>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Complete <b className="text-slate-700">6 more deliveries</b> to unlock the <b className="text-slate-700">Weekend Multiplier</b>.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Deliveries Table */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="text-xl font-extrabold text-slate-800">Recent Deliveries</h4>
          <Link to="/rider/history" className="text-sm font-bold text-[#ee8c2b] hover:underline">
            View All History
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-xs font-bold uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-8 py-4">Order ID</th>
                <th className="px-8 py-4">Destination</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4">Earnings</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentDeliveries.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-bold text-sm text-slate-800">{d.id}</td>
                  <td className="px-8 py-4">
                    <p className="text-sm font-semibold text-slate-700">{d.destination}</p>
                    <p className="text-[11px] text-slate-400 font-medium">From: {d.from}</p>
                  </td>
                  <td className="px-8 py-4 text-sm text-slate-500">{d.time}</td>
                  <td className="px-8 py-4 font-extrabold text-[#ee8c2b]">{d.earnings}</td>
                  <td className="px-8 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold ${
                        d.status === "DELIVERED"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                  <td className="px-8 py-4">
                    {d.rating > 0 ? (
                      <div className="flex text-orange-400 gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-3.5 h-3.5 ${s <= d.rating ? "fill-orange-400" : "fill-slate-200 text-slate-200"}`}
                          />
                        ))}
                      </div>
                    ) : (
                      <span className="text-xs italic text-slate-400">No rating</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-[#ee8c2b] text-white p-4 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center gap-3 cursor-pointer">
        <PlusCircle className="w-5 h-5" />
        <span className="font-bold text-sm">Quick Dash</span>
      </button>
    </div>
  );
}
