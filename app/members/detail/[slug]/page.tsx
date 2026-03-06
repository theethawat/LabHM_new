import DetailMemberPage from "./detail-member-page";
import {
  convertSpreadSheetRowToUnifiedMember,
  convertSpreadsheetToPublication,
  convertSpreadsheetToResearch,
  Member,
  Publication,
  Research,
} from "@/types";

export default async function MemberDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const memberData = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getOneMember&id=${slug}`,
  );

  if (!memberData.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await memberData.json();

  const selectedMember: Member =
    convertSpreadSheetRowToUnifiedMember(jsonResult);

  const searchIdToFind = selectedMember.newRecord || slug;
  const publicationRes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllPublications&page=1&size=1000&member=${searchIdToFind}`,
  );

  const publicationResJSON = await publicationRes.json();
  if (!publicationRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const latestPublication: Publication[] = publicationResJSON?.rows?.map(
    (row: any) => convertSpreadsheetToPublication(row),
  );

  const researchRes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs&page=${1}&size=100&member=${searchIdToFind}`,
  );

  if (!researchRes.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const researchJSON = await researchRes.json();

  const researches: Research[] = researchJSON?.rows?.map((row: any) =>
    convertSpreadsheetToResearch(row),
  );

  return (
    <div>
      <DetailMemberPage
        selectedMember={selectedMember}
        publications={latestPublication || []}
        researches={researches || []}
      />
    </div>
  );
}

// FIXME: The result is not return id I think
export async function generateStaticParams() {
  // Fetch data from an API, database, or a local source
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllMembers`,
  );

  const jsonResult = await res.json();

  // Return an array of objects, each with the 'slug' property matching the dynamic segment name
  return jsonResult?.map((eachData: any) => ({
    slug: eachData.id.toString(), // Ensure the slug is a string
  }));
}
