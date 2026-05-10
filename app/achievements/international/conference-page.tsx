"use client";

import { useState } from "react";
import _ from "lodash";
import { useSearchParams } from "next/navigation";

import { ConferencePaper, PublicationType } from "@/types";
import { achievementTranslation } from "@/translations/achievements";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import {
  YearFilter,
  PublicationCard,
  Pagination,
  AchievementTagList,
} from "@/components/features";

// 年度ごとにグループ化する関数
function groupByYear(papers: ConferencePaper[]): {
  [key: string]: ConferencePaper[];
} {
  return papers.reduce(
    (groups, paper) => {
      const year = paper.year;
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(paper);
      return groups;
    },
    {} as { [key: string]: ConferencePaper[] },
  );
}

export default function ConferencePage({
  papers,
  isInternational = true,
}: {
  papers: ConferencePaper[];
  isInternational?: boolean;
}) {
  const { language } = useLanguage();
  const t = achievementTranslation[language];

  // 年度ごとにグループ化
  const papersByYear = groupByYear(papers);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  // 年度のリストを取得（降順）
  const years = Object.keys(papersByYear).sort(
    (a, b) => Number.parseInt(b) - Number.parseInt(a),
  );

  // Pagination setup
  const pageSize = 10;
  const filteredPaper =
    selectedYear !== "all" && selectedYear !== ""
      ? papersByYear[selectedYear]
      : papers;

  // Get current page from search params, default to 1
  const currentPage = Number(params.get("page")) || 1;
  const totalPaperCount = filteredPaper ? filteredPaper.length : 0;
  const totalPage = Math.ceil(totalPaperCount / pageSize);
  // Slice papers for current page
  const paginatedPapers = filteredPaper
    ? filteredPaper.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : [];

  return (
    <div>
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
            <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">
              {isInternational
                ? t.title.internationalConferences
                : t.title.domesticConferences}
            </h1>
            <p className="text-xl text-gray-300">
              {isInternational
                ? t.subtitle.internationalConferences
                : t.subtitle.domesticConferences}
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <AchievementTagList
            activeTag={
              isInternational
                ? PublicationType.intConference
                : PublicationType.domConference
            }
            language={language}
          />
          <YearFilter
            allYears={years}
            language={language}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />

          <div className="space-y-2">
            {paginatedPapers.map((paper, index) => (
              <PublicationCard key={index} paper={paper} language={language} />
            ))}
          </div>
          <div className="my-4">
            <Pagination
              totalPage={totalPage}
              currPage={currentPage}
              anotherKey={`year=${selectedYear}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
