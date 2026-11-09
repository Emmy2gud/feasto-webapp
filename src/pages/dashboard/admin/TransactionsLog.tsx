import { useState } from "react";
import {
  Search,
  Download,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Transaction {
  id: string;
  entityName: string;
  type: "Payment" | "Refund" | "Payout";
  method: "Card" | "Mobile Money" | "Bank Transfer";
  amount: number;
  status: "Success" | "Failed" | "Pending";
  date: string;
}

const initialTransactions: Transaction[] = [
  {
    id: "TXN-882194",
    entityName: "Jane Cooper (Customer)",
    type: "Payment",
    method: "Card",
    amount: 24.50,
    status: "Success",
    date: "Jun 27, 2026, 12:45 PM",
  },
  {
    id: "TXN-102931",
    entityName: "Campus Grill (Vendor)",
    type: "Payout",
    method: "Bank Transfer",
    amount: 1420.00,
    status: "Success",
    date: "Jun 26, 2026, 04:12 PM",
  },
  {
    id: "TXN-492010",
    entityName: "Robert Fox (Customer)",
    type: "Refund",
    method: "Card",
    amount: 12.80,
    status: "Success",
    date: "Jun 26, 2026, 10:30 AM",
  },
  {
    id: "TXN-301293",
    entityName: "Albert Flores (Customer)",
    type: "Payment",
    method: "Mobile Money",
    amount: 32.20,
    status: "Pending",
    date: "Jun 26, 2026, 09:15 AM",
  },
  {
    id: "TXN-772911",
    entityName: "Kathryn Murphy (Customer)",
    type: "Payment",
    method: "Card",
    amount: 14.10,
    status: "Failed",
    date: "Jun 25, 2026, 07:44 PM",
  },
];

export default function TransactionsLog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [transactions] = useState<Transaction[]>(initialTransactions);

  const filteredTxns = transactions.filter((txn) => {
    const matchesSearch =
      txn.entityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All" || txn.type === typeFilter;
    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Transactions & Ledger Log</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Audit payment gateways, order charges, customer refunds, and partner payouts.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer self-start sm:self-center">
          <Download className="w-3.5 h-3.5" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Stats KPI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Processed Volume</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">$48,250.00</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Successful</p>
            <h3 className="text-2xl font-bold text-emerald-600 mt-1">3,124</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Declined / Failed</p>
            <h3 className="text-2xl font-bold text-rose-600 mt-1">42</h3>
          </div>
          <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pending Clearance</p>
            <h3 className="text-2xl font-bold text-amber-600 mt-1">38</h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Table & Filtering */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Filters Header */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search reference ID, sender, or recipient..."
              type="text"
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Payment">Payments</option>
              <option value="Refund">Refunds</option>
              <option value="Payout">Payouts</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Success">Success</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Transaction Ref</th>
                <th className="py-3 px-4">Entity</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Channel</th>
                <th className="py-3 px-4">Date / Time</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredTxns.map((txn) => (
                <tr key={txn.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{txn.id}</td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-800">{txn.entityName}</td>
                  <td className="py-3.5 px-4">
                    <span className="text-xs font-semibold text-slate-700">{txn.type}</span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{txn.method}</td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{txn.date}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={txn.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right font-bold text-xs sm:text-sm text-slate-900">
                    ${txn.amount.toFixed(2)}
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
