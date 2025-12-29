"use client";
import { useState } from "react";
import _ from "lodash";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { membersTranslations } from "@/translations/members";
import { UnifiedMember } from "@/types";
import {
  getAvailableAcademicYears,
  getCompleteAlumniByYear,
} from "@/translations/complete-unified-members-data";
import { MemberTitle, MemberTypeButton } from "@/components/features";

export default function AlumniPage({ members }: { members: UnifiedMember[] }) {
  const { language } = useLanguage();
  const t = membersTranslations[language];

  // データ取得
  const doctoralStudents = _.filter(members, {
    program: "doctoral",
    isAlumni: false,
  });

  const availableYears = getAvailableAcademicYears(members);

  const [selectedYear, setSelectedYear] = useState<string>(
    availableYears[0] || ""
  );

  const selectedYearAlumni = getCompleteAlumniByYear(selectedYear, members);

  // 卒業生を学位タイプ別にグループ化
  const groupedAlumni = selectedYearAlumni.reduce(
    (groups, member) => {
      const degreeType = member.degreeType || "bachelor";
      if (!groups[degreeType]) {
        groups[degreeType] = [];
      }
      groups[degreeType].push(member);
      return groups;
    },
    {} as Record<string, UnifiedMember[]>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          <MemberTitle language={language} />

          <div className="container">
            <MemberTypeButton activeTab="alumni" />

            {/* 卒業生タブ */}
            <div className="space-y-8">
              <div className="flex justify-end mb-8">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-48">
                      {selectedYear === "令和元年度"
                        ? "2019年度"
                        : selectedYear === "令和2年度"
                          ? "2020年度"
                          : selectedYear === "令和3年度"
                            ? "2021年度"
                            : selectedYear === "令和4年度"
                              ? "2022年度"
                              : selectedYear === "令和5年度"
                                ? "2023年度"
                                : selectedYear === "令和6年度"
                                  ? "2024年度"
                                  : selectedYear}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {availableYears.map((year) => (
                      <DropdownMenuItem
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={selectedYear === year ? "bg-gray-100" : ""}
                      >
                        {year === "令和元年度"
                          ? "2019年度"
                          : year === "令和2年度"
                            ? "2020年度"
                            : year === "令和3年度"
                              ? "2021年度"
                              : year === "令和4年度"
                                ? "2022年度"
                                : year === "令和5年度"
                                  ? "2023年度"
                                  : year === "令和6年度"
                                    ? "2024年度"
                                    : year}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {selectedYearAlumni.length > 0 ? (
                <div className="space-y-12">
                  <h2 className="text-2xl font-bold text-center mb-8">
                    {selectedYear === "令和元年度"
                      ? "2019年度"
                      : selectedYear === "令和2年度"
                        ? "2020年度"
                        : selectedYear === "令和3年度"
                          ? "2021年度"
                          : selectedYear === "令和4年度"
                            ? "2022年度"
                            : selectedYear === "令和5年度"
                              ? "2023年度"
                              : selectedYear === "令和6年度"
                                ? "2024年度"
                                : selectedYear}
                  </h2>

                  {/* 博士課程 */}
                  {groupedAlumni.doctor && groupedAlumni.doctor.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
                        {t.alumni.doctoral}
                      </h3>
                      <div className="grid gap-6">
                        {groupedAlumni.doctor.map((member) => (
                          <div
                            key={member.id}
                            className="bg-gray-50 p-6 rounded-lg"
                          >
                            <h4 className="text-lg font-bold mb-2">
                              {language === "en" && member.nameEn
                                ? member.nameEn
                                : member.name}
                            </h4>
                            {member.researchTopic && (
                              <p className="text-gray-700">
                                {language === "en" && member.researchTopic.en
                                  ? member.researchTopic.en
                                  : member.researchTopic.ja}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 修士課程 */}
                  {groupedAlumni.master && groupedAlumni.master.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
                        {t.alumni.masters}
                      </h3>
                      <div className="grid gap-6">
                        {groupedAlumni.master.map((member) => (
                          <div
                            key={member.id}
                            className="bg-gray-50 p-6 rounded-lg"
                          >
                            <h4 className="text-lg font-bold mb-2">
                              {language === "en" && member.nameEn
                                ? member.nameEn
                                : member.name}
                            </h4>
                            {member.researchTopic && (
                              <p className="text-gray-700">
                                {language === "en" && member.researchTopic.en
                                  ? member.researchTopic.en
                                  : member.researchTopic.ja}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 学士課程 */}
                  {groupedAlumni.bachelor &&
                    groupedAlumni.bachelor.length > 0 && (
                      <div>
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-primary pb-2">
                          {t.alumni.bachelor}
                        </h3>
                        <div className="grid gap-6">
                          {groupedAlumni.bachelor.map((member) => (
                            <div
                              key={member.id}
                              className="bg-gray-50 p-6 rounded-lg"
                            >
                              <h4 className="text-lg font-bold mb-2">
                                {language === "en" && member.nameEn
                                  ? member.nameEn
                                  : member.name}
                              </h4>
                              {member.researchTopic && (
                                <p className="text-gray-700">
                                  {language === "en" && member.researchTopic.en
                                    ? member.researchTopic.en
                                    : member.researchTopic.ja}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    選択された年度に卒業生はいません。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
