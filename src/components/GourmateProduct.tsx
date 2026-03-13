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
    <section className="py-24 sm:py-36 relative">
      {/* Decorative blurred circle */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/5 rounded-full blur-3xl" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <SectionLabel>Product</SectionLabel>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mt-8">
          <FadeIn className="lg:flex-[1.2] w-full">
            {/* Device mockup frame */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                {/* Browser bar mockup */}
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
                  priority
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:flex-1">
            <span className="inline-block text-xs px-3 py-1 bg-brand-light text-brand rounded-md font-bold mb-4">
              In-house Product
            </span>
            <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-black text-primary mb-5">
              Gourmate
            </h2>
            <p className="text-text-light leading-[2] mb-8 text-[0.9rem] sm:text-[0.95rem]">
              「食」を通じた出会いを最大化するマッチングプラットフォーム。私たちが自らBubbleで構築・運用しているこのサービスは、企画から3ヵ月でリリースし、その後2年以上運用を続けています。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 sm:p-4 rounded-xl bg-brand-light border border-brand/10">
                  <div className="text-brand font-black text-lg sm:text-xl mb-1">{stat.value}</div>
                  <div className="text-text-light text-[11px] sm:text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-bg-light text-[0.85rem] sm:text-[0.9rem] text-text-light leading-[1.8]">
              <strong className="text-primary">運用の手触り:</strong>{" "}
              開発して終わりではなく、自らバグ対応やUI/UX改善を繰り返しているからこそ、机上論ではない「動くシステム」を提案できます。
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
