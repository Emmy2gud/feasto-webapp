import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-store";
import type { Vendor } from "@/types/vendor";
import { formatNaira } from "@/utils/vendorUtils";
import emptyBasket from "@/assets/illustrations/empty-basket.svg";
import { cn } from "@/lib/utils";

type VendorCartPanelProps = {
  vendor: Vendor;
  className?: string;
  onBrowseMenu?: () => void;
};

/** Basket for this vendor: lines, quantity controls, minimum and totals. */
export function VendorCartPanel({ vendor, className, onBrowseMenu }: VendorCartPanelProps) {
  const { lines, increment, decrement, removeLine, clear } = useCart();

  const vendorLines = lines.filter((line) => line.vendorId === vendor.id);
  const otherVendorItems = lines.some((line) => line.vendorId !== vendor.id);
  const subtotal = vendorLines.reduce((total, line) => total + line.unitPrice * line.qty, 0);
  const itemCount = vendorLines.reduce((total, line) => total + line.qty, 0);
  const total = subtotal + (vendorLines.length ? vendor.deliveryFee : 0);
  const shortfall = vendor.minOrder - subtotal;
  const canCheckout = vendorLines.length > 0 && shortfall <= 0;

  return (
    <div className={cn("flex flex-col rounded-lg border border-hairline bg-background", className)}>
      <div className="flex items-center justify-between gap-2 border-b border-hairline px-4 py-3">
        <h2 className="text-[14px] font-semibold text-ink">
          Your basket
          {itemCount > 0 ? <span className="ml-1.5 text-ink-muted">{itemCount}</span> : null}
        </h2>
        {vendorLines.length > 0 ? (
          <button
            type="button"
            onClick={clear}
            className="text-[12px] font-medium text-ink-muted transition-colors hover:text-destructive"
          >
            Clear
          </button>
        ) : null}
      </div>

      {vendorLines.length === 0 ? (
        <div className="flex flex-col items-center px-5 py-8 text-center">
          <img
            src={emptyBasket}
            alt=""
            aria-hidden="true"
            width={320}
            height={240}
            className="h-[104px] w-auto"
          />
          <p className="mt-3 text-[14px] font-semibold text-ink">Your basket is empty</p>
          <p className="mt-1 max-w-[26ch] text-[12px] leading-relaxed text-ink-muted">
            {otherVendorItems
              ? "It holds items from another vendor. Adding from here starts a new basket."
              : `Add a dish from ${vendor.name} to start an order.`}
          </p>
          {onBrowseMenu ? (
            <Button
              type="button"
              variant="outline"
              onClick={onBrowseMenu}
              className="mt-4 h-9 rounded-md border-hairline text-[13px] font-semibold"
            >
              Browse the menu
            </Button>
          ) : null}
        </div>
      ) : (
        <>
          <ul className="max-h-[46vh] overflow-y-auto px-4 lg:max-h-[42vh]">
            {vendorLines.map((line) => (
              <li key={line.key} className="flex gap-3 border-b border-hairline py-3 last:border-b-0">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-md bg-surface-strong">
                  {line.image ? (
                    <img
                      src={line.image}
                      alt=""
                      width={112}
                      height={112}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover"
                    />
                  ) : null}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-[13px] leading-snug font-semibold text-ink">
                    {line.name}
                  </p>
                  {line.extras.length ? (
                    <p className="mt-0.5 line-clamp-1 text-[11px] text-ink-muted">
                      {line.extras.join(", ")}
                    </p>
                  ) : null}

                  <div className="mt-1.5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 rounded-sm border border-hairline">
                      <button
                        type="button"
                        onClick={() => (line.qty === 1 ? removeLine(line.key) : decrement(line.key))}
                        aria-label={`Reduce ${line.name}`}
                        className="grid size-7 place-items-center rounded-sm text-ink transition-colors hover:bg-surface"
                      >
                        {line.qty === 1 ? (
                          <Trash2 aria-hidden="true" className="size-3.5 text-destructive" />
                        ) : (
                          <Minus aria-hidden="true" className="size-3.5" />
                        )}
                      </button>
                      <span className="w-6 text-center text-[12px] font-semibold text-ink">
                        {line.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(line.key)}
                        aria-label={`Add another ${line.name}`}
                        className="grid size-7 place-items-center rounded-sm text-ink transition-colors hover:bg-surface"
                      >
                        <Plus aria-hidden="true" className="size-3.5" />
                      </button>
                    </div>

                    <span className="text-[13px] font-semibold text-ink">
                      {formatNaira(line.unitPrice * line.qty)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-hairline px-4 py-3">
            <dl className="flex flex-col gap-1.5 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Subtotal</dt>
                <dd className="font-medium text-ink">{formatNaira(subtotal)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Delivery</dt>
                <dd className="font-medium text-ink">{formatNaira(vendor.deliveryFee)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-hairline pt-2 text-[15px]">
                <dt className="font-semibold text-ink">Total</dt>
                <dd className="font-semibold text-ink">{formatNaira(total)}</dd>
              </div>
            </dl>

            {shortfall > 0 ? (
              <p className="mt-2 rounded-sm bg-surface px-2.5 py-2 text-[12px] text-ink-muted">
                Add {formatNaira(shortfall)} more to reach the {formatNaira(vendor.minOrder)}{" "}
                minimum.
              </p>
            ) : null}

            <Button
              asChild={canCheckout}
              disabled={!canCheckout}
              className="mt-3 h-11 w-full rounded-md text-[14px] font-semibold disabled:opacity-60"
            >
              {canCheckout ? <Link to="/checkout">Go to checkout</Link> : <span>Go to checkout</span>}
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
