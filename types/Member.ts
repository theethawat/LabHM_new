export enum DegreeType {
  Doctor = "doctoral",
  Master = "masters",
  Bachelor = "bachelor",
  Faculty = "faculty",
  ResearchStudent = "research_student",
}

// 統一されたメンバーの型定義
export interface Member {
  id: string;
  name: string;
  nameEn?: string;
  isAlumni: boolean; // 卒業生かどうかのフラグ
  graduationYear?: string; // 卒業年度（卒業生の場合）
  position?: string; // 教員・研究員の場合の役職
  positionEn?: string;
  program?: DegreeType; // 所属課程または教員
  year?: number; // 現在の学年（在校生の場合）
  lab?: string; // 所属研究室
  labEn?: string;
  image: string;
  background?: {
    ja: string[];
    en: string[];
  };
  researchFields?: {
    ja: string;
    en: string;
  };
  researchTopic?: {
    ja: string;
    en: string;
  };
  socialLinks?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  // 卒業生の場合のデータ
  degreeType?: DegreeType;
  academicYear?: string; // 学術年度（例：「令和5年度」）
  academicYearEn?: string;
}

export function convertSpreadSheetRowToUnifiedMember(sheetObject: any): Member {
  const tempMember: Member = { ...sheetObject } as Member;
  tempMember.researchTopic = {
    ja: sheetObject?.jaResearchTopic,
    en: sheetObject?.enResearchTopic,
  };

  tempMember.socialLinks = {
    github: sheetObject?.github || undefined,
    twitter: sheetObject?.twitter || undefined,
    linkedin: sheetObject?.linkedin || undefined,
    website: sheetObject?.website || undefined,
  };

  tempMember.background = {
    ja: sheetObject?.jaBackground ? sheetObject.jaBackground.split("\n") : [],
    en: sheetObject?.enBackground ? sheetObject.enBackground.split("\n") : [],
  };

  return tempMember;
}
