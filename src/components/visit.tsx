import { CallButton } from "@/components/call-button";
import { DirectionsButton } from "@/components/directions-button";
import { PhotoCard } from "@/components/photo-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ShopStatusLine } from "@/components/shop-status";
import { TextButton } from "@/components/text-button";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { scheduleRows } from "@/lib/hours";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";
import { safeHref } from "@/lib/ordering";
import { photoByFile } from "@/lib/photos";

export function Visit() {
  const address = site.address.full.trim();
  const hint = site.locationHint.trim();
  const payment = site.paymentNote.trim();
  const phoneHref = safeHref(telHref(site.phone));
  const directions = directionsHref();
  const embed = mapEmbedSrc();
  const rows = scheduleRows(site.hours);
  const doors = photoByFile("storefront-doors-logo.jpg");
  const hasAnything = Boolean(
    address || hint || phoneHref || directions || embed || rows.length || site.hours.summary.trim() || doors,
  );

  if (!hasAnything) return null;

  return (
    <section id="visit" aria-labelledby="visit-heading" className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:py-24">
        <Reveal>
          <SectionHeading kicker={site.address.city.trim() || "Visit"} title="Visit" id="visit-heading" />
          {address && <p className="mt-6 text-xl leading-snug">{address}</p>}
          {hint && <p className="mt-2 max-w-xl text-ink/75">{hint}</p>}
          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-deep">Hours</h3>
            <ShopStatusLine className="mt-3" />
            {rows.length > 0 && (
              <ul className="mt-4 max-w-sm divide-y divide-ink/10">
                {rows.map((row) => (
                  <li key={row.label} className="flex items-baseline justify-between gap-6 py-2.5">
                    <span className="font-semibold">{row.label}</span>
                    <span className={row.value === "Closed" ? "font-semibold text-brand" : "tabular-nums"}>
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {payment && <p className="mt-4 text-sm font-medium">{payment}</p>}
          </div>
          {phoneHref && site.phone.display.trim() && (
            <p className="mt-6">
              <a
                href={phoneHref}
                className={cn(
                  "rounded-full text-lg font-semibold underline decoration-salmon decoration-2 underline-offset-4",
                  focusRing,
                )}
              >
                {site.phone.display}
              </a>
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CallButton placement="visit" variant="primary" />
            <TextButton />
            <DirectionsButton fullWidth />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-4">
          {doors && <PhotoCard photo={doors} sizes="(min-width: 1024px) 36rem, 92vw" />}
          {embed && (
            <iframe
              title={`Map of ${site.name || "Madame Brioche"}${address ? ` at ${address}` : ""}`}
              src={embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-[1.5rem] border border-ink/10 bg-paper lg:h-[28rem]"
            />
          )}
        </Reveal>
      </div>
    </section>
  );
}
