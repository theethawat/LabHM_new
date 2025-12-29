"use client";
import Image from "next/image";
import { useState } from "react";
import _ from "lodash";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { membersTranslations } from "@/translations/members";
import { getImagePath } from "@/lib/utils";
import { UnifiedMember } from "@/types";
import { getAvailableAcademicYears } from "@/translations/complete-unified-members-data";
import {
  MemberCard,
  MemberTitle,
  MemberTypeButton,
} from "@/components/features";

export default function StudentPage({ members }: { members: UnifiedMember[] }) {
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
  const doctoralStudents = _.filter(members, {
    program: "doctoral",
    isAlumni: false,
  });
  const mastersStudents = _.filter(members, {
    program: "masters",
    isAlumni: false,
  });
  const bachelorStudents = _.filter(members, {
    program: "bachelor",
    isAlumni: false,
  });
  const researchStudents = _.filter(members, {
    program: "research_student",
    isAlumni: false,
  });
  const availableYears = getAvailableAcademicYears();

  console.log("Doctoral Students:", doctoralStudents);

  const [selectedYear, setSelectedYear] = useState(availableYears[0] || "");

  // // タブ管理
  // const [activeTab, setActiveTab] = useState("faculty");

  // // ハッシュの変更を検知して適切なタブを選択
  // useEffect(() => {
  //   const handleHashChange = () => {
  //     const hash = window.location.hash.replace("#", "");
  //     if (hash && ["faculty", "students", "alumni"].includes(hash)) {
  //       setActiveTab(hash);
  //       // ハッシュに対応する要素までスクロール
  //       setTimeout(() => {
  //         const element = document.getElementById(hash);
  //         if (element) {
  //           element.scrollIntoView({ behavior: "smooth", block: "start" });
  //         }
  //       }, 100);
  //     }
  //   };

  //   // 初回読み込み時の処理
  //   handleHashChange();

  //   // ハッシュ変更の監視
  //   window.addEventListener("hashchange", handleHashChange);

  //   const observer = new MutationObserver(() => {
  //     const hash = window.location.hash.replace("#", "");
  //     if (hash && ["faculty", "students", "alumni"].includes(hash)) {
  //       setActiveTab(hash);
  //     }
  //   });

  //   observer.observe(document, { subtree: true, childList: true });

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashChange);
  //     observer.disconnect();
  //   };
  // }, []);

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
          <MemberTitle language={language} />

          <div className="container">
            <MemberTypeButton activeTab="students" />

            <div className="mt-0" id="students">
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
                {/*　研究生 */}
                {researchStudents.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6 border-b pb-2">
                      {t.students.researchStudents}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                      {researchStudents.map((member) => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
