import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Madame Brioche — the only editable content file.
 *
 * Change business info, hours, menu, photos, testimonials, FAQ and palette here.
 * Components read this module and hide anything that is still empty.
 * Shapes: see types.reference.ts (the Sushi & Sub shape plus three additive extensions:
 * PhotoCredit "toast-listing"/"unation-listing", MenuItem `priceFrom`/`isNew`, and the
 * optional `customOrders` section).
 *
 * Photos: files live in `public/images/`. Real customer photos from Yelp / Google Maps plus
 * the shop's own logo (Toast) and three photos from its UNation profile. Credit keys only here;
 * full sources in photo-sources.md. Do not drop in stock or AI-generated pictures.
 * Most photos are 750–1000 px phone shots: use them as cards, not full-bleed banners.
 * The tallest/sharpest are brioche-toast-hollandaise.jpg (900×1600) and french-toast-berries.jpg.
 *
 * Menu: every item and price comes from the shop's Toast online-ordering menu (read 2026-10-19).
 * Uber Eats / DoorDash prices are about $2 higher per item (app markup), so don't use them.
 * Owner must confirm prices before launch.
 *
 * Phone numbers: `afterHoursPhone` and `textNumber` are optional. While they are null,
 * after-hours calls and texts use the shop line (+19046611645).
 */

