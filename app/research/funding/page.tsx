"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { researchProjectsTranslations } from "@/translations/research-projects";

import _ from "lodash";

export default function ResearchFunding({}) {
  const { language } = useLanguage();
  const t = researchProjectsTranslations[language];

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
              {t.researchFund}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="overflow-hidden bg-white shadow-sm border rounded-lg">
                <div className="flex items-center">
                  <div className="relative h-32 w-32 flex-shrink-0 bg-gray-50 flex items-center justify-center">
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={"/images/jka.png"}
                        alt="JKA（2023-2024年度）"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-3 py-2 flex-1">
                    <h2 className="text-xl font-bold mb-1">
                      JKA（2023-2024年度）
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      公益財団法人JKAからの研究助成により、革新的な技術開発と社会貢献を目指した研究を実施しました。
                    </p>
                    <div className="text-right mt-2">
                      <a
                        className="text-blue-600 hover:text-blue-800 underline text-xs"
                        href="/imagelab/research/funding/jka/"
                      >
                        詳細を見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow-sm border rounded-lg">
                <div className="flex items-center">
                  <div className="relative h-32 w-32 flex-shrink-0 bg-gray-50 flex items-center justify-center">
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={"/images/jka.png"}
                        alt="JKA（2025年度）"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-3 py-2 flex-1">
                    <h2 className="text-xl font-bold mb-1">JKA（2025年度）</h2>
                    <p className="text-gray-700 text-sm mb-1">
                      2025年度も引き続きJKAからの助成を受け、研究プロジェクトを推進しています。
                    </p>
                    <div className="text-right mt-2">
                      <a
                        className="text-blue-600 hover:text-blue-800 underline text-xs"
                        href="/imagelab/research/funding/jka-2025/"
                      >
                        詳細を見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white shadow-sm border rounded-lg">
                <div className="flex items-center">
                  <div className="relative h-32 w-32 flex-shrink-0 bg-gray-50 flex items-center justify-center">
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={"/images/logo_soumu.png"}
                        alt="総務省 FORWARD事業"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="px-3 py-2 flex-1">
                    <h2 className="text-xl font-bold mb-1">
                      総務省 FORWARD事業
                    </h2>
                    <p className="text-gray-700 text-sm mb-1">
                      総務省の「持続可能な電波有効利用のための基盤技術研究開発事業（FORWARD）」により、電波センシング技術を活用した畜産業の課題解決に取り組んでいます。
                    </p>
                    <div className="text-right mt-2">
                      <a
                        className="text-blue-600 hover:text-blue-800 underline text-xs"
                        href="/imagelab/research/funding/forward/"
                      >
                        詳細を見る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
