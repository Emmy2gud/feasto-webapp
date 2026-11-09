import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Download, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

const DISMISS_KEY = "feasto.install.dismissed";

/**
 * Offers installation once the browser says the app is installable. Dismissal
 * is remembered, so it does not nag.
 */
export function InstallPrompt() {
  const { pathname } = useLocation();
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  // Screens with their own sticky action bar keep the space to themselves.
  const onActionBarScreen =
    pathname.startsWith("/vendor/") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/tracking");

  useEffect(() => {
    function onBeforeInstall(promptEvent: Event) {
      promptEvent.preventDefault();
      setEvent(promptEvent as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstall);
  }, []);

  const isHidden =
    !event ||
    dismissed ||
    onActionBarScreen ||
    (typeof window !== "undefined" && window.localStorage.getItem(DISMISS_KEY) === "1");

  if (isHidden) return null;

  return (
    <div className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 flex items-center gap-3 rounded-lg border border-hairline bg-background p-3 shadow-panel md:hidden">
      <span className="grid size-9 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
        <Download aria-hidden="true" className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-ink">Install Feasto</p>
        <p className="text-[11px] text-ink-muted">Faster ordering, straight from your home screen.</p>
      </div>
      <Button
        type="button"
        onClick={async () => {
          await event.prompt();
          const choice = await event.userChoice;
          if (choice.outcome === "dismissed") {
            window.localStorage.setItem(DISMISS_KEY, "1");
          }
          setEvent(null);
        }}
        className="h-9 shrink-0 rounded-md px-3 text-[12px] font-semibold"
      >
        Install
      </Button>
      <button
        type="button"
        aria-label="Dismiss install prompt"
        onClick={() => {
          window.localStorage.setItem(DISMISS_KEY, "1");
          setDismissed(true);
        }}
        className="grid size-8 shrink-0 place-items-center rounded-md text-ink-muted hover:bg-surface"
      >
        <X aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
