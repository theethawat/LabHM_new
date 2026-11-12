import type { Metadata } from "next";
import NewsPage from "./news-page";
import { convertSpreadsheetToNews, News as NewsType } from "@/types";
import { metadataTranslations } from "@/translations/metadata";
import { cache } from "react";

async function fetchJsonOrNull<T>(url: string): Promise<T | null> {
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  try {
    const jsonResult = await response.json();
    return jsonResult as T;
  } catch (error) {
    console.warn(`Invalid JSON response for ${url}`, error);
    return null;
  }
}

const getNews = cache(async (slug: string): Promise<any[] | null> =>
  fetchJsonOrNull<any[]>(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getOneNews&id=${slug}`,
  ),
);

export default async function News({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const jsonResult = await getNews(slug);

  const selectedNews: NewsType = convertSpreadsheetToNews(jsonResult);

  return (
    <div>
      <NewsPage news={selectedNews} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const news = await getNews(slug);
  const selectedNews: NewsType = convertSpreadsheetToNews(news);

  if (!news) {
    return {};
  }

  const title = `${selectedNews?.ja?.title || ""}- ${metadataTranslations.ja.title}`;

  return { title };
}

export async function generateStaticParams() {
  // Fetch data from an API, database, or a local source
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllNews&page=${1}&size=1000`,
  );

  const jsonResult = await res.json();

  // Return an array of objects, each with the 'slug' property matching the dynamic segment name
  return jsonResult?.rows?.map((eachData: any) => ({
    slug: eachData.id.toString(), // Ensure the slug is a string
  }));
}
