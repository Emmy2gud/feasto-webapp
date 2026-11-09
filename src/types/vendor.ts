// Types for the vendor listing page.

export type VendorKind = "restaurant" | "grocery" | "pharmacy";

/** Naira symbol count, the way Lagos menus price themselves. */
export type PriceBand = "₦" | "₦₦" | "₦₦₦";

/** Minimum rating a vendor must reach, in half stars. */
export type RatingFilter = 4.5 | 4.0 | 3.5;

export interface Vendor {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  kind: VendorKind;
  cuisines: string[];
  rating: number;
  reviewCount: number;
  priceBand: PriceBand;
  /** Delivery window in minutes, inclusive. */
  etaMin: number;
  etaMax: number;
  distanceKm: number;
  neighborhood: string;
  /** Naira. */
  deliveryFee: number;
  /** Naira. */
  minOrder: number;
  isOpen: boolean;
  /** Shown on closed vendors only, e.g. "Opens 09:00". */
  openingNote?: string;
}

export type VendorSort = "reviewed" | "rating" | "eta" | "min-order";

export interface VendorFilters {
  kind: VendorKind | "all";
  priceBand: PriceBand | null;
  minRating: RatingFilter | null;
  openNow: boolean;
}

export interface SortOption {
  value: VendorSort;
  label: string;
}
