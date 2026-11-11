import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import FeastoLogo from "@/assets/logo/feasto-logo.svg?react";
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
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface SidebarLinkProps {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      end={to === "/admin"}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 ${
          isActive
            ? "bg-orange-50/90 text-[#ee8c2b] font-semibold shadow-xs"
            : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium"
        }`
      }
    >
      <Icon className="w-4 h-4 shrink-0" />
      <span className="truncate">{label}</span>
    </NavLink>
  );
};

export default function AdminLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased">
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-white border-r border-slate-200/80 flex flex-col transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        }`}
      >
   
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <FeastoLogo className="h-7 w-auto max-w-[130px]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-[#ee8c2b] border border-orange-100">
              Admin
            </span>
            <button
              onClick={closeMenu}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 lg:hidden cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1 min-h-0">
          <nav className="flex flex-col gap-1" aria-label="Core operations">
            <SidebarLink to="/admin" icon={LayoutDashboard} label="Overview" onClick={closeMenu} />
            <SidebarLink to="/admin/orders" icon={Receipt} label="Orders" onClick={closeMenu} />
            <SidebarLink to="/admin/vendors" icon={Store} label="Vendors" onClick={closeMenu} />
            <SidebarLink to="/admin/riders" icon={Bike} label="Riders" onClick={closeMenu} />
            <SidebarLink to="/admin/users" icon={Users} label="Users" onClick={closeMenu} />
          </nav>

          <div className="my-2 border-t border-slate-100 mx-2"></div>

          <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Finance & Ops
          </div>
          <nav className="flex flex-col gap-1" aria-label="Finance and tools">
            <SidebarLink to="/admin/transactions" icon={CreditCard} label="Transactions" onClick={closeMenu} />
            <SidebarLink to="/admin/payouts" icon={Wallet} label="Payouts" onClick={closeMenu} />
            <SidebarLink to="/admin/reports" icon={BarChart3} label="Reports" onClick={closeMenu} />
            <SidebarLink to="/admin/promotions" icon={Megaphone} label="Promotions" onClick={closeMenu} />
            <SidebarLink to="/admin/disputes" icon={Scale} label="Disputes" onClick={closeMenu} />
            <SidebarLink to="/admin/settings" icon={Settings} label="Settings" onClick={closeMenu} />
          </nav>
        </div>

        {/* Admin Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/60 shrink-0">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                AD
              </div>
              <div className="leading-tight min-w-0">
                <p className="text-xs font-semibold text-slate-900 truncate">System Admin</p>
                <p className="text-[10px] text-slate-400 truncate">ops@feasto.app</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              title="Log out"
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 ml-0 lg:ml-64 flex flex-col min-h-screen min-w-0">
       
        <header className="h-16 sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 min-w-0">
          
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative hidden md:block w-56 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 outline-none transition-all placeholder:text-slate-400"
                placeholder="Search orders, vendors, users..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Services Healthy
            </span>

            <button
              aria-label="System alerts"
              className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>

            <div className="h-5 w-px bg-slate-200 mx-0.5 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800">Campus Ops</p>
                <p className="text-[10px] text-slate-400 font-semibold">Super Administrator</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center font-bold text-[#ee8c2b] text-xs shrink-0">
                AU
              </div>
            </div>
          </div>
        </header>


        <main className="flex-1 p-5 sm:p-6 lg:p-8 max-w-7xl w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
