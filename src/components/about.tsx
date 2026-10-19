import { PhotoCard } from "@/components/photo-card";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { photoByFile } from "@/lib/photos";

export function About() {
  const paragraphs = site.about.paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean);
  const heading = site.about.heading.trim();
  const tall = photoByFile("brioche-toast-hollandaise.jpg");
  const wide = [photoByFile("pastry-case-counter.jpg"), photoByFile("dining-room-windows.jpg")].filter(
    (photo) => photo !== null,
  );
  const hasPhotos = Boolean(tall || wide.length > 0);

  if (!heading && paragraphs.length === 0 && !hasPhotos && !site.opened.trim()) return null;

  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-ink/10">
      <div
        className={cn(
          "mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:py-24",
          hasPhotos && "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center",
        )}
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-deep">The café</p>
          <h2
            id="about-heading"
            className="mt-3 max-w-xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance md:text-6xl"
          >
            {heading || site.name}
          </h2>
          <span aria-hidden className="mt-5 block h-px w-16 bg-brand" />
          {site.opened.trim() && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-deep">
              Opened {site.opened.trim()}
            </p>
          )}
          {paragraphs.length > 0 && (
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink/85">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
          {site.address.full.trim() && (
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-ink/60">
              {site.address.full}
            </p>
          )}
        </Reveal>
        {hasPhotos && (
          <Reveal delay={0.08}>
            <div className={cn("grid gap-4", tall && wide.length > 0 && "lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]")}>
              {tall && <PhotoCard photo={tall} sizes="(min-width: 1024px) 18rem, 90vw" />}
              {wide.length > 0 && (
                <div className="grid content-start gap-4">
                  {wide.map((photo) => (
                    <PhotoCard
                      key={photo.src}
                      photo={photo}
                      sizes="(min-width: 1024px) 22rem, 90vw"
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
