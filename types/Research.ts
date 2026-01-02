import _ from "lodash";

export type ResearchSingleLanguage = {
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
};

export type SDGs = {
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
};

type ResearchImage = {
  overview_image?: string;
  background_image?: string;
  method_image?: string;
  result_image?: string;
};

export enum ResearchTag {
  medical = "medical",
  ai = "ai",
  cattle = "cattle",
  human = "human",
}

export type ResearchArea = {
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
};

export type Research = {
  id: string;
  ja: ResearchSingleLanguage;
  en: ResearchSingleLanguage;
  tags: ResearchTag[];
  sdgs: SDGs;
  images: ResearchImage;
};

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
};

// Code Function Refactored by GitHub Copilot GPT4.1
const translateSheetSDGs = (sheetObject: any): SDGs => {
  return Array.from(
    { length: 17 },
    (_, i) => `sdg${i + 1}` as keyof SDGs
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
    key.replace(/^jp/, "")
  );

  const jaResearch: ResearchSingleLanguage = singleLanguagePlaceholder;
  const enResearch: ResearchSingleLanguage = singleLanguagePlaceholder;

  _.map(langSpecKeysWithoutPrefix, (key) => {
    jaResearch[_.camelCase(key) as keyof ResearchSingleLanguage] =
      sheetObject["jp" + key] || "";
    enResearch[_.camelCase(key) as keyof ResearchSingleLanguage] =
      sheetObject["en" + key] || "";
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
  };

  return research;
}
