import Link from "next/link";
import SectionLabel from "./ui/SectionLabel";
import FadeIn from "./ui/FadeIn";

const cards = [
  {
    title: "開発スタジオ事業",
    description:
      "Bubbleを活用した最短2週間でのMVP実装。仕様書を作るのではなく、事業の成功から逆算した最適なエンジニアリングを提供します。",
    link: "/dev",
    linkText: "詳細を見る →",
    external: false,
  },
  {
    title: "プロダクトラボ事業",
    description:
      "自社発のサービスを企画・開発・運用。身銭を切って検証を繰り返す中で得た実務的な知見を、すべてのプロジェクトに還元します。",
    link: "https://gourmate-welcome.com/",
    linkText: "Gourmateを見る ↗",
    external: true,
  },
];

export default function Expertise() {
  return (
    <section className="py-44 bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <SectionLabel>Expertise</SectionLabel>
            <h2 className="text-[2.2rem] font-black text-primary leading-[1.3]">
              テクノロジーを、
              <br />
              ビジネスの確信へ
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.15}>
              <div className="group bg-white p-12 rounded-3xl border border-slate-100 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <h3 className="text-2xl font-extrabold text-primary mb-6">
                  {card.title}
                </h3>
                <p className="text-[0.95rem] text-text-light leading-[2]">
                  {card.description}
                </p>
                {card.external ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-brand font-bold text-sm border-b-2 border-brand-light hover:border-brand transition"
                  >
                    {card.linkText}
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="inline-block mt-6 text-brand font-bold text-sm border-b-2 border-brand-light hover:border-brand transition"
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
