import { CheckList, StepList } from "@/components/marketing/Lists";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { riderJoiningSteps, riderRequirements } from "@/data/landingContent";

export function Requirements() {
  return (
    <Section id="rider-requirements" surface="surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            What you need
          </h2>
          <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
            Four things, checked on the verification call rather than at your first delivery.
          </p>
          <CheckList items={riderRequirements} className="mt-6" />
        </Reveal>

        <Reveal delay={0.08} className="lg:border-l lg:border-hairline lg:pl-16">
          <h2 className="font-display text-display-sm font-bold text-balance text-ink">
            How to start
          </h2>
          <p className="mt-3 max-w-[42ch] text-[15px] leading-relaxed text-ink-muted">
            Application, verification, then your first order. Each step is handled in the app.
          </p>
          <StepList steps={riderJoiningSteps} className="mt-6" />
        </Reveal>
      </div>
    </Section>
  );
}
