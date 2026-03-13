import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3M22 2l-7.5 7.5" />
        <path d="M9.13 14.87L4.5 16.5M14.87 9.13L16.5 4.5M22 2l-1.5 5.5" />
      </svg>
    ),
    title: "AIアプリ/MVP開発",
    description:
      "アイデアを最短2週間〜で形にします。DifyなどのAIツールを組み合わせた、高度な生成AIサービスの構築も可能です。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2" />
      </svg>
    ),
    title: "既存システムのリプレイス",
    description:
      "古くなった社内システムや、Excel管理の業務フローをBubbleでシステム化。業務効率を大幅に改善し、DXを推進します。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Bubble内製化支援",
    description:
      "将来的に社内でシステムを保守したい企業様向けに、共同開発を行いながらノウハウをレクチャーする伴走型支援です。",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "保守・グロース支援",
    description:
      "リリース後の機能追加、UI改善、API連携の拡張など、ビジネスの成長に合わせた継続的な開発サポートを提供します。",
  },
];

export default function DevServices() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-bg-light">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-14 sm:mb-20">
            <SectionLabel>Service Lineup</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary">
              ノーコード開発で、
              <br className="hidden sm:block" />
              ビジネスフェーズに合わせた最適な開発支援
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-brand hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(12,157,121,0.08)] h-full">
                <div className="w-14 h-14 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-[0.95rem] text-text-light leading-[1.8]">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
