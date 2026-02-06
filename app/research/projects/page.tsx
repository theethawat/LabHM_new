import ResearchProjectsPage from "./research-project-page";
import { Research, convertSpreadsheetToResearch } from "@/types";

export default async function ResearchProject({
  searchParams,
}: {
  searchParams: { page?: string; tag?: string };
}) {
  const params = searchParams;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs&page=${1}&size=100`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();

  const researches: Research[] = jsonResult?.rows?.map((row: any) =>
    convertSpreadsheetToResearch(row),
  );

  return (
    <ResearchProjectsPage
      researches={researches}
      totalPage={jsonResult?.allPage}
      currPage={jsonResult?.currPage}
    />
  );
}
