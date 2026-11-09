import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";

import { LoadingImage } from "@/components/system/LoadingImage";
import type { Vendor } from "@/types/vendor";
import {
  formatCuisineList,
  formatEta,
  formatNaira,
  formatRating,
} from "@/utils/vendorUtils";
import { cn } from "@/lib/utils";

type VendorCardProps = {
  vendor: Vendor;
  /** Marks the first cards as eager so the top row paints early. */
  priority?: boolean;
};

/**
 * Result tile: cover on top, then the three facts a customer compares before
 * opening a menu. Two per row on phones, like every delivery app worth using.
 */
export function VendorCard({ vendor, priority = false }: VendorCardProps) {
  return (
    <Link
      to={`/vendor/${vendor.id}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border bg-background transition-colors",
        "border-hairline hover:border-primary/45 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25",
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-strong">
        <LoadingImage
          src={vendor.image}
          alt={vendor.imageAlt}
          priority={priority}
          width={480}
          height={360}
          className="absolute inset-0"
        />

        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-sm bg-background/95 px-1.5 py-0.5 text-[11px] font-semibold text-ink shadow-soft">
          <Star aria-hidden="true" className="size-3 fill-primary text-primary" />
          {formatRating(vendor.rating)}
        </span>

        {!vendor.isOpen ? (
          <span className="absolute inset-0 grid place-items-center bg-secondary/55 text-[12px] font-semibold text-white">
            {vendor.openingNote ?? "Closed"}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-2.5 sm:p-3">
        <h3 className="truncate font-display text-[15px] leading-snug font-semibold text-ink transition-colors group-hover:text-primary sm:text-[16px]">
          {vendor.name}
        </h3>
        <p className="truncate text-[12px] leading-snug text-ink-muted">
          {formatCuisineList(vendor.cuisines.slice(0, 2))}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-1.5 text-[12px] text-ink-muted">
          <span className="flex items-center gap-1">
            <Clock aria-hidden="true" className="size-3.5" />
            {formatEta(vendor.etaMin, vendor.etaMax)}
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-hairline sm:block" />
          <span className="hidden sm:inline">{formatNaira(vendor.deliveryFee)} delivery</span>
          <span className="hidden text-ink-muted/80 lg:inline">
            {formatNaira(vendor.minOrder)} min
          </span>
        </div>
      </div>
    </Link>
  );
}
