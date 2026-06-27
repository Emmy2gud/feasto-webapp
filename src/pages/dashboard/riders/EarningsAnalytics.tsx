import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Package,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download
} from "lucide-react";

const earningsData = [
  { label: "MON", amount: 42.5, height: "55%" },
  { label: "TUE", amount: 38.0, height: "48%" },
  { label: "WED", amount: 78.25, height: "100%" },
  { label: "THU", amount: 55.0, height: "70%" },
  { label: "FRI", amount: 62.0, height: "79%" },
  { label: "SAT", amount: 90.5, height: "100%", active: true },
  { label: "SUN", amount: 28.0, height: "36%" }
];

const transactions = [
  { id: "#SH-8291", time: "12:42 PM", destination: "Library Commons", earnings: "$8.50", tip: "$2.00", rating: 5 },
  { id: "#SH-8289", time: "11:15 AM", destination: "North Dorms, Hall A", earnings: "$12.20", tip: "$1.00", rating: 4 },
  { id: "#SH-8285", time: "10:40 AM", destination: "Student Union, Rm 204", earnings: "$6.75", tip: "$0.00", rating: 5 },
  { id: "#SH-8271", time: "09:15 AM", destination: "Engineering Block C", earnings: "$14.80", tip: "$3.00", rating: 5 },
  { id: "#SH-8260", time: "08:55 AM", destination: "Science Research Park", earnings: "$9.25", tip: "$1.50", rating: 4 }
];

export default function EarningsAnalytics() {
  const [period, setPeriod] = useState<"Weekly" | "Monthly">("Weekly");

  const totalToday = 142.50;
  const totalWeek = 394.25;
  const totalMonth = 1820.00;

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Earnings Analytics</h2>
          <p className="text-slate-400 font-medium mt-1">Track your performance and income breakdown.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50 shadow-sm cursor-pointer">
            <Calendar className="w-4 h-4" />
            This Week
          </button>
          <button className="px-4 py-2 bg-[#ee8c2b] text-white rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#d6761f] shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#ee8c2b] p-6 rounded-2xl text-white shadow-lg shadow-orange-500/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/20 rounded-xl">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12.5%
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider opacity-80">Today's Earnings</p>
            <h3 className="text-4xl font-extrabold mt-1">${totalToday.toFixed(2)}</h3>
            <p className="text-[10px] opacity-70 mt-2">14 deliveries completed</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-sky-50 rounded-xl">
              <DollarSign className="w-5 h-5 text-sky-500" />
            </div>
            <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded-full">This Week</span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Weekly Total</p>
          <h3 className="text-4xl font-extrabold text-slate-900 mt-1">${totalWeek.toFixed(2)}</h3>
          <p className="text-[10px] text-slate-400 mt-2">63 deliveries this week</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-50 rounded-xl">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Monthly</span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Month Total</p>
          <h3 className="text-4xl font-extrabold text-slate-900 mt-1">${totalMonth.toLocaleString()}</h3>
          <p className="text-[10px] text-slate-400 mt-2">241 deliveries this month</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h4 className="text-xl font-extrabold text-slate-800">Earnings Overview</h4>
            <p className="text-sm text-slate-400 font-medium mt-0.5">Daily breakdown for the last 7 days</p>
          </div>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            {(["Weekly", "Monthly"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setPeriod(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  period === tab ? "bg-white text-[#ee8c2b] shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="h-56 flex items-end justify-between gap-4 px-2">
          {earningsData.map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group">
              <span className="text-[10px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ${bar.amount}
              </span>
              <div
                className={`w-full rounded-t-xl transition-all hover:brightness-105 ${
                  bar.active ? "bg-[#ee8c2b] shadow-lg shadow-orange-500/20" : "bg-slate-100 hover:bg-orange-100"
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

      {/* Earnings Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="text-xl font-extrabold text-slate-800">Today's Breakdown</h4>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <button className="p-1 hover:bg-slate-50 rounded cursor-pointer"><ChevronLeft className="w-4 h-4" /></button>
            <span className="font-semibold">Today</span>
            <button className="p-1 hover:bg-slate-50 rounded cursor-pointer"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Order ID</th>
                <th className="px-8 py-4">Time</th>
                <th className="px-8 py-4">Destination</th>
                <th className="px-8 py-4">Base Pay</th>
                <th className="px-8 py-4">Tip</th>
                <th className="px-8 py-4">Rating</th>
                <th className="px-8 py-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((t) => {
                const base = parseFloat(t.earnings.replace("$", ""));
                const tip = parseFloat(t.tip.replace("$", ""));
                return (
                  <tr key={t.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-4 font-bold text-sm text-slate-800">{t.id}</td>
                    <td className="px-8 py-4 text-sm text-slate-500">{t.time}</td>
                    <td className="px-8 py-4 text-sm font-medium text-slate-700">{t.destination}</td>
                    <td className="px-8 py-4 font-semibold text-slate-700">{t.earnings}</td>
                    <td className="px-8 py-4">
                      <span className={`font-semibold text-sm ${tip > 0 ? "text-green-600" : "text-slate-400"}`}>
                        {t.tip}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <div className="flex text-orange-400 gap-0.5">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} className={`w-3.5 h-3.5 ${s <= t.rating ? "fill-orange-400" : "fill-slate-100 text-slate-100"}`} />
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-4 text-right font-extrabold text-[#ee8c2b]">
                      ${(base + tip).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t-2 border-slate-200">
              <tr className="bg-slate-50/70">
                <td colSpan={6} className="px-8 py-4 font-extrabold text-slate-700">Today's Total</td>
                <td className="px-8 py-4 text-right font-extrabold text-[#ee8c2b] text-lg">${totalToday.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
