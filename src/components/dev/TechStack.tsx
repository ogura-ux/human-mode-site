import FadeIn from "@/components/ui/FadeIn";

const techs = [
  "Dify",
  "Google Gemini",
  "OpenAI (ChatGPT)",
  "Square",
  "Google Maps",
  "SendGrid",
  "AWS S3/Lambda",
  "Slack API",
];

export default function TechStack() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <h3 className="text-[clamp(1.3rem,3.5vw,1.8rem)] font-black text-primary mb-4">
            We connect Bubble with Everything
          </h3>
          <p className="text-text-light mb-12 sm:mb-14 text-sm sm:text-base">
            最新のAIモデルや決済システムも、API連携でシームレスに実装します。
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 max-w-[900px] mx-auto">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-sm sm:text-base text-text-main bg-white px-5 sm:px-6 py-3 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.04)] font-semibold transition hover:-translate-y-1 hover:text-brand hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
