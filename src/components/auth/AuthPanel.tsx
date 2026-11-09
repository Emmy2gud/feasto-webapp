import type { LucideIcon } from "lucide-react";

import { Logo } from "@/components/marketing/Logo";
import { cn } from "@/lib/utils";

import amaka from "@/assets/people/amaka.jpg";
import tunde from "@/assets/people/tunde.jpg";
import zainab from "@/assets/people/zainab.jpg";
import emeka from "@/assets/people/emeka.jpg";

export type AuthHighlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const customers = [
  { src: amaka, alt: "Amaka, a Feasto customer in Yaba" },
  { src: tunde, alt: "Tunde, a Feasto customer in Surulere" },
  { src: zainab, alt: "Zainab, a Feasto customer in Ikoyi" },
  { src: emeka, alt: "Emeka, a Feasto customer in Yaba" },
];

type Tone = "dark" | "light";

function toneText(tone: Tone) {
  return tone === "dark" ? "text-white/55" : "text-ink-muted";
}

/** Overlapping customer faces with a plain caption. */
export function AuthAvatarRow({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <ul className="flex items-center">
        {customers.map((customer, index) => (
          <li
            key={customer.src}
            className={cn(
              "size-9 overflow-hidden rounded-[10px] ring-2",
              tone === "dark" ? "ring-secondary" : "ring-background",
              index > 0 && "-ml-2.5",
            )}
          >
            <img
              src={customer.src}
              alt={customer.alt}
              width={72}
              height={72}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
          </li>
        ))}
      </ul>
      <p className={cn("text-[12px] leading-snug", toneText(tone))}>
        Customers ordering
        <br />
        across Lagos today
      </p>
    </div>
  );
}

/** One written review, attributed to a real order. */
export function AuthQuote({ className, tone = "dark" }: { className?: string; tone?: Tone }) {
  return (
    <figure className={cn("max-w-[34ch]", className)}>
      <blockquote
        className={cn(
          "text-[13px] leading-relaxed",
          tone === "dark" ? "text-white/80" : "text-ink",
        )}
      >
        “The jollof arrived in 26 minutes and it was still hot.”
      </blockquote>
      <figcaption className={cn("mt-1.5 text-[12px]", toneText(tone))}>
        Amaka O. · Amaka's Gourmet, Surulere
      </figcaption>
    </figure>
  );
}

export function AuthVoices({ className, tone = "dark" }: { className?: string; tone?: Tone }) {
  return (
    <div className={cn("flex flex-col gap-3.5", className)}>
      <AuthAvatarRow tone={tone} />
      <AuthQuote tone={tone} />
    </div>
  );
}

/** Three verified capabilities. */
export function AuthHighlights({
  highlights,
  className,
  tone = "dark",
}: {
  highlights: AuthHighlight[];
  className?: string;
  tone?: Tone;
}) {
  return (
    <ul className={cn("flex flex-col", className)}>
      {highlights.map((highlight) => (
        <li
          key={highlight.title}
          className={cn(
            "flex gap-3 border-b py-3 first:pt-0 last:border-b-0 last:pb-0",
            tone === "dark" ? "border-white/10" : "border-hairline",
          )}
        >
          <highlight.icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
          <div>
            <p
              className={cn(
                "text-[13px] font-semibold",
                tone === "dark" ? "text-white" : "text-ink",
              )}
            >
              {highlight.title}
            </p>
            <p
              className={cn(
                "mt-0.5 text-[12px] leading-relaxed",
                tone === "dark" ? "text-white/60" : "text-ink-muted",
              )}
            >
              {highlight.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** An order mid-delivery, which is what the account is actually for. */
function ActiveOrderCard() {
  const steps = [
    { label: "Picked up", state: "done" },
    { label: "On the way", state: "current" },
    { label: "Delivered", state: "next" },
  ] as const;

  return (
    <article className="rounded-lg bg-white/[0.06] p-3.5 ring-1 ring-white/10">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[11px] font-medium tracking-wide text-white/50">Order FT-4821</p>
        <p className="text-[11px] font-medium text-white/50">Arriving 12:40</p>
      </div>

      <p className="mt-1.5 text-[13px] leading-snug font-semibold text-white">
        Jollof Kitchen, Yaba
        <span aria-hidden="true" className="mx-1.5 text-white/40">
          →
        </span>
        <span className="font-normal text-white/70">12 Herbert Macaulay Way</span>
      </p>

      <ol className="mt-3 grid grid-cols-3 gap-1.5">
        {steps.map((step) => (
          <li key={step.label} className="flex flex-col gap-1.5">
            <span
              aria-hidden="true"
              className={cn(
                "h-1 rounded-full",
                step.state === "next" ? "bg-white/15" : "bg-primary",
              )}
            />
            <span
              className={cn(
                "text-[11px] leading-none font-medium",
                step.state === "current" ? "text-white" : "text-white/45",
              )}
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}

type AuthPanelProps = {
  heading: string;
  note: string;
  highlights: AuthHighlight[];
};

/**
 * Brand panel: the promise, an order in progress and the customers already
 * ordering. Phones get the condensed version above the form.
 */
export function AuthPanel({ heading, note, highlights }: AuthPanelProps) {
  return (
    <aside className="relative isolate flex h-full flex-col overflow-hidden bg-secondary px-5 pt-5 pb-6 text-white lg:justify-between lg:px-10 lg:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 -z-10 size-[320px] rounded-full bg-primary/25 blur-3xl"
      />

      <div className="flex items-center justify-between gap-3">
        <Logo variant="light" />
        <span className="hidden text-[12px] text-white/50 lg:inline">
          Lagos · Abuja · Port Harcourt
        </span>
      </div>

      <div className="mt-5 lg:mt-9">
        <h2 className="max-w-[19ch] font-display text-[24px] leading-[1.1] font-bold text-balance sm:text-[28px] lg:text-[38px]">
          {heading}
        </h2>
        <p className="mt-2 max-w-[38ch] text-[13px] leading-relaxed text-white/60 sm:text-[14px]">
          {note}
        </p>

        <AuthAvatarRow className="mt-4" />

        <div className="mt-4 hidden sm:block">
          <ActiveOrderCard />
        </div>

        <AuthHighlights highlights={highlights} className="mt-6 hidden lg:flex" />
      </div>

      <AuthQuote className="mt-6 hidden lg:block" />
    </aside>
  );
}
