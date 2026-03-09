import dayjs from "dayjs";
import locale from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ja";
import "dayjs/locale/en";
import {
  BookOpenIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Publication,
  ConferencePaper,
  JournalPublication,
  PublicationType,
  PublicationTypeInfo,
} from "@/types";

dayjs.extend(locale);

export default function PublicationCard({
  paper,
  language,
}: {
  paper: Publication | ConferencePaper | JournalPublication;
  language: "ja" | "en";
}) {
  // カテゴリに応じた背景色を返す関数
  function getCategoryBgColor(category: string): string {
    switch (category) {
      case PublicationType.intConference:
        return "bg-blue-600";
      case PublicationType.domConference:
        return "bg-green-600";
      case PublicationType.journal:
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  }

  return (
    <div className="p-6 bg-white hover:bg-gray-50 transition-colors duration-200">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={`inline-block px-2.5 py-0.5 text-xs font-bold tracking-wide ${getCategoryBgColor(paper.type)} text-white`}
        >
          {PublicationTypeInfo?.[paper.type]?.[language]?.title || paper.type}
        </span>
        {"date" in paper && paper.date && (
          <span className="text-gray-500 text-sm">
            {dayjs(paper.date).locale(language).format("ll")}
          </span>
        )}
        {!("date" in paper) && paper.year && (
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            {paper.year}
          </span>
        )}
        {"place" in paper && paper.place && (
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            {paper.place[language] || ""}
          </span>
        )}{" "}
        {"journal" in paper && paper.year && (
          <span className="text-gray-500 text-sm flex items-center gap-1">
            <BookOpenIcon className="w-4 h-4" />
            {paper.journal}
          </span>
        )}
      </div>
      <div className="font-semibold text-lg mb-2 leading-snug">
        {paper.link ? (
          <Link
            href={paper.link}
            target="_blank"
            className="group inline-flex items-start gap-1.5 text-black hover:text-gray-600 transition-colors"
          >
            <h3 className="group-hover:underline underline-offset-2">
              {paper.title}
            </h3>
            {/* 一般リンクを一時的に無効化 - 将来的に復活予定 */}
            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 mt-1 text-gray-400" />
          </Link>
        ) : (
          paper.title
        )}
      </div>
      <p className="text-base text-gray-600 mb-1.5">{paper.authors}</p>

      {"conference" in paper && (
        <p className="text-base text-gray-500">{paper.conference}</p>
      )}

      {"journal" in paper && (
        <p className="text-base text-gray-500">
          Vol.{paper.volume}
          {paper?.issue && <span>, No.{paper.issue}</span>}
          {paper?.pages && <span>, pp.{paper.pages}</span>}
        </p>
      )}
    </div>
  );
}
