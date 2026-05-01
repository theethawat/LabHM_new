"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getImagePath, getLinkPath } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPage() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    title: {
      ja: "お問い合わせ",
      en: "Contact",
    },
    name: {
      ja: "お名前",
      en: "Name",
    },
    organization: {
      ja: "所属組織",
      en: "Organization",
    },
    email: {
      ja: "メールアドレス",
      en: "Email Address",
    },
    phone: {
      ja: "電話番号",
      en: "Phone Number",
    },
    subject: {
      ja: "件名",
      en: "Subject",
    },
    message: {
      ja: "お問い合わせ内容",
      en: "Message",
    },
    required: {
      ja: "必須",
      en: "Required",
    },
    submit: {
      ja: "送信する",
      en: "Submit",
    },
    access: {
      ja: "アクセス",
      en: "Access",
    },
    address: {
      ja: "〒889-2155 宮崎県宮崎市学園木花台西1-1 工学部E棟",
      en: "〒889-2155 1-1 Gakuen Kibanadai Nishi, Miyazaki City, Miyazaki Prefecture, Faculty of Engineering Building E",
    },
    accessMethods: {
      ja: [
        "JR日豊本線 宮崎大学前駅 より 徒歩約10分",
        "宮崎交通バス 宮崎大学前バス停 より 徒歩約5分",
        "宮崎空港 より 車で約15分",
      ],
      en: [
        "About 10 minutes walk from JR Nippo Main Line Miyazaki University Station",
        "About 5 minutes walk from Miyazaki Kotsu Bus Miyazaki University Bus Stop",
        "About 15 minutes by car from Miyazaki Airport",
      ],
    },
  };

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      organization: formData.get("organization") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // 静的エクスポート環境かどうかを確認
    const isStaticExport =
      typeof window !== "undefined" &&
      window.location.pathname.includes("/imagelab/");

    if (isStaticExport) {
      // 静的サイトの場合はmailtoリンクを使用
      const mailtoBody = `
お名前: ${data.name}
所属組織: ${data.organization || "未記入"}
メールアドレス: ${data.email}
電話番号: ${data.phone || "未記入"}

お問い合わせ内容:
${data.message}`;

      const mailtoLink = `mailto:thithi@miyazaki-u.ac.jp?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(mailtoBody)}`;

      try {
        window.location.href = mailtoLink;

        // ユーザーに説明を表示
        setTimeout(() => {
          alert(`メールクライアントを起動しています。

もしメールクライアントが開かない場合は、以下の情報を手動でコピーしてメールを送信してください：

宛先: thithi@miyazaki-u.ac.jp
件名: ${data.subject}

内容:
${mailtoBody}`);
        }, 1000);
      } catch (error) {
        console.error("Mailto error:", error);
        alert(`メールクライアントの起動に失敗しました。
以下の情報を手動でコピーしてメールを送信してください：

宛先: thithi@miyazaki-u.ac.jp
件名: ${data.subject}

内容:
${mailtoBody}`);
      }
    } else {
      // 開発環境では通常のAPI送信を試行
      try {
        const response = await fetch(getLinkPath("/api/contact"), {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("送信が完了しました。ありがとうございます。");
          e.currentTarget.reset();
        } else {
          throw new Error("送信に失敗しました");
        }
      } catch (error) {
        console.error("Contact form error:", error);
        alert("送信に失敗しました。直接メールでお問い合わせください。");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ヘッダーセクション */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-0">
            <div className="relative w-full max-w-md mx-auto h-16 mb-4">
              {" "}
              {/* ロゴサイズを元に戻し、マージン調整 */}
              <Image
                src={getImagePath("/images/logo_contact.png")}
                alt={language === "ja" ? "お問い合わせ" : "Contact"}
                fill
                className="object-contain" /* drop-shadow-lg を削除 */
                priority
              />
            </div>
            <p className="text-lg">{translations.title[language]}</p>{" "}
            {/* text-gray-600 を削除 */}
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <div className="flex-grow pb-16">
        {" "}
        {/* 下のパディングのみ追加 */}
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <form
              className="space-y-6"
              action="/api/contact"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {translations.name[language]}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">
                    {translations.organization[language]}
                  </Label>
                  <Input id="organization" name="organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    {translations.email[language]}{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{translations.phone[language]}</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  {translations.subject[language]}{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Input id="subject" name="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {translations.message[language]}{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>

              <div className="text-center">
                <Button type="submit" className="px-8" disabled={isSubmitting}>
                  {translations.submit[language]}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* アクセス情報セクション */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {translations.access[language]}
            </h2>
            <div className="w-full h-0.5 bg-gray-300"></div>
          </div>

          <div className="space-y-8">
            {/* 住所情報とアクセス方法 */}
            <div className="text-left">
              <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed mb-4">
                {translations.address[language]}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {translations.accessMethods[language].map((method, index) => (
                  <li key={index}>• {method}</li>
                ))}
              </ul>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1464.6325901434873!2d131.41278741911535!3d31.82849052554477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3538c850b44cbba5%3A0x8f5e37f0338b2dac!2z5a6u5bSO5aSn5a2mIOacqOiKseOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1748318199198!5m2!1sja!2sjp"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
