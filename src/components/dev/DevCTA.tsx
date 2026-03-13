import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function DevCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand to-secondary px-6 sm:px-12 py-12 sm:py-16 text-center text-white">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-white/20 rotate-12" />
            </div>
            <div className="relative">
              <p className="text-sm font-semibold tracking-wide text-white/80 mb-3">
                まずは無料でご相談ください
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 leading-tight">
                あなたのアイデアを最短2週間で形に
              </h2>
              <p className="text-white/80 text-sm sm:text-base max-w-[480px] mx-auto mb-8">
                MVP開発・業務システム・ノーコード移行など、
                <br className="hidden sm:block" />
                お気軽にお問い合わせください。
              </p>
              <Link
                href="#contact"
                className="inline-block bg-white text-brand font-bold text-sm sm:text-base px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all"
              >
                無料で相談する
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
