import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function FeaturedBanner() {
  return (
    <div className="relative h-56 rounded-xl overflow-hidden mb-8 md:text-left text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg"
          alt="Featured Deal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 space-y-4 ">
        {/* Badge */}
        <Badge className="w-fit bg-primary text-white hover:bg-primary/90 uppercase text-xs font-bold tracking-wide  md:m-0 m-auto">
          EXCLUSIVE STUDENT DEAL
        </Badge>

        {/* Heading */}
        <h2 className="md:text-4xl text-2xl font-bold text-white max-w-md leading-tight mt-5">
          50% Off All Night Study Snacks!
        </h2>

        {/* CTA Button */}
        <Button className="w-fit bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg px-6 md:m-0 m-auto">
          Order Now
        </Button>
      </div>
    </div>
  );
}
