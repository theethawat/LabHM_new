import NewsPage from "./news-page";
import { News as NewsType, convertSpreadsheetToNews } from "@/types";

export default async function News({
  searchParams,
}: {
  searchParams:
    | Promise<{ page?: string; tag?: string }>
    | { page?: string; tag?: string };
}) {
  // Await searchParams if it's a Promise
  const params = await searchParams;

  console.log("New Search Params:", params);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_SCRIPT_DATA}?functionName=getAllNews&page=${params?.page || 1}&size=20&tag=${params?.tag || ""}`,
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const jsonResult = await res.json();

  const newsList: NewsType[] = jsonResult?.rows?.map((row: any) =>
    convertSpreadsheetToNews(row),
  );

  console.log("Json Result:", jsonResult);
  return (
    <NewsPage
      newList={newsList}
      totalPage={jsonResult?.allPage}
      currPage={jsonResult?.currPage}
    />
  );
}
