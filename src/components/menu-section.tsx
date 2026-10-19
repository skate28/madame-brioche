import { MenuNav } from "@/components/menu-nav";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { visibleCategories } from "@/lib/menu";
import { formatPrice } from "@/lib/money";

export function MenuSection() {
  const categories = visibleCategories(site.menu);
  const count = categories.reduce((sum, category) => sum + category.items.length, 0);
  const kicker = [site.priceRange.trim(), count > 0 ? `${count} items` : ""].filter(Boolean).join(" · ");

  if (categories.length === 0 && !site.menuNote.trim()) return null;

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <Reveal>
          <SectionHeading kicker={kicker || "Menu"} title="Menu" id="menu-heading" />
          {site.menuNote.trim() && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">{site.menuNote}</p>
          )}
        </Reveal>
        <MenuNav categories={categories.map((category) => ({ id: category.id, name: category.name }))} />
        {categories.length > 0 && (
          <div className="mt-10 space-y-16">
            {categories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                tabIndex={-1}
                className="scroll-mt-16 outline-none"
              >
                <div className="border-b border-brand/30 pb-3">
                  <h3
                    id={`${category.id}-heading`}
                    className="font-display text-4xl font-medium leading-none tracking-tight md:text-5xl"
                  >
                    {category.name}
                  </h3>
                  {category.description?.trim() && (
                    <p className="mt-3 max-w-2xl font-display text-xl italic leading-snug text-ink/75">
                      {category.description}
                    </p>
                  )}
                </div>
                {category.items.length === 0 ? null : (
                  <ul className="grid md:grid-cols-2 md:gap-x-14">
                    {category.items.map((item) => (
                      <li key={item.id} className="border-b border-ink/10 py-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="text-[1.05rem] font-semibold leading-snug">
                            {item.name}
                            {item.isNew && (
                              <span className="ml-2 inline-flex translate-y-[-1px] items-center rounded-full bg-salmon px-2 py-0.5 align-middle font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink">
                                New
                              </span>
                            )}
                          </h4>
                          {typeof item.price === "number" && Number.isFinite(item.price) && (
                            <p className="shrink-0 font-display text-[1.45rem] leading-none tabular-nums text-brand-deep">
                              {item.priceFrom && <span className="sr-only">from </span>}
                              {formatPrice(item.price, Boolean(item.priceFrom))}
                            </p>
                          )}
                        </div>
                        {item.description?.trim() && (
                          <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink/70">
                            {item.description}
                          </p>
                        )}
                        {item.pieces ? (
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-nori">
                            {item.pieces} pieces
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
