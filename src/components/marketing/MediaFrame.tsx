import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Ratio = "square" | "portrait" | "landscape" | "wide" | "photo";

type MediaFrameProps = {
  src: string;
  alt: string;
  ratio?: Ratio;
  className?: string;
  imgClassName?: string;
  /** Rendered above the image, inside the frame. */
  overlay?: ReactNode;
  /** Skip lazy loading for above-the-fold imagery. */
  priority?: boolean;
  width?: number;
  height?: number;
};

const ratioClasses: Record<Ratio, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  photo: "aspect-[3/2]",
};

/** Photography frame with a restrained radius and a warm placeholder tone. */
export function MediaFrame({
  src,
  alt,
  ratio = "landscape",
  className,
  imgClassName,
  overlay,
  priority = false,
  width,
  height,
}: MediaFrameProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-surface-strong", ratioClasses[ratio], className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("size-full object-cover", imgClassName)}
      />
      {overlay}
    </div>
  );
}
