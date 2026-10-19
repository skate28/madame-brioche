import { MapPin } from "lucide-react";

import { buttonSecondary } from "@/components/styles";
import { cn } from "@/lib/cn";
import { directionsHref } from "@/lib/maps";

export function DirectionsButton({
  className,
  fullWidth = false,
}: {
  className?: string;
  fullWidth?: boolean;
}) {
  const href = directionsHref();
  if (!href) return null;

  return (
    <a
      href={href}
      className={cn(buttonSecondary, "min-h-14 px-6 text-base", fullWidth && "w-full sm:w-auto", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MapPin aria-hidden className="size-4 shrink-0" />
      Get directions
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
