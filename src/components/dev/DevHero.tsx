"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const badges = [
  { label: "Bubble Expert", icon: "⚡" },
  { label: "AI Integration", icon: "🤖" },
  { label: "自社プロダクト運営", icon: "🚀" },
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
          <SectionLabel>Product Studio</SectionLabel>
        </motion.div>

        <motion.h1
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-primary leading-[1.15] tracking-[-0.03em] mb-6 sm:mb-9"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          使われるプロダクトを、
          <br />
          <span className="text-brand">最速</span>で。
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-text-light max-w-[600px] leading-[1.9] mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Bubbleを軸とした確かな技術力と、自社プロダクト運営で培った事業視点。
          この2つを武器に、市場で本当に使われるプロダクトを最速で形にします。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 mb-10 flex-wrap"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
              className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-brand/15 bg-white/80 text-text-light backdrop-blur-sm"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-3 sm:gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_4px_14px_rgba(12,157,121,0.25)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.4)] hover:-translate-y-0.5 transition-all"
          >
            無料相談を始める
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
      </div>
    </section>
  );
}
