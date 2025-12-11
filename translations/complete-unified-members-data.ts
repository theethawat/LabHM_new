import {
  type UnifiedMember,
  unifiedFacultyMembers,
  unifiedCurrentStudents,
} from "./unified-members-data";

// 型の再エクスポート
export type { UnifiedMember };

// 完全な卒業生データ（統一形式）
export const completeUnifiedAlumniMembers: UnifiedMember[] = [
  // ========= 令和6年度 =========
  // 博士課程
  {
    id: "yehtet-r6",
    name: "Ye Htet",
    nameEn: "Ye Htet",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：A Study on Real-time Elderly Monitoring....Elderly Care Center",
      en: "Research: A Study on Real-time Elderly Monitoring....Elderly Care Center",
    },
  },
  {
    id: "sumyatnoe-r6",
    name: "Su Myat Noe（ｽ ﾐｬ ﾉｰ）",
    nameEn: "Su Myat Noe",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：A Study on Deep Learning-based Automated Detection and Tracking of Estrus Behavior in Black Cattle",
      en: "Research: A Study on Deep Learning-based Automated Detection and Tracking of Estrus Behavior in Black Cattle",
    },
  },
  {
    id: "waihninmg-r6",
    name: "Wai Hnin Eaindrar Mg（ｳｪｲ ﾆﾝ ｴﾝﾄﾞﾗﾏ）",
    nameEn: "Wai Hnin Eaindrar Mg",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：A Study on Real-time Cattle Monitoring System for Calving Time Prediction",
      en: "Research: A Study on Real-time Cattle Monitoring System for Calving Time Prediction",
    },
  },

  // 修士課程
  {
    id: "tanno-r6",
    name: "丹野 龍晟",
    nameEn: "Ryusei Tanno",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：歩行情報による歩行状態の解析と分類に関する研究",
      en: "Research: Analysis and Classification of Walking States Using Walking Information",
    },
  },
  {
    id: "tsukuba-r6",
    name: "筑波 真矢",
    nameEn: "Shinya Tsukuba",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：歩行中の乳牛に対するBCS評価の自動化に関する研究",
      en: "Research: Automation of BCS Evaluation for Cows During Walking",
    },
  },
  {
    id: "nishiyama-r6",
    name: "西山 孟人",
    nameEn: "Taketo Nishiyama",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた子牛の行動解析に関する研究",
      en: "Research: Behavior Analysis of Calf Using Image Processing Technology",
    },
  },

  // 学士課程
  {
    id: "kawazoe-r6",
    name: "川添 慎吉",
    nameEn: "Shinkichi Kawazoe",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いたウナギ養殖における水の三要素の解析",
      en: "Research: Analysis of Water Three Elements in Eel Farming Using Image Processing Technology",
    },
  },
  {
    id: "nakashima-r6",
    name: "中嶋 麗文",
    nameEn: "Reifumi Nakashima",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：深度カメラを用いた高齢者の行動推定に関する研究",
      en: "Research: Behavior Estimation of the Elderly Using Depth Camera",
    },
  },
  {
    id: "nishimoto-r6",
    name: "西本 大地",
    nameEn: "Daichi Nishimoto",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：RGBカメラと深層学習を用いた子牛郡の行動解析",
      en: "Research: Behavior Analysis of Calf Using RGB Camera and Deep Learning",
    },
  },
  {
    id: "murayama-r6",
    name: "村山 拓海",
    nameEn: "Takumi Murayama",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の難産予測のための特徴量抽出に関する研究",
      en: "Research: Feature Extraction for Calf Difficulty Prediction Using Image Processing Technology",
    },
  },
  {
    id: "araki-r6",
    name: "荒木 駿佑",
    nameEn: "Shunsuke Araki",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2024",
    academicYear: "令和6年度",
    academicYearEn: "2024 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：深度カメラを用いた牛の体重推定",
      en: "Research: Weight Estimation of Cattle Using Depth Camera",
    },
  },

  // ========= 令和5年度 =========
  // 修士課程
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
      ja: "研究内容：Black Cow Detection and Tracking for Behavior Analysis",
      en: "Research: Black Cow Detection and Tracking for Behavior Analysis",
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
      ja: "研究内容：Cattle Pose Classification for Calving Time Prediction",
      en: "Research: Cattle Pose Classification for Calving Time Prediction",
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
      ja: "研究内容：Cow Lameness Detection using Depth Image Analysis",
      en: "Research: Cow Lameness Detection using Depth Image Analysis",
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
      ja: "研究内容：Automatic Cattle Identification Using RGB Images",
      en: "Research: Automatic Cattle Identification Using RGB Images",
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
      ja: "研究内容：バランスタスクを用いた高齢者の転倒リスク評価に関する研究",
      en: "Research: Study on Fall Risk Assessment for the Elderly Using Balance Tasks",
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
      ja: "研究内容：画像処理技術を用いた牛の跛行検知に関する研究",
      en: "Research: Study on Lameness Detection in Cattle Using Image Processing Technology",
    },
  },

  // 学士課程
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
      ja: "研究内容：Flaskを用いたファブリー病の振戦運動評価の研究",
      en: "Research: Study on Tremor Movement Evaluation of Fabry Disease Using Flask",
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
      ja: "研究内容：RGBカメラによる牛の歩行動画を用いた個体識別に関する研究",
      en: "Research: Study on Individual Identification Using Walking Videos of Cattle with RGB Camera",
    },
  },
  {
    id: "yamamoto-r5",
    name: "山元 太陽",
    nameEn: "Taiyo Yamamoto",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：RGBカメラを用いた行動判定に関する研究",
      en: "Research: Study on Behavior Determination Using RGB Camera",
    },
  },
  {
    id: "yamaguchi-r5",
    name: "山口 謙志朗",
    nameEn: "Kenshiro Yamaguchi",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた分娩前の牛の特徴抽出に関する研究",
      en: "Research: Study on Feature Extraction of Pre-Calving Cows Using Image Processing Technology",
    },
  },
  {
    id: "shimizu-r5",
    name: "清水 祐一朗",
    nameEn: "Yuichiro Shimizu",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた耳標番号による牛の個体識別",
      en: "Research: Cattle Identification by Ear Tag Number Using Image Processing Technology",
    },
  },
  {
    id: "ishikawa-r5",
    name: "石川 太一",
    nameEn: "Taichi Ishikawa",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：オプティカルフローと機械学習を用いた複数牛の反芻識別に関する研究",
      en: "Research: Study on Rumination Identification of Multiple Cattle Using Optical Flow and Machine Learning",
    },
  },
  {
    id: "shiihara-r5",
    name: "椎原 陽",
    nameEn: "Akira Shiihara",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2023",
    academicYear: "令和5年度",
    academicYearEn: "2023 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：3Dカメラを用いた歩行中の牛の個体識別に関する研究",
      en: "Research: Study on Individual Identification of Walking Cattle Using 3D Camera",
    },
  },

  // ========= 令和4年度 =========
  // 修士課程
  {
    id: "kirihara-r4",
    name: "桐原 拓希",
    nameEn: "Takuki Kirihara",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究",
      en: "Research: Study on Behavior Monitoring for Calf Health Management Using Image Processing Technology",
    },
  },
  {
    id: "yamashiro-r4",
    name: "山城 克敏",
    nameEn: "Katsutoshi Yamashiro",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：パーキンソン病における動画の解析による指タップの症候学的な意義の解明",
      en: "Research: Elucidation of the Semiological Significance of Finger Tapping by Video Analysis in Parkinson's Disease",
    },
  },
  {
    id: "nishiyama-r4",
    name: "西山 孟人",
    nameEn: "Taketo Nishiyama",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討",
      en: "Research: Study on Early Detection of Otitis Media in Calves Using RGB Camera and Thermography Camera",
    },
  },
  {
    id: "tanno-r4",
    name: "丹野 龍晟",
    nameEn: "Ryusei Tanno",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた歩行情報の数値化に関する研究",
      en: "Research: Study on Quantification of Walking Information Using Image Processing Technology",
    },
  },
  {
    id: "ikehata-r4",
    name: "池畑 勇威",
    nameEn: "Takei Ikehata",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の耳標認識に関する研究",
      en: "Research: Study on Cattle Ear Tag Recognition Using Image Processing Technology",
    },
  },
  {
    id: "tsukuba-r4",
    name: "筑波 真矢",
    nameEn: "Shinya Tsukuba",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究",
      en: "Research: Study on BCS Evaluation of Walking Dairy Cows Using 3D Camera",
    },
  },
  {
    id: "takeyoshi-r4",
    name: "武吉 慧史朗",
    nameEn: "Keishiro Takeyoshi",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2022",
    academicYear: "令和4年度",
    academicYearEn: "2022 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた乳牛の移動情報による跛行検知",
      en: "Research: Lameness Detection Based on Movement Information of Dairy Cows Using Image Processing Technology",
    },
  },

  // ========= 令和3年度 =========
  // 博士課程
  {
    id: "swezarmaw-r3",
    name: "Swe Zar Maw",
    nameEn: "Swe Zar Maw",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
      en: "Research: A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model",
    },
  },

  // 修士課程
  {
    id: "sumyatnoe-r3",
    name: "SuMyatNoe",
    nameEn: "SuMyatNoe",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：Cow Estrus Detection and Tracking based on Image Technology with the Enforcement of Deep Learning Methods",
      en: "Research: Cow Estrus Detection and Tracking based on Image Technology with the Enforcement of Deep Learning Methods",
    },
  },
  {
    id: "matsuoka-r3",
    name: "松岡 拓夢",
    nameEn: "Takumu Matsuoka",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の個体識別に関する研究",
      en: "Research: Study on Cattle Individual Identification Using Image Processing Technology",
    },
  },

  // 学士課程
  {
    id: "kamahori-r3",
    name: "釜堀 慶次郎",
    nameEn: "Keijiro Kamahori",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：歩行動画による高齢者の転倒リスク有無の判別に関する研究",
      en: "Research: Study on Discrimination of Fall Risk in the Elderly Using Walking Videos",
    },
  },
  {
    id: "onitsuka-r3",
    name: "鬼塚 翼",
    nameEn: "Tsubasa Onitsuka",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の跛行検出に関する研究",
      en: "Research: Study on Lameness Detection in Cattle Using Image Processing Technology",
    },
  },
  {
    id: "goto-r3",
    name: "後藤 逸兵",
    nameEn: "Ippei Goto",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：3Dカメラを用いた牛の個体識別に関する研究",
      en: "Research: Study on Cattle Individual Identification Using 3D Camera",
    },
  },
  {
    id: "yamada-r3",
    name: "山田 隆人",
    nameEn: "Takato Yamada",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：深層学習を用いた野生馬の自動個体識別に関する研究",
      en: "Research: Study on Automatic Individual Identification of Wild Horses Using Deep Learning",
    },
  },
  {
    id: "nakatomi-r3",
    name: "中富 武蔵",
    nameEn: "Musashi Nakatomi",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：3Dカメラを使用したベッド上の人の姿勢推定の研究",
      en: "Research: Study on Posture Estimation of People on Bed Using 3D Camera",
    },
  },
  {
    id: "watanabe-r3",
    name: "渡邉 健太",
    nameEn: "Kenta Watanabe",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の行動認識に関する研究",
      en: "Research: Study on Behavior Recognition of Cattle Using Image Processing Technology",
    },
  },
  {
    id: "yano-r3",
    name: "矢野 夢騎",
    nameEn: "Yuki Yano",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：カメラによるマスク着用と手指消毒の検出に関する研究",
      en: "Research: Study on Detection of Mask Wearing and Hand Disinfection Using Camera",
    },
  },
  {
    id: "takano-r3",
    name: "髙野 湧平",
    nameEn: "Yuuhei Takano",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2021",
    academicYear: "令和3年度",
    academicYearEn: "2021 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：牛の後部画像を用いた個体識別に関する研究",
      en: "Research: Study on Individual Identification Using Rear Images of Cattle",
    },
  },

  // ========= 令和2年度 =========
  // 博士課程
  {
    id: "sumi-r2",
    name: "須見 公祐",
    nameEn: "Kosuke Sumi",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：牛の分娩監視システムに関する研究",
      en: "Research: Study on Calving Monitoring System for Cattle",
    },
  },

  // 修士課程
  {
    id: "misawa-r2",
    name: "三澤 周平",
    nameEn: "Shuhei Misawa",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：牛の耳標を用いた牛の個体識別に関する研究",
      en: "Research: Study on Cattle Individual Identification Using Ear Tags",
    },
  },
  {
    id: "akagi-r2",
    name: "赤木 裕哉",
    nameEn: "Yuya Akagi",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた高齢者の行動認識に関する研究",
      en: "Research: Study on Behavior Recognition of the Elderly Using Image Processing Technology",
    },
  },
  {
    id: "otsuka-r2",
    name: "大塚 史範",
    nameEn: "Fuminori Otsuka",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：カメラを用いた牛舎内の牛の摂食行動検知に関する研究",
      en: "Research: Study on Detection of Feeding Behavior of Cattle in Barns Using Camera",
    },
  },

  // 学士課程
  {
    id: "inoue-r2",
    name: "井上 翔斗",
    nameEn: "Shoto Inoue",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：工場の作業効率化のための作業グループ検出に関する研究",
      en: "Research: Study on Work Group Detection for Work Efficiency Improvement in Factories",
    },
  },
  {
    id: "haruyama-r2",
    name: "春山 剛瑠",
    nameEn: "Takuru Haruyama",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：歩行動画によるパーキンソン病の診断に関する研究",
      en: "Research: Study on Diagnosis of Parkinson's Disease Using Walking Videos",
    },
  },
  {
    id: "kawagoe-r2",
    name: "川越 悠聖",
    nameEn: "Yusei Kawagoe",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：牛の顔画像による個体識別に関する研究",
      en: "Research: Study on Individual Identification Using Facial Images of Cattle",
    },
  },
  {
    id: "hidaka-r2",
    name: "日高 一生",
    nameEn: "Issei Hidaka",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：工場の作業効率化のための作業員追跡に関する研究",
      en: "Research: Study on Worker Tracking for Work Efficiency Improvement in Factories",
    },
  },
  {
    id: "fukuda-r2",
    name: "福田 大将",
    nameEn: "Hiroki Fukuda",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：カメラを用いた乳用牛の跛行検知に関する研究",
      en: "Research: Study on Lameness Detection in Dairy Cattle Using Camera",
    },
  },
  {
    id: "motomura-r2",
    name: "本村 優弥",
    nameEn: "Yuya Motomura",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛領域抽出に関する研究",
      en: "Research: Study on Cattle Region Extraction Using Image Processing Technology",
    },
  },
  {
    id: "hayashida-r2",
    name: "林田 高典",
    nameEn: "Takanori Hayashida",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2020",
    academicYear: "令和2年度",
    academicYearEn: "2020 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：手の変位量から得られた各種信号をもとにした振戦の重症度評価",
      en: "Research: Severity Evaluation of Tremor Based on Various Signals Obtained from Hand Displacement",
    },
  },

  // ========= 令和元年度 =========
  // 博士課程
  {
    id: "chonilarphyo-h31",
    name: "Cho Nilar Phyo",
    nameEn: "Cho Nilar Phyo",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
      en: "Research: Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－",
    },
  },
  {
    id: "swenwehtun-h31",
    name: "Swe Nwe Nwe Htun",
    nameEn: "Swe Nwe Nwe Htun",
    isAlumni: true,
    program: "doctoral",
    degreeType: "doctor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：A Study on Detecting Abnormal Events to Support Independent Living",
      en: "Research: A Study on Detecting Abnormal Events to Support Independent Living",
    },
  },

  // 修士課程
  {
    id: "kono-h31",
    name: "河野 綜二郎",
    nameEn: "Sojiro Kono",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：距離画像による牛の骨格点に基づくBCS予測に関する研究",
      en: "Research: Study on BCS Prediction Based on Skeletal Points of Cattle Using Depth Images",
    },
  },
  {
    id: "mizobuchi-h31",
    name: "溝渕 翼",
    nameEn: "Tsubasa Mizobuchi",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：測域センサとビデオカメラを用いた牛の発情行動検知及び追跡に関する研究",
      en: "Research: Study on Detection and Tracking of Estrus Behavior in Cattle Using LiDAR Sensor and Video Camera",
    },
  },
  {
    id: "mitsui-h31",
    name: "三井 優一",
    nameEn: "Yuichi Mitsui",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：振戦分析を用いた病名診断と重症度測定に関する研究",
      en: "Research: Study on Disease Diagnosis and Severity Measurement Using Tremor Analysis",
    },
  },
  {
    id: "morimoto-h31",
    name: "森本 健宏",
    nameEn: "Takehiro Morimoto",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：悪環境での感染エビの検出に関する研究",
      en: "Research: Study on Detection of Infected Shrimp in Adverse Environments",
    },
  },
  {
    id: "myatthiriwai-h31",
    name: "Myat Thiri Wai",
    nameEn: "Myat Thiri Wai",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：Table-based Handwritten Character Recognition in Basic Education",
      en: "Research: Table-based Handwritten Character Recognition in Basic Education",
    },
  },
  {
    id: "nannhwankhan-h31",
    name: "Nann Hwan Khan",
    nameEn: "Nann Hwan Khan",
    isAlumni: true,
    program: "masters",
    degreeType: "master",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：The Emotion Analysis of Twitter Users on Natural Disasters",
      en: "Research: The Emotion Analysis of Twitter Users on Natural Disasters",
    },
  },

  // 学士課程
  {
    id: "hatto-h31",
    name: "八藤 拓己",
    nameEn: "Takumi Hatto",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いたパーキンソン病静止時振戦の重症度測定に関する研究",
      en: "Research: Study on Severity Measurement of Parkinson's Disease Resting Tremor Using Image Processing Technology",
    },
  },
  {
    id: "kashida-h31",
    name: "柏田 佳佑",
    nameEn: "Keisuke Kashida",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：Kinectセンサーを用いたパーキンソン病の早期発見のための特徴量抽出に関する研究",
      en: "Research: Study on Feature Extraction for Early Detection of Parkinson's Disease Using Kinect Sensor",
    },
  },
  {
    id: "tomaru-h31",
    name: "戸丸 俊平",
    nameEn: "Shunpei Tomaru",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：牛の分娩行動時の尾の挙上持続時間に関する研究",
      en: "Research: Study on Tail Raising Duration During Calving Behavior in Cattle",
    },
  },
  {
    id: "matsuoka-h31",
    name: "松岡 拓夢",
    nameEn: "Takumu Matsuoka",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理技術を用いた牛の摂食行動検知に関する研究",
      en: "Research: Study on Detection of Feeding Behavior in Cattle Using Image Processing Technology",
    },
  },
  {
    id: "fuchiwaki-h31",
    name: "渕脇 龍乃介",
    nameEn: "Ryunosuke Fuchiwaki",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：3次元カメラと画像処理技術を用いた牛の個体識別に関する研究",
      en: "Research: Study on Individual Identification of Cattle Using 3D Camera and Image Processing Technology",
    },
  },
  {
    id: "seike-h31",
    name: "清家 瑞紀",
    nameEn: "Mizuki Seike",
    isAlumni: true,
    program: "bachelor",
    degreeType: "bachelor",
    graduationYear: "2019",
    academicYear: "令和元年度",
    academicYearEn: "2019 Academic Year",
    image: "/images/no_image.png",
    researchTopic: {
      ja: "研究内容：画像処理を用いたホワイトスポット病のクルマエビ検知に関する研究",
      en: "Research: Study on Detection of White Spot Disease in Shrimp Using Image Processing",
    },
  },
];

