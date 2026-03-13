import type { Metadata } from "next";
import { inter, notoSansJP } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://human-mode.com"),
  title: "株式会社ヒューマンモード | Product Studio",
  description:
    "構想で終わらせない。Bubbleを軸とした確かな技術力と、自社プロダクト運営で培った事業視点を武器に、市場で機能するプロダクトを最速で形にします。",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "株式会社ヒューマンモード | Product Studio",
    description:
      "構想で終わらせない。Bubbleを軸とした確かな技術力と、自社プロダクト運営で培った事業視点を武器に、市場で機能するプロダクトを最速で形にします。",
    url: "https://human-mode.com",
    siteName: "Human Mode Inc.",
    images: [{ url: "/gourmate_OGP.jpg", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans text-text-main leading-relaxed bg-bg-dark`}
      >
        {children}
      </body>
    </html>
  );
}
