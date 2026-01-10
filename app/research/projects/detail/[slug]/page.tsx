import { Research, convertSpreadsheetToResearch } from "@/types";
import DetailResearchPage from "./detail-research-page";
export default async function DetailResearch({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getOneResearch&id=${slug}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();

  const selectedResearch = convertSpreadsheetToResearch(jsonResult);
  console.log(selectedResearch);

  return (
    <div>
      <DetailResearchPage selectedResearch={selectedResearch} />
    </div>
  );
}
