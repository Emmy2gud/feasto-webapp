import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, MapPin, Clock, Truck } from "lucide-react";
import type { Vendor } from "@/types/vendor";
import { formatMinOrder, formatRating, formatCategoryList } from "@/utils/vendorUtils";
import { Link } from "react-router-dom";

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Card className="p-0 overflow-hidden border-neutral-100 hover:border-[#EE8C2B]/30 shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2rem] bg-white group">
      {/* Vendor Image Container */}
      <div className="relative h-56 overflow-hidden ">
        <img
          src={vendor.image}
          alt={vendor.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {vendor.rating >= 4.5 && (
            <Badge className="bg-[#EE8C2B] text-white border-none px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
              Top Rated
            </Badge>
          )}
          {vendor.vendorType === 'Campus Shop' && (
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-neutral-800 border-none px-3 py-1 rounded-full text-[10px] font-bold uppercase">
              Campus Shop
            </Badge>
          )}
        </div>

        {vendor.hasMapView && (
          <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="sm"
              className="bg-white/90 backdrop-blur-md text-neutral-900 hover:bg-white rounded-full gap-2 shadow-lg border-none"
            >
              <MapPin className="h-4 w-4 text-[#EE8C2B]" />
              <span className="text-xs font-bold">Map View</span>
            </Button>
          </div>
        )}
      </div>

      {/* Vendor Info Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-xl text-neutral-900 leading-tight group-hover:text-[#EE8C2B] transition-colors">
              {vendor.name}
            </h3>
            <div className="flex items-center gap-1 bg-neutral-50 px-2 py-1 rounded-lg">
              <Star className="h-4 w-4 fill-[#EE8C2B] text-[#EE8C2B]" />
              <span className="font-bold text-sm text-neutral-900">{formatRating(vendor.rating)}</span>
            </div>
          </div>
          <p className="text-sm text-neutral-500 font-medium">
            {formatCategoryList(vendor.categories)}
          </p>
        </div>

        {/* Dynamic Details */}
        <div className="flex items-center gap-4 py-2 border-y border-neutral-50">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
            <Clock className="h-3.5 w-3.5 text-sky-500" />
            <span>20-30 min</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
            <Truck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Free Delivery</span>
          </div>
        </div>

        {/* Footer info: Min Order & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Min. Order</span>
            <span className="text-sm font-bold text-neutral-900">
              {formatMinOrder(vendor.minOrder)}
            </span>
          </div>
          <Link to={`/vendor/${vendor.id}`}>
            <Button variant="ghost" className="rounded-full h-10 w-10 p-0 text-neutral-400 group-hover:text-[#EE8C2B] group-hover:bg-[#EE8C2B]/5 border border-neutral-100 group-hover:border-[#EE8C2B]/20 transition-all">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
