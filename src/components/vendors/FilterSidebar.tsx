import { FilterPanel } from "./FilterPanel";
import { Button } from "@/components/ui/button";
import type { VendorFilters, VendorKind } from "@/types/vendor";
import { countActiveFilters } from "@/utils/vendorUtils";

type FilterSidebarProps = {
  filters: VendorFilters;
  onChange: (filters: VendorFilters) => void;
  onClear: () => void;
  counts: Record<VendorKind | "all", number>;
};

/** Desktop filter rail: sticky beside the results. */
export function FilterSidebar({ filters, onChange, onClear, counts }: FilterSidebarProps) {
  const activeCount = countActiveFilters(filters);

  return (
    <aside className="hidden md:block">
      <div className="sticky top-[88px] flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-[15px] font-semibold text-ink">
            Filters
            {activeCount > 0 ? (
              <span className="text-[12px] font-medium text-ink-muted">{activeCount}</span>
            ) : null}
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClear}
            disabled={activeCount === 0}
            className="h-8 rounded-md px-2 text-[13px] font-semibold text-primary hover:bg-primary/5 disabled:text-ink-muted/60"
          >
            Clear all
          </Button>
        </div>

        <FilterPanel filters={filters} onChange={onChange} counts={counts} idPrefix="rail" />
      </div>
    </aside>
  );
}
