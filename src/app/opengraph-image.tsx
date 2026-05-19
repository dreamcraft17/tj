import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = SITE_CONFIG.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#121c2b",
          color: "#f7f4ef",
          fontFamily: "Georgia, serif",
        }}
      >
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#a68b4d",
            margin: 0,
          }}
        >
          Law Firm
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 500,
            margin: "24px 0 0",
            lineHeight: 1.05,
          }}
        >
          Trusted Jurist
        </h1>
        <p
          style={{
            fontSize: 32,
            marginTop: 32,
            color: "rgba(247, 244, 239, 0.85)",
            maxWidth: 800,
            lineHeight: 1.35,
          }}
        >
          {SITE_CONFIG.tagline}
        </p>
        <p
          style={{
            fontSize: 20,
            marginTop: "auto",
            color: "rgba(247, 244, 239, 0.5)",
          }}
        >
          {SITE_CONFIG.location} · trustedjurist.co.id
        </p>
      </div>
    ),
    { ...size },
  );
}
