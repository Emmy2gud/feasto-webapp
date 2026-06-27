import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Store,
  Bike,
  Receipt,
  CreditCard,
  Wallet,
  BarChart3,
  Megaphone,
  Scale,
  Settings,
  Search,
  Bell,
  HelpCircle,
  MessageSquare,
  Plus
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      end={to === "/admin"}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out ${
          isActive
            ? "bg-[#ee8c2b]/10 text-[#ee8c2b] font-bold scale-[1.02]"
            : "text-slate-600 hover:bg-slate-100 hover:scale-[1.02]"
        }`
      }
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="text-sm font-medium">{label}</span>
    </NavLink>
  );
};

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#f8f7f6] text-[#0f172a] font-sans antialiased">
      {/* SideNavBar */}
      <aside className="w-64 fixed left-0 top-0 h-screen bg-white border-r border-slate-200/60 p-4 flex flex-col gap-1 z-40">
        <div className="mb-6 px-4 pt-4">
          <h2 className="text-2xl font-extrabold text-[#ee8c2b] mb-1 leading-tight tracking-tight">
            Feasto
          </h2>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
            Campus Hub Control
          </p>
        </div>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto pr-1">
          <SidebarLink to="/admin" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/admin/users" icon={Users} label="Users" />
          <SidebarLink to="/admin/vendors" icon={Store} label="Vendors" />
          <SidebarLink to="/admin/riders" icon={Bike} label="Riders" />
          <SidebarLink to="/admin/orders" icon={Receipt} label="Orders" />
          <SidebarLink to="/admin/transactions" icon={CreditCard} label="Transactions" />
          <SidebarLink to="/admin/payouts" icon={Wallet} label="Payouts" />
          
          <div className="my-3 border-t border-slate-100 mx-4"></div>
          
          <SidebarLink to="/admin/reports" icon={BarChart3} label="Reports & Analytics" />
          <SidebarLink to="/admin/promotions" icon={Megaphone} label="Promotions" />
          <SidebarLink to="/admin/disputes" icon={Scale} label="Disputes" />
          <SidebarLink to="/admin/settings" icon={Settings} label="Settings" />
        </nav>

        <button className="mt-4 mx-2 py-3 px-4 bg-[#ee8c2b] hover:bg-[#d6761f] text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md active:scale-95 cursor-pointer">
          <Plus className="w-5 h-5" />
          <span className="text-sm">New Broadcast</span>
        </button>
      </aside>

      {/* Right Page Body */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="h-16 sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/40 flex justify-between items-center px-8 shadow-sm">
          <div className="flex items-center gap-8 flex-grow max-w-xl">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#ee8c2b] transition-colors" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100/80 hover:bg-slate-100 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-[#ee8c2b]/30 text-sm font-medium transition-all"
                placeholder="Search orders, users, or settings..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 ml-6 shrink-0">
            <div className="flex items-center gap-1">
              <button className="p-2 text-slate-500 hover:text-[#ee8c2b] hover:bg-slate-100 transition-all rounded-full cursor-pointer relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ef4444] rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2 text-slate-500 hover:text-[#ee8c2b] hover:bg-slate-100 transition-all rounded-full cursor-pointer">
                <HelpCircle className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-500 hover:text-[#ee8c2b] hover:bg-slate-100 transition-all rounded-full cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800">Admin User</p>
                <p className="text-[10px] text-slate-400 font-semibold">System Administrator</p>
              </div>
              <img
                className="w-9 h-9 rounded-full border border-slate-200 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrv1MumONOdyJBg0mryGbfQ6nyVXvUcGiQxb3ZpqmHCjohJU1KkMdIhXpJH8reGkGNinRNN7pvubG2zgDJp9J9XGYJR6KYj1CjezozMADRefD79znbAHFCbhFd5MvE5R3zfh_o84WUWUw_yxVrXijXe0HOfnjX-qfoFkKnMXQshZ9V3yEx6KjP5JK1xpCcVRpps9To_BC_ca2RA9Jr_mkQMl1Qlgeh_mCtp9HYpHQnNL6gBH9Z0pS"
                alt="Admin avatar"
              />
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="flex-grow p-8 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
