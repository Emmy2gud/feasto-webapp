import React, { useState } from "react";
import {
  CreditCard,
  Search,
  Filter,
  Download,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";

interface Transaction {
  id: string;
  entityName: string;
  type: "Payment" | "Refund" | "Payout";
  method: "Card" | "Mobile Money" | "Bank Transfer";
  amount: number;
  status: "Success" | "Failed" | "Pending";
  date: string;
}

export default function TransactionsLog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "TXN-882194",
      entityName: "Jane Cooper",
      type: "Payment",
      method: "Card",
      amount: 24.50,
      status: "Success",
      date: "Jun 27, 2026, 12:45 PM"
    },
    {
      id: "TXN-102931",
      entityName: "Campus Grill",
      type: "Payout",
      method: "Bank Transfer",
      amount: 1420.00,
      status: "Success",
      date: "Jun 26, 2026, 04:12 PM"
    },
    {
      id: "TXN-492010",
      entityName: "Robert Fox",
      type: "Refund",
      method: "Card",
      amount: 12.80,
      status: "Success",
      date: "Jun 26, 2026, 10:30 AM"
    },
    {
      id: "TXN-301293",
      entityName: "Albert Flores",
      type: "Payment",
      method: "Mobile Money",
      amount: 32.20,
      status: "Pending",
      date: "Jun 26, 2026, 09:15 AM"
    },
    {
      id: "TXN-772911",
      entityName: "Kathryn Murphy",
      type: "Payment",
      method: "Card",
      amount: 14.10,
      status: "Failed",
      date: "Jun 25, 2026, 07:44 PM"
    }
  ]);

  const filteredTxns = transactions.filter(txn => {
    const matchesSearch =
      txn.entityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "All" || txn.type === typeFilter;
    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadge = (status: Transaction["status"]) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getTypeIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "Payment":
        return <ArrowDownLeft className="w-4 h-4 text-green-600" />;
      case "Refund":
        return <ArrowUpRight className="w-4 h-4 text-amber-600" />;
      case "Payout":
        return <ArrowUpRight className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Transactions Log</h2>
          <p className="text-slate-500 font-medium mt-1">Audit, monitor, and search platform transaction logs.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-slate-600 border border-slate-200 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all cursor-pointer">
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Volume (MTD)</p>
            <h3 className="text-2xl font-extrabold text-slate-900">$48,250.00</h3>
          </div>
          <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Successful</p>
            <h3 className="text-2xl font-extrabold text-slate-900">3,124</h3>
          </div>
          <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Failed</p>
            <h3 className="text-2xl font-extrabold text-slate-900">42</h3>
          </div>
          <div className="w-11 h-11 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pending</p>
            <h3 className="text-2xl font-extrabold text-slate-900">38</h3>
          </div>
          <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Table & Filtering */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Filters Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#ee8c2b]" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 text-sm font-medium transition-all"
              placeholder="Search ID, sender, or receiver..."
              type="text"
            />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase">Type:</span>
              <select
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                className="text-sm font-semibold text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer p-0"
              >
                <option value="All">All Types</option>
                <option value="Payment">Payments</option>
                <option value="Refund">Refunds</option>
                <option value="Payout">Payouts</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase">Status:</span>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="text-sm font-semibold text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer p-0"
              >
                <option value="All">All Statuses</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Roster Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Entity</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTxns.length > 0 ? (
                filteredTxns.map(txn => (
                  <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="font-bold text-slate-800 text-sm">{txn.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-slate-700 text-sm">{txn.entityName}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {getTypeIcon(txn.type)}
                        <span className="text-sm font-medium text-slate-500">{txn.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-slate-500">{txn.method}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-sm font-extrabold ${
                          txn.type === "Refund" || txn.type === "Payout" ? "text-slate-800" : "text-green-600"
                        }`}
                      >
                        {txn.type === "Refund" || txn.type === "Payout" ? "-" : "+"}
                        {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(txn.amount)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusBadge(txn.status)}`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-400 font-medium">{txn.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-slate-400 font-medium">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50/20">
          <span className="text-xs font-semibold text-slate-400">
            Showing {filteredTxns.length} of {transactions.length} entries
          </span>
          <div className="flex gap-1">
            <button className="h-8 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold disabled:opacity-50">
              Previous
            </button>
            <button className="h-8 w-8 rounded-lg bg-[#ee8c2b] text-white text-xs font-bold">1</button>
            <button className="h-8 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
