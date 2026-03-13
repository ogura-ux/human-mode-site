"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Particles from "./ui/Particles";

const badges = [
  { label: "Bubble Expert", icon: "⚡" },
  { label: "AI Integration", icon: "🤖" },
  { label: "自社プロダクト運営", icon: "🚀" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle background */}
      <Particles />

      {/* Glow orbs */}
      <div className="glow-orb glow-orb-brand w-[500px] h-[500px] top-1/4 left-1/2 -translate-x-1/2" />
      <div className="glow-orb glow-orb-brand w-[300px] h-[300px] bottom-[10%] left-[10%]" style={{ animationDelay: "3s" }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern-dark" />

      <div className="max-w-[1080px] mx-auto px-6 relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex gap-3 mb-10 flex-wrap"
        >
          {badges.map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        <motion.h1
          className="text-[clamp(2.8rem,7vw,5rem)] font-black text-white leading-[1.1] tracking-[-0.03em] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          事業を、
          <br />
          <span className="text-brand">実装</span>する。
        </motion.h1>

        <motion.p
          className="text-lg text-white/50 max-w-[600px] leading-[2] mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          構想で終わらせない。Bubbleを軸とした確かな技術力と、自社プロダクト運営で培った事業視点を武器に、市場で機能するプロダクトを最速で形にします。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_4px_20px_rgba(12,157,121,0.3)] hover:shadow-[0_8px_30px_rgba(12,157,121,0.5)] hover:-translate-y-0.5 transition-all"
          >
            無料相談を始める
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
