import { CallButton } from "@/components/call-button";
import { OrderButton } from "@/components/order-button";
import { Reveal } from "@/components/reveal";
import { TextButton } from "@/components/text-button";
import { buttonGhostLight } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { deliveryLinks, isUberEats, preorderSmsHref, primaryOnlineLink, safeHref } from "@/lib/ordering";

export function OrderSection() {
  const online = primaryOnlineLink();
  const delivery = deliveryLinks();
  const heading = site.preorder.heading.trim();
  const intro = site.preorder.intro.trim();
  const sms = preorderSmsHref();
  const phone = safeHref(telHref(site.phone));

  if (!online && delivery.length === 0 && !sms && !phone && !heading && !intro) return null;

  return (
    <section id="order" aria-labelledby="order-heading" className="pb-4">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-brand text-paper shadow-[0_32px_80px_-42px_rgba(154,66,32,0.85)]">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:items-end lg:p-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-salmon">Pickup</p>
                <h2
                  id="order-heading"
                  className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl"
                >
                  {heading || "Order"}
                </h2>
                {intro && <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/90">{intro}</p>}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <OrderButton placement="panel" />
                  <CallButton placement="hero" variant="ghost" />
                  <TextButton variant="ghost" />
                </div>
              </div>
              {delivery.length > 0 && (
                <div className="rounded-[1.5rem] bg-brand-deep/35 p-6 ring-1 ring-paper/20">
                  <h3 className="font-display text-3xl font-medium leading-none">Delivery</h3>
                  <ul className="mt-5 space-y-4">
                    {delivery.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={cn(buttonGhostLight, "w-full")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                        {isUberEats(link) && (
                          <p className="mt-2 text-sm leading-relaxed text-paper/75">
                            Delivery currently unavailable
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
