"use client";

import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

import { Button } from "@/components/ui/button";
import { NewsItem, ResearchItem } from "@/components/features";
import { useLanguage } from "@/contexts/language-context";
import { homeTranslations } from "@/translations/home";
import { getImagePath } from "@/lib/utils";
import { News, Research } from "@/types";

export default function Home({
  latestNews,
  latestResearches,
}: {
  latestNews: News[];
  latestResearches: Research[];
}) {
  const { language } = useLanguage();
  const t = homeTranslations[language];

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/hero-owl.jpeg")}
            alt="フクロウ"
            fill
            priority
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 container h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 whitespace-pre-line">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl whitespace-pre-line">
            {t.heroDescription}
          </p>
        </div>
      </section>

      {/* ニュースセクション */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            News <span className="ml-4 text-lg font-normal">{t.news}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((newsItem) => (
              <div key={newsItem.id} className={newsItem.link ? "group" : ""}>
                <NewsItem language={language} newsItem={newsItem} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/news">
              <Button
                variant="outline"
                className="bg-gray-700 text-white hover:bg-gray-800"
              >
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 研究セクション */}
      <section className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            Research{" "}
            <span className="ml-4 text-lg font-normal">{t.research}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {_.map(latestResearches, (eachResearch, index) => (
              <ResearchItem
                language={language}
                research={eachResearch}
                key={index}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/research/projects">
              <Button
                variant="outline"
                className="bg-gray-700 text-white hover:bg-gray-800"
              >
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* メッセージセクション */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200 flex items-center">
            Message{" "}
            <span className="ml-4 text-lg font-normal">{t.message}</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="relative aspect-square">
                <Image
                  src={getImagePath("/images/thithizin.jpg")}
                  alt="教授"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">{t.messageTitle}</h3>
              <div className="space-y-4">
                <p>{t.messageContent1}</p>
                <p>{t.messageContent2}</p>
                <p>{t.messageContent3}</p>
              </div>
              <div className="mt-6 text-right">
                <p>{t.professorTitle}</p>
                <p className="text-3xl font-caveat mt-2 text-gray-800 transform -rotate-1">
                  {t.professorName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
