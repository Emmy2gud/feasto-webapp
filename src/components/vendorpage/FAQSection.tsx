import { FaqList } from "@/components/marketing/FaqList";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { vendorFaqs } from "@/data/landingContent";
import support from "@/assets/illustrations/female-waiter-taking-order.svg";

export function FAQSection() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            Questions about selling
          </h2>
          <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">
            Fees, payouts, pausing your store and who handles the delivery.
          </p>

          <img
            src={support}
            alt="Trays of jollof, peppered stews and plantain prepared by a partner kitchen"
            className="mt-6 aspect-[4/3] w-full rounded-lg object-cover"
            width={736}
            height={920}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <FaqList items={vendorFaqs} />
        </Reveal>
      </div>
    </Section>
  );
}
