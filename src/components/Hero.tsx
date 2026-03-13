"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

export default function Hero() {
  return (
    <section className="relative pt-52 pb-40 gradient-mesh grid-pattern overflow-hidden">
      {/* Decorative blurred circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-brand/3 rounded-full blur-3xl" />

      <div className="max-w-[1080px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel>Product Studio</SectionLabel>
        </motion.div>

        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-black text-primary leading-[1.15] tracking-[-0.03em] mb-9"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          事業を、
          <br />
          <span className="text-brand">実装</span>する。
        </motion.h1>

        <motion.p
          className="text-lg text-text-light max-w-[600px] leading-[2]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          構想で終わらせない。Bubbleを軸とした確かな技術力と、自社プロダクト運営で培った事業視点を武器に、市場で機能するプロダクトを最速で形にします。
        </motion.p>
      </div>
    </section>
  );
}
