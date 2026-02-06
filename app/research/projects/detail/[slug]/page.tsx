import { Research, convertSpreadsheetToResearch } from "@/types";
import DetailResearchPage from "./detail-research-page";

// Generate static params for all research project IDs
export async function generateStaticParams() {
  // Fetch all research projects to get their IDs
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs&page=1&size=1000`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      console.warn("Failed to fetch research projects for static generation");
      return [];
    }

    const jsonResult = await res.json();
    const researches: Research[] = jsonResult?.rows?.map((row: any) =>
      convertSpreadsheetToResearch(row),
    ) || [];

    return researches.map((research) => ({
      slug: research.id,
    }));
  } catch (error) {
    console.warn("Error generating static params for research:", error);
    return [];
  }
}

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
