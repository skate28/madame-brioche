import Link from "next/link";

import { Logo } from "@/components/logo";
import { OrderButton } from "@/components/order-button";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { primaryNav } from "@/lib/nav";

export function Header() {
  const name = site.name.trim() || "Madame Brioche";
  const links = primaryNav();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-rice/90 backdrop-blur-md">
      <div className="h-1.5 bg-brand" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-5 py-3">
        <Link href="/" className={cn("mr-auto inline-flex min-w-0 items-center gap-2.5 rounded-full", focusRing)}>
          <Logo priority />
          <span className="truncate font-display text-[1.7rem] font-medium leading-none tracking-tight">{name}</span>
        </Link>
        <OrderButton placement="header" />
        <nav
          aria-label="Primary"
          className="scrollbar-none order-3 flex w-full gap-4 overflow-x-auto pb-1 text-sm font-semibold xl:order-none xl:w-auto xl:pb-0"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap rounded-full px-1 py-2 text-ink/75 underline-offset-4 hover:text-ink hover:underline hover:decoration-brand hover:decoration-2",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
