"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 gradient-mesh grid-pattern overflow-hidden">
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/5 rounded-full blur-3xl" />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative">
        <motion.p
          className="text-brand font-bold text-xs tracking-[0.25em] uppercase mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Product Studio
        </motion.p>

        <motion.h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-black text-primary leading-[1.2] tracking-[-0.02em] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          テクノロジーで、
          <br />
          事業をつくる。
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base text-text-light max-w-[520px] leading-[1.9] mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          株式会社ヒューマンモードは、Bubble受託開発と自社プロダクト運営の
          2つの事業を展開するプロダクトスタジオです。
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            href="/dev"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_14px_rgba(12,157,121,0.25)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.4)] hover:-translate-y-0.5 transition-all"
          >
            受託開発について
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="https://gourmate-welcome.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-full font-bold text-sm border border-slate-200 hover:border-brand hover:-translate-y-0.5 transition-all"
          >
            Gourmate ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
