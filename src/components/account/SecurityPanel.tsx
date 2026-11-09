import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { ShieldCheck } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SettingsActions, SettingsPanel, StatusBanner } from "@/components/account/SettingsPanel";
import { cn } from "@/lib/utils";

type Errors = {
  current?: string;
  next?: string;
  confirm?: string;
};

export function SecurityPanel() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [twoFactor, setTwoFactor] = useState(true);
  const [errors, setErrors] = useState<Errors>({});
  const [saved, setSaved] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function reset() {
    setCurrent("");
    setNext("");
    setConfirm("");
    setErrors({});
    setSaved(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!current) nextErrors.current = "Enter your current password.";
    if (next.length < 8) nextErrors.next = "Use at least 8 characters.";
    if (confirm !== next) nextErrors.confirm = "The two passwords do not match.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSaved(false);
      return;
    }

    setCurrent("");
    setNext("");
    setConfirm("");
    setSaved(true);

    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setSaved(false), 5000);
  }

  return (
    <SettingsPanel
      title="Password and security"
      description="Change the password you sign in with and control two-factor authentication."
    >
      <form id="security-form" onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="current-password" className="text-[13px] font-semibold text-ink">
            Current password
          </Label>
          <Input
            id="current-password"
            type="password"
            autoComplete="current-password"
            value={current}
            onChange={(event) => setCurrent(event.target.value)}
            aria-invalid={Boolean(errors.current)}
            aria-describedby={errors.current ? "current-password-error" : undefined}
            className={cn(
              "h-11 rounded-md border-hairline bg-background px-3 text-[15px]",
              errors.current && "border-destructive/60",
            )}
          />
          {errors.current ? (
            <p id="current-password-error" className="text-[13px] font-medium text-destructive">
              {errors.current}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="new-password" className="text-[13px] font-semibold text-ink">
              New password
            </Label>
            <Input
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={next}
              onChange={(event) => setNext(event.target.value)}
              aria-invalid={Boolean(errors.next)}
              aria-describedby={errors.next ? "new-password-error" : undefined}
              className={cn(
                "h-11 rounded-md border-hairline bg-background px-3 text-[15px]",
                errors.next && "border-destructive/60",
              )}
            />
            {errors.next ? (
              <p id="new-password-error" className="text-[13px] font-medium text-destructive">
                {errors.next}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="confirm-password" className="text-[13px] font-semibold text-ink">
              Confirm new password
            </Label>
            <Input
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
              aria-invalid={Boolean(errors.confirm)}
              aria-describedby={errors.confirm ? "confirm-password-error" : undefined}
              className={cn(
                "h-11 rounded-md border-hairline bg-background px-3 text-[15px]",
                errors.confirm && "border-destructive/60",
              )}
            />
            {errors.confirm ? (
              <p id="confirm-password-error" className="text-[13px] font-medium text-destructive">
                {errors.confirm}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 rounded-lg bg-surface px-4 py-3.5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
            <div>
              <p className="text-[15px] font-semibold text-ink">Two-factor authentication</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">
                Ask for a one-time code from your phone when signing in on a new device.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="hidden text-[13px] font-semibold text-ink-muted sm:inline">
              {twoFactor ? "On" : "Off"}
            </span>
            <Switch
              checked={twoFactor}
              onCheckedChange={setTwoFactor}
              aria-label="Two-factor authentication"
            />
          </div>
        </div>

        {saved ? <StatusBanner>Your changes were saved.</StatusBanner> : null}

        <SettingsActions formId="security-form" onCancel={reset} />
      </form>
    </SettingsPanel>
  );
}
