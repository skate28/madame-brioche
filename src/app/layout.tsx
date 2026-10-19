import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import type { CSSProperties, ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { MobileBar } from "@/components/mobile-bar";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import type { Palette } from "@/content/types";
import { cn } from "@/lib/cn";
import { allowIndexing } from "@/lib/indexing";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

function paletteStyle(palette: Palette): CSSProperties {
  return {
    "--mb-ink": palette.ink,
    "--mb-brand": palette.brand,
    "--mb-brand-deep": palette.brandDeep,
    "--mb-accent": palette.accent,
    "--mb-salmon": palette.salmon,
    "--mb-nori": palette.nori,
    "--mb-rice": palette.rice,
    "--mb-paper": palette.paper,
  } as CSSProperties;
}

const title = site.seo.title.trim() || site.name;
const description = site.seo.description.trim() || site.description;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  applicationName: site.name,
  icons: {
    icon: [{ url: "/images/logo-terracotta.jpg", type: "image/jpeg" }],
    apple: "/images/logo-terracotta.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title,
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: "/" },
  robots: allowIndexing()
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: site.palette.brand,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(display.variable, sans.variable, "h-full")}
      style={paletteStyle(site.palette)}
    >
      <body className="min-h-full bg-rice font-sans text-ink antialiased">
        <a
          href="#content"
          className={cn(
            "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-3",
            focusRing,
          )}
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MobileBar />
        <JsonLd />
      </body>
    </html>
  );
}
