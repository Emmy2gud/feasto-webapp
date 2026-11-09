import { useState } from "react";
import {
  Store,
  Search,
  PlusCircle,
  Star,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  X,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Vendor {
  id: string;
  name: string;
  category: string;
  rating: number;
  orders: number;
  revenue: string;
  status: "Active" | "Suspended" | "Pending";
  owner: string;
  logo: string;
}

const initialVendors: Vendor[] = [
  {
    id: "VN-8821",
    name: "Saffron Roots Artisanal",
    category: "Indian Fusion",
    rating: 4.8,
    orders: 842,
    revenue: "$24,500.00",
    status: "Active",
    owner: "Deepak K.",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
  },
  {
    id: "VN-4509",
    name: "Flame & Spice Bistro",
    category: "Middle Eastern",
    rating: 4.5,
    orders: 312,
    revenue: "$8,910.00",
    status: "Active",
    owner: "Layla A.",
    logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop",
  },
  {
    id: "VN-1209",
    name: "Campus Grill",
    category: "Burgers & Shakes",
    rating: 4.9,
    orders: 1420,
    revenue: "$48,250.00",
    status: "Active",
    owner: "John D.",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop",
  },
  {
    id: "VN-3381",
    name: "Spicy Orchid Thai",
    category: "Thai Bistro",
    rating: 4.2,
    orders: 184,
    revenue: "$3,450.00",
    status: "Pending",
    owner: "Sarah J.",
    logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
];

export default function VendorsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [newVendorName, setNewVendorName] = useState("");
  const [newVendorCategory, setNewVendorCategory] = useState("");
  const [newVendorOwner, setNewVendorOwner] = useState("");

  const toggleStatus = (id: string) => {
    setVendors((prev) =>
      prev.map((v) => {
        if (v.id === id) {
          const nextStatus =
            v.status === "Active"
              ? "Suspended"
              : v.status === "Pending"
              ? "Active"
              : "Active";
          return { ...v, status: nextStatus };
        }
        return v;
      })
    );
  };

  const handleRegisterVendor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVendorName) return;

    const newV: Vendor = {
      id: `VN-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newVendorName,
      category: newVendorCategory || "General Campus Dining",
      rating: 5.0,
      orders: 0,
      revenue: "$0.00",
      status: "Active",
      owner: newVendorOwner || "Kitchen Manager",
      logo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop",
    };

    setVendors([newV, ...vendors]);
    setNewVendorName("");
    setNewVendorCategory("");
    setNewVendorOwner("");
    setShowRegisterModal(false);
  };

  const filteredVendors = vendors.filter((v) => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Vendors Directory</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Approve campus food vendors, review compliance, and manage store operational status.
          </p>
        </div>
        <button
          onClick={() => setShowRegisterModal(true)}
          className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer self-start sm:self-center"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Register Kitchen</span>
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Partners</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{vendors.length} Kitchens</h3>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
            <Store className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Live</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">
              {vendors.filter((v) => v.status === "Active").length} Open
            </h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Approval</p>
            <h3 className="text-2xl font-bold text-amber-600 mt-1">
              {vendors.filter((v) => v.status === "Pending").length} Awaiting
            </h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Partner GMV MTD</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">$85.1k</h3>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Directory Table Container */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Controls */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search by vendor name, cuisine, or owner..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 self-start sm:self-center">
            {(["All", "Active", "Pending", "Suspended"] as const).map((tab) => (
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
                <th className="py-3 px-5">Kitchen Details</th>
                <th className="py-3 px-4">Cuisine</th>
                <th className="py-3 px-4">Owner / Contact</th>
                <th className="py-3 px-4">Rating</th>
                <th className="py-3 px-4">Total Orders</th>
                <th className="py-3 px-4">Revenue MTD</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0"
                        src={vendor.logo}
                        alt={vendor.name}
                      />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm text-slate-900">{vendor.name}</p>
                        <p className="text-xs font-mono text-slate-400">#{vendor.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-700">{vendor.category}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-700">{vendor.owner}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{vendor.rating}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-800 font-medium">{vendor.orders}</td>
                  <td className="py-3.5 px-4 text-xs font-bold text-slate-900">{vendor.revenue}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={vendor.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => toggleStatus(vendor.id)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer border ${
                        vendor.status === "Active"
                          ? "border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200"
                          : vendor.status === "Pending"
                          ? "bg-emerald-600 text-white border-transparent hover:bg-emerald-700"
                          : "bg-slate-900 text-white border-transparent hover:bg-slate-800"
                      }`}
                    >
                      {vendor.status === "Active"
                        ? "Suspend"
                        : vendor.status === "Pending"
                        ? "Approve Kitchen"
                        : "Reactivate"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Register Vendor Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleRegisterVendor}
            className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full p-6 animate-fade-in space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Register New Campus Kitchen</h3>
              <button
                type="button"
                onClick={() => setShowRegisterModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Restaurant / Brand Name</label>
                <input
                  type="text"
                  required
                  value={newVendorName}
                  onChange={(e) => setNewVendorName(e.target.value)}
                  placeholder="e.g. Saffron Bistro Express"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Cuisine Category</label>
                <input
                  type="text"
                  value={newVendorCategory}
                  onChange={(e) => setNewVendorCategory(e.target.value)}
                  placeholder="e.g. Rice Bowls, Italian, Sandwiches"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Manager / Owner Name</label>
                <input
                  type="text"
                  value={newVendorOwner}
                  onChange={(e) => setNewVendorOwner(e.target.value)}
                  placeholder="e.g. Deepak Kumar"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowRegisterModal(false)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold cursor-pointer shadow-xs"
              >
                Create Partner
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
