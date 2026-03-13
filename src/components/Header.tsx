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
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link href="/" className="font-black text-xl tracking-[0.05em] text-brand">
          HUMAN MODE
        </Link>
        <nav className="flex gap-4 sm:gap-8 items-center">
          {isBlogPage && (
            <Link
              href="/dev/blog"
              className="text-sm font-bold text-primary hover:text-brand transition"
            >
              記事一覧
            </Link>
          )}
          <Link
            href="/dev"
            className="bg-brand text-white px-5 sm:px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_4px_14px_rgba(12,157,121,0.2)] hover:shadow-[0_6px_20px_rgba(12,157,121,0.35)] hover:-translate-y-0.5 transition-all"
          >
            受託開発相談
          </Link>
        </nav>
      </div>
    </header>
  );
}
