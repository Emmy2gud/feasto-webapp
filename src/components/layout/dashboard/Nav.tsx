import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Switch } from "@/components/ui/switch";
import { Bell, Store, Menu } from "lucide-react";

interface NavProps {
  onOpenMobileMenu?: () => void;
}

export function Nav({ onOpenMobileMenu }: NavProps) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Overview";
    if (path.includes("/orders")) return "Orders Hub";
    if (path === "/dashboard/menu") return "Menu Items";
    if (path.includes("/menu/add")) return "Add Menu Item";
    if (path === "/dashboard/categories") return "Categories";
    if (path.includes("/categories/new")) return "Add Category";
    if (path.includes("/addons")) return "Add-ons & Options";
    if (path.includes("/earnings")) return "Earnings";
    if (path.includes("/payouts")) return "Payouts & Wallet";
    if (path.includes("/profile")) return "Store Profile";
    if (path.includes("/reviews")) return "Reviews";
    if (path.includes("/settings")) return "Settings";
    return "Dashboard";
  };

  return (
    <header className="h-16 sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 flex items-center justify-between">
      <nav className="flex justify-between items-center w-full">
        {/* Left: Hamburger (mobile) + Breadcrumb */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Mobile hamburger */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Breadcrumb — hidden on small screens to avoid overflow */}
          <div className="hidden sm:flex items-center min-w-0">
            <Breadcrumb>
              <BreadcrumbList className="text-xs font-medium text-slate-500">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/dashboard" className="hover:text-slate-900 transition-colors">
                      Vendor Portal
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-slate-300" />
                <BreadcrumbItem>
                  <span className="font-semibold text-slate-900 truncate">{getPageTitle()}</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Mobile: show page title only */}
          <span className="sm:hidden text-sm font-semibold text-slate-900 truncate">{getPageTitle()}</span>
        </div>

        {/* Right Status & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Store Open/Closed Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-100/90 hover:bg-slate-100 px-2.5 sm:px-3 py-1.5 rounded-lg border border-slate-200/60 transition-colors">
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isOpen ? "bg-emerald-500 ring-2 ring-emerald-200 animate-pulse" : "bg-slate-400"
              }`}
            />
            <span className="hidden sm:inline text-xs font-semibold text-slate-700">Store:</span>
            <span className={`text-xs font-bold ${isOpen ? "text-emerald-600" : "text-slate-500"}`}>
              {isOpen ? "Open" : "Closed"}
            </span>
            <Switch
              checked={isOpen}
              onCheckedChange={setIsOpen}
              className="ml-1 data-[state=checked]:bg-emerald-500 h-5 w-9"
            />
          </div>

          <div className="h-5 w-px bg-slate-200 mx-0.5 hidden sm:block" />

          {/* Notifications */}
          <button
            aria-label="Notifications"
            className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ee8c2b] rounded-full border-2 border-white" />
          </button>

          {/* Quick Store Indicator — hidden on small screens */}
          <Link
            to="/dashboard/profile"
            className="hidden sm:flex items-center gap-2 pl-2 pr-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-transparent hover:border-slate-200"
          >
            <div className="w-6 h-6 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ee8c2b]">
              <Store className="w-3.5 h-3.5" />
            </div>
            <span>Campus Grill</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
