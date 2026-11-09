import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import type { LandingSurface } from "@/types/landing";

type SectionProps = {
  children: ReactNode;
  id?: string;
  surface?: LandingSurface;
  spacing?: "hero" | "default" | "tight";
  className?: string;
  containerClassName?: string;
};

const surfaceClasses: Record<LandingSurface, string> = {
  white: "bg-background text-ink",
  surface: "bg-surface text-ink",
  navy: "bg-secondary text-white",
};

const spacingClasses = {
  hero: "pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-24",
  default: "py-14 sm:py-16 lg:py-24",
  tight: "py-10 sm:py-12 lg:py-16",
};

/** Page section with the shared max-width container and vertical rhythm. */
export function Section({
  children,
  id,
  surface = "white",
  spacing = "default",
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24", surfaceClasses[surface], spacingClasses[spacing], className)}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  size?: "sm" | "md";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Heading block for a section. Deliberately has no kicker/eyebrow slot: the
 * heading itself says what the section is about.
 */
export function SectionHeading({
  title,
  description,
  action,
  align = "left",
  size = "md",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:gap-6",
        action && align === "left" && "lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-3", align === "center" && "items-center")}>
        <h2
          className={cn(
            "font-display font-bold text-balance",
            tone === "dark" ? "text-white" : "text-ink",
            size === "md" ? "text-display-sm lg:text-display-md" : "text-3xl sm:text-4xl",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-[58ch] text-[15px] leading-relaxed sm:text-base",
              tone === "dark" ? "text-white/65" : "text-ink-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

type QuietLinkProps = {
  children: ReactNode;
  className?: string;
};

/** Understated text action with a nudge on hover. Used for secondary routes. */
export function QuietLink({ children, className }: QuietLinkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
