"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";

// さくらサイエンス年度データの型定義
type SakuraYear = {
  year: {
    ja: string;
    en: string;
  };
  image: string;
  description?: {
    ja: string;
    en: string;
  };
  link?: string;
};

// さくらサイエンス年度データ
const sakuraYears: SakuraYear[] = [
  {
    year: {
      ja: "2026年度",
      en: "2026",
    },
    image: getImagePath("/images/sakura_2026.jpg"),
    description: {
      ja: "満開の桜の下での文化訪問",
      en: "Cultural Visit Under the Blooming of Cherry Blossoms",
    },
    link: "/news/detail/sakura-science-2026",
  },
  {
    year: {
      ja: "2025年度",
      en: "2025",
    },
    image: getImagePath("/images/sakura2025s1.jpg"),
    description: {
      ja: "着物体験を通じた日本文化交流プログラム",
      en: "Japanese Cultural Exchange Program through Kimono Experience",
    },
  },
  {
    year: {
      ja: "2024年度",
      en: "2024",
    },
    image: getImagePath("/images/sakura_2024.jpg"),
    description: {
      ja: "日本の歴史的名所を訪問する文化体験プログラム",
      en: "Cultural Experience Program Visiting Historical Sites in Japan",
    },
  },
  {
    year: {
      ja: "2018年度",
      en: "2018",
    },
    image: getImagePath("/images/sakura_2018.JPG"),
    description: {
      ja: "科学館見学と最新技術体験プログラム",
      en: "Science Museum Visit and Latest Technology Experience Program",
    },
  },
  {
    year: {
      ja: "2017年度",
      en: "2017",
    },
    image: getImagePath("/images/sakura_2017.jpg"),
    description: {
      ja: "ミャンマーの大学と宮崎大学の連携プログラム",
      en: "Collaboration Program between Myanmar Universities and Miyazaki University",
    },
  },
  {
    year: {
      ja: "2015年度",
      en: "2015",
    },
    image: getImagePath("/images/sakura_2015.JPG"),
    description: {
      ja: "地方訪問と日本の農業技術体験プログラム",
      en: "Rural Visit and Japanese Agricultural Technology Experience Program",
    },
  },
];

// 翻訳データを定義
const translations = {
  pageTitle: {
    ja: "さくらサイエンスプログラム",
    en: "Sakura Science Exchange Program",
  },
  pageSubtitle: {
    ja: "日本と世界の科学技術交流プログラム",
    en: "Japan-World Science and Technology Exchange Program",
  },
  aboutTitle: {
    ja: "さくらサイエンスプログラムとは",
    en: "About the Sakura Science Program",
  },
  aboutDescription: {
    ja: "さくらサイエンスプログラムは、新たな時代の社会を担う、世界の優れた人材を日本に短期間招き、日本の最先端な科学技術や文化に触れていただくプログラムです。日本の受入れ機関と、海外の送出し機関が作成した交流計画を幅広く公募し、採択しています。",
    en: "The Sakura Science Program invites talented individuals from around the world who will lead society in the new era to Japan for a short period to experience Japan's cutting-edge science, technology, and culture. The program widely solicits and adopts exchange plans created by Japanese host institutions and overseas sending institutions.",
  },
  purposeTitle: {
    ja: "さくらサイエンスプログラムの目的",
    en: "Purpose of the Sakura Science Program",
  },
  purposeDescription1: {
    ja: "さくらサイエンスプログラムは、産学官の緊密な連携により、諸外国・地域の青少年の我が国への招へい等を通じて、我が国の青少年との科学技術分野の交流を行う事業です。これを通して、",
    en: "The Sakura Science Program is a project that conducts exchanges in the field of science and technology with Japanese youth through the invitation of young people from various countries and regions to Japan, based on close cooperation between industry, academia, and government. Through this,",
  },
  purposeList: {
    ja: [
      "科学技術イノベーションに貢献しうる優秀な人材の養成・確保",
      "国際的頭脳循環の促進",
      "日本と諸外国・地域の教育研究機関間の継続的連携・協力・交流",
      "科学技術外交にも資する日本と諸外国・地域との友好関係の強化",
    ],
    en: [
      "Development and securing of excellent human resources who can contribute to science and technology innovation",
      "Promotion of international brain circulation",
      "Continuous cooperation and exchange between educational and research institutions in Japan and various countries/regions",
      "Strengthening friendly relations between Japan and various countries/regions, which also contributes to science and technology diplomacy",
    ],
  },
  purposeDescription2: {
    ja: "に貢献し、ひいては、日本及び世界の科学技術・イノベーションの発展に寄与することを目的とします。",
    en: "it aims to contribute to the development of science, technology, and innovation in Japan and the world.",
  },
  detailsButton: {
    ja: "詳細はこちら",
    en: "More Details",
  },
  yearsTitle: {
    ja: "参加年度",
    en: "Participation Years",
  },
  programSuffix: {
    ja: "さくらサイエンスプログラム",
    en: "Sakura Science Program",
  },
  viewDetails: {
    ja: "詳細を見る",
    en: "View Details",
  },
};

export default function SakuraSciencePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
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
              {translations.pageTitle[language]}
            </h1>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {translations.aboutTitle[language]}
                </h2>
                <p className="text-gray-700">
                  {translations.aboutDescription[language]}
                </p>
              </div>

              <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={getImagePath("/images/sakura_map.png")}
                  alt={translations.pageTitle[language]}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {translations.purposeTitle[language]}
                </h2>
                <p className="text-gray-700">
                  {translations.purposeDescription1[language]}
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 text-gray-700">
                  {translations.purposeList[language].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-4">
                  {translations.purposeDescription2[language]}
                </p>
              </div>

              <div className="flex justify-center">
                <Link href="https://ssp.jst.go.jp/" target="_blank">
                  <Button>{translations.detailsButton[language]}</Button>
                </Link>
              </div>

              <hr className="border-t border-gray-200 my-8" />

              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {translations.yearsTitle[language]}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sakuraYears.map((year, index) => (
                    <div
                      key={index}
                      className="overflow-hidden bg-white shadow-sm border rounded-lg"
                    >
                      <div className="relative h-48">
                        <Image
                          src={year.image}
                          alt={year.year[language]}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-center">
                          {year.year[language]}{" "}
                          {translations.programSuffix[language]}
                        </h3>
                        {year.description && (
                          <p className="mt-2 text-sm text-gray-600 text-center">
                            {year.description[language]}
                          </p>
                        )}
                        {year.link && (
                          <div className="mt-4 text-center">
                            <Link href={year.link}>
                              <Button variant="outline" size="sm">
                                {translations.viewDetails[language]}
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
