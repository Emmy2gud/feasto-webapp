import { FactRow } from "@/components/marketing/FactRow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { riderPerks } from "@/data/landingContent";

export function Perks() {
  return (
    <Section surface="surface">
      <SectionHeading
        title="While you are riding"
        description="What the rider account gives you, beyond the delivery fee on each order."
      />

      <Reveal className="mt-8 grid gap-x-12 sm:grid-cols-2 lg:mt-10">
        {riderPerks.map((perk) => (
          <FactRow
            key={perk.id}
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
          />
        ))}
      </Reveal>
    </Section>
  );
}
