import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type TextFieldProps = {
  id: string;
  label: string;
  icon: LucideIcon;
  type?: "text" | "email" | "tel" | "password" | "time";
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
};

/** Labelled field with a leading icon, inline error and password reveal. */
export function TextField({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  defaultValue,
  onChange,
  autoComplete,
  placeholder,
  error,
  required,
}: TextFieldProps) {
  const isPassword = type === "password";
  const [revealed, setRevealed] = useState(false);
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label}
      </Label>

      <div
        className={cn(
          "relative flex items-center rounded-md border bg-background transition-colors",
          "focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15",
          error ? "border-destructive/60" : "border-hairline",
        )}
      >
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute left-3 size-4 text-ink-muted"
        />
        <Input
          id={id}
          type={isPassword && revealed ? "text" : type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange ? (event) => onChange(event.target.value) : undefined}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="h-11 rounded-md border-0 bg-transparent pl-9 text-[15px] text-ink shadow-none outline-hidden focus-visible:ring-0 focus-visible:ring-offset-0"
          style={isPassword ? { paddingRight: "2.75rem" } : undefined}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() => setRevealed((current) => !current)}
            aria-label={revealed ? "Hide password" : "Show password"}
            aria-pressed={revealed}
            className="absolute right-1.5 grid size-8 place-items-center rounded-sm text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            {revealed ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        ) : null}
      </div>

      {error ? (
        <p id={errorId} className="text-[13px] font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
