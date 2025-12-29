import AlumniPage from "./alumni-page";
import { UnifiedMember, convertSpreadSheetRowToUnifiedMember } from "@/types";

export default async function Alumni() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEMBER_DATA}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const jsonResult = await res.json();
  const members: UnifiedMember[] = jsonResult.map((row: any) =>
    convertSpreadSheetRowToUnifiedMember(row)
  );

  console.log("Fetched members:", members);

  return <AlumniPage members={members} />;
}
