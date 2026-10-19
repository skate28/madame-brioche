"use client";

import { CallButton } from "@/components/call-button";
import { OrderButton } from "@/components/order-button";
import { useShopStatus } from "@/components/shop-status";
import { TextButton } from "@/components/text-button";

export function MobileBar() {
  const status = useShopStatus();
  const closed = status?.isOpen === false && Boolean(status.closedNotice);

  return (
    <div
      role="region"
      aria-label="Call, text, or order"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 shadow-[0_-12px_40px_rgba(58,42,34,0.12)] backdrop-blur print:hidden md:hidden"
    >
      {closed && (
        <p className="px-4 pt-2.5 text-center text-xs font-medium leading-snug text-ink">{status?.closedNotice}</p>
      )}
      <div className="flex gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <CallButton placement="bar" variant="secondary" className="min-w-0 flex-1" />
        <TextButton placement="bar" className="min-w-0 flex-1" />
        <OrderButton placement="bar" className="min-w-0 flex-1" />
      </div>
    </div>
  );
}
