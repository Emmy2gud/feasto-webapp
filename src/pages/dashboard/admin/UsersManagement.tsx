import { useState } from "react";
import {
  Search,
} from "lucide-react";
import StatusBadge from "@/components/layout/dashboard/StatusBadge";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Customer" | "Vendor" | "Rider" | "Admin";
  status: "Active" | "Suspended" | "Pending";
  joinedDate: string;
  avatar: string;
}

const initialUsers: User[] = [
  {
    id: "USR-0941",
    name: "Jane Cooper",
    email: "jane.c@campus.edu",
    role: "Customer",
    status: "Active",
    joinedDate: "Jun 12, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: "USR-8821",
    name: "Marcus Chen",
    email: "marcus.chen@campus.edu",
    role: "Rider",
    status: "Pending",
    joinedDate: "Jun 24, 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "USR-4431",
    name: "Campus Grill",
    email: "vendor@campusgrill.com",
    role: "Vendor",
    status: "Active",
    joinedDate: "Mar 10, 2025",
    avatar: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
  },
  {
    id: "USR-1012",
    name: "Alex Rivera",
    email: "alex.rivera@feasto.app",
    role: "Admin",
    status: "Active",
    joinedDate: "Jan 01, 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: "USR-3044",
    name: "Robert Fox",
    email: "robert.fox@outlook.com",
    role: "Customer",
    status: "Suspended",
    joinedDate: "May 29, 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: "USR-2931",
    name: "Sofia Rodriguez",
    email: "sofia.r@riderfleet.org",
    role: "Rider",
    status: "Active",
    joinedDate: "Apr 15, 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
];

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [users, setUsers] = useState<User[]>(initialUsers);

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === id) {
          const nextStatus = user.status === "Active" ? "Suspended" : "Active";
          return { ...user, status: nextStatus };
        }
        return user;
      })
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">User Access & Accounts</h1>
          <p className="text-sm text-slate-500 font-normal mt-0.5">
            Manage authenticated accounts across customers, restaurant vendors, and couriers.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            {users.length} Total Registered
          </span>
        </div>
      </div>

      {/* Directory Table Card */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200/80 overflow-hidden">
        {/* Controls */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              placeholder="Search user by name, email, or user ID..."
              type="text"
            />
          </div>

          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200/60 self-start sm:self-center">
            {(["All", "Customer", "Vendor", "Rider", "Admin"] as const).map((role) => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  roleFilter === role
                    ? "bg-white text-slate-900 shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                <th className="py-3 px-5">User Account</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Member Since</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
                        src={user.avatar}
                        alt={user.name}
                      />
                      <div>
                        <p className="font-semibold text-xs sm:text-sm text-slate-900">{user.name}</p>
                        <p className="text-xs font-mono text-slate-400">#{user.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-xs font-medium text-slate-600">{user.email}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                          : user.role === "Vendor"
                          ? "bg-orange-50 text-[#ee8c2b] border border-orange-200"
                          : user.role === "Rider"
                          ? "bg-sky-50 text-sky-700 border border-sky-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{user.joinedDate}</td>
                  <td className="py-3.5 px-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="py-3.5 px-5 text-right">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md transition-colors cursor-pointer border ${
                        user.status === "Active"
                          ? "border-slate-200 text-slate-600 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200"
                          : "bg-slate-900 text-white border-transparent hover:bg-slate-800"
                      }`}
                    >
                      {user.status === "Active" ? "Suspend" : "Activate"}
                    </button>
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
