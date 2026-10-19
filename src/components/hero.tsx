"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CallButton } from "@/components/call-button";
import { OrderButton } from "@/components/order-button";
import { PhotoCard } from "@/components/photo-card";
import { ShopStatusLine } from "@/components/shop-status";
import { TextButton } from "@/components/text-button";
import { TrustBadge } from "@/components/trust-badge";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { scheduleRows } from "@/lib/hours";
import { directionsHref } from "@/lib/maps";
import { primaryOnlineLink } from "@/lib/ordering";
import { heroPhoto } from "@/lib/photos";

export function Hero() {
  const shouldReduce = useReducedMotion();
  const hero = heroPhoto();
  const name = site.name.trim() || "Madame Brioche";
  const place = [site.address.neighborhood, site.address.city].filter((part) => part.trim()).join(" · ");
  const rows = scheduleRows(site.hours);
  const directions = directionsHref();
  const online = primaryOnlineLink();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,24rem)] lg:py-16">
        <div>
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.5, ease }}
          >
            {place && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">{place}</p>
            )}
            <h1 className="mt-3 font-display text-[clamp(3.6rem,9vw,6.4rem)] font-medium leading-[0.88] tracking-tight text-ink">
              {name}
            </h1>
            {site.tagline.trim() && (
              <p className="mt-5 max-w-xl font-display text-2xl italic leading-snug text-ink/85 md:text-3xl">
                {site.tagline}
              </p>
            )}
          </motion.div>
          <div className="mt-6 flex flex-col items-start gap-4">
            <ShopStatusLine />
            <TrustBadge />
          </div>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <OrderButton placement="hero" />
            <CallButton placement="hero" />
            <TextButton />
          </div>
          {site.address.full.trim() && (
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/75">
              {directions ? (
                <a
                  href={directions}
                  className={cn("rounded-full underline decoration-brand/50 underline-offset-4 hover:decoration-brand", focusRing)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.address.full}
                </a>
              ) : (
                site.address.full
              )}
            </p>
          )}
          {site.locationHint.trim() && (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{site.locationHint}</p>
          )}
        </div>
        {hero && (
          <motion.div
            className="relative mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none"
            initial={shouldReduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldReduce ? { duration: 0 } : { duration: 0.65, delay: 0.08, ease }}
          >
            <div aria-hidden className="absolute -bottom-4 -left-3 right-5 top-8 rounded-[1.8rem] bg-salmon" />
            <PhotoCard
              photo={hero}
              priority
              sizes="(min-width: 1024px) 24rem, 80vw"
              className="relative"
            />
          </motion.div>
        )}
        {rows.length > 0 && (
          <ul className="col-span-full grid grid-cols-2 gap-6 border-t border-ink/10 pt-6 sm:grid-cols-3">
            {rows.map((row) => (
              <li key={row.label}>
                <p className="font-display text-3xl font-medium leading-none tracking-tight md:text-4xl">
                  {row.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">{row.label}</p>
              </li>
            ))}
            {online && (
              <li>
                <p className="font-display text-3xl font-medium leading-none tracking-tight md:text-4xl">Pickup</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">Order online</p>
              </li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
}
