import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  LogOut,
  Search,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/marketing/Logo";
import { DeliveryAddressMenu } from "./DeliveryAddressMenu";
import { useCart } from "@/context/cart-store";
import { accountEmail, accountName, savedAddresses } from "@/data/appShell";
import type { SavedAddress } from "@/data/appShell";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";
import avatar from "@/assets/images/profile.png";

/**
 * Shell header for the ordering area. It carries the two things a delivery app
 * must always show — where the food is going and what is in the basket — plus
 * search on listing routes.
 */
export function MainHeader() {
  const scrolled = useScrolled(4);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [address, setAddress] = useState<SavedAddress>(savedAddresses[0]);
  const { count } = useCart();

  const query = searchParams.get("q") ?? "";
  const showSearch = pathname.startsWith("/vendors") || pathname.startsWith("/vendor/");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = String(new FormData(event.currentTarget).get("q") ?? "").trim();
    const params = new URLSearchParams();
    if (value) params.set("q", value);
    navigate({ pathname: "/vendors", search: params.toString() });
  }

  const cartLink = (
    <Link
      to="/checkout"
      aria-label={`Checkout, ${count} ${count === 1 ? "item" : "items"} in the basket`}
      className="relative grid size-10 shrink-0 place-items-center rounded-md border border-hairline text-ink transition-colors hover:border-primary/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
    >
      <ShoppingBag aria-hidden="true" className="size-[18px]" />
      {count > 0 ? (
        <span
          aria-hidden="true"
          className="absolute -top-1.5 -right-1.5 grid size-[18px] place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground"
        >
          {count}
        </span>
      ) : null}
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background transition-colors",
        scrolled ? "border-hairline shadow-soft" : "border-hairline/80",
      )}
    >
      {/* Compact app bar: mark, destination, basket, account. */
      }
      <div className="flex h-14 items-center gap-2 pl-3 pr-2.5 lg:hidden">
        <Link
          to="/"
          aria-label="Feasto home"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <Logo showWordmark={false} />
        </Link>

        <DeliveryAddressMenu
          address={address}
          onSelect={setAddress}
          triggerClassName="flex-1"
        />

        {cartLink}

        <Link
          to="/profile"
          aria-label="Your account"
          className="size-9 shrink-0 overflow-hidden rounded-md border border-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <img
            src={avatar}
            alt=""
            width={36}
            height={36}
            className="size-full object-cover"
          />
        </Link>
      </div>

      {showSearch ? (
        <form onSubmit={handleSearch} className="border-t border-hairline px-3 py-2 lg:hidden">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-muted"
            />
            <Input
              key={query}
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search vendors, dishes or areas"
              aria-label="Search vendors"
              className="h-11 rounded-lg border-transparent bg-surface pr-3 pl-9 text-[15px] text-ink placeholder:text-ink-muted focus-visible:border-primary/50 focus-visible:bg-background"
            />
          </div>
        </form>
      ) : null}

      {/* Desktop bar. */}
      <div className="mx-auto hidden h-[72px] w-full max-w-[1280px] items-center gap-3 px-8 lg:flex lg:px-12">
        <Link
          to="/"
          aria-label="Feasto home"
          className="mr-1 shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <Logo />
        </Link>

        <DeliveryAddressMenu
          address={address}
          onSelect={setAddress}
          triggerClassName="max-w-[300px]"
        />

        <form onSubmit={handleSearch} className="relative w-full max-w-[380px]">
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-muted"
          />
          <Input
            key={query}
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search vendors, dishes or areas"
            aria-label="Search vendors"
            className="h-10 rounded-lg border-transparent bg-surface pr-3 pl-9 text-sm text-ink placeholder:text-ink-muted focus-visible:border-primary/50 focus-visible:bg-background"
          />
        </form>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="h-10 gap-2 rounded-lg border-hairline px-3 font-semibold text-ink hover:border-primary/40 hover:bg-surface"
          >
            <Link to="/checkout">
              <ShoppingBag aria-hidden="true" className="size-4" />
              Basket
              {count > 0 ? (
                <span className="grid size-5 place-items-center rounded-sm bg-primary text-[11px] font-bold text-primary-foreground">
                  {count}
                </span>
              ) : null}
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex h-10 items-center gap-2 rounded-lg border border-hairline pr-2 pl-1.5 text-ink transition-colors hover:border-primary/40 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              >
                <img
                  src={avatar}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 rounded-sm object-cover"
                />
                <span className="max-w-[104px] truncate text-[13px] font-semibold">
                  {accountName}
                </span>
                <ChevronDown aria-hidden="true" className="size-3.5 text-ink-muted" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-60 rounded-xl p-1.5">
              <DropdownMenuLabel className="px-2 py-1.5 font-normal">
                <span className="block text-[13px] font-semibold text-ink">
                  {accountName}
                </span>
                <span className="block truncate text-[12px] text-ink-muted">
                  {accountEmail}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild className="gap-2.5 rounded-md py-2 text-[13px]">
                <Link to="/profile">
                  <User aria-hidden="true" className="size-4 text-ink-muted" />
                  Your profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="gap-2.5 rounded-md py-2 text-[13px]">
                <Link to="/settings">
                  <Settings aria-hidden="true" className="size-4 text-ink-muted" />
                  Account settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="gap-2.5 rounded-md py-2 text-[13px]">
                <Link to="/tracking">
                  <ShoppingBag aria-hidden="true" className="size-4 text-ink-muted" />
                  Current order
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="gap-2.5 rounded-md py-2 text-[13px]">
                <Link to="/login">
                  <LogOut aria-hidden="true" className="size-4 text-ink-muted" />
                  Sign out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
