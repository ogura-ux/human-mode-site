import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "01",
    title: "ヒアリング・要件整理",
    description:
      "「何を作りたいか」だけでなく「何を達成したいか」をお伺いします。仕様書がなくても構いません。壁打ちしながら要件を固めます。",
  },
  {
    num: "02",
    title: "UI/UXデザイン・設計",
    description:
      "Bubbleの実装に入る前に、画面遷移図やDB設計を行います。この段階で拡張性を考慮した「運用に強い設計」を仕込みます。",
  },
  {
    num: "03",
    title: "アジャイル開発",
    description:
      "1〜2週間ごとに進捗を共有し、実際の画面を触っていただきながら開発を進めます。認識のズレを防ぎ、柔軟な修正が可能です。",
  },
  {
    num: "04",
    title: "テスト・リリース・運用開始",
    description:
      "入念な動作テストを経てリリースします。ご希望であれば、リリース後の分析環境（GA4など）のセットアップも行います。",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14 sm:mb-20">
            <SectionLabel>Workflow</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary">
              ご相談から納品までの流れ
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-[800px] mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] sm:left-[27px] top-0 bottom-0 w-[2px] bg-slate-200" />

          <div className="space-y-12 sm:space-y-14">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative pl-16 sm:pl-20">
                  {/* Number circle */}
                  <div className="absolute left-0 top-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-base border-4 border-white shadow-[0_0_0_4px_#e2e8f0]">
                    {step.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[0.95rem] text-text-light leading-[1.8]">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
