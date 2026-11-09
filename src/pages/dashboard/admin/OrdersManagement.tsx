import { useState } from "react";
import {
  ShoppingBag,
  Search,
  Download,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  X,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  vendorName: string;
  items: string;
  total: number;
  status: "Pending" | "Cooking" | "In Transit" | "Completed" | "Cancelled";
  date: string;
}

const initialOrders: Order[] = [
  {
    id: "4492",
    customerName: "Jane Cooper",
    customerPhone: "+1 (555) 234-5678",
    customerAddress: "404 Main Hall, Campus North",
    vendorName: "Spicy Corner Bistro",
    items: "Gourmet Fresh Bowl x1, Diet Coke x1",
    total: 24.50,
    status: "In Transit",
    date: "10 mins ago",
  },
  {
    id: "4490",
    customerName: "Robert Fox",
    customerPhone: "+1 (555) 876-5432",
    customerAddress: "Library Quad Bench B",
    vendorName: "Saffron Pizza",
    items: "Saffron Veg Pizza x1, Garlic Knots x2",
    total: 18.90,
    status: "Cooking",
    date: "25 mins ago",
  },
  {
    id: "4489",
    customerName: "Alex Rivera",
    customerPhone: "+1 (555) 432-1098",
    customerAddress: "Science Center Lobby",
    vendorName: "Campus Brew",
    items: "Iced Latte x2, Caramel Macchiato x1",
    total: 15.75,
    status: "Pending",
    date: "30 mins ago",
  },
  {
    id: "4485",
    customerName: "Albert Flores",
    customerPhone: "+1 (555) 901-2345",
    customerAddress: "Dorm 3 Room 202",
    vendorName: "Burger Junction",
    items: "Double Bacon Burger x2, Large Fries x1",
    total: 32.20,
    status: "Completed",
    date: "1 hour ago",
  },
  {
    id: "4482",
    customerName: "Kathryn Murphy",
    customerPhone: "+1 (555) 654-3210",
    customerAddress: "Athletic Field East Gate",
    vendorName: "Taco Express",
    items: "Chicken Taco Trio x1, Horchata Large x1",
    total: 14.10,
    status: "Cancelled",
    date: "2 hours ago",
  },
];

export default function OrdersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "All" | "Pending" | "Cooking" | "In Transit" | "Completed" | "Cancelled"
  >("All");
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const updateOrderStatus = (id: string, newStatus: Order["status"]) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === id) {
          const updated = { ...ord, status: newStatus };
          if (selectedOrder?.id === id) {
            setSelectedOrder(updated);
          }
          return updated;
        }
        return ord;
      })
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.items.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Orders Operations Hub</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Monitor live meal dispatches, resolve delays, and update fulfillment states.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer self-start sm:self-center">
          <Download className="w-3.5 h-3.5" />
          <span>Export Orders</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Live Active Orders</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              {orders.filter((o) => o.status !== "Completed" && o.status !== "Cancelled").length} In Progress
            </h3>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center">
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">In Kitchen Cooking</p>
            <h3 className="text-2xl font-bold text-amber-600 mt-1">
              {orders.filter((o) => o.status === "Cooking").length} Prep
            </h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">En Route Courier</p>
            <h3 className="text-2xl font-bold text-sky-600 mt-1">
              {orders.filter((o) => o.status === "In Transit").length} Transit
            </h3>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Fulfilled Today</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">
              {orders.filter((o) => o.status === "Completed").length} Done
            </h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Main Table and Filter */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Controls */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search by order ID, customer, vendor, or items..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 flex-wrap self-start sm:self-center gap-1">
            {(["All", "Pending", "Cooking", "In Transit", "Completed", "Cancelled"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  statusFilter === tab
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table list */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Order ID</th>
                <th className="py-3 px-4">Customer & Location</th>
                <th className="py-3 px-4">Kitchen / Vendor</th>
                <th className="py-3 px-4">Items Summary</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{order.id}</td>
                  <td className="py-3.5 px-4">
                    <p className="font-semibold text-xs sm:text-sm text-slate-900">{order.customerName}</p>
                    <p className="text-xs text-slate-500 truncate max-w-xs">{order.customerAddress}</p>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-800">{order.vendorName}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-600 truncate max-w-xs">{order.items}</td>
                  <td className="py-3.5 px-4 font-bold text-xs sm:text-sm text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-xs"
                    >
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Order Inspect Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full p-6 animate-fade-in space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Order #{selectedOrder.id}</h3>
                <p className="text-xs text-slate-500">Placed {selectedOrder.date}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Customer</p>
                <p className="font-semibold text-slate-900 text-sm">{selectedOrder.customerName}</p>
                <p className="text-slate-600 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customerPhone}
                </p>
                <p className="text-slate-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customerAddress}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Vendor & Items</p>
                <p className="font-semibold text-slate-900 text-sm">{selectedOrder.vendorName}</p>
                <p className="text-slate-700 leading-relaxed">{selectedOrder.items}</p>
              </div>

              <div className="flex justify-between items-center px-1">
                <span className="font-semibold text-slate-700">Fulfillment Status:</span>
                <StatusBadge status={selectedOrder.status} />
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <label className="font-semibold text-slate-700 block">Override Order Status:</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["Cooking", "In Transit", "Completed", "Cancelled"] as const).map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => updateOrderStatus(selectedOrder.id, st)}
                      className={`py-1.5 px-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                        selectedOrder.status === st
                          ? "bg-slate-900 text-white border-slate-900"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
