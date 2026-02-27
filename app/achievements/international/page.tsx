import _ from "lodash";

import InternationalConfPage from "./international-conf-page";
import { ConferencePaper, convertSpreadsheetToPublication } from "@/types";

export default async function InternationalConf() {
  // Get News Data
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllPublications&page=1&size=1000&tag=international-conference`,
  );

  const dataResponseJSON = await dataResponse.json();
  if (!dataResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const latestConfPapers: ConferencePaper[] = dataResponseJSON?.rows?.map(
    (row: any) => convertSpreadsheetToPublication(row),
  );

  return <InternationalConfPage papers={latestConfPapers} />;
}
