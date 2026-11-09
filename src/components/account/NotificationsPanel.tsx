import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

import { Switch } from "@/components/ui/switch";
import { SettingsActions, SettingsPanel, StatusBanner } from "@/components/account/SettingsPanel";

const channels = [
  {
    id: "orders",
    title: "Order updates",
    description: "Accepted, picked up, on the way and delivered. Sent for every order.",
    initial: true,
  },
  {
    id: "account",
    title: "Account activity",
    description: "Password changes, new sign-ins and payout confirmations.",
    initial: true,
  },
  {
    id: "offers",
    title: "Offers and news",
    description: "Occasional promotions from vendors near your saved addresses.",
    initial: false,
  },
];

export function NotificationsPanel() {
  const [settings, setSettings] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(channels.map((channel) => [channel.id, channel.initial])),
  );
  const [saved, setSaved] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);

    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setSaved(false), 5000);
  }

  function handleCancel() {
    setSettings(Object.fromEntries(channels.map((channel) => [channel.id, channel.initial])));
    setSaved(false);
  }

  return (
    <SettingsPanel
      title="Notifications"
      description="Choose which order and account messages reach you. Security alerts are always sent."
    >
      <form id="notifications-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="border-t border-hairline">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-center justify-between gap-6 border-b border-hairline py-4"
            >
              <div>
                <p className="text-[15px] font-semibold text-ink">{channel.title}</p>
                <p className="mt-0.5 max-w-[52ch] text-[13px] leading-relaxed text-ink-muted">
                  {channel.description}
                </p>
              </div>
              <Switch
                checked={settings[channel.id]}
                onCheckedChange={(checked) =>
                  setSettings((current) => ({ ...current, [channel.id]: checked }))
                }
                aria-label={channel.title}
              />
            </div>
          ))}
        </div>

        {saved ? <StatusBanner>Your changes were saved.</StatusBanner> : null}

        <SettingsActions formId="notifications-form" onCancel={handleCancel} />
      </form>
    </SettingsPanel>
  );
}
