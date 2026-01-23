"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";
import { newsData, newsTags } from "@/translations/news-data";
import { getTagBgColor } from "@/lib/news-utils";
import { getImagePath } from "@/lib/utils";
import { NewsItem, NewsTagList } from "@/components/features";
import { NewsTag } from "@/types";

export default function NewsPage() {
  const { language } = useLanguage();
  const tags = newsTags[language];
  const news = newsData[language];

  const [activeTag, setActiveTag] = useState<NewsTag>(NewsTag.all);

  // フィルターされたニュース
  let filteredNews = news;

  // タグフィルタリング（"すべて"/"All"以外の場合）
  const allTagText = language === "ja" ? "すべて" : "All";
  if (activeTag !== allTagText) {
    filteredNews = filteredNews.filter((item) => item.tag === activeTag);
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* News タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_news.png")}
                alt="News"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">{language === "ja" ? "ニュース" : "News"}</p>
          </div>

          <div className="container">
            {/* タグナビゲーション */}
            <NewsTagList
              activeTag={activeTag}
              language={language}
              setActiveTag={setActiveTag}
            />

            {/* ニュース一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredNews.map((newsItem) => (
                <div key={newsItem.id} className={newsItem.link ? "group" : ""}>
                  <NewsItem language={language} newsItem={newsItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
