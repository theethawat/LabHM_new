"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { getImagePath, getLinkPath } from "@/lib/utils";
import {
  awards,
  domesticConferences,
  internationalConferences,
} from "@/translations";

// useState部分を更新して、メニューの開閉状態を管理
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  // 2. 検索処理を行う関数を追加
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 検索クエリがある場合は検索ページに遷移
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  // 言語切り替え処理
  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja");
  };

  // Handle To Location with Along with Menu Close
  const handleGoLocation = (url: string) => {
    window.location.href = url;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 言語に応じたメニュー項目
  const menuItems = {
    ja: {
      about: "研究室について",
      research: "研究",
      researchOverview: "研究概要",
      researchProjects: "研究プロジェクト",
      collaborations: "共同研究",
      news: "ニュース",
      international: "国際連携",
      members: "メンバー",
      faculty: "教員・研究員",
      students: "学生",
      alumni: "卒業生",
      achievements: "研究業績",
      career: "進学・就職先",
      contact: "お問い合わせ",
      search: "検索",
      researchFund: "研究補助",
      journalPapers: "論文一覧",
      internationalConferences: "国際会議発表",
      domesticConferences: "国内会議発表",
      thesis: "論文・著書",
      awardsAndMediaCoverage: "受賞・メディア掲載",
    },
    en: {
      about: "About",
      research: "Research",
      researchOverview: "Overview",
      researchProjects: "Projects",
      collaborations: "Collaborations",
      news: "News",
      international: "International",
      members: "Members",
      faculty: "Faculty",
      students: "Students",
      alumni: "Alumni",
      achievements: "Achievements",
      career: "Career",
      contact: "Contact",
      search: "Search",
      researchFund: "Research Funding",
      journalPapers: "Journal Papers",
      internationalConferences: "International Conferences",
      domesticConferences: "Domestic Conferences",
      thesis: "Theses & Books",
      awardsAndMediaCoverage: "Awards & Media Coverage",
    },
  };

  const currentMenu = menuItems[language];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-white",
        isScrolled && "shadow-sm",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={getImagePath("/logo.png")}
            alt="ロゴ"
            width={180}
            height={180}
            className="object-contain"
          />
        </Link>

        {/* デスクトップナビゲーション */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            href="/about"
            className={cn(
              "px-3 py-2 text-sm hover:text-primary",
              pathname === "/about" && "text-primary",
            )}
          >
            {currentMenu.about}
          </Link>

          {/* 研究ドロップダウン */}
          <div className="relative group">
            <div
              className={cn(
                "px-3 py-2 text-sm hover:text-primary flex items-center cursor-pointer",
                (pathname === "/research" ||
                  pathname.startsWith("/research/")) &&
                  "text-primary",
              )}
            >
              {currentMenu.research} <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            <div className="absolute left-0 top-full w-48 bg-white shadow-md rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href="/research"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.researchOverview}
              </Link>
              <Link
                href="/research/projects"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.researchProjects}
              </Link>
              <Link
                href="/research/collaborations"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.collaborations}
              </Link>{" "}
              <Link
                href="/research/funding"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.researchFund}
              </Link>
            </div>
          </div>

          <Link
            href="/news"
            className={cn(
              "px-3 py-2 text-sm hover:text-primary",
              pathname === "/news" && "text-primary",
            )}
          >
            {currentMenu.news}
          </Link>

          <Link
            href="/international"
            className={cn(
              "px-3 py-2 text-sm hover:text-primary",
              pathname === "/international" && "text-primary",
            )}
          >
            {currentMenu.international}
          </Link>

          {/* メンバードロップダウン */}
          <div className="relative group">
            <div
              className={cn(
                "px-3 py-2 text-sm hover:text-primary flex items-center cursor-pointer",
                pathname.startsWith("/members") && "text-primary",
              )}
            >
              {currentMenu.members} <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            <div className="absolute left-0 top-full w-48 bg-white shadow-md rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href={"/members/faculty"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                // onClick={(e) => handleGoLocation("/members/faculty")}
              >
                {currentMenu.faculty}
              </Link>
              <Link
                href={"/members/students"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                // onClick={(e) => handleGoLocation("/members/students")}
              >
                {currentMenu.students}
              </Link>
              <Link
                href={"/members/alumni"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                // TODO: Remove it
                // onClick={(e) => handleGoLocation("/members/alumni")}
              >
                {currentMenu.alumni}
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div
              className={cn(
                "px-3 py-2 text-sm hover:text-primary flex items-center cursor-pointer",
                pathname.startsWith("/achievements") && "text-primary",
              )}
            >
              {currentMenu.achievements}{" "}
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            <div className="absolute left-0 top-full w-48 bg-white shadow-md rounded-b-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href={"/achievements/awards"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.awardsAndMediaCoverage}
              </Link>
              <Link
                href={"/achievements/journals"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.journalPapers}
              </Link>
              <Link
                href={"/achievements/international"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.internationalConferences}
              </Link>
              <Link
                href={"/achievements/domestic"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.domesticConferences}
              </Link>{" "}
              <Link
                href={"/achievements/thesis"}
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {currentMenu.thesis}
              </Link>
            </div>
          </div>

          <Link
            href="/career"
            className={cn(
              "px-3 py-2 text-sm hover:text-primary",
              pathname === "/career" && "text-primary",
            )}
          >
            {currentMenu.career}
          </Link>

          <Link
            href="/contact"
            className={cn(
              "px-3 py-2 text-sm hover:text-primary",
              pathname === "/contact" && "text-primary",
            )}
          >
            {currentMenu.contact}
          </Link>
        </div>

        {/* 検索と言語切り替え */}
        <div className="flex items-center space-x-2">
          {/* 3. デスクトップの検索部分を更新 */}
          <div className="hidden md:block relative">
            <form onSubmit={handleSearch}>
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={currentMenu.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 w-40 rounded-full bg-gray-100 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </form>
          </div>

          {/* モバイルメニューボタン - 言語切り替えの左に配置 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex items-center space-x-1">
            <button
              className={`text-xs px-1 ${language === "ja" ? "font-bold" : ""}`}
              onClick={() => setLanguage("ja")}
            >
              JA
            </button>
            <span className="text-gray-300">/</span>
            <button
              className={`text-xs px-1 ${language === "en" ? "font-bold" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* モバイルナビゲーション */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-64 bg-white shadow-md z-50">
          <div className="flex flex-col p-4">
            <Link
              href="/about"
              className={cn(
                "px-3 py-3 text-sm border-b text-right",
                pathname === "/about" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.about}
            </Link>

            <div className="px-3 py-3 text-sm border-b">
              <div className="flex justify-between items-center">
                <ChevronDown className="h-4 w-4" />
                <span>{currentMenu.research}</span>
              </div>
              <div className="pr-4 mt-2 space-y-2 text-right">
                <Link
                  href="/research"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentMenu.researchOverview}
                </Link>
                <Link
                  href="/research/projects"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentMenu.researchProjects}
                </Link>
                <Link
                  href="/research/collaborations"
                  className="block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {currentMenu.collaborations}
                </Link>
              </div>
            </div>

            <Link
              href="/news"
              className={cn(
                "px-3 py-3 text-sm border-b text-right",
                pathname === "/news" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.news}
            </Link>

            <Link
              href="/international"
              className={cn(
                "px-3 py-3 text-sm border-b text-right",
                pathname === "/international" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.international}
            </Link>

            <div className="px-3 py-3 text-sm border-b">
              <div className="flex justify-between items-center">
                <ChevronDown className="h-4 w-4" />
                <span>{currentMenu.members}</span>
              </div>
              <div className="pr-4 mt-2 space-y-2 text-right">
                <Link
                  href={"/members/faculty"}
                  className="block py-1 text-sm"
                  onClick={(e) => {
                    handleGoLocation("/members/faculty");
                    setIsMenuOpen(false);
                  }}
                >
                  {currentMenu.faculty}
                </Link>
                <Link
                  href={"/members/students"}
                  className="block py-1 text-sm"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                  }}
                >
                  {currentMenu.students}
                </Link>
                <Link
                  href={"/members/alumni"}
                  className="block py-1 text-sm"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                  }}
                >
                  {currentMenu.alumni}
                </Link>
              </div>
            </div>

            <Link
              href="/achievements"
              className={cn(
                "px-3 py-3 text-sm border-b text-right",
                pathname === "/achievements" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.achievements}
            </Link>

            <Link
              href="/career"
              className={cn(
                "px-3 py-3 text-sm border-b text-right",
                pathname === "/career" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.career}
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3 py-3 text-sm text-right",
                pathname === "/contact" && "text-primary",
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {currentMenu.contact}
            </Link>
          </div>
          {/* 4. モバイルの検索部分も更新 */}
          <div className="flex justify-end mt-4 px-3 pb-4">
            <div className="relative">
              <form onSubmit={handleSearch}>
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder={currentMenu.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-8 w-full rounded-full bg-gray-100 pl-8 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
