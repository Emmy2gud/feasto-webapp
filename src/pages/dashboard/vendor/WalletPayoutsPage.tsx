import { useState } from "react";
import {
  Download,
  Landmark,
  CreditCard,
  ArrowUpRight,
  Plus,
  ArrowRight,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Transaction {
  date: string;
  id: string;
  method: string;
  status: "Paid" | "Pending" | "Processed";
  amount: string;
  isRefund?: boolean;
}

const transactions: Transaction[] = [
  { date: "Oct 20, 2026", id: "TRX-883920", method: "Chase Bank (••4582)", status: "Pending", amount: "-$850.00" },
  { date: "Oct 14, 2026", id: "TRX-883102", method: "Chase Bank (••4582)", status: "Paid", amount: "-$1,200.00" },
  { date: "Oct 12, 2026", id: "ORD-Refund", method: "Order Adjustment", status: "Processed", amount: "-$24.50", isRefund: true },
  { date: "Oct 07, 2026", id: "TRX-879001", method: "Chase Bank (••4582)", status: "Paid", amount: "-$950.00" },
];

export default function WalletPayoutsPage() {
  const [payoutRequested, setPayoutRequested] = useState(false);

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Wallet & Payouts</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Manage your store balances, bank accounts, and payout schedules.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 shadow-xs transition-colors cursor-pointer">
          <Download size={14} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Balance Card & Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Balance Banner */}
          <div className="bg-slate-900 rounded-xl p-6 sm:p-8 text-white shadow-sm border border-slate-800 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Landmark size={14} className="text-[#ee8c2b]" />
                  <span>Available for Withdrawal</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight">$1,248.50</h2>
                <p className="text-emerald-400 text-xs font-medium flex items-center gap-1 mt-2">
                  <ArrowUpRight size={14} /> +$340.00 earned since last withdrawal
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setPayoutRequested(true)}
                  className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-xs font-bold px-5 py-3 rounded-lg shadow-sm transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>{payoutRequested ? "Payout Requested ✓" : "Request Express Payout"}</span>
                  <ArrowRight size={14} />
                </button>
                <span className="text-[11px] text-slate-400 text-center">
                  Standard weekly deposits are free
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Earned (MTD)</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">$12,840.00</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pending Clearance</p>
              <p className="text-2xl font-bold text-amber-600 mt-1">$152.00</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Next Auto Deposit</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">Friday</p>
            </div>
          </div>

          {/* Transaction History Table */}
          <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">Payout & Transfer History</h3>
                <p className="text-xs text-slate-500 mt-0.5">Records of completed and pending transfers</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-5">Date</th>
                    <th className="py-3 px-4">Transfer Reference</th>
                    <th className="py-3 px-4">Destination</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-5 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-5 text-xs text-slate-600 font-medium">{tx.date}</td>
                      <td className="py-3.5 px-4 font-mono text-xs font-semibold text-slate-900">#{tx.id}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-700">{tx.method}</td>
                      <td className="py-3.5 px-4">
                        <StatusBadge status={tx.status} />
                      </td>
                      <td className="py-3.5 px-5 text-right font-bold text-slate-900 text-sm">
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Bank Account Details */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs space-y-4">
            <h3 className="text-base font-semibold text-slate-900">Settlement Account</h3>
            <div className="p-4 rounded-lg border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <CreditCard size={15} className="text-[#ee8c2b]" /> Chase Business Checking
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Primary
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">Routing: •••••4190</p>
              <p className="text-xs text-slate-500 font-mono">Account: ••••••••4582</p>
            </div>

            <button className="w-full py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
              <Plus size={14} /> Add Bank Account
            </button>
          </div>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Deposit Schedule</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standard payouts are automatically credited every Friday at 09:00 AM for all orders completed prior to Wednesday midnight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
