"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
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
import { getImagePath } from "@/lib/utils";
import {
  getCompleteFacultyMembers,
  getCompleteStudentsByProgram,
  getCompleteAlumniByYear,
  getAvailableAcademicYears,
  type UnifiedMember,
} from "@/translations/complete-unified-members-data";
import { MemberCard } from "@/components/features";
import { getMembers } from "@/lib/member-utils";

export default async function MembersPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const members = await getMembers();

  const { language } = useLanguage();
  const t = membersTranslations[language];

  // // Fetching the data
  // const data = await sheets.spreadsheets.values.get({
  //   spreadsheetId: spreadsheetId,
  //   range: "members!A:Z",
  // });

  // const rows = data.data.values || [];
  // console.log("Fetched rows:", rows);

  // データ取得
  const facultyMembers = getCompleteFacultyMembers();
  const doctoralStudents = getCompleteStudentsByProgram("doctoral");
  const mastersStudents = getCompleteStudentsByProgram("masters");
  const bachelorStudents = getCompleteStudentsByProgram("bachelor");
  const availableYears = getAvailableAcademicYears();

  const [selectedYear, setSelectedYear] = useState(availableYears[0] || "");
  const selectedYearAlumni = getCompleteAlumniByYear(selectedYear);

  // タブ管理
  const [activeTab, setActiveTab] = useState("faculty");

  // ハッシュの変更を検知して適切なタブを選択
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["faculty", "students", "alumni"].includes(hash)) {
        setActiveTab(hash);
        // ハッシュに対応する要素までスクロール
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // 初回読み込み時の処理
    handleHashChange();

    // ハッシュ変更の監視
    window.addEventListener("hashchange", handleHashChange);

    const observer = new MutationObserver(() => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["faculty", "students", "alumni"].includes(hash)) {
        setActiveTab(hash);
      }
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, []);

  // タブ変更時にURLハッシュも更新
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // basePath対応のURL生成
    const basePath =
      typeof window !== "undefined"
        ? document
            .querySelector('script[src*="/_next/"]')
            ?.getAttribute("src")
            ?.match(/^(\/[^\/]+)?\//)?.[1] || ""
        : "";
    window.history.replaceState(null, "", `${basePath}/members#${value}`);
  };

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
          {/* Member タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              <Image
                src={getImagePath("/images/logo_member.png")}
                alt="Member"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-lg">
              {language === "ja" ? "メンバー" : "Members"}
            </p>
          </div>

          <div className="container">
            <div className="mb-8">
              <div className="flex justify-center">
                <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
                  <button
                    onClick={() => handleTabChange("faculty")}
                    className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                      activeTab === "faculty"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {t.tabs.faculty}
                  </button>
                  <button
                    onClick={() => handleTabChange("students")}
                    className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                      activeTab === "students"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {t.tabs.students}
                  </button>
                  <button
                    onClick={() => handleTabChange("alumni")}
                    className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                      activeTab === "alumni"
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {t.tabs.alumni}
                  </button>
                </div>
              </div>
            </div>

            <Tabs
              value={activeTab}
              onValueChange={handleTabChange}
              className="w-full"
            >
              {/* 教員・研究員タブ */}
              <TabsContent value="faculty" className="mt-0" id="faculty">
                <div className="space-y-12">
                  {facultyMembers.map((member) => (
                    <div
                      key={member.id}
                      className="overflow-hidden bg-white border-b border-gray-200"
                    >
                      <div className="grid md:grid-cols-3 gap-6 p-6">
                        <div className="md:col-span-1">
                          <div className="relative aspect-square max-w-xs mx-auto">
                            <Image
                              src={getImagePath(
                                member.image || "/placeholder.svg"
                              )}
                              alt={member.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        <div className="p-0 md:col-span-2">
                          <h2 className="text-2xl font-bold mb-2">
                            {language === "en" && member.nameEn
                              ? member.nameEn
                              : member.name}
                          </h2>
                          <h3 className="text-lg text-gray-600 mb-4">
                            {language === "en" && member.positionEn
                              ? member.positionEn
                              : member.position}
                          </h3>

                          {member.background &&
                            member.background[language].length > 0 && (
                              <div className="mb-4">
                                <h4 className="font-bold mb-2">
                                  {t.faculty.background}
                                </h4>
                                <ul className="space-y-1 text-gray-700">
                                  {member.background[language].map(
                                    (item, index) => (
                                      <li key={index}>{item}</li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}

                          {member.researchFields &&
                            member.researchFields[language] && (
                              <div>
                                <h4 className="font-bold mb-2">
                                  {t.faculty.researchFields}
                                </h4>
                                <p className="text-gray-700">
                                  {member.researchFields[language]}
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* 学生タブ */}
              <TabsContent value="students" className="mt-0" id="students">
                <div className="space-y-16">
                  {/* 博士課程 */}
                  {doctoralStudents.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                        {t.students.doctoral}
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                        {doctoralStudents.map((member) => (
                          <MemberCard
                            key={member.id}
                            member={member}
                            language={language}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 修士課程 */}
                  {mastersStudents.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                        {t.students.masters}
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                        {mastersStudents.map((member) => (
                          <MemberCard
                            key={member.id}
                            member={member}
                            language={language}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 学部生 */}
                  {bachelorStudents.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                        {t.students.bachelor}
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                        {bachelorStudents.map((member) => (
                          <MemberCard
                            key={member.id}
                            member={member}
                            language={language}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* 卒業生タブ */}
              <TabsContent value="alumni" className="mt-0" id="alumni">
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
                            className={
                              selectedYear === year ? "bg-gray-100" : ""
                            }
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
                      {groupedAlumni.doctor &&
                        groupedAlumni.doctor.length > 0 && (
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
                                      {language === "en" &&
                                      member.researchTopic.en
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
                      {groupedAlumni.master &&
                        groupedAlumni.master.length > 0 && (
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
                                      {language === "en" &&
                                      member.researchTopic.en
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
                                      {language === "en" &&
                                      member.researchTopic.en
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
