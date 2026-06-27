import React from "react";
import {
  Users as UsersIcon,
  Store,
  Bike,
  Receipt,
  DollarSign,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  Clock,
  ChevronRight,
  AlertTriangle,
  FileText
} from "lucide-react";

export default function SystemOverview() {
  const deliveries = [
    {
      id: "4492",
      item: "Fresh Bowl",
      rider: "Mike D.",
      status: "In Transit",
      statusColor: "text-[#ee8c2b]",
      timeLeft: "4m left",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop"
    },
    {
      id: "4490",
      item: "Saffron Pizza",
      rider: "Sarah L.",
      status: "Picking Up",
      statusColor: "text-amber-600",
      timeLeft: "12m left",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop"
    },
    {
      id: "4489",
      item: "Campus Brew",
      rider: "Alex J.",
      status: "Assigned",
      statusColor: "text-blue-600",
      timeLeft: "18m left",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop"
    }
  ];

  const activities = [
    {
      id: 1,
      event: "New Vendor Approved",
      entity: "Spicy Corner Bistro",
      status: "Success",
      statusBg: "bg-green-100 text-green-700",
      time: "2 mins ago",
      iconBg: "bg-green-100 text-green-600",
      icon: CheckCircle
    },
    {
      id: 2,
      event: "Rider Application",
      entity: "David Miller",
      status: "Review",
      statusBg: "bg-blue-100 text-blue-700",
      time: "14 mins ago",
      iconBg: "bg-blue-100 text-blue-600",
      icon: UsersIcon
    },
    {
      id: 3,
      event: "High Demand Alert",
      entity: "South Campus Zone",
      status: "Active",
      statusBg: "bg-amber-100 text-amber-700",
      time: "45 mins ago",
      iconBg: "bg-amber-100 text-amber-600",
      icon: AlertTriangle
    },
    {
      id: 4,
      event: "New Dispute Filed",
      entity: "Order #4431",
      status: "Open",
      statusBg: "bg-red-100 text-red-700",
      time: "1 hr ago",
      iconBg: "bg-red-100 text-red-600",
      icon: FileText
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">System Overview</h2>
          <p className="text-slate-500 font-medium">Monitoring harvest performance across the campus ecosystem.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-sm font-bold shadow-sm cursor-pointer">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl hover:shadow-md transition-all text-sm font-bold shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Total Users */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#ee8c2b]">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-[#ee8c2b]/10 rounded-lg flex items-center justify-center text-[#ee8c2b]">
              <UsersIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +12%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Users</p>
          <h3 class="text-2xl font-extrabold text-slate-900 mt-1">12,482</h3>
        </div>

        {/* Total Vendors */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600">
              <Store className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +4%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vendors</p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">156</h3>
        </div>

        {/* Total Riders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-[#7c2d12]/10 rounded-lg flex items-center justify-center text-[#7c2d12]">
              <Bike className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingDown className="w-3 h-3" /> -2%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Riders</p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">42</h3>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
              <Receipt className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +28%
            </span>
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Orders (MTD)</p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">3,204</h3>
        </div>

        {/* Revenue Summary */}
        <div className="bg-[#ee8c2b] text-white p-6 rounded-2xl shadow-sm sm:col-span-2 lg:col-span-4 xl:col-span-1">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold bg-white/30 px-2 py-1 rounded-full">Target: 92%</span>
          </div>
          <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Revenue (MTD)</p>
          <h3 className="text-2xl font-extrabold mt-1">$48,250.00</h3>
        </div>
      </div>

      {/* Analytics Charts & Delivery Snapshots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order trends simulation chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-extrabold text-slate-900">Order Trends</h4>
              <p className="text-sm text-slate-500">Daily volume comparison vs last month</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#ee8c2b]"></span>
                <span className="text-xs font-medium text-slate-600">This Week</span>
              </div>
              <div className="flex items-center gap-1 ml-3">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="text-xs font-medium text-slate-600">Last Week</span>
              </div>
            </div>
          </div>
          {/* Custom SVG Simulated Area Graph Bars */}
          <div className="relative h-64 w-full flex items-end gap-3 px-2">
            <div className="absolute inset-0 border-b border-l border-slate-200 pointer-events-none"></div>
            {[
              { height: "40%", current: false, val: 124 },
              { height: "65%", current: false, val: 189 },
              { height: "45%", current: false, val: 154 },
              { height: "90%", current: true, val: 342 },
              { height: "55%", current: false, val: 202 },
              { height: "70%", current: false, val: 265 },
              { height: "85%", current: true, val: 310 },
              { height: "60%", current: false, val: 215 },
              { height: "75%", current: true, val: 290 },
              { height: "95%", current: true, val: 398 },
              { height: "40%", current: false, val: 130 },
              { height: "30%", current: false, val: 98 }
            ].map((bar, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-lg transition-all duration-300 group relative ${
                  bar.current ? "bg-[#ee8c2b] hover:bg-[#d6761f]" : "bg-[#ee8c2b]/20 hover:bg-[#ee8c2b]/40"
                }`}
                style={{ height: bar.height }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {bar.val} orders
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-400">
            <span>OCT 1</span>
            <span>OCT 5</span>
            <span>OCT 10</span>
            <span>OCT 15</span>
            <span>OCT 20</span>
            <span>OCT 25</span>
            <span>OCT 30</span>
          </div>
        </div>

        {/* Active Deliveries Snapshot */}
        <div className="bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-extrabold text-slate-900">Active Deliveries</h4>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <div className="space-y-4">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={delivery.img} alt={delivery.item} />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-sm font-bold text-slate-800 truncate">Order #{delivery.id} - {delivery.item}</h5>
                  <p className="text-xs text-slate-500">
                    Rider: {delivery.rider} • <span className={`${delivery.statusColor} font-semibold`}>{delivery.status}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-slate-800">{delivery.timeLeft}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer">
            View All 18 Deliveries
          </button>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <h4 className="text-lg font-extrabold text-slate-900">Recent System Activity</h4>
          <button className="text-[#ee8c2b] text-sm font-bold hover:underline cursor-pointer">See history</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50">
                <th className="px-8 py-4">Event</th>
                <th class="px-8 py-4">Entity</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Timestamp</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activities.map((act) => {
                const IconComponent = act.icon;
                return (
                  <tr key={act.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${act.iconBg}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold text-slate-800">{act.event}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4 text-sm font-medium text-slate-700">{act.entity}</td>
                    <td className="px-8 py-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${act.statusBg}`}>
                        {act.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-xs text-slate-500">{act.time}</td>
                    <td className="px-8 py-4 text-right">
                      <button className="text-slate-400 hover:text-[#ee8c2b] transition-colors cursor-pointer font-bold">
                        •••
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-50 text-center">
          <p className="text-xs text-slate-400 font-medium">Showing latest 4 system events from total 142 today.</p>
        </div>
      </div>
    </div>
  );
}
