import DevHeader from "@/components/dev/DevHeader";
import DevHero from "@/components/dev/DevHero";
import DevPhilosophy from "@/components/dev/DevPhilosophy";
import Problems from "@/components/dev/Problems";
import CaseStudies from "@/components/dev/CaseStudies";
import DevServices from "@/components/dev/DevServices";
import Pricing from "@/components/dev/Pricing";
import TechStack from "@/components/dev/TechStack";
import Process from "@/components/dev/Process";
import FAQ from "@/components/dev/FAQ";
import DevContact from "@/components/dev/DevContact";
import DevFooter from "@/components/dev/DevFooter";

export const metadata = {
  title: "Bubble受託開発｜MVP・新規事業を最短2週間・スクラッチ比1/3のコストで",
  description:
    "ノーコードツールBubbleで新規事業のMVP・PoCを最短2週間から開発。スクラッチ開発比1/3以下のコストで、AI連携・決済実装も対応。自社サービス2年超の運用実績。",
};

export default function DevPage() {
  return (
    <>
      <DevHeader />
      <main>
        <DevHero />
        <Problems />
        <DevPhilosophy />
        <CaseStudies />
        <DevServices />
        <Pricing />
        <TechStack />
        <Process />
        <FAQ />
        <DevContact />
      </main>
      <DevFooter />
    </>
  );
}
