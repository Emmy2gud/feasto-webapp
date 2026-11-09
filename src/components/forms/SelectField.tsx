import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Label } from "@/components/ui/label";

type SelectFieldProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  options: { value: string; label: string }[];
  defaultValue?: string;
};

/** Native select styled to match `TextField`. */
export function SelectField({ id, label, icon: Icon, options, defaultValue }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label}
      </Label>

      <div className="relative flex items-center rounded-md border border-hairline bg-background transition-colors focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute left-3 size-4 text-ink-muted"
        />
        <select
          id={id}
          defaultValue={defaultValue}
          className="h-11 w-full appearance-none bg-transparent pr-9 pl-9 text-[15px] text-ink outline-hidden"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 size-4 text-ink-muted"
        />
      </div>
    </div>
  );
}
