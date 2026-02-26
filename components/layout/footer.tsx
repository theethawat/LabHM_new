"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { getImagePath } from "@/lib/utils";

export default function Footer() {
  const { language } = useLanguage();

  // 言語に応じたフッターテキスト
  const footerText = {
    ja: {
      contact: "Contact",
      contactSubtitle: "お問い合わせ",
      contactDescription:
        "当研究室への配属・研究室見学の希望、\n取材や共同研究のご相談は\n下記よりお問い合わせください",
      contactButton: "お問い合わせはこちら",
      about: "研究室について",
      aboutLink: "研究室紹介",
      research: "研究",
      researchOverview: "研究概要",
      researchProjects: "研究プロジェクト",
      collaborations: "共同研究",
      news: "ニュース",
      newsList: "ニュース一覧",
      international: "国際連携",
      members: "メンバー",
      faculty: "教員・研究員",
      students: "学生",
      alumni: "卒業生",
      achievements: "研究業績",
      achievementsList: "研究業績一覧",
      career: "進学・就職先",
      contact2: "お問い合わせ",
      copyright: "© 2026 情報処理システム研究室. All rights reserved.",
    },
    en: {
      contact: "Contact",
      contactSubtitle: "Contact Us",
      contactDescription:
        "For lab assignments, lab tours,\ninterviews, or collaborative research inquiries,\nplease contact us below.",
      contactButton: "Contact Us",
      about: "About",
      aboutLink: "Lab Introduction",
      research: "Research",
      researchOverview: "Overview",
      researchProjects: "Projects",
      collaborations: "Collaborations",
      news: "News",
      newsList: "News List",
      international: "International",
      members: "Members",
      faculty: "Faculty",
      students: "Students",
      alumni: "Alumni",
      achievements: "Achievements",
      achievementsList: "Achievements List",
      career: "Career",
      contact2: "Contact",
      copyright:
        "© 2026 Information Processing Systems Laboratory. All rights reserved.",
    },
  };

  const text = footerText[language];

  return (
    <footer className="bg-black text-white">
      {/* コンタクトセクション */}
      <div className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={getImagePath("/images/contact.jpeg")}
            alt="コンタクト背景"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-baseline mb-6">
                <h2 className="text-4xl font-bold mr-4">{text.contact}</h2>
                <p className="text-xl">{text.contactSubtitle}</p>
              </div>
              <p className="mb-8 max-w-md whitespace-pre-line">
                {text.contactDescription}
              </p>
              <Link href="/contact">
                <div className="inline-block border border-white text-white hover:bg-white hover:text-black px-8 py-3 transition-all duration-300 transform hover:translate-y-[-2px]">
                  {text.contactButton}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* サイトマップセクションの前にロゴを追加 */}
      <div className="border-t border-gray-800 py-4">
        <div className="container">
          <div className="flex justify-start pt-4">
            <Link href="/">
              <Image
                src={getImagePath("/logo.png")}
                alt="THITHILAB"
                width={200}
                height={50}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* サイトマップセクション */}
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {/* 研究室について */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.about}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.aboutLink}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 研究 */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.research}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/research"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.researchOverview}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research/projects"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.researchProjects}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research/collaborations"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.collaborations}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* ニュース */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.news}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/news"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.newsList}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 国際連携 */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.international}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/international"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.international}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* メンバー */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.members}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/members#faculty"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.faculty}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members#students"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.students}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/members#alumni"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.alumni}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 研究業績 */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.achievements}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/achievements"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.achievementsList}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* 進学・就職先 */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.career}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/career"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.career}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* お問い合わせ */}
            <div>
              <h3 className="text-xs font-bold my-2">{text.contact2}</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight className="h-2 w-2 mr-1" />
                    <span>{text.contact2}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* コピーライトセクション */}
      <div className="border-t border-gray-800 py-8">
        <div className="container">
          <div className="relative">
            <div className="flex justify-center">
              <p className="text-sm text-gray-400">{text.copyright}</p>
            </div>
            <div className="absolute right-0 top-0 flex items-center space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.jka-cycle.jp/"
              >
                <Image
                  src={getImagePath("/images/JKA.png")}
                  alt="JKA"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://keirin.jp/pc/login"
              >
                <Image
                  src={getImagePath("/images/keirin.gif")}
                  alt="Keirin"
                  width={100}
                  height={50}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
