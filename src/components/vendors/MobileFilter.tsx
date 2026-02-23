import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { FilterContent } from "./FilterContent";
import type { FilterState } from "@/types/vendor";

interface MobileFilterProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
}

export function MobileFilter({ filters, onFilterChange }: MobileFilterProps) {
    return (
        <div className="md:hidden mb-6">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
                        <SlidersHorizontal className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary">Filters</span>
                        {/* Optional: Add a badge count if any filters are active */}
                        {(filters.priceRange || filters.minRating) && (
                            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                                {(filters.priceRange ? 1 : 0) + (filters.minRating ? 1 : 0)}
                            </span>
                        )}
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Filter Vendors</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <FilterContent filters={filters} onFilterChange={onFilterChange} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
