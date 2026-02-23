import { MaterialIcon } from "@/components/ui/material-icon";
import dividerLeft from "@/assets/icons/divider-left.svg";
import dividerRight from "@/assets/icons/divider-right.svg";

const features = [
  {
    icon: "touch_app",
    title: "SELECT & ORDER",
    description: "Personalized menus tailored to your\ncampus location and cravings.",
  },
  {
    icon: "map",
    title: "PRECISION TRACKING",
    description: "Watch your runner navigate specific\nlecture blocks in real-time.",
  },
  {
    icon: "sentiment_very_satisfied",
    title: "ENJOY DELIVERY",
    description: "Hot meals delivered straight to your door\nor study desk, no exceptions.",
  },
];

export function FutureLogisticsSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <h2 className="mb-24 text-center text-5xl font-extrabold tracking-[-0.025em] text-foreground">
          The Future of Campus Logistics
        </h2>

        {/* Features Row with Dividers */}
        <div className="relative grid gap-16 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-4 text-center">
              {/* Hexagon Icon Background */}
              <div className="relative mb-8">
                {/* Hexagon shape - using clip-path */}
                <div
                  className="flex h-32 w-32 items-center justify-center bg-[#2d3748]"
                  style={{
                    clipPath:
                      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  }}
                >
                  <MaterialIcon icon={feature.icon} className="text-[48px] leading-[48px] text-primary" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold uppercase tracking-[-0.025em] text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="whitespace-pre-line text-base font-normal leading-[1.5] text-[hsl(var(--slate-400))]">
                {feature.description}
              </p>
            </div>
          ))}

          {/* Horizontal Dividers */}
          <img
            src={dividerLeft}
            alt=""
            className="absolute left-[25%] top-16 hidden h-0.5 w-[185px] lg:block"
            style={{
              background: "linear-gradient(90deg, rgba(238,140,43,0.6) 0%, rgba(238,140,43,0) 100%)",
            }}
          />
          <img
            src={dividerRight}
            alt=""
            className="absolute right-[25%] top-16 hidden h-0.5 w-[185px] lg:block"
            style={{
              background: "linear-gradient(270deg, rgba(238,140,43,0.6) 100%, rgba(238,140,43,0) 0%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
