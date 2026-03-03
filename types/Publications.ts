export enum PublicationType {
  thesis = "thesis-book",
  journal = "journal",
  intConference = "international-conference",
  domConference = "domestic-conference",
}

export interface Publication {
  id: string;
  type: PublicationType;
  year: number;
  title: string;
  authors: string;
  research?: string;
  member?: string;
  link?: string;
  citation?: string;
}

export interface ConferencePaper extends Publication {
  conference?: string;
  place: {
    ja?: string;
    en?: string;
  };
  date?: Date; // conferenceDate
  pages?: string;
  publisher?: string;
}

export interface JournalPublication extends Publication {
  journal?: string;
  volume?: number;
  issue?: number;
  pages?: string;
  publisher?: string;
}

export const PublicationTypeInfo = {
  [PublicationType.thesis]: {
    ja: {
      title: "論文・書籍",
    },
    en: {
      title: "Thesis / Book",
    },
    link: "thesis",
  },
  [PublicationType.journal]: {
    ja: {
      title: "学術雑誌",
    },
    en: {
      title: "Journal",
    },
    link: "journals",
  },
  [PublicationType.intConference]: {
    ja: {
      title: "国際会議",
    },
    en: {
      title: "International Conference",
    },
    link: "international",
  },
  [PublicationType.domConference]: {
    ja: {
      title: "国内会議",
    },
    en: {
      title: "Domestic Conference",
    },
    link: "domestic",
  },
};

export function convertSpreadsheetToPublication(sheetObject: any): Publication {
  if (
    sheetObject.type === PublicationType.intConference ||
    sheetObject.type === PublicationType.domConference
  ) {
    const conferencePaper: ConferencePaper = {
      ...sheetObject,
    } as ConferencePaper;

    conferencePaper.conference = sheetObject.journalOrConferenceTitle;
    conferencePaper.place = {
      ja: sheetObject.conferencePlace,
      en: sheetObject.enConferencePlace,
    };
    conferencePaper.date = new Date(sheetObject.conferenceDate);
    return conferencePaper;
  } else if (sheetObject.type === PublicationType.journal) {
    const journalPublication: JournalPublication = {
      ...sheetObject,
    } as JournalPublication;
    journalPublication.journal = sheetObject.journalOrConferenceTitle;
    return journalPublication;
  }

  const tempPublication: Publication = { ...sheetObject } as Publication;
  return tempPublication;
}
