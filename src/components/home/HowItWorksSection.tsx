import browseFood from "@/assets/images/browse-food.jpg";
import checkout from "@/assets/images/checkout.svg";
import track from "@/assets/images/track.svg";
import eatMeal from "@/assets/images/eat-meal.jpg";

const processSteps = [
  {
    number: "1",
    title: "Browse",
    description: "Select from a variety of student\nchefs, local restaurants, and\ncampus pharmacies.",
    image: browseFood,
    type: "image" as const,
  },
  {
    number: "2",
    title: "Checkout",
    description: "Securely pay via campus credits,\nmobile money, or card with just a\nfew taps.",
    image: checkout,
    type: "svg" as const,
  },
  {
    number: "3",
    title: "Track",
    description: "Watch your runner navigate\nthrough lecture blocks and\nshortcuts in real-time.",
    image: track,
    type: "svg" as const,
  },
  {
    number: "4",
    title: "Eat",
    description: "Enjoy your fresh, hot meal at your\nhostel, library, or any designated\nlecture spot.",
    image: eatMeal,
    type: "image" as const,
  },
];

export function HowItWorksSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
            The Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-black text-center">
            How feasto works
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number} className="flex flex-col gap-8">
              {/* Card with Image */}
              <div className="relative overflow-hidden rounded-[40px] border-[8px] border-slate-50 shadow-[0px_8px_10px_rgba(0,0,0,0.1),0px_20px_25px_rgba(0,0,0,0.1)]">
                {/* Image */}
                <div className="relative h-[268px] overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(10,15,29,0.6) 0%, rgba(10,15,29,0) 100%)",
                    }}
                  />
                </div>

                {/* Number Badge */}
                <div className="absolute bottom-8 left-8 flex items-center gap-4">
                  <span className="text-xl font-bold text-white bg-primary w-10 h-10 p-1 text-center rounded-full">{step.number}</span>
                  <span className="text-xl font-bold text-white">{step.title}</span>
                </div>
              </div>

              {/* Description */}
              <p className="whitespace-pre-line text-base font-medium leading-[1.625] text-[hsl(var(--slate-600))]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
