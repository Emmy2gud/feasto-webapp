import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VendorHero } from "@/components/vendors/VendorHero";
import { VendorMenu } from "@/components/vendors/VendorMenu";
import { VendorCartPanel } from "@/components/vendors/VendorCartPanel";
import { ItemDetailSheet } from "@/components/vendors/ItemDetailSheet";
import { useCart } from "@/context/cart-store";
import { getVendorMenu } from "@/data/menuData";
import { vendors } from "@/data/vendorData";
import type { MenuItem } from "@/types/menu";
import { formatNaira } from "@/utils/vendorUtils";
import noResults from "@/assets/illustrations/no-results.svg";

export default function VendorPage() {
  const { id = "" } = useParams();
  const vendor = vendors.find((entry) => entry.id === id);
  const { lines } = useCart();
  const reduceMotion = useReducedMotion();

  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [itemOpen, setItemOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  if (!vendor) {
    return (
      <div className="mx-auto flex w-full max-w-[560px] flex-col items-center px-4 py-16 text-center">
        <img src={noResults} alt="" aria-hidden="true" width={320} height={240} className="h-36 w-auto" />
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">This vendor is not listed</h1>
        <p className="mt-2 max-w-[38ch] text-[14px] leading-relaxed text-ink-muted">
          The link may be old, or the vendor has paused ordering for the day.
        </p>
        <Link
          to="/vendors"
          className="mt-5 rounded-md bg-primary px-4 py-2.5 text-[13px] font-semibold text-primary-foreground"
        >
          Browse vendors
        </Link>
      </div>
    );
  }

  const menu = getVendorMenu(vendor.id);
  const vendorLines = lines.filter((line) => line.vendorId === vendor.id);
  const basketCount = vendorLines.reduce((total, line) => total + line.qty, 0);
  const basketSubtotal = vendorLines.reduce((total, line) => total + line.unitPrice * line.qty, 0);
  const basketTotal = basketSubtotal + (basketCount > 0 ? vendor.deliveryFee : 0);

  function scrollToMenu() {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="pb-24 lg:pb-12">
      <VendorHero vendor={vendor} />

      <div className="mx-auto w-full max-w-[1180px] px-4 pt-4 sm:px-8 sm:pt-5">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-ink-muted">
          <Link to="/vendors" className="transition-colors hover:text-ink">
            Vendors
          </Link>
          <ChevronRight aria-hidden="true" className="size-3.5" />
          <span className="truncate font-medium text-ink">{vendor.name}</span>
        </nav>

        <div className="mt-3 grid min-w-0 gap-6 lg:grid-cols-[1fr_336px] lg:items-start lg:gap-8">
          <VendorMenu
            vendor={vendor}
            items={menu}
            onOpenItem={(item) => {
              setActiveItem(item);
              setItemOpen(true);
            }}
          />

          <aside className="hidden lg:sticky lg:top-[88px] lg:block">
            <VendorCartPanel vendor={vendor} onBrowseMenu={scrollToMenu} />
          </aside>
        </div>
      </div>

  
      {basketCount > 0 ? (
        <motion.div
          initial={reduceMotion ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 border-t border-hairline bg-background/97 px-3 py-2.5 backdrop-blur-md md:hidden"
        >
          <button
            type="button"
            onClick={() => setBasketOpen(true)}
            className="flex h-12 w-full items-center justify-between gap-3 rounded-md bg-secondary px-4 text-white"
          >
            <span className="flex items-center gap-2 text-[14px] font-semibold">
              <ShoppingBag aria-hidden="true" className="size-4" />
              {basketCount} {basketCount === 1 ? "item" : "items"}
            </span>
            <span className="text-[14px] font-semibold">
              View basket · {formatNaira(basketTotal)}
            </span>
          </button>
        </motion.div>
      ) : null}

      <ItemDetailSheet
        vendorId={vendor.id}
        item={activeItem}
        open={itemOpen}
        onOpenChange={setItemOpen}
      />

      <Sheet open={basketOpen} onOpenChange={setBasketOpen}>
        <SheetContent
          side="bottom"
          className="max-h-[88vh] gap-0 rounded-t-xl px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))]"
        >
          <SheetHeader className="px-0 pb-3">
            <SheetTitle className="font-display text-xl font-bold text-ink">
              {vendor.name}
            </SheetTitle>
          </SheetHeader>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <VendorCartPanel vendor={vendor} className="border-0" onBrowseMenu={scrollToMenu} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
