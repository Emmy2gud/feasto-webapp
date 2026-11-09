// Menu item model for a vendor page.

export interface MenuExtra {
  id: string;
  label: string;
  /** Naira added to the item price. */
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Naira. */
  price: number;
  image: string;
  imageAlt: string;
  /** Menu section this dish belongs to. */
  category: string;
  isPopular?: boolean;
  extras?: MenuExtra[];
}

export interface CartLine {
  /** Item id plus chosen extras, so the same dish with different extras stays separate. */
  key: string;
  vendorId: string;
  itemId: string;
  name: string;
  image: string;
  /** Item price plus extras at the time it was added. */
  unitPrice: number;
  qty: number;
  extras: string[];
}
