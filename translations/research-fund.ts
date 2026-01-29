import { ResearchFundSource } from "@/types";

enum ResearchFundInYear {
  jka202324 = "jka-2023-24",
  jka2025 = "jka-2025",
  mic = "forward",
}

//
// Type for language-specific fields
interface ResearchFundLangFields {
  title: string;
  briefDescription: string;
  aboutTitle?: string;
  aboutText?: string;
  contributeToSociety?: string;
  researchOverview?: string;
}

// Type for press releases
interface ResearchFundPressRelease {
  jp: { title: string };
  en: { title: string };
  link?: string;
}

// Type for current projects
interface ResearchFundCurrentProject {
  grantNumber: string;
  jp: { title: string; recipient: string };
  en: { title: string; recipient: string };
}

// Main type for each fund entry
interface ResearchFundDataEntry {
  id: string;
  source: ResearchFundSource;
  link: string;
  year?: string;
  ja: ResearchFundLangFields;
  en: ResearchFundLangFields;
  logo: string;
  pressReleases: ResearchFundPressRelease[];
  currentProjects?: ResearchFundCurrentProject[];
}

// Type for the whole translation object
export type ResearchFundDataTranslationsType = {
  [key in ResearchFundInYear]: ResearchFundDataEntry;
};

export const ResearchFundDataTranslations: ResearchFundDataTranslationsType = {
  [ResearchFundInYear.jka202324]: {
    id: ResearchFundInYear.jka202324,
    source: ResearchFundSource.jka,
    link: "https://www.jka-cycle.jp/",
    year: "2023-2024",
    ja: {
      title: "JKA（2023-2024年度）",
      briefDescription:
        "公益財団法人JKAからの研究助成により、革新的な技術開発と社会貢献を目指した研究を実施しました。",
      aboutTitle: "JKAについて",
      aboutText:
        "公益財団法人JKAは、競輪・オートレースの売上の一部を財源として、機械工業の振興、体育事業の振興、社会福祉の増進、学術研究の振興などの公益事業を行っている財団法人です。CYCLE JKA Social Actionとして、補助金を活用した支援活動を幅広く展開しています。",
      contributeToSociety:
        "本研究により、従来は目視や経験に依存していた作業が自動化され、畜産農家の作業負担と精神的負担の軽減が期待されます。異常行動や疾病兆候の早期検知により治療や衛生管理の高度化を促進し、専門知識がなくても扱いやすい設計により新規就農者の参入を後押しし、畜産現場の持続可能性向上に貢献しています。",
      researchOverview: "",
    },
    en: {
      title: "JKA (FY2023-2024)",
      briefDescription:
        "With research grants from the Japan Keirin Autorace Foundation, we conducted research aimed at innovative technology development and social contribution.",
      aboutTitle: "About JKA",
      aboutText:
        "The Japan Keirin Autorace Foundation (JKA) is a public interest incorporated foundation that conducts public interest projects such as promotion of mechanical industry, sports promotion, social welfare enhancement, and academic research promotion, funded by proceeds from bicycle racing and auto racing. Through CYCLE JKA Social Action, they broadly develop support activities utilizing subsidies.",
      contributeToSociety:
        "This research is expected to automate tasks that previously relied on visual observation and experience, reducing the labor and mental burden on livestock farmers. By enabling early detection of abnormal behavior and disease symptoms, it promotes advanced treatment and hygiene management. The user-friendly design that doesn't require specialized knowledge encourages new farmers to enter the field, contributing to the sustainability improvement of livestock sites.",
      researchOverview: "",
    },
    logo: "/images/JKA_banner_L.png",
    pressReleases: [],
    currentProjects: [
      {
        grantNumber: "2023M-425",
        jp: {
          title:
            "2023年度 酪農・畜産業のDX化による牛の健康管理システムの開発補助事業",
          recipient: "国立大学法人宮崎大学",
        },
        en: {
          title:
            "FY2023 Development of Cattle Health Management System through DX in Dairy and Livestock Industry Grant Project",
          recipient: "University of Miyazaki",
        },
      },
    ],
  },
  [ResearchFundInYear.jka2025]: {
    id: ResearchFundInYear.jka2025,
    source: ResearchFundSource.jka,
    link: "https://www.jka-cycle.jp/",
    year: "2025",
    ja: {
      title: "JKA（2025年度）",
      briefDescription:
        "2025年度も引き続きJKAからの助成を受け、研究プロジェクトを推進しています。",
      aboutTitle: "JKAについて",
      aboutText:
        "公益財団法人JKAは、競輪・オートレースの売上の一部を財源として、機械工業の振興、体育事業の振興、社会福祉の増進、学術研究の振興などの公益事業を行っている財団法人です。CYCLE JKA Social Actionとして、補助金を活用した支援活動を幅広く展開しています。",
      contributeToSociety:
        "本事業による社会への貢献については、今後掲載予定です。",
      researchOverview: "",
    },
    en: {
      title: "JKA (FY2025)",
      briefDescription:
        "We are continuing our research project with a grant from JKA for FY2025.",
      aboutTitle: "About JKA",
      aboutText:
        "The Japan Keirin Autorace Foundation (JKA) is a public interest incorporated foundation that conducts public interest projects such as promotion of mechanical industry, sports promotion, social welfare enhancement, and academic research promotion, funded by proceeds from bicycle racing and auto racing. Through CYCLE JKA Social Action, they broadly develop support activities utilizing subsidies.",
      contributeToSociety:
        "The contribution to society from this project will be posted in the future.",
      researchOverview: "",
    },
    logo: "/images/JKA_banner_L.png",
    pressReleases: [],
  },
  [ResearchFundInYear.mic]: {
    id: ResearchFundInYear.mic,
    source: ResearchFundSource.mic,
    link: "https://www.soumu.go.jp/",
    ja: {
      title: "総務省 FORWARD事業",
      briefDescription:
        "総務省の「持続可能な電波有効利用のための基盤技術研究開発事業（FORWARD）」により、電波センシング技術を活用した畜産業の課題解決に取り組んでいます。",
      researchOverview:
        "低電力電波センサを活用し、心拍数を指標にした牛の分娩難産予測システムの研究開発を行います。九州地域では、牛舎が散在しており、分娩異常時に迅速な介入が困難です。本研究では、電波センシングシステムによる心拍推定、画像処理技術とAIを用いた分娩予測、Mixed Reality(MR)デバイスによる3Dモデル診断技術を統合し、遠隔地から獣医師が適切な助産指示を行えるようにします。",
      aboutTitle: "FORWARD事業について",
      aboutText:
        "「持続可能な電波有効利用のための基盤技術研究開発事業（FORWARD）」は、総務省が推進する研究開発事業です。電波の有効利用を促進し、Society 5.0の実現に向けた無線通信技術の研究開発を支援しています。",
    },
    en: {
      title: "Ministry of Internal Affairs and Communications FORWARD Project",
      briefDescription:
        "Through the Ministry of Internal Affairs and Communications' 'Fundamental Technologies for Sustainable Efficient Radio Wave Use R&D Project (FORWARD)', we are working on solving livestock industry challenges using radio wave sensing technology.",
      researchOverview:
        "We will conduct research and development of a cattle dystocia prediction system using heart rate as an indicator with low-power radio wave sensors. In the Kyushu region, cattle barns are scattered, making rapid intervention during parturition abnormalities difficult. This research integrates heart rate estimation through radio wave sensing systems, parturition prediction using image processing technology and AI, and 3D model diagnostic technology using Mixed Reality (MR) devices to enable veterinarians to provide appropriate midwifery instructions remotely.",
      aboutTitle: "About FORWARD Project",
      aboutText:
        "The 'Fundamental Technologies for Sustainable Efficient Radio Wave Use R&D Project (FORWARD)' is a research and development project promoted by the Ministry of Internal Affairs and Communications. It promotes the effective use of radio waves and supports research and development of wireless communication technologies toward the realization of Society 5.0.",
    },
    logo: "/images/logo_soumu.png",
    pressReleases: [
      {
        jp: {
          title: "総務省 九州総合通信局 報道資料（令和7年7月25日）",
        },
        en: {
          title:
            "MIC Kyushu Bureau of Telecommunications Press Release (July 25, 2025)",
        },
        link: "https://www.soumu.go.jp/soutsu/kyushu/press/250725-1.html",
      },
    ],
  },
};
