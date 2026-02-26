"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { NewsItem, NewsTagList, Pagination } from "@/components/features";
import { News, NewsTag } from "@/types";
import { filterArticles } from "@/lib/filter-article";

export default function NewsPage({ newList }: { newList: News[] }) {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);

  const [activeTag, setActiveTag] = useState<NewsTag>(
    (searchParams.get("tag") as NewsTag) || NewsTag.all,
  );

  const handleActiveTagChange = (tag: NewsTag) => {
    if (activeTag === NewsTag.all) {
      params.set("tag", "");
      params.set("page", "1");
    } else {
      params.set("tag", tag);
      params.set("page", "1");
    }

    setActiveTag(tag);
    router.push(`?${params.toString()}`);
  };
  const currentPage = params.get("page")
    ? parseInt(params.get("page") as string, 10)
    : 1;
  const filteredData = filterArticles(newList, {
    page: currentPage,
    size: 8,
    tag: activeTag,
  });

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
              setActiveTag={handleActiveTagChange}
            />

            {/* ニュース一覧 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredData?.rows?.map((newsItem) => (
                <div key={newsItem.id} className={newsItem.link ? "group" : ""}>
                  <NewsItem language={language} newsItem={newsItem as News} />
                </div>
              ))}
            </div>
          </div>
          <div className="my-4">
            <Pagination
              totalPage={filteredData.totalPage}
              currPage={currentPage}
              anotherKey={`tag=${searchParams.get("tag") || ""} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
