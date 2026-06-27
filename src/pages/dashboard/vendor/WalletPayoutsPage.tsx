import React, { useState } from "react";
import {
  Download,
  Landmark,
  CreditCard,
  ChevronDown,
  Info,
  ArrowUpRight,
  Plus,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

type TxStatus = "Pending" | "Paid" | "Processed";

interface Transaction {
  date: string;
  id: string;
  method: string;
  methodIcon: "bank" | "card";
  status: TxStatus;
  amount: string;
  isRefund?: boolean;
}

const transactions: Transaction[] = [
  { date: "Oct 20, 2023", id: "#TRX-883920", method: "Chase Bank ****4582", methodIcon: "bank", status: "Pending", amount: "-$850.00" },
  { date: "Oct 14, 2023", id: "#TRX-883102", method: "Chase Bank ****4582", methodIcon: "bank", status: "Paid", amount: "-$1,200.00" },
  { date: "Oct 12, 2023", id: "#ORD-Refund", method: "Customer Refund", methodIcon: "card", status: "Processed", amount: "-$24.50", isRefund: true },
  { date: "Oct 07, 2023", id: "#TRX-879001", method: "Chase Bank ****4582", methodIcon: "bank", status: "Paid", amount: "-$950.00" },
];

const StatusBadge: React.FC<{ status: TxStatus }> = ({ status }) => {
  const map: Record<TxStatus, string> = {
    Pending: "bg-amber-100 text-amber-700 border-amber-200",
    Paid: "bg-green-100 text-green-700 border-green-200",
    Processed: "bg-gray-100 text-gray-600 border-gray-200",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${map[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Pending" ? "bg-amber-500" : status === "Paid" ? "bg-green-500" : "bg-gray-400"}`} />
      {status}
    </span>
  );
};

const WalletPayoutsPage: React.FC = () => {
  const [filter] = useState("Last 30 Days");

  return (
    <div className="space-y-5 pb-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Wallet & Payouts</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage your earnings and withdrawal preferences.</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl px-4 py-2 hover:border-gray-300 bg-white">
          <Download size={15} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-4">
          {/* Withdrawal Card */}
          <div
            className="rounded-2xl p-6 text-white relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2233 60%, #3A2820 100%)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-300 text-sm mb-3">
                  <Landmark size={14} />
                  <span>Available for Withdrawal</span>
                </div>
                <p className="text-5xl font-bold mb-2">$1,248.50</p>
                <p className="text-green-400 text-sm font-medium flex items-center gap-1">
                  <ArrowUpRight size={14} /> +$340.00 from last week
                </p>
              </div>
              <button className="bg-[#E87C2A] hover:bg-[#d06e20] text-white text-sm font-semibold px-6 py-3 rounded-2xl transition-colors flex items-center gap-2">
                Request Payout →
              </button>
            </div>
          </div>

          {/* Summary Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "TOTAL EARNED", value: "$12,840.00" },
              { label: "PENDING CLEARANCE", value: "$152.00" },
              { label: "NEXT SCHEDULED", value: "Fri, Oct 24" },
            ].map((box) => (
              <div key={box.label} className="bg-white rounded-2xl p-4 border border-gray-100">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{box.label}</p>
                <p className="text-xl font-bold text-gray-900">{box.value}</p>
              </div>
            ))}
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-900">Transaction History</h2>
              <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300">
                {filter} <ChevronDown size={14} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                    <th className="text-left pb-3">Date</th>
                    <th className="text-left pb-3">Transaction ID</th>
                    <th className="text-left pb-3">Method</th>
                    <th className="text-center pb-3">Status</th>
                    <th className="text-right pb-3">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50">
                      <td className="py-4 text-gray-600 whitespace-nowrap">{tx.date}</td>
                      <td className="py-4">
                        <span className="text-[#E87C2A] text-xs font-medium">{tx.id}</span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          {tx.methodIcon === "bank" ? (
                            <Landmark size={14} className="text-gray-400 flex-shrink-0" />
                          ) : (
                            <CreditCard size={14} className="text-gray-400 flex-shrink-0" />
                          )}
                          {tx.method}
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <StatusBadge status={tx.status} />
                      </td>
                      <td className={`py-4 text-right font-semibold ${tx.isRefund ? "text-red-500" : "text-gray-900"}`}>
                        {tx.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="w-full mt-4 py-2 text-sm text-gray-500 hover:text-gray-800 flex items-center justify-center gap-1.5">
              View All Transactions <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Payout Method */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Landmark size={18} className="text-gray-600" />
                <h3 className="text-base font-semibold text-gray-900">Payout Method</h3>
              </div>
              <button className="text-xs font-bold text-[#E87C2A] hover:underline">EDIT</button>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  CH
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Chase Business Checking</p>
                  <p className="text-xs text-gray-400">**** **** **** 4582</p>
                </div>
              </div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Primary
              </span>
            </div>

            <div className="space-y-3 text-sm">
              {[
                { label: "Account Holder", value: "Campus Grill LLC" },
                { label: "Routing Number", value: "****0922" },
                { label: "Payment Schedule", value: "Weekly (Fri)" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-gray-500">{row.label}</span>
                  <span className="font-medium text-gray-900">{row.value}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2.5 border border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-[#E87C2A] hover:text-[#E87C2A] flex items-center justify-center gap-1.5 transition-colors">
              <Plus size={14} /> Add New Method
            </button>
          </div>

          {/* Payment Schedule Info */}
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <div className="flex gap-3">
              <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Payment Schedule</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Automatic payouts are processed every Friday at 9:00 AM EST. Funds typically arrive in your bank account within 1–2 business days.
                </p>
                <button className="text-xs font-semibold text-blue-700 mt-2 hover:underline">
                  Read Payout Policy
                </button>
              </div>
            </div>
          </div>

          {/* Monthly Overview */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100">
            <h3 className="text-base font-semibold text-gray-900 mb-4">Monthly Overview</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-500">October Earnings</span>
                  <span className="font-semibold text-gray-900">$4,250 / $5k</span>
                </div>
                <Progress value={85} className="h-2 bg-gray-100 [&>div]:bg-[#E87C2A]" />
              </div>
              <div className="flex justify-between text-sm pt-1">
                <span className="text-gray-500">Withdrawals</span>
                <span className="font-medium text-gray-900">3 processed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPayoutsPage;
