import { MaterialIcon } from "@/components/ui/material-icon";
import { Button } from "@/components/ui/button";
import shelfProducts from "@/assets/images/shelf-products.png";
import burger from "@/assets/images/burger.png";
import sushi from "@/assets/images/sushi.png";

export function HeroSection() {
  return (
    <section className="relative px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-5 py-2.5">
              <MaterialIcon icon="auto_awesome" className="text-sm text-primary" />
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-primary">
                Premium Campus Service
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.1] sm:leading-[1] tracking-[-0.05em] lg:text-[96px]">
              Fuel Your
              <br />
              <span className="text-primary">Campus Life</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg md:text-xl font-medium leading-[1.625] text-[hsl(var(--slate-500))]">
              The fastest delivery for hungry scholars. From lecture
              <br className="hidden lg:block" />
              halls to hostel doors, we bring gourmet flavors
              <br className="hidden lg:block" />
              straight to your study spot.
            </p>

            {/* Search Input */}
            <div className=" relative flex items-center gap-2 rounded-[40px] border border-slate-200 bg-slate-50 p-4 shadow-[0px_30px_60px_rgba(0,0,0,0.08)]">
              <div className="flex flex-1 items-center gap-4 pl-4">
                <MaterialIcon icon="location_on" className="text-2xl text-primary" />
                <input
                  type="text"
                  placeholder="Enter Hostel or Lecture Hall..."
                  className="w-full flex-1 bg-transparent text-base sm:text-lg font-medium text-[hsl(var(--slate-400))] placeholder:text-[hsl(var(--slate-400))] focus:outline-none"
                />
              </div>
              <Button
                className="h-14 sm:h-16 rounded-full bg-primary px-6 sm:px-8 text-sm sm:text-base font-bold text-white shadow-[0px_8px_10px_rgba(238,140,43,0.3),0px_20px_25px_rgba(238,140,43,0.2)] hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>

            {/* Quick Drops */}
            <div className="hidden items-center gap-2 text-xs font-bold md:flex">
              <span className="text-[hsl(var(--slate-400))]">Quick Drops:</span>
              <span className="text-primary">Hall B Lounge</span>
              <span className="text-primary">Eng. Block 3</span>
              <span className="text-primary">Main Library</span>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="relative flex items-center justify-center gap-0 lg:justify-end">
            {/* Main Shelf Image */}
            <div className="relative z-10 overflow-hidden rounded-[64px] border-[16px] border-white shadow-[0px_50px_100px_rgba(0,0,0,0.25)]">
              <img
                src={shelfProducts}
                alt="Professional Chef and Store Shelves"
                className="h-auto w-full max-w-full lg:max-w-[576px] object-cover"
              />

              {/* Quality Assurance Badge */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto flex items-center gap-3 md:gap-4 rounded-[32px] md:rounded-[48px] border border-white bg-white/95 px-4 py-3 md:px-6 md:py-4 backdrop-blur-md shadow-lg">
                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <MaterialIcon icon="verified" className="text-lg md:text-2xl" filled />
                </div>
                <div className="flex flex-col gap-0 text-left">
                  <span className="text-[8px] md:text-xs font-bold uppercase tracking-[1.2px] text-primary">
                    Quality Assurance
                  </span>
                  <span className="text-sm md:text-lg font-bold text-foreground">Pro Chef Curated</span>
                </div>
              </div>
            </div>

            {/* Burger Image - Overlapping */}
            <div className="absolute -left-4 sm:-left-12 top-[20%] z-20 overflow-hidden rounded-[32px] sm:rounded-[48px] border-[4px] sm:border-[8px] border-white shadow-[0px_25px_50px_rgba(0,0,0,0.15)]">
              <img
                src={burger}
                alt="Burger"
                className="h-20 w-20 sm:h-32 sm:w-32 object-cover"
              />
            </div>

            {/* Sushi Image - Overlapping */}
            <div className="absolute bottom-[10%] -right-2 sm:right-0 z-20 overflow-hidden rounded-[32px] sm:rounded-[48px] border-[4px] sm:border-[8px] border-white shadow-[0px_25px_50px_rgba(0,0,0,0.15)]">
              <img
                src={sushi}
                alt="Sushi"
                className="h-24 w-24 sm:h-36 sm:w-36 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
