import { useState } from "react";
import { Check, Plus } from "lucide-react";

import { LoadingImage } from "@/components/system/LoadingImage";
import { useCart } from "@/context/cart-store";
import { getMenuCategories } from "@/data/menuData";
import type { MenuItem } from "@/types/menu";
import type { Vendor } from "@/types/vendor";
import { cn } from "@/lib/utils";

type VendorMenuProps = {
  vendor: Vendor;
  items: MenuItem[];
  onOpenItem: (item: MenuItem) => void;
};


export function VendorMenu({ vendor, items, onOpenItem }: VendorMenuProps) {
  const { addItem } = useCart();
  const [section, setSection] = useState("Popular");
  const [addedId, setAddedId] = useState<string | null>(null);

  const sections = ["Popular", ...getMenuCategories(items)];
  const visibleItems =
    section === "Popular" ? items.filter((item) => item.isPopular) : items.filter((item) => item.category === section);

  function quickAdd(item: MenuItem) {
    addItem(vendor.id, item, 1, []);
    setAddedId(item.id);
    window.setTimeout(() => setAddedId((current) => (current === item.id ? null : current)), 1200);
  }

  return (
    <section id="menu" aria-labelledby="menu-heading" className="min-w-0 scroll-mt-24">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="menu-heading" className="font-display text-xl font-bold text-ink sm:text-2xl">
          Menu
        </h2>
        <p className="text-[12px] text-ink-muted sm:text-[13px]">
          {items.length} {items.length === 1 ? "dish" : "dishes"}
        </p>
      </div>

      <div className="mt-3 w-full min-w-0 overflow-x-auto no-scrollbar">
        <div role="tablist" aria-label="Menu sections" className="flex w-max gap-1.5">
          {sections.map((label) => {
            const isActive = section === label;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSection(label)}
                className={cn(
                  "h-9 rounded-md border px-3 text-[13px] font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isActive
                    ? "border-secondary bg-secondary text-white"
                    : "border-hairline text-ink hover:border-primary/40",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="mt-3 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
        {visibleItems.map((item) => {
          const isAdded = addedId === item.id;

          return (
            <li key={item.id} className="h-full">
              <article className="flex h-full gap-3 rounded-lg border border-hairline bg-background p-2.5 transition-colors hover:border-primary/40">
                <button
                  type="button"
                  onClick={() => onOpenItem(item)}
                  aria-label={`View ${item.name}`}
                  className="relative size-[86px] shrink-0 overflow-hidden rounded-md bg-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 sm:size-[96px]"
                >
                  <LoadingImage
                    src={item.image}
                    alt={item.imageAlt}
                    width={192}
                    height={192}
                    className="absolute inset-0"
                  />
                </button>

                <div className="flex min-w-0 flex-1 flex-col">
                  <button
                    type="button"
                    onClick={() => onOpenItem(item)}
                    className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  >
                    <h3 className="line-clamp-2 text-[14px] leading-snug font-semibold text-ink">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-ink-muted">
                      {item.description}
                    </p>
                  </button>

                  <div className="mt-auto flex items-center justify-between gap-2 pt-1.5">
                    <span className="text-[14px] font-semibold text-ink">
                      ₦{item.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => quickAdd(item)}
                      aria-label={`Add ${item.name} to basket`}
                      className={cn(
                        "grid size-8 place-items-center rounded-md transition-all active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                        isAdded
                          ? "bg-secondary text-white"
                          : "bg-primary text-primary-foreground hover:bg-primary/90",
                      )}
                    >
                      {isAdded ? (
                        <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                      ) : (
                        <Plus aria-hidden="true" className="size-4" strokeWidth={2.5} />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {visibleItems.length === 0 ? (
        <p className="mt-4 rounded-lg border border-dashed border-hairline bg-surface/60 px-4 py-8 text-center text-[13px] text-ink-muted">
          Nothing in {section} right now. Try another section.
        </p>
      ) : null}
    </section>
  );
}
