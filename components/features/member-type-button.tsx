import { membersTranslations } from "@/translations/members";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export default function MemberTypeButton({ activeTab }: { activeTab: string }) {
  const { language } = useLanguage();
  const t = membersTranslations[language];

  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-2 max-w-4xl justify-center">
          <Link
            href="/members/faculty"
            className={`px-4 py-2 text-sm border rounded-full transition-colors ${
              activeTab === "faculty"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {t.tabs.faculty}
          </Link>
          <Link
            href="/members/students"
            className={`px-4 py-2 text-sm border rounded-full transition-colors ${
              activeTab === "students"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {t.tabs.students}
          </Link>
          <Link
            href="/members/alumni"
            className={`px-4 py-2 text-sm border rounded-full transition-colors ${
              activeTab === "alumni"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {t.tabs.alumni}
          </Link>
        </div>
      </div>
    </div>
  );
}
