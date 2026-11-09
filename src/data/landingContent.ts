import {
  Bike,
  BellRing,
  CalendarClock,
  ChefHat,
  CreditCard,
  Gift,
  Headset,
  IdCard,
  ListChecks,
  MapPin,
  PackageCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Utensils,
  Wallet,
} from "lucide-react";

import type {
  Benefit,
  Fact,
  FaqItem,
  FeaturedVendor,
  FoodCategory,
  JoiningStep,
  KitchenCapability,
  OrderStep,
  PartnerInvitation,
  ProcessStage,
  Quote,
  RiderPerk,
  RiderRequirement,
  VendorType,
} from "@/types/landing";

import pizza from "@/assets/vendors/pizza.png";
import cafeInterior from "@/assets/vendors/nigeria-eatries.jpg";
import vendorAmaka from "@/assets/images/vendor-amaka.jpg";
import vendorBrewBar from "@/assets/images/vendor-brew-bar.jpg";
import vendorFitbites from "@/assets/images/vendor-fitbites.jpg";
import browseFood from "@/assets/images/browse-food.jpg";
import eatMeal from "@/assets/images/eat-meal.jpg";
import shelfProducts from "@/assets/vendors/pharmacy1.jpg";
import prochef from "@/assets/vendors/prochef.png";


export const homeCategories: FoodCategory[] = [
  {
    id: "restaurants",
    label: "Restaurants",
    blurb: "Menus from kitchens cooking right now",
    image: pizza,
    imageAlt: "Freshly baked pizza on a wooden board",
    href: "/vendors",
  },
  {
    id: "shops",
    label: "Shops",
    blurb: "Groceries and household essentials",
    image: browseFood,
    imageAlt: "Shopper choosing groceries in a delivery app",
    href: "/vendors",
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    blurb: "Over-the-counter medicine, delivered",
    image: shelfProducts,
    imageAlt: "Pharmacy shelves stocked with medicine boxes",
    href: "/vendors",
  },
  {
    id: "markets",
    label: "Local markets",
    blurb: "Produce, spices and market staples",
    image: vendorAmaka,
    imageAlt: "Trays of peppered stews and market spices",
    href: "/vendors",
  },
];

export const featuredVendors: FeaturedVendor[] = [
  {
    id: "fitbites",
    name: "FitBites Daily",
    cuisine: "Grilled plates and salads",
    image: vendorFitbites,
    imageAlt: "Grilled chicken with sweet potato wedges and salad",
    rating: 4.9,
    reviews: 412,
    priceBand: "₦₦",
    href: "/vendor/fitbites",
  },
  {
    id: "brew-bar",
    name: "The Brew Bar",
    cuisine: "Coffee, pastries and light bites",
    image: vendorBrewBar,
    imageAlt: "Cups of coffee lined up on a cafe counter",
    rating: 4.8,
    reviews: 208,
    priceBand: "₦",
    href: "/vendor/brew-bar",
  },
  {
    id: "amakas",
    name: "Amaka's Gourmet",
    cuisine: "Jollof, plantain and stews",
    image: eatMeal,
    imageAlt: "Friends sharing a home-cooked meal at a table",
    rating: 4.7,
    reviews: 336,
    priceBand: "₦₦",
    href: "/vendor/amakas",
  },
];

export const orderSteps: OrderStep[] = [
  {
    id: "browse",
    title: "Browse",
    description: "Search by dish, cuisine or shop and see what is open near your address.",
    icon: Utensils,
  },
  {
    id: "checkout",
    title: "Checkout",
    description: "Add a delivery note, pick a payment method and confirm the full total.",
    icon: CreditCard,
  },
  {
    id: "track",
    title: "Track",
    description: "Follow the route update from the kitchen door to your street.",
    icon: MapPin,
  },
  {
    id: "eat",
    title: "Eat",
    description: "Food arrives sealed. Rate the order or report a problem in the app.",
    icon: PackageCheck,
  },
];

export const homeBenefits: Benefit[] = [
  {
    id: "tracking",
    title: "Live order updates",
    description:
      "Follow the rider from the kitchen to your door, with a status change at pickup and at handoff.",
    icon: MapPin,
  },
  {
    id: "payment",
    title: "Pay how you like",
    description:
      "Card, bank transfer or Feasto wallet at checkout. The full total, delivery included, is shown before you confirm.",
    icon: Wallet,
  },
  {
    id: "menus",
    title: "Menus kept current",
    description:
      "Vendors mark sold-out items from their dashboard, so you are not ordering food that has already run out.",
    icon: ListChecks,
  },
  {
    id: "riders",
    title: "A rider on every order",
    description:
      "Orders are assigned to riders already working your area rather than queued until someone is free.",
    icon: Bike,
  },
];

