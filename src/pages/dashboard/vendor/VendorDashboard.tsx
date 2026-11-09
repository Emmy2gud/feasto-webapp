import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  ShoppingBag,
  DollarSign,
  Truck,
  Star,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

const weeklyData = [
  { day: "Mon", sales: 320, orders: 24 },
  { day: "Tue", sales: 480, orders: 36 },
  { day: "Wed", sales: 420, orders: 31 },
  { day: "Thu", sales: 560, orders: 42 },
  { day: "Fri", sales: 680, orders: 54 },
  { day: "Sat", sales: 820, orders: 68 },
  { day: "Sun", sales: 710, orders: 59 },
];

const alerts = [
  {
    id: 1,
    title: "Payout Scheduled",
    body: "Weekly balance of $2,410.50 processing for Friday deposit.",
    time: "2 hours ago",
    type: "info",
  },
  {
    id: 2,
    title: "High Rating Review",
    body: '"The double cheese burger was delivered piping hot!" – Sarah L.',
    time: "4 hours ago",
    type: "success",
  },
  {
    id: 3,
    title: "Low Stock Warning",
    body: "Brioche buns are below recommended inventory (under 15 left).",
    time: "Yesterday",
    type: "warning",
  },
];

const topSelling = [
  {
    name: "Classic BBQ Burger",
    sales: "420 orders this week",
    revenue: "$3,570",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop",
  },
  {
    name: "Cheesy Loaded Fries",
    sales: "315 orders this week",
    revenue: "$1,890",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&h=80&fit=crop",
  },
  {
    name: "Crispy Chicken Sub",
    sales: "280 orders this week",
    revenue: "$2,240",
    img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=80&h=80&fit=crop",
  },
];

const activeOrdersList = [
  {
    id: "ORD-2045",
    customer: "Alex Johnson",
    items: "2× BBQ Burger, 1× Loaded Fries",
    time: "4 mins ago",
    total: "$28.50",
    status: "Cooking",
  },
  {
    id: "ORD-2044",
    customer: "Sarah Lawrence",
    items: "1× Crispy Chicken Sub",
    time: "9 mins ago",
    total: "$12.90",
    status: "Ready",
  },
  {
    id: "ORD-2043",
    customer: "Mike Chen",
    items: "3× Milkshake, 1× Loaded Fries",
    time: "15 mins ago",
    total: "$22.00",
    status: "In Transit",
  },
  {
    id: "ORD-2042",
    customer: "Elena Rostova",
    items: "1× Classic BBQ Burger",
    time: "24 mins ago",
    total: "$10.50",
    status: "Completed",
  },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  badge?: React.ReactNode;
  sub?: string;
  icon: React.ReactNode;
  iconBg: string;
}> = ({ title, value, badge, sub, icon, iconBg }) => (
  <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-start justify-between transition-all duration-150 hover:shadow-sm">
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{value}</p>
      <div className="flex items-center gap-2 pt-0.5">
        {badge}
        {sub && <span className="text-xs text-slate-500 font-normal">{sub}</span>}
      </div>
    </div>
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
      {icon}
    </div>
  </div>
);

type Period = "Daily" | "Weekly" | "Monthly";

