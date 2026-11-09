import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  DollarSign,
  Eye,
  Filter,
  Search,
  ShoppingBag,
  Soup,
  Check,
  Clock,
  X,
  RotateCcw,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Order {
  id: string;
  customer: string;
  initials: string;
  items: string;
  description: string;
  total: number;
  status: "New Order" | "Preparing" | "Ready" | "Completed" | "Cancelled";
  time: string;
}

const initialOrders: Order[] = [
  {
    id: "ORD-2458",
    customer: "John Doe",
    initials: "JD",
    items: "2× Classic Cheeseburger, 1× Curly Fries",
    description: "+2 Extra Cheddar, No Onion",
    total: 24.5,
    status: "New Order",
    time: "2 mins ago",
  },
  {
    id: "ORD-2457",
    customer: "Sarah Al-Fayed",
    initials: "SA",
    items: "1× Spicy Jollof Rice Combo, 1× Plantain",
    description: "Extra spicy sauce on the side",
    total: 15.99,
    status: "New Order",
    time: "5 mins ago",
  },
  {
    id: "ORD-2456",
    customer: "Mike K.",
    initials: "MK",
    items: "3× Milkshakes (Vanilla, Strawberry, Choco)",
    description: "To-Go cup packaging",
    total: 18.0,
    status: "Preparing",
    time: "12 mins ago",
  },
  {
    id: "ORD-2455",
    customer: "Elena Rostova",
    initials: "ER",
    items: "1× Vegan Mediterranean Bowl",
    description: "Extra lemon tahini dressing",
    total: 14.2,
    status: "Ready",
    time: "28 mins ago",
  },
  {
    id: "ORD-2454",
    customer: "Tom Moody",
    initials: "TM",
    items: "2× Double Beef Burger, 2× Soda",
    description: "Well-done patties",
    total: 22.0,
    status: "Preparing",
    time: "15 mins ago",
  },
  {
    id: "ORD-2453",
    customer: "David Smith",
    initials: "DS",
    items: "1× Crispy Chicken Sub, 1× Coleslaw",
    description: "Extra garlic mayo",
    total: 16.5,
    status: "Completed",
    time: "35 mins ago",
  },
  {
    id: "ORD-2452",
    customer: "Mary James",
    initials: "MJ",
    items: "2× Chicken Shawarma Wrap",
    description: "Pickles on the side",
    total: 19.0,
    status: "Completed",
    time: "42 mins ago",
  },
  {
    id: "ORD-2451",
    customer: "Alex Brown",
    initials: "AB",
    items: "1× Fried Rice Combo with Turkey",
    description: "Cancelled by user before prep",
    total: 15.75,
    status: "Cancelled",
    time: "1 hour ago",
  },
];

const StatCard: React.FC<{
  label: string;
  value: string;
  sub: string;
  icon: React.ReactNode;
  iconBg: string;
}> = ({ label, value, sub, icon, iconBg }) => (
  <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-start justify-between">
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
      <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">{value}</p>
      <p className="text-xs text-slate-500 mt-1">{sub}</p>
    </div>
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
      {icon}
    </div>
  </div>
);

