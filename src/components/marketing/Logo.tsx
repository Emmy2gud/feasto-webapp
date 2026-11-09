import logo from "@/assets/logo/logo.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  /** Hide the wordmark where the shell needs the mark only, such as the mobile app header. */
  showWordmark?: boolean;
};

/** Feasto mark plus wordmark. The image is decorative; the wordmark carries the name. */
export function Logo({ variant = "dark", className, showWordmark = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={logo}
        alt=""
        width={32}
        height={32}
        className="size-8 rounded-md object-cover"
        aria-hidden="true"
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-display text-[21px] leading-none font-bold tracking-[-0.02em]",
            variant === "light" ? "text-white" : "text-ink",
          )}
        >
          Feasto
        </span>
      ) : null}
    </span>
  );
}
