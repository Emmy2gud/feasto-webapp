import { Link } from "react-router-dom";
import { ArrowRight, Bike, Clock, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Vendor } from "@/types/vendor";
import { formatEta, formatNaira, formatRating } from "@/utils/vendorUtils";

/**
 * Featured vendor banner. It promotes a vendor from the real dataset with the
 * facts the listing already shows, instead of an invented discount.
 */
export function FeaturedStrip({ vendor }: { vendor: Vendor }) {
  return (
    <section
      aria-labelledby="featured-vendor"
      className="relative isolate overflow-hidden rounded-xl bg-secondary"
    >
      <img
        src={vendor.image}
        alt={vendor.imageAlt}
        width={1200}
        height={480}
        loading="eager"
        decoding="async"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/30"
      />

      <div className="flex flex-col gap-4 p-4 sm:p-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="max-w-[46ch]">
          <h2
            id="featured-vendor"
            className="font-display text-[22px] leading-tight font-bold text-white sm:text-[26px]"
          >
            {vendor.name}
          </h2>
          <p className="mt-1 text-[13px] leading-relaxed text-white/70 sm:text-[14px]">
            {vendor.cuisines.join(", ")} · {vendor.neighborhood}
          </p>

          <ul className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-white/75 sm:text-[13px]">
            <li className="flex items-center gap-1.5">
              <Star aria-hidden="true" className="size-3.5 fill-primary text-primary" />
              {formatRating(vendor.rating)}
              <span className="text-white/50">({vendor.reviewCount})</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Clock aria-hidden="true" className="size-3.5" />
              {formatEta(vendor.etaMin, vendor.etaMax)}
            </li>
            <li className="flex items-center gap-1.5">
              <Bike aria-hidden="true" className="size-3.5" />
              {formatNaira(vendor.deliveryFee)} delivery
            </li>
          </ul>
        </div>

        <Button
          asChild
          className="h-10 w-fit shrink-0 rounded-md px-4 text-[13px] font-semibold"
        >
          <Link to={`/vendor/${vendor.id}`}>
            View menu
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
