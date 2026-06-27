import React, { useState } from "react";
import {
  Scale,
  Search,
  Filter,
  Download,
  AlertTriangle,
  Clock,
  CheckCircle,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Info,
  MoreVertical,
  MessageSquare,
  Users
} from "lucide-react";

interface Dispute {
  id: string;
  orderRef: string;
  issueType: string;
  parties: { customer: string; vendor: string };
  status: "Investigation" | "Vendor Reply" | "Escalated" | "Pending Review";
  timestamp: string;
  dotColor: string;
  statusClass: string;
}

export default function DisputesCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusTab, setStatusTab] = useState<"All" | "Awaiting Vendor" | "Escalated" | "Refund Pending">("All");

  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: "DS-90241",
      orderRef: "SH-882193",
      issueType: "Missing Items",
      parties: { customer: "Sarah J.", vendor: "Spicy Orchid" },
      status: "Investigation",
      timestamp: "Today, 09:42 AM",
      dotColor: "bg-red-500",
      statusClass: "bg-orange-100 text-orange-700"
    },
    {
      id: "DS-90118",
      orderRef: "SH-881902",
      issueType: "Food Quality",
      parties: { customer: "Mike R.", vendor: "Burger Bliss" },
      status: "Vendor Reply",
      timestamp: "Today, 08:15 AM",
      dotColor: "bg-yellow-400",
      statusClass: "bg-blue-100 text-blue-700"
    },
    {
      id: "DS-89942",
      orderRef: "SH-880021",
      issueType: "Delivery Issue",
      parties: { customer: "Elena V.", vendor: "Sushi Zen" },
      status: "Escalated",
      timestamp: "Yesterday",
      dotColor: "bg-[#ee8c2b]",
      statusClass: "bg-purple-100 text-purple-700"
    },
    {
      id: "DS-89801",
      orderRef: "SH-879120",
      issueType: "Payment Failed",
      parties: { customer: "David K.", vendor: "System Component" },
      status: "Pending Review",
      timestamp: "Yesterday",
      dotColor: "bg-slate-400",
      statusClass: "bg-slate-100 text-slate-500"
    }
  ]);

  const handleCloseDispute = (id: string) => {
    setDisputes(prev => prev.filter(d => d.id !== id));
  };

  const filteredDisputes = disputes.filter(disp => {
    const matchesSearch =
      disp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.orderRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.issueType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.parties.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disp.parties.vendor.toLowerCase().includes(searchTerm.toLowerCase());

    if (statusTab === "All") return matchesSearch;
    if (statusTab === "Awaiting Vendor") return matchesSearch && disp.status === "Vendor Reply";
    if (statusTab === "Escalated") return matchesSearch && disp.status === "Escalated";
    if (statusTab === "Refund Pending") return matchesSearch && disp.status === "Pending Review";
    return matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Disputes Center</h2>
          <p className="text-slate-500 mt-1">Resolution workflow for reported order issues and complaints.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold rounded-xl transition-colors flex items-center gap-2 shadow-sm cursor-pointer">
            <Filter className="w-4 h-4" />
            Filter View
          </button>
          <button className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white text-sm font-semibold rounded-xl transition-opacity flex items-center gap-2 shadow-sm cursor-pointer">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-orange-50 rounded-xl text-orange-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">+12% vs last week</span>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Active Disputes</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">42</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-sky-50 rounded-xl text-sky-700">
              <Clock className="w-5 h-5" />
            </div>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Avg. Resolution Time</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">4.2 hrs</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-green-50 rounded-xl text-green-700">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Resolved (24h)</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">18</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 bg-purple-50 rounded-xl text-purple-700">
              <DollarSign className="w-5 h-5" />
            </div>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Refunded Volume</p>
          <h3 className="text-3xl font-extrabold text-slate-900 mt-1">$1,240</h3>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Table Filters Headers */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {(["All Cases", "Awaiting Vendor", "Escalated", "Refund Pending"] as const).map(tab => {
              const filterVal = tab === "All Cases" ? "All" : tab;
              return (
                <button
                  key={tab}
                  onClick={() => setStatusTab(filterVal)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    statusTab === filterVal ? "bg-white text-[#ee8c2b] shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 w-full md:w-auto justify-end">
            <span>Showing {filteredDisputes.length} of {disputes.length} cases</span>
            <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button className="px-2.5 py-1 hover:bg-slate-50 border-r border-slate-200 cursor-pointer">
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <button className="px-2.5 py-1 hover:bg-slate-50 cursor-pointer">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Table list */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Dispute ID</th>
                <th className="px-6 py-4">Order Ref</th>
                <th className="px-6 py-4">Issue Type</th>
                <th className="px-6 py-4">Parties Involved</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDisputes.map(disp => (
                <tr key={disp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{disp.id}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{disp.timestamp}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-mono rounded border border-slate-200/60">
                      {disp.orderRef}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${disp.dotColor}`}></span>
                      <span className="text-sm font-medium text-slate-800">{disp.issueType}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center -space-x-1.5">
                      <div
                        className="w-7 h-7 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#ee8c2b]"
                        title={`Customer: ${disp.parties.customer}`}
                      >
                        {disp.parties.customer.split(" ").map(w => w[0]).join("")}
                      </div>
                      <div
                        className="w-7 h-7 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-sky-600"
                        title={`Vendor/Rider: ${disp.parties.vendor}`}
                      >
                        {disp.parties.vendor.split(" ").map(w => w[0]).join("")}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase ${disp.statusClass}`}>
                      {disp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors cursor-pointer shadow-sm">
                        Contact Parties
                      </button>
                      <button
                        onClick={() => handleCloseDispute(disp.id)}
                        className="px-3 py-1.5 text-xs font-bold text-white bg-[#ee8c2b] hover:bg-[#d6761f] rounded-lg shadow-sm cursor-pointer"
                      >
                        Close Dispute
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredDisputes.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-medium bg-white">
                    No active disputes found in this category.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-4 bg-slate-50/20 border-t border-slate-100 flex justify-between items-center">
          <p className="text-xs text-slate-400 font-semibold">Page 1 of 15</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-400 bg-white cursor-not-allowed">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl text-xs font-bold shadow-sm cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Contextual Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="bg-orange-50/40 p-6 rounded-2xl border border-orange-100/60">
          <h4 className="font-extrabold text-orange-950 flex items-center gap-2 mb-2">
            <Info className="w-4 h-4 text-[#ee8c2b]" />
            Dispute Guidelines
          </h4>
          <p className="text-sm text-orange-900/80 leading-relaxed font-medium">
            Standard resolution time is 24 hours. Escalated cases must be reviewed by a senior manager if not resolved within 48 hours.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-800">Recent Activity Log</h4>
            <button className="text-xs font-bold text-[#ee8c2b] hover:underline cursor-pointer">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-700">Dispute <span className="font-bold">#DS-88210</span> closed by Moderator Alice</p>
                <p className="text-[10px] text-slate-400 font-semibold">12 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#ee8c2b] shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-slate-700">New escalation reported for <span class="font-bold">#DS-90241</span></p>
                <p className="text-[10px] text-slate-400 font-semibold">45 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
