import Image from "next/image";
import FadeIn from "./ui/FadeIn";

export default function GourmateProduct() {
  return (
    <section className="py-44">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <FadeIn className="lg:flex-[1.2]">
            <div className="rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/gourmate_OGP.jpg"
                alt="Gourmate UI Visual"
                width={1200}
                height={630}
                className="w-full h-auto block"
                priority
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:flex-1">
            <span className="inline-block text-xs px-3 py-1 bg-brand-light text-brand rounded-md font-bold mb-4">
              In-house Product
            </span>
            <h2 className="text-[2.2rem] font-black text-primary mb-6">
              Gourmate
            </h2>
            <p className="text-text-light leading-[2] mb-8">
              「食」を通じた出会いを最大化するマッチングプラットフォーム。私たちが自らBubbleで構築・運用しているこのサービスは、企画から3ヵ月でリリースし、その後2年間運用を行っています。
            </p>
            <div className="bg-[#f0fdf9] p-6 rounded-xl border-l-4 border-brand text-[0.95rem] text-text-main leading-[1.8]">
              <strong>運用の手触り:</strong>{" "}
              開発して終わりではなく、自らバグ対応やUI/UX改善を繰り返しているからこそ、机上論ではない「動くシステム」を提案できます。
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
