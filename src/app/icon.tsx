import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1D4ED8, #4F46E5, #E11D48)",
          borderRadius: 14,
          padding: 3,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 12,
            background: "#0B1220",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 10,
              border: "3px solid rgba(255,255,255,0.80)",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
