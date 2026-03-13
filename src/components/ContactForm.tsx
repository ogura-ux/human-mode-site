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
    <section id="contact" className="py-44 relative">
      {/* Ambient glow */}
      <div className="glow-orb glow-orb-brand w-[300px] h-[300px] bottom-0 left-[20%]" />

      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20">
          <FadeIn>
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-[2.5rem] font-black text-white mb-8">
                相談をはじめる
              </h2>
              <p className="text-white/50 max-w-[350px] leading-[1.8]">
                24時間以内にご連絡いたします。まずはお気軽にお問い合わせください。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {submitted ? (
              <div className="text-center py-16 px-10 glass-card rounded-2xl text-brand font-bold">
                送信が完了しました。担当より追ってご連絡いたします。
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-7">
                  <label className="block font-bold text-xs mb-3 text-white/40">
                    お名前
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-4 border border-white/10 rounded-xl text-base outline-none bg-white/5 text-white placeholder:text-white/20 transition focus:border-brand focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)]"
                  />
                </div>
                <div className="mb-7">
                  <label className="block font-bold text-xs mb-3 text-white/40">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 border border-white/10 rounded-xl text-base outline-none bg-white/5 text-white placeholder:text-white/20 transition focus:border-brand focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)]"
                  />
                </div>
                <div className="mb-7">
                  <label className="block font-bold text-xs mb-3 text-white/40">
                    お問い合わせ内容
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="プロジェクトの概要や、解決したい課題を自由にご記入ください。"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-5 py-4 border border-white/10 rounded-xl text-base outline-none bg-white/5 text-white placeholder:text-white/20 transition resize-none focus:border-brand focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(12,157,121,0.08)] font-[inherit]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-5 bg-brand text-white border-none rounded-xl font-bold text-base cursor-pointer transition hover:shadow-[0_8px_30px_rgba(12,157,121,0.4)] disabled:opacity-60"
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
