// 学年表示用の関数
import { membersTranslations } from "@/translations/members";

export function getStudentYear(
  program: string,
  year?: number,
  lang = "ja",
): string {
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

export function getOrdinalSuffix(num: number): string {
  if (num % 100 >= 11 && num % 100 <= 13) return "th";
  switch (num % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function getStudentYearWithFullData(
  program: string,
  year?: number,
  lang = "ja",
): string {
  if (!year) return "";

  switch (program) {
    case "doctoral":
      return `${year}${lang === "ja" ? "年" : `${getOrdinalSuffix(year)} Year`}`;
    case "masters":
      return `${year}${lang === "ja" ? "年" : `${getOrdinalSuffix(year)} Year`}`;
    case "bachelor":
      return year
        ? `${year}${lang === "ja" ? "年" : ""}`
        : `${getOrdinalSuffix(year)} Year`;
    default:
      return "";
  }
}
