import FadeIn from "@/components/ui/FadeIn";

const problems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "開発コストが高すぎる",
    description:
      "スクラッチ開発で見積もりをとったら数百万円〜1000万円。MVP検証にそこまで予算をかけられない。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "リリースまで半年かかる",
    description:
      "スピードが命の新規事業なのに、要件定義と開発で半年以上。その間に市場環境が変わってしまう。",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 3-2 8h-4c0-5-2-6.05-2-8a4 4 0 014-4zM10 14h4M10 18h4M11 22h2" />
      </svg>
    ),
    title: "AI・外部連携の不安",
    description:
      "「生成AIを組み込みたい」「複雑な決済を入れたい」が、ノーコードでどこまで実現できるかわからない。",
  },
];

export default function Problems() {
  return (
    <section className="py-24 sm:py-32 bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary mb-4">
              こんな「開発の悩み」ありませんか？
            </h2>
            <p className="text-text-light max-w-[700px] mx-auto text-sm sm:text-base">
              多くの新規事業担当者が、リソース不足と技術選定のジレンマに陥っています。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="bg-white p-7 sm:p-8 border-l-4 border-brand shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
                <div className="text-red-500 mb-5">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-[0.95rem] text-text-light leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
