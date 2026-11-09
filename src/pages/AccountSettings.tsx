import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { DangerZonePanel } from "@/components/account/DangerZonePanel";
import { NotificationsPanel } from "@/components/account/NotificationsPanel";
import { SecurityPanel } from "@/components/account/SecurityPanel";
import { SettingsDirectory } from "@/components/account/SettingsDirectory";
import { settingsGroups } from "@/data/accountSettings";
import type { SettingsGroupId } from "@/data/accountSettings";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function AccountSettings() {
  const [activeId, setActiveId] = useState<SettingsGroupId>("security");
  const [detailOpen, setDetailOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const showDirectory = isDesktop || !detailOpen;
  const showPanel = isDesktop || detailOpen;
  const activeGroup = settingsGroups.find((group) => group.id === activeId) ?? settingsGroups[0];

  function selectGroup(id: SettingsGroupId) {
    setActiveId(id);
    setDetailOpen(true);
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container-page max-w-[1080px] pt-8 sm:pt-10">
        <header className="flex flex-col gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Account settings</h1>
            <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-muted">
              Manage your password, notifications and account status. Profile details and saved
              addresses live on your profile page.
            </p>
          </div>
          <Link
            to="/profile"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            View your profile
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr] lg:items-start lg:gap-8">
          {showDirectory ? (
            <SettingsDirectory activeId={activeId} onChange={selectGroup} />
          ) : null}

          {showPanel ? (
            <div className="flex flex-col gap-4">
              {!isDesktop ? (
                <button
                  type="button"
                  onClick={() => setDetailOpen(false)}
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                  Back to settings
                </button>
              ) : null}

              <div aria-label={activeGroup.title}>
                {activeId === "security" ? <SecurityPanel /> : null}
                {activeId === "notifications" ? <NotificationsPanel /> : null}
                {activeId === "danger" ? <DangerZonePanel /> : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
