import { MaterialIcon } from "@/components/ui/material-icon";

const features = [
  {
    icon: "local_shipping",
    iconColor: "text-primary",
    bg:"bg-[#FDF3EA]",
    title: "0 Delivery Fee for Library",
    description:
      "We prioritize study sessions. Get free delivery to the main\nlibrary 24/7 during exam seasons.",
  },
  {
    icon: "verified_user",
    iconColor: "text-[#3b82f6]",
    bg:"bg-[#EBF3FE]",
    title: "Verified Student Network",
    description:
      "Every vendor is a verified student or local partner, ensuring\nthe safest and most reliable trade.",
  },
  {
    icon: "savings",
    iconColor: "text-[#f97316]",
    bg:"bg-[#FEF1E8]",
    title: "Campus Credits",
    description:
      "Earn points with every order that can be redeemed for\ntuition assistance or campus book shop rewards.",
  },
  {
    icon: "hub",
    iconColor: "text-[#22c55e]",
    bg:"bg-[#E9F9EF]",
    title: "Campus-wide Coverage",
    description:
      "From the farthest hostels to the hidden labs, our runners\nknow every shortcut in the book.",
  },
];

export function FeaturesGridSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col  rounded-[40px] bg-white p-12 shadow-[0px_8px_10px_rgba(0,0,0,0.1),0px_20px_25px_rgba(0,0,0,0.1)]"
            >
              {/* Icon */}
              <div className={`${feature.bg} w-10 h-10  p-2 rounded-full`}>
                <MaterialIcon
                  icon={feature.icon}
                  className={`text-[36px] leading-[40px] ${feature.iconColor}`}
                />
              </div>

              {/* Title */}
              <h3 className="text-[30px] font-extrabold leading-[1.2] text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="whitespace-pre-line text-lg font-normal leading-[1.625] text-[hsl(var(--slate-600))]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
