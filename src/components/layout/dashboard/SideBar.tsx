import { NavLink, useNavigate } from "react-router-dom";
import FeastoLogo from "@/assets/logo/feasto-logo.svg?react";
import DashboardIcon from "@/assets/dashboard/icon-dashboard.svg?react";
import OrdersIcon from "@/assets/dashboard/icon-orders.svg?react";
import MenuIcon from "@/assets/dashboard/icon-menu.svg?react";
import CategoriesIcon from "@/assets/dashboard/icon-categories.svg?react";
import EarningsIcon from "@/assets/dashboard/icon-earnings.svg?react";
import PayoutsIcon from "@/assets/dashboard/icon-payouts.svg?react";
import ReviewsIcon from "@/assets/dashboard/icon-reviews.svg?react";
import ProfileIcon from "@/assets/dashboard/icon-profile.svg?react";
import SettingsIcon from "@/assets/dashboard/icon-settings.svg?react";
import LogoutIcon from "@/assets/dashboard/icon-logout.svg?react";
import avatarImg from "@/assets/dashboard/avatar-campus-grill.jpg";

const INACTIVE_ICON_COLOR = "#94a3b8";
const ACTIVE_ICON_COLOR = "#ee8c2b";

interface NavItem {
  label: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Orders", to: "/dashboard/orders", icon: OrdersIcon, badge: 3 },
  { label: "Menu", to: "/dashboard/menu", icon: MenuIcon },
  { label: "Categories", to: "/dashboard/categories", icon: CategoriesIcon },
  { label: "Earnings", to: "/dashboard/earnings", icon: EarningsIcon },
  { label: "Payouts", to: "/dashboard/payouts", icon: PayoutsIcon },
  { label: "Reviews", to: "/dashboard/reviews", icon: ReviewsIcon },
];

const accountNavItems: NavItem[] = [
  { label: "Profile", to: "/dashboard/profile", icon: ProfileIcon },
  { label: "Settings", to: "/dashboard/settings", icon: SettingsIcon },
];

function SideBarNavLink({ item }: { item: NavItem }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/dashboard"}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 px-4 py-3 rounded-3xl transition-colors duration-150 group",
          isActive
            ? "bg-primary/10"
            : "hover:bg-slate-100",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span className="flex items-center justify-center w-[18px] h-[18px] shrink-0">
            <item.icon
              width={18}
              height={18}
              style={{ color: isActive ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR }}
            />
          </span>
          <span
            className="flex-1 text-sm leading-5 transition-colors duration-150"
            style={{
              fontWeight: isActive ? 600 : 500,
              color: isActive ? ACTIVE_ICON_COLOR : "#64748b",
            }}
          >
            {item.label}
          </span>
          {item.badge !== undefined && (
            <span
              className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-white text-[10px] font-bold leading-none"
              style={{ backgroundColor: ACTIVE_ICON_COLOR }}
            >
              {item.badge}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}

export function SideBar() {
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-border bg-white">
      {/* Logo Header */}
      <div className="flex items-center h-20 px-4 border-b border-slate-100 shrink-0">
        <FeastoLogo width={500} height={400} />
      </div>

      {/* Scrollable Nav */}
      <div className="flex flex-col flex-1 overflow-y-auto px-4 py-4 gap-1 min-h-0">
        {/* Main Nav */}
        <nav className="flex flex-col gap-1" aria-label="Main navigation">
          {mainNavItems.map((item) => (
            <SideBarNavLink key={item.label} item={item} />
          ))}
        </nav>

        {/* Account Section */}
        <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-slate-100">
          <span
            className="px-4 text-[11px] font-bold uppercase tracking-[0.6px]"
            style={{ color: "#94a3b8" }}
          >
            Account
          </span>
          <nav className="flex flex-col gap-1" aria-label="Account navigation">
            {accountNavItems.map((item) => (
              <SideBarNavLink key={item.label} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* User Footer */}
      <div className="flex items-center gap-3 px-4 py-4 border-t border-border shrink-0">
        <img
          src={avatarImg}
          alt="Campus Grill avatar"
          className="w-9 h-9 rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col flex-1 min-w-0">
          <span
            className="text-sm font-bold truncate"
            style={{ color: "#0f172a" }}
          >
            Campus Grill
          </span>
          <span
            className="text-xs font-normal truncate"
            style={{ color: "#64748b" }}
          >
            vendor@campusbites.…
          </span>
        </div>
        <button
          onClick={() => navigate("/login")}
          aria-label="Log out"
          className="flex items-center justify-center w-5 h-5 shrink-0 text-slate-400 hover:text-slate-600 transition-colors duration-150 cursor-pointer"
          title="Log out"
        >
          <LogoutIcon
            width={20}
            height={18}
            style={{ color: "#94a3b8" }}
          />
        </button>
      </div>
    </aside>
  );
}
