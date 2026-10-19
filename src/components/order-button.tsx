import { ArrowUpRight } from "lucide-react";

import { buttonInverse, buttonPrimary } from "@/components/styles";
import { cn } from "@/lib/cn";
import { primaryOnlineLink } from "@/lib/ordering";

type Placement = "hero" | "header" | "bar" | "panel";

/** Primary Order CTA. Hidden when the online ordering URL is empty. */
export function OrderButton({
  placement = "hero",
  className,
}: {
  placement?: Placement;
  className?: string;
}) {
  const link = primaryOnlineLink();
  if (!link) return null;

  const prominent = placement === "hero" || placement === "panel";
  const short = placement === "bar" || placement === "header";

  return (
    <a
      href={link.href}
      className={cn(
        placement === "panel" ? buttonInverse : buttonPrimary,
        prominent && "min-h-14 px-6 text-base",
        placement === "panel" && "w-full sm:w-auto",
        placement === "bar" && "w-full px-3",
        placement === "header" && "shrink-0 px-4",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {placement !== "bar" && <ArrowUpRight aria-hidden className="size-4 shrink-0" />}
      {short ? (
        <>
          <span className={placement === "header" ? "lg:hidden" : undefined}>Order</span>
          {placement === "header" && <span className="hidden lg:inline">{link.label}</span>}
        </>
      ) : (
        <span>{link.label}</span>
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
