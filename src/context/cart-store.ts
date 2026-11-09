import { createContext, useContext } from "react";

import type { CartLine, MenuExtra, MenuItem } from "@/types/menu";

export type CartContextValue = {
  lines: CartLine[];
  vendorId: string | null;
  count: number;
  subtotal: number;
  addItem: (vendorId: string, item: MenuItem, qty: number, extras: MenuExtra[]) => void;
  increment: (key: string) => void;
  decrement: (key: string) => void;
  removeLine: (key: string) => void;
  clear: () => void;
  /** Price of one item including the selected extras. */
  priceWithExtras: (item: MenuItem, extras: MenuExtra[]) => number;
};

export const CartContext = createContext<CartContextValue | null>(null);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