export default function VendorOrdersPage() {
  const [ordersList, setOrdersList] = useState<Order[]>(initialOrders);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const tabStatuses = ["All", "New Order", "Preparing", "Ready", "Completed", "Cancelled"];

  const getCount = (status: string) => {
    if (status === "All") return ordersList.length;
    return ordersList.filter((order) => order.status === status).length;
  };

  const updateOrderStatus = (id: string, newStatus: Order["status"]) => {
    setOrdersList((prev) =>
      prev.map((ord) => (ord.id === id ? { ...ord, status: newStatus } : ord))
    );
    if (selectedOrder?.id === id) {
      setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const filteredOrders = useMemo(() => {
    return ordersList.filter((order) => {
      const matchesTab = activeTab === "All" || order.status === activeTab;
      const searchText = search.toLowerCase();
      const matchesSearch =
        order.customer.toLowerCase().includes(searchText) ||
        order.id.toLowerCase().includes(searchText) ||
        order.items.toLowerCase().includes(searchText);

      return matchesTab && matchesSearch;
    });
  }, [ordersList, activeTab, search]);

  const newOrdersCount = ordersList.filter((o) => o.status === "New Order").length;
  const preparingCount = ordersList.filter((o) => o.status === "Preparing").length;
  const readyCount = ordersList.filter((o) => o.status === "Ready").length;
  const todayTotalRevenue = ordersList
    .filter((o) => o.status !== "Cancelled")
    .reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="space-y-6 pb-8">
   
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Orders Hub</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Real-time management for incoming kitchen tickets and delivery handoffs.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 border border-slate-200 bg-white rounded-lg px-3.5 py-2 hover:bg-slate-50 transition-colors shadow-xs cursor-pointer">
                <Filter size={14} />
                <span>Quick Filter</span>
                <ChevronDown size={14} className="text-slate-400" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44 rounded-lg">
              <DropdownMenuLabel className="text-xs font-semibold">Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {tabStatuses.map((tab) => (
                <DropdownMenuItem
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="text-xs font-medium cursor-pointer"
                >
                  {tab} ({getCount(tab)})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            onClick={() => setOrdersList(initialOrders)}
            title="Reset orders data"
            className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 bg-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          label="New Incoming"
          value={String(newOrdersCount)}
          sub="Requires kitchen acceptance"
          icon={<ShoppingBag className="w-5 h-5 text-sky-600" />}
          iconBg="bg-sky-50 text-sky-600"
        />
        <StatCard
          label="In Preparation"
          value={String(preparingCount)}
          sub="Currently cooking"
          icon={<Soup className="w-5 h-5 text-[#ee8c2b]" />}
          iconBg="bg-orange-50 text-[#ee8c2b]"
        />
        <StatCard
          label="Ready for Pickup"
          value={String(readyCount)}
          sub="Waiting for rider arrival"
          icon={<Check className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          label="Today's Total"
          value={`$${todayTotalRevenue.toFixed(2)}`}
          sub="8 orders fulfilled"
          icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-50 text-emerald-600"
        />
      </div>

    
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      
        <div className="border-b border-slate-200/80 bg-slate-50/50 px-4 pt-2 flex flex-wrap gap-1">
          {tabStatuses.map((status) => {
            const count = getCount(status);
            const isActive = activeTab === status;
            return (
              <button
                key={status}
                onClick={() => setActiveTab(status)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-t-lg transition-all border-b-2 cursor-pointer ${
                  isActive
                    ? "border-[#ee8c2b] text-[#ee8c2b] bg-white shadow-xs font-bold"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                }`}
              >
                <span>{status}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive
                      ? "bg-[#ee8c2b] text-white"
                      : "bg-slate-200/80 text-slate-700"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="p-4 border-b border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Order ID, customer, or food item..."
              className="w-full h-9 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium outline-none focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium self-end sm:self-center">
            Showing <span className="font-semibold text-slate-900">{filteredOrders.length}</span> orders
          </div>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Order Details</th>
                <th className="py-3 px-4">Items Summary</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50/70 transition-colors">
                  
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 text-[#ee8c2b] flex items-center justify-center text-xs font-bold shrink-0">
                          {order.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-xs sm:text-sm text-slate-900">{order.customer}</p>
                          <p className="text-xs text-slate-500 font-mono">#{order.id}</p>
                        </div>
                      </div>
                    </td>


                    <td className="py-3.5 px-4 max-w-xs">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-800 font-medium truncate">{order.items}</p>
                        {order.description && (
                          <p className="text-xs text-slate-500 truncate mt-0.5">{order.description}</p>
                        )}
                      </div>
                    </td>

                 
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        ${order.total.toFixed(2)}
                      </span>
                    </td>

                
                    <td className="py-3.5 px-4">
                      <StatusBadge status={order.status} />
                    </td>

                   
                    <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {order.time}
                      </div>
                    </td>

                  
                    <td className="py-3.5 px-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                          title="View order details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {order.status === "New Order" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "Preparing")}
                            className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
                          >
                            Accept
                          </button>
                        )}
                      
                        {order.status === "New Order" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "Cancelled")}
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
                          >
                            Cancel
                          </button>
                        )}            

                        {order.status === "Preparing" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "Ready")}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all shadow-xs cursor-pointer active:scale-95"
                          >
                            Mark Ready
                          </button>
                        )}

                        {order.status === "Ready" && (
                          <button
                            onClick={() => updateOrderStatus(order.id, "Completed")}
                            className="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs active:scale-95"
                          >
                            Handoff Done
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="h-36 text-center text-slate-400">
                    <p className="font-semibold text-sm text-slate-600">No orders found</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try selecting another status tab or clearing your search term.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      
        <div className="px-5 py-3.5 bg-slate-50/50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>
            Showing 1 to {filteredOrders.length} of {ordersList.length} total orders
          </span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 text-xs font-medium cursor-pointer">
              Previous
            </button>
            <span className="px-3 py-1 rounded-md bg-[#ee8c2b] text-white font-semibold text-xs">
              1
            </span>
            <button className="px-2.5 py-1 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-50 text-xs font-medium cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Order Details Quick Drawer / Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-lg w-full p-6 animate-fade-in space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Order #{selectedOrder.id}</h3>
                <p className="text-xs text-slate-500">{selectedOrder.time} • Placed by {selectedOrder.customer}</p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Items Ordered</p>
                <p className="text-sm font-semibold text-slate-900">{selectedOrder.items}</p>
                {selectedOrder.description && (
                  <p className="text-xs text-slate-600 mt-1 italic">Notes: {selectedOrder.description}</p>
                )}
              </div>

              <div className="flex justify-between items-center px-1 text-sm">
                <span className="text-slate-500">Current Status:</span>
                <StatusBadge status={selectedOrder.status} />
              </div>

              <div className="flex justify-between items-center px-1 text-sm font-semibold">
                <span className="text-slate-700">Total Price:</span>
                <span className="text-lg font-bold text-slate-900">${selectedOrder.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              {selectedOrder.status === "New Order" && (
                <button
                  onClick={() => updateOrderStatus(selectedOrder.id, "Preparing")}
                  className="px-4 py-2 bg-[#ee8c2b] text-white rounded-lg text-xs font-semibold hover:bg-[#d6761f] cursor-pointer"
                >
                  Accept Order
                </button>
              )}
              {selectedOrder.status === "Preparing" && (
                <button
                  onClick={() => updateOrderStatus(selectedOrder.id, "Ready")}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 cursor-pointer"
                >
                  Mark as Ready
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
