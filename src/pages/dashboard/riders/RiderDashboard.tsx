import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Package,
  Star,
  Timer,
  ArrowRight,
  TrendingUp,
  Truck,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

const recentDeliveries = [
  {
    id: "SH-8291",
    destination: "Library Commons, 3rd Floor",
    from: "Saffron Bistro",
    time: "12:42 PM",
    earnings: "$8.50",
    status: "Delivered",
    rating: 5,
  },
  {
    id: "SH-8289",
    destination: "North Dorms, Hall A",
    from: "Greenhouse Cafe",
    time: "11:15 AM",
    earnings: "$12.20",
    status: "Delivered",
    rating: 4,
  },
  {
    id: "SH-8285",
    destination: "Student Union, Rm 204",
    from: "Pasta Central",
    time: "10:40 AM",
    earnings: "$6.75",
    status: "Cancelled",
    rating: 0,
  },
];

const weekData = [
  { label: "MON", height: "60%", amount: "$84", active: false },
  { label: "TUE", height: "45%", amount: "$62", active: false },
  { label: "WED", height: "85%", amount: "$118", active: false },
  { label: "THU", height: "100%", amount: "$142", active: true },
  { label: "FRI", height: "70%", amount: "$98", active: false },
  { label: "SAT", height: "40%", amount: "$56", active: false },
  { label: "SUN", height: "30%", amount: "$42", active: false },
];

export default function RiderDashboard() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="space-y-6  mx-auto pb-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Rider Dashboard</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Your daily shift performance, active route status, and payout summary.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/rider/orders"
            className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Package className="w-4 h-4" />
            <span>Find Deliveries</span>
          </Link>
          <Link
            to="/rider/active-delivery"
            className="px-4 py-2 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
          >
            <Truck className="w-4 h-4 text-sky-600" />
            <span>Active Trip</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Earnings */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Today's Earnings</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">$142.50</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +12.5% vs yesterday
            </span>
          </div>
          <div className="w-11 h-11 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        {/* Today's Deliveries */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Deliveries Completed</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">14</h3>
            <p className="text-xs text-slate-500 pt-0.5">Target: 20 trips / day</p>
          </div>
          <div className="w-11 h-11 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
            <Package className="w-5 h-5" />
          </div>
        </div>

        {/* Customer Rating */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Customer Rating</p>
            <div className="flex items-baseline gap-1">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">4.95</h3>
              <span className="text-xs text-slate-400 font-medium">/ 5.0</span>
            </div>
            <span className="text-xs text-amber-600 font-semibold flex items-center gap-1 pt-0.5">
              <Star size={12} className="fill-amber-500 text-amber-500" /> Top 5% campus rider
            </span>
          </div>
          <div className="w-11 h-11 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center shrink-0">
            <Star className="w-5 h-5 fill-amber-500" />
          </div>
        </div>

        {/* Active Shift Session */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Shift Duration</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">3h 42m</h3>
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-700">Online & Dispatched</span>
            </div>
          </div>
          <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <Timer className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Active Trip Prompt Banner */}
      <div className="bg-slate-900 rounded-xl p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 text-[#ee8c2b] flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-500/30 text-orange-300">
                Live Active Trip
              </span>
              <span className="text-xs text-slate-400">Order #SH-8291</span>
            </div>
            <p className="text-sm font-semibold mt-0.5">
              Dropoff at <span className="text-white font-bold">Library Commons, 3rd Floor</span> (0.4 mi remaining)
            </p>
          </div>
        </div>

        <Link
          to="/rider/active-delivery"
          className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shrink-0"
        >
          <span>Open Active Delivery</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Weekly Trends & Shift Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Earnings Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/80 shadow-xs p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-base font-semibold text-slate-900">Weekly Earnings Performance</h4>
              <p className="text-xs text-slate-500 mt-0.5">Summary of payouts across the last 7 delivery days</p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">
              Week Total: $602
            </span>
          </div>

          <div className="h-56 flex items-end justify-between gap-3 px-2 pt-4">
            {weekData.map((bar) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                  {bar.amount}
                </span>
                <div
                  className={`w-full rounded-t-md transition-all ${
                    bar.active
                      ? "bg-[#ee8c2b] shadow-xs"
                      : "bg-slate-100 hover:bg-orange-100"
                  }`}
                  style={{ height: bar.height }}
                />
                <span
                  className={`text-[10px] font-bold ${
                    bar.active ? "text-[#ee8c2b]" : "text-slate-400"
                  }`}
                >
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Info Card */}
        <div className="space-y-6">
          {/* Shift Status Card */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5 space-y-4">
            <h4 className="text-base font-semibold text-slate-900">Shift Availability</h4>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-800">Online Queue</p>
                <p className="text-[11px] text-slate-500">Ready for incoming campus orders</p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  isOnline
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-300 text-slate-700"
                }`}
              >
                {isOnline ? "Online" : "Paused"}
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="font-semibold text-slate-700">Daily Quest Progress</span>
                <span className="font-bold text-[#ee8c2b]">14 / 20 trips</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#ee8c2b] h-full rounded-full" style={{ width: "70%" }} />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Complete 6 more deliveries to unlock the <b>+$15 Weekend Multiplier</b> bonus.
              </p>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Quick Navigation</p>
            <div className="space-y-2">
              <Link
                to="/rider/orders"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                <span>Available Orders Pool</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                to="/rider/wallet"
                className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
              >
                <span>Wallet & Express Payout</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Deliveries Table */}
      <section className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h4 className="text-base font-semibold text-slate-900">Recent Completed Deliveries</h4>
            <p className="text-xs text-slate-500 mt-0.5">Past trips fulfilled during today's shift</p>
          </div>
          <Link
            to="/rider/delivery-history"
            className="text-xs font-semibold text-[#ee8c2b] hover:text-[#d6761f] flex items-center gap-1"
          >
            <span>View All History</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Trip Ref</th>
                <th className="py-3 px-4">Pickup & Dropoff</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Earnings</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {recentDeliveries.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{d.id}</td>
                  <td className="py-3.5 px-4">
                    <p className="text-xs sm:text-sm font-semibold text-slate-800">{d.destination}</p>
                    <p className="text-xs text-slate-400">Merchant: {d.from}</p>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{d.time}</td>
                  <td className="py-3.5 px-4 font-bold text-xs sm:text-sm text-slate-900">{d.earnings}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={d.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    {d.rating > 0 ? (
                      <div className="flex items-center justify-end text-amber-500 gap-0.5">
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
                      <span className="text-xs text-slate-400 italic">No rating</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
