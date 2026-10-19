import { site } from "@/content/site";
import { visibleCategories } from "@/lib/menu";
import { deliveryLinks, primaryOnlineLink, safeHref } from "@/lib/ordering";
import { galleryPhotos } from "@/lib/photos";

export type NavLink = {
  href: string;
  label: string;
};

export function primaryNav(): NavLink[] {
  const about = Boolean(
    site.about.heading.trim() || site.about.paragraphs.some((paragraph) => paragraph.trim()),
  );
  const order = Boolean(
    primaryOnlineLink() || deliveryLinks().length > 0 || site.preorder.heading.trim(),
  );
  const cakes = Boolean(site.customOrders?.heading.trim() || site.customOrders?.intro.trim());

  return [
    { href: "/#about", label: "About", show: about },
    { href: "/#order", label: "Order", show: order },
    { href: "/#menu", label: "Menu", show: visibleCategories(site.menu).length > 0 },
    { href: "/#custom-orders", label: "Cakes", show: cakes },
    { href: "/#gallery", label: "Gallery", show: galleryPhotos().length > 0 },
    {
      href: "/#reviews",
      label: "Reviews",
      show: site.testimonials.some((item) => item.quote.trim() && safeHref(item.sourceUrl)),
    },
    { href: "/#visit", label: "Visit", show: true },
  ]
    .filter((link) => link.show)
    .map(({ href, label }) => ({ href, label }));
}
