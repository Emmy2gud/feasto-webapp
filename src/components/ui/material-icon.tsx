import { cn } from "@/lib/utils";

interface MaterialIconProps {
  icon: string;
  className?: string;
  filled?: boolean;
}

export function MaterialIcon({ icon, className, filled = false }: MaterialIconProps) {
  return (
    <span 
      className={cn(
        "material-symbols-outlined select-none",
        filled && "material-symbols-outlined-filled",
        className
      )}
      style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
    >
      {icon}
    </span>
  );
}
