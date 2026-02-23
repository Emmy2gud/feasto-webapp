import { MaterialIcon } from "@/components/ui/material-icon";

export function MobileAppSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[56px] bg-[#0a0f1d] px-12 py-16 lg:px-24 lg:py-20">
          {/* Background Blur Effect */}
          <div
            className="absolute left-[60%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full opacity-10"
            style={{
              background: "rgba(238, 140, 43, 0.1)",
              filter: "blur(100px)",
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
                Innovation in Hand
              </span>

              <h2 className="text-5xl font-extrabold leading-[1] tracking-[-0.025em] text-white lg:text-[60px]">
                Coming to
                <br />
                Mobile <span className="text-primary">Very</span>
                <br />
                <span className="text-primary">Soon.</span>
              </h2>

              <p className="text-xl font-normal leading-[1.625] text-[hsl(var(--slate-400))]">
                Get ready for the smoothest campus experience.
                <br />
                Our native iOS and Android apps are in final beta
                <br />
                testing.
              </p>

              {/* App Store Buttons */}
              <div className="flex gap-4 mt-2">
                {/* iOS Button */}
                <div className="flex items-center gap-4 rounded-[32px] border border-white/20 bg-white/[0.07] px-6 py-4 backdrop-blur-sm">
                  <MaterialIcon icon="ios" className="text-[30px] text-white" />
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] font-bold uppercase leading-[1] tracking-[1px] text-[hsl(var(--slate-400))]">
                      Download on the
                    </span>
                    <span className="text-xl font-bold leading-[1] text-white">
                      App Store
                    </span>
                  </div>
                </div>

                {/* Play Store Button */}
                <div className="flex items-center gap-4 rounded-[32px] border border-white/20 bg-white/[0.07] px-6 py-4 backdrop-blur-sm">
                  <MaterialIcon icon="play_arrow" className="text-[30px] text-white" />
                  <div className="flex flex-col gap-0">
                    <span className="text-[10px] font-bold uppercase leading-[1] tracking-[1px] text-[hsl(var(--slate-400))]">
                      Get it on
                    </span>
                    <span className="text-xl font-bold leading-[1] text-white">
                      Play Store
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Phone Mockups */}
            <div className="relative flex items-center justify-center gap-[-8.99px] lg:justify-end">
              {/* iOS Beta Mockup */}
              <div className="relative z-10 overflow-hidden rounded-[48px] border-[10px] border-[#0f172a] bg-[#1e293b] shadow-[0px_25px_50px_rgba(0,0,0,0.25)]">
                <div className="h-[498px] w-[265px] bg-white/50 p-8 flex items-center justify-center">
                  <span className="text-[36px] font-bold uppercase leading-[1.111] text-white/20">
                    iOS Beta
                  </span>
                </div>
              </div>

              {/* Android Mockup - Overlapping */}
              <div className="relative -ml-2 z-0 overflow-hidden rounded-[48px] border-[10px] border-[#0f172a] bg-[#1e293b] shadow-[0px_25px_50px_rgba(0,0,0,0.25)]">
                <div className="h-[498px] w-[265px] bg-white/50 p-8 flex items-center justify-center">
                  <span className="text-[36px] font-bold uppercase leading-[1.111] text-white/20">
                    Android
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
