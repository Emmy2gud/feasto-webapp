import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  ShoppingBag,
  DollarSign,
  Truck,
  Star,
  TrendingUp,
  ChevronDown,
  Megaphone,
  Zap,
  Percent,
  Plus,
} from "lucide-react";

const weeklyData = [
  { day: "Mon", sales: 320 },
  { day: "Tue", sales: 480 },
  { day: "Wed", sales: 420 },
  { day: "Thu", sales: 560 },
  { day: "Fri", sales: 680 },
  { day: "Sat", sales: 820 },
  { day: "Sun", sales: 710 },
];

const alerts = [
  {
    id: 1,
    title: "Payout Successful",
    body: "Your weekly earnings of $2,410.50 were sent.",
    time: "2 hours ago",
    dot: "bg-blue-500",
  },
  {
    id: 2,
    title: "New High-Rating Review",
    body: '"The best burgers on campus!" – Sarah L.',
    time: "5 hours ago",
    dot: "bg-green-500",
  },
  {
    id: 3,
    title: "Stock Alert: Buns",
    body: "Low stock detected for Brioche Buns.",
    time: "Yesterday",
    dot: "bg-gray-300",
  },
];

const topSelling = [
  { name: "Classic BBQ Burger", sales: "420 sales this week", revenue: "+$2.4k", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&h=60&fit=crop" },
  { name: "Cheesy Loaded Fries", sales: "315 sales this week", revenue: "+$1.2k", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=60&h=60&fit=crop" },
  { name: "Crispy Chicken Sub", sales: "280 sales this week", revenue: "+$1.1k", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=60&h=60&fit=crop" },
];

const recentOrders = [
  { id: "#CB-2045", customer: "Alex J.", status: "COOKING", color: "bg-orange-100 text-orange-700" },
  { id: "#CB-2044", customer: "Sarah L.", status: "DELIVERY", color: "bg-blue-100 text-blue-700" },
  { id: "#CB-2043", customer: "Mike C.", status: "DONE", color: "bg-green-100 text-green-700" },
];

const promotions = [
  { code: "FREE-FRIDAY", desc: "Free delivery for $20+ orders", status: "Active", statusColor: "text-[#E87C2A]", endsIn: "" },
  { code: "CAMPUS10", desc: "10% off for new students", status: "Ends in 2d", statusColor: "text-gray-500", endsIn: "" },
];

const peakHours = [
  { h: "12 PM", v: 20 },
  { h: "", v: 30 },
  { h: "", v: 45 },
  { h: "2 PM (Peak)", v: 80 },
  { h: "", v: 60 },
  { h: "4 PM", v: 35 },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  badge?: React.ReactNode;
  sub?: React.ReactNode;
  icon: React.ReactNode;
  iconBg: string;
}> = ({ title, value, badge, sub, icon, iconBg }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-start justify-between">
    <div>
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {badge && <div className="mt-1">{badge}</div>}
      {sub && <div className="mt-1">{sub}</div>}
    </div>
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}>
      {icon}
    </div>
  </div>
);

type Period = "Daily" | "Weekly" | "Monthly";

const VendorDashboard: React.FC = () => {
  const [period, setPeriod] = useState<Period>("Daily");

  return (
    <div className="space-y-5 pb-8">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-sm text-gray-500 mt-0.5">Here's what's happening with your store today.</p>
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-xl p-1">
          {(["Daily", "Weekly", "Monthly"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                period === p ? "bg-[#E87C2A] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Total Orders"
          value="128"
          badge={<span className="text-xs text-green-600 font-medium flex items-center gap-0.5"><TrendingUp size={12} /> +12.5%</span>}
          icon={<ShoppingBag size={20} className="text-[#E87C2A]" />}
          iconBg="bg-orange-50"
        />
        <StatCard
          title="Today's Revenue"
          value="$1,450"
          badge={<span className="text-xs text-green-600 font-medium flex items-center gap-0.5"><TrendingUp size={12} /> +8.2%</span>}
          icon={<DollarSign size={20} className="text-green-600" />}
          iconBg="bg-green-50"
        />
        <StatCard
          title="Active Orders"
          value="12"
          sub={
            <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full font-medium">
              In Progress
            </span>
          }
          icon={<Truck size={20} className="text-blue-400" />}
          iconBg="bg-blue-50"
        />
        <StatCard
          title="Store Rating"
          value="4.8"
          sub={<span className="text-xs text-gray-400">24 new reviews</span>}
          icon={<Star size={20} className="text-yellow-500" />}
          iconBg="bg-yellow-50"
        />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Left: Chart + Performance + Promotions */}
        <div className="xl:col-span-2 space-y-4">
          {/* Weekly Sales Chart */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-900">Weekly Sales</h2>
              <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300">
                This Week <ChevronDown size={14} />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <YAxis hide />
                <Bar dataKey="sales" fill="#FDDCBB" radius={[6, 6, 0, 0]}>
                  {weeklyData.map((entry, index) => (
                    <rect
                      key={index}
                      fill={entry.day === "Sat" ? "#E87C2A" : "#FDDCBB"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Insights + Active Promotions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Performance Insights */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Performance Insights</h3>
                <Zap size={16} className="text-gray-400" />
              </div>
              <div>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="text-[#E87C2A] font-semibold">94%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-[#E87C2A] h-2 rounded-full" style={{ width: "94%" }} />
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Peak Orders Time</p>
                <div className="flex items-end gap-1 h-12">
                  {peakHours.map((ph, i) => (
                    <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
                      <div
                        className={`w-full rounded-sm ${i === 3 ? "bg-[#E87C2A]" : "bg-orange-100"}`}
                        style={{ height: `${ph.v}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>12 PM</span>
                  <span>2 PM (Peak)</span>
                  <span>4 PM</span>
                </div>
              </div>
            </div>

            {/* Active Promotions */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Active Promotions</h3>
                <Megaphone size={16} className="text-[#E87C2A]" />
              </div>
              <div className="space-y-3">
                {promotions.map((promo) => (
                  <div key={promo.code} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Percent size={14} className="text-[#E87C2A]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-800 uppercase tracking-wide">{promo.code}</p>
                      <p className="text-xs text-gray-500 truncate">{promo.desc}</p>
                    </div>
                    <span className={`text-xs font-medium ${promo.statusColor} whitespace-nowrap`}>
                      {promo.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-3 text-sm text-gray-500 hover:text-[#E87C2A] flex items-center justify-center gap-1 py-2">
                <Plus size={14} /> Create New Promo
              </button>
            </div>
          </div>
        </div>

        {/* Right: Alerts + Top Selling + Recent Orders */}
        <div className="space-y-4">
          {/* Alerts Center */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Alerts Center</h3>
              <button className="text-xs text-gray-400 hover:text-gray-600">Clear All</button>
            </div>
            <div className="space-y-3">
              {alerts.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${a.dot}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{a.title}</p>
                    <p className="text-xs text-gray-500">{a.body}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Selling Items */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Top Selling Items</h3>
              <button className="text-xs text-[#E87C2A] font-medium hover:underline">Details</button>
            </div>
            <div className="space-y-3">
              {topSelling.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.sales}</p>
                  </div>
                  <span className="text-sm font-semibold text-green-600">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Recent Orders</h3>
              <button className="text-xs text-[#E87C2A] font-medium hover:underline">View All</button>
            </div>
            <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider grid grid-cols-3 pb-2 border-b border-gray-100">
              <span>Order ID</span>
              <span>Customer</span>
              <span>Status</span>
            </div>
            <div className="space-y-3 mt-2">
              {recentOrders.map((order) => (
                <div key={order.id} className="grid grid-cols-3 items-center text-sm">
                  <span className="text-gray-700 font-medium">{order.id}</span>
                  <span className="text-gray-600">{order.customer}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md w-fit ${order.color}`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
        <span>© 2024 CampusBites Vendor Portal. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-600">Support</a>
          <a href="#" className="hover:text-gray-600">Terms</a>
          <a href="#" className="hover:text-gray-600">Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
