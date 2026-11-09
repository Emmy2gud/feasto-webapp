import { Link, useNavigate } from "react-router-dom";
import { Bike, ChevronLeft, Clock, ShoppingBag, Star, Wallet } from "lucide-react";

import { useCart } from "@/context/cart-store";
import type { Vendor } from "@/types/vendor";
import { formatEta, formatNaira, formatRating } from "@/utils/vendorUtils";

/** Cover, identity and the four facts that decide whether someone orders. */
export function VendorHero({ vendor }: { vendor: Vendor }) {
  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <section className="relative isolate">
      <div className="relative h-[240px] overflow-hidden sm:h-[300px] lg:h-[340px]">
        <img
          src={vendor.image}
          alt={vendor.imageAlt}
          width={1280}
          height={480}
          loading="eager"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/25"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            className="grid size-10 place-items-center rounded-md bg-background/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>

          <Link
            to="/checkout"
            aria-label={`Basket, ${count} ${count === 1 ? "item" : "items"}`}
            className="relative grid size-10 place-items-center rounded-md bg-background/90 text-ink shadow-soft backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
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
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:px-8 sm:pb-6">
          <div className="mx-auto w-full max-w-[1180px]">
            {!vendor.isOpen ? (
              <p className="mb-2 w-fit rounded-sm bg-background/90 px-2 py-1 text-[11px] font-semibold text-ink">
                {vendor.openingNote ?? "Closed"} · orders open later
              </p>
            ) : null}

            <h1 className="font-display text-[26px] leading-tight font-bold text-white sm:text-[34px]">
              {vendor.name}
            </h1>
            <p className="mt-1 text-[13px] text-white/70 sm:text-[14px]">
              {vendor.cuisines.join(", ")} · {vendor.neighborhood}
            </p>

            <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-white/80 sm:text-[13px]">
              <li className="flex items-center gap-1.5">
                <Star aria-hidden="true" className="size-3.5 fill-primary text-primary" />
                <span className="font-semibold text-white">{formatRating(vendor.rating)}</span>
                <span className="text-white/55">({vendor.reviewCount})</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Clock aria-hidden="true" className="size-3.5" />
                {formatEta(vendor.etaMin, vendor.etaMax)}
              </li>
              <li className="flex items-center gap-1.5">
                <Bike aria-hidden="true" className="size-3.5" />
                {formatNaira(vendor.deliveryFee)} delivery
              </li>
              <li className="flex items-center gap-1.5">
                <Wallet aria-hidden="true" className="size-3.5" />
                {formatNaira(vendor.minOrder)} minimum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
