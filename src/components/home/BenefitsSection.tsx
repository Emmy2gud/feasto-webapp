import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { FactRow } from "@/components/marketing/FactRow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { homeBenefits } from "@/data/landingContent";
import orderBag from "@/assets/illustrations/order-bag.svg";

export function BenefitsSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <h2 className="font-display text-display-sm font-bold text-balance text-ink sm:text-display-md">
            What comes with every order
          </h2>
          <p className="max-w-[42ch] text-[15px] leading-relaxed text-ink-muted sm:text-base">
            No membership, no minimum spend and no separate service charge at the end. These four
            things are true of every order placed on Feasto.
          </p>
          <Link
            to="/tracking"
            className="group inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            See how tracking works
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>

          <div className="mt-2 w-full max-w-[340px] rounded-lg bg-surface p-3">
            <img
              src={orderBag}
              alt="Illustration of an open delivery bag with sealed containers, a drink and a receipt"
              className="w-full"
              width={560}
              height={480}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border-t border-hairline">
            {homeBenefits.map((benefit) => (
              <FactRow
                key={benefit.id}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="first:border-t-0"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
