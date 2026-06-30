"use client";

import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import { ResearchFundDataTranslations } from "@/translations/research-fund";
import { Button } from "@/components/ui/button";

export default function FundingDetailPage({
  fundingId,
  contentByLanguage,
}: {
  fundingId?: string;
  contentByLanguage: {
    ja: {
      featuredProject: {
        grantNumber: string;
        projectTitle: string;
        detailsHtml: string;
      };
      bodyHtml: string;
    };
    en: {
      featuredProject: {
        grantNumber: string;
        projectTitle: string;
        detailsHtml: string;
      };
      bodyHtml: string;
    };
  };
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
  const selectedContent = contentByLanguage[language];
  const featuredProject = selectedContent?.featuredProject;

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
              {langResearchFund?.title}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {(featuredProject?.grantNumber ||
                featuredProject?.projectTitle) && (
                <div className="mb-12 bg-gray-50 px-6 py-6 rounded-xl border border-gray-200">
                  {featuredProject?.grantNumber && (
                    <p className="text-xl font-semibold text-gray-500 mb-2">
                      {t.grantNumber}: {featuredProject.grantNumber}
                    </p>
                  )}
                  {featuredProject?.projectTitle && (
                    <h2 className="text-xl md:text-2xl font-extrabold leading-tight text-gray-900 mb-4">
                      {featuredProject.projectTitle}
                    </h2>
                  )}
                  {featuredProject?.detailsHtml && (
                    <div
                      className="md-content text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: featuredProject.detailsHtml,
                      }}
                    />
                  )}
                </div>
              )}

              <div className="mb-16 text-gray-700 md-content">
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedContent?.bodyHtml || "",
                  }}
                />
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/research/funding">
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
