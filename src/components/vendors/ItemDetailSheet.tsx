import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-store";
import type { MenuExtra, MenuItem } from "@/types/menu";
import { formatNaira } from "@/utils/vendorUtils";
import { cn } from "@/lib/utils";

type ItemDetailSheetProps = {
  vendorId: string;
  item: MenuItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function DetailBody({vendorId, item, onDone,}: {
  vendorId: string;
  item: MenuItem;
  onDone: () => void;
}) {
  const { addItem, priceWithExtras } = useCart();
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState<MenuExtra[]>([]);

  const unitPrice = priceWithExtras(item, selected);

  function toggleExtra(extra: MenuExtra) {
    setSelected((current) =>
      current.some((entry) => entry.id === extra.id)
        ? current.filter((entry) => entry.id !== extra.id)
        : [...current, extra],
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface-strong sm:aspect-[16/9]">
        <img
          src={item.image}
          alt={item.imageAlt}
          width={800}
          height={600}
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-4">
        <SheetHeader className="gap-1 px-0 pb-3">
          <SheetTitle className="font-display text-[21px] leading-snug font-bold text-ink">
            {item.name}
          </SheetTitle>
          <SheetDescription className="text-[13px] leading-relaxed text-ink-muted">
            {item.description}
          </SheetDescription>
        </SheetHeader>

        {item.extras?.length ? (
          <fieldset className="mt-1 border-0 p-0">
            <legend className="mb-2 text-[13px] font-semibold text-ink">Add extras</legend>
            <div className="flex flex-col gap-1.5">
              {item.extras.map((extra) => {
                const isOn = selected.some((entry) => entry.id === extra.id);
                return (
                  <label
                    key={extra.id}
                    className={cn(
                      "flex h-11 cursor-pointer items-center gap-2.5 rounded-md border px-3 text-[13px] transition-colors",
                      isOn
                        ? "border-primary/60 bg-primary/5 text-ink"
                        : "border-hairline text-ink hover:border-primary/35",
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isOn}
                      onChange={() => toggleExtra(extra)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-4 place-items-center rounded-xs border",
                        isOn ? "border-primary bg-primary text-primary-foreground" : "border-hairline",
                      )}
                    >
                      {isOn ? <Check className="size-3" strokeWidth={3} /> : null}
                    </span>
                    <span className="flex-1">{extra.label}</span>
                    <span className="text-ink-muted">+{formatNaira(extra.price)}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-[13px] text-ink-muted">Quantity</span>
          <div className="flex items-center gap-1 rounded-md border border-hairline p-1">
            <button
              type="button"
              onClick={() => setQty((current) => Math.max(1, current - 1))}
              disabled={qty === 1}
              aria-label="Decrease quantity"
              className="grid size-8 place-items-center rounded-sm text-ink transition-colors hover:bg-surface disabled:text-ink-muted/50"
            >
              <Minus aria-hidden="true" className="size-4" />
            </button>
            <span aria-live="polite" className="w-7 text-center text-[14px] font-semibold text-ink">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((current) => current + 1)}
              aria-label="Increase quantity"
              className="grid size-8 place-items-center rounded-sm text-ink transition-colors hover:bg-surface"
            >
              <Plus aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline p-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
        <Button
          type="button"
          onClick={() => {
            addItem(vendorId, item, qty, selected);
            onDone();
          }}
          className="h-12 w-full justify-between rounded-md px-4 text-[14px] font-semibold"
        >
          <span>Add to basket</span>
          <span>{formatNaira(unitPrice * qty)}</span>
        </Button>
      </div>
    </div>
  );
}


export function ItemDetailSheet({ vendorId, item, open, onOpenChange }: ItemDetailSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="max-h-[92vh] gap-0 rounded-t-xl p-0 sm:mx-auto sm:max-w-[520px] sm:rounded-xl"
      >
        {item ? (
          <DetailBody
            key={item.id}
            vendorId={vendorId}
            item={item}
            onDone={() => onOpenChange(false)}
          />
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
