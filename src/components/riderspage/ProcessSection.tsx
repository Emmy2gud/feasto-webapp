import { Reveal, RevealGroup, RevealItem } from "@/components/marketing/Reveal";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { deliveryStages } from "@/data/landingContent";
import routeSteps from "@/assets/illustrations/route-steps.svg";

export function ProcessSection() {
  return (
    <Section>
      <SectionHeading
        title="What the work actually involves"
        description="Three parts to every delivery, whether it leaves a kitchen or a pharmacy counter."
      />

      <Reveal className="mt-8 rounded-lg bg-surface p-4 sm:p-6 lg:mt-10">
        <img
          src={routeSteps}
          alt="Illustration of a rider collecting an order, riding the route, then handing it over"
          className="w-full"
          width={1200}
          height={420}
        />
      </Reveal>

      <RevealGroup className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
        {deliveryStages.map((stage) => (
          <RevealItem key={stage.id}>
            <div className="flex items-center gap-2.5">
              <stage.icon aria-hidden="true" className="size-[18px] text-primary" />
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                {stage.title}
              </h3>
            </div>
            <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-ink-muted">
              {stage.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