export const site: SiteContent = {
  name: "Madame Brioche",
  // From the shop's own Google/Facebook copy ("freshly baked croissant", "a true European touch").
  // Toast's tagline is "Morning flavors all day long". TODO(Leads): owner approval.
  tagline: "European café & bakery: fresh croissants, brioche toasts and coffee on Beach Blvd.",
  description:
    "Madame Brioche is a European-style breakfast café and bakery at 11380 Beach Blvd, Unit 2, Jacksonville, FL 32246. Croissants and pastries baked fresh, brioche toasts, mousse cakes and specialty coffee. Open daily: Mon–Fri 8 AM–4 PM, Sat–Sun 8 AM–5 PM. Order online for pickup or call (904) 661-1645.",
  // Eat n Bougie called it "freshly opened" on 2025-10-20; UNation photos are dated Oct 2025;
  // the shop's Google post said "now in soft opening mode". TODO(Leads): confirm the opening date.
  opened: "",

  address: {
    street: "11380 Beach Blvd",
    // Toast/Uber Eats/DoorDash/Apple: "Unit 2"; Restaurantji/MapQuest: "Ste 2"; Google: "Suite #2".
    suite: "Unit 2",
    // Atly lists the area as Windy Hill (single source). TODO(Leads): confirm or blank it.
    neighborhood: "Windy Hill",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32246",
    country: "US",
    full: "11380 Beach Blvd, Unit 2, Jacksonville, FL 32246",
  },
  // Reviews say "plenty of parking" / "great room for parking". No plaza name or landmark found.
  // TODO(Leads): ask the owner for a wayfinding line (plaza name, nearest cross street / anchor store).
  locationHint: "",

  // Only MapQuest has coordinates (30.28504, -81.52693), and MapQuest was ~120 m off for the
  // last build. TODO(Leads): take coordinates from the Google pin before setting these.
  geo: {
    latitude: null,
    longitude: null,
  },
  // Google place ID not captured. TODO(Leads): swap in the place_id link once known.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",

  phone: {
    display: "(904) 661-1645",
    tel: "tel:+19046611645",
    e164: "+19046611645",
  },

  // TODO(Leads): set once an AI answering line is live.
  afterHoursPhone: null,
  // TODO(Leads): confirm the shop line can receive texts. UNation lists a second number,
  // (904) 907-9080, which may be a personal/marketing line; do NOT publish it without the owner's OK.
  textNumber: null,

  closedNotice:
    "We're closed right now. Open Monday–Friday 8 AM–4 PM and Saturday–Sunday 8 AM–5 PM.",

  // Instagram bio (via search snippet) "Mon-Fri 8am-4pm; Sat-Sun 8am-5pm", Google (restaurantjump),
  // Yelp (MapQuest feed) and Restaurantji all agree.
  // Toast online ordering runs to 3:45 PM weekdays / 4:45 PM weekends (15-min cutoff).
  // Conflicts: DoorDash 8:00 AM–3:45 PM or 4:25 PM (varies); Apple Maps 8 AM–5 PM.
  hours: {
    timezone: "America/New_York",
    summary: "Mon–Fri 8 AM–4 PM · Sat–Sun 8 AM–5 PM",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: "08:00", closeTime: "16:00" },
      tue: { openTime: "08:00", closeTime: "16:00" },
      wed: { openTime: "08:00", closeTime: "16:00" },
      thu: { openTime: "08:00", closeTime: "16:00" },
      fri: { openTime: "08:00", closeTime: "16:00" },
      sat: { openTime: "08:00", closeTime: "17:00" },
      sun: { openTime: "08:00", closeTime: "17:00" },
    },
    // TODO(Leads): holiday closures / special hours.
  },

  // Restaurantji "$", Yelp/MapQuest "$$", Toast "$1-15". Most plates are $12–18.
  // TODO(Leads): pick one; "$$" matches the real prices best.
  priceRange: "$$",
  // Apple Maps (Yelp data): accepts Apple Pay and contactless. TODO(Leads): confirm before showing.
  paymentNote: "",

  // Toast = the shop's own online ordering (pickup). Uber Eats and DoorDash for delivery.
  // Uber Eats showed "Delivery unavailable" when fetched; it may depend on time/address.
  // Never link madamebriochebistro.com: that is an unrelated Madame Brioche in Conroe, TX.
  orderingLinks: [
    { label: "Order online for pickup", href: "https://toast.app/r/madame-brioche-beach-boulevard/order", kind: "online" },
    { label: "Call (904) 661-1645", href: "tel:+19046611645", kind: "phone" },
    {
      label: "Uber Eats",
      href: "https://www.ubereats.com/store/madame-brioche-breakfast-%26-more-11380-beach-boulevard-unit-2/ekqFGjRJWbGyGmYs5MQl3w",
      kind: "delivery",
    },
    {
      label: "DoorDash",
      href: "https://www.doordash.com/store/madame-brioche-%28beach-boulevard---jacksonville%29-jacksonville-36428433/",
      kind: "delivery",
    },
    // TODO(Leads): add "Text to pre-order" (sms:) once texting is confirmed or a text line is set up.
    // TODO(Leads): Instagram bio mentions an e-gift card link; get the exact URL from the owner.
  ],

  // Instagram is listed as the "website" on Apple Maps; Facebook is linked from UNation and Google.
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/madame.brioche.jax/" },
    { label: "Facebook", href: "https://www.facebook.com/p/Madame-Brioche-Breakfast-More-61577036300515/" },
  ],

  // Google 4.6 from 227 reviews (Google data shown on restaurantjump.com; capture date unknown).
  // Others (2026-10-19): Uber Eats 4.9 (92), Toast 4.8 (27), DoorDash 4.7 (20+), Restaurantji 4.6 (154),
  // Yelp 4.1 (68, Apple Maps) / 4.0 (MapQuest feed). TODO(Leads): re-check the live Google count before launch.
  rating: {
    value: 4.6,
    count: 227,
    source: "Google",
  },

  // Real quotes only, verbatim ("…" marks a trim), names exactly as the platform shows them.
  // Google texts/names: Google reviews shown on restaurantjump.com. Yelp: Yelp feed on MapQuest
  // (2026 dates). Toast: the shop's Toast page. TODO(Leads): get the owner's OK before publishing.
  testimonials: [
    {
      quote:
        "Madame Brioche is such a gem! … everyone is genuinely kind and makes you feel right at home. The space is spotless, the food is absolutely delicious, and the pastries are fresh and perfectly made.",
      author: "Michelle Case",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",
    },
    {
      quote:
        "Absolutely loved our experience at Madame Brioche. Cute, cozy cafe, service is quick and attentive.",
      author: "Stephanie B.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/madame-brioche-jacksonville",
    },
    {
      quote:
        "Highly recommend! We’d give it six stars if we could!! Food was fantastic and came out quickly. We got the prosciutto croissant and Turkey croissant, both full of flavor and very fresh.",
      author: "Kate Anderson",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",
    },
    {
      quote: "What a wonderful new spot to get brunch. The atmosphere was clean, beautiful and simple.",
      author: "Delia L.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/madame-brioche-jacksonville",
    },
    {
      quote:
        "The croissants are light and airy, everything is fresh, portions are generous, and orders arrive surprisingly fast.",
      author: "Natasha Lebedeva",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",
    },
    {
      quote:
        "I personally ate the prosciutto croissant and the croissant was perfect- flaky buttery, not thick and heavy it tasted legit!",
      author: "Zanzoun",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",
    },
    {
      quote:
        "My first time visiting and this place is the absolute cutest! The vibes are amazing, the service was amazing and the food and presentation was very good!",
      author: "Stacey Boyd",
      sourceLabel: "Google review",
      sourceUrl: "https://www.google.com/maps/search/?api=1&query=Madame+Brioche+11380+Beach+Blvd+Unit+2+Jacksonville+FL+32246",
    },
    {
      quote: "This place is the greatest we've been here seven times since we found out about the place …",
      author: "Edmund A.",
      sourceLabel: "Toast review",
      sourceUrl: "https://toast.app/r/madame-brioche-beach-boulevard",
    },
  ],

  // Verified answers only.
  // TODO(Leads): owner-only FAQs: payment methods, whole cakes / custom orders and lead time,
  // catering/office boxes, gluten-free / vegan / nut allergy info (pistachio and pine nuts are common
  // on the menu), milk alternatives, Wi-Fi, outdoor seating (Atly says yes; unconfirmed), pets (Apple says yes).
  faq: [
    {
      question: "Where are you?",
      answer: "11380 Beach Blvd, Unit 2, Jacksonville, FL 32246. There's plenty of parking out front.",
    },
    {
      question: "What are your hours?",
      answer: "Monday–Friday 8 AM–4 PM and Saturday–Sunday 8 AM–5 PM. Online orders close 15 minutes before we do.",
    },
    {
      question: "How do I order in the café?",
      answer:
        "Order at the self-serve kiosk by the entrance or at the counter, then find a seat and we'll bring it out.",
    },
    {
      question: "Can I order ahead for pickup?",
      answer: "Yes. Order online through our Toast page or call (904) 661-1645.",
    },
    {
      question: "Do you deliver?",
      answer: "Delivery is available through Uber Eats and DoorDash. App prices are set by the apps and may be higher.",
    },
    {
      question: "Do you have vegetarian options?",
      answer:
        "Yes. The Vegetarian Brioche Toast (hummus, sun-dried tomatoes, olives, avocado), the Mozzarella Croissant, our sweet croissants and the oatmeals are all meat-free.",
    },
  ],

  menuNote:
    "Prices are from our online ordering menu and may change. Some desserts sell out daily. Call (904) 661-1645 or order online for pickup.",

  // Source: the shop's Toast online-ordering menu (toast.app/r/madame-brioche-beach-boulevard/order),
  // read 2026-10-19. Section names are Toast's; three unnamed Toast sections are named from DoorDash
  // ("Dressings & Condiments", "Coffee") or by us ("Sparkling & Soft Drinks").
  // Out of stock on 2026-10-19 (still listed): Pistachio & Raspberry Mousse, Raffaelo Mousse Cake,
  // Orange & Pumpkin Mousse Cake, Meringue Roll Pistachio & Raspberry.
  // Spelling tidied from Toast: "Vittelo Tonnato" → vitello tonnato, "Ferrero Rosher" → Ferrero Rocher,
  // "Blueberries/Strawberries Croissant" → Blueberry/Strawberry Croissant.
  // An Oct-2025 in-store drinks board (UNation photo) shows older/different drinks and prices
  // (Hot Chocolate $3.75, Tea, London Fog, Chai Latte, Citrus/Cucumber Mojito lemonades $4.99).
  // TODO(Leads): owner confirms every price and the current drink list.
  menu: [
    {
      id: "brioche-toasts",
      name: "Brioche Toasts",
      items: [
        { id: "chicken-brioche-toast", name: "Chicken Brioche Toast", description: "Baked chicken, tomatoes, pickled cucumber, cheddar, Parmesan, romaine, our signature Caesar sauce and garlic aioli.", price: 14.2 },
        { id: "roast-beef-brioche-toast", name: "Roast Beef Brioche Toast", description: "Roast beef, pickled cucumber, tomatoes, fire pepper, pickled onion, arugula, our signature vitello tonnato, honey mustard and truffle aioli.", price: 16.3 },
        { id: "egg-bacon-brioche-toast", name: "Egg & Bacon Brioche Toast", description: "Scrambled eggs, bacon and cheddar, with pickled cucumber on the side.", price: 12.5 },
        { id: "turkey-brioche-toast", name: "Turkey Brioche Toast", description: "Turkey, tomatoes, pear, arugula, pine nuts, dressing and our signature blue cheese sauce.", price: 14.2 },
        { id: "vegetarian-brioche-toast", name: "Vegetarian Brioche Toast", description: "Hummus, sun-dried tomatoes, fire pepper, Kalamata olives, avocado, cucumber and arugula.", price: 13.2 },
        { id: "croque-monsieur", name: "Croque-Monsieur", description: "Ham, poached egg, Parmesan, our signature creamy truffle and Caesar sauces.", price: 13.8 },
        { id: "smoked-salmon-brioche-toast", name: "Smoked Salmon Brioche Toast", description: "Smoked salmon, avocado, cucumber, dill-and-caper cream cheese, pickled onion, arugula, poached egg and our signature hollandaise.", price: 17.75 },
        { id: "zucchini-chicken-brie-toast", name: "Zucchini, Chicken & Brie Toast", description: "Zucchini, chicken, Brie, caramelized onion, bacon and garlic aioli.", price: 16.5, isNew: true },
        { id: "avocado-toast", name: "Avocado Toast", description: "Avocado, avocado spread with kimchi and olive oil, pine nuts, sun-dried tomatoes, poached egg and arugula.", price: 14.5 },
        { id: "prosciutto-toast", name: "Prosciutto Toast", description: "Prosciutto, arugula, tomatoes, stracciatella, feta spread with fire pepper, pistachio, balsamic glaze and spicy honey.", price: 16.3 },
        { id: "french-toast", name: "French Toast", description: "Seasonal berries, caramel, cream and maple syrup.", price: 13.2 },
        { id: "french-toast-tiramisu", name: "French Toast Tiramisu", description: "Mascarpone cream, cocoa powder and creamy coffee syrup.", price: 13.2 },
      ],
    },
    {
      id: "savory-croissants",
      name: "Savory Croissants",
      items: [
        { id: "egg-bacon-croissant", name: "Egg & Bacon Croissant", description: "Scrambled eggs, bacon and cheddar, with maple syrup on the side.", price: 12.5 },
        { id: "egg-turkey-croissant", name: "Egg & Turkey Croissant", description: "Scrambled eggs, turkey and cheddar.", price: 12.5 },
        { id: "prosciutto-croissant", name: "Prosciutto Croissant", description: "Prosciutto, tomatoes, arugula, pistachio, our signature truffle honey and truffle aioli.", price: 14.5 },
        { id: "brie-pear-croissant", name: "Brie & Pear Croissant", description: "Brie, pear, arugula, fig jam, pecan and truffle honey.", price: 14.5, isNew: true },
        { id: "smoked-salmon-croissant", name: "Smoked Salmon Croissant", description: "Smoked salmon, dill-and-caper cream cheese, cucumber, poached egg, arugula and our signature hollandaise.", price: 17.25 },
        { id: "tuna-croissant", name: "Tuna Croissant", description: "Tuna, Kalamata olives, cucumber, poached egg, arugula and our signature vitello tonnato sauce.", price: 14.5 },
        { id: "mozzarella-croissant", name: "Mozzarella Croissant", description: "Mozzarella, tomatoes, arugula, balsamic glaze, dressing and our signature basil pesto.", price: 13.2 },
        { id: "ham-croissant", name: "Ham Croissant", description: "Ham, cheddar, pickled cucumber, tomatoes and our signature Caesar sauce.", price: 13.5 },
        { id: "chicken-croissant", name: "Chicken Croissant", description: "Chicken, tomatoes, cheddar, romaine, Parmesan and our signature Caesar sauce.", price: 13.5 },
        // Listed in this section on Toast; it's a side.
        { id: "scramble", name: "Scramble", description: "Eggs scrambled with heavy cream, cheese and milk.", price: 5.5 },
      ],
    },
    {
      id: "sweet-croissants",
      name: "Sweet Croissants",
      items: [
        { id: "pistachio-croissant", name: "Pistachio Croissant", description: "Pistachio cream, raspberries, white chocolate and pistachio.", price: 10.5 },
        { id: "blueberry-croissant", name: "Blueberry Croissant", description: "Cream cheese, ube cream and blueberries.", price: 10.5 },
        { id: "strawberry-croissant", name: "Strawberry Croissant", description: "Cream cheese and strawberries.", price: 10.5 },
        { id: "chocolate-croissant", name: "Chocolate Croissant", description: "Chocolate cream and Belgian chocolate.", price: 10.5 },
        { id: "almond-croissant", name: "Almond Croissant", description: "Marzipan and almond flakes.", price: 10.5 },
        { id: "plain-croissant", name: "Plain Croissant", price: 3.5 },
      ],
    },
    {
      id: "oatmeal-granola",
      name: "Oatmeal & Granola",
      items: [
        { id: "smoked-salmon-oatmeal", name: "Smoked Salmon Oatmeal", description: "Smoked salmon, avocado, cream cheese, heavy cream, butter and olive oil.", price: 10.99 },
        { id: "truffle-parmesan-oatmeal", name: "Truffle & Parmesan Oatmeal", description: "Parmesan, stracciatella, truffle paste, arugula, heavy cream, butter and olive oil.", price: 9.5 },
        { id: "berries-oatmeal", name: "Berries Oatmeal", description: "Mascarpone, seasonal berries, granola, pistachio, heavy cream, butter and maple syrup.", price: 8.5 },
        { id: "granola", name: "Granola", description: "Seasonal berries, Greek yogurt, pistachio, fruit purée and maple syrup.", price: 7.5 },
      ],
    },
    {
      id: "salads",
      name: "Salads",
      items: [
        { id: "chicken-caesar-salad", name: "Chicken Caesar Salad", description: "Chicken, romaine, cherry tomatoes, Parmesan, bacon, croutons and our signature Caesar sauce.", price: 13.5 },
        { id: "smoked-salmon-salad", name: "Smoked Salmon Salad", description: "Smoked salmon, romaine, cherry tomatoes, Parmesan, croutons and our signature Caesar sauce.", price: 16.99 },
        { id: "roast-beef-salad", name: "Roast Beef Salad", description: "Roast beef, romaine, arugula, cherry tomatoes, fire pepper, pickled onion, sesame, our signature honey-mustard sauce and orange dressing.", price: 15.5 },
        { id: "prosciutto-salad", name: "Prosciutto Salad", description: "Prosciutto, stracciatella, pear, arugula, pistachio, spicy honey, dressing and balsamic glaze.", price: 14.5 },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Individual mousse cakes, slices and pastries from the case. Selection changes and some sell out.",
      // Toast lists names and prices only (no descriptions). TODO(Leads): short descriptions from the owner.
      items: [
        { id: "pistachio-raspberry-mousse", name: "Pistachio & Raspberry Mousse", price: 10.5 },
        { id: "raffaelo-mousse-cake", name: "Raffaello Mousse Cake", price: 10.5 },
        { id: "lavender-lemon-mousse-cake", name: "Lavender & Lemon Mousse Cake", price: 10.5 },
        { id: "coconut-passion-fruit-mousse-cake", name: "Coconut & Passion Fruit Mousse Cake", price: 10.5 },
        { id: "raspberry-vanilla-mousse-cake", name: "Raspberry & Vanilla Mousse Cake", price: 10.5 },
        { id: "raspberry-mocha-mousse-cake", name: "Raspberry & Mocha Mousse Cake", price: 10.5 },
        { id: "pumpkin-apple-mousse-cake", name: "Pumpkin & Apple Mousse Cake", price: 10.5, isNew: true },
        { id: "pumpkin-passion-fruit-mousse-cake", name: "Pumpkin & Passion Fruit Mousse Cake", price: 10.5, isNew: true },
        { id: "orange-pumpkin-mousse-cake", name: "Orange & Pumpkin Mousse Cake", price: 9.5, isNew: true },
        { id: "tiramisu-mousse-cake", name: "Tiramisu Mousse Cake", price: 9.5 },
        { id: "ferrero-rocher-mousse", name: "Ferrero Rocher Mousse", price: 10.5 },
        { id: "truffle-cake", name: "Truffle Cake", price: 10.5 },
        { id: "oreo-cake", name: "Oreo Cake", price: 9.5 },
        { id: "honey-cake", name: "Honey Cake", price: 9.5 },
        { id: "napoleon-cake", name: "Napoleon Cake", price: 9.5 },
        { id: "salted-caramel-cheesecake", name: "Salted Caramel Cheesecake", price: 9.5 },
        { id: "ferrero-rocher-tart", name: "Ferrero Rocher Tart", price: 9.5 },
        { id: "meringue-roll-orange", name: "Meringue Roll Orange", price: 8.5, isNew: true },
        { id: "meringue-roll-pistachio-raspberry", name: "Meringue Roll Pistachio & Raspberry", price: 8.5 },
        { id: "pavlova", name: "Pavlova", price: 8.5 },
        { id: "dessert-in-jars", name: "Dessert in Jars", price: 8.5 },
        { id: "eclairs", name: "Eclairs", price: 7 },
      ],
    },
    {
      id: "pastries",
      name: "Pastries",
      // Toast gives names and prices only. A Yelp reviewer mentions a "Biscoff Cinnamon roll ($6.50)";
      // reviews also mention Nutella and pistachio rolls. TODO(Leads): which flavors "Rolls" covers.
      items: [
        { id: "rolls", name: "Rolls", price: 7.5 },
        { id: "cinnamon-roll", name: "Cinnamon Roll", price: 6.5 },
        { id: "danish", name: "Danish", price: 5.5 },
        { id: "muffins", name: "Muffins", price: 5.5 },
      ],
    },
    {
      id: "coffee",
      name: "Coffee & Lattes",
      description: "Prices marked + start at the smallest size.",
      items: [
        { id: "cortado", name: "Cortado", price: 4.25 },
        { id: "americano", name: "Americano", price: 3.75, priceFrom: true },
        { id: "cappuccino", name: "Cappuccino", price: 4.5, priceFrom: true },
        { id: "latte", name: "Latte", price: 4.75, priceFrom: true },
        { id: "amaretto-cappuccino", name: "Amaretto Cappuccino", price: 6.49 },
        { id: "mocha-latte", name: "Mocha Latte", price: 5.25, priceFrom: true },
        { id: "matcha-latte", name: "Matcha Latte", price: 5.8, priceFrom: true },
        { id: "iced-strawberry-matcha-latte", name: "Iced Strawberry Matcha Latte", price: 6.49, priceFrom: true },
        { id: "iced-ube-matcha-latte", name: "Iced Ube Matcha Latte", price: 6.49, priceFrom: true },
        { id: "iced-pink-rose-latte", name: "Iced Pink Rose Latte", price: 6.49, priceFrom: true },
        { id: "iced-biscoff-latte", name: "Iced Biscoff Latte", price: 6.49, priceFrom: true },
        { id: "banana-bread-iced-latte", name: "Banana Bread Iced Latte", price: 6.49, priceFrom: true },
        { id: "pumpkin-iced-matcha", name: "Pumpkin Iced Matcha", price: 6.49, priceFrom: true },
        { id: "hot-chocolate", name: "Hot Chocolate", price: 4.75 },
      ],
    },
    {
      id: "smoothies-lemonades",
      name: "Smoothies, Lemonades & Juice",
      items: [
        { id: "mango-smoothie", name: "Mango Smoothie", price: 6.99 },
        { id: "strawberry-smoothie", name: "Strawberry Smoothie", price: 6.99 },
        { id: "strawberry-basil-lemonade", name: "Strawberry Basil Lemonade", price: 5.7 },
        { id: "raspberry-mojito-lemonade", name: "Raspberry Mojito Lemonade", price: 5.7 },
        { id: "apple-caramel-cream-soda", name: "Apple Caramel Cream Soda", price: 6.99 },
        { id: "orange-juice", name: "Orange Juice", price: 2.75 },
        { id: "apple-juice", name: "Apple Juice", price: 2.75 },
      ],
    },
    {
      id: "soft-drinks",
      name: "Sparkling & Soft Drinks",
      items: [
        { id: "san-pellegrino", name: "San Pellegrino", price: 3.5 },
        { id: "maison-perrier", name: "Maison Perrier", price: 3.5 },
        { id: "fountain-drinks", name: "Fountain Drinks", price: 2.25 },
      ],
    },
    {
      id: "add-ons",
      name: "Sauces & Add-ons",
      items: [
        { id: "add-dressing", name: "Dressing", price: 1.5 },
        { id: "add-olive-oil", name: "Olive Oil", price: 1.5 },
        { id: "add-balsamic-glaze", name: "Balsamic Glaze", price: 1.5 },
        { id: "add-pesto", name: "Pesto", price: 1.5 },
        { id: "add-spicy-kimchi", name: "Spicy Kimchi", price: 1.5 },
        { id: "add-butter", name: "Butter", price: 1 },
        { id: "add-jam", name: "Jam", price: 1 },
        { id: "add-maple-syrup", name: "Maple Syrup", price: 1 },
        { id: "add-honey", name: "Honey", price: 0.75 },
      ],
    },
  ],

  // Real photos only (see images/MANIFEST.md). Credit keys only, no URLs.
  // TODO(Leads): get the owner's OK for these, and ask for her own Instagram photos (the account has
  // ~94 posts of pastry-case and drink shots) or plan a short shoot (pastry case, croissant cross-section,
  // daylight exterior). Excluded on purpose: a stock-looking pastry flat-lay on Uber Eats, UNation
  // photos showing a person, and the Eat n Bougie blog photos (blogger's copyright).
  photos: [
    { src: "/images/french-toast-berries.jpg", alt: "Brioche French toast piled with strawberries, raspberries and blueberries, with pink lemonades behind", category: "food", credit: "yelp-ugc", width: 750, height: 1000, hero: true },
    { src: "/images/brioche-toast-hollandaise.jpg", alt: "Brioche toast topped with a poached egg under hollandaise and arugula, in the bright dining room", category: "food", credit: "google-maps-ugc", width: 900, height: 1600 },
    { src: "/images/ham-parmesan-brioche-toast.jpg", alt: "Brioche toast with ham and shaved Parmesan beside a numbered table card and a small vase of flowers", category: "food", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/savory-croissant.jpg", alt: "Savory croissant filled with cured meat, peppers and herbs on a grey stoneware plate", category: "food", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/arugula-toast-and-tea.jpg", alt: "Open toast heaped with arugula and creamy cheese, with a cup of tea and a French press", category: "food", credit: "yelp-ugc", width: 563, height: 1000 },
    { src: "/images/cherry-pastry.jpg", alt: "Close-up of a flaky pastry topped with glossy cherries and cream", category: "food", credit: "yelp-ugc", width: 1000, height: 897 },
    { src: "/images/matcha-latte-and-eclair.jpg", alt: "Matcha latte with latte art next to an iced eclair", category: "drinks", credit: "yelp-ugc", width: 563, height: 1000 },
    { src: "/images/pastry-case-counter.jpg", alt: "Long glass pastry case of cakes and croissants at the counter under pendant lights", category: "interior", credit: "yelp-ugc", width: 1000, height: 750 },
    { src: "/images/dining-room-windows.jpg", alt: "Bright dining room with wall-to-wall windows, wooden tables and a chandelier", category: "interior", credit: "yelp-ugc", width: 1000, height: 750 },
    { src: "/images/interior-counter-wide.jpg", alt: "Wide view of the sage-green counter, arched menu boards and pressed-tin ceiling", category: "interior", credit: "yelp-ugc", width: 1000, height: 750 },
    { src: "/images/interior-lounge-seating.jpg", alt: "Lounge corner with blue velvet armchairs, cream curtains and a bookshelf", category: "interior", credit: "yelp-ugc", width: 750, height: 1000 },
    { src: "/images/interior-pastry-in-hand.jpg", alt: "A filled croissant held up on a plate in the dining room, with the botanical mural and counter behind", category: "interior", credit: "unation-listing", width: 700, height: 500 },
    { src: "/images/storefront-doors-logo.jpg", alt: "Glass front doors with the Madame Brioche logo in copper lettering", category: "storefront", credit: "unation-listing", width: 700, height: 500 },
    { src: "/images/menu-board-drinks.jpg", alt: "Arched letter-board drinks menu above the self-order kiosk", category: "menu-board", credit: "unation-listing", width: 700, height: 500 },
    { src: "/images/logo-terracotta.jpg", alt: "Madame Brioche breakfast & more logo: an arched sunrise and egg in cream on terracotta", category: "logo", credit: "toast-listing", width: 720, height: 720 },
  ],
  heroImage: "/images/french-toast-berries.jpg",

  // Terracotta sampled from the logo (#C45B2C). Sage from the counter (#8DA3A5). Cream walls.
  // Key names are Sushi & Sub's (see types.reference.ts): salmon = pastry gold, nori = deep sage, rice = cream.
  palette: {
    ink: "#3A2A22",
    brand: "#C45B2C",
    brandDeep: "#9A4220",
    accent: "#8DA3A5",
    salmon: "#D9A75A",
    nori: "#4E6B5E",
    rice: "#FBF6EE",
    paper: "#FFFFFF",
  },

  about: {
    // Built from the shop's own Google/UNation copy: "a true European touch", "freshly baked pastries
    // made in-house daily", "every dish is prepared with the same warmth as if it were for our dearest friends".
    heading: "A European café, made with heart",
    paragraphs: [
      "Madame Brioche brings the warmth of a European café to Beach Boulevard. Mornings start with freshly baked croissants and pastries, rich coffee, and breakfasts made as if for our dearest friends.",
      "The menu centers on brioche toasts and filled croissants, sweet and savory: smoked salmon with hollandaise, prosciutto with truffle honey, pistachio cream with raspberries. There are oatmeals, salads and a case of mousse cakes, honey cake and pavlova.",
      "Order at the kiosk or the counter, find a seat in the bright dining room, and stay a while. Or order ahead online for pickup.",
      // TODO(Leads): the owner's story, only what she wants published (reviews call it family-owned and
      // mention Russian-speaking staff; MapQuest's generated blurb says woman-owned). Keep all of it off
      // the site unless she approves.
    ],
  },

  preorder: {
    heading: "Order ahead",
    intro:
      "Skip the line: order online for pickup, or call or text your order with a pickup time and it will be ready when you arrive.",
    textButtonLabel: "Text us your order",
    textMessage: "Hi Madame Brioche, I'd like to place a pickup order:",
    // TODO(Leads): confirm the shop accepts texted orders and how far ahead.
    maxDaysAhead: 7,
  },

  // EXTENSION (types.reference.ts `CustomOrders`). No public info on whole cakes, custom cakes,
  // catering or pastry boxes was found; Toast sells single slices/mousse cakes only.
  // This is the pitch's intake section. TODO(Leads): owner confirms what she takes, lead time and
  // minimums; remove the section if she doesn't do custom orders.
  customOrders: {
    heading: "Cakes & larger orders",
    intro:
      "Planning a birthday, a brunch for the office or a weekend get-together? Send us the date, what you have in mind and how many people, and we'll get back to you to confirm.",
    // Only items already on the menu. TODO(Leads): add whole-cake sizes/flavors once confirmed.
    examples: ["Mousse cakes and honey cake", "Croissant and pastry boxes", "Coffee and brunch for groups"],
    leadTimeNote: "",
    textButtonLabel: "Text us about an order",
    textMessage:
      "Hi Madame Brioche, I'd like to ask about a larger order. Date: ___ Pickup time: ___ What I need: ___ Number of people: ___",
    email: "",
  },

  seo: {
    title: "Madame Brioche | European Café & Bakery on Beach Blvd, Jacksonville FL",
    description:
      "Fresh croissants, brioche toasts, mousse cakes and specialty coffee at 11380 Beach Blvd, Unit 2, Jacksonville, FL 32246. Open Mon–Fri 8–4, Sat–Sun 8–5. Order online for pickup or call (904) 661-1645.",
  },

  footerCredit: "Built by nicklopacki.com",
};

/** Text-us number. Falls back to the shop line while `textNumber` is unset. */
export function textTarget(content: SiteContent = site): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) {
    return content.textNumber;
  }
  return content.phone;
}

/**
 * Call number. Open hours always use the shop line.
 * After close, `afterHoursPhone` wins when it is set; otherwise the shop line.
 */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (
    isClosed &&
    (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)
  ) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