export const partnerInvitations: PartnerInvitation[] = [
  {
    role: "business",
    title: "Sell your food on Feasto",
    description:
      "Register your kitchen, publish a menu and take orders from customers across the city. We handle rider dispatch and payout.",
    ctaLabel: "Register your business",
    href: "/vendor-form",
  },
  {
    role: "rider",
    title: "Deliver on your own schedule",
    description:
      "Apply with your ID, a phone and a bike or scooter. Accept orders near you and get paid for every delivery you complete.",
    ctaLabel: "Apply to ride",
    href: "/rider-form",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Which areas do you deliver to?",
    answer:
      "We currently run across the central districts and the outer neighbourhoods listed at checkout. Enter your address on the home page and we confirm coverage before you build an order.",
  },
  {
    question: "How do I pay?",
    answer:
      "Card, bank transfer or your Feasto wallet at checkout. The delivery fee depends on the distance between the vendor and your address and is shown before you confirm the order.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once a vendor accepts, the order screen shows the rider on a live map from the kitchen to your address, with status changes at pickup and at handoff.",
  },
  {
    question: "What if something is wrong with my order?",
    answer:
      "Report it from the order screen within 24 hours. Missing items and orders that arrive cold are refunded to the payment method you used.",
  },
  {
    question: "Can I order from more than one vendor?",
    answer:
      "One order covers one vendor so the food arrives together and hot. If you need items from a shop as well, place that as a second order and both riders will be dispatched at the same time.",
  },
];


export const vendorTypes: VendorType[] = [
  {
    id: "home-cooks",
    name: "Home cooks and independent chefs",
    summary:
      "You cook from a licensed home kitchen and sell your own recipes. Feasto lists your menu, takes payment and sends a rider when an order comes in.",
    image: eatMeal,
    imageAlt: "A home-cooked meal shared at a kitchen table",
    listables: [
      "Set menus and daily specials",
      "Small-batch pastries and desserts",
      "Pre-ordered trays for events",
    ],
  },
  {
    id: "eateries",
    name: "Local eateries",
    summary:
      "A restaurant, buka or cafe with regular opening hours. Keep your full menu online and let riders handle the deliveries you would otherwise turn down.",
    image: cafeInterior,
    imageAlt: "Cafe counter with a coffee cup ready for collection",
    listables: [
      "Full menu with size and side options",
      "Combo deals and lunch specials",
      "Pickup orders for customers collecting",
    ],
  },
  {
    id: "shops",
    name: "Shops and pharmacies",
    summary:
      "Groceries, household goods or pharmacy items with stock you track. Customers order essentials and a rider collects from your counter.",
    image: shelfProducts,
    imageAlt: "Shelves of medicine and health products in a pharmacy",
    listables: [
      "Groceries and household essentials",
      "Over-the-counter medicine and health items",
      "Packaged drinks and snacks",
    ],
  },
];

export const vendorOrderStages: ProcessStage[] = [
  {
    id: "receive",
    title: "Receive the order",
    description: "New orders land in the dashboard queue. Accept or decline it in one tap.",
    icon: BellRing,
  },
  {
    id: "prepare",
    title: "Prepare and pack",
    description: "Mark items sold out as they run out, then set the order to ready when it is packed.",
    icon: ChefHat,
  },
  {
    id: "handoff",
    title: "Hand to the rider",
    description: "The nearest rider is dispatched to your counter. Check the order code and hand it over.",
    icon: Bike,
  },
];

export const vendorFacts: Fact[] = [
  { label: "Commission", value: "8% per order" },
  { label: "Payouts", value: "Next working day" },
  { label: "Monthly fee", value: "None" },
];

export const kitchenCapabilities: KitchenCapability[] = [
  {
    id: "queue",
    title: "Live order queue",
    description: "Orders arrive with items, notes and the customer's area already attached.",
    icon: BellRing,
  },
  {
    id: "availability",
    title: "Menu availability toggles",
    description: "Mark an item sold out without editing the whole menu. It disappears for customers immediately.",
    icon: ListChecks,
  },
  {
    id: "sales",
    title: "Daily sales summary",
    description: "Orders, commission and net payout per day, ready to export as a statement.",
    icon: Store,
  },
  {
    id: "handoff",
    title: "Rider handoff notes",
    description: "Add a packaging or pickup instruction the rider sees before they reach you.",
    icon: PackageCheck,
  },
];

