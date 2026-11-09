import type {
  Vendor,
  VendorFilters,
  VendorKind,
  VendorSort,
} from "@/types/vendor";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

/** ₦4,000 */
export function formatNaira(amount: number): string {
  return naira.format(amount).replace("NGN", "₦").replace(/\s/g, "");
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatEta(min: number, max: number): string {
  return `${min}–${max} min`;
}

export function formatReviewCount(count: number): string {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k reviews` : `${count} reviews`;
}

/** "Jollof, Plantain, Stews" — readable before truncation kicks in. */
export function formatCuisineList(cuisines: string[]): string {
  return cuisines.join(", ");
}

export function formatDeliveryFee(fee: number): string {
  return fee === 0 ? "Free delivery" : `${formatNaira(fee)} delivery`;
}

export function matchesQuery(vendor: Vendor, query: string): boolean {
  const needle = query.trim().toLowerCase();
  if (!query) return true;

  return (
    vendor.name.toLowerCase().includes(query.trim().toLowerCase()) ||
    vendor.neighborhood.toLowerCase().includes(needle) ||
    vendor.cuisines.some((cuisine) => cuisine.toLowerCase().includes(needle))
  );
}

export function filterVendors(
  vendors: Vendor[],
  filters: VendorFilters,
  query = "",
): Vendor[] {
  return vendors.filter((vendor) => {
    if (filters.kind !== "all" && vendor.kind !== filters.kind) return false;
    if (filters.openNow && !vendor.isOpen) return false;
    if (filters.priceBand && vendor.priceBand !== filters.priceBand) return false;
    if (filters.minRating && vendor.rating < filters.minRating) return false;
    return matchesQuery(vendor, query);
  });
}

export function sortVendors(vendors: Vendor[], sort: VendorSort): Vendor[] {
  const sorted = [...vendors];

  switch (sort) {
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case "eta":
      return sorted.sort((a, b) => a.etaMin - b.etaMin);
    case "min-order":
      return sorted.sort((a, b) => a.minOrder - b.minOrder);
    case "reviewed":
    default:
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
  }
}

export function countActiveFilters(filters: VendorFilters): number {
  let count = 0;
  if (filters.kind !== "all") count += 1;
  if (filters.openNow) count += 1;
  if (filters.priceBand) count += 1;
  if (filters.minRating) count += 1;
  return count;
}

/** How many vendors each type has, ignoring the type filter itself. */
export function countByKind(
  vendors: Vendor[],
  filters: VendorFilters,
  query: string,
): Record<VendorKind | "all", number> {
  const withoutKind = { ...filters, kind: "all" as const };
  const pool = filterVendors(vendors, withoutKind, query);

  return {
    all: pool.length,
    restaurant: pool.filter((vendor) => vendor.kind === "restaurant").length,
    grocery: pool.filter((vendor) => vendor.kind === "grocery").length,
    pharmacy: pool.filter((vendor) => vendor.kind === "pharmacy").length,
  };
}

export function paginate<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  return items.slice(start, start + pageSize);
}

export function getPageCount(totalItems: number, pageSize: number): number {
  return Math.max(1, Math.ceil(totalItems / pageSize));
}
