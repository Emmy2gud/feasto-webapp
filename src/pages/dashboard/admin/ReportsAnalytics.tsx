import React from "react";
import {
  BarChart3,
  Calendar,
  Download,
  DollarSign,
  TrendingUp,
  Receipt,
  Users,
  Clock,
  ArrowUpRight,
  TrendingDown,
  Building
} from "lucide-react";

export default function ReportsAnalytics() {
  const topVendors = [
    {
      name: "Spice Route Grill",
      initial: "S",
      initialBg: "bg-orange-100 text-[#ee8c2b]",
      category: "Asian Fusion",
      revenue: "$24,902",
      growth: "+18%",
      growthColor: "text-green-600"
    },
    {
      name: "Green Leaf Organics",
      initial: "G",
      initialBg: "bg-sky-100 text-sky-600",
      category: "Vegetarian",
      revenue: "$19,210",
      growth: "+12%",
      growthColor: "text-green-600"
    },
    {
      name: "Daily Harvest Bakery",
      initial: "D",
      initialBg: "bg-slate-100 text-slate-700",
      category: "Bakery",
      revenue: "$16,400",
      growth: "+4%",
      growthColor: "text-slate-600"
    },
    {
      name: "The Velvet Cafe",
      initial: "V",
      initialBg: "bg-purple-100 text-purple-700",
      category: "Beverages",
      revenue: "$14,105",
      growth: "-2%",
      growthColor: "text-red-500"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Operational Performance</h3>
          <p className="text-slate-500 text-sm mt-1">Real-time insight into harvest logistics and revenue flow.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl text-sm font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Bento Grid: Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:border-[#ee8c2b]/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-50 rounded-xl text-[#ee8c2b]">
              <DollarSign className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +12.4%
            </span>
          </div>
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Gross Revenue</h4>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">$482,904</div>
          <p className="text-[10px] text-slate-400 mt-2">vs. $429,102 last month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:border-[#ee8c2b]/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-sky-50 rounded-xl text-sky-600">
              <Receipt className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +8.2%
            </span>
          </div>
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Total Orders</h4>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">12,482</div>
          <p className="text-[10px] text-slate-400 mt-2">Average 416 orders/day</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:border-[#ee8c2b]/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Active</span>
          </div>
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Active Vendors</h4>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">1,240</div>
          <p className="text-[10px] text-slate-400 mt-2">14 new this week</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:border-[#ee8c2b]/20">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-slate-100 rounded-xl text-slate-700">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingDown className="w-3 h-3" /> -2.1%
            </span>
          </div>
          <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Avg. Delivery Time</h4>
          <div className="text-3xl font-extrabold text-slate-900 mt-1">28m</div>
          <p className="text-[10px] text-slate-400 mt-2">Target: 25 minutes</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Line Chart (2/3 width) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h4 className="font-bold text-lg text-slate-800">Revenue Growth Trend</h4>
              <p className="text-slate-500 text-xs">Net earnings vs platform fees over time.</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ee8c2b]"></span>
                <span className="text-slate-600">Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="text-slate-600">Projected</span>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full flex items-end">
            {/* SVG Line & Area graph */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ee8c2b" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#ee8c2b" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="0" y2="0"></line>
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="75" y2="75"></line>
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
              <line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="1000" y1="225" y2="225"></line>
              {/* Area Fill */}
              <path d="M0,300 L0,220 C100,180 200,240 300,180 C400,120 500,200 600,100 C700,40 800,120 1000,40 L1000,300 Z" fill="url(#lineGrad)"></path>
              {/* Line Path */}
              <path d="M0,220 C100,180 200,240 300,180 C400,120 500,200 600,100 C700,40 800,120 1000,40" fill="none" stroke="#ee8c2b" strokeLinecap="round" strokeWidth="4"></path>
              {/* Data Points */}
              <circle cx="300" cy="180" fill="#ffffff" r="6" stroke="#ee8c2b" strokeWidth="3"></circle>
              <circle cx="600" cy="100" fill="#ffffff" r="6" stroke="#ee8c2b" stroke-width="3"></circle>
            </svg>
            <div className="absolute bottom-[-24px] left-0 w-full flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              <span>WK 1</span>
              <span>WK 2</span>
              <span>WK 3</span>
              <span>WK 4</span>
              <span>WK 5</span>
              <span>WK 6</span>
              <span>Today</span>
            </div>
          </div>
        </div>

        {/* Order Velocity Bar Chart (1/3 width) */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <div className="mb-8">
            <h4 className="font-bold text-lg text-slate-800">Order Velocity</h4>
            <p className="text-slate-500 text-xs">Peak volume per time block.</p>
          </div>
          <div className="flex-grow flex items-end justify-between gap-3 h-48">
            {[
              { height: "40%", label: "1.2k", active: false },
              { height: "65%", label: "1.8k", active: false },
              { height: "95%", label: "3.4k", active: true },
              { height: "75%", label: "2.1k", active: false },
              { height: "55%", label: "1.6k", active: false },
              { height: "85%", label: "2.8k", active: false }
            ].map((bar, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-lg group relative transition-all duration-200 cursor-pointer ${
                  bar.active ? "bg-[#ee8c2b]" : "bg-slate-100 hover:bg-[#ee8c2b]/60"
                }`}
                style={{ height: bar.height }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-extrabold bg-slate-900 text-white px-2 py-0.5 rounded transition-opacity whitespace-nowrap z-10 shadow">
                  {bar.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400">
            <span>Morning</span>
            <span>Noon</span>
            <span>Evening</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Top Vendors & Growth Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Vendors */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h4 className="font-bold text-lg text-slate-800">Top Performing Vendors</h4>
            <button className="text-[#ee8c2b] text-xs font-bold hover:underline cursor-pointer">View All Vendors</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold text-slate-400 bg-slate-50 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4">Vendor Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Revenue</th>
                  <th className="px-6 py-4 text-right">Growth</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-slate-100">
                {topVendors.map((vendor, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${vendor.initialBg}`}>
                        {vendor.initial}
                      </div>
                      <span className="font-bold text-slate-800">{vendor.name}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 font-medium">{vendor.category}</td>
                    <td className="px-6 py-4 font-extrabold text-slate-800">{vendor.revenue}</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`font-bold ${vendor.growthColor}`}>{vendor.growth}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Growth metrics widget */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-lg text-slate-800 mb-2">Category Performance</h4>
            <p className="text-slate-500 text-xs mb-6">Market share by food category across campuses.</p>
          </div>
          <div className="space-y-4">
            {[
              { name: "Asian Fusion & Wok", pct: 45, colorBg: "bg-[#ee8c2b]" },
              { name: "Pizzas & Italian", pct: 30, colorBg: "bg-sky-500" },
              { name: "Burgers & Sandwiches", pct: 15, colorBg: "bg-indigo-500" },
              { name: "Salads & Vegan Bowls", pct: 10, colorBg: "bg-emerald-500" }
            ].map((cat, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs font-bold mb-1 text-slate-700">
                  <span>{cat.name}</span>
                  <span>{cat.pct}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className={`${cat.colorBg} h-2 rounded-full`} style={{ width: `${cat.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
