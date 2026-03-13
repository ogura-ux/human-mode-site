import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  "Squareを用いたセキュアな決済フローの実装",
  "SendGridによる自動通知・トランザクションメール配信",
  "Bubble標準機能をフル活用した、高速かつ堅牢なロジック設計",
  "外部API連携を最小限に抑えた、保守性の高いシステム構築",
];

export default function DevGourmate() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <FadeIn className="lg:flex-1">
            <SectionLabel>Proven Track Record</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary mb-6 leading-[1.3]">
              自社サービス「Gourmate」で
              <br className="hidden sm:block" />
              実証された技術力
            </h2>
            <p className="text-text-light leading-[1.9] mb-8 text-sm sm:text-base">
              私たちは単なる受託会社ではなく、プレイヤーです。複雑なロジックを要するマッチングアプリ「Gourmate」をBubbleで構築し、安定稼働させています。
            </p>

            <div className="mb-8">
              <h4 className="font-bold text-primary text-sm sm:text-base mb-4 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0c9d79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                実装機能例
              </h4>
              <ul className="space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="text-text-light text-sm leading-[1.7] flex items-start gap-2">
                    <span className="text-brand mt-0.5 shrink-0">・</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-brand-light border-l-4 border-brand text-sm leading-[1.8] text-primary">
              <strong>Point:</strong>{" "}
              私たちは自社サービスの立ち上げから継続的な運用までを自ら一貫して行っています。その過程で得た
              <strong>「バグ対応」</strong>や<strong>「UI/UX改善」</strong>
              といった、実際の運用フェーズで直面する課題を解決するための実践的な知見を、お客様のプロジェクトに還元します。
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:flex-1 w-full">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="flex-1 mx-8">
                  <div className="bg-slate-100 rounded-md px-3 py-1 text-[10px] text-slate-400 text-center">
                    gourmate-welcome.com
                  </div>
                </div>
              </div>
              <Image
                src="/gourmate_OGP.jpg"
                alt="Gourmate UI Visual"
                width={1200}
                height={630}
                className="w-full h-auto block"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
