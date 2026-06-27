import { useState } from "react";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign,
  CreditCard,
  Plus,
  TrendingUp,
  RefreshCw,
  Shield
} from "lucide-react";

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
  { id: "T1", label: "Delivery Payout", description: "Order #SH-8291 • Sarah J.", amount: "+$10.50", type: "credit", date: "Today, 12:42 PM", status: "Completed" },
  { id: "T2", label: "Delivery Payout", description: "Order #SH-8289 • Marcus T.", amount: "+$13.20", type: "credit", date: "Today, 11:15 AM", status: "Completed" },
  { id: "T3", label: "Withdrawal", description: "To Bank Account ••4291", amount: "-$50.00", type: "debit", date: "Yesterday, 6:00 PM", status: "Completed" },
  { id: "T4", label: "Delivery Payout", description: "Order #SH-8280 • Priya K.", amount: "+$8.75", type: "credit", date: "Yesterday, 2:30 PM", status: "Completed" },
  { id: "T5", label: "Tip Bonus", description: "Weekend Multiplier Reward", amount: "+$5.00", type: "credit", date: "Jun 24, 2026", status: "Completed" },
  { id: "T6", label: "Withdrawal", description: "To Debit Card ••7788", amount: "-$80.00", type: "debit", date: "Jun 22, 2026", status: "Pending" }
];

export default function WalletTransactions() {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [filter, setFilter] = useState<"All" | "Credits" | "Debits">("All");

  const balance = 284.50;
  const pendingBalance = 42.75;

  const filtered = transactions.filter(t => {
    if (filter === "Credits") return t.type === "credit";
    if (filter === "Debits") return t.type === "debit";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Wallet & Transactions</h2>
        <p className="text-slate-400 font-medium mt-1">Manage your earnings balance and withdrawals.</p>
      </div>

      {/* Balance Hero + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Wallet Balance Card */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #ee8c2b 0%, transparent 60%)" }}></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-white/15 rounded-xl">
                <Wallet className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-70">Available Balance</p>
              </div>
            </div>
            <h3 className="text-5xl font-black mb-2">${balance.toFixed(2)}</h3>
            <p className="text-sm opacity-60">
              + <span className="font-bold text-orange-300">${pendingBalance.toFixed(2)}</span> pending clearance
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <button
                onClick={() => setShowWithdraw(!showWithdraw)}
                className="flex items-center justify-center gap-3 bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-3.5 rounded-xl font-extrabold transition-all active:scale-95 shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <ArrowUpRight className="w-5 h-5" />
                Withdraw Funds
              </button>
              <button className="flex items-center justify-center gap-3 bg-white/15 hover:bg-white/25 text-white py-3.5 rounded-xl font-extrabold transition-all active:scale-95 cursor-pointer">
                <RefreshCw className="w-5 h-5" />
                Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Right Quick Stats */}
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">This Week</p>
              <h4 className="text-2xl font-extrabold text-slate-900">$394.25</h4>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#ee8c2b]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Lifetime Earned</p>
              <h4 className="text-2xl font-extrabold text-slate-900">$8,420</h4>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Account</p>
              <p className="text-sm font-bold text-slate-600">Bank ••4291</p>
            </div>
          </div>
        </div>
      </div>

      {/* Withdraw Form (slide-down) */}
      {showWithdraw && (
        <div className="bg-white rounded-2xl border border-[#ee8c2b]/20 shadow-lg p-6 space-y-5 animate-fade-in">
          <div className="flex items-center justify-between">
            <h4 className="font-extrabold text-slate-800 text-lg">Withdraw Funds</h4>
            <button onClick={() => setShowWithdraw(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer text-sm font-bold">Cancel</button>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Amount ($)</label>
            <input
              type="number"
              defaultValue="50"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Destination</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 font-semibold focus:outline-none text-slate-700">
              <option>Bank Account ••4291</option>
              <option>Debit Card ••7788</option>
            </select>
          </div>
          <button className="w-full bg-[#ee8c2b] hover:bg-[#d6761f] text-white py-3.5 rounded-xl font-extrabold transition-all active:scale-95 cursor-pointer">
            Confirm Withdrawal
          </button>
        </div>
      )}

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <h4 className="text-xl font-extrabold text-slate-800">Transaction History</h4>
          <div className="flex bg-slate-100 p-1 rounded-xl gap-1">
            {(["All", "Credits", "Debits"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  filter === tab ? "bg-white text-[#ee8c2b] shadow-sm" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {filtered.map(tx => (
            <div key={tx.id} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === "credit" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
                }`}>
                  {tx.type === "credit" ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{tx.label}</p>
                  <p className="text-[11px] text-slate-400 font-medium">{tx.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-extrabold text-sm ${tx.type === "credit" ? "text-green-600" : "text-red-500"}`}>
                  {tx.amount}
                </p>
                <p className="text-[11px] text-slate-400 font-medium">{tx.date}</p>
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                  tx.status === "Completed" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                }`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
