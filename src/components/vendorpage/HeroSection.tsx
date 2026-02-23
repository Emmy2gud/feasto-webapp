import { Button } from "@/components/ui/button";
import pizza from "@/assets/vendors/pizza.png";
import { TrendingUp, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative px-4 py-16 lg:py-32 md:px-8 lg:px-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#EE8C2B]/5 blur-[120px] -z-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] -z-10 rounded-full animate-pulse delay-700"></div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-left-8 duration-700 z-10">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-[#EE8C2B]/10 border border-[#EE8C2B]/20 px-3 py-1.5 md:px-4 md:py-2">
              <span className="flex h-2 w-2 rounded-full bg-[#EE8C2B] animate-pulse"></span>
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#EE8C2B]">
                New Campus Partners Invited
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-black leading-[1] md:leading-[0.9] tracking-tighter text-neutral-900">
                Scale Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EE8C2B] to-[#F5A623]">Culinary Brand</span>
              </h1>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-500 max-w-lg italic">
                The leading marketplace connecting campus entrepreneurs and local restaurants with thousands of hungry students.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:pt-4">
              <Button
                asChild
                size="lg"
                className="h-16 w-full sm:w-auto rounded-[2rem] bg-[#EE8C2B] px-10 text-base font-black text-white shadow-2xl shadow-[#EE8C2B]/30 hover:bg-[#D67B22] transition-all hover:-translate-y-1 active:translate-y-0"
              >
                <Link to="/vendor-form">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 w-full sm:w-auto rounded-[2rem] border-2 border-neutral-200 bg-white px-10 text-base font-black text-neutral-900 hover:bg-neutral-50 transition-all active:scale-95"
              >
                View Pricing
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </div>
                <span className="text-xs font-black text-neutral-400">Verified Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-sky-50 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-sky-500" />
                </div>
                <span className="text-xs font-black text-neutral-400">Instant Payouts</span>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative flex items-center justify-center lg:justify-end animate-in fade-in slide-in-from-right-12 duration-1000 mt-8 lg:mt-0">
            <div className="relative z-10 w-full max-w-[500px] lg:max-w-none">
              {/* Main Decorative Frame */}
              <div className="relative overflow-hidden rounded-[3rem] md:rounded-[5rem] border-[8px] md:border-[12px] border-white shadow-2xl shadow-black/10 transition-transform duration-700 hover:scale-[1.02]">
                <img
                  src={pizza}
                  alt="Delicious food and vendor lifestyle"
                  className="h-auto w-full object-cover"
                />

                {/* Floating Info Badge - Responsive positioning */}
                <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 flex items-center gap-4 rounded-2xl sm:rounded-3xl border border-white/50 bg-white/80 px-4 py-3 sm:px-6 sm:py-5 backdrop-blur-2xl shadow-2xl animate-bounce-slow">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-100 shadow-inner flex">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] text-[#EE8C2B]">
                      Monthly Insight
                    </span>
                    <span className="text-sm sm:text-lg font-black text-neutral-900 leading-tight">+140% Order Growth</span>
                  </div>
                </div>
              </div>

              {/* Decorative accent behind image */}
              <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-[#EE8C2B]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 md:w-60 md:h-60 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
