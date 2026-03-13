"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "Bubble Expert", icon: "⚡" },
  { label: "AI Integration", icon: "🤖" },
  { label: "Payment Systems", icon: "💳" },
];

export default function DevHero() {
  return (
    <section className="relative pt-40 pb-24 sm:pt-52 sm:pb-32 gradient-mesh grid-pattern overflow-hidden">
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs px-4 py-1.5 bg-brand-light text-brand rounded-full font-bold tracking-[0.1em] mb-6">
            For Visionary Founders
          </span>
        </motion.div>

        <motion.h1
          className="text-[clamp(2rem,5.5vw,3.5rem)] font-black text-primary leading-[1.15] tracking-[-0.02em] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          そのアイデア、
          <br />
          <span className="text-brand">「運用できるシステム」</span>
          として実装します。
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-text-light max-w-[600px] leading-[1.9] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          プロダクト開発は「作って終わり」ではありません。
          <br className="hidden sm:block" />
          自社サービス「Gourmate」をゼロから開発し、日々の運用・改善を行っている私たちだからこそ提供できる、ビジネスを成長させるためのエンジニアリング。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 sm:gap-4 mb-10 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(12,157,121,0.25)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.4)] hover:-translate-y-0.5 transition-all"
          >
            開発の相談をする（無料）
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border-2 border-brand text-brand px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-brand hover:text-white transition-all"
          >
            実績詳細を見る
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex gap-3 flex-wrap"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-brand/15 bg-white/80 text-text-light backdrop-blur-sm"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
