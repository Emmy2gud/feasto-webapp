import { MaterialIcon } from "@/components/ui/material-icon";
import { Button } from "@/components/ui/button";


export function FinalCTASection() {
  return (
    <section className="px-1 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl font-extrabold leading-[1.25] tracking-[-0.025em] text-white">
              Ready to upgrade your
              <br />
              campus life?
            </h2>

            {/* App Store Buttons */}
            <div className="flex gap-5">
              {/* iOS Button */}
              <Button className="flex h-[66px] md:w-fit w-35 items-center gap-3 rounded-[32px] bg-white px-8 text-foreground shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] hover:bg-white/90">
                <MaterialIcon icon="ios" className="text-2xl text-foreground" />
                <span className="text-base md:text-lg text-sm font-bold">App Store</span>
              </Button>

              {/* Play Store Button */}
              <Button className="flex h-[66px] md:w-fit w-35 items-center gap-3 rounded-[32px] border border-white/20 bg-white/5 px-8 text-white hover:bg-white/10">
                <MaterialIcon icon="play_arrow" className="text-2xl text-white" />
                <span className="text-base md:text-lg text-sm font-bold">Google Play</span>
              </Button>
            </div>
          </div>

        {/* make this block responsive */}
          <div className="flex md:flex-row flex-col items-center justify-center lg:justify-end">
            <div className="flex md:flex-row flex-col items-center gap-6 rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0px_25px_50px_rgba(0,0,0,0.25)]">
              {/* QR Code Icon */}
    <div className="flex items-center justify-center 
                w-20 h-20 
                rounded-3xl 
                bg-white 
                shadow-lg 
                hover:shadow-xl 
                transition-all duration-300">
  <MaterialIcon 
    icon="qr_code_2" 
    className="text-4xl text-gray-700" 
  />
</div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold tracking-[-0.025em] text-white">
                  Scan to Download
                </h3>
                <p className="max-w-[350px] text-lg font-normal leading-[1.625] text-[hsl(var(--slate-400))]">
                  Get the full experience on your mobile
                  <br />
                  device. Lightning fast and always at hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