export const vendorQuote: Quote = {
  text: "Weekday lunch used to be our quietest service. Now we prep forty plates by noon and the riders are at the counter before the last one is packed.",
  name: "Ade Bakare",
  business: "Ade's Kitchen, Yaba",
  image: prochef,
  imageAlt: "Chef Ade Bakare in an apron at the counter of his kitchen",
};

export const vendorFaqs: FaqItem[] = [
  {
    question: "What does it cost to join?",
    answer:
      "Registration is free. Feasto keeps 8% of each completed order, and there is no monthly fee or listing charge.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Orders settled before midnight are paid out the next working day to the bank account saved on your vendor profile.",
  },
  {
    question: "Can I pause my store?",
    answer:
      "Yes. Switch the store to closed from the dashboard. It stops accepting new orders without affecting your listing or your reviews.",
  },
  {
    question: "Who delivers the order?",
    answer:
      "Feasto riders. You pack the order and mark it ready; the nearest rider is dispatched to your counter and you check the order code at handoff.",
  },
  {
    question: "Do I need my own riders?",
    answer:
      "No. If you already run your own delivery riders you can keep using them, but most partners rely on Feasto for every delivery.",
  },
];

export const riderRequirements: RiderRequirement[] = [
  { id: "id", label: "Government-issued ID", icon: IdCard },
  { id: "phone", label: "Android or iOS phone with data", icon: Smartphone },
  { id: "vehicle", label: "Bicycle, scooter or motorcycle", icon: Bike },
  { id: "age", label: "18 or older", icon: ShoppingBag },
];

export const riderJoiningSteps: JoiningStep[] = [
  {
    id: "apply",
    title: "Apply online",
    description: "Send your details and one photo of your ID through the rider form.",
  },
  {
    id: "verify",
    title: "Verify your details",
    description: "A short call to confirm your vehicle and the areas you want to ride in.",
  },
  {
    id: "start",
    title: "Go online",
    description: "Collect your insulated bag and start accepting orders near you.",
  },
];

export const deliveryStages: ProcessStage[] = [
  {
    id: "collect",
    title: "Collect the order",
    description: "Show the order code at the counter and check the bag is sealed before you leave.",
    icon: ShoppingBag,
  },
  {
    id: "ride",
    title: "Ride the route",
    description: "The app gives you the route and the customer's number. Nearby stops are batched by direction.",
    icon: Bike,
  },
  {
    id: "handover",
    title: "Hand it over",
    description: "Confirm the handoff in the app. The customer sees the delivery land straight away.",
    icon: PackageCheck,
  },
];

export const riderPerks: RiderPerk[] = [
  {
    id: "payouts",
    title: "Next-day payouts",
    description: "Completed deliveries settle to your bank account the next working day.",
    icon: Wallet,
  },
  {
    id: "shifts",
    title: "Choose your own shifts",
    description: "There are no fixed rotas. Go online when you want to work and offline when you stop.",
    icon: CalendarClock,
  },
  {
    id: "support",
    title: "Support on every delivery",
    description: "In-app chat with an agent while an order is active, not a call centre queue.",
    icon: Headset,
  },
  {
    id: "referral",
    title: "Referral bonus",
    description: "A fixed bonus when a rider you refer completes their first ten deliveries.",
    icon: Gift,
  },
];

export const riderFaqs: FaqItem[] = [
  {
    question: "Do I need my own bike?",
    answer:
      "You need a bicycle, scooter or motorcycle. Bicycles work well for the central districts; longer cross-city routes are easier on a scooter.",
  },
  {
    question: "How do payouts work?",
    answer:
      "Earnings from completed deliveries are transferred to your bank account the next working day. Each delivery and its payout appears in your rider wallet.",
  },
  {
    question: "Can I choose my hours?",
    answer:
      "Yes. There are no fixed shifts. Go online in the app when you want to work and offline when you stop for the day.",
  },
  {
    question: "What documents do I need?",
    answer:
      "A government-issued ID, your bank account details and a phone number. If you ride a motorcycle, we also need the vehicle papers.",
  },
  {
    question: "What happens if a delivery goes wrong?",
    answer:
      "Report it in the app while the order is still active. Support handles damaged items and unreachable customers and records the outcome on the order.",
  },
];

export const addressSuggestions: string[] = [
  "Lekki Phase 1",
  "Victoria Island",
  "Yaba",
  "Surulere",
  "Ikeja GRA",
  "Gbagada",
  "Ikorodu Road",
  "Bodija, Ibadan",
];
