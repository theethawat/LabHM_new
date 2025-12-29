import _ from "lodash";
import {
  type UnifiedMember,
  unifiedFacultyMembers,
  unifiedCurrentStudents,
} from "./unified-members-data";

// 型の再エクスポート
export type { UnifiedMember };

// 全メンバーを統合した配列（完全版）
export const allCompleteUnifiedMembers: UnifiedMember[] = [
  ...unifiedFacultyMembers,
  ...unifiedCurrentStudents,
];

// フィルタリング関数（完全版）
export function getCompleteActiveMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter((member) => !member.isAlumni);
}

export function getCompleteAlumniMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter((member) => member.isAlumni);
}

export function getCompleteFacultyMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.program === "faculty" && !member.isAlumni
  );
}

export function getCompleteStudentsByProgram(
  program: "doctoral" | "masters" | "bachelor"
): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.program === program && !member.isAlumni
  );
}

export function getCompleteAlumniByYear(
  academicYear: string,
  inputMembers: UnifiedMember[]
): UnifiedMember[] {
  return inputMembers.filter(
    (allMember) => allMember.isAlumni && allMember.academicYear === academicYear
  );
}

export function getCompleteAlumniByDegree(
  degreeType: "doctor" | "master" | "bachelor"
): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.isAlumni && member.degreeType === degreeType
  );
}

// 卒業年度のリストを取得
export function getAvailableAcademicYears(
  alumniMembers: UnifiedMember[]
): string[] {
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
