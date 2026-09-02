import  { useState } from "react";
import {
  ShoppingBag,
  Search,
  Download,
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  ChevronRight,
  User,
  MapPin,
  Phone,
  FileText,
} from "lucide-react";


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

export default function OrdersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Pending" | "Cooking" | "In Transit" | "Completed" | "Cancelled">("All");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "4492",
      customerName: "Jane Cooper",
      customerPhone: "+1 (555) 234-5678",
      customerAddress: "404 Main Hall, Campus North",
      vendorName: "Spicy Corner Bistro",
      items: "Gourmet Fresh Bowl x1, Diet Coke x1",
      total: 24.50,
      status: "In Transit",
      date: "10 mins ago"
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
      date: "25 mins ago"
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
      date: "30 mins ago"
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
      date: "1 hour ago"
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
      date: "2 hours ago"
    }
  ]);

  const updateOrderStatus = (id: string, newStatus: Order["status"]) => {
    setOrders(prev =>
      prev.map(ord => {
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

  const filteredOrders = orders.filter(order => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vendorName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeClass = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Cooking":
        return "bg-orange-100 text-[#ee8c2b]";
      case "In Transit":
        return "bg-blue-100 text-blue-700";
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
          <p className="text-sm text-gray-500 mt-0.5">Manage, monitor, and resolve customer orders in real-time.</p>
          
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-200 transition-all cursor-pointer">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-bold rounded-xl text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
            <Plus className="w-4 h-4" />
            New Manual Order
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          onClick={() => setStatusFilter("All")}
          className={`bg-white p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            statusFilter === "All" ? "border-[#ee8c2b] ring-2 ring-[#ee8c2b]/10 scale-[1.02]" : "border-slate-100 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-[#ee8c2b]/10 rounded-lg text-[#ee8c2b]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Total</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{orders.length}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">All Orders</p>
        </div>

        <div
          onClick={() => setStatusFilter("Pending")}
          className={`bg-white p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            statusFilter === "Pending" ? "border-amber-500 ring-2 ring-amber-500/10 scale-[1.02]" : "border-slate-100 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Active</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{orders.filter(o => o.status === "Pending").length}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Approval</p>
        </div>

        <div
          onClick={() => setStatusFilter("Completed")}
          className={`bg-white p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            statusFilter === "Completed" ? "border-green-500 ring-2 ring-green-500/10 scale-[1.02]" : "border-slate-100 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-green-50 rounded-lg text-green-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Rate: 94%</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{orders.filter(o => o.status === "Completed").length}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completed</p>
        </div>

        <div
          onClick={() => setStatusFilter("Cancelled")}
          className={`bg-white p-5 rounded-2xl border shadow-sm cursor-pointer transition-all ${
            statusFilter === "Cancelled" ? "border-red-500 ring-2 ring-red-500/10 scale-[1.02]" : "border-slate-100 hover:border-slate-300"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="p-2 bg-red-50 rounded-lg text-red-600">
              <XCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Rate: 3%</span>
          </div>
          <p className="text-2xl font-extrabold text-slate-900">{orders.filter(o => o.status === "Cancelled").length}</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cancelled</p>
        </div>
      </div>

      {/* Main Grid: Orders list on the left, order sidebar on the right if selected */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
        <div className={`${selectedOrder ? "xl:col-span-2" : "xl:col-span-3"} bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden`}>
          {/* List Controls */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 transition-all"
                placeholder="Search order ID, client, or kitchen..."
                type="text"
              />
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase">Filtered by: <span className="text-[#ee8c2b]">{statusFilter}</span></span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Kitchen / Vendor</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Placed</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map(order => (
                    <tr
                      key={order.id}
                      onClick={() => setSelectedOrder(order)}
                      className={`hover:bg-slate-50/50 transition-colors cursor-pointer group ${
                        selectedOrder?.id === order.id ? "bg-slate-50" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span className="font-bold text-slate-800 text-sm">#{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-700 text-sm">{order.customerName}</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-500">{order.vendorName}</td>
                      <td className="px-6 py-4">
                        <span className="font-extrabold text-slate-800 text-sm">${order.total.toFixed(2)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusBadgeClass(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400 font-medium">{order.date}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 rounded hover:bg-slate-100 text-slate-400 group-hover:text-slate-600 transition-colors">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400 font-medium">
                      No matching orders found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Sidebar Drawer */}
        {selectedOrder && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6 animate-slide-in">
            <div className="flex justify-between items-center pb-4 border-b border-slate-100">
              <div>
                <h4 className="font-extrabold text-lg text-slate-800">Order Details</h4>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">#{selectedOrder.id}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-xs cursor-pointer bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200"
              >
                Close Drawer
              </button>
            </div>

            {/* Customer Details */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Details</p>
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <User className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div className="space-y-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800">{selectedOrder.customerName}</p>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" /> {selectedOrder.customerPhone}
                  </p>
                  <p className="text-xs text-slate-500 font-medium flex items-start gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" /> {selectedOrder.customerAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Kitchen & Items */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Kitchen & Items</p>
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold">Kitchen:</span>
                  <span className="text-slate-800 font-extrabold">{selectedOrder.vendorName}</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-medium text-slate-600 leading-relaxed">{selectedOrder.items}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Status Action Selector */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Update Progress</p>
              <div className="grid grid-cols-2 gap-2">
                {["Pending", "Cooking", "In Transit", "Completed", "Cancelled"].map(st => (
                  <button
                    key={st}
                    onClick={() => updateOrderStatus(selectedOrder.id, st as Order["status"])}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      selectedOrder.status === st
                        ? "bg-[#ee8c2b] text-white border-transparent shadow-sm"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Price breakdown */}
            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Price</p>
                <p className="text-lg font-extrabold text-slate-900 mt-0.5">${selectedOrder.total.toFixed(2)}</p>
              </div>
              <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                PAID via Card
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
