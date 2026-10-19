"use client";

import { useEffect, useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { getShopStatus, type ShopStatus } from "@/lib/hours";

/** Status is computed after mount so a static page does not freeze the clock. */
export function useShopStatus(): ShopStatus | null {
  const [status, setStatus] = useState<ShopStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getShopStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}

export function ShopStatusLine({
  className,
  showNotice = true,
}: {
  className?: string;
  showNotice?: boolean;
}) {
  const status = useShopStatus();
  const summary = site.hours.summary.trim();
  let label = summary || "Hours coming soon";
  let detail = "";
  let tone: "open" | "closed" | "neutral" = "neutral";

  if (status?.isOpen === true) {
    label = "Open now";
    detail = status.todayWindow ? `Today ${status.todayWindow}` : "";
    tone = "open";
  } else if (status?.isOpen === false) {
    label = "Closed";
    detail = showNotice ? status.closedNotice : "";
    tone = "closed";
  }

  return (
    <div className={className}>
      <p
        className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-paper px-3 py-1.5 text-sm font-semibold text-ink ring-1 ring-ink/10"
        aria-live="polite"
      >
        <span
          aria-hidden
          className={cn(
            "size-2 shrink-0 rounded-full",
            tone === "open" && "bg-nori",
            tone === "closed" && "bg-brand",
            tone === "neutral" && "bg-salmon",
          )}
        />
        <span>{label}</span>
        {tone === "open" && detail && <span className="font-medium text-ink/70">{detail}</span>}
      </p>
      {tone === "closed" && detail && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/80">{detail}</p>
      )}
    </div>
  );
}
