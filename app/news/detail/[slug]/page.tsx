import NewsPage from "./news-page";
import { convertSpreadsheetToNews, News as NewsType } from "@/types";

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
