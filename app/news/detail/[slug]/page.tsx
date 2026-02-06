import NewsPage from "./news-page";
import { convertSpreadsheetToNews, News as NewsType } from "@/types";

// Generate static params for all news IDs
export async function generateStaticParams() {
  // Fetch all news to get their IDs
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllNews&page=1&size=1000`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      console.warn("Failed to fetch news for static generation");
      return [];
    }

    const jsonResult = await res.json();
    const newsList: NewsType[] = jsonResult?.rows?.map((row: any) =>
      convertSpreadsheetToNews(row),
    ) || [];

    return newsList.map((news) => ({
      slug: news.id,
    }));
  } catch (error) {
    console.warn("Error generating static params for news:", error);
    return [];
  }
}

export default async function News({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getOneNews&id=${slug}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();

  const selectedNews: NewsType = convertSpreadsheetToNews(jsonResult);

  return (
    <div>
      <NewsPage news={selectedNews} />
    </div>
  );
}
