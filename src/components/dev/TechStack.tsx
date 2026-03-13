import FadeIn from "@/components/ui/FadeIn";

const techs = [
  {
    name: "Dify",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 1.95-2 3-2 8h-4c0-5-2-6.05-2-8a4 4 0 014-4zM10 14h4M10 18h4M11 22h2" />
      </svg>
    ),
  },
  {
    name: "Google Gemini",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: "OpenAI (ChatGPT)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    name: "Square",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    name: "Google Maps",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    name: "SendGrid",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    name: "AWS S3/Lambda",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 18V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M9 14l3-6 3 6M10 13h4" />
      </svg>
    ),
  },
  {
    name: "Slack API",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
        <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
        <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
        <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
        <path d="M14 20.5c0 .83-.67 1.5-1.5 1.5S11 21.33 11 20.5V19h1.5c.83 0 1.5.67 1.5 1.5z" />
        <path d="M10 9.5C10 10.33 9.33 11 8.5 11h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5z" />
        <path d="M10 3.5C10 2.67 10.67 2 11.5 2S13 2.67 13 3.5V5h-1.5C10.67 5 10 4.33 10 3.5z" />
      </svg>
    ),
  },
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
          <div className="flex justify-center flex-wrap gap-4 sm:gap-5 max-w-[900px] mx-auto">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2.5 text-sm sm:text-[1.05rem] text-text-main bg-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.05)] font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-brand hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] cursor-default"
              >
                <span className="text-brand">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
