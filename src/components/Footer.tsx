import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-accent text-white py-16 sm:py-20 pb-8 sm:pb-10 text-sm">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 sm:gap-10 mb-12 sm:mb-16">
          <div>
            <div className="font-black text-brand text-xl tracking-[0.05em] mb-3">
              HUMAN MODE
            </div>
            <p className="text-white/30 text-xs">Product Studio</p>
          </div>

          <nav className="flex gap-6 sm:gap-8">
            <Link href="#contact" className="text-white/40 hover:text-brand transition text-sm">
              Contact
            </Link>
            <a
              href="https://gourmate-welcome.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand transition text-sm"
            >
              Gourmate
            </a>
            <Link href="/dev" className="text-white/40 hover:text-brand transition text-sm">
              受託開発
            </Link>
            <Link href="/blog" className="text-white/40 hover:text-brand transition text-sm">
              ブログ
            </Link>
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/20">
          <p>&copy; {new Date().getFullYear()} Human Mode Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
