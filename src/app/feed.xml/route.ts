import { getBlogList } from "@/lib/microcms";

export const revalidate = 3600; // 1時間キャッシュ

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const baseUrl = "https://human-mode.com";

  let items = "";
  let lastBuildDate = new Date().toUTCString();

  try {
    const { contents } = await getBlogList({ limit: 50 });

    if (contents.length > 0) {
      lastBuildDate = new Date(
        contents[0].publishedAt || contents[0].createdAt
      ).toUTCString();
    }

    items = contents
      .map((post) => {
        const pubDate = new Date(
          post.publishedAt || post.createdAt
        ).toUTCString();
        const description = post.description || post.title;

        return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/dev/blog/${post.id}</link>
      <guid isPermaLink="true">${baseUrl}/dev/blog/${post.id}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${pubDate}</pubDate>${
          post.category
            ? `\n      <category>${escapeXml(post.category.name)}</category>`
            : ""
        }
    </item>`;
      })
      .join("\n");
  } catch {
    // microCMS unavailable
  }

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>株式会社ヒューマンモード ブログ</title>
    <link>${baseUrl}/dev/blog</link>
    <description>Bubble開発・ノーコード・AI連携に関するナレッジを発信しています。</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
