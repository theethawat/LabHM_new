import _ from "lodash";

import ConferencePage from "../international/conference-page";
import { ConferencePaper, convertSpreadsheetToPublication } from "@/types";

export default async function DomesticConf() {
  // Get News Data
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllPublications&page=1&size=1000&tag=domestic-conference`,
  );

  const dataResponseJSON = await dataResponse.json();
  if (!dataResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const latestConfPapers: ConferencePaper[] = dataResponseJSON?.rows?.map(
    (row: any) => convertSpreadsheetToPublication(row),
  );

  return <ConferencePage papers={latestConfPapers} isInternational={false} />;
}
