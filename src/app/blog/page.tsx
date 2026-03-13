import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "記事一覧 | 株式会社ヒューマンモード",
  description:
    "Bubble開発・ノーコード・AI連携に関するナレッジを発信。新規事業のMVP開発やBubble受託開発の知見をお届けします。",
  alternates: { canonical: "https://human-mode.com/blog" },
  openGraph: {
    title: "記事一覧 | 株式会社ヒューマンモード",
    description:
      "Bubble開発・ノーコード・AI連携に関するナレッジを発信。",
    url: "https://human-mode.com/blog",
    siteName: "Human Mode Inc.",
    locale: "ja_JP",
    type: "website",
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const { contents: posts } = await getBlogList({ limit: 20 });

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            記事一覧
          </h1>
          <p className="text-text-light mb-12">
            Bubble開発・ノーコード・AI連携に関するナレッジを発信しています。
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20 text-text-light">
              <p className="text-lg mb-2">まだ記事がありません</p>
              <p className="text-sm">近日公開予定です。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group block bg-white rounded-xl border border-black/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-bg-light relative overflow-hidden">
                    {post.eyecatch ? (
                      <Image
                        src={post.eyecatch.url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-light to-white">
                        <span className="text-brand/30 text-4xl font-bold">
                          HM
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {post.category && (
                      <span className="inline-block text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full mb-3">
                        {post.category.name}
                      </span>
                    )}
                    <h2 className="font-bold text-primary text-base leading-snug mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-text-light text-sm line-clamp-2 mb-3">
                        {post.description}
                      </p>
                    )}
                    <time className="text-xs text-text-light/60">
                      {new Date(post.publishedAt!).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
