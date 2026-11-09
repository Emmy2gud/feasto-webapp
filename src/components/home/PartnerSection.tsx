import { PartnerRow } from "@/components/marketing/PartnerRow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { partnerInvitations } from "@/data/landingContent";
import twoWays from "@/assets/illustrations/two-ways.svg";

export function PartnerSection() {
  return (
    <Section surface="surface">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <Reveal>
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            Two ways to work with Feasto
          </h2>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-ink-muted">
            Selling food and delivering it are separate jobs. Pick the one that fits what you
            already do.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <img
            src={twoWays}
            alt="Illustration of a vendor at a counter beside a rider with a bicycle and insulated bag"
            className="mx-auto w-full max-w-[280px] lg:mx-0 lg:w-[320px] xl:w-[360px]"
            width={560}
            height={420}
          />
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-6 border-b border-hairline lg:mt-8">
        {partnerInvitations.map((invitation) => (
          <PartnerRow
            key={invitation.role}
            roleLabel={invitation.role === "business" ? "Businesses" : "Riders"}
            title={invitation.title}
            description={invitation.description}
            ctaLabel={invitation.ctaLabel}
            href={invitation.href}
          />
        ))}
      </Reveal>
    </Section>
  );
}
