import { ResearchArea, ResearchTag } from "@/types";

export const researchAreas: ResearchArea[] = [
  {
    id: ResearchTag.medical,
    ja: {
      title: "医療分野",
      description:
        "胎児モニタリング、パーキンソン病診断支援、振戦分析など、医療現場での課題解決に取り組んでいます。",
      shortTitle: "医療",
    },
    en: {
      title: "Medical Field",
      description:
        "We work on solving challenges in medical settings, such as fetal monitoring, Parkinson's disease diagnosis support, and tremor analysis.",
      shortTitle: "Medical",
    },
    image: "/images/research_medical.png",
    link: "/research/projects", // 直接プロジェクトページに向ける
  },
  {
    id: ResearchTag.cattle,
    ja: {
      title: "農業・畜産分野",
      description:
        "牛の個体識別、BCS評価の自動化、跛行検知など、畜産業の効率化と生産性向上を支援しています。",
      shortTitle: "牛",
    },
    en: {
      title: "Agriculture and Livestock Field",
      description:
        "We support the efficiency and productivity improvement of the livestock industry through cattle identification, automation of BCS evaluation, lameness detection, and more.",
      shortTitle: "Cattle",
    },
    image: "/images/research_cow.jpg",
    link: "/research/projects", // 直接プロジェクトページに向ける
  },
  {
    id: ResearchTag.human,
    ja: {
      title: "高齢者支援",
      description:
        "プライバシーを保護した見守りシステム、転倒リスク評価など、高齢者の安全で快適な生活を支援しています。",
      shortTitle: "人",
    },
    en: {
      title: "Elderly Support",
      description:
        "We support safe and comfortable living for the elderly through privacy-protected monitoring systems, fall risk assessment, and more.",
      shortTitle: "Human",
    },
    image: "/images/research_oldmen.png", // 画像を更新
    link: "/research/projects", // 直接プロジェクトページに向ける
  },
];

export default researchAreas;
