import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import FadeIn from "./ui/FadeIn";

const cards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "開発スタジオ事業",
    subtitle: "Dev Studio",
    description:
      "Bubbleを活用した最短2週間でのMVP実装。仕様書を作るのではなく、事業の成功から逆算した最適なエンジニアリングを提供します。要件定義から設計・開発・リリースまで一気通貫で伴走。",
    features: ["MVP開発", "業務システム構築", "API連携・AI組み込み"],
    link: "/dev",
    linkText: "詳細を見る →",
    external: false,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "プロダクトラボ事業",
    subtitle: "Product Lab",
    description:
      "自社発のサービスを企画・開発・運用。身銭を切って検証を繰り返す中で得た実務的な知見を、すべてのクライアントプロジェクトに還元しています。",
    features: ["自社サービス企画・運用", "事業視点のUI/UX設計", "運用知見のフィードバック"],
    link: "https://gourmate-welcome.com/",
    linkText: "Gourmateを見る ↗",
    external: true,
  },
];

export default function Services() {
  return (
    <section className="py-24 sm:py-36">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 sm:mb-20">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-black text-primary leading-[1.3]">
              2つの事業で、
              <br />
              プロダクトに向き合う
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.15}>
              <div className="group bg-white p-8 sm:p-12 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] h-full">
                <div className="text-brand mb-5">{card.icon}</div>
                <span className="text-xs text-text-light font-bold tracking-[0.2em] uppercase">
                  {card.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary mt-2 mb-5">
                  {card.title}
                </h3>
                <p className="text-[0.9rem] sm:text-[0.95rem] text-text-light leading-[2] mb-6">
                  {card.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {card.features.map((f) => (
                    <span key={f} className="text-xs px-3 py-1 bg-brand-light text-brand rounded-md font-medium">
                      {f}
                    </span>
                  ))}
                </div>

                {card.external ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-brand font-bold text-sm border-b-2 border-brand-light hover:border-brand transition"
                  >
                    {card.linkText}
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="inline-block text-brand font-bold text-sm border-b-2 border-brand-light hover:border-brand transition"
                  >
                    {card.linkText}
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
