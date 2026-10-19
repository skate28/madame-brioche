/**
 * Content shapes for Madame Brioche.
 * Copied from the Sushi & Sub build (sushisub/handoff/types.reference.ts), which was adapted
 * from the Purple Bagel starter. All editable values live in `site.ts`. Components should
 * tolerate empty fields.
 *
 * EXTENSIONS vs Sushi & Sub (all additive/optional, so the Sushi & Sub layout still compiles):
 *  1. PhotoCredit adds "toast-listing" and "unation-listing" (photos the business itself posted
 *     to its Toast page / UNation profile).
 *  2. MenuItem adds optional `priceFrom` (price is a starting price, e.g. drinks "$3.75+"
 *     with size upcharges) and `isNew` (the shop marks these "New!" on Toast; render a badge).
 *  3. SiteContent adds optional `customOrders` (cake / pastry-box / group-order intake section).
 *     Render it like `preorder`; hide it when absent.
 *  Palette keys are unchanged from Sushi & Sub so the components work as-is; the role comments
 *  below now describe the bakery mapping.
 *
 * Original Sushi & Sub change notes (kept for reference):
 * Changes vs Purple Bagel:
 *  - PhotoCategory adds "food"; Photo gains a required `credit` key (no source URLs in site.ts).
 *  - MenuItem gains optional `pieces` and `number` (the shop's printed menu numbers its items).
 *  - New: `orderingLinks`, `seo`, `footerCredit`, `locationHint`, `mapUrl`, `priceRange`, `paymentNote`.
 *  - `rating` gains `source`. `bulkSpecials` dropped (none exist); `preorder` kept for the text pre-order pitch.
 *  - Palette keys renamed for a sushi shop.
 */

export type PhoneNumber = {
  /** Shown to people, e.g. "(904) 858-7032". */
  display: string;
  /** `tel:` href, e.g. "tel:+19048587032". */
  tel: string;
  /** E.164, e.g. "+19048587032". Also used for `sms:` links. */
  e164: string;
};

export type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = {
  /** 24-hour "HH:MM", or null when that edge is still unknown. */
  openTime: string | null;
  closeTime: string | null;
  /** True closes the shop for the whole day. */
  closed?: boolean;
};

export type Hours = {
  /** IANA zone used to decide open vs closed. */
  timezone: string;
  /** Short public line. The per-day schedule below is what open/closed uses. */
  summary: string;
  /** Fallback window for a weekday missing from `byDay`. Null = unknown, don't assume. */
  openTime: string | null;
  closeTime: string | null;
  /** Per-day hours. This is the schedule open/closed reads. */
  byDay?: Partial<Record<Weekday, DayHours>>;
};

export type MenuItem = {
  id: string;
  /** Number printed on the shop's takeout menu, e.g. 1 for California. */
  number?: number;
  name: string;
  description?: string;
  /** Pieces per order, as printed. Omit when the menu leaves it blank. */
  pieces?: number;
  /** Dollars. Leave unset until a real price is confirmed. Never invent one. */
  price?: number;
  /** Seeded stand-in copy. Hidden once real items replace it. */
  placeholder?: boolean;
  /** EXTENSION: `price` is a starting price (size upcharges). Render as "$3.75+". */
  priceFrom?: boolean;
  /** EXTENSION: the shop labels the item "New!". Render a small badge; keep it out of `name`. */
  isNew?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  /** Shown under the heading, or when the category has no real items. */
  description?: string;
  items: MenuItem[];
};

export type PhotoCategory = "storefront" | "interior" | "food" | "menu-board" | "logo" | "drinks";

/** Where a photo came from. Full URLs live in photo-sources.md / images/MANIFEST.md, never here. */
export type PhotoCredit =
  | "google-maps-ugc"
  | "yelp-ugc"
  | "owner"
  | "nick-shoot"
  /** EXTENSION: image the business uploaded to its Toast ordering page (e.g. the logo). */
  | "toast-listing"
  /** EXTENSION: image posted on the business's UNation profile (Oct 2025). */
  | "unation-listing";

