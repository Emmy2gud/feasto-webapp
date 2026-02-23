// Types for vendor listing page

export interface Vendor {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  vendorType: 'Student Venture' | 'Official Cafeteria' | 'Campus Shop';
  minOrder: number;
  deliveryFee: number;
  hasMapView?: boolean;
}

export interface FilterState {
  vendorType: 'all' | 'student-ventures' | 'campus-cafeterias' | 'pharmacy-mart';
  priceRange: '$' | '$$' | '$$$' | null;
  minRating: 3.5 | 4.0 | 4.5 | null;
}

export interface SortOption {
  value: string;
  label: string;
}

export type VendorTypeFilter = 'all' | 'student-ventures' | 'campus-cafeterias' | 'pharmacy-mart';
export type PriceRangeFilter = '$' | '$$' | '$$$';
export type RatingFilter = 3.5 | 4.0 | 4.5;
export type SortBy = 'popularity' | 'rating' | 'delivery-time' | 'min-order';
