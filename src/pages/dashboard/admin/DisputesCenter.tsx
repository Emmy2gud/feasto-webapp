import { useState } from "react";
import {
  Download,
  AlertTriangle,
  Clock,
  CheckCircle,
  Search,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface Dispute {
  id: string;
  orderRef: string;
  issueType: string;
  parties: { customer: string; vendor: string };
  status: "Investigation" | "Vendor Reply" | "Escalated" | "Pending Review";
  timestamp: string;
}

const initialDisputes: Dispute[] = [
  {
    id: "DS-90241",
    orderRef: "SH-882193",
    issueType: "Missing Extra Items",
    parties: { customer: "Sarah Jenkins", vendor: "Spicy Orchid" },
    status: "Investigation",
    timestamp: "Today, 09:42 AM",
  },
  {
    id: "DS-90118",
    orderRef: "SH-881902",
    issueType: "Food Temperature / Spill",
    parties: { customer: "Mike Ross", vendor: "Burger Bliss" },
    status: "Vendor Reply",
    timestamp: "Today, 08:15 AM",
  },
  {
    id: "DS-89942",
    orderRef: "SH-880021",
    issueType: "Wrong Campus Hall Dropoff",
    parties: { customer: "Elena Rostova", vendor: "Sushi Zen" },
    status: "Escalated",
    timestamp: "Yesterday",
  },
  {
    id: "DS-89801",
    orderRef: "SH-879120",
    issueType: "Duplicate Card Charge",
    parties: { customer: "David Kim", vendor: "Campus Kitchen" },
    status: "Pending Review",
    timestamp: "Yesterday",
  },
];

export default function DisputesCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusTab, setStatusTab] = useState<"All" | "Investigation" | "Escalated" | "Pending Review">("All");
  const [disputes, setDisputes] = useState<Dispute[]>(initialDisputes);

  const handleResolve = (id: string) => {
    setDisputes((prev) => prev.filter((d) => d.id !== id));
  };

  const filteredDisputes = disputes.filter((disp) => {
    const matchesSearch =
      disp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.orderRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.issueType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.parties.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.parties.vendor.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusTab === "All") return matchesSearch;
    return matchesSearch && disp.status === statusTab;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Disputes & Order Inquiries</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Customer refund requests, missing item tickets, and partner complaints.
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-3.5 py-2 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-semibold shadow-xs hover:bg-slate-50 transition-colors cursor-pointer self-start sm:self-center">
          <Download className="w-3.5 h-3.5" />
          <span>Export Incident Log</span>
        </button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Open Incidents</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{disputes.length} Active</h3>
          </div>
          <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg Resolution Speed</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-600 mt-1">1.8 hrs</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Resolved Today</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">12 Settled</h3>
          </div>
          <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Disputes Table Container */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Search & Tabs */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search by ticket ID, order ref, customer, or kitchen..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 flex-wrap self-start sm:self-center gap-1">
            {(["All", "Investigation", "Escalated", "Pending Review"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusTab(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  statusTab === tab ? "bg-white text-slate-900 shadow-xs font-bold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">Ticket ID</th>
                <th className="py-3 px-4">Order Ref</th>
                <th className="py-3 px-4">Issue Description</th>
                <th className="py-3 px-4">Parties Involved</th>
                <th className="py-3 px-4">Opened</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Resolution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredDisputes.map((disp) => (
                <tr key={disp.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-900">#{disp.id}</td>
                  <td className="py-3.5 px-4 font-mono text-xs font-semibold text-[#ee8c2b]">
                    #{disp.orderRef}
                  </td>
                  <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{disp.issueType}</td>
                  <td className="py-3.5 px-4 text-xs">
                    <p className="text-slate-900 font-medium">{disp.parties.customer}</p>
                    <p className="text-slate-400">vs. {disp.parties.vendor}</p>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500 whitespace-nowrap">{disp.timestamp}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={disp.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => handleResolve(disp.id)}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer shadow-xs active:scale-95"
                    >
                      Resolve & Close
                    </button>
                  </td>
                </tr>
              ))}

              {filteredDisputes.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-400 text-xs">
                    No active disputes matching this criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
