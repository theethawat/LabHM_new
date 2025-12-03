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
import { MemberCard, MemberTypeButton } from "@/components/features";
import { getMembers } from "@/lib/get-members";

export default async function StudentPage() {
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

  //   // タブ変更時にURLハッシュも更新
  //   const handleTabChange = (value: string) => {
  //     setActiveTab(value);
  //     // basePath対応のURL生成
  //     const basePath =
  //       typeof window !== "undefined"
  //         ? document
  //             .querySelector('script[src*="/_next/"]')
  //             ?.getAttribute("src")
  //             ?.match(/^(\/[^\/]+)?\//)?.[1] || ""
  //         : "";
  //     window.history.replaceState(null, "", `${basePath}/members#${value}`);
  //   };

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
            <MemberTypeButton activeTab="students" />

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
          </div>
        </div>
      </div>
    </div>
  );
}
