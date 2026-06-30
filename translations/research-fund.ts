import { ResearchFundSource } from "@/types";

enum ResearchFundInYear {
  jka202324 = "jka-2023-24",
  jka2025 = "jka-2025",
  mic = "forward",
}

interface ResearchFundLangMeta {
  title: string;
  briefDescription: string;
}

interface ResearchFundDataMetaEntry {
  id: string;
  source: ResearchFundSource;
  link: string;
  year?: string;
  contentKey: string;
  ja: ResearchFundLangMeta;
  en: ResearchFundLangMeta;
  logo: string;
}

export type ResearchFundDataTranslationsType = {
  [key in ResearchFundInYear]: ResearchFundDataMetaEntry;
};

export const ResearchFundDataTranslations: ResearchFundDataTranslationsType = {
  [ResearchFundInYear.jka202324]: {
    id: ResearchFundInYear.jka202324,
    source: ResearchFundSource.jka,
    link: "https://www.jka-cycle.jp/",
    year: "2023-2024",
    contentKey: "jka202324",
    ja: {
      title: "公益財団法人 JKA（2023-2024年度）",
      briefDescription:
        "公益財団法人JKAからの研究助成により、革新的な技術開発と社会貢献を目指した研究を実施しました。",
    },
    en: {
      title: "Japan Keirin Autorace Foundation JKA (FY2023-2024)",
      briefDescription:
        "With research grants from the Japan Keirin Autorace Foundation, we conducted research aimed at innovative technology development and social contribution.",
    },
    logo: "/images/JKA_banner_L.png",
  },
  [ResearchFundInYear.jka2025]: {
    id: ResearchFundInYear.jka2025,
    source: ResearchFundSource.jka,
    link: "https://www.jka-cycle.ja/",
    year: "2025",
    contentKey: "jka2025",
    ja: {
      title: "公益財団法人 JKA（2025年度）",
      briefDescription:
        "2025年度も引き続きJKAからの助成を受け、研究プロジェクトを推進しています。",
    },
    en: {
      title: "Japan Keirin Autorace Foundation JKA (FY2025)",
      briefDescription:
        "We are continuing our research project with a grant from JKA for FY2025.",
    },
    logo: "/images/JKA_banner_L.png",
  },
  [ResearchFundInYear.mic]: {
    id: ResearchFundInYear.mic,
    source: ResearchFundSource.mic,
    link: "https://www.soumu.go.jp/",
    contentKey: "mic",
    ja: {
      title: "総務省 FORWARD事業",
      briefDescription:
        "総務省の「持続可能な電波有効利用のための基盤技術研究開発事業（FORWARD）」により、電波センシング技術を活用した畜産業の課題解決に取り組んでいます。",
    },
    en: {
      title: "Ministry of Internal Affairs and Communications FORWARD Project",
      briefDescription:
        "Through the Ministry of Internal Affairs and Communications' 'Fundamental Technologies for Sustainable Efficient Radio Wave Use R&D Project (FORWARD)', we are working on solving livestock industry challenges using radio wave sensing technology.",
    },
    logo: "/images/logo_soumu.png",
  },
};
