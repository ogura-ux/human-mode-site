export default function DevJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "株式会社ヒューマンモード",
    alternateName: "Human Mode Inc.",
    url: "https://human-mode.com",
    logo: "https://human-mode.com/favicon.png",
    description:
      "Bubble受託開発と自社プロダクト運営の2つの事業を展開するプロダクトスタジオ。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "千代田区",
      addressRegion: "東京都",
      addressCountry: "JP",
    },
    sameAs: ["https://gourmate-welcome.com/"],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bubble受託開発",
    provider: {
      "@type": "Organization",
      name: "株式会社ヒューマンモード",
    },
    description:
      "ノーコードツールBubbleを活用したMVP・PoC開発。最短2週間、スクラッチ開発比1/3のコストで新規事業のシステム開発を支援。",
    url: "https://human-mode.com/dev",
    areaServed: {
      "@type": "Country",
      name: "JP",
    },
    serviceType: "ソフトウェア受託開発",
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      price: "500000",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "JPY",
        price: "500000",
        unitText: "プロジェクトあたり（税別・最低価格）",
      },
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Bubbleで大規模なアプリは作れますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可能です。自社サービスGourmateの実績に加え、海外では数億円規模の資金調達をしたスタートアップもBubbleを利用しています。適切な設計を行えば、大規模なアプリケーションにも対応できます。",
        },
      },
      {
        "@type": "Question",
        name: "DifyやChatGPTなどのAI連携は可能ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、得意分野です。Difyを活用したRAG（自社データ検索）構築や、OpenAI APIとの連携によるAIチャットボット、自動要約機能などの実装実績があります。",
        },
      },
      {
        "@type": "Question",
        name: "セキュリティは大丈夫ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BubbleはAWS上で動作しており、エンタープライズレベルのセキュリティ基準を満たしています。SSL/TLS暗号化、定期的なセキュリティ監査が実施されています。",
        },
      },
      {
        "@type": "Question",
        name: "ソースコードの書き出しはできますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bubbleはプラットフォーム依存のためコード書き出しはできませんが、アプリのオーナーシップは完全にクライアント様に帰属します。将来的な移行に備えた設計も可能です。",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
