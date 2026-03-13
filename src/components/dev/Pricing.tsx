import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const plans = [
  {
    name: "MVP / PoC開発",
    price: "50万円〜",
    period: "2〜4週間",
    description: "仮説検証に必要な最小機能を最速で構築",
    features: [
      "コア機能の設計・実装",
      "レスポンシブ対応",
      "基本的なAPI連携（1〜2サービス）",
      "テスト・デプロイ",
    ],
    highlighted: false,
  },
  {
    name: "フル開発",
    price: "150万円〜",
    period: "1〜3ヵ月",
    description: "本番運用に耐える完成度のシステムを構築",
    features: [
      "UI/UXデザイン・DB設計",
      "複数API連携（決済・AI・通知等）",
      "管理画面の構築",
      "ユーザーテスト・改善サイクル",
      "リリース後1ヵ月の保守サポート",
    ],
    highlighted: true,
  },
  {
    name: "保守・グロース",
    price: "月額10万円〜",
    period: "月単位契約",
    description: "リリース後の継続的な改善・機能追加",
    features: [
      "機能追加・UI改善",
      "バグ対応・パフォーマンス最適化",
      "新規API連携の追加",
      "月次レポート・改善提案",
    ],
    highlighted: false,
  },
];

const comparison = [
  { label: "開発コスト", scratch: "500〜2000万円", bubble: "50〜300万円" },
  { label: "開発期間", scratch: "6ヵ月〜1年", bubble: "2週間〜3ヵ月" },
  { label: "改修スピード", scratch: "数週間〜", bubble: "即日〜数日" },
  { label: "運用コスト", scratch: "月額数十万円〜", bubble: "月額十万円〜" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14 sm:mb-20">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary mb-3">
              料金目安
            </h2>
            <p className="text-text-light text-sm sm:text-base max-w-[500px] mx-auto leading-[1.8]">
              プロジェクトの規模や要件によって変動します。
              正式なお見積もりは無料相談にてご提示します。
            </p>
          </div>
        </FadeIn>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-7 sm:p-9 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-white border-2 border-primary shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
                    : "bg-white border border-slate-100 hover:border-brand/30"
                }`}
              >
                {plan.highlighted && (
                  <span className="inline-block self-start text-[10px] font-bold px-3 py-1 rounded-full bg-brand text-white mb-4">
                    人気
                  </span>
                )}
                <h3
                  className={`text-base font-bold mb-2 ${
                    plan.highlighted ? "text-white/80" : "text-text-light"
                  }`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-2xl sm:text-3xl font-black mb-1 ${
                    plan.highlighted ? "text-white" : "text-primary"
                  }`}
                >
                  {plan.price}
                </div>
                <div
                  className={`text-xs mb-5 ${
                    plan.highlighted ? "text-white/50" : "text-text-light"
                  }`}
                >
                  目安期間：{plan.period}
                </div>
                <p
                  className={`text-sm leading-[1.7] mb-6 ${
                    plan.highlighted ? "text-white/70" : "text-text-light"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-brand" : "text-brand"
                        }`}
                      >
                        <path
                          d="M3 8l3.5 3.5L13 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className={plan.highlighted ? "text-white/80" : "text-text-main"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* スクラッチ比較テーブル */}
        <FadeIn>
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-10">
            <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-2 text-center">
              スクラッチ開発との比較
            </h3>
            <p className="text-xs sm:text-sm text-text-light text-center mb-8">
              一般的なスクラッチ（フルコード）開発と比較した場合の目安です
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="text-left py-3 px-3 sm:px-4 text-xs font-bold text-text-light w-[30%]"></th>
                    <th className="text-center py-3 px-3 sm:px-4 text-xs font-bold text-text-light">
                      スクラッチ開発
                    </th>
                    <th className="text-center py-3 px-3 sm:px-4 text-xs font-bold text-brand">
                      Bubble開発（当社）
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.label} className="border-b border-slate-50">
                      <td className="py-4 px-3 sm:px-4 text-sm font-bold text-primary">
                        {row.label}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-sm text-text-light text-center">
                        {row.scratch}
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-sm font-bold text-brand text-center">
                        {row.bubble}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
