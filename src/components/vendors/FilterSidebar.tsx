import { FilterContent } from "./FilterContent";
import type { FilterState } from "@/types/vendor";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  return (
    <aside className="w-64 shrink-0 hidden md:block">
      <FilterContent filters={filters} onFilterChange={onFilterChange} />
    </aside>
  );
}
