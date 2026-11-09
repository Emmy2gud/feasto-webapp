import type { ReactNode } from "react";

import { AuthHighlights, AuthPanel } from "./AuthPanel";
import type { AuthHighlight } from "./AuthPanel";

export type { AuthHighlight };

type AuthShellProps = {
  /** Page heading above the form. */
  title: string;
  subtitle: string;
  /** Brand panel headline. */
  heading: string;
  note: string;
  highlights: AuthHighlight[];
  children: ReactNode;
  /** Swap link or recovery action under the form. */
  footer: ReactNode;
};

/**
 * Authentication screen: form column first in the DOM for keyboard and screen
 * reader order, brand panel beside it on desktop and above it on phones.
 */
export function AuthShell({
  title,
  subtitle,
  heading,
  note,
  highlights,
  children,
  footer,
}: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background lg:grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
      <section className="order-2 flex flex-col px-5 pt-7 pb-10 sm:px-8 lg:order-2 lg:justify-center lg:px-14 lg:py-14">
        <div className="mx-auto w-full max-w-[400px]">
          <h1 className="font-display text-[30px] leading-[1.08] font-bold text-balance text-ink sm:text-[34px]">
            {title}
          </h1>
          <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted sm:text-[15px]">
            {subtitle}
          </p>

          <div className="mt-7">{children}</div>
          <div className="mt-5">{footer}</div>

          <p className="mt-8 text-[12px] leading-relaxed text-ink-muted/80">
            Prices in ₦. The delivery fee depends on the distance between the vendor and your
            address, and is shown before you confirm.
          </p>

          {/* Capabilities follow the form on phones; the panel carries the proof. */}
          <div className="mt-8 border-t border-hairline pt-6 lg:hidden">
            <AuthHighlights highlights={highlights} tone="light" />
          </div>
        </div>
      </section>

      <div className="order-1 flex flex-col lg:order-1">
        <AuthPanel heading={heading} note={note} highlights={highlights} />
      </div>
    </div>
  );
}
