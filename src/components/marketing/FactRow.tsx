import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Fact } from "@/types/landing";

type FactRowProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Draw a hairline above the row. */
  bordered?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

/** Icon + title + one line. Used for benefits, partner benefits and rider perks. */
export function FactRow({
  icon: Icon,
  title,
  description,
  bordered = true,
  tone = "light",
  className,
}: FactRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[24px_1fr] gap-4 py-5",
        bordered && (tone === "dark" ? "border-t border-white/12" : "border-t border-hairline"),
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        className={cn("mt-0.5 size-5", tone === "dark" ? "text-primary" : "text-primary")}
      />
      <div>
        <h3
          className={cn(
            "text-[15px] font-semibold sm:text-base",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-1 max-w-[54ch] text-sm leading-relaxed",
            tone === "dark" ? "text-white/65" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

type StatPairProps = {
  items: Fact[];
  className?: string;
  tone?: "light" | "dark";
};

/** Two or three documented facts, set as typographic pairs rather than cards. */
export function StatPair({ items, className, tone = "light" }: StatPairProps) {
  return (
    <dl
      className={cn(
        "flex flex-wrap gap-x-10 gap-y-4 border-t pt-5",
        tone === "dark" ? "border-white/12" : "border-hairline",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <dt
            className={cn(
              "text-xs font-medium",
              tone === "dark" ? "text-white/55" : "text-ink-muted",
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              "text-[15px] font-semibold",
              tone === "dark" ? "text-white" : "text-ink",
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
