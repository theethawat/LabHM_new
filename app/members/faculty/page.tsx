"use client";

import Image from "next/image";

import { useLanguage } from "@/contexts/language-context";
import { membersTranslations } from "@/translations/members";
import { getImagePath } from "@/lib/utils";
import { getFacultyMembers } from "@/translations";
import { MemberTitle, MemberTypeButton } from "@/components/features";

export default function FacultyMembers() {
  const { language } = useLanguage();
  const t = membersTranslations[language];
  const facultyMembers = getFacultyMembers();

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          <MemberTitle language={language} />

          <div className="container">
            <MemberTypeButton activeTab="faculty" />
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
                          src={getImagePath(member.image || "/placeholder.svg")}
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
          </div>
        </div>
      </div>
    </div>
  );
}
