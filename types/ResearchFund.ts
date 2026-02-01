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
