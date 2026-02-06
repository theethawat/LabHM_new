"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";
import { ResearchFundDataTranslations } from "@/translations/research-fund";

import _ from "lodash";

export default function ResearchFunding({}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];

  const renderFundEntry = (
    fundEntry: (typeof ResearchFundDataTranslations)[keyof typeof ResearchFundDataTranslations],
    index: string | number,
  ) => {
    const langFields = fundEntry[language];
    return (
      <div
        className="overflow-hidden bg-white shadow-sm border rounded-lg"
        key={index}
      >
        <div className="flex items-center">
          <div className="relative h-32 w-32 flex-shrink-0 bg-gray-50 flex items-center justify-center">
            <div className="relative w-full h-full p-2">
              <Image
                src={getImagePath(fundEntry.logo)}
                alt="JKA（2023-2024年度）"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="px-3 py-2 flex-1">
            <h2 className="text-xl font-bold mb-1">{langFields.title}</h2>
            <p className="text-gray-700 text-sm mb-1">
              {langFields.briefDescription}
            </p>
            <div className="text-right mt-2">
              <Link
                className="text-blue-600 hover:text-blue-800 underline text-xs"
                href={`/research/funding/detail/${fundEntry.id}`}
              >
                {t.viewDetails}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
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
              {t.researchFund}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {_.map(ResearchFundDataTranslations, (fundEntry, key) =>
                renderFundEntry(fundEntry, key),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
