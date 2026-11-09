import type { MenuItem } from "@/types/menu";

import burger from "@/assets/menu/burger.jpg";
import jollof from "@/assets/menu/jollof.jpg";
import salad from "@/assets/menu/salad.jpg";
import wrap from "@/assets/menu/wrap.jpg";
import icedLatte from "@/assets/menu/iced-latte.jpg";
import tomatoes from "@/assets/menu/tomatoes.jpg";
import paracetamol from "@/assets/menu/paracetamol.jpg";
import firstAid from "@/assets/menu/first-aid.jpg";
import healthBasket from "@/assets/menu/health-basket.jpg";
import fries from "@/assets/images/fries.png";
import pizza from "@/assets/vendors/pizza.png";
import grilledPlate from "@/assets/images/vendor-fitbites.jpg";
import sharedMeal from "@/assets/images/eat-meal.jpg";
import stewTrays from "@/assets/images/vendor-amaka.jpg";
import chefPlating from "@/assets/vendors/prochef.png";
import storeAisle from "@/assets/images/sushi.png";

const portionExtra = [
  { id: "extra-protein", label: "Extra protein", price: 800 },
  { id: "extra-side", label: "Extra side", price: 500 },
];

const drinkExtra = [{ id: "oat-milk", label: "Oat milk", price: 400 }];

/**
 * Menus keyed by vendor id. Dishes reuse the photography already in the
 * repository; nothing here depends on a remote host at runtime.
 */
