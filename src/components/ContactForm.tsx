"use client";

import { useState, FormEvent } from "react";
import SectionLabel from "./ui/SectionLabel";
import FadeIn from "./ui/FadeIn";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
          message,
          _subject: "【コーポレート】お問い合わせがありました",
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-brand-light">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          <FadeIn>
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black text-primary mb-6 sm:mb-8">
                相談をはじめる
              </h2>
              <p className="text-text-light max-w-[350px] leading-[1.8] text-sm sm:text-base">
                24時間以内にご連絡いたします。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="text-center py-16 px-8 sm:px-10 bg-white rounded-2xl border border-brand/20 text-brand font-bold shadow-sm">
                送信が完了しました。担当より追ってご連絡いたします。
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
                <div className="mb-6 sm:mb-7">
                  <label className="block font-bold text-xs mb-2 sm:mb-3 text-text-light">
                    お名前
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition focus:border-brand focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)]"
                  />
                </div>
                <div className="mb-6 sm:mb-7">
                  <label className="block font-bold text-xs mb-2 sm:mb-3 text-text-light">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition focus:border-brand focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)]"
                  />
                </div>
                <div className="mb-6 sm:mb-7">
                  <label className="block font-bold text-xs mb-2 sm:mb-3 text-text-light">
                    お問い合わせ内容
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="プロジェクトの概要や、解決したい課題を自由にご記入ください。"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 border border-slate-200 rounded-xl text-base outline-none bg-white text-primary placeholder:text-slate-300 transition resize-none focus:border-brand focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)] font-[inherit]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 sm:py-5 bg-brand text-white border-none rounded-xl font-bold text-sm sm:text-base cursor-pointer transition hover:shadow-[0_8px_30px_rgba(12,157,121,0.4)] disabled:opacity-60"
                >
                  {submitting ? "送信中..." : "メッセージを送信する"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
