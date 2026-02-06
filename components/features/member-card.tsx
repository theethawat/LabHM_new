import Image from "next/image";
import { Github, Twitter, Linkedin, Globe } from "lucide-react";
import Link from "next/link";
import { membersTranslations } from "@/translations/members";
import { getImagePath } from "@/lib/utils";
import { Member } from "@/types";
// カスタムXアイコンコンポーネント
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// 学年表示用の関数
function getYearText(program: string, year?: number, lang = "ja"): string {
  if (!year) return "";

  const yearPrefix = membersTranslations[lang as "ja" | "en"].students.year;

  switch (program) {
    case "doctoral":
      return `${yearPrefix.doctoral}${year}${lang === "ja" ? "年" : ""}`;
    case "masters":
      return `${yearPrefix.masters}${year}${lang === "ja" ? "年" : ""}`;
    default:
      return year ? `${year}${lang === "ja" ? "年" : ""}` : "";
  }
}

// メンバーカードコンポーネント
// Original By Nishimoto-kun
function MemberCard({
  member,
  language,
  showResearchTopic = false,
}: {
  member: Member;
  language: "ja" | "en";
  showResearchTopic?: boolean;
}) {
  const t = membersTranslations[language];

  return (
    <div className="text-left px-4 py-6">
      <div className="relative w-44 h-44 mb-3">
        <Image
          src={getImagePath(member.image || "/images/no_image.png")}
          alt={member.name}
          fill
          className="object-cover rounded-none"
        />
      </div>
      <h3 className="font-medium text-base mb-1">
        {language === "en" && member.nameEn
          ? member.nameEn
          : member.name.replace(/（.*?）/g, "")}
      </h3>

      {/* 在校生の場合：学年情報 */}
      {!member.isAlumni && member.program !== "faculty" && (
        <p className="text-sm text-gray-500 mb-2">
          {getYearText(member.program!, member.year, language)}
          {member.lab &&
            ` • ${language === "en" && member.labEn ? member.labEn : member.lab}`}
        </p>
      )}

      {/* 教員の場合：役職 */}
      {member.program === "faculty" && (
        <p className="text-sm text-gray-600 mb-2">
          {language === "en" && member.positionEn
            ? member.positionEn
            : member.position}
        </p>
      )}

      {/* 卒業生の場合：卒業年度と学位 */}
      {member.isAlumni && (
        <p className="text-sm text-gray-500 mb-2">
          {member.academicYear}{" "}
          {member.degreeType === "doctor"
            ? t.alumni.doctoral
            : member.degreeType === "master"
              ? t.alumni.masters
              : t.alumni.bachelor}
        </p>
      )}

      {/* 研究テーマ（卒業生の場合） */}
      {showResearchTopic && member.researchTopic && (
        <p className="text-xs text-gray-600 mb-2 line-clamp-3">
          {language === "en" && member.researchTopic.en
            ? member.researchTopic.en
            : member.researchTopic.ja}
        </p>
      )}

      {/* ソーシャルリンク */}
      {member.socialLinks && (
        <div className="flex space-x-3 mt-3">
          {member.socialLinks.github && (
            <Link
              href={member.socialLinks.github}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </Link>
          )}
          {member.socialLinks.twitter && (
            <Link
              href={member.socialLinks.twitter}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              <XIcon className="h-6 w-6" />
            </Link>
          )}
          {member.socialLinks.linkedin && (
            <Link
              href={member.socialLinks.linkedin}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          )}
          {member.socialLinks.website && (
            <Link
              href={member.socialLinks.website}
              target="_blank"
              className="text-gray-600 hover:text-primary"
            >
              <Globe className="h-6 w-6" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default MemberCard;
