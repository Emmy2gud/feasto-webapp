import { FaqList } from "@/components/marketing/FaqList";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { homeFaqs } from "@/data/landingContent";
import support from "@/assets/illustrations/support.svg";

export function FAQSection() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <div>
            <h2 className="font-display text-display-sm font-bold text-balance text-ink">
              Questions about ordering
            </h2>
            <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-ink-muted">
              Coverage, payment and what happens when an order goes wrong.
            </p>
          </div>

          <div className="rounded-lg bg-surface p-5">
            <img
              src={support}
              alt="Illustration of a support agent with a headset answering a question"
              className="w-full max-w-[210px]"
              width={480}
              height={400}
            />
            <p className="mt-3 text-sm font-semibold text-ink">Still stuck?</p>
            <p className="mt-1 max-w-[34ch] text-[13px] leading-relaxed text-ink-muted">
              Report the problem from the order screen while the order is active and a support
              agent picks it up.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <FaqList items={homeFaqs} />
        </Reveal>
      </div>
    </Section>
  );
}
