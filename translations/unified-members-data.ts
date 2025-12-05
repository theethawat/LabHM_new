import { UnifiedMember } from "@/types";

// 教員・研究員データ（既存データを統一形式に変換）
export const unifiedFacultyMembers: UnifiedMember[] = [
  {
    id: "thithizin",
    name: "Thi Thi Zin（ティ ティ ズイン）",
    nameEn: "Thi Thi Zin",
    isAlumni: false,
    position: "教授（情報通信工学プログラム）",
    positionEn: "Professor (Information and Communication Engineering Program)",
    program: "faculty",
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
    program: "faculty",
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
    program: "faculty",
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
    program: "faculty",
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
    program: "faculty",
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
    program: "faculty",
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
    nameEn: "Rimi Nomoto",
    isAlumni: false,
    position: "秘書",
    positionEn: "Secretary",
    program: "faculty",
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

// 現在の学生データ（統一形式）
export const unifiedCurrentStudents: UnifiedMember[] = [
  // 博士課程
  {
    id: "tunncholwin",
    name: "Tunn Cho Lwin（ﾄｩﾝ ﾁｮ ﾚﾝ）",
    nameEn: "Tunn Cho Lwin",
    isAlumni: false,
    program: "doctoral",
    year: 3,
    image: "/images/no_image.png",
  },
  {
    id: "hashimoto",
    name: "橋本 幸枝",
    nameEn: "Sachie Hashimoto",
    isAlumni: false,
    program: "doctoral",
    year: 3,
    image: "/images/no_image.png",
  },
  {
    id: "sanchaintun",
    name: "San Chain Tun（ｻﾝ ﾁｪｲﾝ ﾄｩﾝ）",
    nameEn: "San Chain Tun",
    isAlumni: false,
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "bobomyint",
    name: "Bo Bo Myint（ﾎﾞｰ ﾎﾞｰ ﾐｪｴﾝﾄ）",
    nameEn: "Bo Bo Myint",
    isAlumni: false,
    program: "doctoral",
    year: 2,
    image: "/images/no_image.png",
  },

  // 修士課程
  {
    id: "ishikawa",
    name: "石川 太一",
    nameEn: "Taichi Ishikawa",
    isAlumni: false,
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "shiihara",
    name: "椎原 陽",
    nameEn: "Akira Shiihara",
    isAlumni: false,
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "shimizu",
    name: "清水 祐一朗",
    nameEn: "Yuichiro Shimizu",
    isAlumni: false,
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "pyaephyokyaw",
    name: "Pyae Phyo Kyaw（ﾋﾟｪ ﾋﾟｮ ﾁｮｰ）",
    nameEn: "Pyae Phyo Kyaw",
    isAlumni: false,
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "aungsithumoe",
    name: "Aung Si Thu Moe（ｱｳﾝ ｼ ﾄｩ ﾓｰ）",
    nameEn: "Aung Si Thu Moe",
    isAlumni: false,
    program: "masters",
    year: 2,
    image: "/images/no_image.png",
  },
  {
    id: "nakashima-m1",
    name: "中嶋 麗文",
    nameEn: "Reifumi Nakashima",
    isAlumni: false,
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    id: "nishimoto-m1",
    name: "西本 大地",
    nameEn: "Daichi Nishimoto",
    isAlumni: false,
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
    socialLinks: {
      github: "https://github.com/nishimoto265",
    },
  },
  {
    id: "murayama-m1",
    name: "村山 拓海",
    nameEn: "Takumi Murayama",
    isAlumni: false,
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    id: "araki-m1",
    name: "荒木 駿佑",
    nameEn: "Shunsuke Araki",
    isAlumni: false,
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },
  {
    id: "myoponeponeswe-m1",
    name: "Myo Pone Pone Swe（ﾐｮ ﾎﾟﾝ ﾎﾟﾝ ｽｴ）",
    nameEn: "Myo Pone Pone Swe",
    isAlumni: false,
    program: "masters",
    year: 1,
    image: "/images/no_image.png",
  },

  // 学部生
  {
    id: "sato",
    name: "佐藤 賢吾",
    nameEn: "Kengo Sato",
    isAlumni: false,
    program: "bachelor",
    lab: "椎屋研究室",
    labEn: "Shiiya Laboratory",
    image: "/images/no_image.png",
  },
  {
    id: "shibaharanaoki",
    name: "芝原直希",
    nameEn: "Naoki Shibahara",
    isAlumni: false,
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    id: "tokitonaoya",
    name: "時任尚哉",
    nameEn: "Naoya Tokito",
    isAlumni: false,
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    id: "matsushitanaohide",
    name: "松下直瑛",
    nameEn: "Naohide Matsushita",
    isAlumni: false,
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    id: "matsumotohiroki",
    name: "松本浩輝",
    nameEn: "Hiroki Matsumoto",
    isAlumni: false,
    program: "bachelor",
    image: "/images/no_image.png",
  },
  {
    id: "uchikurakoki",
    name: "内倉康喜",
    nameEn: "Koki Uchikura",
    isAlumni: false,
    program: "bachelor",
    lab: "Cho Nilar Phyo 研究室",
    labEn: "Cho Nilar Phyo Laboratory",
    image: "/images/no_image.png",
  },
  {
    id: "tanegatamiki",
    name: "種子田美葵",
    nameEn: "Miki Tanegata",
    isAlumni: false,
    program: "bachelor",
    lab: "椎屋研究室",
    labEn: "Shiiya Laboratory",
    image: "/images/no_image.png",
  },
];

// 卒業生データ（統一形式）
export const unifiedAlumniMembers: UnifiedMember[] = [
  // 令和5年度 修士課程
  {
    id: "chochoaye-r5",
    name: "Cho Cho Aye",
    nameEn: "Cho Cho Aye",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "Black Cow Detection and Tracking for Behavior Analysis",
      en: "Black Cow Detection and Tracking for Behavior Analysis",
    },
  },
  {
    id: "mayphyukhin-r5",
    name: "May Phyu Khin",
    nameEn: "May Phyu Khin",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "Cattle Pose Classification for Calving Time Prediction",
      en: "Cattle Pose Classification for Calving Time Prediction",
    },
  },
  {
    id: "sanchaintun-r5",
    name: "San Chain Tun",
    nameEn: "San Chain Tun",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "Cow Lameness Detection using Depth Image Analysis",
      en: "Cow Lameness Detection using Depth Image Analysis",
    },
  },
  {
    id: "sularbmon-r5",
    name: "Su Larb Mon",
    nameEn: "Su Larb Mon",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "Automatic Cattle Identification Using RGB Images",
      en: "Automatic Cattle Identification Using RGB Images",
    },
  },
  {
    id: "kamahori-r5",
    name: "釜堀 慶次郎",
    nameEn: "Keijiro Kamahori",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "バランスタスクを用いた高齢者の転倒リスク評価に関する研究",
      en: "Study on Fall Risk Assessment for the Elderly Using Balance Tasks",
    },
  },
  {
    id: "onitsuka-r5",
    name: "鬼塚 翼",
    nameEn: "Tsubasa Onitsuka",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "画像処理技術を用いた牛の跛行検知に関する研究",
      en: "Study on Lameness Detection in Cattle Using Image Processing Technology",
    },
  },

  // 令和5年度 学部生
  {
    id: "nagano-r5",
    name: "永野 流磨",
    nameEn: "Ryuma Nagano",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "Flaskを用いたファブリー病の振戦運動評価の研究",
      en: "Study on Tremor Movement Evaluation of Fabry Disease Using Flask",
    },
  },
  {
    id: "takaoka-r5",
    name: "高岡 柚貴",
    nameEn: "Yuki Takaoka",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
      en: "Study on Individual Identification Using Walking Videos of Cattle with RGB Camera",
    },
  },
  // 以下、他の卒業生データも同様に追加...
  // ここでは例示として数名のみ記載、実際には全卒業生データを統一形式で追加
];

// 全メンバーを統合した配列
export const allUnifiedMembers: UnifiedMember[] = [
  ...unifiedFacultyMembers,
  ...unifiedCurrentStudents,
  ...unifiedAlumniMembers,
];

// フィルタリング関数
export function getActiveMembers(): UnifiedMember[] {
  return allUnifiedMembers.filter((member) => !member.isAlumni);
}

export function getAlumniMembers(): UnifiedMember[] {
  return allUnifiedMembers.filter((member) => member.isAlumni);
}

export function getFacultyMembers(): UnifiedMember[] {
  return allUnifiedMembers.filter(
    (member) => member.program === "faculty" && !member.isAlumni
  );
}

export function getStudentsByProgram(
  program: "doctoral" | "masters" | "bachelor"
): UnifiedMember[] {
  return allUnifiedMembers.filter(
    (member) => member.program === program && !member.isAlumni
  );
}

export function getAlumniByYear(academicYear: string): UnifiedMember[] {
  return allUnifiedMembers.filter(
    (member) => member.isAlumni && member.academicYear === academicYear
  );
}
