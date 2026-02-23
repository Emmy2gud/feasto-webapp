import { MaterialIcon } from "@/components/ui/material-icon";
import { Badge } from "@/components/ui/badge";
import vendorAmaka from "@/assets/images/vendor-amaka.jpg";
import vendorBrewBar from "@/assets/images/vendor-brew-bar.jpg";
import vendorFitbites from "@/assets/images/vendor-fitbites.jpg";

const vendors = [
  {
    name: "Amaka's Gourmet",
    description: "Signature Jollof & Plantain specials by\nthe 400L Culinary Star.",
    image: vendorAmaka,
    rating: "4.9",
    badge: "Most Popular",
    badgeVariant: "default" as const,
  },
  {
    name: "The Brew Bar",
    description: "Artisanal coffees and study fuel snacks\ndelivered to your desk.",
    image: vendorBrewBar,
    rating: "4.8",
    badge: "Fast Delivery",
    badgeVariant: "success" as const,
  },
  {
    name: "FitBites Daily",
    description: "Healthy meal prep for active students\nwho never skip a workout.",
    image: vendorFitbites,
    rating: "5.0",
    badge: "New Entry",
    badgeVariant: "info" as const,
  },
];

export function TopVendorsSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary">
              The Elite List
            </span>
            <h2 className="text-5xl font-extrabold tracking-[-0.025em] text-foreground">
              Top Student Vendors
            </h2>
          </div>

          <button className="flex items-center gap-2 text-base font-bold text-foreground hover:gap-3 transition-all">
            <span>View All Creators</span>
            <MaterialIcon icon="trending_flat" className="text-2xl" />
          </button>
        </div>

        {/* Vendor Cards Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-[40px] border border-white bg-white shadow-[0px_25px_50px_rgba(226,232,240,0.6)]"
            >
              {/* Image with Rating Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-full w-full object-cover"
                />

                {/* Rating Badge */}
                <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] backdrop-blur-sm">
                  <MaterialIcon icon="star" className="text-sm text-[#eab308]" filled />
                  <span className="text-xs font-bold text-foreground">{vendor.rating}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-8 p-10">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-extrabold text-foreground">{vendor.name}</h3>
                  <p className="whitespace-pre-line text-base font-normal leading-[1.625] text-[hsl(var(--slate-500))]">
                    {vendor.description}
                  </p>
                </div>

                {/* Badge and Favorite */}
                <div className="flex items-center justify-between">
                  <Badge
                   
                    className={`text-xs font-bold uppercase tracking-[0.6px] ${vendor.badgeVariant === "default" ? "bg-primary" : vendor.badgeVariant === "success" ? "bg-green-500" : "bg-blue-500"}`}
                  >
                    {vendor.badge}
                  </Badge>

                  <button className="text-slate-300 hover:text-primary transition-colors">
                    <MaterialIcon icon="favorite" className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
