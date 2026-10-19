import { SectionHeading } from "@/components/section-heading";
import { TrustBadge } from "@/components/trust-badge";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { safeHref } from "@/lib/ordering";

export function Testimonials() {
  const items = site.testimonials.flatMap((item) => {
    const href = safeHref(item.sourceUrl);
    if (!item.quote.trim() || !item.sourceLabel.trim() || !href) return [];
    return [{ ...item, href }];
  });
  if (items.length === 0 && !site.rating) return null;
  if (items.length === 0) return null;

  const [featured, ...rest] = items;
  const source = site.rating?.source.trim();

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="bg-nori text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading invert kicker={source ? `${source} reviews` : "Reviews"} title="In their words" id="reviews-heading" />
          <TrustBadge invert />
        </div>
        {featured && (
          <figure className="mt-10 rounded-[2rem] bg-paper p-7 text-ink shadow-[0_24px_60px_-36px_rgba(0,0,0,0.45)] md:p-10">
            <blockquote>
              <p className="font-display text-2xl italic leading-snug text-balance md:text-4xl">“{featured.quote}”</p>
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold">
              {featured.author?.trim() && <span>{featured.author.trim()} · </span>}
              <a
                href={featured.href}
                className={cn("rounded-full text-brand underline decoration-salmon decoration-2 underline-offset-4", focusRing)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {featured.sourceLabel}
              </a>
            </figcaption>
          </figure>
        )}
        {rest.length > 0 && (
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((item) => (
              <li key={`${item.href}-${item.author ?? item.quote}`} className="rounded-3xl bg-paper p-6 text-ink">
                <blockquote>
                  <p className="font-display text-xl italic leading-relaxed">“{item.quote}”</p>
                </blockquote>
                <p className="mt-4 text-sm font-semibold">
                  {item.author?.trim() && <span>{item.author.trim()} · </span>}
                  <a
                    href={item.href}
                    className={cn(
                      "rounded-full text-brand underline decoration-salmon decoration-2 underline-offset-4",
                      focusRing,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.sourceLabel}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
