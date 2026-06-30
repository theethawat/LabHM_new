"use client";

import Link from "next/link";

import { Research, ResearchFundSource } from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import { Button } from "@/components/ui/button";
import { ResearchFundBox } from "@/components/features";
import type { ResearchContentByLanguage } from "./page";

export default function DetailResearchPage({
  selectedResearch,
  contentByLanguage,
}: {
  selectedResearch: Research;
  contentByLanguage: ResearchContentByLanguage;
}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];
  const selectedContent = contentByLanguage[language];

  return (
    <div>
      {/* ヘッダーセクション */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getImagePath("/images/normal_header.png")})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
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
            {/* 概要カード Overview card */}
            {selectedContent?.overviewHtml && (
              <div className="mb-12 bg-gray-50 px-6 py-6 rounded-xl border border-gray-200">
                <h3 className="my-1 text-gray-600">
                  {language === "en" ? "Overview" : "概要"}
                </h3>
                <div
                  className="md-content text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: selectedContent.overviewHtml,
                  }}
                />
              </div>
            )}

            {/* マークダウン本文 Markdown body */}
            <div className="mb-16 text-gray-700 md-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedContent?.bodyHtml || "",
                }}
              />
            </div>

            {/* 研究助成 Funding */}
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
  );
}
