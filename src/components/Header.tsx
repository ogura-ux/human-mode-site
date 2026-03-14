"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith("/dev/blog");
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
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex justify-between items-center gap-3">
        <Link href="/" className="font-black text-lg sm:text-xl tracking-[0.05em] text-brand shrink-0">
          HUMAN MODE
        </Link>
        <nav className="flex gap-3 sm:gap-8 items-center shrink-0">
          {isBlogPage && (
            <Link
              href="/dev/blog"
              className="text-xs sm:text-sm font-bold text-primary hover:text-brand transition whitespace-nowrap"
            >
              記事一覧
            </Link>
          )}
          <Link
            href="/dev"
            className="bg-brand text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shadow-[0_4px_14px_rgba(12,157,121,0.2)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.35)] hover:-translate-y-0.5 transition-all"
          >
            受託開発相談
          </Link>
        </nav>
      </div>
    </header>
  );
}
