export type ResearchSingleLanguage = {
  title: string;
  subtitle: string;
  overview: string;
  backgroundText1: string;
  backgroundText2: string;
  valueText1: string;
  valueText2: string;
  valueList: string;
  methodText1: string;
  methodText2: string;
  methodList: string;
  methodText3: string;
  resultText1: string;
  resultText2: string;
  resultText3: string;
  environmentText1: string;
  environmentText2: string;
  futurePerspectiveText1: string;
  futurePerspectiveText2: string;
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
  overview_image: string;
  background_image: string;
  method_image: string;
  result_image: string;
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
