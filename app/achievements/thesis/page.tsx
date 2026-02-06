import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// 論文データの型定義
type Paper = {
  title: string;
  author?: string;
};

type YearSection = {
  year: string;
  papers: Paper[];
};

type DegreeSection = {
  degree: string;
  years: YearSection[];
};

// Originated by Nishimoto Kun on from journals page
// 論文データ
const journalPapers: DegreeSection[] = [
  {
    degree: "博士（工学）",
    years: [
      {
        year: "令和3年度",
        papers: [
          {
            title:
              'Swe Zar Maw, "A Study to Predict Calving Time in Dairy Cows Using Image Processing Techniques and Stochastic Model"',
          },
        ],
      },
      {
        year: "令和2年度",
        papers: [
          {
            title: '須見 公祐, "牛の分娩監視システムに関する研究"',
          },
        ],
      },
      {
        year: "令和元年度（平成31年度）",
        papers: [
          {
            title:
              'Cho Nilar Phyo, "Human Action Recognition Using Depth Camera －Deep Learning Based Skeletal Joints and Human-Object Interactions－"',
          },
          {
            title:
              'Swe Nwe Nwe Htun, "A Study on Detecting Abnormal Events to Support Independent Living"',
          },
        ],
      },
    ],
  },
  {
    degree: "修士（工学）",
    years: [
      {
        year: "令和5年度",
        papers: [
          {
            title:
              "永野 流磨, &quot;Flaskを用いたファブリー病の振戦運動評価の研究&quot;",
          },
          {
            title:
              "高岡 柚貴, &quot;RGBカメラによる牛の歩行動画を用いた個体識別に関する研究&quot;",
          },
          {
            title:
              "山元 太陽, &quot;RGBカメラを用いた行動判定に関する研究&quot;",
          },
          {
            title:
              "山口 謙志朗, &quot;画像処理技術を用いた分娩前の牛の特徴抽出に関する研究&quot;",
          },
          {
            title:
              "清水 祐一朗, &quot;画像処理技術を用いた耳標番号による牛の個体識別&quot;",
          },
          {
            title:
              "石川 太一, &quot;オプティカルフローと機械学習を用いた複数牛の反芻識別に関する研究&quot;",
          },
          {
            title:
              "椎原 陽, &quot;3Dカメラを用いた歩行中の牛の個体識別に関する研究&quot;",
          },
        ],
      },
      {
        year: "令和4年度",
        papers: [
          {
            title:
              '桐原 拓希, "画像処理技術を用いた子牛の健康管理のための行動モニタリングに関する研究"',
          },
          {
            title:
              '山城 克敏, "パーキンソン病における動画の解析による指タップの症候学的な意義の解明"',
          },
          {
            title:
              '西山 孟人, "RGBカメラとサーモグラフィーカメラを用いた子牛の中耳炎の早期発見に関する検討"',
          },
          {
            title:
              '丹野 龍晟, "画像処理技術を用いた歩行情報の数値化に関する研究"',
          },
          {
            title: '池畑 勇威, "画像処理技術を用いた牛の耳標認識に関する研究"',
          },
          {
            title:
              '筑波 真矢, "3Dカメラを用いた歩行中の乳牛のBCS評価に関する研究"',
          },
          {
            title:
              '武吉 慧史朗, "画像処理技術を用いた乳牛の移動情報による跛行検知"',
          },
        ],
      },
      {
        year: "令和3年度",
        papers: [
          {
            title:
              '釜堀 慶次郎, "歩行動画による高齢者の転倒リスク有無の判別に関する研究"',
          },
          {
            title: '鬼塚 翼, "画像処理技術を用いた牛の跛行検出に関する研究"',
          },
          {
            title: '後藤 逸兵, "3Dカメラを用いた牛の個体識別に関する研究"',
          },
          {
            title:
              '山田 隆人, "深層学習を用いた野生馬の自動個体識別に関する研究"',
          },
          {
            title:
              '中富 武蔵, "3Dカメラを使用したベッド上の人の姿勢推定の研究"',
          },
          {
            title: '渡邉 健太, "画像処理技術を用いた牛の行動認識に関する研究"',
          },
          {
            title:
              '矢野 夢騎, "カメラによるマスク着用と手指消毒の検出に関する研究"',
          },
          {
            title: '髙野 湧平, "牛の後部画像を用いた個体識別に関する研究"',
          },
        ],
      },
    ],
  },
];

export default function ThesisPage() {
  return (
    <div>
      {/* ヘッダーセクション */}
      <section className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">論文誌</h1>
            <p className="text-xl text-gray-600">研究室の論文発表</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="博士（工学）" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {journalPapers.map((section) => (
                  <TabsTrigger key={section.degree} value={section.degree}>
                    {section.degree}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {journalPapers.map((section) => (
              <TabsContent
                key={section.degree}
                value={section.degree}
                className="mt-0"
              >
                <div className="space-y-8">
                  {section.years.map((yearSection) => (
                    <div key={yearSection.year}>
                      <h2 className="text-2xl font-bold mb-4">
                        {yearSection.year}
                      </h2>
                      <ul className="space-y-2 list-disc pl-5">
                        {yearSection.papers.map((paper, index) => (
                          <li key={index} className="text-gray-700">
                            {paper.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
