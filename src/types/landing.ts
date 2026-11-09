import type { LucideIcon } from "lucide-react";

/** Alternate page surfaces. Marketing pages only ever use these three. */
export type LandingSurface = "white" | "surface" | "navy";

export type FoodCategory = {
  id: string;
  label: string;
  blurb: string;
  image: string;
  imageAlt: string;
  href: string;
};

export type FeaturedVendor = {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  imageAlt: string;
  rating: number;
  reviews: number;
  priceBand: string;
  href: string;
};

export type OrderStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PartnerInvitation = {
  role: "business" | "rider";
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export type VendorType = {
  id: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  listables: string[];
};

export type ProcessStage = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type KitchenCapability = ProcessStage;

export type Fact = {
  label: string;
  value: string;
};

export type Quote = {
  text: string;
  name: string;
  business: string;
  image: string;
  imageAlt: string;
};

export type RiderRequirement = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type JoiningStep = {
  id: string;
  title: string;
  description: string;
};

export type RiderPerk = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};
