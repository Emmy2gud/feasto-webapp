import { WifiOff } from "lucide-react";

import { useOnline } from "@/hooks/useOnline";

/** Thin status strip shown only while the device has no connection. */
export function OfflineNotice() {
  const online = useOnline();

  if (online) return null;

  return (
    <div
      role="status"
      className="flex items-center justify-center gap-2 bg-secondary px-4 py-2 text-center text-[12px] font-medium text-white"
    >
      <WifiOff aria-hidden="true" className="size-3.5" />
      You are offline. Browsing still works; orders and tracking resume when you reconnect.
    </div>
  );
}
