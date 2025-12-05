import { getMembers, memberToMemberObject } from "@/lib/member-utils";
import StudentPage from "./student-page";

export default async function Student() {
  const memberResponse = await getMembers();
  console.log("Student memberResponse:", memberResponse);
  const members = memberToMemberObject(memberResponse.data);
  return <StudentPage members={members} />;
}
