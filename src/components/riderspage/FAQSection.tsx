import { FaqList } from "@/components/marketing/FaqList";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { riderFaqs } from "@/data/landingContent";
import riderAtWork from "@/assets/riders/dispatch.jpg";

export function FAQSection() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            Questions about riding
          </h2>
          <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">
            Vehicles, documents, hours and what happens when a delivery does not go to plan.
          </p>

          <img
            src={riderAtWork}
            alt="Rider on a scooter with a stack of pizza boxes, checking his phone between deliveries"
            className="mt-6 aspect-[4/3] w-full rounded-lg object-cover"
            width={624}
            height={416}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <FaqList items={riderFaqs} />
        </Reveal>
      </div>
    </Section>
  );
}
