import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterPanel } from "./FilterPanel";
import type { VendorFilters, VendorKind } from "@/types/vendor";
import { countActiveFilters } from "@/utils/vendorUtils";

type MobileFilterSheetProps = {
  filters: VendorFilters;
  onApply: (filters: VendorFilters) => void;
  counts: Record<VendorKind | "all", number>;
  /** Result count for the draft selection, used on the apply button. */
  previewCount: (filters: VendorFilters) => number;
  defaultFilters: VendorFilters;
};

/**
 * Bottom sheet for phone filtering. Selections are drafted locally and only
 * applied on "Show vendors", so closing the sheet leaves results untouched.
 */
export function MobileFilterSheet({
  filters,
  onApply,
  counts,
  previewCount,
  defaultFilters,
}: MobileFilterSheetProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<VendorFilters>(filters);

  const activeCount = countActiveFilters(filters);
  const draftCount = previewCount(draft);

  function handleOpenChange(next: boolean) {
    if (next) setDraft(filters);
    setOpen(next);
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-10 gap-2 rounded-md border-hairline px-3 text-[13px] font-semibold text-ink hover:border-primary/40 hover:bg-surface md:hidden"
        >
          <SlidersHorizontal aria-hidden="true" className="size-4" />
          Filters
          {activeCount > 0 ? (
            <span className="grid size-4.5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {activeCount}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>

      <SheetContent
        side="bottom"
        className="max-h-[86vh] gap-0 rounded-t-xl px-5 pt-5 pb-[calc(1rem+env(safe-area-inset-bottom))]"
      >
        <SheetHeader className="px-0">
          <SheetTitle className="font-display text-xl font-bold text-ink">Filters</SheetTitle>
          <SheetDescription className="text-[13px] text-ink-muted">
            {draftCount} {draftCount === 1 ? "vendor" : "vendors"} match these choices.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-4 flex-1 overflow-y-auto pb-4">
          <FilterPanel
            filters={draft}
            onChange={setDraft}
            counts={counts}
            idPrefix="sheet"
          />
        </div>

        <div className="flex items-center gap-2 border-t border-hairline pt-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setDraft(defaultFilters)}
            className="h-11 rounded-md px-3 text-[13px] font-semibold text-ink-muted hover:text-ink"
          >
            Reset
          </Button>
          <Button
            type="button"
            onClick={() => {
              onApply(draft);
              setOpen(false);
            }}
            className="h-11 flex-1 rounded-md text-[14px] font-semibold"
          >
            Show {draftCount} {draftCount === 1 ? "vendor" : "vendors"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