const menus: Record<string, MenuItem[]> = {
  fitbites: [
    {
      id: "fitbites-grilled-plate",
      name: "Grilled chicken plate",
      description:
        "Chicken breast off the grill with sweet potato wedges, garden salad and a lemon herb dressing.",
      price: 4800,
      image: grilledPlate,
      imageAlt: "Grilled chicken with sweet potato wedges and salad",
      category: "Grilled plates",
      isPopular: true,
      extras: portionExtra,
    },
    {
      id: "fitbites-caesar",
      name: "Chicken caesar salad",
      description: "Romaine, grilled chicken strips, cherry tomatoes, parmesan and caesar dressing.",
      price: 3900,
      image: salad,
      imageAlt: "Green salad bowl with grilled chicken and cherry tomatoes",
      category: "Salads",
      isPopular: true,
      extras: [{ id: "extra-chicken", label: "Extra chicken", price: 900 }],
    },
    {
      id: "fitbites-wrap",
      name: "Chicken shawarma wrap",
      description: "Grilled chicken, cabbage, tomato and garlic sauce rolled in a warm flatbread.",
      price: 2700,
      image: wrap,
      imageAlt: "Chicken wraps cut in half on a wooden board",
      category: "Wraps",
      extras: [{ id: "extra-sauce", label: "Extra garlic sauce", price: 300 }],
    },
    {
      id: "fitbites-fries",
      name: "Loaded fries",
      description: "Hand-cut fries with grilled chicken strips, spring onion and chilli mayo.",
      price: 2200,
      image: fries,
      imageAlt: "Carton of hand-cut fries",
      category: "Sides",
    },
  ],
  amakas: [
    {
      id: "amakas-jollof",
      name: "Jollof rice, plantain and chicken",
      description:
        "Smoky party jollof with sweet fried plantain, grilled chicken and a spoon of pepper sauce.",
      price: 4200,
      image: jollof,
      imageAlt: "Plate of jollof rice with plantain and grilled chicken",
      category: "Rice plates",
      isPopular: true,
      extras: portionExtra,
    },
    {
      id: "amakas-party-tray",
      name: "Party jollof tray for four",
      description: "A tray of jollof with plantain, coleslaw and grilled chicken. Serves four.",
      price: 14000,
      image: sharedMeal,
      imageAlt: "Friends sharing a home-cooked meal at a table",
      category: "Sharing trays",
      extras: [{ id: "extra-chicken-tray", label: "Add four chicken pieces", price: 3200 }],
    },
    {
      id: "amakas-stew",
      name: "Peppered goat stew",
      description: "Slow-cooked goat in a pepper and onion stew. Comes with a side of your choice.",
      price: 5500,
      image: stewTrays,
      imageAlt: "Trays of peppered stews and market spices",
      category: "Soups and stews",
      isPopular: true,
    },
  ],
  "brew-bar": [
    {
      id: "brew-bar-iced-latte",
      name: "Iced latte",
      description: "Double espresso poured over milk and ice. Hot version available on request.",
      price: 1800,
      image: icedLatte,
      imageAlt: "Iced latte in a tall glass",
      category: "Coffee",
      isPopular: true,
      extras: drinkExtra,
    },
    {
      id: "brew-bar-wrap",
      name: "Breakfast wrap",
      description: "Scrambled eggs, chicken sausage and spinach in a warm tortilla.",
      price: 2600,
      image: wrap,
      imageAlt: "Wrap cut in half on a wooden board",
      category: "Breakfast",
      extras: [{ id: "extra-egg", label: "Extra egg", price: 300 }],
    },
    {
      id: "brew-bar-salad",
      name: "Garden salad bowl",
      description: "Mixed leaves, cucumber, tomato and a light vinaigrette.",
      price: 2400,
      image: salad,
      imageAlt: "Fresh salad bowl with cherry tomatoes",
      category: "Light bites",
    },
  ],
  "slice-republic": [
    {
      id: "slice-margherita",
      name: "Margherita pizza",
      description: "Sourdough base, tomato sauce, mozzarella and basil. Twelve inches.",
      price: 6500,
      image: pizza,
      imageAlt: "Freshly baked pizza on a wooden board",
      category: "Pizza",
      isPopular: true,
      extras: [
        { id: "extra-cheese", label: "Extra mozzarella", price: 700 },
        { id: "pepperoni", label: "Add pepperoni", price: 1200 },
      ],
    },
    {
      id: "slice-fries",
      name: "Garlic fries",
      description: "Fries tossed in garlic butter with parsley and grated parmesan.",
      price: 2500,
      image: fries,
      imageAlt: "Carton of fries",
      category: "Sides",
    },
    {
      id: "slice-salad",
      name: "Rocket and tomato salad",
      description: "Rocket, cherry tomatoes, shaved parmesan and balsamic.",
      price: 3600,
      image: salad,
      imageAlt: "Salad bowl with cherry tomatoes",
      category: "Sides",
    },
  ],
  "prep-room": [
    {
      id: "prep-seasonal",
      name: "Chef's seasonal plate",
      description: "Whatever came in that morning, plated in the open kitchen. Changes weekly.",
      price: 9500,
      image: chefPlating,
      imageAlt: "Chef plating vegetables in an open kitchen",
      category: "Chef's plates",
      isPopular: true,
    },
    {
      id: "prep-burger",
      name: "Open kitchen smash burger",
      description: "Two aged beef patties, pickled onion, cheddar and house sauce.",
      price: 7800,
      image: burger,
      imageAlt: "Smash burger with melted cheese",
      category: "Chef's plates",
      extras: [{ id: "extra-patty", label: "Extra patty", price: 2200 }],
    },
  ],
  "green-basket": [
    {
      id: "green-tomatoes",
      name: "Tomatoes (1 kg)",
      description: "Firm market tomatoes, sorted the morning they are dispatched.",
      price: 2400,
      image: tomatoes,
      imageAlt: "Red tomatoes in a market crate",
      category: "Produce",
      isPopular: true,
    },
    {
      id: "green-pantry",
      name: "Pantry staples box",
      description: "Rice, oil, tomato paste, seasoning and salt. The week's basics in one box.",
      price: 6500,
      image: storeAisle,
      imageAlt: "Shelves stocked with packaged groceries",
      category: "Pantry",
    },
    {
      id: "green-household",
      name: "Household bundle",
      description: "Tissue, dish soap, and a pack of bin liners.",
      price: 4000,
      image: storeAisle,
      imageAlt: "Store aisle with household goods",
      category: "Household",
    },
  ],
  tejuosho: [
    {
      id: "teju-tomatoes",
      name: "Tomatoes (basket)",
      description: "A market basket of tomatoes, enough for a week of cooking.",
      price: 3200,
      image: tomatoes,
      imageAlt: "Basket of ripe tomatoes",
      category: "Market produce",
      isPopular: true,
    },
    {
      id: "teju-peppers",
      name: "Habanero peppers (500 g)",
      description: "Fresh habanero, weighed at the stall before pickup.",
      price: 1500,
      image: storeAisle,
      imageAlt: "Fresh produce on market shelves",
      category: "Market produce",
    },
  ],
  "care-pharmacy": [
    {
      id: "care-paracetamol",
      name: "Paracetamol 500 mg (24 tablets)",
      description: "Pain and fever relief. Pharmacist advice available on request.",
      price: 900,
      image: paracetamol,
      imageAlt: "Boxes of paracetamol tablets",
      category: "Over-the-counter",
      isPopular: true,
    },
    {
      id: "care-first-aid",
      name: "First aid kit",
      description: "Plasters, gauze, antiseptic wipes, scissors and tape in a sealed pouch.",
      price: 4500,
      image: firstAid,
      imageAlt: "First aid supplies laid out on a counter",
      category: "First aid",
    },
    {
      id: "care-basket",
      name: "Everyday health pack",
      description: "Pain relief, rehydration sachets, vitamin C and a thermometer.",
      price: 6800,
      image: healthBasket,
      imageAlt: "Health products arranged in a basket",
      category: "Health packs",
    },
  ],
};

/** Falls back to the first vendor's menu so a deep link never renders empty. */
export function getVendorMenu(vendorId: string): MenuItem[] {
  return menus[vendorId] ?? menus.fitbites;
}

export function getMenuCategories(items: MenuItem[]): string[] {
  return Array.from(new Set(items.map((item) => item.category)));
}
