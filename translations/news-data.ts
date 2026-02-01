export interface NewsItem {
  id: string;
  date: string;
  title: string;
  content?: string;
  link?: string;
  image: string;
  tag: string;
  isExternal?: boolean;
}

// タグの定義
export const newsTags = {
  ja: [
    "すべて",
    "学生活動", // 学生の受賞、発表、卒業、配属など
    "研究成果", // 論文発表、受賞、学会発表など
    "国際連携", // 国際会議、留学生、海外研究者など
    "産学連携", // 企業との共同研究、実証実験、OB訪問など
    "研究室運営", // メンバー配属、設備更新、ウェブサイト更新など
  ],
  en: [
    "All",
    "Student Activities",
    "Research Achievements",
    "International Collaboration",
    "Industry-Academia Collaboration",
    "Laboratory Management",
  ],
};

export const newsTranslation = {
  ja: {
    backToAllNews: "ニュース一覧に戻る",
    date: "日付",
    category: "カテゴリー",
    share: "共有",
    news: "ニュース",
  },
  en: {
    backToAllNews: "Back to All News",
    date: "Date",
    category: "Category",
    share: "Share",
    news: "News",
  },
};
