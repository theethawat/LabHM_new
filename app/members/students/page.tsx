import { getMembers, memberToMemberObject } from "@/lib/member-utils";
import StudentPage from "./student-page";

export default async function Student() {
  const memberResponse = await getMembers();
  const members = memberToMemberObject(memberResponse.data);
  console.log("Members Data:", members);
  return <StudentPage members={members} />;
}
