import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = site.seo.title.trim() || site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const place = [site.address.neighborhood, site.address.city].filter((part) => part.trim()).join(" · ");
  const detail = [site.hours.summary.trim(), site.phone.display.trim()].filter(Boolean).join("   ·   ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: site.palette.rice,
          color: site.palette.ink,
        }}
      >
        <div style={{ width: 28, background: site.palette.brand }} />
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: site.palette.brand,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {place || "Jacksonville"}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, lineHeight: 0.92, fontWeight: 600 }}>
              {site.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 22,
                fontSize: 32,
                lineHeight: 1.3,
                color: site.palette.brandDeep,
              }}
            >
              {site.tagline}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 26 }}>{detail}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
