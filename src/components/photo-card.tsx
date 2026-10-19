import Image from "next/image";

import type { Photo } from "@/content/types";
import { cn } from "@/lib/cn";
import { photoDimensions } from "@/lib/photos";

/**
 * Natural aspect ratio inside a cream mat.
 * Phone photos stay whole — no full-bleed crop.
 */
export function PhotoCard({
  photo,
  sizes,
  priority = false,
  className,
}: {
  photo: Photo;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { width, height } = photoDimensions(photo);

  return (
    <figure
      className={cn(
        "rounded-[1.5rem] bg-paper p-2 shadow-[0_22px_50px_-34px_rgba(58,42,34,0.6)] ring-1 ring-ink/10",
        className,
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full rounded-[1.1rem]"
      />
    </figure>
  );
}
