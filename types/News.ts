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
  images?: string[];
}

export enum NewsTag {
  studentActivity = "student-activity",
  researchAchievement = "research",
  internationalCollaboration = "international",
  industryAcademiaCollaboration = "industrial-collab",
  laboratoryManagement = "lab-management",
  all = "all",
}

export const NewsTagInfo = {
  [NewsTag.all]: {
    ja: "すべて",
    en: "All",
  },
  [NewsTag.studentActivity]: {
    ja: "学生の活動",
    en: "Student Activity",
  },
  [NewsTag.researchAchievement]: {
    ja: "研究成果",
    en: "Research Achievement",
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

export function convertSpreadsheetToNews(sheetObject: any): News {
  const tempNews: News = { ...sheetObject } as News;

  const imageList = [];
  for (let i = 1; i <= 13; i++) {
    const imageKey = `support_image_${i}`;
    sheetObject[imageKey] && imageList.push(sheetObject[imageKey]);
  }
  tempNews.ja = {
    title: sheetObject?.jpTitle,
    content: sheetObject?.jpDescription || "",
  };
  tempNews.en = {
    title: sheetObject?.enTitle,
    content: sheetObject?.enDescription || "",
  };
  tempNews.images = imageList;
  return tempNews;
}
