import { Star } from "lucide-react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { priceBands, ratingOptions, vendorKinds } from "@/data/vendorData";
import type { PriceBand, RatingFilter, VendorFilters, VendorKind } from "@/types/vendor";
import { cn } from "@/lib/utils";

type FilterPanelProps = {
  filters: VendorFilters;
  onChange: (filters: VendorFilters) => void;
  counts: Record<VendorKind | "all", number>;
  idPrefix?: string;
};

function GroupTitle({ children }: { children: string }) {
  return <h3 className="text-[13px] font-semibold text-ink">{children}</h3>;
}

/** The filter controls, shared by the desktop rail and the mobile sheet. */
export function FilterPanel({ filters, onChange, counts, idPrefix = "f" }: FilterPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <fieldset className="flex flex-col gap-2 border-0 p-0">
        <legend className="mb-2 p-0">
          <GroupTitle>Vendor type</GroupTitle>
        </legend>

        <RadioGroup
          value={filters.kind}
          onValueChange={(value) => onChange({ ...filters, kind: value as VendorKind | "all" })}
          className="gap-0"
        >
          {[
            { id: "all" as const, label: "All vendors" },
            ...vendorKinds.map((kind) => ({
              id: kind.id,
              label: kind.label,
              icon: kind.icon,
            })),
          ].map((option) => (
            <div
              key={option.id}
              className="flex h-10 items-center gap-2.5 rounded-md px-2 transition-colors hover:bg-surface"
            >
              <RadioGroupItem value={option.id} id={`${idPrefix}-kind-${option.id}`} />
              <Label
                htmlFor={`${idPrefix}-kind-${option.id}`}
                className="min-w-0 flex-1 cursor-pointer truncate text-[14px] font-medium text-ink"
              >
                {option.label}
              </Label>
              <span className="text-[12px] tabular-nums text-ink-muted">{counts[option.id]}</span>
            </div>
          ))}
        </RadioGroup>
      </fieldset>

      <div className="flex items-center justify-between gap-3 border-t border-hairline pt-5">
        <Label htmlFor={`${idPrefix}-open`} className="cursor-pointer text-[14px] font-medium text-ink">
          Open right now
        </Label>
        <Switch
          id={`${idPrefix}-open`}
          checked={filters.openNow}
          onCheckedChange={(checked) => onChange({ ...filters, openNow: checked })}
        />
      </div>

      <fieldset className="flex flex-col gap-2.5 border-0 p-0">
        <legend className="p-0">
          <GroupTitle>Price level</GroupTitle>
        </legend>
        <div className="grid grid-cols-3 gap-1.5">
          {priceBands.map((band) => {
            const isActive = filters.priceBand === band;
            return (
              <button
                key={band}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  onChange({ ...filters, priceBand: isActive ? null : (band as PriceBand) })
                }
                className={cn(
                  "h-9 rounded-md border text-[14px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-hairline text-ink hover:border-primary/40",
                )}
              >
                {band}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-2.5 border-0 p-0">
        <legend className="p-0">
          <GroupTitle>Rating</GroupTitle>
        </legend>
        <div className="flex flex-col gap-1.5">
          {ratingOptions.map((rating) => {
            const isActive = filters.minRating === rating;
            return (
              <button
                key={rating}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  onChange({
                    ...filters,
                    minRating: isActive ? null : (rating as RatingFilter),
                  })
                }
                className={cn(
                  "flex h-9 items-center gap-2 rounded-md border px-2.5 text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isActive
                    ? "border-primary bg-primary/10 font-semibold text-primary"
                    : "border-hairline text-ink hover:border-primary/40",
                )}
              >
                <Star
                  aria-hidden="true"
                  className={cn("size-3.5", isActive ? "fill-primary text-primary" : "text-ink-muted")}
                />
                {rating.toFixed(1)} and up
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
