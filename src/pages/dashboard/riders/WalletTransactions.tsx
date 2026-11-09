import { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  RefreshCw,
  Landmark,
  CheckCircle,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

type TxType = "credit" | "debit";

interface Transaction {
  id: string;
  label: string;
  description: string;
  amount: string;
  type: TxType;
  date: string;
  status: "Completed" | "Pending";
}

const transactions: Transaction[] = [
  { id: "T1", label: "Trip Payout", description: "Order #SH-8291 • Sarah Jenkins", amount: "+$10.50", type: "credit", date: "Today, 12:42 PM", status: "Completed" },
  { id: "T2", label: "Trip Payout", description: "Order #SH-8289 • Marcus Turner", amount: "+$13.20", type: "credit", date: "Today, 11:15 AM", status: "Completed" },
  { id: "T3", label: "Bank Withdrawal", description: "To Chase Checking ••4291", amount: "-$50.00", type: "debit", date: "Yesterday, 6:00 PM", status: "Completed" },
  { id: "T4", label: "Trip Payout", description: "Order #SH-8280 • Priya Patel", amount: "+$8.75", type: "credit", date: "Yesterday, 2:30 PM", status: "Completed" },
  { id: "T5", label: "Bonus Incentive", description: "Weekend Multiplier Reward", amount: "+$15.00", type: "credit", date: "Jun 24, 2026", status: "Completed" },
  { id: "T6", label: "Instant Transfer", description: "To Debit Card ••7788", amount: "-$80.00", type: "debit", date: "Jun 22, 2026", status: "Pending" },
];

export default function WalletTransactions() {
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [filter, setFilter] = useState<"All" | "Credits" | "Debits">("All");
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  const balance = 284.50;
  const pendingBalance = 42.75;

  const filtered = transactions.filter((t) => {
    if (filter === "Credits") return t.type === "credit";
    if (filter === "Debits") return t.type === "debit";
    return true;
  });

  const handleWithdraw = () => {
    setWithdrawSuccess(true);
    setTimeout(() => {
      setWithdrawSuccess(false);
      setShowWithdrawModal(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Wallet & Payouts</h1>
        <p className="text-sm text-slate-500 font-normal mt-0.5">
          Manage your delivery earnings, bank transfers, and withdrawal history.
        </p>
      </div>

      {/* Hero & Quick Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Balance Card */}
        <div className="lg:col-span-2 bg-slate-900 p-6 sm:p-8 rounded-xl text-white shadow-sm border border-slate-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                <Wallet className="w-4 h-4 text-[#ee8c2b]" />
                <span>Available Cash Balance</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">${balance.toFixed(2)}</h2>
              <p className="text-xs text-slate-400 mt-2">
                + <span className="font-semibold text-orange-300">${pendingBalance.toFixed(2)}</span> clearing from recent trips
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-2.5 px-5 rounded-lg text-xs font-bold transition-all active:scale-95 shadow-xs cursor-pointer flex items-center gap-2"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Cash Out Now</span>
              </button>

              <button
                onClick={() => setFilter(filter === "Credits" ? "All" : "Credits")}
                className="bg-white/10 hover:bg-white/15 text-white py-2.5 px-4 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Filter Fares</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Info Cards */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">This Week</p>
              <h4 className="text-2xl font-bold text-slate-900 mt-0.5">$394.25</h4>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Linked Account</p>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Chase Checking (••4291)</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Wallet Activity Log</h3>
            <p className="text-xs text-slate-500 mt-0.5">Detailed records of trip credits and bank withdrawals</p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200/60 self-start sm:self-center">
            {(["All", "Credits", "Debits"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  filter === tab ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
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
                <th className="py-3 px-5">Type / Description</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{t.label}</p>
                    <p className="text-xs text-slate-500">{t.description}</p>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{t.date}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={t.status} />
                  </td>
                  <td
                    className={`py-3.5 px-5 text-right font-bold text-xs sm:text-sm ${
                      t.type === "credit" ? "text-emerald-600" : "text-slate-900"
                    }`}
                  >
                    {t.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cashout Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full p-6 animate-fade-in space-y-4">
            <h3 className="text-base font-bold text-slate-900">Request Cash Out</h3>
            <p className="text-xs text-slate-500">
              Transfer your balance directly into your verified bank account.
            </p>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Available Balance:</span>
                <span className="font-bold text-slate-900">${balance.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Destination Account:</span>
                <span className="font-semibold text-slate-800">Chase Checking (••4291)</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Transfer Fee:</span>
                <span className="text-emerald-600 font-semibold">$0.00 (Standard)</span>
              </div>
            </div>

            {withdrawSuccess && (
              <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Transfer of ${balance.toFixed(2)} has been queued!
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleWithdraw}
                disabled={withdrawSuccess}
                className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-lg text-xs font-semibold cursor-pointer shadow-xs"
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
