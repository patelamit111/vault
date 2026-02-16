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
          background: "#F7F7FB",
          color: "#0B1220",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 50% 10%, rgba(29,78,216,0.18), transparent 60%), radial-gradient(800px 500px at 88% 65%, rgba(225,29,72,0.14), transparent 55%), radial-gradient(700px 420px at 12% 75%, rgba(79,70,229,0.14), transparent 55%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", gap: 16, alignItems: "center" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 16,
              background: "linear-gradient(135deg, #1D4ED8, #4F46E5, #E11D48)",
              padding: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 14,
                background: "#0B1220",
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
                  border: "3px solid rgba(255,255,255,0.82)",
                }}
              />
            </div>
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>Vault</div>
        </div>

        <div style={{ position: "relative", marginTop: 28, fontSize: 64, fontWeight: 750, lineHeight: 1.05 }}>
          Documents,
          <span style={{ color: "#1D4ED8" }}> extracted & organized</span>
        </div>

        <div style={{ position: "relative", marginTop: 18, fontSize: 26, color: "rgba(11,18,32,0.72)", maxWidth: 900 }}>
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
                background: "rgba(255,255,255,0.70)",
                border: "1px solid rgba(15,23,42,0.12)",
                color: "rgba(11,18,32,0.78)",
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
