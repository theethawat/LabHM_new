import StudentPage from "./student-page";
import { Member, convertSpreadSheetRowToUnifiedMember } from "@/types";

export default async function Student() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllMembers`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const jsonResult = await res.json();
  const members: Member[] = jsonResult.map((row: any) =>
    convertSpreadSheetRowToUnifiedMember(row)
  );

  return <StudentPage members={members} />;
}
