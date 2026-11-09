import { useState } from "react";
import {
  PlusCircle,
  Ticket,
  Rocket,
  Flame,
  Search,
  X,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Promotion {
  id: string;
  name: string;
  code: string;
  discount: string;
  status: "Active" | "Expired";
  used: number;
  limit: number;
  expiry: string;
}

const initialPromotions: Promotion[] = [
  {
    id: "P-001",
    name: "Campus Welcome Promo",
    code: "WELCOME25",
    discount: "25% OFF",
    status: "Active",
    used: 450,
    limit: 1000,
    expiry: "Dec 31, 2026",
  },
  {
    id: "P-002",
    name: "Exam Week Snack Drop",
    code: "FINALS50",
    discount: "50% OFF",
    status: "Active",
    used: 840,
    limit: 1000,
    expiry: "Aug 15, 2026",
  },
  {
    id: "P-003",
    name: "Spring Orientation Free Delivery",
    code: "SPRING_FREE",
    discount: "Free Delivery",
    status: "Expired",
    used: 1000,
    limit: 1000,
    expiry: "May 01, 2026",
  },
  {
    id: "P-004",
    name: "Midweek Campus Lunch",
    code: "WEDNESDAY15",
    discount: "15% OFF",
    status: "Active",
    used: 128,
    limit: 2000,
    expiry: "Ongoing",
  },
];

export default function PromotionsHub() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Expired">("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [newPromoName, setNewPromoName] = useState("");
  const [newPromoCode, setNewPromoCode] = useState("");
  const [newPromoDiscount, setNewPromoDiscount] = useState("");
  const [newPromoLimit, setNewPromoLimit] = useState("1000");
  const [newPromoExpiry, setNewPromoExpiry] = useState("Dec 31, 2026");

  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);

  const handleCreatePromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPromoName || !newPromoCode || !newPromoDiscount) return;

    const newPromo: Promotion = {
      id: `P-${Math.floor(100 + Math.random() * 900)}`,
      name: newPromoName,
      code: newPromoCode.toUpperCase().trim(),
      discount: newPromoDiscount,
      status: "Active",
      used: 0,
      limit: parseInt(newPromoLimit) || 1000,
      expiry: newPromoExpiry || "Ongoing",
    };

    setPromotions([newPromo, ...promotions]);
    setNewPromoName("");
    setNewPromoCode("");
    setNewPromoDiscount("");
    setIsModalOpen(false);
  };

  const filteredPromos = promotions.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Promotions & Campus Discounts</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Create coupon codes, manage campus-wide campaigns, and set redemption limits.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer self-start sm:self-center"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create Promotion</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Coupons</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {promotions.filter((p) => p.status === "Active").length} Codes Live
            </h3>
          </div>
          <div className="w-10 h-10 bg-orange-50 text-[#ee8c2b] rounded-lg flex items-center justify-center">
            <Ticket className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Redemptions This Month</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600 mt-1">2,418</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Discount Subsidy Value</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">$4,820.00</h3>
          </div>
          <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
            <Flame className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search by campaign name or promo code..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 self-start sm:self-center">
            {(["All", "Active", "Expired"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  statusFilter === tab ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Campaign Name</th>
                <th className="py-3 px-4">Coupon Code</th>
                <th className="py-3 px-4">Discount Value</th>
                <th className="py-3 px-4">Usage / Cap</th>
                <th className="py-3 px-4">Expires</th>
                <th className="py-3 px-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredPromos.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-xs sm:text-sm text-slate-900">{p.name}</td>
                  <td className="py-3.5 px-4 font-mono text-xs font-bold text-[#ee8c2b]">
                    <span className="px-2 py-0.5 rounded bg-orange-50 border border-orange-100">{p.code}</span>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-bold text-slate-800">{p.discount}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-600">
                    {p.used} / {p.limit} used
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{p.expiry}</td>
                  <td className="py-3.5 px-5 text-right">
                    <StatusBadge status={p.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Promotion Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <form
            onSubmit={handleCreatePromo}
            className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full p-6 animate-fade-in space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Create New Coupon Campaign</h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Campaign Title</label>
                <input
                  type="text"
                  required
                  value={newPromoName}
                  onChange={(e) => setNewPromoName(e.target.value)}
                  placeholder="e.g. Free Finals Coffee"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Promo Code</label>
                <input
                  type="text"
                  required
                  value={newPromoCode}
                  onChange={(e) => setNewPromoCode(e.target.value)}
                  placeholder="e.g. FINALS20"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium uppercase focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1 block">Discount</label>
                  <input
                    type="text"
                    required
                    value={newPromoDiscount}
                    onChange={(e) => setNewPromoDiscount(e.target.value)}
                    placeholder="e.g. 20% OFF or $5 OFF"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1 block">Usage Cap</label>
                  <input
                    type="number"
                    value={newPromoLimit}
                    onChange={(e) => setNewPromoLimit(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 mb-1 block">Expiry Date</label>
                <input
                  type="text"
                  value={newPromoExpiry}
                  onChange={(e) => setNewPromoExpiry(e.target.value)}
                  placeholder="e.g. Dec 31, 2026"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold cursor-pointer shadow-xs"
              >
                Launch Campaign
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
