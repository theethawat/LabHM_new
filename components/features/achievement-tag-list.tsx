import { PublicationTypeInfo, PublicationType } from "@/types";
import _ from "lodash";
import Link from "next/link";

type TagInfoInside = {
  ja: { title: string };
  en: { title: string };
  link: string;
};

export default function AchievementTagList({
  activeTag,
  language,
}: {
  activeTag: PublicationType;
  language: "ja" | "en";
}) {
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
            {_.map(
              PublicationTypeInfo,
              (tag: TagInfoInside, key: PublicationType) => (
                <Link
                  href={`/achievements/${tag.link}`}
                  key={key}
                  className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                    activeTag === key
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {tag?.[language].title}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
