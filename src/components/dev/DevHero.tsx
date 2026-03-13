"use client";

import { motion } from "framer-motion";

export default function DevHero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-52 sm:pb-32 overflow-hidden bg-[#0a0a0a]">
      {/* === Digital circuit background — CSS only === */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dot matrix grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(12,157,121,0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Center glow — subtle brand color ambient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(12,157,121,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(12,157,121,0.3) 50%, transparent 90%)",
          }}
        />

        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: "linear-gradient(to top, #0a0a0a, transparent)",
          }}
        />
      </div>

      {/* === Content === */}
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.p
          className="text-brand font-bold text-xs tracking-[0.25em] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bubble Development
        </motion.p>

        <motion.h1
          className="text-[clamp(2rem,5.5vw,4rem)] font-black text-white leading-[1.15] tracking-[-0.03em] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          新規事業のMVPを、
          <br />
          <span className="text-brand">最短2週間</span>で形に。
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-slate-400 max-w-[560px] leading-[1.9] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          ノーコードツールBubbleで、スクラッチ開発比
          <strong className="text-white">1/3以下のコスト</strong>
          ・<strong className="text-white">1/4以下の期間</strong>で開発。
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
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">スクラッチ比コスト</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand">2週間〜</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">MVP開発期間</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-brand">2年+</div>
            <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">自社サービス運用</div>
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
            className="inline-flex items-center gap-2 bg-brand text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_4px_24px_rgba(12,157,121,0.3)] hover:shadow-[0_6px_32px_rgba(12,157,121,0.5)] hover:-translate-y-0.5 transition-all"
          >
            まずは無料で相談する
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-transparent text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base border border-slate-700 hover:border-brand hover:-translate-y-0.5 transition-all"
          >
            料金目安を見る
          </a>
        </motion.div>
      </div>
    </section>
  );
}
