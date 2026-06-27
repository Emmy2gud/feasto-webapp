import React, { useState } from "react";
import {
  Megaphone,
  PlusCircle,
  TrendingUp,
  Ticket,
  DollarSign,
  Rocket,
  Flame,
  Clock,
  Utensils,
  Search,
  Download,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X
} from "lucide-react";

interface Promotion {
  id: string;
  name: string;
  code: string;
  discount: string;
  status: "Active" | "Expired";
  used: number;
  limit: number;
  expiry: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
}

export default function PromotionsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Expired">("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form states
  const [newPromoName, setNewPromoName] = useState("");
  const [newPromoCode, setNewPromoCode] = useState("");
  const [newPromoDiscount, setNewPromoDiscount] = useState("");
  const [newPromoLimit, setNewPromoLimit] = useState("1000");
  const [newPromoExpiry, setNewPromoExpiry] = useState("");

  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: "P-001",
      name: "Saffron Harvest Launch",
      code: "WELCOME25",
      discount: "25% OFF",
      status: "Active",
      used: 450,
      limit: 1000,
      expiry: "Dec 31, 2026",
      icon: Rocket,
      iconBg: "bg-orange-100 text-[#ee8c2b]"
    },
    {
      id: "P-002",
      name: "Summer Heat Sale",
      code: "SUMMER_50",
      discount: "50% OFF",
      status: "Active",
      used: 840,
      limit: 1000,
      expiry: "Aug 15, 2026",
      icon: Flame,
      iconBg: "bg-red-100 text-red-600"
    },
    {
      id: "P-003",
      name: "Spring Equinox",
      code: "SPRING_FREE",
      discount: "Free Delivery",
      status: "Expired",
      used: 1000,
      limit: 1000,
      expiry: "May 01, 2026",
      icon: Clock,
      iconBg: "bg-slate-100 text-slate-500"
    },
    {
      id: "P-004",
      name: "Midweek Munchies",
      code: "WEDNESDAY15",
      discount: "15% OFF",
      status: "Active",
      used: 128,
      limit: 2000, // unlimited or high
      expiry: "Ongoing",
      icon: Utensils,
      iconBg: "bg-sky-100 text-sky-600"
    }
  ]);

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoName || !newPromoCode || !newPromoDiscount) return;

    const newPromo: Promotion = {
      id: `P-${Date.now()}`,
      name: newPromoName,
      code: newPromoCode.toUpperCase(),
      discount: newPromoDiscount,
      status: "Active",
      used: 0,
      limit: parseInt(newPromoLimit) || 1000,
      expiry: newPromoExpiry || "Ongoing",
      icon: Rocket,
      iconBg: "bg-orange-100 text-[#ee8c2b]"
    };

    setPromotions(prev => [newPromo, ...prev]);
    setIsModalOpen(false);

    // Reset Form
    setNewPromoName("");
    setNewPromoCode("");
    setNewPromoDiscount("");
    setNewPromoLimit("1000");
    setNewPromoExpiry("");
  };

  const filteredPromos = promotions.filter(promo => {
    const matchesSearch =
      promo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      promo.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || promo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-fade-in relative">
      {/* Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Promotions Hub</h2>
          <p className="text-slate-500 mt-1">Manage marketing campaigns, seasonal discounts, and customer incentives.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white font-bold rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
        >
          <PlusCircle className="w-5 h-5" />
          Create New Promo
        </button>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-[#ee8c2b] mb-4">
            <Rocket className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Promos</p>
          <h3 className="text-2xl font-extrabold mt-1 text-slate-800">
            {promotions.filter(p => p.status === "Active").length}
          </h3>
          <p className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-2">
            <TrendingUp className="w-3.5 h-3.5" /> +3 this week
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600 mb-4">
            <Ticket className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Redemptions</p>
          <h3 className="text-2xl font-extrabold mt-1 text-slate-800">
            {promotions.reduce((acc, curr) => acc + curr.used, 0)}
          </h3>
          <p className="text-[10px] text-slate-400 font-medium mt-2">Across all campaigns</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
            <DollarSign className="w-5 h-5" />
          </div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Discount Value</p>
          <h3 className="text-2xl font-extrabold mt-1 text-slate-800">$12.4k</h3>
          <p className="text-[10px] text-slate-400 font-medium mt-2">Total revenue impact</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm overflow-hidden relative">
          <div className="relative z-10">
            <div className="w-10 h-10 bg-[#ee8c2b] rounded-lg flex items-center justify-center text-white mb-4">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Performer</p>
            <h3 className="text-lg font-extrabold mt-1 leading-tight text-slate-800">SUMMER_50</h3>
            <p className="text-[10px] text-slate-400 font-medium mt-1">84% Usage Limit</p>
          </div>
        </div>
      </div>

      {/* Promotions Table Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Table Controls */}
        <div className="px-8 py-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center bg-slate-50/20 gap-4">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30"
              placeholder="Search campaigns or codes..."
              type="text"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <button className="px-4 py-2 text-xs font-bold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
              Export CSV
            </button>
            <div className="flex bg-slate-100 rounded-lg p-1">
              {(["All", "Active", "Expired"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    statusFilter === tab ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table list */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-[10px] font-bold text-slate-400 bg-slate-50 uppercase tracking-widest">
                <th className="px-8 py-4">Promo Details</th>
                <th className="px-8 py-4">Discount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Usage</th>
                <th className="px-8 py-4">Expiry</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPromos.map(promo => {
                const IconComponent = promo.icon;
                const percentUsed = Math.min(100, Math.round((promo.used / promo.limit) * 100));
                return (
                  <tr
                    key={promo.id}
                    className={`hover:bg-slate-50/50 transition-colors group ${
                      promo.status === "Expired" ? "opacity-60" : ""
                    }`}
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${promo.iconBg}`}>
                          {promo.icon === Rocket ? "SH" : <IconComponent className="w-5 h-5" />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800 text-sm">{promo.name}</p>
                          <p className="text-xs text-slate-400 font-medium">
                            Code: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded uppercase">{promo.code}</span>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-extrabold text-sm text-slate-800">{promo.discount}</td>
                    <td className="px-8 py-5">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          promo.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {promo.status === "Active" && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>}
                        {promo.status}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="w-32">
                        <div className="flex justify-between text-[10px] mb-1 font-bold text-slate-500">
                          <span>{promo.used} / {promo.limit}</span>
                          <span>{percentUsed}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${promo.status === "Expired" ? "bg-slate-400" : "bg-[#ee8c2b]"}`}
                            style={{ width: `${percentUsed}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-xs font-semibold text-slate-500">{promo.expiry}</td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600 cursor-pointer">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-8 py-4 bg-slate-50/20 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-semibold">Showing {filteredPromos.length} of {promotions.length} promotions</p>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-400 cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded bg-[#ee8c2b] text-white text-xs font-bold shadow-sm">1</button>
            <button className="p-1 hover:bg-slate-100 rounded transition-colors text-slate-400 cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slide-over Drawer Modal: Create New Promo */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300"
          ></div>

          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-xl text-slate-800">Create New Promotion</h3>
                <p className="text-xs text-slate-400 font-medium">Configure your campaign parameters below.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePromo} className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                  Promotion Name
                </label>
                <input
                  required
                  value={newPromoName}
                  onChange={e => setNewPromoName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-[#ee8c2b] transition-all text-sm"
                  placeholder="e.g. Festive Holiday Blast"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                    Promo Code
                  </label>
                  <input
                    required
                    value={newPromoCode}
                    onChange={e => setNewPromoCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white font-mono focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-[#ee8c2b] transition-all text-sm uppercase"
                    placeholder="HOLIDAY20"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                    Discount (e.g. 20% OFF)
                  </label>
                  <input
                    required
                    value={newPromoDiscount}
                    onChange={e => setNewPromoDiscount(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-[#ee8c2b] transition-all text-sm"
                    placeholder="20% OFF or Free Del."
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                    Usage Limit
                  </label>
                  <input
                    value={newPromoLimit}
                    onChange={e => setNewPromoLimit(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-[#ee8c2b] transition-all text-sm"
                    placeholder="1000"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                    Expiry Date
                  </label>
                  <input
                    value={newPromoExpiry}
                    onChange={e => setNewPromoExpiry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 focus:border-[#ee8c2b] transition-all text-sm text-slate-600"
                    placeholder="Ongoing or Dec 31, 2026"
                    type="text"
                  />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex gap-3">
                <button
                  type="submit"
                  className="flex-grow py-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all cursor-pointer"
                >
                  Create Promo Campaign
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
