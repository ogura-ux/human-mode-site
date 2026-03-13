"use client";

import { useState, FormEvent } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function DevContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@human-mode.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          _subject: "【Dev】お問い合わせがありました",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand to-secondary rounded-3xl px-6 sm:px-10 md:px-16 py-16 sm:py-20 text-center text-white">
            <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-black mb-4 sm:mb-5">
              お問い合わせ
            </h2>
            <p className="text-white/80 mb-10 sm:mb-12 text-sm sm:text-base max-w-[500px] mx-auto">
              開発のご相談、お見積もり依頼など、お気軽にお問い合わせください。
              <br className="hidden sm:block" />
              通常1営業日以内にご連絡いたします。
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-10 sm:p-12 max-w-[600px] mx-auto text-center">
                <div className="text-brand text-5xl mb-4">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">送信が完了しました</h3>
                <p className="text-text-light text-sm">
                  お問い合わせありがとうございます。担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 sm:p-10 max-w-[600px] mx-auto text-left"
              >
                <div className="mb-5 sm:mb-6">
                  <label className="block font-bold text-xs mb-2 text-text-light">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(12,157,121,0.1)]"
                  />
                </div>
                <div className="mb-5 sm:mb-6">
                  <label className="block font-bold text-xs mb-2 text-text-light">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="info@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(12,157,121,0.1)]"
                  />
                </div>
                <div className="mb-5 sm:mb-6">
                  <label className="block font-bold text-xs mb-2 text-text-light">
                    貴社名（任意）
                  </label>
                  <input
                    type="text"
                    placeholder="株式会社〇〇"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition focus:border-brand focus:shadow-[0_0_0_3px_rgba(12,157,121,0.1)]"
                  />
                </div>
                <div className="mb-6 sm:mb-7">
                  <label className="block font-bold text-xs mb-2 text-text-light">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="新規事業のMVP開発について相談したい..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition resize-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(12,157,121,0.1)] font-[inherit]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 sm:py-5 bg-brand text-white border-none rounded-xl font-bold text-sm sm:text-base cursor-pointer transition hover:shadow-[0_8px_30px_rgba(12,157,121,0.4)] disabled:opacity-60"
                >
                  {submitting ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
