import { NewsTagInfo, NewsTag } from "@/types";
import _ from "lodash";

type TagInfoInside = {
  ja: string;
  en: string;
};

export default function NewsTagList({
  activeTag,
  setActiveTag,
  language,
}: {
  activeTag: NewsTag;
  setActiveTag: (tag: NewsTag) => void;
  language: "ja" | "en";
}) {
  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
            {_.map(NewsTagInfo, (tag: TagInfoInside, key: NewsTag) => (
              <button
                key={key}
                onClick={() => setActiveTag(key)}
                className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                  activeTag === key
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tag?.[language]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
