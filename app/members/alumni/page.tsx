import AlumniPage from "./alumni-page";
import { UnifiedMember } from "@/types";

export default async function Alumni() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MEMBER_DATA}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const members: UnifiedMember[] = await res.json();

  return <AlumniPage members={members} />;
}
