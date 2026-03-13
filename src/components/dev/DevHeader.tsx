"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function DevHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/dev" className="font-extrabold text-[1.15rem] sm:text-xl tracking-[-0.01em] text-primary" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          Bubble<span className="text-brand">受託開発</span>
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          <a
            href="#about"
            className="text-sm font-bold text-primary hover:text-brand transition hidden md:block"
          >
            自社サービス
          </a>
          <a
            href="#services"
            className="text-sm font-bold text-primary hover:text-brand transition hidden md:block"
          >
            サービス
          </a>
          <a
            href="#process"
            className="text-sm font-bold text-primary hover:text-brand transition hidden md:block"
          >
            開発フロー
          </a>
          <a
            href="#faq"
            className="text-sm font-bold text-primary hover:text-brand transition hidden md:block"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="bg-brand text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_rgba(12,157,121,0.2)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.35)] hover:-translate-y-0.5 transition-all"
          >
            無料相談
          </a>
        </nav>
      </div>
    </header>
  );
}
