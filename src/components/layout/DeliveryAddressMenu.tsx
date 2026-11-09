import { useState } from "react";
import { Check, LocateFixed, MapPin } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { savedAddresses } from "@/data/appShell";
import type { SavedAddress } from "@/data/appShell";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

type DeliveryAddressMenuProps = {
  address: SavedAddress;
  onSelect: (address: SavedAddress) => void;
  /** Shown on the trigger: full address on desktop, area only on mobile. */
  triggerClassName?: string;
};

/** Saved addresses with a current-location option, as a popover or a bottom sheet. */
export function DeliveryAddressMenu({
  address,
  onSelect,
  triggerClassName,
}: DeliveryAddressMenuProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  const trigger = (
    <button
      type="button"
      className={cn(
        "group flex min-w-0 items-center gap-2 rounded-md border border-hairline bg-background px-2.5 py-1.5 text-left transition-colors hover:border-primary/40 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        triggerClassName,
      )}
    >
      <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
      <span className="min-w-0">
        <span className="block text-[11px] leading-tight font-medium text-ink-muted">
          Deliver to
        </span>
        <span className="block truncate text-[13px] leading-tight font-semibold text-ink">
          {isDesktop ? `${address.label} · ${address.line}, ${address.area}` : `${address.label} · ${address.area}`}
        </span>
      </span>
    </button>
  );

  const body = (
    <div className="flex flex-col">
      <ul className="flex flex-col">
        {savedAddresses.map((option) => {
          const isSelected = option.id === address.id;
          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => {
                  onSelect(option);
                  setOpen(false);
                }}
                aria-pressed={isSelected}
                className="flex w-full items-start gap-3 border-b border-hairline px-1 py-3 text-left transition-colors hover:bg-surface focus-visible:bg-surface focus-visible:outline-none last:border-b-0"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold text-ink">{option.label}</span>
                  <span className="mt-0.5 block truncate text-[13px] text-ink-muted">
                    {option.line}, {option.area}
                  </span>
                </span>
                {isSelected ? (
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => {
          onSelect(savedAddresses[0]);
          setOpen(false);
        }}
        className="mt-2 flex items-center gap-2 rounded-md bg-surface px-3 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <LocateFixed aria-hidden="true" className="size-4 text-primary" />
        Use my current location
      </button>
    </div>
  );

  if (!isDesktop) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-xl px-5 pb-6">
          <SheetHeader className="px-0">
            <SheetTitle className="font-display text-xl font-bold text-ink">
              Change delivery address
            </SheetTitle>
            <SheetDescription className="text-[13px] text-ink-muted">
              Prices and delivery fees follow the address you pick.
            </SheetDescription>
          </SheetHeader>
          {body}
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent align="start" className="w-[320px] rounded-xl p-3">
        <p className="px-1 pb-1 text-[13px] font-semibold text-ink">Delivery address</p>
        {body}
      </PopoverContent>
    </Popover>
  );
}
