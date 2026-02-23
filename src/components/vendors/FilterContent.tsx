import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import type { FilterState, VendorTypeFilter, PriceRangeFilter, RatingFilter } from "@/types/vendor";

interface FilterContentProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
}

export function FilterContent({ filters, onFilterChange }: FilterContentProps) {
    const handleVendorTypeChange = (value: string) => {
        onFilterChange({ ...filters, vendorType: value as VendorTypeFilter });
    };

    const handlePriceRangeChange = (value: PriceRangeFilter | null) => {
        onFilterChange({ ...filters, priceRange: value });
    };

    const handleRatingChange = (value: RatingFilter | null) => {
        onFilterChange({ ...filters, minRating: value });
    };

    return (
        <div className="space-y-8">
            {/* Vendor Type */}
            <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base">Vendor Type</h3>
                <RadioGroup value={filters.vendorType} onValueChange={handleVendorTypeChange}>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="student-ventures" id="student-ventures" />
                        <Label
                            htmlFor="student-ventures"
                            className="text-sm font-normal cursor-pointer"
                        >
                            Student Ventures
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="campus-cafeterias" id="campus-cafeterias" />
                        <Label
                            htmlFor="campus-cafeterias"
                            className="text-sm font-normal cursor-pointer"
                        >
                            Campus Cafeterias
                        </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                        <RadioGroupItem value="pharmacy-mart" id="pharmacy-mart" />
                        <Label
                            htmlFor="pharmacy-mart"
                            className="text-sm font-normal cursor-pointer"
                        >
                            Pharmacy & Mart
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base">Price Range</h3>
                <div className="flex gap-3">
                    {(['$', '$$', '$$$'] as PriceRangeFilter[]).map((price) => (
                        <Button
                            key={price}
                            variant={filters.priceRange === price ? "default" : "outline"}
                            size="sm"
                            onClick={() =>
                                handlePriceRangeChange(filters.priceRange === price ? null : price)
                            }
                            className={
                                filters.priceRange === price
                                    ? "bg-primary text-white hover:bg-primary/90"
                                    : "border-2 hover:border-primary"
                            }
                        >
                            {price}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base">Rating</h3>
                <div className="space-y-3">
                    {([4.5, 4.0, 3.5] as RatingFilter[]).map((rating) => (
                        <button
                            key={rating}
                            onClick={() =>
                                handleRatingChange(filters.minRating === rating ? null : rating)
                            }
                            className={`flex items-center gap-2 text-sm w-full text-left p-2 rounded-md transition-colors ${filters.minRating === rating
                                    ? "bg-primary/10 text-primary"
                                    : "hover:bg-muted"
                                }`}
                        >
                            <Star
                                className={`h-4 w-4 ${filters.minRating === rating ? "fill-primary text-primary" : "text-primary"
                                    }`}
                            />
                            <span className="font-medium">{rating.toFixed(1)} & up</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Join Campus Prime */}
            <div className="bg-muted rounded-lg p-5 space-y-4">
                <h3 className="font-bold text-foreground text-base">Join Campus Prime</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    Get unlimited $0 delivery fees on every order.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                    Upgrade Now
                </Button>
            </div>
        </div>
    );
}
