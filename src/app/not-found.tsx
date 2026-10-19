import Link from "next/link";

import { buttonPrimary } from "@/components/styles";
import { site } from "@/content/site";

export default function NotFound() {
  const name = site.name.trim() || "Madame Brioche";

  return (
    <main id="content" className="bg-rice">
      <div className="mx-auto max-w-xl px-5 py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">404</p>
        <h1 className="mt-3 font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
          That page has left the case.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink/80">
          The menu, hours, and ordering are on the home page.
        </p>
        <Link href="/" className={`${buttonPrimary} mt-8`}>
          Back to {name}
        </Link>
      </div>
    </main>
  );
}
