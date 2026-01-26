"use client";

import { useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { NewsItem, NewsTagList, CustomPagination } from "@/components/features";
import { News, NewsTag } from "@/types";

export default function NewsPage({
  newList,
  totalPage,
  currPage,
}: {
  newList: News[];
  totalPage: number;
  currPage: number;
}) {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeTag, setActiveTag] = useState<NewsTag>(NewsTag.all);

  const handleActiveTagChange = (tag: NewsTag) => {
    const params = new URLSearchParams(searchParams);

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
              {newList?.map((newsItem) => (
                <div key={newsItem.id} className={newsItem.link ? "group" : ""}>
                  <NewsItem language={language} newsItem={newsItem} />
                </div>
              ))}
            </div>
          </div>
          <div className="my-4">
            <CustomPagination totalPage={totalPage} currPage={currPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
