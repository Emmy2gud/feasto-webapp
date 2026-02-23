import { useState } from "react";
import { MaterialIcon } from "@/components/ui/material-icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const categories = [
  {
    title: "RESTAURANTS",
    description:
      "Explore top-rated restaurants near you with your favourite cuisines delivered hot and fresh",
    icon: "restaurant",
    bgGradient: "linear-gradient(160deg, #ff6b35 0%, #ff4d00 40%, #c23600 100%)",
    shadowColor: "rgba(255, 77, 0, 0.35)",
    accentColor: "rgba(255, 255, 255, 0.12)",
  },
  {
    title: "SHOPS",
    description:
      "Groceries, household items, and daily essentials from your trusted stores nearby",
    icon: "shopping_bag",
    bgGradient: "linear-gradient(160deg, #ffe44d 0%, #ffd200 40%, #c9a600 100%)",
    shadowColor: "rgba(255, 210, 0, 0.35)",
    accentColor: "rgba(255, 255, 255, 0.15)",
  },
  {
    title: "PHARMACIES",
    description:
      "Health, wellness, and pharmaceutical needs delivered safely to your doorstep",
    icon: "medical_services",
    bgGradient: "linear-gradient(160deg, #ffa74d 0%, #ff8a00 40%, #c96d00 100%)",
    shadowColor: "rgba(255, 138, 0, 0.35)",
    accentColor: "rgba(255, 255, 255, 0.12)",
  },
  {
    title: "LOCAL MARKETS",
    description:
      "Fresh produce and artisan goods from the vibrant local markets around you",
    icon: "local_mall",
    bgGradient: "linear-gradient(160deg, #ff8a70 0%, #ff6b52 40%, #c94a35 100%)",
    shadowColor: "rgba(255, 107, 82, 0.35)",
    accentColor: "rgba(255, 255, 255, 0.12)",
  },
];

export function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-16 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
            What are you looking for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-500">
            Browse categories and find exactly what you need, delivered fast.
          </p>
        </div>

        {/* Desktop Cards Grid (Hidden on Mobile) */}
        <div className="hidden md:flex gap-5 overflow-hidden">
          {categories.map((category, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer overflow-hidden rounded-[36px]"
                style={{
                  background: category.bgGradient,
                  boxShadow: isHovered
                    ? `0px 30px 60px ${category.shadowColor}, 0px 0px 0px 2px rgba(255,255,255,0.15) inset`
                    : `0px 20px 40px ${category.shadowColor}`,
                  flex: isHovered ? "2.5" : "1",
                  height: "520px",
                  transition: "flex 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease",
                }}
              >
                {/* Background decorative circles */}
                <div
                  className="absolute -right-10 -top-10 rounded-full"
                  style={{
                    width: "200px",
                    height: "200px",
                    background: category.accentColor,
                    filter: "blur(40px)",
                    transition: "opacity 0.4s ease",
                    opacity: isHovered ? 1 : 0.5,
                  }}
                />
                <div
                  className="absolute -bottom-16 -left-16 rounded-full"
                  style={{
                    width: "250px",
                    height: "250px",
                    background: category.accentColor,
                    filter: "blur(60px)",
                    transition: "opacity 0.4s ease",
                    opacity: isHovered ? 0.8 : 0.3,
                  }}
                />

                {/* === COLLAPSED STATE (vertical layout) === */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-between p-8"
                  style={{
                    opacity: isHovered ? 0 : 1,
                    transform: isHovered ? "scale(0.95)" : "scale(1)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    pointerEvents: isHovered ? "none" : "auto",
                  }}
                >
                  <div
                    className="mt-4 flex items-center justify-center rounded-2xl"
                    style={{
                      width: "72px",
                      height: "72px",
                      background: "rgba(255, 255, 255, 0.15)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <MaterialIcon
                      icon={category.icon}
                      className="text-[36px] leading-[36px] text-white"
                    />
                  </div>

                  <h3
                    className="text-4xl font-extrabold uppercase leading-[1] tracking-[-0.04em] text-white"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      flex: 1,
                      marginTop: "24px",
                      marginBottom: "24px",
                    }}
                  >
                    {category.title}
                  </h3>

                  <div
                    className="flex items-center gap-1 rounded-full px-4 py-2"
                    style={{ background: "rgba(255,255,255,0.15)" }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Hover
                    </span>
                    <MaterialIcon
                      icon="arrow_forward"
                      className="text-[16px] leading-[16px] text-white/80"
                    />
                  </div>
                </div>

                {/* === EXPANDED STATE (horizontal layout) === */}
                <div
                  className="absolute inset-0 flex flex-col justify-between p-10"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateX(0)" : "translateX(20px)",
                    transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
                    pointerEvents: isHovered ? "auto" : "none",
                  }}
                >
                  <div>
                    <div
                      className="mb-5 flex items-center justify-center rounded-2xl"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <MaterialIcon
                        icon={category.icon}
                        className="text-[32px] leading-[32px] text-white"
                      />
                    </div>
                    <h3 className="text-5xl font-extrabold uppercase leading-[1] tracking-[-0.04em] text-white">
                      {category.title}
                    </h3>
                    <p className="mt-4 max-w-[320px] text-base leading-relaxed text-white/80">
                      {category.description}
                    </p>
                  </div>

                  <button
                    className="group flex w-fit items-center gap-2 rounded-full px-6 py-3 font-semibold text-gray-900 transition-transform duration-200 hover:scale-105"
                    style={{ background: "rgba(255,255,255,0.92)" }}
                  >
                    Explore
                    <MaterialIcon
                      icon="arrow_forward"
                      className="text-[20px] leading-[20px] text-gray-900 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Subtle bottom blur overlay */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
                    borderRadius: "0 0 36px 36px",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel Implementation */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories.map((category, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%]">
                  <div
                    className="relative h-[480px] rounded-[32px] p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500 active:scale-[0.98]"
                    style={{
                      background: category.bgGradient,
                      boxShadow: `0px 20px 40px ${category.shadowColor}`,
                    }}
                  >
                    {/* Decorative circles */}
                    <div
                      className="absolute -right-8 -top-8 w-48 h-48 rounded-full"
                      style={{
                        background: category.accentColor,
                        filter: "blur(40px)",
                      }}
                    />
                    <div
                      className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full"
                      style={{
                        background: category.accentColor,
                        filter: "blur(50px)",
                        opacity: 0.6,
                      }}
                    />

                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <div
                        className="mb-6 flex items-center justify-center rounded-2xl w-16 h-16"
                        style={{
                          background: "rgba(255,255,255,0.2)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <MaterialIcon
                          icon={category.icon}
                          className="text-[32px] text-white"
                        />
                      </div>
                      <h3 className="text-4xl font-extrabold uppercase leading-[1.1] tracking-tighter text-white mb-4">
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-base leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <button
                      className="relative z-10 group flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-gray-900 transition-all hover:bg-white bg-white/95 shadow-lg active:scale-95"
                    >
                      Explore Categories
                      <MaterialIcon
                        icon="arrow_forward"
                        className="text-[20px] transition-transform duration-300 group-active:translate-x-1"
                      />
                    </button>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform -translate-x-full animate-[shimmer_3s_infinite]" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-8 flex justify-center gap-2">
            {categories.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-6 rounded-full bg-neutral-200 transition-all"
                style={{
                  background: `linear-gradient(to right, ${categories[i].shadowColor.replace('0.35', '0.2')}, transparent)`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
