import { Link } from "react-router-dom";

import { AddressSearch } from "@/components/marketing/AddressSearch";
import { MediaFrame } from "@/components/marketing/MediaFrame";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import riderHandoff from "@/assets/illustrations/rider-handoff.svg";
import vendorAmaka from "@/assets/images/vendor-amaka.jpg";
import vendorBrewBar from "@/assets/images/vendor-brew-bar.jpg";

const quickPicks = [
  { label: "Jollof", href: "/vendors" },
  { label: "Burgers", href: "/vendors" },
  { label: "Groceries", href: "/vendors" },
];

export function HeroSection() {
  return (
    <Section spacing="hero">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14">
        <Reveal className="flex flex-col gap-7">
          <h1 className="font-display text-display-sm font-bold text-balance text-ink sm:text-display-md lg:text-display-lg">
            Real food from your neighbourhood, at your door.
          </h1>

          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-muted sm:text-lg">
            Order from kitchens, shops and pharmacies near you. Follow the rider from the counter to
            your street, and pay the total you were shown at checkout.
          </p>

          <AddressSearch />

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-medium text-ink-muted">Popular right now</span>
            {quickPicks.map((pick) => (
              <Link
                key={pick.label}
                to={pick.href}
                className="rounded-sm border border-hairline bg-background px-3 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {pick.label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Food shelf: one tall hero plate, a coffee square, and the illustrated handoff. */}
          <div className="grid grid-cols-[1.35fr_0.95fr] gap-3 sm:gap-4">
            <MediaFrame
              ratio="portrait"
              src={vendorAmaka}
              alt="Trays of peppered stews, jollof rice and plantain from a local kitchen"
              priority
              width={640}
              height={800}
              className="row-span-2"
            />
            <MediaFrame
              ratio="square"
              src={vendorBrewBar}
              alt="Cups of freshly brewed coffee on a cafe counter"
              priority
              width={400}
              height={400}
            />
            <div className="relative aspect-square overflow-hidden rounded-lg bg-surface">
              <img
                src={riderHandoff}
                alt="Illustration of a rider handing a sealed bag to a customer at a doorway"
                className="size-full animate-float-bag object-contain"
                width={720}
                height={520}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
