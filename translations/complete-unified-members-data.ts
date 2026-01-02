import _ from "lodash";
import { Member } from "@/types";

// 卒業年度のリストを取得
export function getAvailableAcademicYears(alumniMembers: Member[]): string[] {
  if (_.isEmpty(alumniMembers)) {
    return [];
  }
  const years = alumniMembers
    .map((member) => member?.academicYear || 2025)
    .filter((year): year is string => year !== undefined);
  return [...new Set(years)].sort((a, b) => {
    // 令和年度での並び替え
    const getYearNumber = (year: string): number => {
      try {
        // 令和元年度 = Reiwa 1 or 2019
        if (year === "令和元年度") return 1;
        const match = year.match(/令和(\d+)年度/);
        return match ? parseInt(match[1]) : 0;
      } catch (error) {
        return 0;
      }
    };

    const aYear = getYearNumber(a);
    const bYear = getYearNumber(b);
    return bYear - aYear; // 降順
  });
}
