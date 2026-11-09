import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/marketing/Logo";
import { footerGroups } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-page">
        {/* Final call to action. Role-neutral because this footer serves every landing page. */}
        <div className="flex flex-col gap-8 border-b border-white/10 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
              Order from the places you already love.
            </h2>
            <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-white/65">
              Food, groceries and pharmacy essentials from vendors across the city, delivered to
              your door.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button asChild className="h-12 rounded-lg px-6 text-[15px] font-semibold">
              <Link to="/vendors">Order food</Link>
            </Button>
            <Link
              to="/about-vendors"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 transition-colors hover:text-white"
            >
              Become a partner
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="max-w-[34ch] text-sm leading-relaxed text-white/60">
              Feasto connects city kitchens, shops and pharmacies with customers nearby, and pays
              riders for every delivery.
            </p>
            <p className="text-sm text-white/45">Prices in ₦</p>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
              <h3 className="text-[13px] font-semibold text-white/50">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">© 2026 Feasto. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/settings"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Account settings
            </Link>
            <Link
              to="/admin"
              className="text-sm text-white/45 transition-colors hover:text-white"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
