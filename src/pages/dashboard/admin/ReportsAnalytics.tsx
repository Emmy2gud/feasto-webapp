import {
  Calendar,
  Download,
  DollarSign,
  TrendingUp,
  Receipt,
  Clock,
  TrendingDown,
  Store,
} from "lucide-react";

export default function ReportsAnalytics() {
  const topVendors = [
    {
      name: "Spice Route Grill",
      initial: "S",
      initialBg: "bg-orange-50 text-[#ee8c2b]",
      category: "Asian Fusion",
      revenue: "$24,902",
      growth: "+18%",
      growthColor: "text-emerald-600",
    },
    {
      name: "Green Leaf Organics",
      initial: "G",
      initialBg: "bg-sky-50 text-sky-600",
      category: "Vegetarian Bowls",
      revenue: "$19,210",
      growth: "+12%",
      growthColor: "text-emerald-600",
    },
    {
      name: "Campus Grill",
      initial: "C",
      initialBg: "bg-purple-50 text-purple-600",
      category: "Burgers & Shakes",
      revenue: "$16,400",
      growth: "+4%",
      growthColor: "text-slate-600",
    },
    {
      name: "The Daily Grind",
      initial: "D",
      initialBg: "bg-amber-50 text-amber-700",
      category: "Beverages & Bakery",
      revenue: "$14,105",
      growth: "-2%",
      growthColor: "text-rose-600",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Analytics & Performance Reports</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Macro metrics across platform GMV, delivery turnarounds, and vendor growth.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer">
            <Calendar className="w-3.5 h-3.5" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer">
            <Download className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gross Platform GMV</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">$482,904</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +12.4% vs last period
            </span>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Fulfilled Orders</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">12,482</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> Avg 416 orders/day
            </span>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
            <Receipt className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Partners</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">156</h3>
            <p className="text-xs text-slate-500 pt-0.5">14 registered this month</p>
          </div>
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg Courier Turnaround</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">24m</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingDown size={12} /> -3m turnaround time
            </span>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Top Vendors Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Top Performing Kitchens</h3>
            <p className="text-xs text-slate-500 mt-0.5">Partners generating top volume across student residences</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Partner</th>
                <th className="py-3 px-4">Cuisine</th>
                <th className="py-3 px-4">GMV Volume</th>
                <th className="py-3 px-5 text-right">Growth Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {topVendors.map((vendor) => (
                <tr key={vendor.name} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${vendor.initialBg} flex items-center justify-center font-bold text-xs shrink-0`}>
                        {vendor.initial}
                      </div>
                      <span className="font-semibold text-xs sm:text-sm text-slate-900">{vendor.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-600">{vendor.category}</td>
                  <td className="py-3.5 px-4 text-xs sm:text-sm font-bold text-slate-900">{vendor.revenue}</td>
                  <td className="py-3.5 px-5 text-right font-semibold text-xs">
                    <span className={vendor.growthColor}>{vendor.growth}</span>
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
