import banner from "@/assets/vendors/Vendor Banner.png"
import { Star, Clock, Truck, Info, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function VendorHeader() {
  const navigate = useNavigate();

  return (
    <header className="relative w-full h-[300px] md:h-[400px] overflow-hidden group">
      {/* Background Image with Parallax-like Effect */}
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Restaurant Banner"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Multi-layered Gradients for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-4 md:left-8 z-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 border border-white/30 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-white">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6">

          {/* Left Side: Name and Badges */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Badge className="bg-[#EE8C2B] hover:bg-[#EE8C2B]/90 text-white border-none px-3 py-1 font-medium">
                Top Rated
              </Badge>
              <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/30 px-3 py-1 font-medium italic">
                Student Venture
              </Badge>
              <Badge variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/30 px-3 py-1 font-medium">
                Free Delivery
              </Badge>
            </div>

            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-xl">
                The Golden Grill
              </h1>
              <p className="max-w-2xl text-base md:text-lg text-gray-200 line-clamp-2 md:line-clamp-none leading-relaxed font-light">
                Authentic campus-style comfort food, artisan burgers, and refreshing seasonal beverages
                crafted for every study break and social gathering.
              </p>
            </div>
          </div>

          {/* Right Side: Quick Stats Card */}
          <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="flex flex-col items-center px-4 border-r border-white/10">
              <div className="flex items-center gap-1.5 text-[#EE8C2B] mb-0.5">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-bold text-lg text-white font-heading">4.8</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">200+ Reviews</p>
            </div>

            <div className="flex flex-col items-center px-4 border-r border-white/10">
              <div className="flex items-center gap-1.5 text-white mb-0.5">
                <Clock className="h-5 w-5 text-sky-400" />
                <span className="font-bold text-lg font-heading">20-30</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">Minutes</p>
            </div>

            <div className="flex flex-col items-center px-4">
              <div className="flex items-center gap-1.5 text-white mb-0.5">
                <Truck className="h-5 w-5 text-emerald-400" />
                <span className="font-bold text-lg font-heading">Free</span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">Delivery</p>
            </div>

            <Button size="icon" variant="ghost" className="rounded-full text-white/70 hover:text-white hover:bg-white/10 ml-2">
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}