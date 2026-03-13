import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogDetail, getAllBlogIds } from "@/lib/microcms";

export const revalidate = 60;

export async function generateStaticParams() {
  const ids = await getAllBlogIds();
  return ids.map((id) => ({ slug: id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getBlogDetail(slug);
    return {
      title: `${post.title} | ブログ | 株式会社ヒューマンモード`,
      description: post.description || post.title,
      alternates: { canonical: `https://human-mode.com/dev/blog/${post.id}` },
      openGraph: {
        title: post.title,
        description: post.description || post.title,
        url: `https://human-mode.com/dev/blog/${post.id}`,
        siteName: "Human Mode Inc.",
        locale: "ja_JP",
        type: "article",
        publishedTime: post.publishedAt,
        ...(post.eyecatch && {
          images: [{ url: post.eyecatch.url, width: 1200, height: 630 }],
        }),
      },
      twitter: { card: "summary_large_image" },
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = await getBlogDetail(slug);
  } catch {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description || post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "株式会社ヒューマンモード",
      url: "https://human-mode.com",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社ヒューマンモード",
      url: "https://human-mode.com",
    },
    mainEntityOfPage: `https://human-mode.com/dev/blog/${post.id}`,
    ...(post.eyecatch && { image: post.eyecatch.url }),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://human-mode.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "記事一覧",
        item: "https://human-mode.com/dev/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://human-mode.com/dev/blog/${post.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="pt-32 pb-20">
        <article className="max-w-[740px] mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-light mb-8">
            <Link href="/dev" className="hover:text-brand transition">
              Bubble受託開発
            </Link>
            <span>/</span>
            <Link href="/dev/blog" className="hover:text-brand transition">
              記事一覧
            </Link>
            <span>/</span>
            <span className="text-primary truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              {post.category && (
                <span className="inline-block text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                  {post.category.name}
                </span>
              )}
              <time className="text-sm text-text-light">
                {new Date(post.publishedAt!).toLocaleDateString("ja-JP")}
              </time>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Eye catch */}
          {post.eyecatch && (
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-10">
              <Image
                src={post.eyecatch.url}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 740px) 100vw, 740px"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-primary prose-headings:font-bold
              prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-black/5
              prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-text-main prose-p:leading-relaxed
              prose-a:text-brand prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-lg
              prose-code:text-brand prose-code:bg-brand-light prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#1e1e1e] prose-pre:rounded-xl
              prose-blockquote:border-brand prose-blockquote:bg-brand-light/30 prose-blockquote:rounded-r-lg prose-blockquote:py-1
              prose-li:text-text-main
              prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to list */}
          <div className="mt-16 pt-8 border-t border-black/5">
            <Link
              href="/dev/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              ← 記事一覧に戻る
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
