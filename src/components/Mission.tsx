"use client";

import { motion } from "framer-motion";

export default function Mission() {
  const text = "テクノロジーを、ビジネスの確信へ。";
  const chars = text.split("");

  return (
    <section className="py-40 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-orb glow-orb-brand w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1080px] mx-auto px-6 relative z-10 text-center">
        <motion.p
          className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-black leading-[1.4] tracking-[-0.02em]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {chars.map((char, i) => (
            <motion.span
              key={i}
              className={char === "、" || char === "。" ? "text-white/80" : "text-white"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: i * 0.04 },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
