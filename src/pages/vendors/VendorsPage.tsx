import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";

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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { FeaturedStrip } from "@/components/vendors/FeaturedStrip";
import { FilterSidebar } from "@/components/vendors/FilterSidebar";
import { MobileFilterSheet } from "@/components/vendors/MobileFilterSheet";
import { VendorCard } from "@/components/vendors/VendorCard";
import { VENDORS_PAGE_SIZE, sortOptions, vendors } from "@/data/vendorData";
import noResultsIllustration from "@/assets/illustrations/no-results.svg";
import type { VendorFilters, VendorSort } from "@/types/vendor";
import {
  countActiveFilters,
  countByKind,
  filterVendors,
  getPageCount,
  paginate,
  sortVendors,
} from "@/utils/vendorUtils";
import { cn } from "@/lib/utils";

const defaultFilters: VendorFilters = {
  kind: "all",
  priceBand: null,
  minRating: null,
  openNow: false,
};

export function VendorsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<VendorFilters>(defaultFilters);
  const [sortBy, setSortBy] = useState<VendorSort>("reviewed");

  const query = searchParams.get("q") ?? "";
  const requestedPage = Number(searchParams.get("page") ?? 1) || 1;

  const counts = useMemo(() => countByKind(vendors, filters, query), [filters, query]);
  const results = useMemo(
    () => sortVendors(filterVendors(vendors, filters, query), sortBy),
    [filters, query, sortBy],
  );

  const pageCount = getPageCount(results.length, VENDORS_PAGE_SIZE);
  const currentPage = Math.min(Math.max(1, requestedPage), pageCount);
  const pageVendors = paginate(results, currentPage, VENDORS_PAGE_SIZE);

  function updatePage(page: number) {
    const next = new URLSearchParams(searchParams);
    if (page <= 1) next.delete("page");
    else next.set("page", String(page));
    setSearchParams(next);
  }

  function applyFilters(next: VendorFilters) {
    setFilters(next);
    updatePage(1);
  }

  function clearSearch() {
    const next = new URLSearchParams(searchParams);
    next.delete("q");
    next.delete("page");
    setSearchParams(next);
  }

  function pageHref(page: number) {
    const next = new URLSearchParams(searchParams);
    if (page <= 1) next.delete("page");
    else next.set("page", String(page));
    const search = next.toString();
    return search ? `/vendors?${search}` : "/vendors";
  }

  const activeFilterCount = countActiveFilters(filters);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 pt-4 pb-12 sm:px-8 lg:px-12 lg:pt-6">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-ink-muted">
        <Link to="/" className="transition-colors hover:text-ink">
          Home
        </Link>
        <ChevronRight aria-hidden="true" className="size-3.5" />
        <span className="font-medium text-ink">Vendors</span>
      </nav>

      <div className="mt-2.5 flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-2xl font-bold text-balance text-ink sm:text-3xl">
            {query ? `Results for “${query}”` : "Vendors near you"}
          </h1>
          <p className="mt-1 text-[13px] text-ink-muted">
            {results.length} {results.length === 1 ? "vendor" : "vendors"}
            {activeFilterCount > 0
              ? ` · ${activeFilterCount} ${activeFilterCount === 1 ? "filter" : "filters"} applied`
              : ""}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <MobileFilterSheet
            filters={filters}
            onApply={applyFilters}
            counts={counts}
            previewCount={(draft) => filterVendors(vendors, draft, query).length}
            defaultFilters={defaultFilters}
          />

          <Select value={sortBy} onValueChange={(value) => setSortBy(value as VendorSort)}>
            <SelectTrigger
              aria-label="Sort vendors"
              className="h-10 w-[168px] rounded-md border-hairline text-[13px] font-medium text-ink"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="end" className="rounded-lg">
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="text-[13px]">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {query ? (
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-surface px-2 py-1 text-[13px] text-ink">
            <span className="truncate">Search: {query}</span>
            <button
              type="button"
              onClick={clearSearch}
              aria-label="Clear search"
              className="rounded-sm p-0.5 text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            >
              <X aria-hidden="true" className="size-3.5" />
            </button>
          </span>
        </div>
      ) : null}

      {activeFilterCount === 0 && !query ? (
        <div className="mt-4">
          <FeaturedStrip vendor={vendors.find((vendor) => vendor.id === "amakas") ?? vendors[0]} />
        </div>
      ) : null}

      <div className="mt-5 grid gap-6 md:grid-cols-[248px_1fr] md:items-start md:gap-8">
        <FilterSidebar
          filters={filters}
          onChange={applyFilters}
          onClear={() => applyFilters(defaultFilters)}
          counts={counts}
        />

        <div>
          {results.length === 0 ? (
            <div className="rounded-xl border border-dashed border-hairline bg-surface/60 px-6 py-10 text-center">
              <img
                src={noResultsIllustration}
                alt=""
                aria-hidden="true"
                width={320}
                height={240}
                className="mx-auto h-[132px] w-auto"
              />
              <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                No vendors match these choices
              </h2>
              <p className="mx-auto mt-2 max-w-[46ch] text-[14px] leading-relaxed text-ink-muted">
                {query && activeFilterCount > 0
                  ? `Nothing near you matches “${query}” with the filters you picked.`
                  : query
                    ? `Nothing near you matches “${query}”. Check the spelling or try a cuisine instead.`
                    : "Try a wider price level or a lower rating."}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {activeFilterCount > 0 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => applyFilters(defaultFilters)}
                    className="h-10 rounded-md border-hairline text-[13px] font-semibold"
                  >
                    Clear filters
                  </Button>
                ) : null}
                {query ? (
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={clearSearch}
                    className="h-10 rounded-md text-[13px] font-semibold text-primary hover:bg-primary/5"
                  >
                    Clear search
                  </Button>
                ) : null}
              </div>
            </div>
          ) : (
            <>
              <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3">
                {pageVendors.map((vendor, index) => (
                  <li key={vendor.id} className="h-full">
                    <VendorCard vendor={vendor} priority={index < 3} />
                  </li>
                ))}
              </ul>

              {pageCount > 1 ? (
                <Pagination className="mt-7 justify-start">
                  <PaginationContent className="gap-1">
                    <PaginationItem>
                      <PaginationPrevious
                        href={pageHref(Math.max(1, currentPage - 1))}
                        onClick={(event) => {
                          event.preventDefault();
                          updatePage(Math.max(1, currentPage - 1));
                        }}
                        aria-disabled={currentPage === 1}
                        className={cn(
                          "h-9 rounded-md px-2.5 text-[13px]",
                          currentPage === 1 && "pointer-events-none opacity-40",
                        )}
                      />
                    </PaginationItem>

                    {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href={pageHref(page)}
                          isActive={page === currentPage}
                          onClick={(event) => {
                            event.preventDefault();
                            updatePage(page);
                          }}
                          className={cn(
                            "size-9 rounded-md text-[13px] font-semibold",
                            page === currentPage
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-transparent text-ink hover:border-hairline hover:bg-surface",
                          )}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href={pageHref(Math.min(pageCount, currentPage + 1))}
                        onClick={(event) => {
                          event.preventDefault();
                          updatePage(Math.min(pageCount, currentPage + 1));
                        }}
                        aria-disabled={currentPage === pageCount}
                        className={cn(
                          "h-9 rounded-md px-2.5 text-[13px]",
                          currentPage === pageCount && "pointer-events-none opacity-40",
                        )}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VendorsPage;
