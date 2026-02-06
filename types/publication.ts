export enum PublicationType {
  thesis = "thesis-book",
  journal = "journal",
  intConference = "international-conference",
  domConference = "domestic-conference",
  patent = "patent",
}

export interface Publication {
  type: PublicationType;
  year: number;
  journalOrConference?: string;
  title: string;
  authors: string;
  research?: string;
  member?: string;
  conferencePlace?: string;
  conferenceDate?: Date;
  volume?: string;
  issue?: string;
  pages?: string;
  publisher?: string;
  doi: string;
  citation: string;
}

export const PublicationTypeInfo = {
  [PublicationType.thesis]: {
    ja: {
      title: "論文・書籍",
    },
    en: {
      title: "Thesis / Book",
    },
  },
  [PublicationType.journal]: {
    ja: {
      title: "学術雑誌",
    },
    en: {
      title: "Journal",
    },
  },
  [PublicationType.intConference]: {
    ja: {
      title: "国際会議",
    },
    en: {
      title: "International Conference",
    },
  },
  [PublicationType.domConference]: {
    ja: {
      title: "国内会議",
    },
    en: {
      title: "Domestic Conference",
    },
  },
  [PublicationType.patent]: {
    ja: {
      title: "特許",
    },
    en: {
      title: "Patent",
    },
  },
};
