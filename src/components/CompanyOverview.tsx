import SectionLabel from "./ui/SectionLabel";
import FadeIn from "./ui/FadeIn";

const companyData = [
  { label: "名称", value: "株式会社ヒューマンモード" },
  { label: "事業内容", value: "Bubble受託開発 / 自社サービス運営" },
  { label: "所在地", value: "東京都千代田区" },
  { label: "公式URL", value: "https://human-mode.com" },
];

export default function CompanyOverview() {
  return (
    <div className="max-w-[1080px] mx-auto px-6 mt-24">
      <FadeIn>
        <div className="glass-card rounded-[32px] py-20 px-8 md:px-16">
          <div className="max-w-[800px] mx-auto">
            <SectionLabel>Corporate</SectionLabel>
            <h2 className="text-[2.2rem] font-black text-white mb-10">
              Company Overview
            </h2>
            <table className="w-full border-collapse">
              <tbody>
                {companyData.map((row) => (
                  <tr key={row.label} className="border-b border-white/5">
                    <th className="py-6 text-left w-[30%] font-bold text-white/70 text-sm">
                      {row.label}
                    </th>
                    <td className="py-6 text-white/50 text-[0.95rem]">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
