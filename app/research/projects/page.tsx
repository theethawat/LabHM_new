import ResearchProjectsPage from "./research-project-page";
import { Research, convertSpreadsheetToResearch } from "@/types";

export default async function ResearchProject() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs`
  );

  console.log(
    "URL",
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();
  const researches: Research[] = jsonResult.map((row: any) =>
    convertSpreadsheetToResearch(row)
  );

  return <ResearchProjectsPage researches={researches} />;
}
