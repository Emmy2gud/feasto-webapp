import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { JoiningStep } from "@/types/landing";

type CheckListProps = {
  items: { id: string; label: string; icon?: LucideIcon }[];
  className?: string;
};

/** Requirements list. Hairline rows, no boxes. */
export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("border-t border-hairline", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li
            key={item.id}
            className="flex min-h-14 items-center gap-3.5 border-b border-hairline py-3.5"
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/10">
              {Icon ? (
                <Icon aria-hidden="true" className="size-3.5 text-primary" />
              ) : (
                <Check aria-hidden="true" className="size-3.5 text-primary" />
              )}
            </span>
            <span className="text-[15px] font-medium text-ink">{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

type StepListProps = {
  steps: JoiningStep[];
  className?: string;
};

/** Numbered joining sequence. The numbers carry real order. */
export function StepList({ steps, className }: StepListProps) {
  return (
    <ol className={cn("relative flex flex-col gap-6", className)}>
      {steps.map((step, index) => (
        <li key={step.id} className="relative grid grid-cols-[32px_1fr] gap-4">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-8 left-[15px] h-[calc(100%-8px)] w-px bg-hairline"
            />
          ) : null}
          <span className="z-10 grid size-8 place-items-center rounded-full border border-hairline bg-background text-[13px] font-semibold text-ink">
            {index + 1}
          </span>
          <div className="pt-1">
            <h3 className="text-[15px] font-semibold text-ink sm:text-base">{step.title}</h3>
            <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-ink-muted">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
