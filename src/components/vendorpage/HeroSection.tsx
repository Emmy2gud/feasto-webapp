import { Link } from "react-router-dom";
import { ArrowUpRight, Check, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import counterHandoff from "@/assets/illustrations/counter-handoff.svg";

const registrationChecklist = [
  "Business name, address and a contact number",
  "Menu photos with prices",
  "The bank account you want payouts sent to",
];

export function HeroSection() {
  return (
    <Section spacing="hero">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <Reveal className="flex flex-col gap-6">
          <h1 className="font-display text-display-sm font-bold text-balance text-ink sm:text-display-md lg:text-display-lg">
            Sell your food to the whole city.
          </h1>

          <p className="max-w-[48ch] text-[15px] leading-relaxed text-ink-muted sm:text-lg">
            Join the kitchens, cafes, shops and pharmacies already delivering with Feasto. You cook
            and pack; we send the rider, collect the payment and pay you out.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button asChild className="h-12 rounded-lg px-6 text-[15px] font-semibold">
              <Link to="/vendor-form">
                Register your business
                <MoveRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              Open vendor dashboard
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-2 max-w-md rounded-xl border border-hairline bg-background p-5 shadow-soft sm:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">Ready to register?</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Have these three things to hand. The form takes about ten minutes.
            </p>
            <ul className="mt-3.5 flex flex-col gap-2">
              {registrationChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-ink">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-4 h-11 w-full rounded-lg font-semibold">
              <Link to="/vendor-form">Start the form</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-lg bg-surface p-3 sm:p-5">
            <img
              src={counterHandoff}
              alt="Illustration of a cook handing a packed order across the counter to a rider"
              className="mx-auto w-full max-w-[520px]"
              width={800}
              height={560}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
