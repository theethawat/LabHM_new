"use client";

import { Research } from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";

export default function DetailResearchPage({
  selectedResearch,
}: {
  selectedResearch: Research;
}) {
  const { language } = useLanguage();

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
              {selectedResearch?.[language]?.title}
            </h1>
          </div>
        </div>
      </section>
      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* プロジェクト概要 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">
                {selectedResearch?.[language]?.overview}
              </h2>
              <p className="text-gray-700">
                {selectedResearch?.[language]?.overview}
              </p>
            </div>

            {/* 実験背景・目的 */}
            {/* <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.backgroundTitle}</h2>
              <p className="text-gray-700">{t.backgroundText1}</p>
              <p className="text-gray-700 mt-4">{t.backgroundText2}</p>
              <div
                className="relative aspect-auto mt-6 mb-6 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-nishiyama1.png")}
                  alt={
                    language === "ja"
                      ? "1戸当たり飼養頭数の推移"
                      : "Trend in the Number of Cattle per Farm"
                  }
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700">{t.backgroundText3}</p>
            </div> */}

            {/* 実験環境 */}
            {/* <div className="mb-16">
              <div
                className="relative aspect-auto mb-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-nishiyama2.png")}
                  alt={
                    language === "ja" ? "実験環境" : "Experimental Environment"
                  }
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.environmentTitle}</h2>
              <p className="text-gray-700">{t.environmentText1}</p>
              <p className="text-gray-700 mt-4">{t.environmentText2}</p>
            </div> */}

            {/* 実験結果 */}
            {/* <div className="mb-16">
              <div
                className="relative aspect-auto mb-8 rounded-lg overflow-hidden"
                style={{ height: "auto", minHeight: "250px" }}
              >
                <Image
                  src={getImagePath("/images/research-nishiyama3.png")}
                  alt={language === "ja" ? "実験結果" : "Experimental Results"}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t.resultsTitle}</h2>
              <p className="text-gray-700">{t.resultsText1}</p>
              <p className="text-gray-700 mt-4">{t.resultsText2}</p>
            </div> */}

            {/* 社会的意義と今後の展望 */}
            {/* <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">{t.significanceTitle}</h2>
              <p className="text-gray-700">{t.significanceText1}</p>
              <p className="text-gray-700 mt-4">{t.significanceText2}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                {t.significanceList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">{t.significanceText3}</p>
            </div> */}

            {/* <div className="flex justify-center mt-8">
              <Link href="/research/projects">
                <Button variant="outline">{t.backToProjects}</Button>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
