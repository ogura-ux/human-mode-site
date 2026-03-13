import Image from "next/image";
import SectionLabel from "./ui/SectionLabel";
import FadeIn from "./ui/FadeIn";

const stats = [
  { value: "3ヵ月", label: "企画→リリース" },
  { value: "2年+", label: "継続運用" },
  { value: "Bubble", label: "技術スタック" },
];

export default function GourmateProduct() {
  return (
    <section className="py-44 relative">
      {/* Ambient glow */}
      <div className="glow-orb glow-orb-brand w-[400px] h-[400px] top-0 right-[10%]" />

      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <FadeIn>
          <SectionLabel>Product</SectionLabel>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-8">
          <FadeIn className="lg:flex-[1.2]">
            {/* Device mockup frame */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
                {/* Browser bar mockup */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/30 text-center">
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
                  priority
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:flex-1">
            <span className="inline-block text-xs px-3 py-1 bg-brand/10 text-brand rounded-md font-bold mb-4">
              In-house Product
            </span>
            <h2 className="text-[2.2rem] font-black text-white mb-6">
              Gourmate
            </h2>
            <p className="text-white/50 leading-[2] mb-8">
              「食」を通じた出会いを最大化するマッチングプラットフォーム。私たちが自らBubbleで構築・運用しているこのサービスは、企画から3ヵ月でリリースし、その後2年間運用を行っています。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/3 border border-white/5">
                  <div className="text-brand font-black text-xl mb-1">{stat.value}</div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/3 text-[0.9rem] text-white/50 leading-[1.8]">
              <strong className="text-white/70">運用の手触り:</strong>{" "}
              開発して終わりではなく、自らバグ対応やUI/UX改善を繰り返しているからこそ、机上論ではない「動くシステム」を提案できます。
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
