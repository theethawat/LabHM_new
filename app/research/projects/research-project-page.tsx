"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

import { useLanguage } from "@/contexts/language-context";
import { researchProjectsTranslations, researchAreas } from "@/translations";
import { getImagePath } from "@/lib/utils";
import { Research, ResearchArea } from "@/types";
import { Pagination } from "@/components/features";

export default function ResearchProjectsPage({
  researches,
  totalPage,
  currPage,
}: {
  researches: Research[];
  totalPage: number;
  currPage: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];

  // URLからカテゴリパラメータを取得
  const categoryParam = searchParams.get("category");
  console.log("URL category parameter:", categoryParam); // デバッグ用
  const foundArea: ResearchArea | undefined = researchAreas.find(
    (area) => area.id === categoryParam,
  );

  // 選択されたキーワード（URLパラメータから初期値を設定）
  const [selectedKeyword, setSelectedKeyword] = useState<
    ResearchArea | undefined
  >(foundArea);

  const findResearchAreaById = (id: string): ResearchArea | undefined => {
    return researchAreas.find((area) => area.id === id);
  };

  const handleActiveTagChange = (tag: ResearchArea | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (tag === undefined) {
      params.set("tag", "");
      params.set("page", "1");
    } else {
      params.set("tag", _.lowerCase(tag.en.shortTitle));
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    handleActiveTagChange(selectedKeyword);
    return () => {};
  }, [selectedKeyword]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* Research タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_research.png")}
                alt="Research"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          <div className="container">
            {/* キーワードフィルター */}
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
                  <button
                    onClick={() => setSelectedKeyword(undefined)}
                    className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                      selectedKeyword
                        ? "bg-white text-black border-gray-300 hover:bg-gray-100"
                        : "bg-black text-white border-black"
                    }`}
                  >
                    {language === "ja" ? "すべて" : "All"}
                  </button>
                  {researchAreas.map((eachArea: ResearchArea) => (
                    <button
                      key={eachArea.id}
                      onClick={() => setSelectedKeyword(eachArea)}
                      className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                        selectedKeyword?.id === eachArea.id
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:bg-gray-100"
                      }`}
                    >
                      {eachArea?.[language]?.shortTitle || eachArea.id}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* プロジェクト一覧 */}
            <div className="grid gap-8">
              {researches?.map((project: Research) => (
                <div
                  key={project.id}
                  className="overflow-hidden bg-white border-b border-gray-200"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative aspect-[4/3] md:col-span-1">
                      <Image
                        src={
                          project?.images?.overview_image || "/placeholder.svg"
                        }
                        alt={project.ja.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">
                          {project?.[language]?.title}
                        </h2>
                        <p className="text-gray-700 mb-6">
                          {project?.[language]?.overview}
                        </p>
                        {project?.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project?.tags?.map((keyword, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                                onClick={() =>
                                  setSelectedKeyword(
                                    findResearchAreaById(keyword),
                                  )
                                }
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div>
                        <Link
                          href={`/research/projects/detail/${project?.id}`}
                          className="text-primary hover:underline font-medium"
                        >
                          {t.viewDetails} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 検索結果がない場合 */}
            {researches?.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  「{selectedKeyword?.[language]?.title}」{t.noResults.message}
                </p>
                <button
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedKeyword(undefined)}
                >
                  {t.noResults.showAll}
                </button>
              </div>
            )}
          </div>
          <div className="my-4">
            <Pagination
              totalPage={totalPage}
              currPage={currPage}
              anotherKey={`tag=${searchParams.get("tag") || ""} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
