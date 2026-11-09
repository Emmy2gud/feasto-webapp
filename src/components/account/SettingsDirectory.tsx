import { useState } from "react";

import { cn } from "@/lib/utils";
import { settingsGroups } from "@/data/accountSettings";
import type { SettingsGroupId } from "@/data/accountSettings";

type SettingsDirectoryProps = {
  activeId: SettingsGroupId;
  onChange: (id: SettingsGroupId) => void;
  className?: string;
};

/** Left-hand list of account groups. Selecting one swaps the detail panel. */
export function SettingsDirectory({ activeId, onChange, className }: SettingsDirectoryProps) {
  const [focusIndex, setFocusIndex] = useState(() =>
    Math.max(
      0,
      settingsGroups.findIndex((group) => group.id === activeId),
    ),
  );

  return (
    <div className={cn("rounded-xl border border-hairline bg-background p-1.5", className)}>
      <div role="tablist" aria-orientation="vertical" aria-label="Account settings" className="flex flex-col gap-0.5">
        {settingsGroups.map((group, index) => {
          const isActive = group.id === activeId;
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              tabIndex={index === focusIndex ? 0 : -1}
              onClick={() => {
                onChange(group.id);
                setFocusIndex(index);
              }}
              onFocus={() => setFocusIndex(index)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
                event.preventDefault();
                const delta = event.key === "ArrowDown" ? 1 : -1;
                const next = (index + delta + settingsGroups.length) % settingsGroups.length;
                onChange(settingsGroups[next].id);
                setFocusIndex(next);
                const buttons = event.currentTarget.parentElement?.querySelectorAll("button");
                buttons?.[next]?.focus();
              }}
              className={cn(
                "flex min-h-11 w-full items-center gap-2.5 rounded-md px-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                isActive
                  ? "bg-surface font-semibold text-ink"
                  : "font-medium text-ink-muted hover:bg-surface/60 hover:text-ink",
              )}
            >
              <group.icon
                aria-hidden="true"
                className={cn("size-4 shrink-0", isActive ? "text-primary" : "text-ink-muted")}
              />
              <span className="flex-1 truncate">{group.label}</span>
              {isActive ? (
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
