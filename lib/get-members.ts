"use server";

import { getSheetObject } from "./sheet-utils";

export const getMembers = async () => {
  const { sheets } = await getSheetObject();
  const spreadsheetId = process.env.SPREADSHEET_ID;

  const tempData = await sheets.spreadsheets.values.get({
    spreadsheetId: spreadsheetId!,
    range: "members!A:Z",
  });

  console.log("Temp Data:", tempData);
  return { data: tempData };
};
