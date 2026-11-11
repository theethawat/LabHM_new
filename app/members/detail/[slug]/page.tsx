import type { Metadata } from "next";
import { cache } from "react";
import DetailMemberPage from "./detail-member-page";
import {
  convertSpreadSheetRowToUnifiedMember,
  convertSpreadsheetToPublication,
  convertSpreadsheetToResearch,
  Member,
  Publication,
  Research,
} from "@/types";
import { metadataTranslations } from "@/translations/metadata";

type PublicationResponse = {
  rows?: any[];
};

type ResearchResponse = {
  rows?: any[];
};

async function fetchJsonOrNull<T>(url: string): Promise<T | null> {
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const text = await response.text();

  try {
    return JSON.parse(text) as T;
  } catch (error) {
    console.warn(`Invalid JSON response for ${url}`, error);
    return null;
  }
}

const getAllMembers = cache(
  async (): Promise<any[] | null> =>
    fetchJsonOrNull<any[]>(
      `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllMembers`,
    ),
);

const getMember = cache(async (slug: string): Promise<Member | null> => {
  const members = await getAllMembers();

  const memberJson = members?.find((member) => member.id?.toString() === slug);

  if (!memberJson) {
    return null;
  }

  return convertSpreadSheetRowToUnifiedMember(memberJson);
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const member = await getMember(slug);

  if (!member) {
    return {};
  }

  const title = member.nameKatakana
    ? `${member.nameEn ?? member.name} | ${member.nameKatakana} - ${metadataTranslations.ja.title}`
    : `${member.name}${member.nameEn ? ` | ${member.nameEn}` : ""} - ${metadataTranslations.ja.title}`;

  return { title };
}

export default async function MemberDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const selectedMember = await getMember(slug);

  if (!selectedMember) {
    throw new Error("Failed to fetch member data");
  }

  const searchIdToFind = selectedMember.newRecord || slug;
  const publicationResJson = await fetchJsonOrNull<PublicationResponse>(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllPublications&page=1&size=1000&member=${encodeURIComponent(searchIdToFind)}`,
  );

  const latestPublication: Publication[] =
    publicationResJson?.rows?.map((row: any) =>
      convertSpreadsheetToPublication(row),
    ) || [];

  const researchJson = await fetchJsonOrNull<ResearchResponse>(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs&page=1&size=100&member=${encodeURIComponent(searchIdToFind)}`,
  );

  const researches: Research[] =
    researchJson?.rows?.map((row: any) => convertSpreadsheetToResearch(row)) ||
    [];

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
  const jsonResult = await getAllMembers();

  if (!jsonResult) {
    throw new Error("Failed to fetch members for static params");
  }

  // Return an array of objects, each with the 'slug' property matching the dynamic segment name
  return jsonResult.map((eachData: any) => ({
    slug: eachData.id.toString(), // Ensure the slug is a string
  }));
}
