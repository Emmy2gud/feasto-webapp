import React, { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  Filter,
  Download,
  MoreVertical,
  Building,
  User,
  Coffee,
  Check,
  X
} from "lucide-react";

interface PayoutRequest {
  id: string;
  recipientName: string;
  recipientId: string;
  amount: number;
  time: string;
  avatar: string;
  type: "Vendor" | "Rider";
}

interface PayoutHistory {
  id: string;
  recipientName: string;
  recipientType: "Vendor" | "Rider";
  transferId: string;
  date: string;
  amount: number;
  status: "Success" | "Failed" | "Pending";
}

export default function PayoutsWalletHub() {
  const [vendorRequests, setVendorRequests] = useState<PayoutRequest[]>([
    {
      id: "VN-8821",
      recipientName: "Saffron Roots Artisanal",
      recipientId: "#VN-8821",
      amount: 2450.00,
      time: "Requested 2h ago",
      avatar: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
      type: "Vendor"
    },
    {
      id: "VN-4509",
      recipientName: "Flame & Spice Bistro",
      recipientId: "#VN-4509",
      amount: 1120.50,
      time: "Requested 5h ago",
      avatar: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop",
      type: "Vendor"
    }
  ]);

  const [riderRequests, setRiderRequests] = useState<PayoutRequest[]>([
    {
      id: "RD-2210",
      recipientName: "Marcus Thompson",
      recipientId: "#RD-2210",
      amount: 425.10,
      time: "Requested 15m ago",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      type: "Rider"
    },
    {
      id: "RD-3108",
      recipientName: "Leila Al-Farsi",
      recipientId: "#RD-3108",
      amount: 310.00,
      time: "Requested 1h ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      type: "Rider"
    }
  ]);

  const [history, setHistory] = useState<PayoutHistory[]>([
    {
      id: "H-001",
      recipientName: "Spicy Corner Bistro",
      recipientType: "Vendor",
      transferId: "TRSF-99120",
      date: "Jun 27, 2026, 11:30 AM",
      amount: 1840.00,
      status: "Success"
    },
    {
      id: "H-002",
      recipientName: "Amara Okafor",
      recipientType: "Rider",
      transferId: "TRSF-33291",
      date: "Jun 26, 2026, 04:15 PM",
      amount: 320.50,
      status: "Success"
    },
    {
      id: "H-003",
      recipientName: "Sweet Cravings Bakery",
      recipientType: "Vendor",
      transferId: "TRSF-88301",
      date: "Jun 25, 2026, 09:00 AM",
      amount: 750.00,
      status: "Failed"
    }
  ]);

  const handleApprove = (req: PayoutRequest) => {
    // Add to history
    const newTx: PayoutHistory = {
      id: `H-${Date.now()}`,
      recipientName: req.recipientName,
      recipientType: req.type,
      transferId: `TRSF-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleString(),
      amount: req.amount,
      status: "Success"
    };
    setHistory(prev => [newTx, ...prev]);

    // Remove from queue
    if (req.type === "Vendor") {
      setVendorRequests(prev => prev.filter(r => r.id !== req.id));
    } else {
      setRiderRequests(prev => prev.filter(r => r.id !== req.id));
    }
  };

  const handleReject = (req: PayoutRequest) => {
    // Add to history as failed
    const newTx: PayoutHistory = {
      id: `H-${Date.now()}`,
      recipientName: req.recipientName,
      recipientType: req.type,
      transferId: `TRSF-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleString(),
      amount: req.amount,
      status: "Failed"
    };
    setHistory(prev => [newTx, ...prev]);

    // Remove from queue
    if (req.type === "Vendor") {
      setVendorRequests(prev => prev.filter(r => r.id !== req.id));
    } else {
      setRiderRequests(prev => prev.filter(r => r.id !== req.id));
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Payouts & Wallet Hub</h2>
          <p className="text-slate-500 font-medium mt-1">Manage liquidity and facilitate distribution across your network.</p>
        </div>
        <button className="px-6 py-2.5 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl font-bold text-sm shadow-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 cursor-pointer">
          <Wallet className="w-4 h-4" />
          Withdraw Funds
        </button>
      </div>

      {/* Stats Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance */}
        <div className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-slate-100 shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Platform Wallet Balance</span>
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ee8c2b]">
                <Wallet className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">$142,850</span>
              <span className="text-sm font-bold text-slate-400">.42</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-sky-500">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12.4% FROM LAST MONTH</span>
            </div>
          </div>
        </div>

        {/* Payouts MTD */}
        <div className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-slate-100 shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Total Payouts MTD</span>
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">$58,210</span>
              <span className="text-sm font-bold text-slate-400">.00</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-slate-400">
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span>842 SUCCESSFUL TRANSFERS</span>
            </div>
          </div>
        </div>

        {/* Pending Requests */}
        <div className="bg-white rounded-2xl p-6 relative overflow-hidden group border border-slate-100 shadow-sm">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pending Requests</span>
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-slate-900">{vendorRequests.length + riderRequests.length}</span>
              <span className="text-sm font-bold text-slate-400 ml-1.5">Active Queue</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold text-red-500">
              <Clock className="w-3.5 h-3.5" />
              <span>AVG. WAIT TIME: 14 MINS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Split Queue Views */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vendor Payout Requests */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-extrabold text-lg text-slate-800">
              <span className="w-2 h-6 bg-[#ee8c2b] rounded-full"></span>
              Vendor Requests
            </h3>
            <span className="px-2.5 py-1 bg-slate-100 rounded text-[10px] font-extrabold text-slate-500 uppercase">
              {vendorRequests.length} Pending
            </span>
          </div>

          <div className="space-y-4">
            {vendorRequests.map(req => (
              <div
                key={req.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col gap-4 hover:border-[#ee8c2b]/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-xl object-cover" src={req.avatar} alt={req.recipientName} />
                    <div>
                      <p className="font-bold text-sm text-slate-800 leading-tight">{req.recipientName}</p>
                      <p className="text-xs text-slate-400 mt-1 font-semibold">ID: {req.recipientId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-slate-900">${req.amount.toFixed(2)}</p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{req.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(req)}
                    className="flex-1 py-2 bg-[#ee8c2b]/10 hover:bg-[#ee8c2b] text-[#ee8c2b] hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                  <button
                    onClick={() => handleReject(req)}
                    className="flex-1 py-2 bg-slate-50 hover:bg-red-500 text-slate-500 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-100"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
            {vendorRequests.length === 0 && (
              <div className="p-8 text-center text-slate-400 bg-white rounded-2xl border border-slate-100">
                No pending vendor payouts.
              </div>
            )}
          </div>
        </section>

        {/* Rider Payout Requests */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-extrabold text-lg text-slate-800">
              <span className="w-2 h-6 bg-sky-500 rounded-full"></span>
              Rider Requests
            </h3>
            <span className="px-2.5 py-1 bg-slate-100 rounded text-[10px] font-extrabold text-slate-500 uppercase">
              {riderRequests.length} Pending
            </span>
          </div>

          <div className="space-y-4">
            {riderRequests.map(req => (
              <div
                key={req.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col gap-4 hover:border-sky-500/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-12 h-12 rounded-full object-cover" src={req.avatar} alt={req.recipientName} />
                    <div>
                      <p className="font-bold text-sm text-slate-800 leading-tight">{req.recipientName}</p>
                      <p className="text-xs text-slate-400 mt-1 font-semibold">ID: {req.recipientId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-slate-900">${req.amount.toFixed(2)}</p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">{req.time}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(req)}
                    className="flex-1 py-2 bg-sky-50 hover:bg-sky-500 text-sky-600 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-sky-100"
                  >
                    <Check className="w-4 h-4" /> Approve
                  </button>
                  <button
                    onClick={() => handleReject(req)}
                    className="flex-1 py-2 bg-slate-50 hover:bg-red-500 text-slate-500 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-slate-100"
                  >
                    <X className="w-4 h-4" /> Reject
                  </button>
                </div>
              </div>
            ))}
            {riderRequests.length === 0 && (
              <div className="p-8 text-center text-slate-400 bg-white rounded-2xl border border-slate-100">
                No pending rider payouts.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Payout History Table */}
      <section className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
        <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-extrabold text-lg text-slate-800">Recent Payout History</h3>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
              <Filter className="w-3.5 h-3.5" />
              Filter
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-8 py-4">Recipient</th>
                <th className="px-8 py-4">Transfer ID</th>
                <th className="px-8 py-4">Type</th>
                <th className="px-8 py-4">Date & Time</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {history.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-[#ee8c2b]">
                        {item.recipientType === "Vendor" ? <Building className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{item.recipientName}</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-sm font-medium text-slate-500">{item.transferId}</td>
                  <td className="px-8 py-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        item.recipientType === "Vendor" ? "bg-orange-50 text-[#ee8c2b]" : "bg-sky-50 text-sky-600"
                      }`}
                    >
                      {item.recipientType}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-xs text-slate-400 font-medium">{item.date}</td>
                  <td className="px-8 py-4">
                    <span className="text-sm font-extrabold text-slate-900">${item.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-8 py-4">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${
                        item.status === "Success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 cursor-pointer">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
