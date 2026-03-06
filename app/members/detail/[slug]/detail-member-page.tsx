"use client";

import Image from "next/image";
import { Member, Research, Publication } from "@/types";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";
import { membersTranslations } from "@/translations/members";
import { PublicationCard, ResearchItem } from "@/components/features";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";

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
            <h1 className="text-2xl md:text-3xl text-white font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300">
              {language === "ja"
                ? selectedMember?.name
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* 画像セクション */}
              <div className="md:col-span-1 flex justify-center md:justify-start">
                <div className="relative w-full max-w-xs aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath(
                      selectedMember.image || "/images/no_image.png",
                    )}
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 情報セクション */}
              <div className="md:col-span-2">
                {/* 名前表示 */}
                <div className="mb-6">
                  <div className="text-2xl font-bold mb-1">
                    {selectedMember?.nameKatakana
                      ? selectedMember.nameEn
                      : selectedMember?.name}
                  </div>
                  <div className="text-xl font-semibold text-gray-400">
                    {selectedMember?.nameKatakana
                      ? selectedMember.nameKatakana
                      : selectedMember?.nameEn}
                  </div>
                </div>

                {/* 職位・学年情報 */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  {selectedMember.isAlumni && (
                    <div>
                      <p className="text-sm text-gray-600 mb-2">
                        {selectedMember.academicYear}{" "}
                        {selectedMember.degreeType === "doctoral"
                          ? t.alumni.doctoral
                          : selectedMember.degreeType === "masters"
                            ? t.alumni.masters
                            : t.alumni.bachelor}
                      </p>
                    </div>
                  )}
                </div>

                {/* 研究テーマ */}
                {selectedMember.researchTopic && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      {language === "ja" ? "研究テーマ" : "Research Topic"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {language === "en" && selectedMember.researchTopic?.en
                        ? selectedMember.researchTopic.en
                        : selectedMember.researchTopic?.ja || "-"}
                    </p>
                  </div>
                )}

                {/* ソーシャルリンク */}
                {selectedMember?.socialLinks && (
                  <div className="flex space-x-4 mt-6">
                    {selectedMember?.socialLinks.github && (
                      <a
                        href={selectedMember?.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember?.socialLinks.twitter && (
                      <a
                        href={selectedMember?.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <XIcon className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember?.socialLinks.linkedin && (
                      <a
                        href={selectedMember?.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {selectedMember?.socialLinks.website && (
                      <a
                        href={selectedMember?.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <Globe className="w-5 h-5" />
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
                  <h2 className="text-2xl font-bold mb-6">
                    {t.faculty.background}
                  </h2>
                  <ul className="space-y-3">
                    {(language === "en" && selectedMember?.background?.en
                      ? selectedMember?.background.en
                      : selectedMember?.background?.ja
                    ).map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start"
                      >
                        <span className="mr-3 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* 研究プロジェクトセクション */}
            {researches && researches.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  {language === "ja" ? "研究プロジェクト" : "Research Projects"}
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
            {publications && publications.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6">
                  {language === "ja"
                    ? "論文・発表"
                    : "Publications & Presentations"}
                </h2>
                <div className="bg-gray-50 rounded-lg overflow-hidden">
                  {publications?.map((publication) => (
                    <PublicationCard
                      key={publication.id}
                      paper={publication}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
