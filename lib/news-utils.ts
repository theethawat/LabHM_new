import { NewsTag } from "@/types";

// タグに応じた背景色を返す関数
export const getTagBgColor = (tag: string) => {
  const tagMap: Record<string, string> = {
    [NewsTag.studentActivity]: "bg-red-600",
    [NewsTag.researchAchievement]: "bg-green-600",
    [NewsTag.internationalCollaboration]: "bg-purple-600",
    [NewsTag.industryAcademiaCollaboration]: "bg-blue-600",
    [NewsTag.laboratoryManagement]: "bg-orange-600",
  };
  return tagMap[tag] || "bg-gray-600";
};
