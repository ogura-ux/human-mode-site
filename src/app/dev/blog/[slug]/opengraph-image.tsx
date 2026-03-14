import { ImageResponse } from "next/og";
import { getBlogDetail } from "@/lib/microcms";

export const runtime = "edge";
export const alt = "記事のOGP画像";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let title = "ブログ | 株式会社ヒューマンモード";
  let category = "";

  try {
    const post = await getBlogDetail(slug);
    title = post.title;
    category = post.category?.name || "";
  } catch {
    // fallback to default title
  }

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
          background: "linear-gradient(135deg, #0C9D79 0%, #0A7B5E 50%, #065A44 100%)",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.08,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            borderRadius: "24px",
            padding: "50px 60px",
            width: "100%",
            height: "100%",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            position: "relative",
          }}
        >
          {/* Category badge */}
          {category && (
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                color: "#0C9D79",
                background: "rgba(12, 157, 121, 0.1)",
                padding: "8px 20px",
                borderRadius: "100px",
                marginBottom: "24px",
                fontWeight: 600,
              }}
            >
              {category}
            </div>
          )}

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 30 ? "36px" : "42px",
              fontWeight: 800,
              color: "#1a1a2e",
              textAlign: "center",
              lineHeight: 1.4,
              maxWidth: "900px",
              overflow: "hidden",
            }}
          >
            {title}
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              width: "60px",
              height: "4px",
              background: "#0C9D79",
              borderRadius: "2px",
              marginTop: "32px",
              marginBottom: "24px",
            }}
          />

          {/* Company name */}
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#6b7280",
              fontWeight: 500,
            }}
          >
            株式会社ヒューマンモード
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
