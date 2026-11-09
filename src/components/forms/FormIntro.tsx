import type { LucideIcon } from "lucide-react";

type FormIntroProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Panel heading used at the top of each onboarding step. */
export function FormIntro({ icon: Icon, title, description }: FormIntroProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Icon aria-hidden="true" className="size-4" />
      </span>
      <div>
        <h2 className="font-display text-lg font-semibold text-ink">{title}</h2>
        <p className="mt-0.5 max-w-[52ch] text-[13px] leading-relaxed text-ink-muted">
          {description}
        </p>
      </div>
    </div>
  );
}
