import Image from "next/image";

import { cn } from "@/lib/cn";
import { photoByFile, photoDimensions } from "@/lib/photos";

/** Real terracotta logo tile. Decorative when the wordmark sits beside it. */
export function Logo({ className, priority = false }: { className?: string; priority?: boolean }) {
  const logo = photoByFile("logo-terracotta.jpg");
  if (!logo) return null;
  const { width, height } = photoDimensions(logo);

  return (
    <Image
      src={logo.src}
      alt=""
      width={width}
      height={height}
      priority={priority}
      sizes="56px"
      className={cn("size-11 shrink-0 rounded-lg object-cover", className)}
    />
  );
}
