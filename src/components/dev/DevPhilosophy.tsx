"use client";

import FadeIn from "@/components/ui/FadeIn";

const strengths = [
  {
    number: "2年+",
    title: "自社サービス運用",
    description: "Gourmateを自らBubbleで構築・運用。開発して終わりではなく、運用の現実を知っている。",
  },
  {
    number: "最短2週間",
    title: "MVP実装",
    description: "事業仮説の検証に必要な最小機能を、スピード重視で形にする。",
  },
  {
    number: "Bubble × AI",
    title: "技術スタック",
    description: "ノーコード開発の速度と、AIインテグレーションによる拡張性を両立。",
  },
];

export default function DevPhilosophy() {
  return (
    <section className="py-24 sm:py-32 bg-bg-accent text-white">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <p className="text-brand font-black text-xs tracking-[0.3em] uppercase mb-4">
            Why Us
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black leading-[1.3] mb-4">
            自社サービスを運営しているからこそ、
            <br className="hidden sm:block" />
            事業の現実を知っている。
          </h2>
          <p className="text-white/50 max-w-[600px] leading-[1.9] mb-16 text-sm sm:text-base">
            多くの受託開発会社は「作って納品」で終わる。
            私たちは自らプロダクトを運営し、バグ対応やUI改善を繰り返してきた。
            だからこそ、机上論ではない「動くプロダクト」を提案できる。
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
          {strengths.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <div className="border-t border-white/10 pt-8">
                <div className="text-brand font-black text-3xl sm:text-4xl mb-2">
                  {item.number}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-[1.8]">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
