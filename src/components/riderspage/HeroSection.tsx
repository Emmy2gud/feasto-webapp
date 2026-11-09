import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, MoveRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { StatPair } from "@/components/marketing/FactRow";
import { MediaFrame } from "@/components/marketing/MediaFrame";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import bikeKit from "@/assets/illustrations/bike-kit.svg";
import dispatch from "@/assets/riders/dispatch2.jpg";

const riderFacts = [
  { label: "Payouts", value: "Next working day" },
  { label: "Shifts", value: "You choose" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  function scrollToRequirements(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const target = document.getElementById("rider-requirements");
    target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <Section spacing="hero">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal className="flex flex-col gap-6">
          <h1 className="font-display text-display-sm font-bold text-balance text-ink sm:text-display-md lg:text-display-lg">
            Deliver with Feasto, on the days you choose.
          </h1>

          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-muted sm:text-lg">
            Take orders near you, collect from the kitchen and drop at the door. Every completed
            delivery is listed in your wallet and settles to your bank account the next working day.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button asChild className="h-12 rounded-lg px-6 text-[15px] font-semibold">
              <Link to="/rider-form">
                Apply to ride
                <MoveRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <a
              href="#rider-requirements"
              onClick={scrollToRequirements}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              See what you need
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          <StatPair items={riderFacts} className="max-w-md" />
        </Reveal>

        <Reveal delay={0.1} className="flex justify-end">
          <div className="grid w-full max-w-[460px] grid-cols-1 items-end gap-3 sm:grid-cols-[1.2fr_0.8fr] sm:gap-4">
            <MediaFrame
              ratio="portrait"
              src={dispatch}
              alt="Delivery rider with an insulated bag checking the route on his phone"
              priority
              width={560}
              height={700}
            />
            <div className="hidden place-items-center rounded-lg bg-surface p-2 sm:grid">
              <img
                src={bikeKit}
                alt="Illustration of a bicycle with an insulated delivery bag and helmet"
                className="w-full"
                width={480}
                height={360}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
