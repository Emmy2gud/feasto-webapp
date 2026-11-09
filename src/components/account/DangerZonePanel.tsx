import { useState } from "react";
import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SettingsPanel } from "@/components/account/SettingsPanel";

export function DangerZonePanel() {
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const canDelete = confirmation.trim() === "DELETE";

  return (
    <SettingsPanel
      title="Danger zone"
      description="Closing your account removes your order history and saved addresses."
    >
      <div className="flex flex-col gap-5 rounded-lg border border-destructive/25 bg-destructive/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
          <div>
            <p className="text-[15px] font-semibold text-ink">Delete your account</p>
            <p className="mt-0.5 max-w-[46ch] text-[13px] leading-relaxed text-ink-muted">
              This cannot be undone. Active orders must be completed before an account can be
              closed.
            </p>
          </div>
        </div>

        <Dialog
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (!next) setConfirmation("");
          }}
        >
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="h-11 shrink-0 rounded-lg border-destructive/40 bg-background font-semibold text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              Delete account
            </Button>
          </DialogTrigger>

          <DialogContent className="rounded-xl sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display text-lg">Delete your Feasto account?</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-ink-muted">
                Your order history, saved addresses and wallet balance will be removed. Type DELETE
                to confirm.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-2 py-1">
              <Label htmlFor="delete-confirmation" className="text-[13px] font-semibold text-ink">
                Confirmation
              </Label>
              <Input
                id="delete-confirmation"
                value={confirmation}
                onChange={(event) => setConfirmation(event.target.value)}
                placeholder="DELETE"
                autoComplete="off"
                className="h-11 rounded-md border-hairline bg-background px-3 text-[15px]"
              />
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                className="h-11 rounded-lg border-hairline font-semibold"
                onClick={() => {
                  setOpen(false);
                  setConfirmation("");
                }}
              >
                Keep my account
              </Button>
              <Button
                disabled={!canDelete}
                className="h-11 rounded-lg bg-destructive font-semibold text-white hover:bg-destructive/90"
              >
                Delete account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </SettingsPanel>
  );
}
