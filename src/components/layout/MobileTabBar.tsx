import { NavLink, useLocation } from "react-router-dom";
import { Bike, ShoppingBag, User, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useCart } from "@/context/cart-store";
import { cn } from "@/lib/utils";

type AppTab = {
  label: string;
  to: string;
  icon: LucideIcon;
  /** Routes that keep the tab highlighted, beyond its own path. */
  match: string[];
};

const tabs: AppTab[] = [
  { label: "Vendors", to: "/vendors", icon: UtensilsCrossed, match: ["/vendors", "/vendor/"] },
  { label: "Orders", to: "/tracking", icon: Bike, match: ["/tracking"] },
  { label: "Basket", to: "/checkout", icon: ShoppingBag, match: ["/checkout"] },
  { label: "Account", to: "/profile", icon: User, match: ["/profile", "/settings"] },
];

/** Phone-sized tab bar for the ordering shell. Marketing pages keep the top nav only. */
export function MobileTabBar() {
  const { pathname } = useLocation();
  const { count } = useCart();

  return (
    <nav
      aria-label="Feasto app"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-lg items-stretch">
        {tabs.map((tab) => {
          const isActive = tab.match.some((prefix) => pathname.startsWith(prefix));

          return (
            <li key={tab.to} className="flex-1">
              <NavLink
                to={tab.to}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-[11px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-inset",
                  isActive ? "text-primary" : "text-ink-muted hover:text-ink",
                )}
              >
                <span className="relative">
                  <tab.icon
                    aria-hidden="true"
                    className="size-[22px]"
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                  {tab.to === "/checkout" && count > 0 ? (
                    <span
                      aria-hidden="true"
                      className="absolute -top-1.5 -right-2 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground"
                    >
                      {count}
                    </span>
                  ) : null}
                </span>
                {tab.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
