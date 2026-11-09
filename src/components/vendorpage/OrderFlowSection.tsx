import { StatPair } from "@/components/marketing/FactRow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { vendorFacts, vendorOrderStages } from "@/data/landingContent";
import dashboardShot from "@/assets/vendors/dashboard.png";

export function OrderFlowSection() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
        <Reveal>
          <div className="rounded-xl bg-secondary p-3 sm:p-4">
            <img
              src={dashboardShot}
              alt="Feasto vendor dashboard showing the live order queue and daily totals"
              className="w-full rounded-lg"
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            An order, start to finish
          </h2>
          <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-ink-muted">
            Every order moves through the same three states in the dashboard. Nothing arrives by
            phone call, and nothing needs a second device.
          </p>

          <ol className="mt-7 flex flex-col gap-6">
            {vendorOrderStages.map((stage, index) => (
              <li key={stage.id} className="grid grid-cols-[32px_1fr] gap-4">
                <span className="grid size-8 place-items-center rounded-full border border-hairline bg-background text-[13px] font-semibold text-ink">
                  {index + 1}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <stage.icon aria-hidden="true" className="size-4 text-primary" />
                    <h3 className="text-[15px] font-semibold text-ink sm:text-base">{stage.title}</h3>
                  </div>
                  <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <StatPair items={vendorFacts} className="mt-8" />
        </Reveal>
      </div>
    </Section>
  );
}
