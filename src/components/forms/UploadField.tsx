import type { LucideIcon } from "lucide-react";

type UploadFieldProps = {
  id: string;
  title: string;
  hint: string;
  icon: LucideIcon;
  accept?: string;
};

/** File picker rendered as a dashed target. The whole tile is the label. */
export function UploadField({ id, title, hint, icon: Icon, accept }: UploadFieldProps) {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-hairline bg-background px-4 py-8 text-center transition-colors hover:border-primary/50 hover:bg-surface/70 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/15"
    >
      <span className="grid size-10 place-items-center rounded-md bg-surface text-ink-muted transition-colors group-hover:bg-primary/10 group-hover:text-primary">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="text-[15px] font-semibold text-ink">{title}</span>
      <span className="text-[13px] leading-relaxed text-ink-muted">{hint}</span>
      <input id={id} type="file" accept={accept} className="sr-only" />
    </label>
  );
}
