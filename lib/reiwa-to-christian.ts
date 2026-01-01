import _ from "lodash";

export const reiwaToChristianYearNumber = (reiwaYear: number): number => {
  return reiwaYear + 2018;
};

export const reiwaYearNameToChristianYearName = (
  reiwaYearName: string
): string => {
  if (!reiwaYearName || _.isEmpty(reiwaYearName)) {
    return "";
  }
  if (reiwaYearName === "令和元年度") {
    return "2019年度";
  }
  const match = reiwaYearName.match(/令和(\d+)年度/);
  if (match) {
    const reiwaYear = parseInt(match[1], 10);
    const christianYear = reiwaToChristianYearNumber(reiwaYear);
    return `${christianYear}年度`;
  }
  return reiwaYearName; // マッチしない場合はそのまま返す
};
