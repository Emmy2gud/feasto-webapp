import { NavLink, useNavigate } from "react-router-dom";
import FeastoLogo from "@/assets/logo/feasto-logo.svg?react";


import ProfileIcon from "@/assets/dashboard/icon-profile.svg?react";

import LogoutIcon from "@/assets/dashboard/icon-logout.svg?react";
import avatarImg from "@/assets/dashboard/avatar-campus-grill.jpg";
import { X, Power } from "lucide-react";
import { useState } from "react";

const INACTIVE_ICON_COLOR = "#94a3b8";
const ACTIVE_ICON_COLOR = "#ee8c2b";

interface NavItem {
  label: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  badge?: number;
}


const accountNavItems: NavItem[] = [
  { label: "Profile", to: "/dashboard/profile", icon: ProfileIcon },
];

function SideBarNavLink({
  item,
  onClick,
}: {
  item: NavItem;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/dashboard"}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 group",
          isActive
            ? "bg-orange-50/90 text-[#ee8c2b] font-semibold shadow-xs"
            : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <>
          <span className="flex items-center justify-center w-5 h-5 shrink-0">
            <item.icon
              width={18}
              height={18}
              style={{ color: isActive ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR }}
            />
          </span>
          <span className="flex-1 leading-5 truncate">
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

export function SideBar({
  mobileMenuOpen = false,
  onCloseMobileMenu,
  navLinks,
  role
}: {
  mobileMenuOpen?: boolean;
  onCloseMobileMenu?: () => void;
  navLinks: NavItem[];
  role: string;
}) {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  return (
    <>

      {mobileMenuOpen && (
        <div
          onClick={onCloseMobileMenu}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 shrink-0 h-screen border-r border-slate-200/80 bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
          }`}
      >

        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <FeastoLogo className="h-7 w-auto max-w-[130px]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-[#ee8c2b] border border-orange-100">
              {role}
            </span>
            <button
              onClick={onCloseMobileMenu}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 lg:hidden cursor-pointer"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>


        <div className="flex flex-col flex-1 overflow-y-auto px-3 py-4 gap-1 min-h-0">

          <nav className="flex flex-col gap-1" aria-label="Main navigation">

            {
              role === "admin" ? navLinks.slice(0, 6).map((item) => (
                <SideBarNavLink
                  key={item.label}
                  item={item}
                  onClick={onCloseMobileMenu}
                />
              )) :
                navLinks.map((item) => (
                  <SideBarNavLink
                    key={item.label}
                    item={item}
                    onClick={onCloseMobileMenu}
                  />
                ))
            }
            {/* <NavLink
              to="/dashboard/addons"
              onClick={onCloseMobileMenu}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm transition-all duration-150 group",
                  isActive
                    ? "bg-orange-50/90 text-[#ee8c2b] font-semibold shadow-xs"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span className="flex items-center justify-center w-5 h-5 shrink-0">
                    <SlidersHorizontal
                      width={18}
                      height={18}
                      style={{ color: isActive ? ACTIVE_ICON_COLOR : INACTIVE_ICON_COLOR }}
                    />
                  </span>
                  <span className="flex-1 leading-5 truncate">Add-ons</span>
                </>
              )}
            </NavLink> */}
            {
              role === "admin" && (
                <div>
                  <div className="my-2 border-t border-slate-100 mx-2"></div>

                  <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Finance & Ops
                  </div>
                  {navLinks.slice(6).map((item) => (
                    <SideBarNavLink
                      key={item.label}
                      item={item}
                      onClick={onCloseMobileMenu}
                    />
                  ))}

                </div>
              )
            }

          </nav>

          {
            role != "admin" && (
              <div className="flex flex-col gap-1 mt-3 pt-3 border-t border-slate-100">
                <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Account
                </span>
                <nav className="flex flex-col gap-1" aria-label="Account navigation">
                  {accountNavItems.map((item) => (
                    <SideBarNavLink
                      key={item.label}
                      item={item}
                      onClick={onCloseMobileMenu}
                    />
                  ))}
                </nav>
              </div>)
          }
{role=="rider"&&(
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

)}
        </div>

        {/* User Footer */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-t border-slate-100 shrink-0 bg-slate-50/50">
          <img
            src={avatarImg}
            alt="Campus Grill avatar"
            className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0"
          />
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-sm font-semibold text-slate-900 truncate">
              Campus Grill
            </span>
            <span className="text-xs text-slate-500 truncate">
              vendor@campusbites.com
            </span>
          </div>
          <button
            onClick={() => navigate("/login")}
            aria-label="Log out"
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer"
            title="Log out"
          >
            <LogoutIcon width={18} height={18} style={{ color: "#94a3b8" }} />
          </button>
        </div>
      </aside>
    </>
  );
}
