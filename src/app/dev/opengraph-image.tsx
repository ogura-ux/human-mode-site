import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bubble受託開発｜MVP・新規事業を最短2週間で形に";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a2332 50%, #0c3d2e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Abstract circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(12,157,121,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(12,157,121,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "20%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(12,157,121,0.08) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
              fontSize: "22px",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            HUMAN MODE
          </div>

          {/* Main title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "56px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.3,
                textAlign: "center",
                display: "flex",
              }}
            >
              Bubble受託開発
            </div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.75)",
              marginTop: "20px",
              textAlign: "center",
              lineHeight: 1.6,
              display: "flex",
            }}
          >
            MVP・新規事業を最短2週間で形に
          </div>

          {/* Stats bar */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "48px",
              padding: "20px 40px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 700, color: "#0c9d79", display: "flex" }}>
                1/3
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", display: "flex" }}>
                コスト削減
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 700, color: "#0c9d79", display: "flex" }}>
                2週間〜
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", display: "flex" }}>
                最短納期
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div style={{ fontSize: "32px", fontWeight: 700, color: "#0c9d79", display: "flex" }}>
                2年+
              </div>
              <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", display: "flex" }}>
                運用実績
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
