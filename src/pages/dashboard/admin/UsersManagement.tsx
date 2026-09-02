import  { useState } from "react";
import {
  Users as UsersIcon,
  Search,
 
  UserPlus,
  MoreVertical,
  CheckCircle,
  AlertTriangle,
  UserCheck,
  UserX,
  Mail,
  ShieldAlert
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "Customer" | "Vendor" | "Rider" | "Admin";
  status: "Active" | "Suspended" | "Pending";
  joinedDate: string;
  avatar: string;
}

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [users, setUsers] = useState<User[]>([
    {
      id: "USR-0941",
      name: "Jane Cooper",
      email: "jane.c@example.com",
      role: "Customer",
      status: "Active",
      joinedDate: "Jun 12, 2026",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      id: "USR-8821",
      name: "Marcus Chen",
      email: "marcus.chen@campus.edu",
      role: "Rider",
      status: "Pending",
      joinedDate: "Jun 24, 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      id: "USR-4431",
      name: "Campus Grill",
      email: "vendor@campusgrill.com",
      role: "Vendor",
      status: "Active",
      joinedDate: "Mar 10, 2025",
      avatar: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop"
    },
    {
      id: "USR-1012",
      name: "Alex Rivera",
      email: "alex.rivera@saffron.com",
      role: "Admin",
      status: "Active",
      joinedDate: "Jan 01, 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      id: "USR-3044",
      name: "Robert Fox",
      email: "robert.fox@outlook.com",
      role: "Customer",
      status: "Suspended",
      joinedDate: "May 29, 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      id: "USR-2931",
      name: "Sofia Rodriguez",
      email: "sofia.r@riderfleet.org",
      role: "Rider",
      status: "Active",
      joinedDate: "Apr 15, 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    }
  ]);

  const toggleStatus = (id: string) => {
    setUsers(prev =>
      prev.map(user => {
        if (user.id === id) {
          const nextStatus = user.status === "Active" ? "Suspended" : "Active";
          return { ...user, status: nextStatus };
        }
        return user;
      })
    );
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "All" || user.role === roleFilter;
    const matchesStatus = statusFilter === "All" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const stats = {
    total: users.length,
    active: users.filter(u => u.status === "Active").length,
    suspended: users.filter(u => u.status === "Suspended").length,
    pending: users.filter(u => u.status === "Pending").length
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage account verification, status, and permissions across all user roles.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#ee8c2b] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer">
            <UserPlus className="w-5 h-5" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Users</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{stats.total}</h3>
          </div>
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
            <UsersIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Accounts</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{stats.active}</h3>
          </div>
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <UserCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Suspended</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{stats.suspended}</h3>
          </div>
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
            <UserX className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pending Approval</p>
            <h3 className="text-3xl font-extrabold text-slate-900">{stats.pending}</h3>
          </div>
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
            <ShieldAlert className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Filter and Table Roster Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Controls Header */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full md:max-w-md group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#ee8c2b] transition-colors" />
            <input
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 text-sm font-medium transition-all"
              placeholder="Search by name, email, or ID..."
              type="text"
            />
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase">Role:</span>
              <select
                value={roleFilter}
                onChange={e => setRoleFilter(e.target.value)}
                className="text-sm font-semibold text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer p-0"
              >
                <option value="All">All Roles</option>
                <option value="Customer">Customers</option>
                <option value="Vendor">Vendors</option>
                <option value="Rider">Riders</option>
                <option value="Admin">Admins</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-slate-200 rounded-xl">
              <span className="text-xs font-bold text-slate-400 uppercase">Status:</span>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="text-sm font-semibold text-slate-700 bg-transparent border-none outline-none focus:ring-0 cursor-pointer p-0"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 text-slate-400 uppercase text-[10px] font-extrabold tracking-widest border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">User Details</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Verification</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-10 w-10 rounded-full object-cover border border-slate-100"
                        />
                        <div>
                          <div className="font-bold text-slate-800 text-sm">{user.name}</div>
                          <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <Mail className="w-3.5 h-3.5" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          user.role === "Admin"
                            ? "bg-purple-100 text-purple-700"
                            : user.role === "Vendor"
                            ? "bg-sky-100 text-sky-700"
                            : user.role === "Rider"
                            ? "bg-[#7c2d12]/10 text-[#7c2d12]"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {user.status === "Pending" ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500">
                          <AlertTriangle className="w-3.5 h-3.5" /> Pending Review
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-600">
                          <CheckCircle className="w-3.5 h-3.5" /> Verified
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-500">{user.joinedDate}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : user.status === "Suspended"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => toggleStatus(user.id)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border cursor-pointer active:scale-95 ${
                            user.status === "Active"
                              ? "border-red-200 text-red-600 hover:bg-red-50"
                              : "border-green-200 text-green-600 hover:bg-green-50"
                          }`}
                        >
                          {user.status === "Active" ? "Suspend" : "Activate"}
                        </button>
                        <button className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400 font-medium">
                    No matching users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50/20">
          <span className="text-xs font-semibold text-slate-400">
            Showing {filteredUsers.length} of {users.length} users
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
