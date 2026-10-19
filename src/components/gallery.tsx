import { PhotoCard } from "@/components/photo-card";
import { SectionHeading } from "@/components/section-heading";
import type { Photo } from "@/content/types";
import { galleryPhotos } from "@/lib/photos";

function PhotoGrid({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;

  return (
    <ul className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <li key={photo.src} className="mb-4 break-inside-avoid">
          <PhotoCard photo={photo} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw" />
        </li>
      ))}
    </ul>
  );
}

export function Gallery() {
  const photos = galleryPhotos();
  const table = photos.filter((photo) => photo.category === "food" || photo.category === "drinks");
  const room = photos.filter(
    (photo) =>
      photo.category === "interior" || photo.category === "storefront" || photo.category === "menu-board",
  );
  const rest = photos.filter((photo) => !table.includes(photo) && !room.includes(photo));

  if (photos.length === 0) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
        <SectionHeading invert kicker="In the room" title="Gallery" id="gallery-heading" />
        {table.length > 0 && (
          <div className="mt-12">
            <h3 className="font-display text-3xl font-medium text-salmon">Food & drinks</h3>
            <PhotoGrid photos={table} />
          </div>
        )}
        {room.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-3xl font-medium text-salmon">The café</h3>
            <PhotoGrid photos={room} />
          </div>
        )}
        {rest.length > 0 && (
          <div className="mt-14">
            <PhotoGrid photos={rest} />
          </div>
        )}
      </div>
    </section>
  );
}
