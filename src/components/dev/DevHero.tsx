"use client";

import { motion } from "framer-motion";

export default function DevHero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-52 sm:pb-32 gradient-mesh grid-pattern overflow-hidden">
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative">
        <motion.p
          className="text-brand font-bold text-xs tracking-[0.25em] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bubble Development
        </motion.p>

        <motion.h1
          className="text-[clamp(2rem,5.5vw,4rem)] font-black text-primary leading-[1.15] tracking-[-0.03em] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          新規事業のMVPを、
          <br />
          <span className="text-brand">最短2週間</span>で形に。
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-text-light max-w-[560px] leading-[1.9] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          ノーコードツールBubbleで、スクラッチ開発比
          <strong className="text-primary">1/3以下のコスト</strong>
          ・<strong className="text-primary">1/4以下の期間</strong>で開発。
          自社サービス2年超の運用実績に裏打ちされた、事業視点の開発を提供します。
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="flex flex-wrap gap-6 sm:gap-10 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand">1/3</div>
            <div className="text-[11px] sm:text-xs text-text-light mt-0.5">スクラッチ比コスト</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand">2週間〜</div>
            <div className="text-[11px] sm:text-xs text-text-light mt-0.5">MVP開発期間</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand">2年+</div>
            <div className="text-[11px] sm:text-xs text-text-light mt-0.5">自社サービス運用</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(12,157,121,0.25)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.4)] hover:-translate-y-0.5 transition-all"
          >
            まずは無料で相談する
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base border border-slate-200 hover:border-brand hover:-translate-y-0.5 transition-all"
          >
            料金目安を見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
