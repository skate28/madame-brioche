"use client";

import { useEffect, useState } from "react";

import { focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";

export function MenuNav({ categories }: { categories: { id: string; name: string }[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const [top, setTop] = useState(80);
  const categoryKey = categories.map((category) => category.id).join("|");

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const update = () => setTop(Math.ceil(header.getBoundingClientRect().height));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ids = categoryKey.split("|").filter(Boolean);
    let frame = 0;

    const update = () => {
      const nav = document.querySelector("nav[aria-label='Menu categories']");
      const line = (nav?.getBoundingClientRect().bottom ?? top + 64) + 28;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const node = document.getElementById(id);
        if (!node) continue;
        if (node.getBoundingClientRect().top <= line) current = id;
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [categoryKey, top]);

  useEffect(() => {
    const nav = document.querySelector("nav[aria-label='Menu categories'] ul");
    const current = nav?.querySelector<HTMLElement>("a[aria-current='location']");
    if (!nav || !current) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = current.getBoundingClientRect();
    if (linkRect.left < navRect.left || linkRect.right > navRect.right) {
      current.scrollIntoView({ inline: "center", block: "nearest" });
    }
  }, [active]);

  if (categories.length < 2) return null;

  return (
    <nav
      aria-label="Menu categories"
      style={{ top }}
      className="sticky z-30 -mx-5 mt-10 border-y border-ink/10 bg-rice/95 px-5 py-3 backdrop-blur-md"
    >
      <ul className="scrollbar-none flex gap-2 overflow-x-auto">
        {categories.map((category) => {
          const current = category.id === active;
          return (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                aria-current={current ? "location" : undefined}
                onClick={() => setActive(category.id)}
                className={cn(
                  "inline-flex whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold",
                  focusRing,
                  current
                    ? "bg-brand text-paper"
                    : "bg-paper text-ink ring-1 ring-inset ring-ink/10 hover:ring-brand/40",
                )}
              >
                {category.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
