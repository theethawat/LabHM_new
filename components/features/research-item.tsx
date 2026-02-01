import Link from "next/link";
import Image from "next/image";
import { Research } from "@/types";
import _ from "lodash";

export default function ResearchItem({
  language,
  research,
}: {
  language: "ja" | "en";
  research: Research;
}) {
  return (
    <Link href={`/research/projects/detail/${research.id}`} className="group">
      <div className="overflow-hidden h-full bg-white">
        <div className="relative h-48 overflow-hidden border-b border-gray-200">
          <Image
            src={research.images.overview_image || ""}
            alt={research?.en?.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {_.map(research?.tags, (eachTag, idx) => (
            <div
              key={idx}
              className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded z-10"
            >
              {_.startCase(eachTag)}
            </div>
          ))}
        </div>
        <div className="p-4">
          <h3 className="mt-2 font-medium group-hover:text-primary transition-colors">
            {research?.[language]?.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
