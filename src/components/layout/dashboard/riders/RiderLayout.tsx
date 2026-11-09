import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import FeastoLogo from "@/assets/logo/feasto-logo.svg?react";
import {
  LayoutDashboard,
  ListOrdered,
  Truck,
  History,
  DollarSign,
  Wallet,
  User,
  Bell,
  Search,
  Power,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { to: "/rider/dashboard", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/rider/orders", icon: ListOrdered, label: "Available Orders" },
  { to: "/rider/active-delivery", icon: Truck, label: "Active Deliveries" },
  { to: "/rider/delivery-history", icon: History, label: "Delivery History" },
  { to: "/rider/earnings", icon: DollarSign, label: "Earnings" },
  { to: "/rider/wallet", icon: Wallet, label: "Wallet" },
];

const bottomNav = [
  { to: "/rider/profile", icon: User, label: "Profile" },
];

export default function RiderLayout() {
  const [isOnline, setIsOnline] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased flex">
      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200/80 flex flex-col transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <FeastoLogo className="h-7 w-auto max-w-[130px]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-[#ee8c2b] border border-orange-100">
              Rider
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 lg:hidden cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1 min-h-0">
          <nav className="flex flex-col gap-1" aria-label="Rider navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-orange-50/90 text-[#ee8c2b] font-semibold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium"
                  }`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="my-2 border-t border-slate-100"></div>

          <nav className="flex flex-col gap-1" aria-label="Account navigation">
            {bottomNav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                    isActive
                      ? "bg-orange-50/90 text-[#ee8c2b] font-semibold shadow-xs"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium"
                  }`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer with Online/Offline toggle */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/60 shrink-0 space-y-2">
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer shadow-xs ${
              isOnline
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100/80"
                : "bg-slate-200/80 text-slate-700 border border-slate-300 hover:bg-slate-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOnline ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                }`}
              />
              <span>{isOnline ? "Status: Online" : "Status: Offline"}</span>
            </div>
            <Power className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#ee8c2b]/10 text-[#ee8c2b] font-bold text-xs flex items-center justify-center">
                AR
              </div>
              <div className="leading-tight">
                <p className="text-xs font-semibold text-slate-800">Alex Rivera</p>
                <p className="text-[10px] text-slate-400">Campus Rider</p>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              title="Log out"
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-md transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-0 lg:ml-64 flex flex-col min-h-screen min-w-0">
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search bar — hidden on mobile */}
            <div className="relative hidden md:block w-64 lg:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search orders or locations..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:outline-none focus:bg-white focus:border-[#ee8c2b] focus:ring-2 focus:ring-[#ee8c2b]/20 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                  isOnline
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOnline ? "bg-emerald-500 animate-pulse" : "bg-slate-400"
                  }`}
                />
                <span className="hidden sm:inline">{isOnline ? "Receiving Orders" : "Offline"}</span>
              </span>
            </div>

            <button
              aria-label="Notifications"
              className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ee8c2b] rounded-full border-2 border-white" />
            </button>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-slate-800">Alex Rivera</p>
                <p className="text-[10px] text-[#ee8c2b] font-semibold">Gold Level • 4.95 ★</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center font-bold text-[#ee8c2b] text-xs shrink-0">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-5 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
