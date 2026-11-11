import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SideBar } from "./SideBar";
import { Nav } from "./Nav";
import DashboardIcon from "@/assets/dashboard/icon-dashboard.svg?react";
import OrdersIcon from "@/assets/dashboard/icon-orders.svg?react";
import MenuIcon from "@/assets/dashboard/icon-menu.svg?react";
import CategoriesIcon from "@/assets/dashboard/icon-categories.svg?react";
import EarningsIcon from "@/assets/dashboard/icon-earnings.svg?react";
import PayoutsIcon from "@/assets/dashboard/icon-payouts.svg?react";
import {
  LayoutDashboard,
  Users,
  Store,
  Bike,
  CreditCard,
  Wallet,
  BarChart3,
  ListOrdered,
  Truck,
  History,
  DollarSign,
  Scale,
  Settings,
  SlidersHorizontal,

} from "lucide-react";

interface NavItem {
  label: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number;
}
const vendorNavItems: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Orders", to: "/dashboard/orders", icon: OrdersIcon, badge: 3 },
  { label: "Menu", to: "/dashboard/menu", icon: MenuIcon },
  { label: "Categories", to: "/dashboard/categories", icon: CategoriesIcon },
  { label: "Earnings", to: "/dashboard/earnings", icon: EarningsIcon },
  { label: "Payouts", to: "/dashboard/payouts", icon: PayoutsIcon },
  {label:"Profile", to:"/dashboard/profile",icon:Settings},
  {label:"Add-ons", to:"/dashboard/addons",icon:SlidersHorizontal},
  // { label: "Reviews", to: "/dashboard/reviews", icon: ReviewsIcon },
];
 const adminNavItems: NavItem[] = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard },
  { label: "Users", to: "/admin/users", icon: Users },
  { label: "Vendors", to: "/admin/vendors", icon: Store },
  { label: "Orders", to: "/admin/orders", icon: OrdersIcon, badge: 3 },
  { label: "Riders", to: "/admin/riders", icon: Bike },
//finance ops 
{ label: "Transactions", to: "/admin/transactions", icon: CreditCard },
{ label: "Payouts", to: "/admin/payouts", icon: PayoutsIcon },
{ label: "Reports", to: "/admin/reports", icon: Wallet },
{ label: "Promotions", to: "/admin/promotions", icon: BarChart3 },
{ label: "Disputes", to: "/admin/disputes", icon: Scale },
{ label: "Settings", to: "/admin/settings", icon: Settings },
];

const riderNavItems: NavItem[] = [
  { label: "Dashboard", to: "/rider", icon: DashboardIcon },
  { label: "Available Orders", to: "/rider/orders", icon: ListOrdered, badge: 3 },
  { label: "Active Deliveries", to: "/rider/active-delivery", icon: Truck },
  { label: "Delivery History", to: "/rider/delivery-history", icon: History },
  { label: "Earnings", to: "/rider/earnings", icon: DollarSign },
  { label: "Wallet", to: "/rider/wallet", icon: Wallet },
  { label: "Profile", to: "/rider/profile", icon: Settings },
];



export default function DashBoardLayout({ role}: { role: string;}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let navLinks: NavItem[] = [];

  if (role === "vendor") {
    navLinks = vendorNavItems;
  } else if (role === "admin") {
    navLinks = adminNavItems;
  } else if (role === "rider") {
    navLinks = riderNavItems;
  } 

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased overflow-hidden">
      <SideBar
        mobileMenuOpen={mobileMenuOpen}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        role={role}
      />
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Nav onOpenMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
