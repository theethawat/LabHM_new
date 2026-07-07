"use client";

import Image from "next/image";
import {
  Member,
  Research,
  Publication,
  DegreeTypeInfo,
  DegreeType,
} from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { membersTranslations } from "@/translations/members";
import { achievementTranslation } from "@/translations/achievements";
import { PublicationCard, ResearchItem } from "@/components/features";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import { getStudentYearWithFullData } from "@/lib/get-student-year";
// カスタムXアイコンコンポーネント
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface DetailMemberPageProps {
  selectedMember: Member;
  publications: Publication[];
  researches: Research[];
}

export default function DetailMemberPage({
  selectedMember,
  publications,
  researches,
}: DetailMemberPageProps) {
  const { language } = useLanguage();
  const t = membersTranslations[language];

  return (
    <div>
      {/* ヘッダーセクション */}
      <section
        className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getImagePath("/images/normal_header.png")})`,
        }}
      >
        {" "}
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* コンテンツ */}
        <div className="container relative z-10">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">
              {language === "ja"
                ? selectedMember?.nameKatakana
                  ? selectedMember?.nameEn
                  : selectedMember?.name
                : selectedMember?.nameEn}
            </p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* 会員の詳細情報 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              {/* 画像セクション */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-full max-w-xs aspect-square overflow-hidden border border-gray-200">
                  <Image
                    src={getImagePath(
                      selectedMember.image || "/images/no_image.png",
                    )}
                    alt={selectedMember.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* 情報セクション */}
              <div className="md:col-span-2 flex flex-col justify-center">
                {/* 名前表示 */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="text-3xl font-bold tracking-tight mb-1">
                    {selectedMember?.nameKatakana
                      ? selectedMember.nameEn
                      : selectedMember?.name}
                  </div>
                  <div className="text-2xl text-gray-400 font-bold">
                    {selectedMember?.nameKatakana
                      ? selectedMember.nameKatakana
                      : selectedMember?.nameEn}
                  </div>
                </div>

                {/* 職位・学年情報 */}
                {DegreeTypeInfo[selectedMember.program as DegreeType] ||
                selectedMember.isAlumni ? (
                  <div className="mb-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                      {language === "ja" ? "所属" : "Status"}
                    </p>
                    <p className="text-base text-gray-800">
                      {selectedMember.isAlumni && (
                        <span>{selectedMember.academicYear} </span>
                      )}
                      {DegreeTypeInfo[selectedMember.program as DegreeType] && (
                        <span>
                          {language === "ja" ? (
                            <span>
                              {
                                DegreeTypeInfo[
                                  selectedMember.program as DegreeType
                                ][language]
                              }{" "}
                              {getStudentYearWithFullData(
                                selectedMember.program || "",
                                selectedMember.year,
                                language,
                              )}
                            </span>
                          ) : (
                            <span>
                              {getStudentYearWithFullData(
                                selectedMember.program || "",
                                selectedMember.year,
                                language,
                              )}{" "}
                              {
                                DegreeTypeInfo[
                                  selectedMember.program as DegreeType
                                ][language]
                              }
                            </span>
                          )}
                        </span>
                      )}
                    </p>
                  </div>
                ) : null}

                {/* 研究テーマ */}
                {selectedMember.researchTopic && (
                  <div className="mb-5">
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                      {language === "ja" ? "研究テーマ" : "Research Topic"}
                    </p>
                    <p className="text-base text-gray-800 leading-relaxed">
                      {language === "en" && selectedMember.researchTopic?.en
                        ? selectedMember.researchTopic.en
                        : selectedMember.researchTopic?.ja || "-"}
                    </p>
                  </div>
                )}

                {/* ソーシャルリンク */}
                {selectedMember?.socialLinks && (
                  <div className="flex items-center gap-4 mt-4 pt-5 border-t border-gray-200">
                    {selectedMember?.socialLinks.github && (
                      <a
                        href={selectedMember?.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedMember?.socialLinks.twitter && (
                      <a
                        href={selectedMember?.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        <XIcon className="w-4 h-4" />
                        <span>Twitter / X</span>
                      </a>
                    )}
                    {selectedMember?.socialLinks.linkedin && (
                      <a
                        href={selectedMember?.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember?.socialLinks.website && (
                      <a
                        href={selectedMember?.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* 経歴セクション */}
            {selectedMember?.background &&
              (selectedMember?.background.ja?.length > 0 ||
                selectedMember?.background.en?.length > 0) && (
                <div className="mb-16">
                  <h2 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200 flex items-center gap-3">
                    <span className="inline-block w-1 h-5 bg-black"></span>
                    {t.faculty.background}
                  </h2>
                  <ul className="space-y-3">
                    {(language === "en" && selectedMember?.background?.en
                      ? selectedMember?.background.en
                      : selectedMember?.background?.ja
                    ).map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start py-2 border-b border-gray-100 last:border-0"
                      >
                        <span className="mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* 研究プロジェクトセクション */}
            {researches && researches.length > 0 && (
              <div className="mb-16">
                <h2 className="text-xl font-bold mb-6 pb-3 flex items-center gap-3">
                  <span className="inline-block w-1 h-5 bg-black"></span>
                  {t.researchProject}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {researches?.map((research) => (
                    <ResearchItem
                      key={research.id}
                      research={research}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 発表・論文セクション */}
            <div className="mb-16">
              <h2 className="text-xl font-bold mb-6 pb-3 flex items-center gap-3">
                <span className="inline-block w-1 h-5 bg-black"></span>
                {achievementTranslation[language].publicationAndPresentation}
              </h2>
              {publications && publications.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {publications?.map((publication) => (
                    <PublicationCard
                      key={publication.id}
                      paper={publication}
                      language={language}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 my-12 text-center">
                  {t.noPublications}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
