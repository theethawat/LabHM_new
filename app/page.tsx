import _ from "lodash";

import Home from "./home-page";
import {
  News,
  convertSpreadsheetToNews,
  Research,
  convertSpreadsheetToResearch,
} from "@/types";

export default async function HomePage() {
  // Get News Data
  const newsRes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllNews&page=1&size=4`,
  );
  const newsJSONResponse = await newsRes.json();
  if (!newsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const latestNews: News[] = newsJSONResponse?.rows?.map((row: any) =>
    convertSpreadsheetToNews(row),
  );

  const researchRes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs`,
  );

  if (!researchRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await researchRes.json();

  const researches: Research[] = jsonResult.map((row: any) =>
    convertSpreadsheetToResearch(row),
  );

  const last4Research = _.takeRight(researches, 4);

  return <Home latestNews={latestNews} latestResearches={last4Research} />;
}
