import DevHeader from "@/components/dev/DevHeader";
import DevHero from "@/components/dev/DevHero";
import DevPhilosophy from "@/components/dev/DevPhilosophy";
import Problems from "@/components/dev/Problems";
import DevGourmate from "@/components/dev/DevGourmate";
import DevServices from "@/components/dev/DevServices";
import TechStack from "@/components/dev/TechStack";
import Process from "@/components/dev/Process";
import FAQ from "@/components/dev/FAQ";
import DevContact from "@/components/dev/DevContact";
import DevFooter from "@/components/dev/DevFooter";

export const metadata = {
  title: "ノーコードBubble受託開発｜新規事業のPoC・MVP開発を高品質・低コストで実施",
  description:
    "ノーコードツールBubbleを用いた高品質な受託開発。自社サービス運用の知見を活かし、新規事業のMVP開発やPoCを最短2週間から支援します。",
};

export default function DevPage() {
  return (
    <>
      <DevHeader />
      <main>
        <DevHero />
        <DevPhilosophy />
        <Problems />
        <DevGourmate />
        <DevServices />
        <TechStack />
        <Process />
        <FAQ />
        <DevContact />
      </main>
      <DevFooter />
    </>
  );
}
