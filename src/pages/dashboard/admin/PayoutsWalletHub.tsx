import { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Download,
  Building,
  User,
  Check,
  X,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

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
      amount: 2450.0,
      time: "Requested 2h ago",
      avatar: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
      type: "Vendor",
    },
    {
      id: "VN-4509",
      recipientName: "Flame & Spice Bistro",
      recipientId: "#VN-4509",
      amount: 1120.5,
      time: "Requested 5h ago",
      avatar: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=100&h=100&fit=crop",
      type: "Vendor",
    },
  ]);

  const [riderRequests, setRiderRequests] = useState<PayoutRequest[]>([
    {
      id: "RD-2210",
      recipientName: "Marcus Thompson",
      recipientId: "#RD-2210",
      amount: 425.1,
      time: "Requested 15m ago",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      type: "Rider",
    },
    {
      id: "RD-3108",
      recipientName: "Leila Al-Farsi",
      recipientId: "#RD-3108",
      amount: 310.0,
      time: "Requested 1h ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      type: "Rider",
    },
  ]);

  const [history, setHistory] = useState<PayoutHistory[]>([
    {
      id: "H-001",
      recipientName: "Spicy Corner Bistro",
      recipientType: "Vendor",
      transferId: "TRSF-99120",
      date: "Jun 27, 2026, 11:30 AM",
      amount: 1840.0,
      status: "Success",
    },
    {
      id: "H-002",
      recipientName: "Amara Okafor",
      recipientType: "Rider",
      transferId: "TRSF-33291",
      date: "Jun 26, 2026, 04:15 PM",
      amount: 320.5,
      status: "Success",
    },
    {
      id: "H-003",
      recipientName: "Sweet Cravings Bakery",
      recipientType: "Vendor",
      transferId: "TRSF-88301",
      date: "Jun 25, 2026, 09:00 AM",
      amount: 750.0,
      status: "Failed",
    },
  ]);

  const handleApprove = (req: PayoutRequest) => {
    const newTx: PayoutHistory = {
      id: `H-${Date.now()}`,
      recipientName: req.recipientName,
      recipientType: req.type,
      transferId: `TRSF-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleString(),
      amount: req.amount,
      status: "Success",
    };
    setHistory((prev) => [newTx, ...prev]);

    if (req.type === "Vendor") {
      setVendorRequests((prev) => prev.filter((r) => r.id !== req.id));
    } else {
      setRiderRequests((prev) => prev.filter((r) => r.id !== req.id));
    }
  };

  const handleReject = (req: PayoutRequest) => {
    const newTx: PayoutHistory = {
      id: `H-${Date.now()}`,
      recipientName: req.recipientName,
      recipientType: req.type,
      transferId: `TRSF-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toLocaleString(),
      amount: req.amount,
      status: "Failed",
    };
    setHistory((prev) => [newTx, ...prev]);

    if (req.type === "Vendor") {
      setVendorRequests((prev) => prev.filter((r) => r.id !== req.id));
    } else {
      setRiderRequests((prev) => prev.filter((r) => r.id !== req.id));
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Payouts & Wallet Hub</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Authorize partner withdrawals, manage reserve liquidity, and review disbursements.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer self-start sm:self-center">
          <Download className="w-3.5 h-3.5" />
          <span>Export Summary</span>
        </button>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Platform Float Reserve</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">$142,850.42</h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5 pt-1">
              <TrendingUp size={12} /> Healthy Reserve Ratio
            </span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ee8c2b] flex items-center justify-center">
            <Wallet className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Disbursed (MTD)</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">$58,210.00</h3>
            <span className="text-xs text-slate-400 font-medium pt-1 block">182 transactions settled</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Authorization</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-600 mt-1">
              {vendorRequests.length + riderRequests.length} Requests
            </h3>
            <span className="text-xs text-amber-600 font-semibold pt-1 block">Awaiting admin signature</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Approval Queues */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vendor Requests */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-[#ee8c2b]" />
              <h3 className="text-sm font-semibold text-slate-900">Vendor Withdrawal Requests</h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-50 text-[#ee8c2b]">
              {vendorRequests.length} Pending
            </span>
          </div>

          <div className="space-y-3">
            {vendorRequests.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">No pending vendor payouts.</p>
            ) : (
              vendorRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-lg border border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={req.avatar} alt={req.recipientName} className="w-9 h-9 rounded-lg object-cover" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{req.recipientName}</p>
                      <p className="text-[11px] text-slate-400">{req.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">${req.amount.toFixed(2)}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleApprove(req)}
                        className="p-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer transition-colors shadow-xs"
                        title="Approve payout"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleReject(req)}
                        className="p-1.5 rounded-md border border-slate-200 hover:bg-rose-50 text-slate-400 hover:text-rose-600 cursor-pointer transition-colors"
                        title="Reject payout"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Rider Requests */}
        <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-sky-600" />
              <h3 className="text-sm font-semibold text-slate-900">Rider Cashout Requests</h3>
            </div>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">
              {riderRequests.length} Pending
            </span>
          </div>

          <div className="space-y-3">
            {riderRequests.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">No pending rider cashouts.</p>
            ) : (
              riderRequests.map((req) => (
                <div
                  key={req.id}
                  className="p-3.5 rounded-lg border border-slate-100 bg-slate-50/50 flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img src={req.avatar} alt={req.recipientName} className="w-9 h-9 rounded-full object-cover" />
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{req.recipientName}</p>
                      <p className="text-[11px] text-slate-400">{req.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">${req.amount.toFixed(2)}</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleApprove(req)}
                        className="p-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer transition-colors shadow-xs"
                        title="Approve cashout"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleReject(req)}
                        className="p-1.5 rounded-md border border-slate-200 hover:bg-rose-50 text-slate-400 hover:text-rose-600 cursor-pointer transition-colors"
                        title="Reject cashout"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent Disbursements Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-900">Recent Settled Disbursements</h3>
          <p className="text-xs text-slate-500 mt-0.5">Audit log of approved and processed bank payouts</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Transfer Ref</th>
                <th className="py-3 px-4">Recipient</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Processed Date</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {history.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{tx.transferId}</td>
                  <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{tx.recipientName}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{tx.recipientType}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{tx.date}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={tx.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right font-bold text-xs sm:text-sm text-slate-900">
                    ${tx.amount.toFixed(2)}
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
