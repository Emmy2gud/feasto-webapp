import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";

import { CartContext, type CartContextValue } from "./cart-store";
import { getVendorMenu } from "@/data/menuData";
import type { CartLine, MenuExtra, MenuItem } from "@/types/menu";

const STORAGE_KEY = "feasto.cart.v1";

/**
 * Demo basket seeded on the very first visit so the shell, vendor page and
 * checkout have something to show. An emptied basket is respected afterwards.
 */
const seedLines: CartLine[] = getVendorMenu("fitbites")
  .slice(0, 2)
  .map((item) => ({
    key: item.id,
    vendorId: "fitbites",
    itemId: item.id,
    name: item.name,
    image: item.image,
    unitPrice: item.price,
    qty: 1,
    extras: [],
  }));

function readStoredCart(): CartLine[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return seedLines;
    const parsed = JSON.parse(raw) as CartLine[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return seedLines;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(readStoredCart);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage can be unavailable in private modes; the cart still works in memory.
    }
  }, [lines]);

  const priceWithExtras = useCallback(
    (item: MenuItem, extras: MenuExtra[]) =>
      extras.reduce((total, extra) => total + extra.price, item.price),
    [],
  );

  const addItem = useCallback(
    (vendorId: string, item: MenuItem, qty: number, extras: MenuExtra[]) => {
      const extrasLabel = extras.map((extra) => extra.label);
      const key = [item.id, ...extras.map((extra) => extra.id).sort()].join("|");
      const unitPrice = priceWithExtras(item, extras);

      setLines((current) => {
        // One order covers one vendor, so a new vendor replaces the basket.
        const base = current.filter((line) => line.vendorId === vendorId);
        const existing = base.find((line) => line.key === key);

        if (existing) {
          return base.map((line) =>
            line.key === key ? { ...line, qty: line.qty + qty } : line,
          );
        }

        return [
          ...base,
          {
            key,
            vendorId,
            itemId: item.id,
            name: item.name,
            image: item.image,
            unitPrice,
            qty,
            extras: extrasLabel,
          },
        ];
      });
    },
    [priceWithExtras],
  );

  const increment = useCallback((key: string) => {
    setLines((current) =>
      current.map((line) => (line.key === key ? { ...line, qty: line.qty + 1 } : line)),
    );
  }, []);

  const decrement = useCallback((key: string) => {
    setLines((current) =>
      current
        .map((line) => (line.key === key ? { ...line, qty: line.qty - 1 } : line))
        .filter((line) => line.qty > 0),
    );
  }, []);

  const removeLine = useCallback((key: string) => {
    setLines((current) => current.filter((line) => line.key !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((total, line) => total + line.qty, 0);
    const subtotal = lines.reduce((total, line) => total + line.unitPrice * line.qty, 0);

    return {
      lines,
      vendorId: lines[0]?.vendorId ?? null,
      count,
      subtotal,
      addItem,
      increment,
      decrement,
      removeLine,
      clear,
      priceWithExtras,
    };
  }, [lines, addItem, increment, decrement, removeLine, clear, priceWithExtras]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
