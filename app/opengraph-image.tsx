import { ImageResponse } from "next/og";

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
          justifyContent: "flex-end",
          background: "#000000",
          color: "#f5f5f7",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, color: "#d2d2d7", marginBottom: 20 }}>
          Full-stack engineer
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 600,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          Shlok Mehroliya
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 28,
            maxWidth: 860,
            lineHeight: 1.35,
            color: "#f5f5f7",
          }}
        >
          Frontend architecture for production AI products.
        </div>
      </div>
    ),
    { ...size },
  );
}
