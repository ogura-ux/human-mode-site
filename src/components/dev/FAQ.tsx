import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Bubbleで大規模なアプリは作れますか？",
    a: "可能です。Gourmateの実績に加え、海外では数億円規模の資金調達をしたスタートアップもBubbleを利用しています。スケール時の移行戦略も含めて提案します。",
  },
  {
    q: "DifyやChatGPTなどのAI連携は可能ですか？",
    a: "はい、得意分野です。Difyを活用したRAG（自社データ検索）構築や、Gemini/OpenAI APIを用いた機能実装の実績がございます。",
  },
  {
    q: "セキュリティは大丈夫ですか？",
    a: "BubbleはAWS上で動作しており、エンタープライズレベルのセキュリティ基準を満たしています。適切な権限設定（Privacy Rules）を行い、リスクを防ぎます。",
  },
  {
    q: "ソースコードの書き出しはできますか？",
    a: "Bubbleはプラットフォーム依存のためコード書き出しはできませんが、将来的な移行を見据えて、データのCSVエクスポートやAPI経由での取得が容易な設計を行います。",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary">
              よくあるご質問
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.08}>
              <div className="bg-bg-light p-7 sm:p-8 rounded-2xl h-full">
                <div className="flex items-start gap-3 font-bold text-primary mb-3">
                  <span className="text-brand font-black shrink-0">Q.</span>
                  <span className="text-sm sm:text-base">{faq.q}</span>
                </div>
                <p className="text-sm text-text-light leading-[1.8] pl-7">
                  {faq.a}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
