"use client";

import Image from "next/image";
import Link from "next/link";

import { Research, ResearchFundSource } from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import { Button } from "@/components/ui/button";
import { ResearchFundBox } from "@/components/features";
import _ from "lodash";

export default function DetailResearchPage({
  selectedResearch,
}: {
  selectedResearch: Research;
}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];

  const splitDataFromHyphen = (data: string | undefined) => {
    const splittedResult = _.split(data, "- ");
    return _.tail(splittedResult);
  };

  return (
    <div>
      {/* ヘッダーセクション */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getImagePath("/images/normal_header.png")})`,
        }}
      >
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter text-white drop-shadow-lg">
              {selectedResearch?.[language]?.title}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* プロジェクト概要 */}
            <div
              className="relative aspect-auto rounded-lg overflow-hidden"
              style={{ height: "auto", minHeight: "500px" }}
            >
              {selectedResearch?.images?.overview_image && (
                <Image
                  src={selectedResearch?.images?.overview_image}
                  alt={selectedResearch?.[language]?.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>

            {/* メインコンテンツ */}
            <section className="py-16">
              <div className="container">
                <div className="max-w-4xl mx-auto">
                  {/* 実験背景・目的 Background */}
                  {selectedResearch?.[language]?.backgroundText1 && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {t.backgroundTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.backgroundText1}
                      </p>
                      <p className="text-gray-700 mt-4 mb-8">
                        {selectedResearch?.[language]?.backgroundText2}
                      </p>

                      {selectedResearch?.images?.background_image && (
                        <div
                          className="relative aspect-auto rounded-lg overflow-hidden"
                          style={{ height: "auto", minHeight: "250px" }}
                        >
                          <Image
                            src={selectedResearch?.images?.background_image}
                            alt={t.backgroundTitle}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {/* 実験環境 Environment */}
                  {selectedResearch?.[language]?.environmentText1 && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {t.environmentTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.environmentText1}
                      </p>
                      <p className="text-gray-700 mt-4 mb-8">
                        {selectedResearch?.[language]?.environmentText2}
                      </p>
                    </div>
                  )}
                  {/* 研究手法  Method */}
                  {selectedResearch?.[language]?.methodText1 && (
                    <div className="mb-16">
                      {selectedResearch?.images?.method_image && (
                        <div
                          className="relative aspect-auto rounded-lg overflow-hidden"
                          style={{ height: "auto", minHeight: "250px" }}
                        >
                          <Image
                            src={selectedResearch?.images?.method_image}
                            alt={t.methodTitle}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h2 className="text-2xl font-bold mb-4">
                        {t.methodTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.methodText1}
                      </p>
                      <p className="text-gray-700 mt-4">
                        {selectedResearch?.[language]?.methodText2}
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                        {splitDataFromHyphen(
                          selectedResearch?.[language]?.methodList,
                        )?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                      <p className="text-gray-700 mt-4">
                        {selectedResearch?.[language]?.methodText3}
                      </p>
                    </div>
                  )}
                  {/* Custom Field 1*/}
                  {selectedResearch?.[language]?.customField1Title && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {selectedResearch?.[language]?.customField1Title}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.customField1Text}
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                        {splitDataFromHyphen(
                          selectedResearch?.[language]?.customField1List,
                        )?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  )}{" "}
                  {/* Custom Field 2*/}
                  {selectedResearch?.[language]?.customField2Title && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {selectedResearch?.[language]?.customField2Title}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.customField2Text}
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                        {splitDataFromHyphen(
                          selectedResearch?.[language]?.customField2List,
                        )?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {/* 実験結果 Result */}
                  {selectedResearch?.[language]?.resultText1 && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {t.resultsTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.resultText1}
                      </p>
                      <p className="text-gray-700 mt-4 mb-8">
                        {selectedResearch?.[language]?.resultText2}
                      </p>
                      {selectedResearch?.images?.result_image && (
                        <div
                          className="relative aspect-auto rounded-lg overflow-hidden"
                          style={{ height: "auto", minHeight: "250px" }}
                        >
                          <Image
                            src={selectedResearch?.images?.result_image}
                            alt={t.resultsTitle}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  )}
                  {/* 価値と効果 Value */}
                  {selectedResearch?.[language]?.valueText1 && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {t.valueTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.valueText1}
                      </p>
                      <p className="text-gray-700 mt-4 mb-8">
                        {selectedResearch?.[language]?.valueText2}
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mt-2 text-gray-700">
                        {splitDataFromHyphen(
                          selectedResearch?.[language]?.valueList,
                        )?.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {/* 今後の展望  Future Perspective */}
                  {selectedResearch?.[language]?.futurePerspectiveText1 && (
                    <div className="mb-16">
                      <h2 className="text-2xl font-bold mb-4">
                        {t.futurePerspectiveTitle}
                      </h2>
                      <p className="text-gray-700">
                        {selectedResearch?.[language]?.futurePerspectiveText1}
                      </p>
                      <p className="text-gray-700 mt-4">
                        {selectedResearch?.[language]?.futurePerspectiveText2}
                      </p>
                    </div>
                  )}
                  {selectedResearch?.fund?.researchFund &&
                    selectedResearch?.fund?.researchFund !==
                      ResearchFundSource.noFund && (
                      <ResearchFundBox selectedResearch={selectedResearch} />
                    )}
                  <div className="flex justify-center mt-8">
                    <Link href="/research/projects">
                      <Button variant="outline">{t.backToProjects}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
