"use client";

import Image from "next/image";
import { aboutTranslations } from "@/translations/about";
import { getImagePath } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = aboutTranslations[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="container py-16">
          {/* About タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_bout.png")}
                alt="About"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          {/* 研究室紹介文 */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-base leading-relaxed">{t.introduction}</p>
          </div>

          {/* 研究分野セクション - 画像とテキストが横並び */}
          <div className="max-w-4xl mx-auto mb-16 flex flex-col md:flex-row gap-8">
            {/* 左側の画像 - 1つだけ */}
            <div className="md:w-1/3">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={getImagePath("/images/thithizin.jpg")}
                  alt="ThiThiZin教授"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 右側のテキストセクション - 3つの研究分野 */}
            <div className="md:w-2/3 space-y-8">
              {/* 研究分野1 */}
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {t.researchAreas.title}
                </h2>
                <p className="text-base leading-relaxed">
                  {t.researchAreas.description}
                </p>
              </div>

              {/* 研究分野2 */}
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {t.collaboration.title}
                </h2>
                <p className="text-base leading-relaxed">
                  {t.collaboration.description}
                </p>
              </div>

              {/* 研究分野3 */}
              <div>
                <h2 className="text-xl font-bold mb-2">{t.facilities.title}</h2>
                <p className="text-base leading-relaxed">
                  {t.facilities.description}
                </p>
              </div>
            </div>
          </div>

          {/* 追加の説明文 */}
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <p className="text-base leading-relaxed">{t.additionalInfo1}</p>
            <p className="text-base leading-relaxed">{t.additionalInfo2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
