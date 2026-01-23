export interface NewsInfoSingleLanguage {
  title: string;
  content: string;
}

export interface News {
  id: string;
  date: string;
  ja: NewsInfoSingleLanguage;
  en: NewsInfoSingleLanguage;
  link?: string;
  image?: string;
  tag: string;
  isExternal?: boolean;
}

export enum NewsTag {
  studentActivity = "student-activity",
  researchAchievement = "research",
  internationalCollaboration = "international",
  industryAcademiaCollaboration = "industry-collab",
  laboratoryManagement = "lab-management",
}

export function getInfoFromTag(tag: NewsTag, language: "ja" | "en"): string {
  const tagMappings: { [key in NewsTag]: { ja: string; en: string } } = {
    [NewsTag.studentActivity]: { ja: "学生活動", en: "Student Activities" },
    [NewsTag.researchAchievement]: {
      ja: "研究成果",
      en: "Research Achievements",
    },
    [NewsTag.internationalCollaboration]: {
      ja: "国際連携",
      en: "International Collaboration",
    },
    [NewsTag.industryAcademiaCollaboration]: {
      ja: "産学連携",
      en: "Industry-Academia Collaboration",
    },
    [NewsTag.laboratoryManagement]: {
      ja: "研究室運営",
      en: "Laboratory Management",
    },
  };
  return tagMappings[tag][language];
}

export function convertSpreadsheetToNews(sheetObject: any): News {
  const tempNews: News = { ...sheetObject } as News;
  tempNews.ja = {
    title: sheetObject?.jpTitle,
    content: sheetObject?.jpContent || "",
  };
  tempNews.en = {
    title: sheetObject?.enTitle,
    content: sheetObject?.enContent || "",
  };
  return tempNews;
}
