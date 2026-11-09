import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Download,
  Package,
  Award,
} from "lucide-react";

const earningsData = [
  { label: "MON", amount: "$42.50", height: "55%" },
  { label: "TUE", amount: "$38.00", height: "48%" },
  { label: "WED", amount: "$78.25", height: "85%" },
  { label: "THU", amount: "$55.00", height: "70%" },
  { label: "FRI", amount: "$62.00", height: "78%" },
  { label: "SAT", amount: "$90.50", height: "100%", active: true },
  { label: "SUN", amount: "$28.00", height: "36%" },
];

const transactions = [
  { id: "SH-8291", time: "12:42 PM", destination: "Library Commons", earnings: "$8.50", tip: "$2.00", rating: 5 },
  { id: "SH-8289", time: "11:15 AM", destination: "North Dorms, Hall A", earnings: "$12.20", tip: "$1.00", rating: 4 },
  { id: "SH-8285", time: "10:40 AM", destination: "Student Union, Rm 204", earnings: "$6.75", tip: "$0.00", rating: 5 },
  { id: "SH-8271", time: "09:15 AM", destination: "Engineering Block C", earnings: "$14.80", tip: "$3.00", rating: 5 },
  { id: "SH-8260", time: "08:55 AM", destination: "Science Research Park", earnings: "$9.25", tip: "$1.50", rating: 4 },
];

export default function EarningsAnalytics() {
  const [period, setPeriod] = useState<"Weekly" | "Monthly">("Weekly");

  const totalToday = 142.50;
  const totalWeek = 394.25;
  const totalMonth = 1820.00;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Earnings & Payout Analytics</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Real-time breakdown of trip fares, bonuses, and campus tips.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60">
            {(["Weekly", "Monthly"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  period === p ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer">
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Today's Earnings</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">${totalToday.toFixed(2)}</h3>
            <span className="text-xs font-semibold text-emerald-600 flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +12.5% vs avg
            </span>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Weekly Total</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">${totalWeek.toFixed(2)}</h3>
            <p className="text-xs text-slate-500 pt-0.5">63 trips fulfilled</p>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
            <Package className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Monthly Run Rate</p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-600">${totalMonth.toFixed(2)}</h3>
            <p className="text-xs text-slate-500 pt-0.5">Top tier rider incentives unlocked</p>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Daily Breakdown Bar Chart */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Shift Payout Distribution</h3>
            <p className="text-xs text-slate-500 mt-0.5">Daily breakdown across the last 7 calendar days</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            Avg: $56.32 / shift
          </span>
        </div>

        <div className="h-60 flex items-end justify-between gap-3 px-2">
          {earningsData.map((d) => (
            <div key={d.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <span className="text-[11px] font-semibold text-slate-400 group-hover:text-slate-800 transition-colors">
                {d.amount}
              </span>
              <div
                className={`w-full rounded-t-md transition-all ${
                  d.active ? "bg-[#ee8c2b] shadow-xs" : "bg-slate-100 hover:bg-orange-100"
                }`}
                style={{ height: d.height }}
              />
              <span className={`text-[10px] font-bold ${d.active ? "text-[#ee8c2b]" : "text-slate-400"}`}>
                {d.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trips Breakdown Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-900">Recent Completed Trips & Tips</h3>
          <p className="text-xs text-slate-500 mt-0.5">Trip fare and customer tip details</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Trip Ref</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Destination</th>
                <th className="py-3 px-4">Customer Tip</th>
                <th className="py-3 px-5 text-right">Trip Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {transactions.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{t.id}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{t.time}</td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-800">{t.destination}</td>
                  <td className="py-3.5 px-4 text-xs font-semibold text-emerald-600">+{t.tip}</td>
                  <td className="py-3.5 px-5 text-right font-bold text-xs sm:text-sm text-slate-900">
                    {t.earnings}
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
