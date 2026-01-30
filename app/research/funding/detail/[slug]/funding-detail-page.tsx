"use client";

import Image from "next/image";
import Link from "next/link";

import { Research, ResearchFundSource } from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import { ResearchFundDataTranslations } from "@/translations/research-fund";
import { Button } from "@/components/ui/button";
import _ from "lodash";

export default function FundingDetailPage({
  fundingId,
}: {
  fundingId?: string;
}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];
  const selectedResearchFund =
    ResearchFundDataTranslations[
      fundingId as keyof typeof ResearchFundDataTranslations
    ];
  const langResearchFund = selectedResearchFund
    ? selectedResearchFund[language]
    : null;

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
              {langResearchFund?.fullTitle}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* メインコンテンツ */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4">
                  {langResearchFund?.aboutTitle}
                </h2>
                <p className="text-gray-700">{langResearchFund?.aboutText}</p>
                <hr className="my-12" />
                {!_.isEmpty(selectedResearchFund?.currentProjects) && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {t.currentProject}
                    </h2>
                    {_.map(selectedResearchFund?.currentProjects, (project) => (
                      <div key={project.grantNumber} className="mb-6">
                        {project.grantNumber && (
                          <h4 className="text-lg font-semibold my-2 text-gray-500">
                            {t.grantNumber}: {project.grantNumber}
                          </h4>
                        )}
                        <h3 className="text-xl font-semibold mb-1">
                          {project?.[language]?.title}
                        </h3>
                        <div className="text-gray-700">
                          {project?.[language]?.recipient && (
                            <p className="py-1">
                              {t.grantRecipient}:{" "}
                              {project?.[language]?.recipient}
                            </p>
                          )}{" "}
                          {project?.[language]?.principleInvestigator && (
                            <p className="py-1">
                              {t.principleInvestigator}:{" "}
                              {project?.[language]?.principleInvestigator}
                            </p>
                          )}
                          {project?.[language]?.researchPeriod && (
                            <p className="py-1">
                              {t.researchPeriod}:{" "}
                              {project?.[language]?.researchPeriod}
                            </p>
                          )}{" "}
                          {project?.[language]?.division && (
                            <p className="py-1">
                              {t.division}: {project?.[language]?.division}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    <hr className="my-12" />
                  </div>
                )}{" "}
                {langResearchFund?.researchOverview !== "" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {t.researchOverview}
                    </h2>
                    <p className="text-gray-700">
                      {langResearchFund?.researchOverview}
                    </p>
                    <hr className="my-12" />
                  </div>
                )}
                {langResearchFund?.contributeToSociety !== "" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {t.contributeToSociety}
                    </h2>
                    <p className="text-gray-700">
                      {langResearchFund?.contributeToSociety}
                    </p>
                    <hr className="my-12" />
                  </div>
                )}{" "}
                {!_.isEmpty(selectedResearchFund?.pressReleases) && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {t.relatedPressReleases}
                    </h2>
                    <ul>
                      {_.map(
                        selectedResearchFund?.pressReleases,
                        (pressRelease, index) => (
                          <li key={index} className="mb-6">
                            <a
                              href={pressRelease?.[language]?.link}
                              className="text-blue-700 hover:text-blue-800 underline cursor-pointer"
                            >
                              {pressRelease?.[language]?.title}
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                    <hr className="my-12" />
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/research/projects">
                  <Button variant="outline">{t.backToProjects}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
