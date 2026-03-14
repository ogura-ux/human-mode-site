import { getBlogList } from "@/lib/microcms";

export const revalidate = 3600; // 1時間キャッシュ

export async function GET() {
  const baseUrl = "https://human-mode.com";

  // microCMSから記事一覧を取得
  let blogEntries = "";
  try {
    const { contents } = await getBlogList({ limit: 100 });
    blogEntries = contents
      .map(
        (post) =>
          `- [${post.title}](${baseUrl}/dev/blog/${post.id}): ${post.description || post.title}`
      )
      .join("\n");
  } catch {
    blogEntries = "- 記事データを取得できませんでした";
  }

  const llmsTxt = `# 株式会社ヒューマンモード（Human Mode Inc.）

> 株式会社ヒューマンモードは、Bubbleを中心としたノーコード受託開発を専門とするプロダクトスタジオです。新規事業のMVP開発、業務システム構築、既存システムのノーコード移行を支援しています。東京都千代田区に拠点を置き、スタートアップから中堅企業まで幅広くサービスを提供しています。

## サービス概要

- [Bubble受託開発サービス](${baseUrl}/dev): Bubbleを用いたWebアプリ開発の受託サービス。MVP開発、業務システム、SaaS構築に対応。料金プラン・開発フロー・事例を掲載
- [コーポレートサイト](${baseUrl}): 株式会社ヒューマンモードの会社情報、事業内容、お問い合わせ

## ブログ記事

${blogEntries}

## 会社情報

- 会社名: 株式会社ヒューマンモード
- 代表取締役: 小倉柊平
- 所在地: 東京都千代田区麹町3丁目5-4 麹町インテリジェントビルB-1
- 事業内容: ノーコード（Bubble）を活用したWebアプリケーション受託開発
- Webサイト: ${baseUrl}

## Optional

- [記事一覧](${baseUrl}/dev/blog): Bubble開発・ノーコード・AI連携に関するナレッジ記事の一覧ページ
- [サイトマップ](${baseUrl}/sitemap.xml): 全ページのサイトマップ
`;

  return new Response(llmsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
