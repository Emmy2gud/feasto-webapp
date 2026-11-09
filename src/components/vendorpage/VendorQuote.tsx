import { Quote as QuoteIcon } from "lucide-react";

import { MediaFrame } from "@/components/marketing/MediaFrame";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { vendorQuote } from "@/data/landingContent";

export function VendorQuote() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-14">
        <Reveal>
          <MediaFrame
            ratio="portrait"
            src={vendorQuote.image}
            alt={vendorQuote.imageAlt}
            className="max-w-[180px] rounded-lg"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <figure>
            <QuoteIcon aria-hidden="true" className="size-6 text-primary" />
            <blockquote className="mt-4 max-w-[46ch] font-display text-xl leading-snug font-medium text-ink text-pretty sm:text-2xl">
              {vendorQuote.text}
            </blockquote>
            <figcaption className="mt-5">
              <span className="block text-[15px] font-semibold text-ink">{vendorQuote.name}</span>
              <span className="block text-sm text-ink-muted">{vendorQuote.business}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
