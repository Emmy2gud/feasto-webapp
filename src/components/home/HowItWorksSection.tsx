import { RevealGroup, RevealItem } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { orderSteps } from "@/data/landingContent";

export function HowItWorksSection() {
  return (
    <Section surface="navy">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <h2 className="max-w-[20ch] font-display text-display-sm font-bold text-balance sm:text-display-md">
          From menu to doorway in four steps
        </h2>
        <p className="max-w-[44ch] text-[15px] leading-relaxed text-white/65">
          The same four steps every order takes, whether it is a hot plate, a bag of groceries or
          medicine from the pharmacy down the road.
        </p>
      </div>

      <RevealGroup className="relative mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
        {/* Connector behind the icon row on wide screens only. */}
        <span
          aria-hidden="true"
          className="absolute top-[22px] right-[12%] left-[12%] hidden h-px bg-white/12 lg:block"
        />

        {orderSteps.map((step, index) => (
          <RevealItem key={step.id} className="relative">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5">
                <step.icon aria-hidden="true" className="size-[18px] text-primary" />
              </span>
              <span className="text-[13px] font-medium text-white/45">
                Step {index + 1}
              </span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold">{step.title}</h3>
            <p className="mt-1.5 max-w-[32ch] text-sm leading-relaxed text-white/65">
              {step.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
