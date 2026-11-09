import { RevealGroup, RevealItem } from "@/components/marketing/Reveal";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { kitchenCapabilities } from "@/data/landingContent";

export function KitchenBand() {
  return (
    <Section surface="navy">
      <SectionHeading
        tone="dark"
        size="sm"
        title="Built for a working kitchen"
        description="The dashboard is deliberately small: four things you can do while service is running."
      />

      <RevealGroup className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-y-10">
        {kitchenCapabilities.map((capability) => (
          <RevealItem key={capability.id}>
            <div className="flex items-center gap-2.5">
              <capability.icon aria-hidden="true" className="size-[18px] text-primary" />
              <h3 className="font-display text-lg font-semibold text-white">{capability.title}</h3>
            </div>
            <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-white/65">
              {capability.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
