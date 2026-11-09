import {
  Users as UsersIcon,
  Store,
  Bike,
  Receipt,
  DollarSign,
  Download,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

export default function SystemOverview() {
  const deliveries = [
    {
      id: "4492",
      item: "Fresh Mediterranean Bowl",
      rider: "Mike D.",
      status: "In Transit",
      timeLeft: "4m left",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=100&h=100&fit=crop",
    },
    {
      id: "4490",
      item: "Woodfired Saffron Pizza",
      rider: "Sarah L.",
      status: "Cooking",
      timeLeft: "12m left",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop",
    },
    {
      id: "4489",
      item: "Cold Brew Latte x2",
      rider: "Alex J.",
      status: "New Order",
      timeLeft: "18m left",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop",
    },
  ];

  const activities = [
    {
      id: 1,
      event: "New Vendor Approved",
      entity: "Spicy Corner Bistro",
      status: "Active",
      time: "2 mins ago",
      icon: CheckCircle,
      iconColor: "text-emerald-600 bg-emerald-50",
    },
    {
      id: 2,
      event: "Rider Application Submitted",
      entity: "David Miller",
      status: "Pending",
      time: "14 mins ago",
      icon: UsersIcon,
      iconColor: "text-sky-600 bg-sky-50",
    },
    {
      id: 3,
      event: "High Campus Demand Alert",
      entity: "South Campus Zone",
      status: "Active",
      time: "45 mins ago",
      icon: AlertTriangle,
      iconColor: "text-amber-600 bg-amber-50",
    },
    {
      id: 4,
      event: "Customer Dispute Filed",
      entity: "Order #ORD-4431",
      status: "Pending",
      time: "1 hr ago",
      icon: FileText,
      iconColor: "text-rose-600 bg-rose-50",
    },
  ];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">System Overview</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Operational pulse of the campus delivery network: users, orders, and logistics.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/admin/orders"
            className="px-3.5 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            Manage Live Orders
          </Link>
          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer">
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Total Users */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Registered Users</p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">12,482</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +12% this mo.
            </span>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center shrink-0">
            <UsersIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Vendors */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Vendors</p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">156</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +4 kitchens
            </span>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center shrink-0">
            <Store className="w-5 h-5" />
          </div>
        </div>

        {/* Riders */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Riders</p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">42</h3>
            <span className="text-xs text-slate-500 font-medium pt-0.5">38 online now</span>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center shrink-0">
            <Bike className="w-5 h-5" />
          </div>
        </div>

        {/* Orders (MTD) */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Orders (MTD)</p>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">3,204</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-0.5">
              <TrendingUp size={12} /> +28% volume
            </span>
          </div>
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0">
            <Receipt className="w-5 h-5" />
          </div>
        </div>

        {/* Revenue MTD */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between sm:col-span-2 lg:col-span-4 xl:col-span-1">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">GMV (MTD)</p>
            <h3 className="text-2xl font-bold tracking-tight text-emerald-600">$48,250</h3>
            <span className="text-xs text-slate-500 font-medium pt-0.5">Platform net fee: 12%</span>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Middle Section: Trends Bar Chart + Live Active Deliveries */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Volume Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-slate-900">Daily Order Velocity</h2>
              <p className="text-xs text-slate-500 mt-0.5">Aggregated daily meal volume across university zones</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#ee8c2b]" /> Current Week
              </div>
              <div className="flex items-center gap-1.5 font-medium text-slate-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200" /> Prior Week
              </div>
            </div>
          </div>

          <div className="h-56 flex items-end justify-between gap-2 sm:gap-3 px-2 pt-2 border-b border-slate-100">
            {[
              { label: "10/01", height: "45%", val: 124 },
              { label: "10/05", height: "65%", val: 189 },
              { label: "10/10", height: "50%", val: 154 },
              { label: "10/15", height: "90%", val: 342, active: true },
              { label: "10/18", height: "60%", val: 202 },
              { label: "10/20", height: "72%", val: 265 },
              { label: "10/22", height: "85%", val: 310, active: true },
              { label: "10/25", height: "65%", val: 215 },
              { label: "10/28", height: "80%", val: 290 },
              { label: "10/30", height: "95%", val: 398, active: true },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div
                  className={`w-full rounded-t-md transition-all ${
                    bar.active ? "bg-[#ee8c2b]" : "bg-slate-200 hover:bg-orange-200"
                  }`}
                  style={{ height: bar.height }}
                />
                <span className="text-[10px] font-medium text-slate-400 group-hover:text-slate-800">
                  {bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Active Deliveries Snapshot */}
        <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">Live Delivery Feed</h3>
              <p className="text-xs text-slate-500">Active campus couriers en route</p>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-3">
            {deliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <img
                  className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                  src={delivery.img}
                  alt={delivery.item}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-slate-900 truncate">
                    #{delivery.id} • {delivery.item}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Rider: {delivery.rider} • <span className="font-medium text-slate-700">{delivery.timeLeft}</span>
                  </p>
                </div>
                <StatusBadge status={delivery.status} />
              </div>
            ))}
          </div>

          <Link
            to="/admin/orders"
            className="w-full mt-2 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors block text-center"
          >
            Inspect All Active Orders
          </Link>
        </div>
      </div>

      {/* Recent System Activity Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Platform Activity Audit</h3>
            <p className="text-xs text-slate-500 mt-0.5">Critical administrative events and logs</p>
          </div>
          <span className="text-xs font-medium text-slate-400">Updated in real-time</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Event</th>
                <th className="py-3 px-4">Subject Entity</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {activities.map((act) => {
                const IconComponent = act.icon;
                return (
                  <tr key={act.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${act.iconColor}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">{act.event}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-700">{act.entity}</td>
                    <td className="py-3.5 px-4">
                      <StatusBadge status={act.status} />
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{act.time}</td>
                    <td className="py-3.5 px-5 text-right">
                      <button className="text-xs font-semibold text-[#ee8c2b] hover:underline cursor-pointer">
                        Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