// 全メンバーを統合した配列（完全版）
export const allCompleteUnifiedMembers: UnifiedMember[] = [
  ...unifiedFacultyMembers,
  ...unifiedCurrentStudents,
  ...completeUnifiedAlumniMembers,
];

// フィルタリング関数（完全版）
export function getCompleteActiveMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter((member) => !member.isAlumni);
}

export function getCompleteAlumniMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter((member) => member.isAlumni);
}

export function getCompleteFacultyMembers(): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.program === "faculty" && !member.isAlumni
  );
}

export function getCompleteStudentsByProgram(
  program: "doctoral" | "masters" | "bachelor"
): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.program === program && !member.isAlumni
  );
}

export function getCompleteAlumniByYear(
  academicYear: string,
  allMember: UnifiedMember
): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (allMember) => allMember.isAlumni && allMember.academicYear === academicYear
  );
}

export function getCompleteAlumniByDegree(
  degreeType: "doctor" | "master" | "bachelor"
): UnifiedMember[] {
  return allCompleteUnifiedMembers.filter(
    (member) => member.isAlumni && member.degreeType === degreeType
  );
}

// 卒業年度のリストを取得
export function getAvailableAcademicYears(): string[] {
  const years = completeUnifiedAlumniMembers
    .map((member) => member.academicYear)
    .filter((year): year is string => year !== undefined);
  return [...new Set(years)].sort((a, b) => {
    // 令和年度での並び替え
    const getYearNumber = (year: string): number => {
      if (year === "令和元年度") return 1;
      const match = year.match(/令和(\d+)年度/);
      return match ? parseInt(match[1]) : 0;
    };

    const aYear = getYearNumber(a);
    const bYear = getYearNumber(b);
    return bYear - aYear; // 降順
  });
}
