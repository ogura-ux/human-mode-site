export default function DevFooter() {
  return (
    <footer className="bg-bg-accent text-white py-12 sm:py-16 pb-6 sm:pb-8 text-sm">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 text-center">
        <div className="font-black text-brand text-xl tracking-[0.05em] mb-2">
          HUMAN MODE
        </div>
        <p className="text-white/30 text-xs mb-8">Product Studio — Dev</p>
        <div className="border-t border-white/5 pt-6">
          <p className="text-white/20 mb-2">
            &copy; {new Date().getFullYear()} Human Mode Inc. All Rights Reserved.
          </p>
          <p>
            <a
              href="https://www.human-mode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-brand transition underline"
            >
              運営会社：株式会社ヒューマンモード
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
