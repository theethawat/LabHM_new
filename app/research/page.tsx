"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { researchTranslations } from "@/translations/research";
import { researchAreas } from "@/translations/research-area";
import { getImagePath } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

export default function ResearchPage() {
  const { language } = useLanguage();
  const t = researchTranslations[language];

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* Research タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_research.png")}
                alt="Research"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">{t.subtitle}</p>
          </div>

          <div className="container">
            {/* 研究概要 */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className="text-lg leading-relaxed">{t.overview}</p>
            </div>

            {/* 研究分野 */}
            <div className="grid gap-8 mb-16">
              {researchAreas.map((area) => (
                <div
                  key={area.id}
                  className="overflow-hidden bg-white border-b border-gray-200"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.ja.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">
                          {area?.[language]?.title}
                        </h2>
                        <p className="text-gray-700 mb-6">
                          {area?.[language]?.description}
                        </p>
                      </div>
                      <div>
                        <Link
                          href={`/research/projects?category=${encodeURIComponent(area.id)}`}
                        >
                          <Button>{t.viewDetails}</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 研究プロジェクトへのリンク */}
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">{t.researchProjects}</h2>
              <p className="mb-8">{t.projectsDescription}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/research/projects">
                  <Button size="lg">{t.projectsList}</Button>
                </Link>
                <Link href="/research/collaborations">
                  <Button size="lg" variant="outline">
                    {t.collaborations}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
