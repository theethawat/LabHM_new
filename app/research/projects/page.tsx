"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { researchProjectsTranslations, researchAreas } from "@/translations";
import { getImagePath } from "@/lib/utils";
import { ResearchArea } from "@/types";

export default function ResearchProjectsPage() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];

  // URLからカテゴリパラメータを取得
  const categoryParam = searchParams.get("category");
  console.log("URL category parameter:", categoryParam); // デバッグ用
  const foundArea: ResearchArea | undefined = researchAreas.find(
    (area) => area.id === categoryParam
  );

  // 選択されたキーワード（URLパラメータから初期値を設定）
  const [selectedKeyword, setSelectedKeyword] = useState<
    ResearchArea | undefined
  >(foundArea);

  // URLパラメータが変更されたときに選択キーワードを更新
  // useEffect(() => {
  //   if (categoryParam) {
  //     setSelectedKeyword(categoryParam)
  //     console.log("Category param detected:", categoryParam) // デバッグ用
  //   }
  // }, [categoryParam])

  // 言語が変更されたときに選択キーワードを更新するための useEffect を追加します
  // また、キーワードの対応関係を定義します

  // 既存の useEffect の後に以下のコードを追加します
  // useEffect(() => {
  //   // 言語が変更されたときに選択キーワードを対応する言語のものに更新
  //   if (selectedKeyword === "すべて" || selectedKeyword === "All") {
  //     // 「すべて」/「All」の場合は現在の言語の「すべて」に変更
  //     setSelectedKeyword(t.keywords.all)
  //   } else if (selectedKeyword === "牛" || selectedKeyword === "Cattle") {
  //     // 「牛」/「Cattle」の場合は現在の言語の対応するものに変更
  //     setSelectedKeyword(language === "ja" ? "牛" : "Cattle")
  //   } else if (selectedKeyword === "人" || selectedKeyword === "Human") {
  //     // 「人」/「Human」の場合は現在の言語の対応するものに変更
  //     setSelectedKeyword(language === "ja" ? "人" : "Human")
  //   } else if (selectedKeyword === "医療" || selectedKeyword === "Medical") {
  //     // 「医療」/「Medical」の場合は現在の言語の対応するものに変更
  //     setSelectedKeyword(language === "ja" ? "医療" : "Medical")
  //   }
  //   // AI はそのままでOK
  // }, [language, t.keywords.all, selectedKeyword])

  // const researchProjectsData: ResearchProject[] = useMemo(
  //   () => [
  //     {
  //       id: "cattle-feeding",
  //       title: t.projects.cattleFeeding.title,
  //       description: t.projects.cattleFeeding.description,
  //       image: getImagePath("/images/research-ishikawa.png"),
  //       link: "/research/projects/cattle-feeding",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //     {
  //       id: "calving-prediction",
  //       title: t.projects.calvingPrediction.title,
  //       description: t.projects.calvingPrediction.description,
  //       image: getImagePath("/images/research-murayama.png"),
  //       link: "/research/projects/calving-prediction",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //     {
  //       id: "elderly-monitoring",
  //       title: t.projects.elderlyMonitoring.title,
  //       description: t.projects.elderlyMonitoring.description,
  //       image: getImagePath("/images/research-remon.png"),
  //       link: "/research/projects/elderly-monitoring",
  //       keywords: ["AI", language === "ja" ? "人" : "Human"],
  //     },
  //     {
  //       id: "fetal-monitoring",
  //       title: t.projects.fetalMonitoring.title,
  //       description: t.projects.fetalMonitoring.description,
  //       image: getImagePath("/images/research-tunn.png"),
  //       link: "/research/projects/fetal-monitoring",
  //       keywords: ["AI", language === "ja" ? "人" : "Human", language === "ja" ? "医療" : "Medical"],
  //     },
  //     {
  //       id: "bcs-evaluation",
  //       title: t.projects.bcsEvaluation.title,
  //       description: t.projects.bcsEvaluation.description,
  //       image: getImagePath("/images/research-tikunami.png"),
  //       link: "/research/projects/bcs-evaluation",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //     {
  //       id: "cattle-identification",
  //       title: t.projects.cattleIdentification.title,
  //       description: t.projects.cattleIdentification.description,
  //       image: getImagePath("/images/research-siihara.png"),
  //       link: "/research/projects/cattle-identification",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //     {
  //       id: "ear-tag-identification",
  //       title: t.projects.earTagIdentification.title,
  //       description: t.projects.earTagIdentification.description,
  //       image: getImagePath("/images/research-simizu.png"),
  //       link: "/research/projects/ear-tag-identification",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //     {
  //       id: "calf-behavior-analysis",
  //       title: t.projects.calfBehaviorAnalysis.title,
  //       description: t.projects.calfBehaviorAnalysis.description,
  //       image: getImagePath("/images/research-nishiyama.png"),
  //       link: "/research/projects/calf-behavior-analysis",
  //       keywords: ["AI", language === "ja" ? "牛" : "Cattle"],
  //     },
  //   ],
  //   [
  //     language,
  //     t.projects.cattleFeeding.title,
  //     t.projects.cattleFeeding.description,
  //     t.projects.calvingPrediction.title,
  //     t.projects.calvingPrediction.description,
  //     t.projects.elderlyMonitoring.title,
  //     t.projects.elderlyMonitoring.description,
  //     t.projects.fetalMonitoring.title,
  //     t.projects.fetalMonitoring.description,
  //     t.projects.bcsEvaluation.title,
  //     t.projects.bcsEvaluation.description,
  //     t.projects.cattleIdentification.title,
  //     t.projects.cattleIdentification.description,
  //     t.projects.earTagIdentification.title,
  //     t.projects.earTagIdentification.description,
  //     t.projects.calfBehaviorAnalysis.title,
  //     t.projects.calfBehaviorAnalysis.description,
  //   ],
  // )

  // // 全てのキーワードを抽出（重複なし）
  // const allKeywords = useMemo(() => {
  //   const keywordsSet = new Set<string>()
  //   researchProjectsData.forEach((project) => {
  //     project.keywords?.forEach((keyword) => keywordsSet.add(keyword))
  //   })
  //   return [t.keywords.all, ...Array.from(keywordsSet)]
  // }, [t.keywords.all, researchProjectsData])

  // // 選択されたキーワードでフィルタリングされたプロジェクト
  // const filteredProjects = useMemo(() => {
  //   if (selectedKeyword === t.keywords.all) {
  //     return researchProjectsData
  //   }
  //   return researchProjectsData.filter((project) => project.keywords?.includes(selectedKeyword))
  // }, [selectedKeyword, t.keywords.all, researchProjectsData])

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
            {/* <div className="grid gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="overflow-hidden bg-white border-b border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative aspect-[4/3] md:col-span-1">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-700 mb-6">{project.description}</p>
                        {project.keywords && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.keywords.map((keyword, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
                                onClick={() => setSelectedKeyword(keyword)}
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div>
                        <Link href={project.link} className="text-primary hover:underline font-medium">
                          {t.viewDetails} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* 検索結果がない場合 */}
            {/* {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  「{selectedKeyword}」{t.noResults.message}
                </p>
                <button 
                  className="mt-4 px-4 py-2 border border-gray-300 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                  onClick={() => setSelectedKeyword(t.keywords.all)}
                >
                  {t.noResults.showAll}
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
