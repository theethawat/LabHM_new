"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import { achievements, Achievement } from "@/translations/achievements-data"; // 新しいデータファイルをインポート
import { getImagePath } from "@/lib/utils";

// 業績ページの翻訳
const achievementsTranslations = {
  ja: {
    title: "研究業績",
    subtitle: "研究業績",
    categoryFilter: "カテゴリーを選択",
    categories: {
      all: "すべて",
      international: "国際研究",
      domestic: "国内研究",
      award: "受賞",
      media: "記事・出演",
      journal: "論文誌",
    },
    noResults: {
      message: "選択したカテゴリーの業績は見つかりませんでした。",
      showAll: "すべての業績を表示",
    },
    formatDate: (date: Date) => {
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    pdfLink: "PDFを開く",
    openLink: "リンクを開く",
  },
  en: {
    title: "Achievements",
    subtitle: "Achievements",
    categoryFilter: "Select Category",
    categories: {
      all: "All",
      international: "International Research",
      domestic: "Domestic Research",
      award: "Awards",
      media: "Media Coverage",
      journal: "Journals",
    },
    noResults: {
      message: "No achievements found in the selected category.",
      showAll: "Show all achievements",
    },
    formatDate: (date: Date) => {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    pdfLink: "Open PDF",
    openLink: "Open Link",
  },
};
// カテゴリーのリスト
const categories = [
  { value: "all", label: "すべて" },
  { value: "international", label: "国際研究" },
  { value: "domestic", label: "国内研究" },
  { value: "award", label: "受賞" },
  { value: "media", label: "記事・出演" },
  { value: "journal", label: "論文誌" },
];

// カテゴリに応じた背景色を返す関数
function getCategoryBgColor(category: string): string {
  switch (category) {
    case "international":
      return "bg-blue-600";
    case "domestic":
      return "bg-green-600";
    case "award":
      return "bg-yellow-600";
    case "media":
      return "bg-purple-600";
    case "journal":
      return "bg-red-600";
    default:
      return "bg-gray-600";
  }
}

export default function AchievementsPage() {
  // 選択されたカテゴリー
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { language } = useLanguage();
  const t = achievementsTranslations[language];

  // 業績を日付順にソート（新しい順）
  const sortedAchievements = useMemo(() => {
    return [...achievements].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }, []);

  // 選択されたカテゴリーでフィルタリングされた業績
  const filteredAchievements = useMemo(() => {
    // まず修士論文を除外
    const withoutMasterThesis = sortedAchievements.filter(
      (achievement) =>
        !(
          achievement.category === "journal" &&
          achievement.venue?.[language].includes(
            language === "ja" ? "修士" : "Master",
          )
        ),
    );

    if (selectedCategory === "all") {
      return withoutMasterThesis;
    }
    return withoutMasterThesis.filter(
      (achievement) => achievement.category === selectedCategory,
    );
  }, [selectedCategory, sortedAchievements, language]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="container py-16">
          {/* Research Achievements タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-xl mx-auto h-32 mb-4">
              <Image
                src={getImagePath("/images/logo_research_achievements.png")}
                alt="Research Achievements"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          {/* カテゴリーフィルター */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.categoryFilter} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {
                        t.categories[
                          category.value as keyof typeof t.categories
                        ]
                      }
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 業績リスト */}
          <div className="space-y-6">
            {filteredAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 bg-white border-b border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium ${getCategoryBgColor(achievement.category)} text-white rounded`}
                      >
                        {
                          t.categories[
                            achievement.category as keyof typeof t.categories
                          ]
                        }
                      </span>
                      <span className="text-gray-500 text-sm">
                        {t.formatDate(new Date(achievement.date))}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold mb-2 text-primary flex items-center">
                      {achievement.title[language]}
                      {/* PDFリンクを一時的に無効化 - 将来的に復活予定 */}
                      {/* {achievement.pdfLink && (
                        <Link
                          href={achievement.pdfLink}
                          target="_blank"
                          className="ml-2 text-gray-500 hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">{t.pdfLink}</span>
                        </Link>
                      )} */}
                      {/* 一般リンクを一時的に無効化 - 将来的に復活予定 */}
                      {/* {achievement.link && !achievement.pdfLink && (
                        <Link href={achievement.link} target="_blank" className="ml-2 text-gray-500 hover:text-primary">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">{t.openLink}</span>
                        </Link>
                      )} */}
                    </h2>

                    {achievement.authors && (
                      <p className="text-gray-700 mb-2">
                        {achievement.authors}
                      </p>
                    )}

                    {achievement.venue && (
                      <p className="text-gray-500 italic mb-2">
                        {achievement.venue[language]}
                      </p>
                    )}

                    {achievement.description && (
                      <p className="text-gray-700 mt-1 text-sm">
                        {achievement.description[language]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 検索結果がない場合 */}
          {filteredAchievements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">{t.noResults.message}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedCategory("all")}
              >
                {t.noResults.showAll}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