export type Photo = {
  /** Public path under `/images`, e.g. "/images/storefront-sign-dusk.jpg". */
  src: string;
  alt: string;
  category: PhotoCategory;
  credit: PhotoCredit;
  width?: number;
  height?: number;
  /** Homepage hero. The hero is a side column, not a full-bleed banner. */
  hero?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  /** Display name exactly as the platform shows it. Never a staff or owner name. */
  author?: string;
  /** Visible link text, e.g. "Google review". */
  sourceLabel: string;
  /** Reviews must link here. Testimonials without a URL are not shown. */
  sourceUrl: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type OrderingLink = {
  /** e.g. "Call to order", "DoorDash". */
  label: string;
  href: string;
  kind: "phone" | "sms" | "online" | "delivery";
};

/**
 * Key names kept from Sushi & Sub for drop-in reuse. Bakery roles:
 * ink = espresso text, brand = logo terracotta, accent = counter sage,
 * salmon = pastry gold (prices/badges), nori = deep sage (secondary bands), rice = cream page.
 */
export type Palette = {
  /** Espresso. Primary text, header/footer. */
  ink: string;
  /** Logo terracotta. Primary fills and buttons. */
  brand: string;
  brandDeep: string;
  /** Counter sage. Accent fills only — not body text on white. */
  accent: string;
  /** Pastry gold. Prices, badges ("New"), highlights. */
  salmon: string;
  /** Deep sage. Secondary sections. */
  nori: string;
  /** Cream. Page background. */
  rice: string;
  /** Cards. */
  paper: string;
};

/** EXTENSION: custom / bulk order intake (whole cakes, pastry boxes, group orders). */
export type CustomOrders = {
  heading: string;
  intro: string;
  /** Short bullet list of what can be requested. Only items the owner confirms. */
  examples: string[];
  /** e.g. "Please order at least 48 hours ahead." Empty hides it. */
  leadTimeNote: string;
  textButtonLabel: string;
  /** Body of the `sms:` link; prompts for date, item, size, servings, pickup time. */
  textMessage: string;
  /** Optional email for inquiries. Empty hides it. */
  email: string;
};

export type Rating = {
  value: number;
  count: number;
  /** e.g. "Google". */
  source: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  /** Used for the meta description fallback and Restaurant JSON-LD. */
  description: string;
  /** Free-text opening, e.g. "2004". Empty hides the line. */
  opened: string;
  address: {
    street: string;
    suite: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Single line used for maps and the footer. */
    full: string;
  };
  /** Short wayfinding line shown under the address. */
  locationHint: string;
  /** Null coordinates keep the map on the street address. Do not guess. */
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  /** "Get directions" link. */
  mapUrl: string;
  phone: PhoneNumber;
  /** Optional after-hours / assistant number. Null uses the shop line. */
  afterHoursPhone: PhoneNumber | null;
  /** Optional number for "Text us" links. Null uses the shop line. */
  textNumber: PhoneNumber | null;
  /** Shown on the call button outside that day's open window. */
  closedNotice: string;
  hours: Hours;
  /** e.g. "$". Empty hides it. */
  priceRange: string;
  /** e.g. "Cash only". Empty hides it. */
  paymentNote: string;
  orderingLinks: OrderingLink[];
  socials: SocialLink[];
  /** Aggregate score only. Quotes belong in `testimonials`. */
  rating: Rating | null;
  testimonials: Testimonial[];
  faq: FaqItem[];
  menuNote: string;
  menu: MenuCategory[];
  photos: Photo[];
  /** Public path for the homepage hero. Wins over a photo `hero` flag. */
  heroImage?: string;
  palette: Palette;
  about: {
    heading: string;
    paragraphs: string[];
  };
  preorder: {
    heading: string;
    intro: string;
    textButtonLabel: string;
    /** Body of the `sms:` link. */
    textMessage: string;
    /** How far ahead a pickup date may be. */
    maxDaysAhead: number;
  };
  /** EXTENSION: optional custom-order section. Absent = hidden. */
  customOrders?: CustomOrders;
  seo: {
    title: string;
    description: string;
  };
  /** Footer credit line. */
  footerCredit: string;
};
