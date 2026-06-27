import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Download, Calendar, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from "lucide-react";

const salesData = [
  { day: "Mon", revenue: 850, target: 1200 },
  { day: "Tue", revenue: 980, target: 1200 },
  { day: "Wed", revenue: 2400, target: 1200 },
  { day: "Thu", revenue: 1800, target: 1200 },
  { day: "Fri", revenue: 2800, target: 1200 },
  { day: "Sat", revenue: 2600, target: 1200 },
  { day: "Sun", revenue: 3200, target: 1200 },
];

const orderDonut = [
  { name: "Completed", value: 94, color: "#E87C2A" },
  { name: "Pending", value: 18, color: "#CBD5E1" },
  { name: "Cancelled", value: 12, color: "#E2E8F0" },
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
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=48&h=48&fit=crop",
  },
  {
    name: "Spicy Wings (6pcs)",
    cat: "Sides • Spicy",
    price: "$6.00",
    orders: 215,
    revenue: "$1,290.00",
    trend: "+5%",
    up: true,
    img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=48&h=48&fit=crop",
  },
  {
    name: "Jollof Rice Combo",
    cat: "Rice • Combo",
    price: "$12.00",
    orders: 180,
    revenue: "$2,160.00",
    trend: "-2%",
    up: false,
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=48&h=48&fit=crop",
  },
  {
    name: "Spicy Ramen Bowl",
    cat: "Asian • Soup",
    price: "$10.50",
    orders: 98,
    revenue: "$1,029.00",
    trend: "+8.5%",
    up: true,
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=48&h=48&fit=crop",
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
  <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <div className="flex items-center gap-2 mt-2">
        <span
          className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
            up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
          }`}
        >
          {up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
          {pct}
        </span>
        <span className="text-xs text-gray-400">{vs}</span>
      </div>
    </div>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg}`}>
      {icon}
    </div>
  </div>
);



const EarningsPage: React.FC = () => {
  const [period] = useState("This Month");
  const total = orderDonut.reduce((s, d) => s + d.value, 0);

  return (
    <div className="space-y-5 pb-8">
      {/* Page Header */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Earnings Overview</h1>
          <p className="text-sm text-gray-500 mt-0.5">Track your revenue and sales performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:border-gray-300 bg-white">
            <Download size={15} /> Export CSV
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold text-white bg-[#E87C2A] rounded-xl px-4 py-2 hover:bg-[#d06e20]">
            <Calendar size={15} /> {period} ▾
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Today's Revenue"
          value="$842.50"
          pct="+12.5%"
          up
          vs="vs yesterday"
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-300" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5.5H9l3-5.5 3 5.5h-2v5.5z" />
            </svg>
          }
          iconBg="bg-orange-50"
        />
        <StatCard
          label="This Week"
          value="$4,290.00"
          pct="+8.2%"
          up
          vs="vs last week"
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-orange-200" fill="currentColor">
              <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h12v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
            </svg>
          }
          iconBg="bg-orange-50"
        />
        <StatCard
          label="This Month"
          value="$18,450.25"
          pct="-2.1%"
          up={false}
          vs="vs last month"
          icon={
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-300" fill="currentColor">
              <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm0 4h14v2H5v-2zm0 4h14v2H5v-2zm-2 4h18v2H3v-2z" />
            </svg>
          }
          iconBg="bg-gray-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Sales Volume Area Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Sales Volume</h2>
              <p className="text-xs text-gray-400">Daily revenue over the last 7 days</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E87C2A] inline-block" /> Revenue
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" /> Target
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E87C2A" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#E87C2A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 11 }} />
              <Tooltip
                contentStyle={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 8, fontSize: 12 }}
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="#CBD5E1"
                strokeDasharray="5 5"
                strokeWidth={1.5}
                fill="none"
                dot={false}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#E87C2A"
                strokeWidth={2.5}
                fill="url(#revenueGrad)"
                dot={{ fill: "#E87C2A", r: 4, strokeWidth: 0 }}
                activeDot={{ r: 6 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Today Donut */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Orders Today</h2>
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40">
              <PieChart width={160} height={160}>
                <Pie
                  data={orderDonut}
                  cx={75}
                  cy={75}
                  innerRadius={52}
                  outerRadius={72}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  strokeWidth={0}
                >
                  {orderDonut.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-gray-900">{total}</p>
                <p className="text-xs text-gray-400">TOTAL</p>
              </div>
            </div>

            <div className="w-full mt-4 space-y-2">
              {orderDonut.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: d.color }} />
                    <span className="text-gray-600">{d.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Items */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-base font-semibold text-gray-900">Top Performing Items</h2>
          <button className="text-sm font-medium text-[#E87C2A] hover:underline">View Full Menu Report</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <th className="text-left pb-3 font-semibold">Item Details</th>
                <th className="text-right pb-3 font-semibold">Price</th>
                <th className="text-right pb-3 font-semibold">Orders</th>
                <th className="text-right pb-3 font-semibold">Revenue</th>
                <th className="text-right pb-3 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {topItems.map((item) => (
                <tr key={item.name} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt={item.name} className="w-11 h-11 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-400">{item.cat}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-right text-gray-600">{item.price}</td>
                  <td className="py-4 text-right font-semibold text-gray-900">{item.orders}</td>
                  <td className="py-4 text-right font-semibold text-[#E87C2A]">{item.revenue}</td>
                  <td className="py-4 text-right">
                    <span className={`text-xs font-semibold ${item.up ? "text-green-600" : "text-red-500"}`}>
                      {item.up ? <TrendingUp className="inline w-3 h-3 mr-0.5" /> : <TrendingDown className="inline w-3 h-3 mr-0.5" />}
                      {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">Showing 1-10 of 100 results</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#E87C2A] text-white flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">2</button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">3</button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsPage;
