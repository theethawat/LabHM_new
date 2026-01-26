import { News, NewsTagInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ja";
import { getTagBgColor } from "@/lib/news-utils";
import { getImagePath } from "@/lib/utils";

dayjs.extend(LocalizedFormat);

export default function NewsItem({
  newsItem,
  language,
}: {
  newsItem: News;
  language: "ja" | "en";
}) {
  return (
    <div className="overflow-hidden h-full bg-white border-b border-gray-200">
      <div
        className={`relative h-48 overflow-hidden ${newsItem.image && newsItem.image.trim() !== "" ? "" : "bg-gray-50 flex items-center justify-center"}`}
      >
        {newsItem.link ? (
          newsItem.isExternal ? (
            <a
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <Image
                src={
                  newsItem.image && newsItem.image.trim() !== ""
                    ? getImagePath(newsItem.image)
                    : getImagePath("/logo.png")
                }
                alt={newsItem?.[language]?.title || ""}
                fill
                className={`${newsItem.image && newsItem.image.trim() !== "" ? "object-cover" : "object-contain p-4"} transition-transform group-hover:scale-105`}
              />
            </a>
          ) : (
            <Link href={newsItem.link} className="block w-full h-full">
              <Image
                src={
                  newsItem.image && newsItem.image.trim() !== ""
                    ? getImagePath(newsItem.image)
                    : getImagePath("/logo.png")
                }
                alt={newsItem?.[language]?.title || ""}
                fill
                className={`${newsItem.image && newsItem.image.trim() !== "" ? "object-cover" : "object-contain p-4"} transition-transform group-hover:scale-105`}
              />
            </Link>
          )
        ) : (
          <Image
            src={
              newsItem.image && newsItem.image.trim() !== ""
                ? getImagePath(newsItem.image)
                : getImagePath("/logo.png")
            }
            alt={newsItem?.[language]?.title || ""}
            fill
            className={`${newsItem.image && newsItem.image.trim() !== "" ? "object-cover" : "object-contain p-4"}`}
          />
        )}
        <div
          className={`absolute top-2 left-2 ${getTagBgColor(newsItem.tag)} text-white text-xs px-2 py-1 rounded pointer-events-none`}
        >
          {NewsTagInfo?.[newsItem.tag]?.[language] || newsItem.tag}
        </div>
        <div className="absolute top-2 right-2 bg-white text-gray-800 text-xs px-2 py-1 rounded pointer-events-none">
          {dayjs(newsItem.date).locale(language).format("ll")}
        </div>
      </div>
      <div className="p-4">
        {newsItem.link ? (
          newsItem.isExternal ? (
            <a
              href={newsItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium group-hover:text-primary transition-colors block"
            >
              <h3 className="line-clamp-2 font-medium">
                {newsItem?.[language]?.title}
              </h3>
            </a>
          ) : (
            <Link
              href={newsItem.link}
              className="font-medium group-hover:text-primary transition-colors block"
            >
              <h3 className="line-clamp-2 font-medium">
                {newsItem?.[language]?.title}
              </h3>
            </Link>
          )
        ) : (
          <h3 className="line-clamp-2 font-medium">
            {newsItem?.[language]?.title}
          </h3>
        )}
      </div>
    </div>
  );
}
