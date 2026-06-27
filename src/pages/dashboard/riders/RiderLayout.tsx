import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ListOrdered,
  Truck,
  History,
  DollarSign,
  Wallet,
  User,
  Settings,
  Bell,
  HelpCircle,
  Search,
  ChevronDown
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/rider", icon: LayoutDashboard, label: "Dashboard", end: true },
  { to: "/rider/orders", icon: ListOrdered, label: "Available Orders" },
  { to: "/rider/active-delivery", icon: Truck, label: "Active Deliveries" },
  { to: "/rider/history", icon: History, label: "Delivery History" },
  { to: "/rider/earnings", icon: DollarSign, label: "Earnings" },
  { to: "/rider/wallet", icon: Wallet, label: "Wallet" },
];

const bottomNav = [
  { to: "/rider/profile", icon: User, label: "Profile" },
  { to: "/rider/settings", icon: Settings, label: "Settings" },
];

export default function RiderLayout() {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="min-h-screen bg-[#f8f7f6] flex">
      {/* Sidebar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-white shadow-sm flex flex-col p-4 gap-2 z-50 border-r border-slate-100">
        {/* Brand */}
        <div className="mb-6 px-4 py-2">
          <h1 className="text-2xl font-extrabold text-[#ee8c2b]">Feasto</h1>
          <p className="text-xs font-semibold text-slate-500 mt-0.5">Campus Rider</p>
        </div>

        {/* Main Nav */}
        <nav className="flex flex-col gap-0.5 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-95 ${
                  isActive
                    ? "bg-orange-50 text-[#ee8c2b] font-bold"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`
              }
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-1">
          {bottomNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-150 ${
                  isActive
                    ? "bg-orange-50 text-[#ee8c2b] font-bold"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                }`
              }
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          {/* Go Online / Offline toggle */}
          <button
            onClick={() => setIsOnline(!isOnline)}
            className={`w-full mt-3 font-bold py-3 px-4 rounded-xl shadow-sm active:scale-95 transition-all text-sm cursor-pointer ${
              isOnline
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-[#ee8c2b] text-white hover:bg-[#d6761f]"
            }`}
          >
            {isOnline ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="ml-64 flex-1 min-h-screen flex flex-col">
        {/* Top App Bar */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 h-16 shadow-sm">
          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-200 transition-all focus-within:border-[#ee8c2b] gap-2 w-64">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none text-slate-700 placeholder:text-slate-400"
              placeholder="Search orders..."
              type="text"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <button className="relative text-slate-500 hover:text-[#ee8c2b] transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <button className="text-slate-500 hover:text-[#ee8c2b] transition-colors">
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 pl-5 border-l border-slate-200">
              <div className="text-right">
                <p className="text-xs font-bold text-slate-800">Alex Rivera</p>
                <p className="text-[10px] text-slate-400 font-semibold">Gold Level Rider</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-orange-100 border-2 border-orange-200 flex items-center justify-center font-extrabold text-[#ee8c2b] text-sm shrink-0">
                AR
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
