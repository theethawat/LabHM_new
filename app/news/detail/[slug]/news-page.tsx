"use client";

import Link from "next/link";
import _ from "lodash";
import dayjs from "dayjs";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { newsTranslation } from "@/translations/news-data";
import { Button } from "@/components/ui/button";
import { News, NewsTagInfo } from "@/types";
import { CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { Gallery } from "@/components/features";
import "dayjs/locale/ja";

dayjs.extend(LocalizedFormat);

export default function NewsPage({ news }: { news: News }) {
  const { language } = useLanguage();
  const t = newsTranslation[language];

  const splitFromEnterAndDivide = (data: string | undefined) => {
    const result = data?.split("\n");
    return _.map(result, (eachResult, index) => (
      <p key={index} className="my-4">
        {eachResult}
      </p>
    ));
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
              {t.news}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* メインコンテンツ */}
            <div className="max-w-4xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-4">
                  {news?.[language]?.title}{" "}
                </h2>
                <hr className="my-4" />
                <div className="flex gap-1 mb-4">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-500 mb-4 text-sm">
                    {dayjs(news.date).locale(language)?.format("LL")}
                  </p>{" "}
                  <TagIcon className="w-5 h-5 text-gray-500 ml-4" />
                  <p className="text-gray-500 mb-4 text-sm">
                    {NewsTagInfo?.[news.tag]?.[language]}
                  </p>
                </div>
                {news.images && news.images.length > 0 && (
                  <div className="my-4">
                    <Gallery images={news.images} />
                  </div>
                )}
                <p className="text-gray-700">
                  {splitFromEnterAndDivide(news?.[language]?.content)}
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/research/projects">
                  <Button variant="outline">{t.backToAllNews}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
