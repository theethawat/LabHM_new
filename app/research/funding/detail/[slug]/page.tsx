import FundingDetailPage from "./funding-detail-page";
import { ResearchFundDataTranslations } from "@/translations/research-fund";
import _ from "lodash";
import path from "path";
import { readFile } from "fs/promises";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";
import { transformImageAttributeListSyntax } from "@/lib/markdown";

const markdownFileSuffixByLanguage = {
  ja: "jp",
  en: "en",
} as const;

type FundingLanguage = keyof typeof markdownFileSuffixByLanguage;

type FundingContentHtml = {
  featuredProject: {
    grantNumber: string;
    projectTitle: string;
    detailsHtml: string;
  };
  bodyHtml: string;
};

type FundingContentByLanguage = Record<FundingLanguage, FundingContentHtml>;

const splitFeaturedProjectSection = (
  markdownContent: string,
  language: FundingLanguage,
) => {
  const sectionHeadingByLanguage: Record<FundingLanguage, string> = {
    ja: "## 現在のプロジェクト",
    en: "## Current Project",
  };

  const lines = markdownContent.split(/\r?\n/);
  const featuredHeading = sectionHeadingByLanguage[language];
  const featuredStartIndex = lines.findIndex(
    (line) => line.trim() === featuredHeading,
  );

  if (featuredStartIndex < 0) {
    return {
      featuredMarkdown: "",
      remainingMarkdown: markdownContent,
    };
  }

  let featuredEndIndex = lines.length;
  for (let index = featuredStartIndex + 1; index < lines.length; index += 1) {
    if (lines[index].startsWith("## ")) {
      featuredEndIndex = index;
      break;
    }
  }

  const featuredMarkdown = lines
    .slice(featuredStartIndex + 1, featuredEndIndex)
    .join("\n")
    .trim();
  const remainingMarkdown = [
    ...lines.slice(0, featuredStartIndex),
    ...lines.slice(featuredEndIndex),
  ]
    .join("\n")
    .trim();

  return {
    featuredMarkdown,
    remainingMarkdown,
  };
};

const parseFeaturedProjectMarkdown = (
  featuredMarkdown: string,
  language: FundingLanguage,
) => {
  const lines = featuredMarkdown.split(/\r?\n/).map((line) => line.trim());

  const grantLabelPattern =
    language === "ja"
      ? /^(?:[-*]\s*)?\*\*(?:補助事業番号|助成番号)\*\*:\s*(.+)$/
      : /^(?:[-*]\s*)?\*\*Grant Number\*\*:\s*(.+)$/i;
  const titleLabelPattern =
    language === "ja"
      ? /^(?:[-*]\s*)?\*\*(?:事業名|研究課題)\*\*:\s*(.+)$/
      : /^(?:[-*]\s*)?\*\*(?:Project Title|Research Topic)\*\*:\s*(.+)$/i;

  let grantNumber = "";
  let projectTitle = "";

  const detailLines = lines.filter((line) => {
    if (!line) {
      return false;
    }

    if (line.startsWith("### ")) {
      grantNumber = line.replace("### ", "").trim();
      return false;
    }

    const grantLabelMatch = line.match(grantLabelPattern);
    if (grantLabelMatch?.[1]) {
      grantNumber = grantLabelMatch[1].trim();
      return false;
    }

    const titleLabelMatch = line.match(titleLabelPattern);
    if (titleLabelMatch?.[1]) {
      projectTitle = titleLabelMatch[1].trim();
      return false;
    }

    return true;
  });

  return {
    grantNumber,
    projectTitle,
    detailsMarkdown: detailLines.join("\n").trim(),
  };
};

const getFundingContentHtmlByLanguage = async (contentKey: string) => {
  const contentByLanguage: FundingContentByLanguage = {
    ja: {
      featuredProject: {
        grantNumber: "",
        projectTitle: "",
        detailsHtml: "",
      },
      bodyHtml: "",
    },
    en: {
      featuredProject: {
        grantNumber: "",
        projectTitle: "",
        detailsHtml: "",
      },
      bodyHtml: "",
    },
  };

  await Promise.all(
    (Object.keys(markdownFileSuffixByLanguage) as Array<FundingLanguage>).map(
      async (language) => {
        const markdownPath = path.join(
          process.cwd(),
          "content",
          "research-funding",
          `${contentKey}-${markdownFileSuffixByLanguage[language]}.md`,
        );

        const markdownContent = transformImageAttributeListSyntax(
          await readFile(markdownPath, "utf8"),
        );
        const { featuredMarkdown, remainingMarkdown } =
          splitFeaturedProjectSection(markdownContent, language);
        const parsedFeaturedProject = parseFeaturedProjectMarkdown(
          featuredMarkdown,
          language,
        );

        const processedFeaturedDetails = parsedFeaturedProject.detailsMarkdown
          ? await remark()
              .use(html, { sanitize: false })
              .process(parsedFeaturedProject.detailsMarkdown)
          : "";
        const processedBodyContent = await remark()
          .use(html, { sanitize: false })
          .process(remainingMarkdown);

        contentByLanguage[language] = {
          featuredProject: {
            grantNumber: parsedFeaturedProject.grantNumber,
            projectTitle: parsedFeaturedProject.projectTitle,
            detailsHtml:
              typeof processedFeaturedDetails === "string"
                ? processedFeaturedDetails
                : processedFeaturedDetails.toString(),
          },
          bodyHtml: processedBodyContent.toString(),
        };
      },
    ),
  );

  return contentByLanguage;
};

// Create like this for next if it contain the api calling
export default async function FundingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const selectedResearchFund =
    ResearchFundDataTranslations[
      slug as keyof typeof ResearchFundDataTranslations
    ];

  if (!selectedResearchFund) {
    notFound();
  }

  let contentByLanguage;

  try {
    contentByLanguage = await getFundingContentHtmlByLanguage(
      selectedResearchFund.contentKey,
    );
  } catch {
    notFound();
  }

  return (
    <FundingDetailPage fundingId={slug} contentByLanguage={contentByLanguage} />
  );
}

export async function generateStaticParams() {
  // Return an array of objects, each with the 'slug' property matching the dynamic segment name
  return _.map(ResearchFundDataTranslations, (eachData: any) => ({
    slug: eachData.id, // Ensure the slug is a string
  }));
}
