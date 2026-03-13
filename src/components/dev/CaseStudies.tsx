import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const cases = [
  {
    category: "マッチングサービス",
    title: "グルメ系マッチングサービス",
    tag: "自社開発実績",
    tagColor: "bg-brand text-white",
    specs: [
      { label: "開発期間", value: "3ヵ月" },
      { label: "運用期間", value: "2年以上" },
      { label: "主要機能", value: "マッチング / 決済 / 通知" },
    ],
    techs: ["Bubble", "Square", "SendGrid", "Slack API"],
    description:
      "企画から3ヵ月でリリースし、その後2年以上にわたり自社で運用中。Square決済、SendGridメール配信、Slack通知など複数のAPI連携を実装。運用の中で得た知見をすべてのクライアント案件に還元しています。",
  },
  {
    category: "業務管理システム",
    title: "社内ワークフロー自動化ツール",
    tag: "想定プロジェクト例",
    tagColor: "bg-slate-100 text-text-light",
    specs: [
      { label: "想定期間", value: "4〜6週間" },
      { label: "想定予算", value: "80〜150万円" },
      { label: "主要機能", value: "承認フロー / 権限管理 / CSV出力" },
    ],
    techs: ["Bubble", "Google Sheets API", "SendGrid"],
    description:
      "Excelや紙で運用していた承認フローをBubbleでシステム化。ロール別の権限管理、自動メール通知、レポートCSVエクスポートを実装し、月30時間以上の工数削減を実現するイメージです。",
  },
  {
    category: "AIチャットボット",
    title: "社内ナレッジ検索AIアシスタント",
    tag: "想定プロジェクト例",
    tagColor: "bg-slate-100 text-text-light",
    specs: [
      { label: "想定期間", value: "2〜4週間" },
      { label: "想定予算", value: "50〜100万円" },
      { label: "主要機能", value: "RAG検索 / チャットUI / 管理画面" },
    ],
    techs: ["Bubble", "Dify", "OpenAI", "AWS S3"],
    description:
      "社内ドキュメントを学習させたAIチャットボットをBubble上に構築。DifyでRAGパイプラインを構築し、自然言語での社内ナレッジ検索を実現します。管理画面からデータソースの追加・更新も可能。",
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 sm:mb-20">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary mb-3">
              開発事例・想定プロジェクト
            </h2>
            <p className="text-text-light text-sm sm:text-base max-w-[600px] leading-[1.8]">
              自社サービスの実績と、よくご相談いただくプロジェクトの想定例です。
              規模感・予算感の参考にしてください。
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6 sm:space-y-8">
          {cases.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-10 transition-all duration-300 hover:border-brand/30 hover:shadow-[0_10px_40px_rgba(12,157,121,0.06)]">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-md ${c.tagColor}`}>
                    {c.tag}
                  </span>
                  <span className="text-xs text-text-light font-medium">{c.category}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-4">
                  {c.title}
                </h3>

                {/* Specs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5">
                  {c.specs.map((spec) => (
                    <div key={spec.label} className="bg-bg-light rounded-xl p-4">
                      <div className="text-[11px] text-text-light font-medium mb-1">{spec.label}</div>
                      <div className="text-sm sm:text-base font-bold text-primary">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-text-light leading-[1.8] mb-5">
                  {c.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {c.techs.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-brand-light text-brand rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
