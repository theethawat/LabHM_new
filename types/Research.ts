import _ from "lodash";

export interface ResearchSingleLanguage {
  title: string;
  subtitle: string;
  overview: string;
  backgroundText1?: string;
  backgroundText2?: string;
  valueText1?: string;
  valueText2?: string;
  valueList?: string;
  methodText1?: string;
  methodText2?: string;
  methodList?: string;
  methodText3?: string;
  resultText1?: string;
  resultText2?: string;
  resultText3?: string;
  environmentText1?: string;
  environmentText2?: string;
  futurePerspectiveText1?: string;
  futurePerspectiveText2?: string;
  customField1Title?: string;
  customField1Text?: string;
  customField1List?: string;
  customField2Title?: string;
  customField2Text?: string;
  customField2List?: string;
}

export interface SDGs {
  sdg1: boolean;
  sdg2: boolean;
  sdg3: boolean;
  sdg4: boolean;
  sdg5: boolean;
  sdg6: boolean;
  sdg7: boolean;
  sdg8: boolean;
  sdg9: boolean;
  sdg10: boolean;
  sdg11: boolean;
  sdg12: boolean;
  sdg13: boolean;
  sdg14: boolean;
  sdg15: boolean;
  sdg16: boolean;
  sdg17: boolean;
}

interface ResearchImage {
  overview_image?: string;
  background_image?: string;
  method_image?: string;
  result_image?: string;
}

export enum ResearchTag {
  medical = "medical",
  ai = "ai",
  cattle = "cattle",
  human = "human",
}

export interface ResearchArea {
  id: ResearchTag;
  ja: {
    title: string;
    shortTitle: string;
    description: string;
  };
  en: {
    title: string;
    shortTitle: string;
    description: string;
  };
  image: string;
  link: string;
}

export enum ResearchFundSource {
  jka = "JKA",
  mic = "MIC",
  noFund = "No",
}

export enum PromotionalFundSource {
  keirin = "Keirin Race",
  noFund = "No",
}

export const ResearchFundSourceInfo = {
  [ResearchFundSource.jka]: {
    ja: {
      title: "公益財団法人 JKA",
      labelInGrantName: "公益財団法人JKAの補助（競輪の補助）",
    },
    en: {
      title: "Japan Keirin Autorace Foundation",
      labelInGrantName: "JKA",
    },
    logo: "/images/JKA.png",
  },
  [ResearchFundSource.mic]: {
    ja: {
      title: "総務省 FORWARD事業",
      labelInGrantName: "総務省 FORWARD事業",
    },
    en: {
      title: "Ministry of Internal Affairs and Communications FORWARD Project",
      labelInGrantName:
        "Ministry of Internal Affairs and Communications FORWARD Project",
    },
    logo: "/images/logo_soumo.png",
  },
  [PromotionalFundSource.keirin]: {
    ja: {
      title: "Keirin Race",
      labelInGrantName: "Keirin Race",
    },
    en: {
      title: "Keirin Race",
      labelInGrantName: "Keirin Race",
    },
    logo: "/images/keirin.gif",
  },
};

export interface ResearchFund {
  researchFund?: ResearchFundSource;
  grantNumber?: string;
  grantYear?: string;
  promotionalFund?: PromotionalFundSource;
}

export interface Research {
  id: string;
  ja: ResearchSingleLanguage;
  en: ResearchSingleLanguage;
  tags: ResearchTag[];
  sdgs: SDGs;
  images: ResearchImage;
  fund?: ResearchFund;
}

const singleLanguagePlaceholder: ResearchSingleLanguage = {
  title: "",
  subtitle: "",
  overview: "",
  backgroundText1: "",
  backgroundText2: "",
  valueText1: "",
  valueText2: "",
  valueList: "",
  methodText1: "",
  methodText2: "",
  methodList: "",
  methodText3: "",
  resultText1: "",
  resultText2: "",
  resultText3: "",
  environmentText1: "",
  environmentText2: "",
  futurePerspectiveText1: "",
  futurePerspectiveText2: "",
  customField1Title: "",
  customField1Text: "",
  customField1List: "",
  customField2Text: "",
  customField2Title: "",
  customField2List: "",
};

// Code Function Refactored by GitHub Copilot GPT4.1
const translateSheetSDGs = (sheetObject: any): SDGs => {
  return Array.from(
    { length: 17 },
    (_, i) => `sdg${i + 1}` as keyof SDGs,
  ).reduce((acc, key) => {
    acc[key] = sheetObject[key] === "TRUE";
    return acc;
  }, {} as SDGs);
};

export function convertSpreadsheetToResearch(sheetObject: any): Research {
  const allKeys: string[] = _.keys(sheetObject) || [];
  // Can use both jp and en but I use jp here, result must be same
  const langSpecKey = allKeys.filter((key) => key.startsWith("jp"));
  const langSpecKeysWithoutPrefix = langSpecKey.map((key) =>
    key.replace(/^jp/, ""),
  );

  const jaResearch: ResearchSingleLanguage = { ...singleLanguagePlaceholder };
  const enResearch: ResearchSingleLanguage = { ...singleLanguagePlaceholder };

  _.map(langSpecKeysWithoutPrefix, (key) => {
    jaResearch[_.camelCase(key) as keyof ResearchSingleLanguage] =
      sheetObject["jp" + key] || "";
    enResearch[_.camelCase(key) as keyof ResearchSingleLanguage] =
      sheetObject["en" + key] || "";
  });

  const currentResearchFund: ResearchFund = {};
  const keyInResearchFund = [
    "research_fund",
    "grant_number",
    "grant_year",
    "promotional_fund",
  ];
  _.map(keyInResearchFund, (eachKey) => {
    currentResearchFund[_.camelCase(eachKey) as keyof ResearchFund] =
      sheetObject[eachKey];
  });

  const research: Research = {
    id: sheetObject.id,
    ja: jaResearch,
    en: enResearch,
    tags: sheetObject.tags ? sheetObject.tags.split(",") : [],
    images: {
      overview_image: sheetObject.overview_image || "",
      background_image: sheetObject.background_image || "",
      method_image: sheetObject.method_image || "",
      result_image: sheetObject.result_image || "",
    },
    sdgs: translateSheetSDGs(sheetObject),
    fund: currentResearchFund,
  };

  return research;
}
