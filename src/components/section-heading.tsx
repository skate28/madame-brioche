import { cn } from "@/lib/cn";

export function SectionHeading({
  kicker,
  title,
  id,
  invert = false,
  className,
}: {
  kicker?: string;
  title: string;
  id: string;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {kicker?.trim() && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            invert ? "text-salmon" : "text-brand-deep",
          )}
        >
          {kicker}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance md:text-6xl",
          kicker?.trim() && "mt-3",
        )}
      >
        {title}
      </h2>
      <span
        aria-hidden
        className={cn("mt-5 block h-px w-16", invert ? "bg-salmon" : "bg-brand")}
      />
    </div>
  );
}
