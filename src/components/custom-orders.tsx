import { Reveal } from "@/components/reveal";
import { TextButton } from "@/components/text-button";
import { buttonSecondary } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { preorderSmsHref, safeHref } from "@/lib/ordering";

export function CustomOrders() {
  const orders = site.customOrders;
  if (!orders) return null;

  const heading = orders.heading.trim();
  const intro = orders.intro.trim();
  const examples = orders.examples.map((example) => example.trim()).filter(Boolean);
  const lead = orders.leadTimeNote.trim();
  const email = orders.email.trim();
  const emailHref = email ? safeHref(`mailto:${email}`) : null;
  const textLabel = orders.textButtonLabel.trim();
  const showText = Boolean(textLabel && preorderSmsHref(site, orders.textMessage));

  if (!heading && !intro && examples.length === 0 && !lead && !emailHref && !showText) return null;

  return (
    <section id="custom-orders" aria-labelledby="custom-orders-heading" className="pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] bg-paper p-7 ring-1 ring-ink/10 sm:p-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">For the table</p>
              <h2
                id="custom-orders-heading"
                className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl"
              >
                {heading || "Larger orders"}
              </h2>
              <span aria-hidden className="mt-5 block h-px w-16 bg-salmon" />
              {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">{intro}</p>}
              {lead && <p className="mt-4 text-sm font-semibold text-brand-deep">{lead}</p>}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {showText && <TextButton label={textLabel} message={orders.textMessage} />}
                {emailHref && (
                  <a href={emailHref} className={cn(buttonSecondary, "min-h-14 px-6 text-base")}>
                    {email}
                  </a>
                )}
              </div>
            </div>
            {examples.length > 0 && (
              <ul className="self-center">
                {examples.map((example) => (
                  <li
                    key={example}
                    className="border-t border-ink/10 py-4 font-display text-2xl leading-snug last:border-b"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
