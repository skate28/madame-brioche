import Link from "next/link";

import { Logo } from "@/components/logo";
import { TextButton } from "@/components/text-button";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { primaryNav } from "@/lib/nav";
import { safeHref } from "@/lib/ordering";

export function Footer() {
  const name = site.name.trim() || "Madame Brioche";
  const phoneHref = safeHref(telHref(site.phone));
  const directions = directionsHref();
  const links = primaryNav();
  const socials = site.socials.flatMap((social) => {
    const href = safeHref(social.href);
    if (!href || !social.label.trim()) return [];
    return [{ label: social.label.trim(), href }];
  });
  const credit = site.footerCredit.trim() || "Built by nicklopacki.com";

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Logo className="size-14 rounded-xl" />
          <p className="mt-4 font-display text-5xl font-medium leading-none tracking-tight">{name}</p>
          {site.tagline.trim() && (
            <p className="mt-4 max-w-xs font-display text-xl italic leading-snug text-salmon">{site.tagline}</p>
          )}
          {site.address.full.trim() && <p className="mt-4 text-paper/85">{site.address.full}</p>}
          {site.locationHint.trim() && (
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">{site.locationHint}</p>
          )}
          {phoneHref && site.phone.display.trim() && (
            <a
              href={phoneHref}
              className={cn(
                "mt-4 inline-block rounded-full text-lg font-semibold underline decoration-salmon underline-offset-4",
                focusRing,
              )}
            >
              {site.phone.display}
            </a>
          )}
        </div>
        <nav aria-label="Footer" className="grid content-start gap-2 text-sm font-semibold">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn("w-fit rounded-full py-1", focusRing)}>
              {link.label}
            </Link>
          ))}
          {site.faq.some((item) => item.question.trim() && item.answer.trim()) && (
            <Link href="/#faq" className={cn("w-fit rounded-full py-1", focusRing)}>
              Questions
            </Link>
          )}
          {directions && (
            <a
              href={directions}
              className={cn("w-fit rounded-full py-1", focusRing)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          )}
        </nav>
        <div className="grid content-start gap-3 text-sm">
          {site.hours.summary.trim() && <p className="text-base font-semibold">{site.hours.summary}</p>}
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              className={cn("w-fit rounded-full underline underline-offset-4", focusRing)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label}
            </a>
          ))}
          <TextButton variant="onDark" className="mt-2 w-fit" />
        </div>
      </div>
      <div className="border-t border-paper/15 px-5 py-6 pb-44 md:pb-6">
        <p className="text-center text-sm">
          <a
            href="https://nicklopacki.com"
            className={cn("rounded-full underline decoration-salmon underline-offset-4", focusRing)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {credit}
          </a>
        </p>
      </div>
    </footer>
  );
}
