import { Star } from "lucide-react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function TrustBadge({ className, invert = false }: { className?: string; invert?: boolean }) {
  const rating = site.rating;
  if (!rating || !Number.isFinite(rating.value) || rating.count <= 0) return null;

  const source = rating.source.trim();

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold",
        invert ? "bg-paper/10 text-paper ring-1 ring-paper/20" : "bg-paper text-ink ring-1 ring-ink/10",
        className,
      )}
    >
      <Star aria-hidden className="size-4 fill-salmon text-salmon" />
      <span>{rating.value.toFixed(1)}</span>
      <span className={invert ? "font-medium text-paper/80" : "font-medium text-ink/70"}>
        {rating.count.toLocaleString("en-US")}
        {source ? ` ${source}` : ""} reviews
      </span>
    </p>
  );
}