export default function VendorDashboard() {
  const [period, setPeriod] = useState<Period>("Weekly");

  return (
    <div className="space-y-6 pb-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Real-time orders, store performance, and revenue summary.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60">
            {(["Daily", "Weekly", "Monthly"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  period === p
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <Link
            to="/dashboard/menu"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </Link>
        </div>
      </div>

      {/* Primary KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Today's Orders"
          value="128"
          badge={
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5">
              <TrendingUp size={12} /> +12.5%
            </span>
          }
          sub="vs yesterday"
          icon={<ShoppingBag size={20} className="text-[#ee8c2b]" />}
          iconBg="bg-orange-50 text-[#ee8c2b]"
        />
        <StatCard
          title="Today's Revenue"
          value="$1,450.00"
          badge={
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5">
              <TrendingUp size={12} /> +8.2%
            </span>
          }
          sub="net earnings"
          icon={<DollarSign size={20} className="text-emerald-600" />}
          iconBg="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          title="Active Orders"
          value="12"
          badge={
            <span className="text-xs px-2 py-0.5 bg-orange-50 text-[#ee8c2b] border border-orange-200/80 rounded-full font-semibold">
              Live Now
            </span>
          }
          sub="8 in kitchen"
          icon={<Truck size={20} className="text-sky-600" />}
          iconBg="bg-sky-50 text-sky-600"
        />
        <StatCard
          title="Customer Rating"
          value="4.8"
          badge={
            <span className="text-xs text-amber-600 font-semibold flex items-center gap-0.5">
              <Star size={12} className="fill-amber-500 text-amber-500" /> Top Rated
            </span>
          }
          sub="24 reviews this week"
          icon={<Star size={20} className="text-amber-500 fill-amber-500" />}
          iconBg="bg-amber-50 text-amber-500"
        />
      </div>

      {/* Main Content: Chart + Right Side Column */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left 2 Cols: Sales Trends + Live Orders */}
        <div className="xl:col-span-2 space-y-6">
          {/* Sales Performance Chart */}
          <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-slate-900">Revenue & Sales Trends</h2>
                <p className="text-xs text-slate-500 mt-0.5">Weekly volume overview across peak campus meal hours</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                Total: $4,070
              </span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} barSize={26}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    formatter={(value: any) => [`$${value}`, "Sales"]}
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      color: "#fff",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "12px",
                      padding: "8px 12px",
                    }}
                  />
                  <Bar dataKey="sales" fill="#fbd38d" radius={[4, 4, 0, 0]}>
                    {weeklyData.map((entry, index) => (
                      <rect
                        key={index}
                        fill={entry.day === "Sat" ? "#ee8c2b" : "#fed7aa"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Active Orders List */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Active Orders Queue</h3>
                <p className="text-xs text-slate-500 mt-0.5">Orders requiring preparation or ready for dispatch</p>
              </div>
              <Link
                to="/dashboard/orders"
                className="text-xs font-semibold text-[#ee8c2b] hover:text-[#d6761f] flex items-center gap-1"
              >
                View all orders <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {activeOrdersList.map((order) => (
                <div
                  key={order.id}
                  className="p-4 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-xs font-bold text-[#ee8c2b] shrink-0 mt-0.5">
                      {order.id.replace("ORD-", "#")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900">{order.customer}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {order.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{order.items}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pl-12 sm:pl-0">
                    <span className="text-sm font-bold text-slate-900">{order.total}</span>
                    <StatusBadge status={order.status} />
                    {order.status === "Cooking" && (
                      <Link
                        to="/dashboard/orders"
                        className="px-3 py-1 bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        Ready
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Top Sellers & Alerts */}
        <div className="space-y-6">
          {/* Top Selling Items */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-900">Top Selling Items</h3>
              <Link to="/dashboard/menu" className="text-xs font-semibold text-[#ee8c2b] hover:underline">
                Manage Menu
              </Link>
            </div>
            <div className="space-y-3.5">
              {topSelling.map((item, idx) => (
                <div key={item.name} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 w-4">{idx + 1}</span>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-10 h-10 rounded-lg object-cover border border-slate-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.sales}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Alerts & Notes */}
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-semibold text-slate-900">Store Notifications</h3>
              <span className="text-[11px] font-medium text-slate-400">3 Unread</span>
            </div>
            <div className="space-y-3">
              {alerts.map((a) => (
                <div
                  key={a.id}
                  className="p-3 rounded-lg border border-slate-100 bg-slate-50/60 flex items-start gap-3"
                >
                  <div className="mt-0.5 shrink-0">
                    {a.type === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {a.type === "warning" && <AlertCircle className="w-4 h-4 text-amber-600" />}
                    {a.type === "info" && <Clock className="w-4 h-4 text-sky-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-900">{a.title}</p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{a.body}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-slate-900 rounded-xl p-5 text-white shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-400">Need Help?</p>
            <h4 className="text-base font-bold mt-1">Vendor Partner Support</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Facing order discrepancies or hardware issues? Contact Feasto Partner Operations 24/7.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="mailto:support@feasto.app"
                className="px-3.5 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Contact Support
              </a>
              <Link
                to="/dashboard/payouts"
                className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                View Payouts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
