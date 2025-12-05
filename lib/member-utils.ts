import { getSheetObject } from "./sheet-utils";
import { UnifiedMember } from "@/types";
import _ from "lodash";

export const getMembers = async (): Promise<{ data: string[][] }> => {
  const { sheets } = await getSheetObject();
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const tempData = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId!,
    range: "members!A:Z",
  });

  const rows = tempData.data.values;
  return { data: rows };
};

export const memberToMemberObject = (rows: string[][]): UnifiedMember[] => {
  const titleRow = rows[0];
  const dataRows = rows.slice(1);
  const members = dataRows.map((row) => _.zipObject(titleRow, row));

  const memberObjects: UnifiedMember[] = _.map(members, (eachMember) => {
    const memberUnified: UnifiedMember = {
      id: eachMember["id"] || "",
      name: eachMember["name"] || "",
      nameEn: eachMember["nameEn"] || undefined,
      isAlumni: eachMember["isAlumni"] === "true",
      graduationYear: eachMember["graduationYear"] || undefined,
      position: eachMember["position"] || undefined,
      positionEn: eachMember["positionEn"] || undefined,
      program: eachMember["program"] as
        | "doctoral"
        | "masters"
        | "bachelor"
        | "faculty"
        | undefined,
      year: eachMember["year"] ? parseInt(eachMember["year"]) : undefined,
      lab: eachMember["lab"] || undefined,
      labEn: eachMember["labEn"] || undefined,
      image: eachMember["image"] || "",
      background: {
        ja: eachMember["backgroundJA"]
          ? eachMember["backgroundJA"].split(";")
          : [],
        en: eachMember["backgroundEN"]
          ? eachMember["backgroundEN"].split(";")
          : [],
      },
      researchFields: {
        ja: eachMember["researchFieldsJA"] || "",
        en: eachMember["researchFieldsEN"] || "",
      },
      researchTopic: {
        ja: eachMember["researchTopicJA"] || "",
        en: eachMember["researchTopicEN"] || "",
      },
      socialLinks: {
        github: eachMember["github"] || undefined,
        twitter: eachMember["twitter"] || undefined,
        linkedin: eachMember["linkedin"] || undefined,
        website: eachMember["website"] || undefined,
      },
      degreeType: eachMember["degreeType"] as
        | "doctor"
        | "master"
        | "bachelor"
        | undefined,
      academicYear: eachMember["academicYear"] || undefined,
      academicYearEn: eachMember["academicYearEn"] || undefined,
    };
    return memberUnified;
  });
  return memberObjects;
};
