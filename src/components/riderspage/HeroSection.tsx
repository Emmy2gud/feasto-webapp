import { Button } from "@/components/ui/button";
import dispatch from "@/assets/riders/dispatch2.jpg";

import { Bike, Dot, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-5 py-2.5">
              <Dot className="text-sm text-primary" />
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary">
                Campus Exclusive
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold leading-[1.1] sm:leading-[1] tracking-[-0.05em]">
              Earn as You
              <br />
              <span className="text-primary">Move Around Campus</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-medium leading-[1.625] text-slate-500">
              Join the premier marketplace connecting hungry students
              <br className="hidden lg:block" />
              with local culinary talent. We handle the logistics, you focus
              <br className="hidden lg:block" />
              on the flavor.
            </p>

            {/* CTA and Info Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
              <Button
                className="h-14 sm:h-16 w-full sm:w-auto rounded-2xl sm:rounded-3xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
              >
                Start Riding
              </Button>
              <div className="flex items-center gap-3 px-2 sm:px-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bike className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-600 leading-tight">
                  No vehicle insurance <br className="hidden sm:block" /> required for cyclists.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative flex items-center justify-center gap-0 lg:justify-end">
            {/* Main Shelf Image */}
            <div className="relative z-10 overflow-hidden rounded-[64px] border-[16px] border-white shadow-[0px_50px_100px_rgba(0,0,0,0.25)]">
              <img
                src={dispatch}
                alt="Professional Chef and Store Shelves"
                className="h-auto w-full max-w-[576px] object-cover"
              />

              {/* Quality Assurance Badge */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-auto md:w-[380px] flex items-center gap-4 rounded-2xl sm:rounded-3xl border border-white bg-white/95 p-4 sm:px-6 sm:py-4 backdrop-blur-md shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-200">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary">
                    Active Growth
                  </span>
                  <span className="text-sm sm:text-lg font-bold text-foreground">+140% Orders this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
