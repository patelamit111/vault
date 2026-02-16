import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          padding: 72,
          background: "#070A0F",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 50% 10%, rgba(125,211,252,0.25), transparent 60%), radial-gradient(800px 500px at 85% 65%, rgba(240,171,252,0.18), transparent 55%), radial-gradient(700px 420px at 15% 75%, rgba(165,180,252,0.18), transparent 55%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background:
                "linear-gradient(#070A0F, #070A0F) padding-box, linear-gradient(135deg, #7DD3FC, #A5B4FC, #F0ABFC) border-box",
              border: "3px solid transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: 10,
                border: "3px solid rgba(255,255,255,0.7)",
              }}
            />
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Vault</div>
        </div>

        <div style={{ position: "relative", marginTop: 28, fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          Documents,
          <span style={{ color: "#A5B4FC" }}> extracted & organized</span>
        </div>

        <div style={{ position: "relative", marginTop: 18, fontSize: 26, color: "rgba(255,255,255,0.72)", maxWidth: 900 }}>
          Upload important docs. Vault pulls out the key fields and saves everything directly into your Google Drive + Google Sheets.
        </div>

        <div style={{ position: "relative", marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
          {[
            "Google OAuth",
            "Drive folder",
            "Sheets index",
            "Review before save",
            "No proprietary DB",
          ].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 18,
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.82)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
