import Image from "next/image";
import Link from "next/link";
import { getBlogList } from "@/lib/microcms";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

export default async function DevBlog() {
  const { contents: posts } = await getBlogList({ limit: 3 });

  if (posts.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="mb-14 sm:mb-20">
            <SectionLabel>Blog</SectionLabel>
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black text-primary mb-3">
              ナレッジ・ブログ
            </h2>
            <p className="text-text-light text-sm sm:text-base max-w-[600px] leading-[1.8]">
              ノーコード開発やAI活用に関する知見を発信しています。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.1}>
              <Link
                href={`/dev/blog/${post.id}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand/30 hover:shadow-[0_10px_40px_rgba(12,157,121,0.06)] flex flex-col h-full"
              >
                {/* Eyecatch */}
                <div className="relative aspect-[16/9] bg-bg-light overflow-hidden">
                  {post.eyecatch ? (
                    <Image
                      src={post.eyecatch.url}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-text-light/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  {post.category && (
                    <span className="text-[11px] font-bold text-brand bg-brand-light px-3 py-1 rounded-md w-fit mb-3">
                      {post.category.name}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-extrabold text-primary leading-[1.6] mb-3 line-clamp-2 group-hover:text-brand transition-colors duration-300">
                    {post.title}
                  </h3>
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-text-light mt-auto"
                  >
                    {new Date(post.publishedAt!).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/dev/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand/80 transition-colors duration-300"
            >
              記事一覧を見る
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
