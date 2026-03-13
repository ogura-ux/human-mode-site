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
      "Bubbleを活用した最短2週間でのMVP実装。仕様書を作るのではなく、事業の成功から逆算した最適なエンジニアリングを提供します。",
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
      "自社発のサービスを企画・開発・運用。身銭を切って検証を繰り返す中で得た実務的な知見を、すべてのプロジェクトに還元します。",
    link: "https://gourmate-welcome.com/",
    linkText: "Gourmateを見る ↗",
    external: true,
  },
];

export default function Services() {
  return (
    <section className="py-44">
      <div className="max-w-[1080px] mx-auto px-6">
        <FadeIn>
          <div className="mb-20">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-[2.2rem] font-black text-white leading-[1.3]">
              2つの事業で、
              <br />
              <span className="text-brand">プロダクトに向き合う</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.15}>
              <div className="glass-card group p-10 rounded-2xl h-full">
                <div className="text-brand mb-6">{card.icon}</div>
                <span className="text-xs text-white/30 font-bold tracking-[0.2em] uppercase">
                  {card.subtitle}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2 mb-6">
                  {card.title}
                </h3>
                <p className="text-[0.95rem] text-white/50 leading-[2]">
                  {card.description}
                </p>
                {card.external ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 text-brand font-bold text-sm hover:text-brand-dark transition"
                  >
                    {card.linkText}
                  </a>
                ) : (
                  <Link
                    href={card.link}
                    className="inline-block mt-8 text-brand font-bold text-sm hover:text-brand-dark transition"
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
