import {
  Pill,
  ShoppingBasket,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

import type { PriceBand, RatingFilter, SortOption, Vendor, VendorKind } from "@/types/vendor";

import groceryAisle from "@/assets/vendors/grocery-aisle.jpg";
import marketStall from "@/assets/vendors/market-stall.jpg";
import pharmacyCounter from "@/assets/vendors/pharmacy-counter.jpg";
import pizza from "@/assets/vendors/pizza.png";
import cafeCounter from "@/assets/vendors/Cafeterias.png";
import vendorAmaka from "@/assets/images/vendor-amaka.jpg";
import vendorFitbites from "@/assets/images/vendor-fitbites.jpg";
import chefPlating from "@/assets/images/burger.png";

/** Vendor types shown in the filter rail, in the order customers scan them. */
export const vendorKinds: { id: VendorKind; label: string; icon: LucideIcon }[] = [
  { id: "restaurant", label: "Restaurants", icon: UtensilsCrossed },
  { id: "grocery", label: "Groceries and market", icon: ShoppingBasket },
  { id: "pharmacy", label: "Pharmacy", icon: Pill },
];

export const priceBands: PriceBand[] = ["₦", "₦₦", "₦₦₦"];

export const ratingOptions: RatingFilter[] = [4.5, 4.0, 3.5];

export const sortOptions: SortOption[] = [
  { value: "reviewed", label: "Most reviewed" },
  { value: "rating", label: "Highest rated" },
  { value: "eta", label: "Fastest delivery" },
  { value: "min-order", label: "Lowest minimum" },
];

/**
 * Vendors available in the demo dataset. Every cover is repo photography, so
 * nothing depends on a remote image host at runtime.
 */
export const vendors: Vendor[] = [
  {
    id: "fitbites",
    name: "FitBites Daily",
    image: vendorFitbites,
    imageAlt: "Grilled chicken with sweet potato wedges and salad",
    kind: "restaurant",
    cuisines: ["Grilled plates", "Salads", "Protein bowls"],
    rating: 4.9,
    reviewCount: 412,
    priceBand: "₦₦",
    etaMin: 25,
    etaMax: 35,
    distanceKm: 2.4,
    neighborhood: "Ikoyi",
    deliveryFee: 900,
    minOrder: 4000,
    isOpen: true,
  },
  {
    id: "brew-bar",
    name: "The Brew Bar",
    image: cafeCounter,
    imageAlt: "Cafe counter with a fresh cup of coffee under warm lights",
    kind: "restaurant",
    cuisines: ["Coffee", "Pastries", "Breakfast"],
    rating: 4.8,
    reviewCount: 208,
    priceBand: "₦",
    etaMin: 15,
    etaMax: 25,
    distanceKm: 1.1,
    neighborhood: "Yaba",
    deliveryFee: 600,
    minOrder: 2000,
    isOpen: true,
  },
  {
    id: "amakas",
    name: "Amaka's Gourmet",
    image: vendorAmaka,
    imageAlt: "Trays of peppered stews and market spices",
    kind: "restaurant",
    cuisines: ["Jollof", "Plantain", "Stews"],
    rating: 4.7,
    reviewCount: 336,
    priceBand: "₦₦",
    etaMin: 30,
    etaMax: 40,
    distanceKm: 3.6,
    neighborhood: "Surulere",
    deliveryFee: 1200,
    minOrder: 3500,
    isOpen: true,
  },
  {
    id: "slice-republic",
    name: "Slice Republic",
    image: pizza,
    imageAlt: "Pepperoni and mozzarella pizza sliced on a wooden board",
    kind: "restaurant",
    cuisines: ["Pizza", "Pasta"],
    rating: 4.6,
    reviewCount: 274,
    priceBand: "₦₦",
    etaMin: 25,
    etaMax: 35,
    distanceKm: 4.2,
    neighborhood: "Victoria Island",
    deliveryFee: 1000,
    minOrder: 5000,
    isOpen: true,
  },
  {
    id: "prep-room",
    name: "The Prep Room",
    image: chefPlating,
    imageAlt: "Chef plating vegetables in the open kitchen of a small restaurant",
    kind: "restaurant",
    cuisines: ["Chef's plates", "Seasonal menus"],
    rating: 4.5,
    reviewCount: 118,
    priceBand: "₦₦₦",
    etaMin: 35,
    etaMax: 45,
    distanceKm: 5.1,
    neighborhood: "Ikoyi",
    deliveryFee: 1500,
    minOrder: 6000,
    isOpen: false,
    openingNote: "Opens 18:00",
  },
  {
    id: "green-basket",
    name: "Green Basket",
    image: groceryAisle,
    imageAlt: "Produce aisle lined with crates of vegetables and fruit",
    kind: "grocery",
    cuisines: ["Groceries", "Produce", "Household"],
    rating: 4.7,
    reviewCount: 521,
    priceBand: "₦₦",
    etaMin: 30,
    etaMax: 45,
    distanceKm: 1.8,
    neighborhood: "Yaba",
    deliveryFee: 700,
    minOrder: 3000,
    isOpen: true,
  },
  {
    id: "tejuosho-market",
    name: "Tejuosho Market Run",
    image: marketStall,
    imageAlt: "Market stall stacked with tomatoes, peppers and greens",
    kind: "grocery",
    cuisines: ["Market produce", "Spices", "Peppers"],
    rating: 4.4,
    reviewCount: 163,
    priceBand: "₦",
    etaMin: 40,
    etaMax: 55,
    distanceKm: 2.9,
    neighborhood: "Yaba",
    deliveryFee: 800,
    minOrder: 1500,
    isOpen: true,
  },
  {
    id: "care-pharmacy",
    name: "Care Pharmacy",
    image: pharmacyCounter,
    imageAlt: "Pharmacist in a white coat serving a customer at the counter",
    kind: "pharmacy",
    cuisines: ["Over-the-counter", "Toiletries", "First aid"],
    rating: 4.8,
    reviewCount: 289,
    priceBand: "₦₦",
    etaMin: 20,
    etaMax: 30,
    distanceKm: 0.9,
    neighborhood: "Yaba",
    deliveryFee: 500,
    minOrder: 1000,
    isOpen: true,
  },
];

/** Results per page. Six keeps two full rows on a laptop screen. */
export const VENDORS_PAGE_SIZE = 6;
