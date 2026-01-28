import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import {
  Research,
  PromotionalFundSource,
  ResearchFundSource,
  ResearchFundSourceInfo,
} from "@/types";
import Image from "next/image";

export default function ResearchFundBox({
  selectedResearch,
}: {
  selectedResearch: Research;
}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];
  const isFoundPromotionalFund =
    selectedResearch?.fund?.promotionalFund &&
    selectedResearch?.fund?.promotionalFund !== PromotionalFundSource.noFund;
  const isResearchFundFound =
    selectedResearch?.fund?.researchFund &&
    selectedResearch?.fund?.researchFund !== ResearchFundSource.noFund;

  // FIXME: It is not generally yet
  const promotionalFundRender = () => {
    if (!isFoundPromotionalFund) {
      return "";
    }
    if (language === "ja") {
      return "";
    } else {
      return `its promotional funds derived from ${selectedResearch?.fund?.promotionalFund}.`;
    }
  };

  const researchGrantData = () => {
    if (
      !selectedResearch?.fund?.researchFund ||
      selectedResearch?.fund?.researchFund === ResearchFundSource.noFund
    ) {
      return "";
    }
    if (language === "ja") {
      return `${t.thisWorkIsSupportByStart} ${
        ResearchFundSourceInfo[selectedResearch?.fund?.researchFund]?.[language]
          ?.labelInGrantName
      } ${t.thisWorkSupportByEnd} (${t.grantNumber}: ${selectedResearch?.fund?.grantNumber})`;
    } else {
      return `${t.thisWorkIsSupportByStart} ${
        ResearchFundSourceInfo[selectedResearch?.fund?.researchFund]?.[language]
          ?.labelInGrantName
      } (${t.grantNumber}: ${selectedResearch?.fund?.grantNumber}) ${promotionalFundRender()} `;
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4">{t.researchFund}</h2>
      <p className="text-gray-700">{researchGrantData()}</p>
      <div className="flex gap-2 my-4">
        {isResearchFundFound && (
          <Image
            src={getImagePath(
              ResearchFundSourceInfo[selectedResearch?.fund?.researchFund]
                ?.logo || "",
            )}
            width={150}
            height={50}
            alt="Research Fund Logo"
          />
        )}{" "}
        {isFoundPromotionalFund && (
          <Image
            src={getImagePath(
              ResearchFundSourceInfo[selectedResearch?.fund?.promotionalFund]
                ?.logo || "",
            )}
            width={150}
            height={50}
            alt="Research Fund Logo"
          />
        )}
      </div>
    </div>
  );
}
