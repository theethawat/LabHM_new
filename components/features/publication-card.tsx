import dayjs from "dayjs";
import locale from "dayjs/plugin/localizedFormat";
import "dayjs/locale/ja";
import "dayjs/locale/en";
import {
  ArrowTopRightOnSquareIcon,
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
    <div className="p-6 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-block px-2 py-1 text-xs font-medium ${getCategoryBgColor(paper.type)} text-white rounded`}
        >
          {PublicationTypeInfo?.[paper.type]?.[language]?.title || paper.type}
        </span>
        {"date" in paper && (
          <span className="text-gray-500 text-sm">
            {dayjs(paper.date).locale(language).format("ll")}
          </span>
        )}
        {"place" in paper && (
          <span className="text-gray-500 text-sm">
            <MapPinIcon className="w-4 h-4 inline-block mr-1 mb-1" />
            {paper.place}
          </span>
        )}
      </div>
      <div className="font-bold text-lg mb-2">
        {paper.link ? (
          <Link
            href={paper.link}
            target="_blank"
            className="text-primary hover:text-gray-700"
          >
            <div className="flex items-baseline">
              <h3>{paper.title}</h3>
              {/* 一般リンクを一時的に無効化 - 将来的に復活予定 */}
              <span className="ml-2">
                <ExternalLink className="h-4 w-4 text-gray-500" />
              </span>
            </div>
          </Link>
        ) : (
          paper.title
        )}
      </div>
      <p className="text-gray-700 mb-2">{paper.authors}</p>

      {"conference" in paper && (
        <p className="text-gray-500 italic">{paper.conference}</p>
      )}
    </div>
  );
}
