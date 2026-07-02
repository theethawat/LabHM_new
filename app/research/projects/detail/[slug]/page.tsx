import { Research, convertSpreadsheetToResearch } from "@/types";
import DetailResearchPage from "./detail-research-page";
import path from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { transformImageAttributeListSyntax } from "@/lib/markdown";

type ResearchLanguage = "ja" | "en";

const markdownFileSuffixByLanguage: Record<ResearchLanguage, string> = {
  ja: "jp",
  en: "en",
};

export type ResearchContentHtml = {
  overviewHtml: string;
  bodyHtml: string;
};

export type ResearchContentByLanguage = Record<
  ResearchLanguage,
  ResearchContentHtml
>;

const overviewHeadingByLanguage: Record<ResearchLanguage, string> = {
  ja: "## 概要",
  en: "## Overview",
};

/**
 * Splits the markdown into the "Overview" featured section and the remaining body.
 * The Overview section is rendered in a highlighted card at the top of the page.
 */
const splitOverviewSection = (
  markdownContent: string,
  language: ResearchLanguage,
) => {
  const lines = markdownContent.split(/\r?\n/);
  const overviewHeading = overviewHeadingByLanguage[language];

  const overviewStartIndex = lines.findIndex(
    (line) => line.trim() === overviewHeading,
  );

  if (overviewStartIndex < 0) {
    return { overviewMarkdown: "", remainingMarkdown: markdownContent };
  }

  let overviewEndIndex = lines.length;
  for (let i = overviewStartIndex + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) {
      overviewEndIndex = i;
      break;
    }
  }

  const overviewMarkdown = lines
    .slice(overviewStartIndex + 1, overviewEndIndex)
    .join("\n")
    .trim();

  const remainingMarkdown = [
    ...lines.slice(0, overviewStartIndex),
    ...lines.slice(overviewEndIndex),
  ]
    .join("\n")
    .trim();

  return { overviewMarkdown, remainingMarkdown };
};

const getResearchContentHtmlByLanguage = async (
  slug: string,
): Promise<ResearchContentByLanguage> => {
  const contentByLanguage: ResearchContentByLanguage = {
    ja: { overviewHtml: "", bodyHtml: "" },
    en: { overviewHtml: "", bodyHtml: "" },
  };

  await Promise.all(
    (Object.keys(markdownFileSuffixByLanguage) as ResearchLanguage[]).map(
      async (language) => {
        const fileSuffix = markdownFileSuffixByLanguage[language];
        const markdownPath = path.join(
          process.cwd(),
          "content",
          "research-projects",
          slug,
          `${fileSuffix}.md`,
        );

        let markdownContent: string;
        try {
          markdownContent = transformImageAttributeListSyntax(
            await readFile(markdownPath, "utf8"),
          );
        } catch {
          // File doesn't exist for this language — leave empty
          return;
        }

        const { overviewMarkdown, remainingMarkdown } = splitOverviewSection(
          markdownContent,
          language,
        );

        const [processedOverview, processedBody] = await Promise.all([
          overviewMarkdown
            ? remark().use(html, { sanitize: false }).process(overviewMarkdown)
            : Promise.resolve(""),
          remark().use(html, { sanitize: false }).process(remainingMarkdown),
        ]);

        contentByLanguage[language] = {
          overviewHtml:
            typeof processedOverview === "string"
              ? processedOverview
              : processedOverview.toString(),
          bodyHtml: processedBody.toString(),
        };
      },
    ),
  );

  return contentByLanguage;
};

export default async function DetailResearch({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getOneResearch&id=${slug}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();
  const selectedResearch: Research = convertSpreadsheetToResearch(jsonResult);

  const contentByLanguage = await getResearchContentHtmlByLanguage(slug);

  // If neither language has any content, the markdown files don't exist yet
  if (!contentByLanguage.en.bodyHtml && !contentByLanguage.ja.bodyHtml) {
    notFound();
  }

  return (
    <DetailResearchPage
      selectedResearch={selectedResearch}
      contentByLanguage={contentByLanguage}
    />
  );
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllResearchs&page=${1}&size=100`,
  );

  const jsonResult = await res.json();

  return jsonResult?.rows?.map((eachData: any) => ({
    slug: eachData.id.toString(),
  }));
}
