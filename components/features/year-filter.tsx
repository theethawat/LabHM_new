import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { achievementTranslation } from "@/translations/achievements";

export default function YearFilter({
  allYears,
  selectedYear,
  setSelectedYear,
  language,
}: {
  allYears: string[];
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  language: "ja" | "en";
}) {
  const t = achievementTranslation[language];
  return (
    <div className="flex justify-end mb-8">
      <div className="w-64">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger>
            <SelectValue placeholder={t.selectYear} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.allYear}</SelectItem>
            {allYears.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
                {t.yearSuffix}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
