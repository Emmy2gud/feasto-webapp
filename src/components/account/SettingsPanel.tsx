import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SettingsPanelProps = {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

/** Card shell for a single settings group. */
export function SettingsPanel({ title, description, children, className }: SettingsPanelProps) {
  return (
    <section
      className={cn(
        "rounded-xl border border-hairline bg-background p-5 sm:p-7 lg:p-8",
        className,
      )}
    >
      <header className="border-b border-hairline pb-5">
        <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
        <p className="mt-1.5 max-w-[52ch] text-sm leading-relaxed text-ink-muted">{description}</p>
      </header>
      <div className="pt-6">{children}</div>
    </section>
  );
}

type SettingsActionsProps = {
  onCancel?: () => void;
  submitLabel?: string;
  formId?: string;
  className?: string;
};

/** Local save and cancel actions for one group. */
export function SettingsActions({
  onCancel,
  submitLabel = "Save changes",
  formId,
  className,
}: SettingsActionsProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 border-t border-hairline pt-5 sm:flex-row sm:justify-end",
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        onClick={onCancel}
        className="h-11 rounded-lg px-4 text-sm font-semibold text-ink-muted hover:bg-surface hover:text-ink"
      >
        Cancel
      </Button>
      <Button type="submit" form={formId} className="h-11 rounded-lg px-5 text-sm font-semibold">
        {submitLabel}
      </Button>
    </div>
  );
}

type StatusBannerProps = {
  children: ReactNode;
  className?: string;
};

/** Fixed confirmation message. Not generated, not a toast. */
export function StatusBanner({ children, className }: StatusBannerProps) {
  return (
    <p
      role="status"
      className={cn(
        "flex items-start gap-2 rounded-md border border-emerald-600/25 bg-emerald-50 px-3 py-2.5 text-[13px] font-medium text-emerald-900",
        className,
      )}
    >
      <CheckCircle2 aria-hidden="true" className="mt-px size-4 shrink-0 text-emerald-600" />
      {children}
    </p>
  );
}
