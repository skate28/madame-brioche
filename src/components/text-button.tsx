import { MessageSquare } from "lucide-react";

import { buttonGhostLight, buttonOnDark, buttonSecondary } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { preorderSmsHref } from "@/lib/ordering";

/**
 * Text-ahead CTA. Uses an sms ordering link when one exists.
 * Otherwise `textTarget` in site.ts, which falls back to the shop line.
 */
export function TextButton({
  label,
  message,
  placement = "default",
  variant = "secondary",
  className,
}: {
  label?: string;
  message?: string;
  placement?: "default" | "bar";
  variant?: "secondary" | "ghost" | "onDark";
  className?: string;
}) {
  const body = message ?? site.preorder.textMessage;
  const href = preorderSmsHref(site, body);
  if (!href) return null;

  const full = label?.trim() || site.preorder.textButtonLabel.trim() || "Text us your order";
  const tone = variant === "ghost" ? buttonGhostLight : variant === "onDark" ? buttonOnDark : buttonSecondary;

  return (
    <a
      href={href}
      aria-label={full}
      className={cn(
        tone,
        placement === "bar" && "w-full px-3",
        placement === "default" && "min-h-14 px-6 text-base",
        className,
      )}
    >
      <MessageSquare aria-hidden className="size-4 shrink-0" />
      <span>{placement === "bar" ? "Text" : full}</span>
    </a>
  );
}
