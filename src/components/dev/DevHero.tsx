"use client";

import { motion } from "framer-motion";

export default function DevHero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-52 sm:pb-32 overflow-hidden bg-[#0a0a0a]">
      {/* === Dark tech background layers === */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base grid - perspective dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0c9d79 0.5px, transparent 0.5px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial gradient overlay — spotlight from top-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 10%, rgba(12,157,121,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(12,157,121,0.06) 0%, transparent 50%)",
          }}
        />

        {/* Animated glow orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(12,157,121,0.15) 0%, transparent 60%)",
            top: "-10%",
            right: "-5%",
            animation: "float-1 20s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(12,157,121,0.08) 0%, transparent 60%)",
            bottom: "-5%",
            left: "-10%",
            animation: "float-2 16s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Horizontal neon lines */}
        <div
          className="absolute h-[1px] w-full opacity-[0.06]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #0c9d79 20%, #0c9d79 80%, transparent 100%)",
            top: "30%",
          }}
        />
        <div
          className="absolute h-[1px] w-full opacity-[0.04]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #0c9d79 30%, #0c9d79 70%, transparent 100%)",
            top: "65%",
          }}
        />

        {/* Animated scan line */}
        <div
          className="absolute h-[1px] w-[60%] opacity-[0.15]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #0c9d79 40%, transparent 100%)",
            top: "45%",
            animation: "streak-slide 10s ease-in-out infinite",
            willChange: "transform",
          }}
        />

        {/* Vertical accent lines */}
        <div
          className="absolute w-[1px] h-full opacity-[0.04] hidden sm:block"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #0c9d79 30%, #0c9d79 70%, transparent 100%)",
            left: "25%",
          }}
        />
        <div
          className="absolute w-[1px] h-full opacity-[0.04] hidden sm:block"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #0c9d79 40%, #0c9d79 60%, transparent 100%)",
            left: "75%",
          }}
        />

        {/* Corner accent — top left */}
        <svg className="absolute top-8 left-8 sm:top-12 sm:left-12 w-16 h-16 opacity-[0.1]" viewBox="0 0 64 64" fill="none">
          <path d="M0 24V0h24" stroke="#0c9d79" strokeWidth="1" />
        </svg>
        {/* Corner accent — bottom right */}
        <svg className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-16 h-16 opacity-[0.1]" viewBox="0 0 64 64" fill="none">
          <path d="M64 40v24H40" stroke="#0c9d79" strokeWidth="1" />
        </svg>

        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
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
