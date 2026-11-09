import { useState } from "react";

import { cn } from "@/lib/utils";

type LoadingImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};


export function LoadingImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  width,
  height,
}: LoadingImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={cn("relative block overflow-hidden bg-surface-strong", className)}>
      {!loaded ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-background/70 to-transparent"
        />
      ) : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 size-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName,
        )}
      />
    </span>
  );
}
