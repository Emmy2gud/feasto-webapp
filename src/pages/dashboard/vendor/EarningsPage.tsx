import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, TrendingUp, TrendingDown, DollarSign, ShoppingBag, CreditCard } from "lucide-react";

const salesData = [
  { day: "Mon", revenue: 850, orders: 42 },
  { day: "Tue", revenue: 980, orders: 50 },
  { day: "Wed", revenue: 1400, orders: 68 },
  { day: "Thu", revenue: 1100, orders: 58 },
  { day: "Fri", revenue: 1800, orders: 88 },
  { day: "Sat", revenue: 2200, orders: 110 },
  { day: "Sun", revenue: 1650, orders: 82 },
];

const topItems = [
  {
    name: "Classic Cheeseburger",
    cat: "Burgers • Main",
    price: "$8.50",
    orders: 342,
    revenue: "$2,907.00",
    trend: "+12%",
    up: true,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop",
  },
  {
    name: "Spicy Wings (6pcs)",
    cat: "Sides • Spicy",
    price: "$6.00",
    orders: 215,
    revenue: "$1,290.00",
    trend: "+5%",
    up: true,
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=60&h=60&fit=crop",
  },
  {
    name: "Jollof Rice Combo",
    cat: "Rice • Combo",
    price: "$12.00",
    orders: 180,
    revenue: "$2,160.00",
    trend: "-2%",
    up: false,
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=60&h=60&fit=crop",
  },
  {
    name: "Crispy Chicken Sub",
    cat: "Sandwiches",
    price: "$9.50",
    orders: 140,
    revenue: "$1,330.00",
    trend: "+8.5%",
    up: true,
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=60&h=60&fit=crop",
  },
];

const StatCard: React.FC<{
  label: string;
  value: string;
  pct: string;
  up: boolean;
  vs: string;
  icon: React.ReactNode;
  iconBg: string;
}> = ({ label, value, pct, up, vs, icon, iconBg }) => (
  <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-start justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">{value}</p>
      <div className="flex items-center gap-1.5 mt-1.5">
        <span
          className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
            up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
          }`}
        >
          {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {pct}
        </span>
        <span className="text-xs text-slate-400 font-normal">{vs}</span>
      </div>
    </div>
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
      {icon}
    </div>
  </div>
);

export default function EarningsPage() {
  const [timeRange, setTimeRange] = useState("Weekly");

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Earnings & Analytics</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Monitor revenue, average order value, and top performing dishes.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60">
            {["Weekly", "Monthly", "Quarterly"].map((t) => (
              <button
                key={t}
                onClick={() => setTimeRange(t)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  timeRange === t ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer">
            <Download size={14} /> Export Report
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="Total Revenue"
          value="$9,980.00"
          pct="+14.2%"
          up={true}
          vs="vs last week"
          icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          label="Total Orders"
          value="490"
          pct="+8.1%"
          up={true}
          vs="vs last week"
          icon={<ShoppingBag className="w-5 h-5 text-[#ee8c2b]" />}
          iconBg="bg-orange-50 text-[#ee8c2b]"
        />
        <StatCard
          label="Average Order Value"
          value="$20.36"
          pct="+2.4%"
          up={true}
          vs="vs last week"
          icon={<CreditCard className="w-5 h-5 text-sky-600" />}
          iconBg="bg-sky-50 text-sky-600"
        />
        <StatCard
          label="Net Payout Ready"
          value="$2,410.50"
          pct="Clearing"
          up={true}
          vs="next Friday"
          icon={<TrendingUp className="w-5 h-5 text-purple-600" />}
          iconBg="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Revenue Breakdown</h2>
            <p className="text-xs text-slate-500 mt-0.5">Daily volume trends for the selected period</p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
            Avg: $1,425 / day
          </span>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="earningsColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ee8c2b" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#ee8c2b" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickFormatter={(v) => `$${v}`}
              />
              <Tooltip
                formatter={(v: any) => [`$${v}`, "Gross Revenue"]}
                contentStyle={{
                  backgroundColor: "#0f172a",
                  color: "#fff",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#ee8c2b"
                strokeWidth={2.5}
                fillOpacity={1}
                fill="url(#earningsColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Dishes Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Dish Performance</h3>
            <p className="text-xs text-slate-500 mt-0.5">Items driving the most volume this period</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Dish</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4">Orders</th>
                <th className="py-3 px-4">Total Revenue</th>
                <th className="py-3 px-5 text-right">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {topItems.map((item) => (
                <tr key={item.name} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover border border-slate-100 shrink-0"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.cat}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{item.price}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{item.orders}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{item.revenue}</td>
                  <td className="py-3.5 px-5 text-right">
                    <span
                      className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
                        item.up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
                      }`}
                    >
                      {item.trend}
                    </span>
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
