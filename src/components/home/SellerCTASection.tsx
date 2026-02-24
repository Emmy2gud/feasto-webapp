import { MaterialIcon } from "@/components/ui/material-icon";
import { Button } from "@/components/ui/button";

export function SellerCTASection() {
  return (
    <section className="px-6 py-20 lg:px-20 ">
      <div className="mx-auto max-w-[1280px] border border-primary rounded-4xl p-10">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Icon */}
          <div className="flex h-20 w-20 items-center justify-center">
            <MaterialIcon icon="storefront" className="text-[36px] leading-[40px] text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.1] text-foreground">
            Ready to Start Selling?
          </h2>

          {/* Description */}
          <p className="max-w-[731px] text-lg font-normal leading-[1.556] text-[hsl(var(--slate-600))]">
            Join hundreds of students and local vendors earning with CampusDash. We provide the
            <br className="hidden lg:block" />
            logistics, you provide the flavor.
          </p>

          {/* Buttons */}
          <div className="md:flex block items-center gap-6">
            <Button className="h-14 sm:h-[68px] w-full sm:w-auto rounded-[24px] sm:rounded-[32px] bg-primary px-8 sm:px-10 text-base font-bold text-white shadow-[0px_8px_10px_rgba(238,140,43,0.2)] hover:bg-primary/90 md:mb-0 mb-5">
              Become a Vendor
            </Button>

            <button className="flex items-center justify-center gap-2 text-base font-bold text-foreground hover:gap-3 transition-all ">
              <span>Learn About Commission</span>
              <MaterialIcon icon="chevron_right" className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
