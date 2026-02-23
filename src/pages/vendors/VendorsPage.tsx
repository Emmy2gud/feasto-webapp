import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { FilterSidebar } from "@/components/vendors/FilterSidebar";
import { MobileFilter } from "@/components/vendors/MobileFilter";
import { VendorCard } from "@/components/vendors/VendorCard";
import { FeaturedBanner } from "@/components/vendors/FeaturedBanner";
import { mockVendors, sortOptions } from "@/data/vendorData";
import type { FilterState, SortBy } from "@/types/vendor";

export function VendorsPage() {
  const [filters, setFilters] = useState<FilterState>({
    vendorType: 'student-ventures',
    priceRange: null,
    minRating: null,
  });
  const [sortBy, setSortBy] = useState<SortBy>('popularity');
  const [currentPage, setCurrentPage] = useState(1);

  // In a real app, this would filter and sort the vendors based on the state
  const filteredVendors = mockVendors;
  const totalPages = 8;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb and Sort */}
        <div className="flex items-center justify-between mb-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Vendors</span>
          </nav>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground md:block hidden">Sort by:</span>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortBy)}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Layout: Sidebar + Content */}
        <div className="flex gap-8">
          {/* Filter Sidebar (Hidden on mobile) */}
          <FilterSidebar filters={filters} onFilterChange={setFilters} />

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Banner */}
            <FeaturedBanner />

            {/* Mobile Filters */}
            <MobileFilter filters={filters} onFilterChange={setFilters} />

            {/* Vendor Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 2}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(2);
                    }}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === 3}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(3);
                    }}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === totalPages}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(totalPages);
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;
