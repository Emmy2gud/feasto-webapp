import React, { useState } from "react";
import {
  Store,
  Search,
  Filter,
  PlusCircle,
  MoreVertical,
  Star,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  TrendingUp,
  TrendingDown
} from "lucide-react";

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

export default function VendorsManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [vendors, setVendors] = useState<Vendor[]>([
    {
      id: "VN-8821",
      name: "Saffron Roots Artisanal",
      category: "Indian Fusion",
      rating: 4.8,
      orders: 842,
      revenue: "$24,500.00",
      status: "Active",
      owner: "Deepak K.",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop"
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
      logo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop"
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
      logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
    },
    {
      id: "VN-3381",
      name: "Spicy Orchid",
      category: "Thai Bistro",
      rating: 4.2,
      orders: 184,
      revenue: "$3,450.00",
      status: "Pending",
      owner: "Sarah J.",
      logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    }
  ]);

  const toggleStatus = (id: string) => {
    setVendors(prev =>
      prev.map(v => {
        if (v.id === id) {
          const nextStatus = v.status === "Active" ? "Suspended" : "Active";
          return { ...v, status: nextStatus };
        }
        return v;
      })
    );
  };

  const filteredVendors = vendors.filter(v => {
    const matchesSearch =
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || v.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Vendors Directory</h2>
          <p className="text-slate-500 font-medium mt-1">Approve kitchen registrations and monitor vendor performance.</p>
        </div>
        <button className="bg-[#ee8c2b] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer">
          <PlusCircle className="w-5 h-5" />
          <span>Register Vendor</span>
        </button>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Vendors</p>
            <h3 className="text-3xl font-extrabold text-slate-900">156</h3>
          </div>
          <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
            <Store className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Kitchens</p>
            <h3 className="text-3xl font-extrabold text-slate-900">142</h3>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pending Approval</p>
            <h3 className="text-3xl font-extrabold text-slate-900">14</h3>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Revenue MTD</p>
            <h3 className="text-3xl font-extrabold text-slate-900">$84.8k</h3>
          </div>
          <div className="w-12 h-12 bg-orange-150 text-[#ee8c2b] rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Controls */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#ee8c2b]" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 text-sm font-medium transition-all"
              placeholder="Search by vendor name, category, or owner..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto justify-end">
            {(["All", "Active", "Pending"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab === "All" ? "All" : tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  (statusFilter === "All" && tab === "All") || statusFilter === tab
                    ? "bg-white text-slate-800 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table list */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Kitchen Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Owner</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Total Orders</th>
                <th className="px-6 py-4">Revenue MTD</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVendors.map(v => (
                <tr key={v.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img className="w-10 h-10 rounded-xl object-cover border border-slate-100" src={v.logo} alt={v.name} />
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{v.name}</p>
                        <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">ID: {v.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-500">{v.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600">{v.owner}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-slate-800">{v.rating}</span>
                      <Star className="w-3.5 h-3.5 fill-[#ee8c2b] text-[#ee8c2b]" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{v.orders}</td>
                  <td className="px-6 py-4 text-sm font-extrabold text-slate-800">{v.revenue}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        v.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : v.status === "Suspended"
                          ? "bg-red-100 text-red-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {v.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(v.id)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border cursor-pointer active:scale-95 ${
                          v.status === "Active"
                            ? "border-red-200 text-red-600 hover:bg-red-50"
                            : "border-green-200 text-green-600 hover:bg-green-50"
                        }`}
                      >
                        {v.status === "Active" ? "Suspend" : "Activate"}
                      </button>
                      <button className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
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
