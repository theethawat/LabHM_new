"use client";

import _ from "lodash";

import { useLanguage } from "@/contexts/language-context";
import { membersTranslations } from "@/translations/members";
import { Member, DegreeType } from "@/types";
import {
  MemberCard,
  MemberTitle,
  MemberTypeButton,
} from "@/components/features";

export default function StudentPage({ members }: { members: Member[] }) {
  const { language } = useLanguage();
  const t = membersTranslations[language];

  // データ取得
  const doctoralStudents = _.filter(members, {
    program: DegreeType.Doctor,
    isAlumni: false,
  });
  const mastersStudents = _.filter(members, {
    program: DegreeType.Master,
    isAlumni: false,
  });
  const bachelorStudents = _.filter(members, {
    program: DegreeType.Bachelor,
    isAlumni: false,
  });
  const researchStudents = _.filter(members, {
    program: DegreeType.ResearchStudent,
    isAlumni: false,
  });

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
