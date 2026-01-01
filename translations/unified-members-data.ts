import { Member, DegreeType } from "@/types";

// 教員・研究員データ（既存データを統一形式に変換）
export const unifiedFacultyMembers: Member[] = [
  {
    id: "thithizin",
    name: "Thi Thi Zin（ティ ティ ズイン）",
    nameEn: "Thi Thi Zin",
    isAlumni: false,
    position: "教授（情報通信工学プログラム）",
    positionEn: "Professor (Information and Communication Engineering Program)",
    program: DegreeType.Faculty,
    image: "/images/thithizin.jpg",
    background: {
      ja: [
        "1995年：ヤンゴン大学（ミャンマー）Bachelor of Science（優等）",
        "1999年：ヤンゴンコンピュータ大学（ミャンマー）Master of Information Science",
        "2004年：大阪市立大学 修士（工学）",
        "2007年：大阪市立大学 博士（工学）",
        "2007年～2009年：日本学術振興会特別研究員",
        "現在：宮崎大学大学院工学研究科 教授",
      ],
      en: [
        "1995: Bachelor of Science (Honors), University of Yangon (Myanmar)",
        "1999: Master of Information Science, University of Computer Studies, Yangon (Myanmar)",
        "2004: Master of Engineering, Osaka City University",
        "2007: Doctor of Engineering, Osaka City University",
        "2007-2009: JSPS Research Fellow",
        "Present: Professor, Graduate School of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "情報通信、知覚情報処理、画像処理、情報通信、データベース、ライフサイエンス、動物生産科学",
      en: "Information and Communication, Perceptual Information Processing, Image Processing, Database, Life Science, Animal Production Science",
    },
  },
  {
    id: "shiiya",
    name: "椎屋 和久",
    nameEn: "Kazuhisa Shiiya",
    isAlumni: false,
    position: "助教（情報通信工学プログラム）",
    positionEn:
      "Assistant Professor (Information and Communication Engineering Program)",
    program: DegreeType.Faculty,
    image: "/images/no_image.png",
    background: {
      ja: [
        "1994年：宮崎大学工学部電気工学科 卒業",
        "2008年：熊本大学大学院自然科学研究科 博士課程修了",
        "宮崎大学工学部 技術職員、電気システム工学科 助手、助教を経て現職",
        "現在：宮崎大学工学部 工学科 助教",
      ],
      en: [
        "1994: Graduated from the Department of Electrical Engineering, Faculty of Engineering, University of Miyazaki",
        "2008: Completed the Doctoral Program at the Graduate School of Science and Technology, Kumamoto University",
        "Currently holds the position of Technical Staff, Assistant, and Assistant Professor in the Department of Electrical Systems Engineering, Faculty of Engineering, University of Miyazaki",
        "Present: Assistant Professor, Department of Engineering, Faculty of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "画像認識、デジタル画像処理",
      en: "Image Recognition, Digital Image Processing",
    },
  },
  {
    id: "pyketin",
    name: "Pyke Tin（パイ ティン）",
    nameEn: "Pyke Tin",
    isAlumni: false,
    position: "宮崎大学名誉博士（宮崎大学国際連携センター客員教授）",
    positionEn:
      "Honorary Doctor, University of Miyazaki (Visiting Professor, International Collaboration Center)",
    program: DegreeType.Faculty,
    image: "/images/no_image.png",
    background: {
      ja: [
        "1965年：マンダレー大学（ミャンマー）Bachelor of Science（優等）",
        "1970年：ラングーン大学（ミャンマー）Master of Information Science",
        "1976年：モナシュ大学（オーストラリア）Ph.D. in stochastic processes and their applications",
        "元：ヤンゴンコンピュータ大学 学長、計算数学教授",
        "現在：宮崎大学国際連携センター 客員教授",
      ],
      en: [
        "1965: Bachelor of Science (Honors), University of Mandalay (Myanmar)",
        "1970: Master of Information Science, University of Rangoon (Myanmar)",
        "1976: Ph.D. in stochastic processes and their applications, Monash University (Australia)",
        "Former: Rector, University of Computer Studies, Yangon; Professor of Computational Mathematics",
        "Present: Visiting Professor, International Collaboration Center, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "画像検索エンジン、待ち行列システム、コンピュータビジョン、確率過程とその画像処理への応用",
      en: "Image Search Engine, Queueing System, Computer Vision, Stochastic Processes and Their Applications to Image Processing",
    },
  },
  {
    id: "chonilarphyo",
    name: "Cho Nilar Phyo（チョ ニラ ピョ）",
    nameEn: "Cho Nilar Phyo",
    isAlumni: false,
    position: "助教（情報通信工学プログラム）",
    positionEn:
      "Assistant Professor (Information and Communication Engineering Program)",
    program: DegreeType.Faculty,
    image: "/images/Cho_Nilar_Phyo.jpg",
    background: {
      ja: [
        "2010年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士",
        "2011年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス学士（優等）",
        "2014年：ヤンゴンコンピュータ大学（ミャンマー）コンピュータサイエンス修士",
        "2019年：宮崎大学大学院農学工学総合研究科 博士号",
        "現在：宮崎大学大学院工学研究科 助教",
      ],
      en: [
        "2010: Bachelor of Computer Science, University of Computer Studies, Yangon (Myanmar)",
        "2011: Bachelor of Computer Science (Honors), University of Computer Studies, Yangon (Myanmar)",
        "2014: Master of Computer Science, University of Computer Studies, Yangon (Myanmar)",
        "2019: Ph.D., Graduate School of Agriculture and Engineering, University of Miyazaki",
        "Present: Assistant Professor, Graduate School of Engineering, University of Miyazaki",
      ],
    },
    researchFields: {
      ja: "人間の行動分析、医療診断のためのAI支援システム、リアルタイム映像監視システム",
      en: "Human Behavior Analysis, AI-assisted Systems for Medical Diagnosis, Real-time Video Surveillance Systems",
    },
  },
  {
    id: "monaung",
    name: "Mon Aung（ﾓﾝ ｱｳﾝ）",
    nameEn: "Mon Aung",
    isAlumni: false,
    position: "研究員",
    positionEn: "Researcher",
    program: DegreeType.Faculty,
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
  {
    id: "nyizawaung",
    name: "Nyi Zaw Aung（ﾆｰ ｽﾞｫｰ ｱｳﾝ）",
    nameEn: "Nyi Zaw Aung",
    isAlumni: false,
    position: "研究員",
    positionEn: "Researcher",
    program: DegreeType.Faculty,
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
  {
    id: "nomoto",
    name: "野元 理美",
    nameEn: "Satomi Nomoto",
    isAlumni: false,
    position: "秘書",
    positionEn: "Secretary",
    program: DegreeType.Faculty,
    image: "/images/no_image.png",
    background: {
      ja: [],
      en: [],
    },
    researchFields: {
      ja: "",
      en: "",
    },
  },
];

// 全メンバーを統合した配列
export const allUnifiedMembers: Member[] = [...unifiedFacultyMembers];

export function getFacultyMembers(): Member[] {
  return allUnifiedMembers.filter(
    (member) => member.program === "faculty" && !member.isAlumni
  );
}
